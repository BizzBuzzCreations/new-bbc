import { PAGE_CONTENT_REGISTRY, OUTSIDE_LOCATION_REGISTRY } from "@/lib/pageContentRegistry";
import { INDUSTRY_CONTENT_REGISTRY } from "@/lib/industryContentRegistry";
import { SERVICE_PAGE_CONTENT } from "@/lib/servicePageContent";
import { SUB_SERVICE_PAGE_CONTENT } from "@/lib/subServicePageContent";
import { PAGE_PATHS } from "@/lib/pagePaths";

// SERVER ONLY. Turns every page's shipped default copy (the registries that
// also drive the admin "Website Content" tab) into plain-text knowledge
// chunks, so BizzBee can answer from ANY text on those pages — hero copy,
// team members, process steps, job perks, industry capabilities, FAQs, etc.
// — without a hand-written entry per page.
//
// Image / link / icon fields are skipped; only readable copy is kept.

const SKIP_KEY = /(image|img|photo|video|icon|href|link|url|slug|src|poster|logo|avatar|color|bg|alt)/i;
const MAX_CHUNK = 800;

const clean = (s) =>
  String(s)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const isCopy = (s) => {
  const t = clean(s);
  if (!t) return false;
  if (/^(https?:|mailto:|tel:|\/)\S*$/.test(t)) return false; // bare path / URL
  if (/^[\w-]+\.(png|jpe?g|webp|gif|svg|mp4|webm)$/i.test(t)) return false;
  return true;
};

// Collects readable strings from a default value. Objects become
// "key: value" style lines only for their string leaves, joined per item.
function collect(value, out, qas) {
  if (typeof value === "string") {
    if (isCopy(value)) out.push(clean(value));
    return;
  }
  if (Array.isArray(value)) {
    for (const v of value) collect(v, out, qas);
    return;
  }
  const plain = value && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype;
  if (plain) {
    if (typeof value.question === "string" && typeof value.answer === "string") {
      qas.push({ question: clean(value.question), answer: clean(value.answer) });
    }
    const parts = [];
    for (const [k, v] of Object.entries(value)) {
      if (SKIP_KEY.test(k)) continue;
      if (typeof v === "string") {
        if (isCopy(v)) parts.push(clean(v));
      } else if (v && typeof v === "object") {
        collect(v, parts, qas);
      }
    }
    // One line per object (e.g. a team member: "Name. Role. Bio.").
    if (parts.length) out.push(parts.join(". ").replace(/\.\s*\./g, "."));
  }
}

function pack(lines) {
  const chunks = [];
  let cur = "";
  for (const line of lines) {
    if (cur && cur.length + line.length + 1 > MAX_CHUNK) {
      chunks.push(cur);
      cur = "";
    }
    cur += (cur ? " " : "") + line;
  }
  if (cur) chunks.push(cur);
  return chunks;
}

// Returns [{ id, title, url, text, qa }] for every registry page.
export function flattenRegistryPages() {
  const result = [];
  const pages = [...PAGE_CONTENT_REGISTRY, ...INDUSTRY_CONTENT_REGISTRY, ...OUTSIDE_LOCATION_REGISTRY];
  for (const page of pages) {
    const url = PAGE_PATHS[page.key] || "/";
    for (const section of page.sections || []) {
      if (/seo|meta/i.test(section.key)) continue; // SEO fields aren't page copy
      const lines = [];
      const qas = [];
      for (const field of section.fields || []) {
        if (SKIP_KEY.test(field.key) && field.type !== "list") continue;
        if (field.type === "image" || field.type === "video") continue;
        if (page.key === "home" && field.key === "faqItems") continue; // added separately in knowledge.js
        collect(field.default, lines, qas);
      }
      const title = `${page.label}: ${section.label}`;
      pack(lines).forEach((text, i) =>
        result.push({ id: `page-${page.key}-${section.key}-${i}`, title, url, text, qa: null }),
      );
      qas.forEach((qa, i) =>
        result.push({
          id: `page-${page.key}-${section.key}-faq-${i}`,
          title: qa.question,
          url,
          text: `${qa.question} ${qa.answer}`,
          qa,
        }),
      );
    }
  }
  return result;
}

const HUB_SLUGS = [
  "bpo-services",
  "web-development",
  "search-engine-optimization",
  "social-media-marketing",
  "paid-marketing",
  "ai-solutions",
  "marketing-automation",
  "business-consultancy",
];

// Service hub pages and all sub-service pages: every readable field of their
// content modules (breakdowns, differentiators, roadmaps, FAQs, ...), not
// just the hero copy.
export function flattenServicePages(hubLabels) {
  const result = [];
  const emit = (idBase, title, url, data) => {
    const lines = [];
    const qas = [];
    for (const [k, v] of Object.entries(data || {})) {
      if (SKIP_KEY.test(k) || /^(faqs)$/.test(k)) continue;
      collect(v, lines, qas);
    }
    for (const q of data?.faqs || []) qas.push({ question: clean(q.question), answer: clean(q.answer) });
    pack(lines).forEach((text, i) => result.push({ id: `${idBase}-${i}`, title, url, text, qa: null }));
    qas.forEach((qa, i) =>
      result.push({ id: `${idBase}-faq-${i}`, title: qa.question, url, text: `${qa.question} ${qa.answer}`, qa }),
    );
  };
  for (const [slug, data] of Object.entries(SERVICE_PAGE_CONTENT)) {
    emit(`svc-${slug}`, hubLabels[slug] || slug, `/${slug}`, data);
  }
  for (const [key, data] of Object.entries(SUB_SERVICE_PAGE_CONTENT)) {
    const hub = HUB_SLUGS.find((x) => key.startsWith(`${x}-`));
    if (!hub) continue;
    const label = clean(data.label || data.heroTitle || key);
    emit(`subsvc-${key}`, `${label} (${hubLabels[hub] || hub})`, `/${hub}/${key.slice(hub.length + 1)}`, data);
  }
  return result;
}
