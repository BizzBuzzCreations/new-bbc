import { getTeamMembers } from "./knowledge";

// SERVER ONLY. Deterministic answers for "who is <person>?" and "who is the
// <role>?" questions: the reply contains ONLY the matching person (or the few
// people sharing that role) — never a team list or company summary.

const norm = (t) =>
  String(t)
    .toLowerCase()
    .replace(/\br\s*&\s*d\b/g, "rnd")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Role words specific enough to identify a role on their own.
const ROLE_WORDS = new Set([
  "developer", "designer", "editor", "analyst", "writer", "advisor", "advisors", "mentor", "coordinator",
  "leader", "devops", "director", "compliance", "operational",
  "organizational", "hr", "ceo", "founder", "cofounder", "backend",
]);
const GENERIC = new Set(["and", "of", "the", "team", "member", "manager", "specialist", "executive", "engineer"]);

const QUESTION_HINT = /\b(who|whom|kaun|kon|name|person|member|members|employee|designation|role|position|about|tell|details|info|is there|do you have|hai|hain|hoga|batao|bataiye)\b/;

// Work areas a visitor might name instead of a job title ("who handles SEO?",
// "who does the designing?") -> pattern matched against the member's role.
const AREAS = [
  [/\bseo\b|search engine/, /seo/i],
  [/\bcontent\b|\bwriting\b|\bcopywrit\w*|\bblog writer/, /content writer/i],
  [/\bdesign\w*|\bgraphics?\b|\bcreative\b/, /designer/i],
  [/\bvideo\b|\bediting\b|\bediting\b/, /video editor/i],
  [/\bdevelop\w*|\bweb\b|\bcoding\b|\bprogramm\w*|\bfull ?stack\b|\bwebsite\b/, /developer|devops/i],
  [/\bdevops\b|\bserver\w*|\binfrastructure\b/, /devops/i],
  [/\bdata\b|\banalytics?\b|\banalyst\b/, /analyst/i],
  [/\bsales\b/, /sales/i],
  [/\bstrategy\b|\bstrategist\b/, /strategy/i],
  [/\baccounts?\b|\baccounting\b|\bfinance\b/, /accounts/i],
  [/\bhr\b|\bhuman resources?\b|\brecruit\w*/, /^hr$/i],
  [/\bcompliance\b/, /compliance/i],
  [/\boperations?\b|\boperational\b/, /operational/i],
  [/\bquality\b/, /quality/i],
  [/\bit manager\b|\bit head\b|\bit department\b/, /it manager/i],
  [/\bmentor\b/, /mentor/i],
  [/\bbackend\b/, /backend/i],
];

// The visitor is clearly asking *who* (not what the service is).
const WHO_INTENT = /\b(who|whom|kaun|kon|konsa|kaunsa|name|names|person|people|member|members|employee|expert|experts|incharge|in charge|head|responsible|handles?|manages?|looks? after|works? on|works? as)\b/;

function areaMatches(query, role) {
  if (!WHO_INTENT.test(query)) return false;
  return AREAS.some(([q, r]) => q.test(query) && r.test(role));
}

function roleMatches(query, role) {
  if (areaMatches(query, role)) return true;
  const r = norm(role);
  // whole role or any "&"-separated part of it ("Graphic Designer & Video Editor")
  const parts = String(role).split(/&| and /i).map(norm).filter(Boolean);
  if (parts.some((p) => query.includes(p))) return true;
  if (query.includes(r)) return true;
  const words = r.split(" ").filter((w) => !GENERIC.has(w) && ROLE_WORDS.has(w));
  const qWords = new Set(query.split(" "));
  return words.some((w) => qWords.has(w) || qWords.has(`${w}s`));
}

function format(m) {
  return `**${m.name}**\n\n- **Role:** ${m.role}\n- **Team:** ${m.team}`;
}

export function teamAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const query = norm(last);
  if (!query || query.split(" ").length > 14) return null;
  const members = getTeamMembers();
  if (!members.length) return null;

  // 1) By name: full name, or first/last name when it is unique.
  const nameHits = members.filter((m) => {
    const full = norm(m.name);
    if (query.includes(full)) return true;
    const tokens = full.split(" ").filter((t) => t.length >= 4 && t !== "singh" && t !== "kumar");
    return tokens.some((t) => {
      const owners = members.filter((x) => norm(x.name).split(" ").includes(t));
      return owners.length === 1 && new RegExp(`\\b${t}\\b`).test(query);
    });
  });
  if (nameHits.length === 1) return format(nameHits[0]);
  if (nameHits.length > 1) return nameHits.map((m) => `- **${m.name}** — ${m.role} (${m.team})`).join("\n");

  // 2) By role — only when phrased like a "who is..." question or very short.
  if (!QUESTION_HINT.test(query) && query.split(" ").length > 4) return null;
  // "how many ..." / "list" questions belong to the roster answers instead.
  if (/\b(how many|kitne|total|list|all|count|number)\b/.test(query)) return null;
  if (/\b(service|services|price|cost|pricing|hire|hiring|job|jobs|career|opening|openings|vacancy)\b/.test(query)) return null;

  const roleHits = members.filter((m) => roleMatches(query, m.role));
  if (!roleHits.length) return null;
  if (roleHits.length === 1) return format(roleHits[0]);
  return roleHits.map((m) => `- **${m.name}** — ${m.role} (${m.team})`).join("\n");
}
