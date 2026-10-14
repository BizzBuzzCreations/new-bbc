import { PAGE_PATHS } from "@/lib/pagePaths";
import { CONTACT } from "./config";

// Only these destinations may be rendered as clickable links in a BizzBee
// message — verified site routes plus the official contact channels. Used
// by both the prompt (to list routes) and the message renderer (to refuse
// anything else the model might invent or be tricked into emitting).
const EXTRA_PATHS = ["/blog", "/privacy-policy", "/terms-and-conditions", "/cookie-policy", "/disclaimer", "/en-uk/digital-marketing-services-in-uk"];

export const ALLOWED_PATHS = new Set([
  ...Object.values(PAGE_PATHS).filter((p) => !p.startsWith("/en-uk/")),
  ...EXTRA_PATHS,
]);

const ALLOWED_EXACT = new Set([
  // Official social profiles (the footer's social media icons).
  "https://www.instagram.com/bizzbuzzcreations",
  "https://www.facebook.com/bizzbuzzcreation/",
  "https://www.facebook.com/bizzbuzzcreation",
  "https://x.com/BizzBuzzAgency",
  "https://www.youtube.com/@bizzbuzzcreations",
  "https://www.linkedin.com/company/bizz-buzz-creations",
  // Our own products, linked from the homepage Clio AI / Praxistence sections.
  "https://clio.praxistence.com",
  "https://clio.praxistence.com/",
  "https://praxistence.com",
  "https://praxistence.com/",
  CONTACT.whatsappUrl,
  `tel:${CONTACT.phoneIndiaTel}`,
  `tel:${CONTACT.phoneUkTel}`,
  `mailto:${CONTACT.email}`,
]);

// In-page anchors a message may link to (path -> allowed #fragments). The
// fragment is kept only if it is listed here; any other fragment is dropped.
const ALLOWED_ANCHORS = { "/career": new Set(["open-positions"]) };

// Returns { type: "internal", href } | { type: "external", href } | null
export function resolveLink(rawHref) {
  const href = String(rawHref || "").trim();
  if (!href) return null;
  if (ALLOWED_EXACT.has(href)) return { type: "external", href };

  let path = null;
  if (href.startsWith("/") && !href.startsWith("//")) path = href;
  else if (href.startsWith(`${CONTACT.site}/`) || href === CONTACT.site) {
    path = href.slice(CONTACT.site.length) || "/";
  }
  if (path === null) return null;

  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  if (ALLOWED_PATHS.has(clean)) {
    const hash = path.includes("#") ? path.split("#")[1] : "";
    const anchor = ALLOWED_ANCHORS[clean]?.has(hash) ? `#${hash}` : "";
    return { type: "internal", href: clean + anchor };
  }
  // Blog posts live at /blog/<slug>.
  if (/^\/blog\/[a-z0-9-]+$/.test(clean)) return { type: "internal", href: clean };
  return null;
}
