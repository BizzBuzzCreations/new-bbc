import { PAGE_CONTENT_REGISTRY } from "@/lib/pageContentRegistry";
import { SERVICE_PAGE_CONTENT } from "@/lib/servicePageContent";
import { SUB_SERVICE_PAGE_CONTENT } from "@/lib/subServicePageContent";
import { INDUSTRIES } from "@/lib/industriesData";
import { PAGE_PATHS } from "@/lib/pagePaths";
import { CONTACT } from "./config";
import { flattenRegistryPages, flattenServicePages } from "./pageFlatten";
import { SITE_QA } from "./siteQA";
import { LEGAL_SECTIONS } from "./legalKnowledge";

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

const TEAM_URL = { founders: "/our-team", leaders: "/our-team", bpo: "/our-team/bpo-team", rnd: "/our-team/rnd-team" };

function teamDefaults(pageKey, fieldKey) {
  const page = PAGE_CONTENT_REGISTRY.find((p) => p.key === pageKey);
  for (const section of page?.sections || []) {
    for (const f of section.fields) if (f.key === fieldKey) return (f.default || []).filter((m) => m?.name);
  }
  return [];
}

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

// Every person profiled on the team pages: [{ name, role, team, group }].
export function getTeamMembers() {
  const sources = [
    ["our-team", "founders", "Founders", "founders"],
    ["our-team", "leaders", "Leadership team", "leaders"],
    ["bpo-team", "bpoTeamMembers", "BPO team", "bpo"],
    ["rnd-team", "rndTeamMembers", "R&D team", "rnd"],
  ];
  return sources.flatMap(([page, field, team, group]) =>
    teamDefaults(page, field).map((m) => ({ name: m.name, role: m.role, team, group })),
  );
}

function addTeamKnowledge(add) {
  const groups = [
    { id: "founders", label: "founders", team: "the founders of BizzBuzz Creations", members: teamDefaults("our-team", "founders"), kw: "founder founders ceo co-founder owner director who started" },
    { id: "leaders", label: "leadership team members", team: "the BizzBuzz Creations leadership team", members: teamDefaults("our-team", "leaders"), kw: "leadership team leaders management managers heads" },
    { id: "bpo", label: "BPO team members", team: "the BizzBuzz Creations BPO team", members: teamDefaults("bpo-team", "bpoTeamMembers"), kw: "bpo team members call center customer support advisors" },
    { id: "rnd", label: "R&D team members", team: "the BizzBuzz Creations R&D team", members: teamDefaults("rnd-team", "rndTeamMembers"), kw: "rnd r&d research development team members developers designers" },
  ];
  const counts = {};
  const byRole = (members) => {
    const m = new Map();
    for (const x of members) m.set(x.role, [...(m.get(x.role) || []), x.name]);
    return m;
  };

  for (const g of groups) {
    if (!g.members.length) continue;
    counts[g.id] = g.members.length;
    const url = TEAM_URL[g.id];
    const roleLines = [...byRole(g.members)].map(([role, names]) =>
      names.length === 1 ? `- **${role}:** ${names[0]}` : `- **${role} (${names.length}):** ${names.join(", ")}`,
    );
    const answer = `The ${g.team.replace(/^the /, "")} has **${g.members.length}** ${g.label.replace(/ members$/, "")} members:\n\n${roleLines.join("\n")}\n\n[See the full team](${url})`;
    const q = `How many ${g.label} are there, and who are they?`;
    add(`team-${g.id}`, q, url, `${q} ${answer}`, `${g.kw} how many count number total size strength members list names who`, { question: q, answer });
    for (const m of g.members) {
      const a = `**${m.name}** is ${/^[aeiou]/i.test(m.role) ? "an" : "a"} **${m.role}** — one of ${g.members.length} ${g.label} (${g.team}).`;
      add(`team-${g.id}-${m.name}`, `Who is ${m.name}?`, url, `Who is ${m.name}? ${m.name} ${m.role}. ${a}`, "person employee", { question: `Who is ${m.name}?`, answer: a });
    }
  }

  const { founders = 0, leaders = 0, bpo = 0, rnd = 0 } = counts;
  const core = founders + leaders;
  const total = core + bpo + rnd;
  if (total) {
    const q = "How many people are on the BizzBuzz Creations team? How big is the team?";
    const answer = `BizzBuzz Creations has **${total} members** in total:\n\n- **Founders:** ${founders}\n- **Leadership team:** ${leaders}\n- **BPO team:** ${bpo}\n- **R&D team:** ${rnd}`;
    add("team-total", q, "/our-team", `${q} ${answer}`, "team size headcount employees staff total people strength", { question: q, answer });
  }
}

