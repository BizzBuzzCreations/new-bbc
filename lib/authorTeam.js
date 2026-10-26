import { cache } from "react";
import { getPageContent } from "@/actions/pageContentActions";
import { TEAM_FOUNDERS, TEAM_LEADERS, BPO_TEAM, RND_TEAM } from "@/lib/teamPageContent";

// Authors who are on the team (the R&D team writes most posts) show their
// team photo and role on their author page, post byline box and cards.
// An author is matched to a team member by NAME — the blog's Author field is
// free text, so "Shakib", "Md. Shaquib" and "Mohd Shaquib" must all find
// "Md. Shaquib". The roster is read from the same dashboard fields the team
// pages use (so a photo changed there changes here), falling back to the
// built-in lists. Server-only.
const SKIP = new Set(["md", "mohd", "mohammad", "mohammed", "muhammad", "mr", "mrs", "ms", "dr"]);

// lower-case, no accents/punctuation, honorifics dropped, "q"/"qu" spelled
// "k" (Shaquib = Shakib), doubled letters collapsed (Aniket = Anniket)
function tokens(name) {
  return String(name || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t && !SKIP.has(t))
    .map((t) => t.replace(/qu/g, "k").replace(/q/g, "k").replace(/(.)\1+/g, "$1"));
}

const within1 = (a, b) => {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1 || Math.min(a.length, b.length) < 5) return false;
  // one substitution, insertion or deletion apart
  const [s, l] = a.length <= b.length ? [a, b] : [b, a];
  let i = 0;
  while (i < s.length && s[i] === l[i]) i++;
  return a.length === b.length ? s.slice(i + 1) === l.slice(i + 1) : s.slice(i) === l.slice(i + 1);
};

// the team, with where each person is listed
async function roster() {
  const [rnd, bpo, team] = await Promise.all([getPageContent("rnd-team"), getPageContent("bpo-team"), getPageContent("our-team")]);
  const pick = (saved, fallback) => (saved?.length > 0 ? saved : fallback);
  const lists = [
    [pick(rnd?.rndTeamMembers, RND_TEAM), { label: "R&D team", href: "/our-team/rnd-team" }],
    [pick(bpo?.bpoTeamMembers, BPO_TEAM), { label: "BPO team", href: "/our-team/bpo-team" }],
    [pick(team?.founders, TEAM_FOUNDERS), { label: "Founders", href: "/our-team" }],
    [pick(team?.leaders, TEAM_LEADERS), { label: "Leadership team", href: "/our-team" }],
  ];
  return lists.flatMap(([members, where]) => members.filter((m) => m?.name && m?.photo).map((m) => ({ name: m.name, role: m.role || "", photo: m.photo, team: where, tokens: tokens(m.name) })));
}
const getRoster = cache(roster);

// The team member this author name belongs to, or null — and null when more
// than one person fits (better no photo than the wrong one).
export const getTeamMember = cache(async (authorName) => {
  const mine = tokens(authorName);
  if (!mine.length) return null;
  const fits = (await getRoster()).filter((m) => mine.every((t) => m.tokens.some((u) => within1(t, u))));
  return fits.length === 1 ? { name: fits[0].name, role: fits[0].role, photo: fits[0].photo, team: fits[0].team } : null;
});
