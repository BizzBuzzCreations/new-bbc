import { CONTACT, LEAD_FORM_TOKEN } from "./config";
import { retrieve } from "./knowledge";

// SERVER ONLY. "Stored answer" mode: replies to a visitor's question straight
// from the site's own content (no AI provider, no API key, no cost). Used when
// ANTHROPIC_API_KEY isn't set, and as a fallback when the AI request fails
// before producing any text. Everything it says is copied from the knowledge
// base (lib/bizzbee/knowledge.js), the site's own service descriptions, or the
// verified contact details — it never makes up new claims.

const SERVICE_ROUTES = [
  ["Better Google visibility", "[SEO & local SEO](/search-engine-optimization)"],
  ["Faster leads and sales through ads", "[Google Ads & paid marketing](/paid-marketing)"],
  ["Engagement on Instagram, Facebook and more", "[Social media marketing](/social-media-marketing)"],
  ["A professional, fast website", "[Website design & development](/web-development)"],
  ["Customer support or back-office help", "[BPO services](/bpo-services)"],
  ["Automating repetitive work, chatbots, voice agents", "[AI solutions](/ai-solutions) and [marketing automation](/marketing-automation)"],
  ["Strategy and a growth roadmap", "[Business consultancy](/business-consultancy)"],
];

const contactBlock = () =>
  [
    "You can reach the BizzBuzz team here:",
    `- Phone (India): [${CONTACT.phoneIndia}](tel:${CONTACT.phoneIndiaTel})`,
    `- Phone (UK): [${CONTACT.phoneUk}](tel:${CONTACT.phoneUkTel})`,
    `- Email: [${CONTACT.email}](mailto:${CONTACT.email})`,
    `- WhatsApp: [Chat on WhatsApp](${CONTACT.whatsappUrl})`,
    `- Hours: ${CONTACT.hours}`,
    "Or use the [Contact page](/contact) to book a free consultation.",
  ].join("\n");

const servicesOverview = () =>
  [
    "It depends on what you want to achieve. Here's a quick guide:",
    ...SERVICE_ROUTES.map(([goal, link]) => `- ${goal} → ${link}`),
    "Tell me your goal (and what kind of business you run) and I'll point you to the best fit.",
  ].join("\n");

const NO_MATCH = () =>
  [
    "I don't have a specific answer to that in my stored information.",
    "You can browse our [services](/services) or [FAQs](/faq), or talk to the team directly — I can share a quick enquiry form so they get back to you.",
    LEAD_FORM_TOKEN,
  ].join("\n\n");

// Curated answers for broad "I want / I need / tell me about" questions —
// worded from the site's own service descriptions (Services page and home
// page), with links. Free-form text from the knowledge base reads badly for
// these, so they get hand-built replies instead.
const OFFER =
  "\n\nThe best fit depends on your business and goals. Want the team to look at your case? Just say so and I'll share a quick enquiry form.";

const INTENTS = [
  {
    test: /\b(seo|rank|ranking|rankings|google (ranking|visibility|search)|search visibility|organic|found on google|search engine)\b/,
    answer: () =>
      `That's what **SEO** is for. We improve search visibility and attract qualified organic traffic with technical SEO, content, on-page optimization and link-building, including local SEO for businesses that serve a specific area.\n\n[Explore SEO services](/search-engine-optimization)${OFFER}`,
  },
  {
    test: /\b(google ads|adwords|ppc|paid (ads|marketing|campaigns?)|run ads|advertising)\b/,
    answer: () =>
      `**Google Ads and paid marketing** help you reach high-intent customers faster — targeted campaigns designed to increase qualified traffic and generate leads.\n\n[Explore Google Ads & paid marketing](/paid-marketing)${OFFER}`,
  },
  {
    test: /\b(leads?|lead generation|more customers|more sales|more enquiries|grow (my|our) business)\b/,
    answer: () =>
      `A few services help generate leads, and many businesses combine them:\n- **Google Ads** — targeted campaigns to reach people ready to enquire → [Paid marketing](/paid-marketing)\n- **SEO** — be found when customers search → [SEO](/search-engine-optimization)\n- **Marketing automation** — follow up and nurture leads automatically → [Marketing automation](/marketing-automation)\n\nResults depend on your market and goals.${OFFER}`,
  },
  {
    test: /\b(website|web site|web development|web design|landing page|online store|ecommerce|e-commerce|shopify|wordpress)\b/,
    answer: () =>
      `We build **fast, responsive, SEO-friendly websites** that strengthen your online presence and turn visitors into business opportunities — from business sites to ecommerce.\n\n[Explore website development](/web-development)${OFFER}`,
  },
  {
    test: /\b(ai|artificial intelligence|automation|automate|chatbot|chatbots|voice agent|workflow|crm)\b/,
    answer: () =>
      `Our **AI and automation** solutions use AI chatbots, voice agents and workflow automation to reduce repetitive work and respond to customers faster, plus marketing automation for lead nurturing and follow-ups.\n- [AI solutions](/ai-solutions)\n- [Marketing automation](/marketing-automation)${OFFER}`,
  },
  {
    test: /\b(social media|instagram|facebook|linkedin|reels|smm)\b/,
    answer: () =>
      `**Social media marketing** builds your brand presence and engages the right audience with strategic content, social media management and paid social campaigns.\n\n[Explore social media marketing](/social-media-marketing)${OFFER}`,
  },
  {
    test: /\b(bpo|call cent(er|re)|customer support|back office|back-office|virtual assistant|data entry)\b/,
    answer: () =>
      `Our **BPO services** cover customer support, call center work and back-office operations, so you can scale support without scaling headcount.\n\n[Explore BPO services](/bpo-services)${OFFER}`,
  },
  {
    test: /\b(consultancy|consulting|strategy|growth roadmap|business plan|advisory)\b/,
    answer: () =>
      `**Business consultancy** gives you practical guidance — strategic audits, market insights and growth roadmaps — to make better decisions.\n\n[Explore business consultancy](/business-consultancy)${OFFER}`,
  },
];

