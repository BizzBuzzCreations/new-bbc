import { INDUSTRIES } from "@/lib/industriesData";
import { INDUSTRY_PAGE_CONTENT } from "@/lib/industryPageContent";
import { editDistance } from "./fuzzy";

// SERVER ONLY. Deterministic answers for "tell me about the <industry>
// industry" questions: the reply covers ONLY the industry that was asked
// about (never the list of all 15), built from that industry's own page.

// Words a visitor may use for each industry page (slug -> pattern).
const ALIASES = {
  healthcare: /\b(health ?care|hospitals?|clinics?|doctors?|medical|patients?|healthcare)\b/,
  wearables: /\b(wearables?|smart ?watch(es)?|smart ?bands?)\b/,
  fitness: /\b(fitness|gyms?|yoga|health clubs?)\b/,
  ecommerce: /\b(e-?commerce|online stores?|online shops?|online selling|d2c)\b/,
  construction: /\b(construction|builders?|contractors?|civil engineering)\b/,
  finance: /\b(finance|financial|fintech|banking|banks?|insurance|loans?|investment)\b/,
  entertainment: /\b(entertainment|films?|movies?|music|ott|production house)\b/,
  education: /\b(education|educational|schools?|colleges?|coaching|ed-?tech|universit(y|ies)|institutes?)\b/,
  events: /\b(events?|event management|weddings?|event planners?)\b/,
  manufacturing: /\b(manufacturing|manufacturers?|factory|factories|industrial)\b/,
  restaurant: /\b(restaurants?|cafes?|cafés?|food business|food industry|dining)\b/,
  travel: /\b(travel|tourism|tours?|travell?ers?|holiday|trip)\b/,
  "real-estate": /\b(real estate|realty|propert(y|ies)|realtors?|builders? and developers?)\b/,
  gaming: /\b(gaming|games?|esports?|gamers?)\b/,
  "fashion-apparel": /\b(fashion|apparel|clothing|boutiques?|garments?|clothes)\b/,
};

// Single words used for typo-tolerant matching ("gamng", "helthcare", "ecomerce").
const TERMS = {
  healthcare: ["healthcare", "hospital", "hospitals", "clinic", "clinics", "doctor", "doctors", "medical"],
  wearables: ["wearable", "wearables", "smartwatch", "smartwatches"],
  fitness: ["fitness", "gym", "gyms", "yoga"],
  ecommerce: ["ecommerce", "commerce"],
  construction: ["construction", "builder", "builders", "contractor", "contractors"],
  finance: ["finance", "financial", "fintech", "banking", "insurance"],
  entertainment: ["entertainment", "movies", "music"],
  education: ["education", "educational", "school", "schools", "college", "colleges", "coaching", "university"],
  events: ["events", "event", "wedding", "weddings"],
  manufacturing: ["manufacturing", "manufacturer", "factory"],
  restaurant: ["restaurant", "restaurants", "cafe", "cafes"],
  travel: ["travel", "tourism", "travelling", "traveling"],
  "real-estate": ["realestate", "realty", "property", "properties", "realtor"],
  gaming: ["gaming", "games", "game", "esports", "gamers"],
  "fashion-apparel": ["fashion", "apparel", "clothing", "boutique", "garments"],
};

// Everyday words that happen to sit one edit away from an industry word.
const COMMON = new Set(["even", "gave", "came", "same", "gamma", "fine", "travel's", "factor", "bank", "banks", "tour", "trip", "film", "films", "event"].filter((w) => w !== "event"));

// Typo-tolerant fallback: a query word within 1 edit (2 for long words) of an industry word.
function fuzzyHits(q) {
  const words = q.replace(/[^a-z\s]/g, " ").split(/\s+/).filter((w) => w.length >= 4);
  const found = new Set();
  for (const w of words) {
    for (const [slug, terms] of Object.entries(TERMS)) {
      for (const t of terms) {
        const limit = 1;
        if (w[0] === t[0] && !COMMON.has(w) && Math.abs(w.length - t.length) <= limit && editDistance(w, t) <= limit) found.add(slug);
      }
    }
  }
  return INDUSTRIES.filter((i) => found.has(i.slug));
}

