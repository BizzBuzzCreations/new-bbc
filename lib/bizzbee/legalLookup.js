import { LEGAL_SECTIONS } from "./legalKnowledge";

// SERVER ONLY. "Tell me about the privacy policy / cookie policy / disclaimer /
// terms & conditions" -> what that page covers (its own section headings) and a
// link to it. Specific questions ("do you share my data?") go to search instead,
// which reads the full text of these pages.

const PAGES = [
  { page: "Privacy Policy", test: /\bprivacy\b/, blurb: "how we collect, use and protect your personal information" },
  { page: "Cookie Policy", test: /\bcookies?\b/, blurb: "how our website uses cookies and similar technologies" },
  { page: "Disclaimer", test: /\bdisclaimers?\b/, blurb: "the limits of the information and results described on our website" },
  { page: "Terms & Conditions", test: /\bterms\b|\bt ?& ?c\b|\bt and c\b|\bconditions\b/, blurb: "the rules for using our website and services" },
];

const WORD = /\b(policy|policies|terms|conditions|disclaimers?|privacy|cookies?|t ?& ?c|legal)\b/;
const SPECIFIC =
  /\b(how long|how do|how can|can i|do you|does|will you|why|delete|remove|opt|share|sell|store|retain|refund|cancel|gdpr|rights?)\b/;

export function legalAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase().replace(/[?!.,]/g, " ").replace(/\s+/g, " ").trim();
  if (!WORD.test(q) || q.split(" ").length > 9 || SPECIFIC.test(q)) return null;

  const hits = PAGES.filter((p) => p.test.test(q));
  if (hits.length !== 1) return null;

  const { page, blurb } = hits[0];
  const sections = LEGAL_SECTIONS.filter((s) => s.page === page);
  if (!sections.length) return null;

  const topics = sections
    .map((s) => s.heading.replace(/^\d+\.\s*/, "").trim())
    .filter((h) => h && !/^overview$/i.test(h))
    .slice(0, 8);
  const url = sections[0].url;

  return [
    `Our **${page}** explains ${blurb}.`,
    "",
    ...(topics.length ? ["**What it covers**", ...topics.map((t) => `- ${t}`), ""] : []),
    `[Read the full ${page}](${url})`,
    "",
    "Ask me anything specific about it and I'll find the answer, or [contact the team](/contact) for help.",
  ].join("\n");
}
