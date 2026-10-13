import { PAGE_CONTENT_REGISTRY } from "@/lib/pageContentRegistry";
import { SERVICE_PAGE_CONTENT } from "@/lib/servicePageContent";
import { SUB_SERVICE_PAGE_CONTENT } from "@/lib/subServicePageContent";
import { INDUSTRIES } from "@/lib/industriesData";
import { PAGE_PATHS } from "@/lib/pagePaths";
import { CONTACT } from "./config";

// SERVER ONLY — imported from the chat API route, never from client code.
//
// BizzBee's knowledge base: a flat list of small text chunks, built once
// (lazily, per server process) from the same content modules that render
// the public pages — so the bot answers from the site's own copy and there
// is no second document to keep in sync. Retrieval is a lightweight BM25
// keyword search; at roughly 400 chunks a vector database would add
// infrastructure without a real benefit.
//
// Limit: this reads the shipped default copy. Text edited later from the
// admin dashboard is stored in MongoDB and is NOT included here.

const HUB_LABELS = {
  "bpo-services": "BPO & Customer Support",
  "web-development": "Website Design & Development",
  "search-engine-optimization": "Search Engine Optimization (SEO)",
  "social-media-marketing": "Social Media Marketing",
  "paid-marketing": "Google Ads & Paid Marketing",
  "ai-solutions": "AI Solutions",
  "marketing-automation": "Marketing Automation",
  "business-consultancy": "Business Consultancy",
};

const str = (v) => (typeof v === "string" ? v.trim() : "");
const strip = (s) =>
  str(s)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function homeDefaults() {
  const out = {};
  const home = PAGE_CONTENT_REGISTRY.find((p) => p.key === "home");
  for (const section of home?.sections || []) {
    for (const f of section.fields) out[f.key] = f.default;
  }
  return out;
}

function pageTitleFor(path) {
  const key = Object.keys(PAGE_PATHS).find((k) => PAGE_PATHS[k] === path);
  return key || path;
}

