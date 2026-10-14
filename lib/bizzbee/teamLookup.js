import { getTeamMembers } from "./knowledge";

const GROUP_LABEL = { founders: "Founders", leaders: "Leadership team", bpo: "BPO team", rnd: "R&D team" };
const GROUP_URL = { founders: "/our-team", leaders: "/our-team", bpo: "/our-team/bpo-team", rnd: "/our-team/rnd-team" };

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
  // A one-word part like "management" ("Accounts and Management") is too generic to identify a person.
  const specificParts = parts.filter((p) => p.includes(" ") || (!GENERIC.has(p) && p !== "management"));
  if (specificParts.some((p) => new RegExp("\\b" + p + "\\b").test(query))) return true;
  if (query.includes(r)) return true;
  const words = r.split(" ").filter((w) => !GENERIC.has(w) && ROLE_WORDS.has(w));
  const qWords = new Set(query.split(" "));
  return words.some((w) => qWords.has(w) || qWords.has(`${w}s`));
}

// The two founders get a short, friendly profile instead of a "Team:" line. Everything in it
// restates what the Our Team and About pages say (no personal details are invented).
const FOUNDER_BLURB = {
  "founder & ceo":
    "Abheuday leads BizzBuzz Creations, the digital marketing and business solutions agency he started in Prayagraj in 2022 with one belief: digital marketing should connect creativity with measurable business outcomes. Entrepreneurial thinking, marketing expertise and a long-term vision are what guide how the company grows businesses with clarity and confidence.",
  "co-founder & director":
    "Utkarsh is a co-founder of BizzBuzz Creations and works alongside Abheuday to steer the company. Together they built an agency on a simple idea: digital marketing should connect creativity with measurable business outcomes, backed by entrepreneurial thinking and a long-term vision.",
};

function founderCard(m) {
  const blurb = FOUNDER_BLURB[m.role.toLowerCase()] || "One of the founders of BizzBuzz Creations.";
  return [
    `**${m.name}**`,
    "",
    `- **Role:** ${m.role} at BizzBuzz Creations`,
    "",
    blurb,
    "",
    "Curious about the people behind the work? Ask me about our leadership team, or [meet the whole team](/our-team). 😊",
  ].join("\n");
}

function format(m) {
  if (m.group === "founders") return founderCard(m);
  return `**${m.name}**\n\n- **Role:** ${m.role}\n- **Team:** ${m.team}`;
}

// One line in a multi-person answer (the founders' team label is redundant).
const line = (m) => (m.group === "founders" ? `- **${m.name}** — ${m.role}` : `- **${m.name}** — ${m.role} (${m.team})`);

// Headcount / roster questions. Whole company -> numbers only; one department -> that department.
const COUNT_INTENT = /\b(how many|kitne|total|count|strength|headcount|size|number of)\b/;
const PEOPLE_WORD = /\b(member|members|people|persons?|employees?|staff|log|team|workers?|advisors?)\b/;
const LIST_INTENT = /\b(who are|who r|list|all|names?|show|meet|kaun kaun|members)\b/;

function groupOf(query) {
  if (/\b(team leader|team lead)\b/.test(query)) return null;
  if (/\b(bpo|call cent(er|re))\b/.test(query)) return "bpo";
  if (/\brnd\b|\bresearch and development\b/.test(query)) return "rnd";
  if (/\b(leaders|leadership|leader|managers|management team)\b/.test(query)) return "leaders";
  if (/\b(founders|co ?founders)\b/.test(query)) return "founders";
  return null;
}

function groupReply(members, group) {
  const list = members.filter((m) => m.group === group);
  if (!list.length) return null;
  const byRole = new Map();
  for (const m of list) byRole.set(m.role, [...(byRole.get(m.role) || []), m.name]);
  const lines = [...byRole].map(([role, names]) =>
    names.length === 1 ? `- **${role}:** ${names[0]}` : `- **${role} (${names.length}):** ${names.join(", ")}`,
  );
  const head = group === "founders" ? `There are **${list.length}** founders:` : `The **${GROUP_LABEL[group]}** has **${list.length}** members:`;
  return `${head}\n\n${lines.join("\n")}\n\n[See the team](${GROUP_URL[group]})`;
}

function rosterAnswer(query, members) {
  const group = groupOf(query);
  const count = COUNT_INTENT.test(query) && PEOPLE_WORD.test(query);
  if (group && (count || LIST_INTENT.test(query) || /\b(team|leaders|leadership|founders)\b/.test(query))) {
    return groupReply(members, group);
  }
  if (!group && count) {
    const n = (g) => members.filter((m) => m.group === g).length;
    const total = members.length;
    return [
      `BizzBuzz Creations has **${total} members** in total:`,
      "",
      `- **Founders:** ${n("founders")}`,
      `- **Leadership team:** ${n("leaders")}`,
      `- **BPO team:** ${n("bpo")}`,
      `- **R&D team:** ${n("rnd")}`,
    ].join("\n");
  }
  return null;
}

export function teamAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const query = norm(last);
  if (!query || query.split(" ").length > 14) return null;
  const members = getTeamMembers();
  if (!members.length) return null;

  const roster = rosterAnswer(query, members);
  if (roster) return roster;

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
  if (nameHits.length > 1) return nameHits.map(line).join("\n");

  // 2) By role — only when phrased like a "who is..." question or very short.
  if (!QUESTION_HINT.test(query) && query.split(" ").length > 4) return null;
  // "how many ..." / "list" questions belong to the roster answers instead.
  if (/\b(how many|kitne|total|list|all|count|number)\b/.test(query)) return null;
  if (/\b(service|services|price|cost|pricing|hire|hiring|job|jobs|career|opening|openings|vacancy)\b/.test(query)) return null;

  const roleHits = members.filter((m) => roleMatches(query, m.role));
  if (!roleHits.length) return null;
  if (roleHits.length === 1) return format(roleHits[0]);
  return roleHits.map(line).join("\n");
}
