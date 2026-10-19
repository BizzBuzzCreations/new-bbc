import { buildPageMetadata } from "@/lib/pageMetadata";
import OutsideLocationPage from "@/components/sections/outsideLocationPage";

// Hidden landing page — same layout as every Outside Location page (see
// components/sections/outsideLocationPage.js). Has its own editable
// content (dashboard: "Outside Location Page") and its own pageKey, so
// editing it never touches the real homepage. Deliberately not linked
// from the navbar, footer, or anywhere else on the site — only reachable
// at this exact URL (search engines / paid campaigns), which is why it's
// still listed in sitemap.xml (so it can be indexed) despite having no
// internal links.
export async function generateMetadata() {
  return buildPageMetadata("outside-location-uk", {
    title: "Digital Marketing Services in UK | BizzBuzz Creations",
    description:
      "BizzBuzz Creations offers full digital marketing services for businesses in the UK — SEO, Google Ads, social media & web development.",
    alternates: {
      canonical:
        "https://bizzbuzzcreations.com/en-uk/digital-marketing-services-in-uk",
    },
    robots: {
      // Findable in search results, but never followed/crawled onward
      // from here into the rest of the site via any link a bot might
      // otherwise assume exists on a normal landing page.
      index: true,
      follow: true,
    },
  });
}

export default function DigitalMarketingServicesInUk() {
  return <OutsideLocationPage pageKey="outside-location-uk" />;
}

// Cached (ISR) like the rest of the site — it was force-dynamic, so every
// visit waited on a full MongoDB render (~1.2s server response vs ~0.3s
// for cached pages). Dashboard saves revalidate it straight away.
export const revalidate = 60;