function build() {
  const chunks = [];
  // `keywords` are extra search terms (synonyms visitors actually use) that
  // help a chunk match but are never shown to the model or the visitor.
  // `qa` ({ question, answer }) marks an FAQ entry so the no-API-key mode
  // can reply with the exact answer.
  const add = (id, title, url, text, keywords = "", qa = null) => {
    const body = strip(text);
    if (body) chunks.push({ id, title, url, text: body, keywords, qa });
  };

  const h = homeDefaults();

  add(
    "company",
    "About BizzBuzz Creations",
    "/about",
    [
      str(h.aboutParagraph),
      "BizzBuzz Creations is a full-stack digital marketing and business solutions agency. Its headquarters are in Prayagraj (Allahabad), India, it has an office in Kanpur, and a UK office in London. It works with businesses in Prayagraj, across India, and internationally.",
      str(h.heroSubtext),
    ].join(" "),
    "who are you about company agency bizzbuzz overview prayagraj allahabad kanpur london",
  );

  add(
    "contact",
    "Contact details & offices",
    "/contact",
    [
      `Phone (India): ${CONTACT.phoneIndia}. Phone (UK): ${CONTACT.phoneUk}. Email: ${CONTACT.email}.`,
      `WhatsApp: ${CONTACT.whatsappUrl}. Working hours: ${CONTACT.hours}.`,
      "India headquarters: 43/33, Tej Bahdur Sapru Rd, Agnipath Colony, Civil Lines, Prayagraj, Uttar Pradesh 211001.",
      "Kanpur office: Plot no. 218, Harjindar Nagar, Lal Bangla, J K Puri, Kanpur, UP 208007.",
      "UK office: 3 Thornham St, London SE10 9SA, United Kingdom.",
      "A free consultation can be requested from the Contact page.",
    ].join(" "),
    "phone number call mobile email address whatsapp location office hours timing reach contact get in touch consultation quote enquiry",
  );

  for (const step of h.processSteps || []) {
    add(`process-${step.title}`, `Our process: ${step.title}`, "/how-we-work", step.description);
  }
  add(
    "process-overview",
    "Our process (overview)",
    "/how-we-work",
    (h.processSteps || []).map((s, i) => `${i + 1}. ${s.title}: ${s.description}`).join(" "),
  );

  for (const card of h.serviceCards || []) {
    add(
      `home-service-${card.heading}`,
      card.heading,
      card.buttonLink || "/services",
      `${card.heading}. ${card.subheading}. ${card.description}`,
    );
  }
  for (const f of h.whyChooseFeatures || []) {
    add(`why-${f.title}`, `Why work with us: ${f.title}`, "/about", f.description);
  }
  for (const f of h.statCards || []) {
    add(`diff-${f.label}`, `What makes us different: ${f.label}`, "/about", f.description);
  }
  for (const q of h.faqItems || []) {
    add(`faq-${q.question}`, q.question, "/faq", `${q.question} ${q.answer}`, "", { question: q.question, answer: strip(q.answer) });
  }
  add("clio", "Clio AI (AI voice agent)", "/ai-solutions", str(h.aiParagraph));
  add(
    "praxistence",
    "Praxistence (CRM for calling teams)",
    "/ai-solutions",
    str(h.praxistenceParagraph),
  );

  // Service hub pages
  const HUB_KEYWORDS = {
    "search-engine-optimization": "google ranking rank rankings search visibility organic traffic local seo found online",
    "paid-marketing": "ads advertising ppc campaigns leads google ads paid traffic roas",
    "social-media-marketing": "instagram facebook linkedin social media engagement followers reels posts brand",
    "web-development": "website site design develop redesign ecommerce shopify wordpress landing page online store",
    "bpo-services": "call center customer support back office outsourcing virtual assistant data entry staff",
    "ai-solutions": "ai artificial intelligence chatbot voice agent automate generative",
    "marketing-automation": "automate automation crm email whatsapp nurture follow up workflows drip",
    "business-consultancy": "consulting consultant strategy growth advisory business plan scaling startup",
  };
  for (const [slug, data] of Object.entries(SERVICE_PAGE_CONTENT)) {
    const url = `/${slug}`;
    const label = HUB_LABELS[slug] || slug;
    add(
      `hub-${slug}`,
      label,
      url,
      [
        str(data.heroHeading),
        str(data.heroDescription),
        str(data.introParagraphOne),
        str(data.introParagraphTwo),
        str(data.weAreDescription),
      ].join(" "),
      HUB_KEYWORDS[slug] || "",
    );
    add(
      `hub-${slug}-offers`,
      `${label}: what is included`,
      url,
      (data.services || []).map((s) => `${s.heading} (${s.href}): ${s.description}`).join(" "),
      HUB_KEYWORDS[slug] || "",
    );
    add(
      `hub-${slug}-points`,
      `${label}: how we work`,
      url,
      (data.weArePoints || []).map((p) => `${p.title}: ${p.description}`).join(" "),
    );
    add(
      `hub-${slug}-process`,
      `${label}: process`,
      url,
      (data.roadmapSteps || []).map((s, i) => `${i + 1}. ${s.title}: ${s.desc}`).join(" "),
    );
    add(`hub-${slug}-cta`, `${label}: next step`, url, `${str(data.ctaHeading)} ${str(data.ctaParagraph)}`);
    for (const q of data.faqs || []) {
      add(`hub-${slug}-faq-${q.question}`, q.question, url, `${q.question} ${q.answer}`, "", { question: q.question, answer: strip(q.answer) });
    }
  }

  // Sub-service pages (key = "<hub>-<slug>")
  const hubs = Object.keys(HUB_LABELS);
  for (const [key, data] of Object.entries(SUB_SERVICE_PAGE_CONTENT)) {
    const hub = hubs.find((x) => key.startsWith(`${x}-`));
    if (!hub) continue;
    const url = `/${hub}/${key.slice(hub.length + 1)}`;
    const label = str(data.label) || str(data.heroTitle);
    add(
      `sub-${key}`,
      `${label} (${HUB_LABELS[hub]})`,
      url,
      `${str(data.description)} ${str(data.heroTitle)} ${str(data.heroDescription)}`,
    );
    for (const q of data.faqs || []) {
      add(`sub-${key}-faq-${q.question}`, q.question, url, `${q.question} ${q.answer}`, "", { question: q.question, answer: strip(q.answer) });
    }
  }

  // Industries
  for (const ind of INDUSTRIES) {
    add(
      `industry-${ind.slug}`,
      `${ind.label} industry`,
      `/industries/${ind.slug}`,
      `${ind.description} Common challenges: ${(ind.challenges || []).join(" ")}`,
    );
  }

  // Page directory
  add(
    "pages",
    "Site pages",
    "/",
    Object.entries(PAGE_PATHS)
      .filter(([, p]) => !p.startsWith("/en-uk/"))
      .map(([, p]) => `${pageTitleFor(p)}: ${p}`)
      .join("; "),
  );

  return chunks;
}

