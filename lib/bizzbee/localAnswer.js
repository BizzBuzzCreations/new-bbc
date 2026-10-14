import { CONTACT, LEAD_FORM_TOKEN } from "./config";
import { retrieve } from "./knowledge";
import { directAnswer } from "./directAnswer";

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
    "- Offices: Prayagraj (HQ) — 43/33, Tej Bahdur Sapru Rd, Agnipath Colony, Civil Lines, Prayagraj, UP 211001; Kanpur — Plot no. 218, Harjindar Nagar, Lal Bangla, J K Puri, Kanpur, UP 208007; London, UK — 3 Thornham St, London SE10 9SA",
    "Or use the [Contact page](/contact) to book a free consultation.",
  ].join("\n");

const servicesOverview = () =>
  [
    "It depends on what you want to achieve. Here's a quick guide:",
    ...SERVICE_ROUTES.map(([goal, link]) => `- ${goal} → ${link}`),
    "Tell me your goal (and what kind of business you run) and I'll point you to the best fit.",
  ].join("\n");

// Shown when the question is outside what BizzBee knows (or off-topic): a short,
// friendly note and the ways to reach the team — nothing else.
export const noAnswerNote = () =>
  [
    "Thanks for asking! 😊 I don't have an answer to that one — I'm BizzBee, and I can help with BizzBuzz Creations, our services, industries, team and how we work.",
    "",
    "For anything else, our team will be happy to help you directly:",
    "",
    `- **Phone:** [${CONTACT.phoneIndia}](tel:${CONTACT.phoneIndiaTel}) (India) · [${CONTACT.phoneUk}](tel:${CONTACT.phoneUkTel}) (UK)`,
    `- **Email:** [${CONTACT.email}](mailto:${CONTACT.email})`,
    `- **WhatsApp:** [Chat on WhatsApp](${CONTACT.whatsappUrl})`,
    `- **Hours:** ${CONTACT.hours}`,
    "",
    "[Contact Us](/contact)",
  ].join("\n");

const NO_MATCH = noAnswerNote;

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
      `**SEO (Search Engine Optimization)** is how we improve search visibility and attract qualified organic traffic with technical SEO, content, on-page optimization and link-building, including local SEO for businesses that serve a specific area.\n\n[Explore SEO services](/search-engine-optimization)${OFFER}`,
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
  /^(hub-[a-z-]+|home-service-.*|sub-.*|industry-.*|company|process-overview|clio|praxistence|why-.*|diff-.*|page-.*|svc-.*|subsvc-.*|blog-.*|job-.*|jobs-index)$/;
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
  // One specific person / role / industry: answer only about that.
  const direct = directAnswer(messages);
  if (direct) return direct;

  // The visitor wants the enquiry form: send just the form, no extra text.
  const wantsForm =
    /\b(enquiry|inquiry|contact|lead|query)\s+form\b|\b(share|send|show|give|open)\b.*\bform\b|\bfill\b.*\bform\b/.test(text);
  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant")?.content || "";
  const saysYes =
    /^(yes|yeah|yep|yup|sure|ok|okay|ok then|okay then|please|please do|go ahead|do it|haan|ha|ji|theek hai)[\s!.]*$/i.test(text) &&
    /enquiry form|quick form/i.test(lastAssistant);
  if (wantsForm || saysYes) {
    return `Sure! Please fill in this short form and the team will get back to you.

${LEAD_FORM_TOKEN}`;
  }

  if (/^(thanks|thank you|thx|ok thanks|okay thanks|great thanks)[\s!.]*$/i.test(text)) {
    return "You're welcome! If you have another question, just ask — or reach the team any time on the [Contact page](/contact).";
  }
  // Any pricing question (any service or industry): a warm message, then the
  // enquiry form — the team quotes per project, so no numbers are given.
  if (
    /\b(price|prices|pricing|cost|costs|how much|charges?|fees?|quotation|quote|budget|packages?|affordable|cheap|expensive|rates|investment)\b/.test(
      text,
    )
  ) {
    const topic =
      /\b(seo|search engine)\b/.test(text) ? "SEO"
      : /\b(google ads|ppc|paid)\b/.test(text) ? "Google Ads and paid marketing"
      : /\b(website|web development|web design|ecommerce|shopify|wordpress)\b/.test(text) ? "a website"
      : /\b(social media|instagram|facebook|linkedin|smm)\b/.test(text) ? "social media marketing"
      : /\b(bpo|call cent(er|re)|customer support)\b/.test(text) ? "BPO services"
      : /\b(ai|chatbot|automation|crm)\b/.test(text) ? "AI and automation"
      : /\b(consult\w*|strategy)\b/.test(text) ? "business consultancy"
      : "";
    const about = topic ? ` for ${topic}` : "";
    return `Great question! 😊 The cost${about} depends on your business, your goals and the scope of work, so we put together a custom quote for every project instead of one fixed rate.

Share a few details in this quick form and our team will get back to you with a clear, no-obligation quote.

${LEAD_FORM_TOKEN}`;
  }

  // Short acknowledgements ("ok", "fine", "no", ...) are not questions: reply
  // briefly in the context of the conversation instead of searching for a
  // topic (a bare "ok" used to match an unrelated FAQ).
  if (/^(bye|goodbye|see you|take care)[\s!.]*$/i.test(text)) {
    return "Thanks for chatting! If you need anything else, I'm right here — or reach the team any time on the [Contact page](/contact).";
  }
  if (
    /^(ok|okay|ok then|okay then|k|kk|fine|cool|alright|all right|got it|hmm+|hm+|nice|great|good|done|perfect|sure|yes|yeah|yep|ya|no|nope|nothing|nah|thik hai|theek hai|accha|achha|haan|ha|ji)[\s!.]*$/i.test(
      text,
    )
  ) {
    if (/short form/i.test(lastAssistant)) {
      return "Great! Once you submit the form, the team will get back to you. Is there anything else I can help you with?";
    }
    if (/^(no|nope|nothing|nah)/i.test(text)) {
      return "No problem! I'm here if you need anything else.";
    }
    return "Okay! Is there anything else you'd like to know about our services?";
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

  // One- or two-word messages need a strong match, otherwise they pull in
  // unrelated FAQs.
  const tooWeak = words.length <= 2 && (top?.score ?? 0) < 6;

  // Matching only one of several words ("weather today" -> "Where We Are Today") is not an answer.
  const coincidence = !top?.qa && (top?.coverage ?? 1) < 0.6;
  const coincidentalQa = top?.qa && (top?.coverage ?? 1) < 0.5;

  if (!top || top.score < MIN_SCORE || tooWeak || coincidence || coincidentalQa) {
    if (askingPrice) {
      return [
        "Pricing depends on the scope and requirements of each project, so there's no single fixed price. The team gives a clear quote after a free consultation.",
        LEAD_FORM_TOKEN,
      ].join("\n\n");
    }
    return NO_MATCH();
  }

  if (top.id === "contact") return `${contactBlock()}\n\n${LEAD_FORM_TOKEN}`;
  if (top.qa) return /\]\(/.test(top.qa.answer) ? top.qa.answer : `${top.qa.answer}\n\n[Read more](${top.url})`;

  const lead = summarize(top.text);
  const more = hits.find((h) => h.url !== top.url && h.score >= MIN_SCORE);
  const extra = more ? `\n\nRelated: [${more.title.replace(/[[\]()]/g, "")}](${more.url})` : "";
  return `${lead}\n\n[Learn more about ${top.title.replace(/[[\]()]/g, "")}](${top.url})${extra}\n\nWant the team to get in touch about this? Just say so and I'll share a quick enquiry form.`;
}
