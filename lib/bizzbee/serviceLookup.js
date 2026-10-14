import { SERVICE_PAGE_CONTENT } from "@/lib/servicePageContent";
import { SUB_SERVICE_PAGE_CONTENT } from "@/lib/subServicePageContent";
import { editDistance } from "./fuzzy";

// SERVER ONLY. Deterministic, structured answers for "tell me about <service>"
// questions — for each of the 8 main services and each of their sub-services.
// The reply covers ONLY the service that was asked about, built from that
// service's own page content.

const HUBS = [
  {
    slug: "search-engine-optimization",
    label: "Search Engine Optimization (SEO)",
    alias: /\b(seo|search engine optimi[sz]ation|search engine|organic (ranking|traffic)|google ranking)\b/,
  },
  {
    slug: "social-media-marketing",
    label: "Social Media Marketing",
    alias: /\b(social media|smm|social marketing|social media marketing)\b/,
  },
  {
    slug: "paid-marketing",
    label: "Google Ads & Paid Marketing",
    alias: /\b(google ads|adwords|ppc|paid marketing|paid ads|paid media|paid advertising|paid campaigns?|performance marketing)\b/,
  },
  {
    slug: "web-development",
    label: "Website Design & Development",
    alias: /\b(web development|website development|web design|website design|web developer|website|websites|web app)\b/,
  },
  {
    slug: "bpo-services",
    label: "BPO & Customer Support",
    alias: /\b(bpo|call cent(er|re)s?|customer support|customer service|back office|back-office|outsourcing)\b/,
  },
  {
    slug: "ai-solutions",
    label: "AI Solutions",
    alias: /\b(ai solutions?|artificial intelligence|ai services?|ai agents?|ai chatbots?|chatbots?|voice agents?|ai automation|generative ai)\b/,
  },
  {
    slug: "marketing-automation",
    label: "Marketing Automation",
    alias: /\b(marketing automation|automation services?|automate marketing|marketing automations?)\b/,
  },
  {
    slug: "business-consultancy",
    label: "Business Consultancy",
    alias: /\b(business consultancy|business consulting|consultancy|consulting|consultant|business advisory|advisory)\b/,
  },
];

