import ServiceHubPage from "@/components/sections/serviceHubPage";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("service-search-engine-optimization", {
  title: "Top SEO Services & Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an SEO agency delivering search engine optimization services for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization",
  },
});
}

const staticContent = getServicePageContent("search-engine-optimization");

// Layout: components/sections/serviceHubPage.js (shared by all 8 service pages).
export default async function SearchEngineOptimization() {
  const overrides = await getPageContent("service-search-engine-optimization");
  const content = mergeServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="service-search-engine-optimization" />
      <ServiceHubPage
        content={content}
        label="Search Engine Optimization"
        introAlt="BizzBuzz Creations SEO team at work"
        trustAlt="Why businesses trust BizzBuzz Creations to rank"
      />
    </>
  );
}
