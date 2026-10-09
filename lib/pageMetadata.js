import { getPageContent } from "@/actions/pageContentActions";
import { SITE_URL } from "@/lib/pagePaths";
import {
  absoluteUrl,
  normalizeHreflang,
  publicPathFor,
  splitKeywords,
} from "@/lib/seo";

// Site-wide fallback preview image when a page has no OG image set.
const DEFAULT_SHARE_IMAGE = "/bbc-logo.png";

// Social crawlers need absolute, URL-encoded image links (local files like
// "/BBC Dark Logo.png" contain spaces).
const absoluteImage = (src) =>
  src && src.startsWith("/") ? absoluteUrl(encodeURI(src)) : src;

// Shared by every page's generateMetadata() — pulls everything the
// dashboard saves for a page (meta title/description, URL slug, canonical,
// keywords, Open Graph + X/Twitter tags, index/follow) and falls back to
// the page's own real, hardcoded metadata whenever nothing's been saved
// yet, so nothing goes blank before an admin edits it. Any other metadata
// keys (icons, ...) pass through untouched from `fallback`.
export async function buildPageMetadata(pageKey, fallback) {
  const content = await getPageContent(pageKey);

  const title = content?.metaTitle || fallback.title;
  const description = content?.metaDescription || fallback.description;
  const meta = { ...fallback, title, description };

  // Canonical: an explicit one wins; otherwise, if the page's URL slug was
  // changed, canonical follows the new URL; otherwise the page's own.
  const slugPath = content?.seoSlug
    ? publicPathFor(pageKey, content.seoSlug)
    : null;
  const canonical =
    content?.seoCanonical ||
    (slugPath ? absoluteUrl(slugPath) : fallback.alternates?.canonical);
  if (canonical) {
    meta.alternates = { ...fallback.alternates, canonical };
  }

  // Hreflang rows -> <link rel="alternate" hreflang="..." href="...">.
  const hreflang = normalizeHreflang(content?.hreflang);
  if (hreflang.length) {
    meta.alternates = {
      ...(meta.alternates || fallback.alternates),
      languages: {
        ...(fallback.alternates?.languages || {}),
        ...Object.fromEntries(hreflang.map((r) => [r.lang, r.url])),
      },
    };
  }

  const keywords = [
    content?.seoPrimaryKeyword,
    ...splitKeywords(content?.seoSecondaryKeywords),
  ].filter(Boolean);
  if (keywords.length) meta.keywords = keywords;

  // Open Graph + X/Twitter are ALWAYS emitted in full (title, description,
  // url, type, image), not only when the dashboard saved something — a
  // partial/missing og:image or og:url makes WhatsApp, LinkedIn and
  // Facebook show a bare link instead of a proper preview card. Blank
  // dashboard fields fall back to the Meta title/description, then the
  // page's own metadata, then a site-wide default image.
  const fbOg = fallback.openGraph || {};
  const ogImageSrc = content?.ogImage || fbOg.images?.[0]?.url || fbOg.images?.[0];
  const ogImage = absoluteImage(ogImageSrc || DEFAULT_SHARE_IMAGE);
  const ogUrl = canonical || fbOg.url || SITE_URL;
  const ogTitle = content?.ogTitle || fbOg.title || title;
  const ogDescription = content?.ogDescription || fbOg.description || description;
  meta.openGraph = {
    siteName: "Digital Marketing Agency",
    type: "website",
    locale: "en_IN",
    ...fbOg,
    title: ogTitle,
    description: ogDescription,
    url: ogUrl,
    images: [{ url: ogImage, alt: ogTitle }],
  };

  const fbTw = fallback.twitter || {};
  const twImageSrc = content?.twImage || content?.ogImage || fbTw.images?.[0];
  meta.twitter = {
    card: "summary_large_image",
    ...fbTw,
    title: content?.twTitle || fbTw.title || ogTitle,
    description: content?.twDescription || fbTw.description || ogDescription,
    images: [absoluteImage(twImageSrc || ogImage)],
  };

  const index = content?.robotsIndex === "noindex" ? false : true;
  const follow = content?.robotsFollow === "nofollow" ? false : true;
  if (!index || !follow) {
    meta.robots = { index, follow };
  }

  return meta;
}