// Wording that signals a general "tell me about X" question…
const OVERVIEW =
  /\b(about|what is|what are|whats|what's|explain|describe|details?|info|information|overview|know|learn|tell|show|services?|offer|offers|provide|provides|do you (do|have|offer|provide)|help with|looking for|want|need|interested|batao|bataiye|kya hai|kya hota|jaankari)\b/;
// …versus a specific question that the FAQ/search answers better.
const SPECIFIC =
  /\b(how long|how much|how many|how (do|does|can|to)|why|when|cost|costs|price|pricing|quote|fees?|charges?|difference|vs|versus|compare|comparison|worth|best|timeline|guarantee|who|team|member|job|jobs|career|hire|hiring|vacanc\w*|blog|latest|industr\w*)\b/;

const GENERIC_TOKENS = new Set([
  "and", "for", "the", "of", "a", "an", "in", "to", "with", "services", "service", "agency", "solutions", "solution",
  "management", "marketing", "development", "optimization", "optimisation", "business", "based", "consulting", "ads", "ad",
  "campaigns", "campaign", "social", "media", "web", "ai", "seo", "bpo", "support", "customer", "new", "free", "your",
]);

const stem = (w) => (w.length > 4 && w.endsWith("s") ? w.slice(0, -1) : w);
const tokenize = (t) =>
  (String(t).toLowerCase().replace(/c\+\+/g, "cpp").replace(/next\s*\.?\s*js/g, "nextjs").replace(/e-?commerce/g, "ecommerce").match(/[a-z0-9]+/g) || []).map(stem);

const cap = (s) => String(s || "").replace(/\s+/g, " ").trim();
const cut = (s, n) => {
  const t = cap(s);
  if (t.length <= n) return t;
  const i = Math.max(t.lastIndexOf(".", n), t.lastIndexOf(",", n), t.lastIndexOf(" — ", n));
  return (i > 40 ? t.slice(0, i) : t.slice(0, n).replace(/\s\S*$/, "")).replace(/[.,;:]$/, "");
};

// True when the text names a main service or a sub-service (used by other handlers to step aside).
export function mentionsService(q) {
  const text = String(q).toLowerCase();
  if (HUBS.some((h) => h.alias.test(text))) return true;
  return Boolean(matchSubService(text, new Set()));
}

// --- sub-service index ---------------------------------------------------
let SUBS = null;
function subs() {
  if (SUBS) return SUBS;
  SUBS = Object.entries(SUB_SERVICE_PAGE_CONTENT)
    .map(([key, data]) => {
      const hub = HUBS.find((h) => key.startsWith(`${h.slug}-`));
      if (!hub) return null;
      const label = cap(data.label || data.heroTitle);
      const slug = key.slice(hub.slug.length + 1);
      // Tokens of the label plus the URL slug (they differ slightly, e.g. "Google & Search Ads Management").
      const tokens = [...new Set([...tokenize(label), ...tokenize(slug.replace(/-/g, " "))])].filter(
        (t) => t.length > 1 && !["and", "for", "the", "of"].includes(t),
      );
      const labelTokens = [...new Set(tokenize(label))].filter(
        (t) => t.length > 1 && !["and", "for", "the", "of", "service", "agency", "solution"].includes(t),
      );
      return { key, hub, label, url: `/${hub.slug}/${slug}`, data, tokens, labelTokens };
    })
    .filter(Boolean);
  // Weight each token by how distinctive it is across all sub-services.
  const df = new Map();
  for (const s of SUBS) for (const t of new Set(s.tokens)) df.set(t, (df.get(t) || 0) + 1);
  for (const s of SUBS) {
    s.weights = s.tokens.map((t) => (GENERIC_TOKENS.has(t) ? 0.25 : 1) / (df.get(t) || 1) ** 0.5);
  }
  return SUBS;
}

const tokenHit = (qTokens, t) =>
  qTokens.some((q) => q === t || (t.length >= 6 && q.length >= 6 && q[0] === t[0] && editDistance(q, t) <= 1));

// Words that carry no service meaning in a question.
const STOPQ = new Set(
  "tell me about the a an of is are what whats want to know need please you your do does for with on in i we us can get more info information details detail learn explain describe offer offers provide provides help looking interested kya hai batao bataiye jaankari ke baare mein company bizzbuzz bizz buzz creations it this that how".split(
    " ",
  ),
);

// Query words that actually identify a service (not question filler / generic service words).
function distinctQueryTokens(q) {
  return [...new Set(tokenize(q))].filter((t) => t.length > 1 && !STOPQ.has(t) && !GENERIC_TOKENS.has(t));
}

function matchSubService(q, skipTokens) {
  const qTokens = tokenize(q);
  const qDistinct = distinctQueryTokens(q).filter((t) => !skipTokens.has(t));
  if (!qDistinct.length) return null;

  const scored = subs()
    .map((s) => {
      let hit = 0;
      let total = 0;
      let distinctHits = 0;
      s.tokens.forEach((t, i) => {
        total += s.weights[i];
        if (tokenHit(qTokens, t)) {
          hit += s.weights[i];
          if (!GENERIC_TOKENS.has(t)) distinctHits++;
        }
      });
      // How much of what the visitor said does this sub-service explain?
      const covered = qDistinct.filter((qt) => s.tokens.some((t) => t === qt || (t.length >= 6 && qt.length >= 6 && t[0] === qt[0] && editDistance(qt, t) <= 1)));
      const coverage = covered.length / qDistinct.length;
      return { s, score: total ? hit / total : 0, coverage, distinctHits };
    })
    .filter((x) => x.distinctHits >= 1 && (x.coverage === 1 || x.score >= 0.8))
    .sort((a, z) => z.coverage - a.coverage || z.score - a.score);
  if (!scored.length) return null;

  // A sub-service whose whole label the visitor named beats partial matches.
  const full = scored.filter((x) => x.score >= 0.999);
  if (full.length === 1) return { one: full[0].s };
  const best = scored[0];
  const close = scored.filter((x) => x.coverage === best.coverage && x.score >= best.score * 0.9);
  return close.length === 1 ? { one: best.s } : { many: close.slice(0, 4).map((x) => x.s) };
}

// --- answers ---------------------------------------------------------------
function hubReply(hub) {
  const d = SERVICE_PAGE_CONTENT[hub.slug] || {};
  const lines = [`**${hub.label}**`, "", cap(d.heroDescription)];

  const offers = (d.services || []).filter((x) => x.heading && x.href);
  if (offers.length) {
    lines.push("", `**What's included (${offers.length})**`, ...offers.map((x) => `- [${cap(x.heading)}](${x.href}) — ${cut(x.description, 110)}`));
  }
  const steps = (d.roadmapSteps || []).map((x) => cap(x.title)).filter(Boolean).slice(0, 6);
  if (steps.length) lines.push("", "**How we work**", ...steps.map((t, i) => `${i + 1}. ${t}`));
  const why = (d.weArePoints || []).map((x) => cap(x.title)).filter(Boolean).slice(0, 4);
  if (why.length) lines.push("", "**Why BizzBuzz**", ...why.map((t) => `- ${t}`));

  lines.push("", `[Explore ${hub.label}](/${hub.slug})`);
  return lines.join("\n");
}

function subReply(s) {
  const d = s.data;
  const lines = [`**${s.label}** (${s.hub.label})`, "", cap(d.description || d.heroDescription)];

  const who = (d.capabilities || []).map((x) => cap(x.title)).filter(Boolean).slice(0, 4);
  if (who.length) lines.push("", "**Who it's for**", ...who.map((t) => `- ${t}`));

  const what = (d.serviceBreakdown || []).filter((x) => x.title).slice(0, 4);
  if (what.length) {
    lines.push(
      "",
      "**What we deliver**",
      ...what.map((x) => `- **${cap(x.title)}**${x.services?.length ? ` — ${x.services.slice(0, 3).join(", ")}` : ""}`),
    );
  }
  const why = (d.differentiators || []).map((x) => cap(x.title)).filter(Boolean).slice(0, 3);
  if (why.length) lines.push("", "**Why BizzBuzz**", ...why.map((t) => `- ${t}`));

  lines.push("", `[Explore ${s.label}](${s.url})`);
  return lines.join("\n");
}

const COUNT_ASK = /\b(how many|kitne|number of|total|count)\b/;
const LIST_ASK = /\b(what|which|list|all|kya|kaun|kon|provide|provides|offer|offers|offering|offerings|have|do you do|available)\b/;
const SERVICE_WORD = /\b(services?|solutions|offerings)\b/;
const SUB_WORD = /\bsub[ -]?services?\b/;

const HUB_BLURB = {
  "search-engine-optimization": "visibility, local SEO and AI search",
  "social-media-marketing": "content, management and paid social",
  "paid-marketing": "targeted campaigns for leads and ROI",
  "web-development": "fast, responsive, SEO-friendly websites",
  "bpo-services": "customer support, call center and back-office",
  "ai-solutions": "chatbots, voice agents and workflow automation",
  "marketing-automation": "CRM, email and WhatsApp journeys",
  "business-consultancy": "strategy, growth and operations",
};

function subCount(hub) {
  return subs().filter((x) => x.hub.slug === hub.slug).length;
}

function servicesOverviewReply() {
  const total = subs().length;
  return [
    `We provide **${HUBS.length} core services**, with **${total} specialised sub-services** between them:`,
    "",
    ...HUBS.map((h, i) => `${i + 1}. [${h.label}](/${h.slug}) — ${HUB_BLURB[h.slug]} (${subCount(h)} sub-services)`),
    "",
    "You can pick one or combine several. Ask me about any of them for details, or [see all services](/services).",
  ].join("\n");
}

function subServicesReply() {
  const total = subs().length;
  return [
    `We have **${total} specialised sub-services** across our ${HUBS.length} core services:`,
    "",
    ...HUBS.map((h) => `- [${h.label}](/${h.slug}) — **${subCount(h)}** sub-services`),
    "",
    "Ask me about any service and I'll list what's included.",
  ].join("\n");
}

export function serviceAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  // "how can you help me with SEO?" is an overview request for that service.
  const q = last
    .toLowerCase()
    .replace(/[?!.,]/g, " ")
    .replace(/\bhow (can|will|would|could|do|does|are)\b.{0,25}\bhelp( me| us)?( with| in| for| on)?\b/, "tell me about")
    .replace(/\s+/g, " ")
    .trim();
  const words = q.split(" ").filter(Boolean);
  if (!words.length || words.length > 18) return null;

  // "How many services / sub-services do you have?", "What services do you provide?"
  if (
    (SERVICE_WORD.test(q) || SUB_WORD.test(q)) &&
    (COUNT_ASK.test(q) || LIST_ASK.test(q)) &&
    !HUBS.some((h) => h.alias.test(q)) &&
    !/\b(price|pricing|cost|quote|fees?|charges?|industr\w*|uk|london|digital marketing)\b/.test(q)
  ) {
    return SUB_WORD.test(q) ? subServicesReply() : servicesOverviewReply();
  }

  // "How many services for SEO?" -> that service's page summary (it lists what's included).
  {
    const named = HUBS.filter((h) => h.alias.test(q));
    if (named.length === 1 && COUNT_ASK.test(q) && SERVICE_WORD.test(q) && !/\b(price|pricing|cost|quote|fees?)\b/.test(q)) {
      return hubReply(named[0]);
    }
  }

  if (SPECIFIC.test(q)) return null;
  if (!OVERVIEW.test(q) && words.length > 5) return null;

  // 0) The visitor typed a sub-service's full name ("social media management",
  // "ai social media marketing") — even when it only uses generic words.
  {
    const qTok = new Set(tokenize(q));
    const named = subs()
      .filter((s) => s.labelTokens.length >= 2 && s.labelTokens.every((t) => qTok.has(t)))
      .sort((a, z) => z.labelTokens.length - a.labelTokens.length);
    if (named.length && (named.length === 1 || named[0].labelTokens.length > named[1].labelTokens.length)) {
      return subReply(named[0]);
    }
  }

  const hubs = HUBS.filter((h) => h.alias.test(q));
  const aliasWords = new Set(hubs.flatMap((h) => tokenize(q.match(h.alias)?.[0] || "")));

  // 1) The visitor named only a main service ("google ads", "seo") -> that service.
  const extra = distinctQueryTokens(q).filter((t) => !aliasWords.has(t));
  if (hubs.length === 1 && !extra.length) return hubReply(hubs[0]);

  // 2) A specific sub-service ("local seo", "wordpress", "reels").
  const sub = matchSubService(q, hubs.length ? aliasWords : new Set());
  if (sub?.one) return subReply(sub.one);
  if (sub?.many) {
    return [
      "Did you mean one of these?",
      "",
      ...sub.many.map((s) => `- [${s.label}](${s.url}) — ${s.hub.label}`),
      "",
      "Tell me which one and I'll share the details.",
    ].join("\n");
  }

  // 3) A main service plus words we couldn't tie to a sub-service.
  if (hubs.length === 1) return hubReply(hubs[0]);
  if (hubs.length > 1 && hubs.length <= 3) {
    return [
      "Here's how we help with those:",
      "",
      ...hubs.map((h) => `- [${h.label}](/${h.slug}) — ${cut(SERVICE_PAGE_CONTENT[h.slug]?.heroDescription, 130)}`),
      "",
      "Ask me about any one of them for details.",
    ].join("\n");
  }
  return null;
}

