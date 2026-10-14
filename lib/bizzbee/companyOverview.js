import { CONTACT } from "./config";
import { getTeamMembers } from "./knowledge";
import { TAGLINE } from "./brandMeaning";

// SERVER ONLY. "I want to know about BizzBuzz / BBC" -> a short company
// profile: when it was established, who founded it, what it does, which
// services it provides, where it is based. Everything restates facts that
// are published on the About / Our Team / Services / Contact pages.

const BRAND = /\bbizz\s*-?\s*buzz(\s+creations?)?\b|\bbbc\b/;

// Words that may appear in an "about the company" question without
// narrowing it to something else (a service, a person, pricing...).
const FILLER = new Set(
  `i we you your yours me my us our want wanna to know knowing about tell tells share give explain describe details detail info information
   introduce introduction overview the a an is are was what whats who this that it of and also please can could kindly
   bbc bizzbuzz bizz buzz creations creation company companies agency firm organisation organization business
   kab kisne kya karti karta hai hain ho btao batao bataye bataiye jaankari ke ki ka baare mein se establish established founded found start started
   service services provide provides provided offer offers do does done work works history story kaun`.split(/\s+/),
);

const tokens = (q) => q.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);

export function companyOverviewAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase();
  if (!BRAND.test(q)) return null;
  const words = tokens(q);
  if (words.length > 16) return null;
  // Anything beyond brand + filler means a narrower question — let other handlers deal with it.
  if (words.some((w) => !FILLER.has(w))) return null;

  const founders = getTeamMembers().filter((m) => m.group === "founders");
  const founderLine = founders.length
    ? founders.map((m) => `${m.name} (${m.role})`).join(" and ")
    : "Abheuday Mishra (Founder & CEO) and Utkarsh Mishra (Co-Founder & Director)";

  return [
    "**BizzBuzz Creations**",
    "",
    "A digital marketing and business solutions agency, helping businesses grow through strategy, creativity and technology.",
    "",
    "**At a glance**",
    "- **Established:** 2022, in Prayagraj (Allahabad), India",
    `- **Founded by:** ${founderLine}`,
    "- **Based in:** Prayagraj (HQ), Kanpur and London (UK)",
    "- **Works with:** businesses across India, the UK, the US and beyond",
    "- **Track record:** 90+ projects delivered for 50+ clients",
    `- **Motto:** ${TAGLINE}`,
    "",
    "**Services we provide**",
    "1. [SEO](/search-engine-optimization) — visibility, local SEO and AI search",
    "2. [Social Media Marketing](/social-media-marketing) — content, management, paid social",
    "3. [Google Ads & Paid Marketing](/paid-marketing) — leads and ROI campaigns",
    "4. [Website Design & Development](/web-development) — fast, SEO-friendly sites",
    "5. [BPO & Customer Support](/bpo-services) — support, call center, back-office",
    "6. [AI Solutions](/ai-solutions) — chatbots, voice agents, automation",
    "7. [Marketing Automation](/marketing-automation) — CRM, email, WhatsApp",
    "8. [Business Consultancy](/business-consultancy) — strategy and growth",
    "",
    `[Read our full story](/about) · [Contact us](/contact) · ${CONTACT.email}`,
  ].join("\n");
}
