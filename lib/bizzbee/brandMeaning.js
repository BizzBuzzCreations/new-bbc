// The company tagline, shown beside the BBC logo in the site header.
export const TAGLINE = "Innovate and Integrate Everyday";

export const BRAND_MEANING_ANSWER = [
  `**BizzBuzz Creations stands for "${TAGLINE}."**`,
  "",
  "That one line is the idea behind everything we do:",
  "",
  "- **Innovate** — we keep ahead of what's next: new search behaviour, AI search and answer engines, automation and fresh creative ideas, so your business isn't running on yesterday's playbook.",
  "- **Integrate** — we bring strategy, creativity and technology together in one connected team: SEO, ads, social, web, AI, automation and support working as one system instead of separate vendors.",
  "- **Everyday** — it's a habit, not a one-off project. We keep testing, improving and optimising so your growth keeps compounding long after launch.",
  "",
  "In short: smart new ideas, joined up with solid execution, every single day, to help your business grow.",
  "",
  "[Know more about us](/about)",
].join("\n");

const ASKS_MEANING =
  /\b(mean|means|meaning|stands?\s+for|stand\s+for|full\s*form|abbreviation|tagline|tag\s*line|motto|slogan|moto|matlab|arth)\b/;
const MENTIONS_BRAND = /\bbizz\s*-?\s*buzz(\s+creations?)?\b|\bbbc\b/;

// "What does BizzBuzz mean / stand for?" -> the company tagline.
export function brandMeaningAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase();
  if (q.split(/\s+/).length > 14) return null;
  if (!ASKS_MEANING.test(q) || !MENTIONS_BRAND.test(q)) return null;
  // "meaning of life" style or a service question that merely mentions the brand
  if (/\b(price|cost|seo|ads|job|career)\b/.test(q)) return null;
  return BRAND_MEANING_ANSWER;
}