// --- "digital marketing services" (the general ask) -------------------------
const DM =
  /\b(digital marketing|online marketing|internet marketing|marketing|advertising|promotion|promote|digital services?|digital solutions?|digital agency|online presence|online growth|online visibility|grow (my|our) business|business growth)\b/;
const DM_FILLER = new Set(
  `i im m we looking look for want wanna need needs services service digital marketing online internet agency company provide provides offer offers
   do does you your help helps with best good top in a an the of to india indian prayagraj allahabad please can could get hire me my us our business businesses
   interested know about tell kya hai ho karte aap mujhe chahiye is are what whats which kind kinds type types all some any more services-wise related something regarding like my our your business businesses brand products product company companies marketing-related promotion promote promoting advertising advertise grow growth presence visibility solutions solution digital`.split(/\s+/),
);

// "I'm looking for digital marketing services" -> what digital marketing means
// for us and the full list of services, instead of a location-specific page.
export function digitalMarketingAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase().replace(/[?!.,]/g, " ").replace(/\s+/g, " ").trim();
  if (!DM.test(q) || q.split(" ").length > 16) return null;
  if (/\b(uk|u k|london|england|united kingdom|britain|british)\b/.test(q)) return null; // location page handles it
  if (SPECIFIC.test(q)) return null;
  if (q.split(" ").some((w) => !DM_FILLER.has(w))) return null; // narrower question (a service, an industry, ...)

  return [
    "Great — digital marketing is exactly what we do! 😊 BizzBuzz Creations is a full-service digital marketing and business solutions agency that helps businesses get found online, generate leads and grow, with strategy, creativity and technology working together.",
    "",
    "**Here's what we provide**",
    "1. [Search Engine Optimization (SEO)](/search-engine-optimization) — rank higher on Google and AI search",
    "2. [Social Media Marketing](/social-media-marketing) — content, management and paid social",
    "3. [Google Ads & Paid Marketing](/paid-marketing) — targeted campaigns for leads and ROI",
    "4. [Website Design & Development](/web-development) — fast, SEO-friendly websites",
    "5. [BPO & Customer Support](/bpo-services) — support, call center and back-office",
    "6. [AI Solutions](/ai-solutions) — chatbots, voice agents and automation",
    "7. [Marketing Automation](/marketing-automation) — CRM, email and WhatsApp journeys",
    "8. [Business Consultancy](/business-consultancy) — strategy and growth planning",
    "",
    "Tell me about your business and your main goal (more leads, better Google ranking, a new website…) and I'll suggest the best fit, or [talk to our team](/contact).",
  ].join("\n");
}
