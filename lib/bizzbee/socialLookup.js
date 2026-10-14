import { CONTACT } from "./config";

// SERVER ONLY. "Are you on Instagram?", "your social media links", "how do I
// follow you?" — answered with the official profiles linked from the website
// footer (the social media icons). Only these profiles are ever shown.

export const SOCIAL_PROFILES = [
  { key: "instagram", name: "Instagram", handle: "@bizzbuzzcreations", href: "https://www.instagram.com/bizzbuzzcreations", words: /\b(instagram|insta|ig|reels?)\b/ },
  { key: "facebook", name: "Facebook", handle: "BizzBuzz Creation", href: "https://www.facebook.com/bizzbuzzcreation/", words: /\b(facebook|fb|meta page)\b/ },
  { key: "x", name: "X (Twitter)", handle: "@BizzBuzzAgency", href: "https://x.com/BizzBuzzAgency", words: /\b(twitter|x\.com|tweets?)\b|\bon x\b|\bx (account|handle|profile|page)\b/ },
  { key: "youtube", name: "YouTube", handle: "@bizzbuzzcreations", href: "https://www.youtube.com/@bizzbuzzcreations", words: /\b(youtube|yt|you tube)\b/ },
  { key: "linkedin", name: "LinkedIn", handle: "BizzBuzz Creations (company page)", href: "https://www.linkedin.com/company/bizz-buzz-creations", words: /\b(linkedin|linked in)\b/ },
];

// Platforms people ask about that we don't list.
const OTHER_PLATFORMS = /\b(snapchat|snap|pinterest|threads|telegram|tiktok|tik tok|reddit|quora|discord)\b/;

const GENERAL =
  /\b(social media|socials?|social (links?|accounts?|handles?|profiles?|pages?|presence|icons?|networks?|platforms?))\b/;
// Questions about the *service* (marketing, ads, management...) are not profile questions.
const SERVICE_TALK =
  /\b(marketing|ads?|advertis\w*|management|manage|agency|services?|campaigns?|strategy|growth|followers|likes|price|pricing|cost|reels? marketing|content|seo|jobs?|career)\b/;
const PROFILE_ASK =
  /\b(follow|following|link|links|handle|handles|id|ids|account|accounts|profile|profiles|page|pages|channel|username|find you|find us|connect|available|present|active|do you have|are you on|is bizzbuzz on|where can i|visit|url|icons?)\b/;
const COMPANY_CUE = /\b(you|your|u|ur|bizzbuzz|bbc|company|agency|yours|us)\b/;

const bullet = (p) => `- **${p.name}:** [${p.handle}](${p.href})`;

export function socialAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase().replace(/[?!,]/g, " ").replace(/\s+/g, " ").trim();
  if (!q || q.split(" ").length > 16) return null;

  const named = SOCIAL_PROFILES.filter((p) => p.words.test(q));
  const general = GENERAL.test(q) || /follow (you|us|bizzbuzz|bbc)|(how|where) (can|do) i follow/.test(q);
  const other = OTHER_PLATFORMS.test(q);
  const whatsapp = /\bwhats ?app\b/.test(q);
  if (!named.length && !general && !other) return null;

  // A service question ("instagram marketing", "social media management") belongs to the service handlers.
  if (SERVICE_TALK.test(q) && !/\b(follow|link|links|handle|account|accounts|profile|profiles)\b/.test(q)) return null;
  if (!(PROFILE_ASK.test(q) || (COMPANY_CUE.test(q) && (general || other)))) return null;
  if (named.length && !COMPANY_CUE.test(q) && !PROFILE_ASK.test(q)) return null;

  if (whatsapp && !named.length && !general) return null; // WhatsApp is a contact channel (contact handler)

  if (named.length === 1 && !general) {
    const p = named[0];
    return [
      `Yes — we're on **${p.name}**: [${p.handle}](${p.href})`,
      "",
      "You can also find us here:",
      "",
      ...SOCIAL_PROFILES.filter((x) => x.key !== p.key).map(bullet),
    ].join("\n");
  }

  const head = other
    ? "We're not listed on that platform, but you can follow BizzBuzz Creations here:"
    : "You can find and follow BizzBuzz Creations on:";
  return [
    head,
    "",
    ...SOCIAL_PROFILES.map(bullet),
    "",
    `For anything else, reach us at [${CONTACT.email}](mailto:${CONTACT.email}) or on the [Contact page](/contact).`,
  ].join("\n");
}