const SKIP = /\b(price|pricing|cost|how much|quote|fees?|charges?|job|jobs|career|hire|hiring|vacancy|team|who)\b/;

const cap = (s) => String(s || "").replace(/\s+/g, " ").trim();
const cut = (s, n) => {
  const t = cap(s);
  if (t.length <= n) return t;
  const i = Math.max(t.lastIndexOf(".", n), t.lastIndexOf(",", n));
  return (i > 40 ? t.slice(0, i) : t.slice(0, n).replace(/\s\S*$/, "")).replace(/[.,;:]$/, "");
};

function industryReply(ind) {
  const page = INDUSTRY_PAGE_CONTENT[ind.slug] || {};
  const lines = [`**${ind.label} industry**`, "", cap(ind.description)];

  const who = (page.capabilities || []).map((c) => cap(c.title)).filter(Boolean).slice(0, 5);
  if (who.length) lines.push("", "**Who we help**", ...who.map((t) => `- ${t}`));

  const what = (page.serviceBreakdown || []).filter((s) => s.title).slice(0, 4);
  if (what.length) {
    lines.push(
      "",
      "**What we do**",
      ...what.map((s) => `- **${cap(s.title)}**${s.services?.length ? ` — ${s.services.slice(0, 3).join(", ")}` : ""}`),
    );
  }

  const challenges = (ind.challenges || []).slice(0, 3);
  if (challenges.length) lines.push("", "**Common challenges we solve**", ...challenges.map((c) => `- ${cut(c, 150)}`));

  lines.push("", `[Explore the ${ind.label} page](/industries/${ind.slug})`);
  return lines.join("\n");
}

const INDUSTRY_WORD = /\b(industr(y|ies)|sectors?|verticals?|niches?)\b/;
const LIST_ASK = /\b(how many|kitne|number of|total|count|which|what|list|all|kaun|kon|kya|serve|serves|work with|cater|cover|handle|deal)\b/;

// One short line per industry for the "which industries do you serve?" list (each from that industry's own description).
const BLURB = {
  healthcare: "patient trust, local SEO and appointment-focused campaigns",
  wearables: "launches, retargeting and e-commerce conversion",
  fitness: "local SEO, social content and membership lead campaigns",
  ecommerce: "SEO, paid ads and retargeting for online stores",
  construction: "qualified leads for contractors and builders",
  finance: "compliant content and lead generation that builds trust",
  entertainment: "social-first content and buzz campaigns",
  education: "enrollment-focused marketing for schools and institutes",
  events: "event promotion from awareness to ticket sales",
  manufacturing: "B2B lead generation and industrial SEO",
  restaurant: "local SEO and footfall-driven campaigns",
  travel: "destination marketing and booking-focused campaigns",
  "real-estate": "property listing marketing and local SEO",
  gaming: "player acquisition and community building",
  "fashion-apparel": "social-first content, e-commerce SEO and paid campaigns",
};

function industryListReply() {
  const bullets = INDUSTRIES.map((i) => `- [${i.label}](/industries/${i.slug}) — ${BLURB[i.slug] || cut(i.description, 70)}`);
  return [
    `We serve **${INDUSTRIES.length} industries**:`,
    "",
    ...bullets,
    "",
    "The same structured process is adapted to each industry's audience and goals. Ask me about any one of them for details, or [see all industries](/industries).",
  ].join("\n");
}

export function industryAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase();
  if (!q.trim() || q.split(/\s+/).length > 20 || SKIP.test(q)) return null;

  let hits = INDUSTRIES.filter((i) => ALIASES[i.slug]?.test(q));
  if (!hits.length) hits = fuzzyHits(q);
  // Any mention of "industry / industries" without a named one -> which industries we serve.
  if (!hits.length) return INDUSTRY_WORD.test(q) ? industryListReply() : null;
  if (hits.length === 1) return industryReply(hits[0]);
  if (hits.length > 4) return INDUSTRY_WORD.test(q) ? industryListReply() : null;

  return [
    `Here's how we work with those industries:`,
    "",
    ...hits.map((i) => `- [${i.label}](/industries/${i.slug}) — ${cut(i.description, 140)}`),
    "",
    "Ask me about any one of them for details.",
  ].join("\n");
}
