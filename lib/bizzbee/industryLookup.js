import { INDUSTRIES } from "@/lib/industriesData";
import { INDUSTRY_PAGE_CONTENT } from "@/lib/industryPageContent";

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

export function industryAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase();
  if (!q.trim() || q.split(/\s+/).length > 20 || SKIP.test(q)) return null;

  const hits = INDUSTRIES.filter((i) => ALIASES[i.slug]?.test(q));
  if (!hits.length) return null;
  if (hits.length === 1) return industryReply(hits[0]);
  if (hits.length > 4) return null; // broad / list question — let the general answer handle it

  return [
    `Here's how we work with those industries:`,
    "",
    ...hits.map((i) => `- [${i.label}](/industries/${i.slug}) — ${cut(i.description, 140)}`),
    "",
    "Ask me about any one of them for details.",
  ].join("\n");
}
