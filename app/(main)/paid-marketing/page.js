import ServiceHubPage from "@/components/sections/serviceHubPage";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("service-paid-marketing", {
  title: "Top Paid Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a paid marketing agency running Google, Meta, and e-commerce ad campaigns for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing",
  },
});
}

const staticContent = getServicePageContent("paid-marketing");

// Layout: components/sections/serviceHubPage.js (shared by all 8 service pages).
export default async function PaidMarketing() {
  const overrides = await getPageContent("service-paid-marketing");
  const content = mergeServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="service-paid-marketing" />
      <ServiceHubPage
        content={content}
        label="Google Ads & Paid Marketing"
        introAlt="BizzBuzz Creations paid ads team at work"
        trustAlt="Why businesses trust BizzBuzz Creations with their ad spend"
      />
    </>
  );
}