// --- BM25 retrieval ---------------------------------------------------

const STOP = new Set(
  "a an and are as at be but by can do for from has have how i if in is it its me my of on or our so that the their them then there these they this to us was we what when where which who why will with would you your want need looking tell about please help get".split(
    " ",
  ),
);

const tokenize = (text) =>
  (String(text).toLowerCase().match(/[a-z0-9]+/g) || [])
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map((t) => (t.length > 4 && t.endsWith("s") ? t.slice(0, -1) : t));

let index = null;

function getIndex() {
  if (index) return index;
  const chunks = build().map((c) => {
    const titleTokens = tokenize(c.title);
    const tokens = [...titleTokens, ...titleTokens, ...tokenize(c.keywords), ...tokenize(c.text)]; // title counts triple
    const tf = new Map();
    for (const t of tokens) tf.set(t, (tf.get(t) || 0) + 1);
    return { ...c, tf, len: tokens.length };
  });
  const df = new Map();
  for (const c of chunks) for (const t of c.tf.keys()) df.set(t, (df.get(t) || 0) + 1);
  const avgLen = chunks.reduce((s, c) => s + c.len, 0) / (chunks.length || 1);
  index = { chunks, df, avgLen, n: chunks.length };
  return index;
}

// Returns up to `limit` chunks ({ title, url, text }) relevant to `query`.
// `page` (the visitor's current path) gives a small boost to chunks about
// the page they are on.
export function retrieve(query, { page = "", limit = 6, maxChars = 900 } = {}) {
  const { chunks, df, avgLen, n } = getIndex();
  const q = tokenize(query);
  if (!q.length) return [];
  const k1 = 1.4;
  const b = 0.75;

  const scored = chunks.map((c) => {
    let score = 0;
    for (const t of q) {
      const f = c.tf.get(t);
      if (!f) continue;
      const idf = Math.log(1 + (n - df.get(t) + 0.5) / (df.get(t) + 0.5));
      score += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * c.len) / avgLen)));
    }
    // Main service / company / contact chunks beat individual FAQ entries
    // on broad questions; a visitor's own page gets a small boost.
    if (/^hub-[a-z-]+(-offers|-points)?$/.test(c.id) || c.id === "company" || c.id === "contact") score *= 1.3;
    else if (c.id.includes("-faq-") || c.id.startsWith("faq-")) score *= 0.85;
    if (score > 0 && page && page !== "/" && c.url === page) score *= 1.35;
    return { c, score };
  });

  const ranked = scored.filter((s) => s.score > 0).sort((a, z) => z.score - a.score);
  // Drop weak tail matches so unrelated questions don't get noisy "facts".
  const floor = (ranked[0]?.score || 0) * 0.45;
  return ranked
    .filter((s) => s.score >= floor)
    .slice(0, limit)
    .map(({ c, score }) => ({
      id: c.id,
      title: c.title,
      url: c.url,
      qa: c.qa,
      score,
      text: c.text.length > maxChars ? `${c.text.slice(0, maxChars)}…` : c.text,
    }));
}

// The page the visitor is currently on, if it is a known page.
export function pageContext(page) {
  if (!page) return null;
  const { chunks } = getIndex();
  const c = chunks.find((x) => x.url === page && !x.id.includes("-faq-"));
  return c ? { title: c.title, url: c.url } : null;
}

export function knowledgeStats() {
  return { chunks: getIndex().n };
}
