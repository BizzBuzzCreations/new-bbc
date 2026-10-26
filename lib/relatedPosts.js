import connectDB from "@/db/connect";
import Blog from "@/models/blog";
import { plainText, clipText } from "@/lib/authors";

// What to read next, at the end of a blog post: up to `limit` suggested
// articles — the same topic (category) first, then the newest others to fill
// the row — and the previous / next article by date. Light rows only (no
// content); reading time comes from the content's length, read in the
// database (~7.5 characters per word of HTML, 200 words a minute).
// Server-only.
const PROJECT = { title: 1, slug: 1, excerpt: 1, featuredImage: 1, category: 1, author: 1, publishedAt: 1, createdAt: 1, len: { $strLenCP: { $ifNull: ["$content", ""] } } };

const shape = (r) => ({
  slug: r.slug,
  title: r.title,
  excerpt: clipText(plainText(r.excerpt), 150),
  featuredImage: r.featuredImage || "",
  category: r.category || "",
  author: r.author || "",
  publishedAt: new Date(r.publishedAt || r.createdAt).toISOString(),
  minutes: Math.max(1, Math.round((r.len || 0) / 7.5 / 200)),
});

export async function getSuggestedPosts(post, limit = 3) {
  try {
    await connectDB();
    const base = { status: "published", slug: { $ne: post.slug } };
    const same = post.category
      ? await Blog.aggregate([{ $match: { ...base, category: post.category } }, { $sort: { publishedAt: -1 } }, { $limit: limit }, { $project: PROJECT }])
      : [];
    let rows = same;
    if (rows.length < limit) {
      const have = new Set([post.slug, ...rows.map((r) => r.slug)]);
      const more = await Blog.aggregate([{ $match: { status: "published", slug: { $nin: [...have] } } }, { $sort: { publishedAt: -1 } }, { $limit: limit - rows.length }, { $project: PROJECT }]);
      rows = [...rows, ...more];
    }
    return rows.map(shape);
  } catch (error) {
    console.error("Get suggested posts failed:", error);
    return [];
  }
}

export async function getNeighbourPosts(post) {
  try {
    await connectDB();
    const at = post.publishedAt ? new Date(post.publishedAt) : null;
    if (!at) return { prev: null, next: null };
    const [prev] = await Blog.aggregate([{ $match: { status: "published", publishedAt: { $lt: at } } }, { $sort: { publishedAt: -1 } }, { $limit: 1 }, { $project: PROJECT }]);
    const [next] = await Blog.aggregate([{ $match: { status: "published", publishedAt: { $gt: at } } }, { $sort: { publishedAt: 1 } }, { $limit: 1 }, { $project: PROJECT }]);
    return { prev: prev ? shape(prev) : null, next: next ? shape(next) : null };
  } catch (error) {
    console.error("Get neighbour posts failed:", error);
    return { prev: null, next: null };
  }
}

// ~200 words a minute, for the post's own reading time
export const readingMinutes = (html) => Math.max(1, Math.round(String(html || "").replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length / 200));
