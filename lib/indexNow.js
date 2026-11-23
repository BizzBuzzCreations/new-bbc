// IndexNow: tells Bing (and the other search engines that take part: Yandex,
// Naver, Seznam, Yep) the moment a page is published, changed or removed,
// instead of waiting days for their crawler to come back. Google does not
// take part in IndexNow.
//
// How it proves the site is ours: the key below is also served as a plain
// file at /<key>.txt (public/<key>.txt). The key is meant to be public.
// Nothing here can break a save: it never throws and never blocks.
import { SITE_URL } from "./pagePaths.js";

export const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "4f3450921812b375f12cf64cdba548ca";
// INDEXNOW_ENDPOINT only exists so tests can point this at a local stub.
const endpoint = () => process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";

// Only the real site announces itself: production builds, and not against a
// local test database. INDEXNOW_DISABLED=1 switches it off.
export function indexNowEnabled() {
  if (process.env.INDEXNOW_ENDPOINT) return true; // test stub
  if (process.env.NODE_ENV !== "production") return false;
  if (process.env.INDEXNOW_DISABLED === "1") return false;
  if (/(^|[/@])(127\.0\.0\.1|localhost)([:/]|$)/.test(process.env.MONGO_URI || "")) return false;
  return true;
}

export const blogUrl = (slug) => `${SITE_URL}/blog/${slug}`;

// urls: absolute URLs on this site (max 10,000 per call). Returns a small
// result object for logging/tests; never throws.
export async function submitToIndexNow(urls, { force = false, fetchImpl = fetch } = {}) {
  try {
    const list = [...new Set((urls || []).filter((u) => typeof u === "string" && u.startsWith(SITE_URL)))].slice(0, 10000);
    if (!list.length) return { sent: false, reason: "no urls" };
    if (!force && !indexNowEnabled()) return { sent: false, reason: "disabled", count: list.length };
    const res = await fetchImpl(endpoint(), {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: new URL(SITE_URL).host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: list,
      }),
      signal: AbortSignal.timeout(8000),
    });
    return { sent: true, status: res.status, count: list.length };
  } catch (error) {
    console.error("IndexNow submit failed:", error?.message || error);
    return { sent: false, reason: "error" };
  }
}
