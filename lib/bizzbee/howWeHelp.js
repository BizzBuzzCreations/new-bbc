import { mentionsService } from "./serviceLookup";

// SERVER ONLY. "How will you help me grow my business?" — a general question
// about our approach. The answer describes how an engagement starts (we
// understand the business first) and then the services we bring in. Facts come
// from the How We Work and Contact pages (5-step process, free consultation,
// no fixed package).

export const HOW_WE_HELP_ANSWER = [
  "Great question! Here's how we'd help you grow:",
  "",
  "1. **We start by understanding you** — our team first learns about your business, goals, audience and current challenges, through a free consultation.",
  "2. **We audit and plan** — we study your competitors and current online presence, then build a custom roadmap matched to your goals and budget.",
  "3. **We execute** — we bring in only the services that fit your needs and launch them in phases.",
  "4. **We optimise and report** — we keep testing and improving, with transparent monthly reports and regular strategy calls.",
  "",
  "**Services we can bring in:** [SEO](/search-engine-optimization), [Social Media Marketing](/social-media-marketing), [Google Ads & Paid Marketing](/paid-marketing), [Website Development](/web-development), [BPO & Customer Support](/bpo-services), [AI Solutions](/ai-solutions), [Marketing Automation](/marketing-automation) and [Business Consultancy](/business-consultancy).",
  "",
  "There's no fixed package — we shape the plan around what your business actually needs. Tell me a little about your business and your main goal, or [book a free consultation](/contact) and our team will take it from there.",
].join("\n");

const HELP_ASK = new RegExp(
  [
    // how will / can / would you help (me|my business|us) ... , how are you going to help
    "\\bhow\\b.{0,25}\\b(you|u|bizzbuzz|bbc|your team|your company|your agency)\\b.{0,25}\\bhelp",
    "\\bhow (can|will|would|could|do|does|are)\\b.{0,30}\\bhelp (me|us|my|our)\\b",
    // how will you grow / improve / boost my business
    "\\bhow\\b.{0,25}\\b(you|u|bizzbuzz|bbc)\\b.{0,25}\\b(grow|improve|boost|increase|scale|develop|expand|support)\\b",
    // what will you do for me
    "\\bwhat (will|would|can|do) (you|bizzbuzz|bbc)\\b.{0,20}\\b(do|offer|provide)\\b.{0,20}\\b(for|to) (me|us|my|our)\\b",
    "\\bhow (can|could) (you|u) (be )?(of )?(help|useful|benefit)",
    "\\b(help|helps) (me|us|my|our) (to )?(grow|business|brand|company)\\b",
    "\\b(kaise|kese)\\b.{0,20}\\b(help|madad|grow|badha)",
  ].join("|"),
);

export function howWeHelpAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase().replace(/[?!.,]/g, " ").replace(/\s+/g, " ").trim();
  if (!q || q.split(" ").length > 20) return null;
  if (!HELP_ASK.test(q)) return null;
  // A named service ("how will you help with SEO?") is answered by that service's own page.
  if (mentionsService(q)) return null;
  // Pricing / hiring / contact style questions have their own answers.
  if (/\b(price|pricing|cost|fees?|charges?|quote|job|jobs|career|hire|hiring|vacanc\w*|contact|phone|email)\b/.test(q)) return null;
  return HOW_WE_HELP_ANSWER;
}
