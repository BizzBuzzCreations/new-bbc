// Which local landing page (lib/localPages.js) a blog post should point to.
// Only when the post is clearly about a place AND a service we have a local
// page for: a Prayagraj post about SEO -> /seo-company-prayagraj, about ads
// -> /google-ads-agency-prayagraj, about websites ->
// /website-development-company-prayagraj, any Kanpur post ->
// /digital-marketing-agency-kanpur. Anything else gets no local link, so
// the link always fits what the reader just read. Looks at the title,
// category and tags only (not the body), like the rest of the post's links.
const PRAYAGRAJ = /prayagraj|allahabad/i;
const KANPUR = /kanpur/i;
const ADS = /\bppc\b|\bads?\b|advertis|google ads|meta ads|facebook ads|campaign/i;
const WEB = /website|web ?dev|wordpress|woocommerce|shopify|landing page|ecommerce|e-commerce/i;
const SEO = /\bseo\b|search engine|local search|google maps|google business|ranking|listing|digital marketing (company|agency|services?)/i;

export function pickLocalPage(post) {
  const text = [post?.title, post?.category, Array.isArray(post?.tags) ? post.tags.join(" ") : post?.tags]
    .filter(Boolean)
    .join(" ");
  if (KANPUR.test(text)) {
    return { href: "/digital-marketing-agency-kanpur", name: "Digital marketing agency in Kanpur", line: "Our Lal Bangla office: SEO, ads, social media and websites for Kanpur businesses." };
  }
  if (!PRAYAGRAJ.test(text)) return null;
  if (ADS.test(text)) return { href: "/google-ads-agency-prayagraj", name: "Google Ads agency in Prayagraj", line: "Search and Meta ads managed by our Civil Lines team, with clear reports." };
  if (WEB.test(text)) return { href: "/website-development-company-prayagraj", name: "Website development in Prayagraj", line: "Fast, search-friendly websites built by our Civil Lines team." };
  if (SEO.test(text)) return { href: "/seo-company-prayagraj", name: "SEO company in Prayagraj", line: "Local SEO, Google Maps and AI-search visibility from our Civil Lines team." };
  return null;
}