function build() {
  const chunks = [];
  // `keywords` are extra search terms (synonyms visitors actually use) that
  // help a chunk match but are never shown to the model or the visitor.
  // `qa` ({ question, answer }) marks an FAQ entry so the no-API-key mode
  // can reply with the exact answer.
  const seenQa = new Set();
  const add = (id, title, url, text, keywords = "", qa = null) => {
    const body = strip(text);
    if (!body) return;
    if (qa) {
      // The same FAQ can exist in two content modules — keep one copy.
      const key = `${url}|${qa.question.toLowerCase()}`;
      if (seenQa.has(key)) return;
      seenQa.add(key);
    }
    chunks.push({ id, title, url, text: body, keywords, qa });
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

  // Every other readable field on every page (about, teams, career, how we
  // work, guides, FAQ, industries, service + sub-service detail pages, ...).
  for (const c of [...flattenRegistryPages(), ...flattenServicePages(HUB_LABELS)]) {
    add(c.id, c.title, c.url, c.text, "", c.qa);
  }

  // Legal pages (privacy policy, cookie policy, disclaimer, terms & conditions).
  LEGAL_SECTIONS.forEach((sec, i) => {
    const text = sec.text;
    for (let off = 0, n = 0; off < text.length; off += 900, n++) {
      add(
        `legal-${i}-${n}`,
        `${sec.page}: ${sec.heading.replace(/^\d+\.\s*/, "")}`,
        sec.url,
        text.slice(off, off + 900),
        `${sec.page} legal policy terms conditions privacy cookies disclaimer`,
      );
    }
  });

  // Hand-written Q&A bank (company, team, process, careers, ...).
  SITE_QA.forEach((e, i) => add(`qa-${i}`, e.q, e.url, `${e.q} ${e.a}`, e.k, { question: e.q, answer: e.a }));

  // Per-service sub-service lists, generated from the live content modules.
  for (const hub of hubs) {
    const subs = Object.entries(SUB_SERVICE_PAGE_CONTENT)
      .filter(([key]) => key.startsWith(`${hub}-`))
      .map(([key, d]) => ({ label: str(d.label) || str(d.heroTitle), url: `/${hub}/${key.slice(hub.length + 1)}` }));
    if (!subs.length) continue;
    const answer = `**${HUB_LABELS[hub]}** includes ${subs.length} specialised services:\n\n${subs.map((x) => `- [${x.label}](${x.url})`).join("\n")}\n\n[Explore ${HUB_LABELS[hub]}](/${hub})`;
    const q = `What sub-services are included in ${HUB_LABELS[hub]}?`;
    add(`subs-${hub}`, q, `/${hub}`, `${q} ${answer}`, "sub services subservices types list included offerings under", { question: q, answer });
  }

  // "Which industries do you serve?" — generated from the industries data.
  {
    const firstSentence = (t) => {
      let x = (str(t).match(/^[^.!?]+[.!?]/) || [str(t)])[0].replace(/[.!?]$/, "");
      if (x.length > 85) {
        const cut = Math.max(x.lastIndexOf(",", 85), x.lastIndexOf(" — ", 85));
        if (cut > 25) x = x.slice(0, cut);
      }
      return x;
    };
    const bullets = INDUSTRIES.map((i) => `- [${i.label}](/industries/${i.slug}) — ${firstSentence(i.description)}`);
    const q = "Which industries does BizzBuzz Creations serve?";
    const answer = `We serve **${INDUSTRIES.length} industries**:\n\n${bullets.join("\n")}\n\nThe same structured process is adapted to each industry's audience and goals. [See all industries](/industries)`;
    add("qa-industries-list", q, "/industries", `${q} ${answer}`, "industries sectors verticals niche serve which industry list kis kis industry healthcare real estate ecommerce education restaurant travel finance gaming fashion fitness", { question: q, answer });
  }

  // Team roster: founders, leadership, BPO team and R&D team — member lists,
  // headcounts, role breakdowns and per-person lookups, generated from the
  // same defaults that render the team pages.
  addTeamKnowledge(add);

  // Blog count fallback — used only when the live blog data (database) isn't loaded.
  if (!dynamicChunks.some((c) => c.id === "blog-index")) {
    add(
      "blog-count-static",
      "Blog: how many articles are published",
      "/blog",
      "BizzBuzz Creations has published 187 blog articles so far on the blog, covering SEO, digital marketing, social media, web development, AI and business growth topics.",
      "blog blogs articles posts how many total count published number",
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
  "a an and are as at be but by can do for from has have how i if in is it its me my of on or our so that the their them then there these they this to us was we what when where which who why will with would you your want need looking tell about please help get kya aap me ho hai hain karte karta karti kar kaam ke ki ka se ko mein".split(
    " ",
  ),
);

const tokenize = (text) =>
  (String(text).toLowerCase().replace(/\br\s*(&|and)\s*d\b/g, "rnd").match(/[a-z0-9]+/g) || [])
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map((t) => (t.length > 4 && t.endsWith("s") ? t.slice(0, -1) : t));

let index = null;
let dynamicChunks = [];

// Blog posts / job openings (loaded from the database, see dynamicKnowledge.js).
export function setDynamicChunks(chunks) {
  dynamicChunks = chunks;
  index = null; // rebuilt on next retrieve()
}

function getIndex() {
  if (index) return index;
  const chunks = [...build(), ...dynamicChunks].map((c) => {
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

  const uniqueQ = [...new Set(q)];
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
    if (c.id === "blog-latest" || c.id === "jobs-index") score *= 2;
    else if (c.id === "blog-index") score *= 1.4;
    else if (/^team-(founders|leaders|bpo|rnd)$/.test(c.id)) score *= 1.8; // team rosters / headcounts
    else if (c.id === "team-total") score *= 1.2;
    else if (c.id.startsWith("team-")) score *= 0.9; // single-person lookups
    else if (c.id.startsWith("qa-")) score *= 1.5; // curated Q&A bank
    else if (/^hub-[a-z-]+(-offers|-points)?$/.test(c.id) || c.id === "company" || c.id === "contact") score *= 1.3;
    else if (c.id.includes("-faq-") || c.id.startsWith("faq-")) score *= 0.85;
    if (score > 0 && page && page !== "/" && c.url === page) score *= 1.35;
    // Share of the visitor's distinct words that appear in this chunk — low
    // coverage means a coincidental word match, not a real answer.
    const coverage = uniqueQ.filter((t) => c.tf.has(t)).length / uniqueQ.length;
    return { c, score, coverage };
  });

  const ranked = scored.filter((s) => s.score > 0).sort((a, z) => z.score - a.score);
  // Drop weak tail matches so unrelated questions don't get noisy "facts".
  const floor = (ranked[0]?.score || 0) * 0.45;
  return ranked
    .filter((s) => s.score >= floor)
    .slice(0, limit)
    .map(({ c, score, coverage }) => ({
      id: c.id,
      title: c.title,
      url: c.url,
      qa: c.qa,
      score,
      coverage,
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

// True once blog posts have been loaded into the index (used to tell a deleted post from "not loaded yet").
export function hasBlogPosts() {
  return getIndex().chunks.some((x) => x.id.startsWith("blog-"));
}

export function knowledgeStats() {
  return { chunks: getIndex().n };
}