// "Broad" asks (a want/need or a short topic) get the curated answers above;
// specific questions (how long / how much / what is ...) go to search so an
// FAQ with the exact answer can win.
const BROAD =
  /^(i\b.*\b(want|need|am looking|looking)|we\b.*\b(want|need)|tell me|looking for|help me|can you help|what (services|do you)|do you (offer|do|provide)|show me)/;
const isBroad = (text, words) => BROAD.test(text) || words.length <= 3;

// Chunk kinds that make a readable summary when no FAQ matches.
const SUMMARY_ID =
  /^(hub-[a-z-]+|home-service-.*|sub-.*|industry-.*|company|process-overview|clio|praxistence|why-.*|diff-.*)$/;
const isSummary = (id) =>
  SUMMARY_ID.test(id) && !/-(offers|points|process|cta)$/.test(id) && !id.includes("-faq-");

// First ~2 sentences of a chunk, capped, so replies stay short.
function summarize(text, max = 420) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
  let out = "";
  for (const s of sentences) {
    if ((out + s).length > max && out) break;
    out += s;
    if (out.length > 200) break;
  }
  return (out || text).trim().slice(0, max + 60);
}

// Below this match score the question is treated as "no answer".
const MIN_SCORE = 2.6;

export function localAnswer(messages, page = "") {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const text = last.toLowerCase().trim();
  const words = text.split(/\s+/).filter(Boolean);

  if (
    /^(hi+|hii+|hello+|hey+|heyy+|hy|namaste|hola|good (morning|afternoon|evening))[\s!.?]*$/i.test(text) ||
    (words.length <= 3 && /^(hi|hello|hey|namaste)\b/.test(text))
  ) {
    return "Hi! 👋 I can answer questions about our SEO, Google Ads, social media, website, AI, automation, BPO and consultancy services. What would you like to know?";
  }
  if (/^(thanks|thank you|thx|ok thanks|okay thanks|great thanks)[\s!.]*$/i.test(text)) {
    return "You're welcome! If you have another question, just ask — or reach the team any time on the [Contact page](/contact).";
  }
  if (
    /\b(which|what)\b.*\b(service|services)\b.*\b(right|best|suit|need|choose|for me)\b|\bnot sure\b|\brecommend\b|\bwhere (do|should) i (start|begin)\b|\bright for my business\b/.test(
      text,
    )
  ) {
    return servicesOverview();
  }
  if (
    /\b(consult|consultation|quote|quotation|call me|talk to|speak (to|with)|contact (you|us|details|info)|get in touch|reach you|phone|whatsapp (number|us|you)|your whatsapp|chat on whatsapp|email|e-mail|your address|office|location|meeting|book (a|an|my)|demo|appointment|hire you|work with you)\b/.test(
      text,
    )
  ) {
    return `${contactBlock()}\n\n${LEAD_FORM_TOKEN}`;
  }

  const askingPrice = /\b(price|pricing|cost|how much|how long|fee|fees)\b/.test(text);
  if (isBroad(text, words) && !askingPrice) {
    const intent = INTENTS.find((i) => i.test.test(text));
    if (intent) return intent.answer();
  }

  // Look at this message, plus the previous user message for short follow-ups.
  const userTurns = messages.filter((m) => m.role === "user");
  const query = words.length < 4 && userTurns.length > 1 ? `${last} ${userTurns.at(-2).content}` : last;

  // FAQ entries win outright; otherwise take the best readable summary chunk.
  const found = retrieve(query, { page, limit: 8 });
  const hits = found.filter((h) => h.qa || isSummary(h.id) || h.id === "contact");
  const top = hits[0];

  if (!top || top.score < MIN_SCORE) {
    if (askingPrice) {
      return [
        "Pricing depends on the scope and requirements of each project, so there's no single fixed price. The team gives a clear quote after a free consultation.",
        LEAD_FORM_TOKEN,
      ].join("\n\n");
    }
    return NO_MATCH();
  }

  if (top.id === "contact") return `${contactBlock()}\n\n${LEAD_FORM_TOKEN}`;
  if (top.qa) return `${top.qa.answer}\n\n[Read more](${top.url})`;

  const lead = summarize(top.text);
  const more = hits.find((h) => h.url !== top.url && h.score >= MIN_SCORE);
  const extra = more ? `\n\nRelated: [${more.title.replace(/[[\]()]/g, "")}](${more.url})` : "";
  return `${lead}\n\n[Learn more about ${top.title.replace(/[[\]()]/g, "")}](${top.url})${extra}\n\nWant the team to get in touch about this? Just say so and I'll share a quick enquiry form.`;
}
