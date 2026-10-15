import { PAGE_PATHS } from "@/lib/pagePaths";
import { pageContext, hasBlogPosts } from "./knowledge";
import { editDistance } from "./fuzzy";

// SERVER ONLY. "Why am I seeing a 404?" — when the visitor is on a URL that
// doesn't exist on the site (the widget sends the current path) and asks what
// went wrong, BizzBee explains the likely reasons for THAT address and points
// to the closest real pages.

const KNOWN = new Set([
  ...Object.values(PAGE_PATHS),
  "/blog",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy",
  "/disclaimer",
]);

// Sent by sanitize.js when the path has unusual characters (never a real page).
export const INVALID_PAGE = "/invalid-page";

const normPath = (p) => String(p || "").split(/[?#]/)[0].replace(/\/+$/, "") || "/";

// True when `page` is a path that does not exist on this site.
export function isMissingPage(page) {
  if (!page) return false;
  const p = normPath(page);
  if (p === INVALID_PAGE) return true;
  if (p.startsWith("/admin") || p.startsWith("/api")) return false;
  if (KNOWN.has(p)) return false;
  if (/^\/blog\/[a-z0-9-]+$/i.test(p)) return hasBlogPosts() && !pageContext(p);
  return true;
}

// Closest real page to the mistyped address, by its last segment (typos, missing words).
function closestPage(p) {
  const seg = p.split("/").filter(Boolean).pop()?.toLowerCase();
  if (!seg || seg.length < 3) return null;
  let best = null;
  for (const path of KNOWN) {
    if (path === "/") continue;
    const target = path.split("/").filter(Boolean).pop();
    const d = editDistance(seg, target);
    const close = d <= Math.max(2, Math.floor(target.length / 4)) || target.includes(seg) || seg.includes(target);
    if (close && (!best || d < best.d)) best = { path, d };
  }
  return best?.path || null;
}

const SECTION_HINT = [
  [/^\/blog\//, "This looks like a blog article that may have been unpublished, renamed or moved. You can find all of our latest posts on the [Blog](/blog) page."],
  [/^\/career\//, "This looks like a job opening that may have closed or moved. The current vacancies are always listed under [Open Positions](/career#open-positions)."],
  [/^\/industries\//, "We serve 15 industries, and each has its own page, so the name in the address may be spelled differently. See them all on the [Industries](/industries) page."],
  [/^\/our-team\//, "The team pages live at [Our Team](/our-team), with the BPO and R&D teams under it."],
  [/\/(service|services|seo|ads|marketing|website|web|bpo|ai|automation|consult)/, "Our services each have their own page, and the full list is on the [Services](/services) page."],
];

const ASKING =
  /\b(404|not found|page (is )?(not|nahi|nhi)|(doesn'?t|does not|can'?t|cannot|isn'?t|won'?t|not|nahi|nhi) (open|opening|load|loading|work|working|found|exist|show|showing|display|khul|khulta|khul raha)|broken|error|missing|doesn'?t exist|does not exist|kyu|kyun|kyon|why|what happened|what is this|kya hua|gayab|dead link|link not)\b/;

const EXPLAIN_ANY = /\b(404|page not found|not found error)\b/;

export function notFoundAnswer(messages, page) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase();
  if (q.split(/\s+/).filter(Boolean).length > 25) return null;

  const missing = isMissingPage(page);
  // Off a 404 page, only an explicit "what is a 404?" question gets this answer.
  if (!(missing && ASKING.test(q)) && !EXPLAIN_ANY.test(q)) return null;

  const p = normPath(page);
  const shown = missing && p !== INVALID_PAGE ? p : "";
  const closest = missing && p !== INVALID_PAGE ? closestPage(p) : null;
  const hint = missing ? SECTION_HINT.find(([re]) => re.test(p))?.[1] : null;

  const lines = [
    missing
      ? `Sorry about that! 😊 You're seeing a **404 – Page Not Found** because ${shown ? `**${shown}**` : "this address"} doesn't exist on our website.`
      : "A **404 – Page Not Found** message means the address that was opened doesn't exist on the website. 😊",
    "",
    "**Why this usually happens**",
    "- **A typo in the address** — a missing letter, extra character or wrong spelling in the URL",
    "- **The page was moved, renamed or removed** — for example an old blog article or a closed job opening",
    "- **An outdated link** — an old bookmark, search result or social post pointing to a previous address",
  ];
  if (closest) lines.push("", `**Did you mean?** [${closest}](${closest})`);
  if (hint) lines.push("", hint);
  lines.push(
    "",
    "**What you can do**",
    "- Check the address for typos, or head back to the [Home page](/)",
    "- Browse our [Services](/services), [Industries](/industries) or [Blog](/blog)",
    "- Tell me what you were looking for and I'll point you to the right page, or [contact the team](/contact) if a page you expected is missing",
  );
  return lines.join("\n");
}
