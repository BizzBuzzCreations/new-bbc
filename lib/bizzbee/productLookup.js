import { PAGE_CONTENT_REGISTRY } from "@/lib/pageContentRegistry";

// SERVER ONLY. Answers about BizzBuzz's own products — Clio AI (AI voice agent)
// and Praxistence (CRM for calling & follow-up teams) — straight from the
// homepage's "Clio AI" and "Praxistence" sections (and the in-house builds
// showcase), so the reply always matches what the site says.

const cap = (s) => String(s || "").replace(/\s+/g, " ").trim();

function homeDefaults() {
  const out = {};
  const home = PAGE_CONTENT_REGISTRY.find((p) => p.key === "home");
  for (const section of home?.sections || []) for (const f of section.fields) out[f.key] = f.default;
  return out;
}

const CLIO = /\b(clio|cleo|klio|clio ?ai)\b/;
const PRAXIS = /\b(praxistence|praxis|praxistance|praxistense)\b/;
const SKIP = /\b(price|pricing|cost|how much|quote|fees?|charges?|demo|trial|job|jobs|career|who is)\b/;

function featureLines(list) {
  return (list || []).filter((f) => f?.title).map((f) => `- **${cap(f.title)}** — ${cap(f.description)}`);
}

function clioReply(h) {
  const built = (h.caseStudyClients || []).find((c) => /voice calling/i.test(c.name));
  return [
    "**Clio AI — our AI voice agent**",
    "",
    cap(h.aiParagraph),
    "",
    "**What it does**",
    ...featureLines(h.aiFeatures),
    ...(built ? ["", `**Built in-house:** ${cap(built.tagline)}`] : []),
    "",
    `[${cap(h.aiButtonText) || "Explore Clio AI"}](${cap(h.aiButtonLink) || "https://clio.praxistence.com/"}) · [AI Solutions](/ai-solutions)`,
  ].join("\n");
}

function praxisReply(h) {
  return [
    `**${cap(h.praxistenceHeading) || "Praxistence — CRM for calling & follow-up teams"}**`,
    "",
    cap(h.praxistenceParagraph),
    "",
    "**Key features**",
    ...featureLines(h.praxistenceFeatures),
    "",
    `[${cap(h.praxistenceButtonText) || "Explore Praxistence"}](${cap(h.praxistenceButtonLink) || "https://praxistence.com/"}) · [AI Solutions](/ai-solutions)`,
  ].join("\n");
}

export function productAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase();
  if (q.split(/\s+/).length > 18 || SKIP.test(q)) return null;
  const clio = CLIO.test(q);
  const praxis = PRAXIS.test(q);
  if (!clio && !praxis) return null;
  const h = homeDefaults();
  if (clio && praxis) {
    return [
      "These are two of our own products that work together:",
      "",
      "- **Clio AI** — an AI voice agent that answers and makes sales calls, qualifies leads, books meetings and hands over to your team when a human is needed",
      "- **Praxistence** — an all-in-one CRM for calling and follow-up teams, so every lead and follow-up stays in one place",
      "",
      "Ask me about either one for details.",
    ].join("\n");
  }
  return clio ? clioReply(h) : praxisReply(h);
}
