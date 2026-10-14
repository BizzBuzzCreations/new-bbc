import mongoose from "mongoose";
import dns from "node:dns/promises";
import Blog from "@/models/blog";
import Job from "@/models/jobs";
import { setDynamicChunks } from "./knowledge";

// SERVER ONLY. Blog posts and job openings live in MongoDB (managed from the
// admin dashboard), so BizzBee loads them at runtime: every published blog
// post and every open position becomes searchable knowledge. The result is
// cached for a few minutes, and any failure (database down, no MONGO_URI)
// just leaves BizzBee with the static site knowledge — it never throws.
//
// Not using db/connect.js on purpose: that helper exits the whole process
// when the database is unreachable, which must never happen because of a
// chat message.

const TTL_MS = 10 * 60 * 1000;
const MAX_POSTS = 300;
const BODY_CHARS = 6000; // per post, split into ~1500-char chunks so deep content is searchable
const BODY_CHUNK = 1500;

let loadedAt = 0;
let loading = null;

const strip = (s) =>
  String(s || "")
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&(rsquo|lsquo);/g, "'")
    .replace(/&(rdquo|ldquo);/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

async function ensureConnection() {
  if (mongoose.connection.readyState === 1) return true;
  if (!process.env.MONGO_URI) return false;
  try {
    if (process.env.NODE_ENV === "development") {
      dns.setServers(["1.1.1.1", "8.8.8.8"]);
      dns.setDefaultResultOrder("ipv4first");
    }
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    return mongoose.connection.readyState === 1;
  } catch {
    return false;
  }
}

async function load() {
  if (!(await ensureConnection())) return;
  const chunks = [];

  const totalPublished = await Blog.countDocuments({ status: "published" });
  const posts = await Blog.find({ status: "published" })
    .select("title slug excerpt content category tags primaryKeyword secondaryKeywords author publishedAt faqs")
    .sort({ publishedAt: -1 })
    .limit(MAX_POSTS)
    .lean();

  for (const p of posts) {
    const url = `/blog/${p.slug}`;
    const body = strip(p.content).slice(0, BODY_CHARS);
    const keywords = [p.category, ...(p.tags || []), p.primaryKeyword, ...(p.secondaryKeywords || [])]
      .filter(Boolean)
      .join(" ");
    const date = p.publishedAt ? new Date(p.publishedAt).toISOString().slice(0, 10) : "";
    chunks.push({
      id: `blog-${p.slug}`,
      title: `Blog: ${p.title}`,
      url,
      text: `${p.title}. Blog post by ${p.author || "BizzBuzz Creations"}${date ? ` (published ${date})` : ""} in the ${p.category || "general"} category. ${strip(p.excerpt)} ${body.slice(0, BODY_CHUNK)}`,
      keywords: `blog article post ${keywords}`,
      qa: null,
    });
    // Rest of the article, as extra chunks of the same post.
    for (let off = BODY_CHUNK, n = 1; off < body.length; off += BODY_CHUNK, n++) {
      chunks.push({
        id: `blog-${p.slug}-part-${n}`,
        title: `Blog: ${p.title}`,
        url,
        text: body.slice(off, off + BODY_CHUNK),
        keywords: `blog article ${keywords}`,
        qa: null,
      });
    }
    for (const [i, f] of (p.faqs || []).entries()) {
      const answer = strip(f.answer);
      chunks.push({
        id: `blog-${p.slug}-faq-${i}`,
        title: f.question,
        url,
        text: `${f.question} ${answer}`,
        keywords: "",
        qa: { question: strip(f.question), answer },
      });
    }
  }

  if (posts.length) {
    const fmt = (d) =>
      d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "";
    const [first, ...rest] = posts;
    const q = "Which is the latest blog published by BizzBuzz Creations?";
    const answer = [
      `The latest blog is **${first.title}**${first.publishedAt ? ` — published on ${fmt(first.publishedAt)}` : ""}.`,
      "",
      `- **Category:** ${first.category || "General"}`,
      `- **Author:** ${first.author || "BizzBuzz Creations"}`,
      "",
      `[Read the article](/blog/${first.slug})`,
      ...(rest.length
        ? ["", "**Other recent posts:**", ...rest.slice(0, 4).map((p) => `- [${p.title}](/blog/${p.slug})${p.publishedAt ? ` (${fmt(p.publishedAt)})` : ""}`)]
        : []),
    ].join("\n");
    chunks.push({
      id: "blog-latest",
      title: "Latest blog published",
      url: `/blog/${first.slug}`,
      text: `${q} ${answer}`,
      keywords: "latest newest recent new last latest blog most recent article post published today",
      qa: { question: q, answer },
    });
    const latest = posts.slice(0, 15).map((p) => `${p.title} (/blog/${p.slug})`).join("; ");
    const counts = new Map();
    for (const p of posts) if (p.category) counts.set(p.category, (counts.get(p.category) || 0) + 1);
    const categories = [...counts].sort((a, z) => z[1] - a[1]).map(([c, n]) => `${c} (${n})`).join(", ");
    chunks.push({
      id: "blog-index",
      title: "Blog: latest articles and topics",
      url: "/blog",
      text: `The BizzBuzz Creations blog has ${totalPublished} published articles so far (live count). Articles per category among the most recent ${posts.length}: ${categories}. Latest articles: ${latest}.`,
      keywords: "blog articles posts latest recent new topics categories read",
      qa: null,
    });
  }

  const jobs = await Job.find({}).sort({ createdAt: -1 }).limit(60).lean();
  for (const j of jobs) {
    chunks.push({
      id: `job-${j._id}`,
      title: `Job opening: ${j.title}`,
      url: "/career#open-positions",
      text: [
        `Open position: ${j.title}.`,
        j.department && `Department: ${j.department}.`,
        j.experience && `Experience: ${j.experience}.`,
        j.location && `Location: ${j.location}.`,
        j.type && `Type: ${j.type}.`,
        strip(j.description).slice(0, 800),
      ]
        .filter(Boolean)
        .join(" "),
      keywords: "job opening vacancy hiring career position role apply recruitment",
      qa: null,
    });
  }
  const jobsQ = "Are there any job openings at BizzBuzz Creations?";
  const jobsA = jobs.length
    ? [
        `Yes — we currently have **${jobs.length} open ${jobs.length === 1 ? "role" : "roles"}**:`,
        "",
        ...jobs.slice(0, 12).map((j) => `- **${strip(j.title)}**${[j.department, j.location, j.type].filter(Boolean).length ? ` — ${[j.department, j.location, j.type].filter(Boolean).join(" · ")}` : ""}`),
        "",
        "[View Open Positions](/career#open-positions)",
      ].join("\n")
    : "There are no open roles listed right now.\n\n- **Check again:** [Open Positions](/career#open-positions)\n- **Or send your details:** [info@bizzbuzzcreations.com](mailto:info@bizzbuzzcreations.com)";
  chunks.push({
    id: "jobs-index",
    title: "Current job openings",
    url: "/career#open-positions",
    text: `${jobsQ} ${jobsA}`,
    keywords: "jobs openings vacancies hiring careers positions available apply recruitment roles open positions",
    qa: { question: jobsQ, answer: jobsA },
  });

  setDynamicChunks(chunks);
}

// Call before retrieve(); resolves quickly when the cache is fresh.
export async function refreshDynamicKnowledge() {
  if (Date.now() - loadedAt < TTL_MS) return;
  loading ||= load()
    .catch((e) => console.error("BizzBee: could not load blogs/jobs:", e?.message || e))
    .finally(() => {
      loadedAt = Date.now();
      loading = null;
    });
  await loading;
}
