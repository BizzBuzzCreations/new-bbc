// SERVER ONLY. "Are you legally verified / certified?", "do you have ISO?",
// "are you a Google Partner?" — answered from the company's credentials, as
// shown on the About page and homepage ("Recognised for Excellence").

export const CERTIFICATIONS = [
  { key: "clutch", name: "Clutch", status: "Verified Partner", note: "listed among trusted digital marketing agencies on Clutch" },
  { key: "google-partner", name: "Google Partner", status: "Certified", note: "Certified Google Ads & Marketing Partner" },
  { key: "google-analytics", name: "Google Analytics", status: "Certified", note: "Certified Google Analytics Partner" },
  { key: "iso", name: "ISO", status: "Certified", note: "quality-certified business processes" },
];

const ASKS =
  /\b(legal|legally|legit|legitimate|verified|verify|certif\w*|licen[cs]\w*|registered|registration|accredit\w*|authori[sz]ed|authentic|genuine|badges?|awards?|recogni[sz]\w*|credentials?|iso|clutch)\b/;
const ABOUT_COMPANY = /\b(you|your|u|bizzbuzz|bbc|company|agency|firm|team|yours)\b/;
const OTHER = /\b(price|pricing|cost|job|jobs|career|hire|hiring|seo|ads|marketing automation)\b/;

const SPECIFIC = [
  [/\biso\b/, "iso"],
  [/\bclutch\b/, "clutch"],
  [/\bgoogle (ads )?(marketing )?partner\b|\bgoogle ads partner\b|\bgoogle certified\b/, "google-partner"],
  [/\bgoogle analytics\b/, "google-analytics"],
];

const list = () => CERTIFICATIONS.map((c) => `- **${c.name}** — ${c.status}`).join("\n");

export function credentialsAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase().replace(/[?!.,]/g, " ").replace(/\s+/g, " ").trim();
  if (!q || q.split(" ").length > 16) return null;
  if (OTHER.test(q)) return null;
  // "google analytics" alone could be about the service — it needs a trust word.
  const trustWord = /\b(legal|legally|legit|verified|verify|certif\w*|licen[cs]\w*|registered|accredit\w*|authori[sz]ed|badges?|credentials?|partner)\b/.test(q);
  const named = SPECIFIC.filter(([re]) => re.test(q)).map(([, key]) => CERTIFICATIONS.find((c) => c.key === key));
  const asks = ASKS.test(q) || (named.length > 0 && trustWord);
  if (!asks) return null;
  if (!trustWord && !ABOUT_COMPANY.test(q)) return null;

  if (named.length === 1) {
    const c = named[0];
    return [
      `Yes — we are **${c.name} ${c.status}** (${c.note}).`,
      "",
      "We hold four certifications in all:",
      "",
      list(),
      "",
      "See these badges on our [About page](/about).",
    ].join("\n");
  }

  return [
    "Yes — we are legally certified and verified! 🎉 Here are the certifications we hold:",
    "",
    list(),
    "",
    "These reflect our verified partnerships and quality-certified business processes. You can see the badges on our [About page](/about).",
  ].join("\n");
}
