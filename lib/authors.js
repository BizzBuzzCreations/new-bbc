import he from "he";
import connectDB from "@/db/connect";
import Blog from "@/models/blog";
import { publishDueScheduledPosts } from "@/actions/blogActions";
import { authorSlug } from "@/lib/authorSlug";

// Author profiles (/author, /author/<name>). There is no separate author
// record: an author is the name typed in the blog editor's Author field and
// the profile is built from their published posts — the name, the latest
// Author Bio they saved, their topics (categories) and their articles. Two
// spellings that make the same slug ("A. Rao" / "A Rao") are one author.
// Server-only (reads MongoDB).

const plain = (html) => he.decode(String(html || "").replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const clip = (text, max) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 40 ? cut.lastIndexOf(" ") : cut.length).replace(/[\s,;:.\-–—]+$/, "")}…`;
};

// All published posts, lightly (no content) — newest first.
async function lightPosts() {
  await connectDB();
  await publishDueScheduledPosts();
  return Blog.find({ status: "published" }).select("author authorBio category publishedAt createdAt").sort({ publishedAt: -1, createdAt: -1 }).lean();
}

function group(posts) {
  const bySlug = new Map();
  for (const p of posts) {
    const name = String(p.author || "").trim() || "BizzBuzz Creations";
    const slug = authorSlug(name);
    const date = p.publishedAt || p.createdAt;
    let a = bySlug.get(slug);
    if (!a) {
      a = { slug, names: new Map(), count: 0, latest: date, first: date, categories: new Map(), bio: "" };
      bySlug.set(slug, a);
    }
    a.names.set(name, (a.names.get(name) || 0) + 1);
    a.count += 1;
    if (date && (!a.first || date < a.first)) a.first = date;
    if (p.category) a.categories.set(p.category, (a.categories.get(p.category) || 0) + 1);
    // posts are newest first, so the first non-empty bio is the latest one
    if (!a.bio && plain(p.authorBio)) a.bio = p.authorBio;
  }
  return [...bySlug.values()].map((a) => ({
    slug: a.slug,
    // the spelling used most often
    name: [...a.names.entries()].sort((x, y) => y[1] - x[1])[0][0],
    names: [...a.names.keys()],
    count: a.count,
    bio: a.bio,
    latest: a.latest ? new Date(a.latest).toISOString() : null,
    since: a.first ? new Date(a.first).getFullYear() : null,
    categories: [...a.categories.entries()].sort((x, y) => y[1] - x[1]).map(([name, count]) => ({ name, count })),
  }));
}

// Every author, most articles first (the authors index, the sitemap).
export async function getAuthors() {
  try {
    return group(await lightPosts()).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Get authors failed:", error);
    return [];
  }
}

// One author and all their articles, or null when nobody has that slug.
// `others`: up to 4 more authors, for the "More from our team" row.
export async function getAuthor(slug) {
  try {
    const authors = group(await lightPosts());
    const author = authors.find((a) => a.slug === slug);
    if (!author) return null;
    // reading time: the content's length is read in the database (the text
    // itself isn't sent over); ~7.5 characters per word of HTML, 200 words a minute
    const rows = await Blog.aggregate([
      { $match: { status: "published", author: { $in: author.names } } },
      { $sort: { publishedAt: -1, createdAt: -1 } },
      { $project: { title: 1, slug: 1, excerpt: 1, featuredImage: 1, category: 1, publishedAt: 1, createdAt: 1, len: { $strLenCP: { $ifNull: ["$content", ""] } } } },
    ]);
    const posts = rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      excerpt: clip(plain(r.excerpt), 190),
      image: r.featuredImage || "",
      category: r.category || "",
      date: new Date(r.publishedAt || r.createdAt).toISOString(),
      minutes: Math.max(1, Math.round(r.len / 7.5 / 200)),
    }));
    const others = authors.filter((a) => a.slug !== slug).sort((a, b) => b.count - a.count).slice(0, 4);
    return { author, posts, others };
  } catch (error) {
    console.error("Get author failed:", error);
    return null;
  }
}

export { plain as plainText, clip as clipText };
