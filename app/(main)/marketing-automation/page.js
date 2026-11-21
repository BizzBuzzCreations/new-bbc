import ServiceHubPage from "@/components/sections/serviceHubPage";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("service-marketing-automation", {
  title: "Top Marketing Automation Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a marketing automation agency connecting email, CRM and WhatsApp for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/marketing-automation",
  },
});
}

const staticContent = getServicePageContent("marketing-automation");

// Layout: components/sections/serviceHubPage.js (shared by all 8 service pages).
export default async function MarketingAutomation() {
  const overrides = await getPageContent("service-marketing-automation");
  const content = mergeServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="service-marketing-automation" />
      <ServiceHubPage
        content={content}
        label="Marketing Automation"
        introAlt="BizzBuzz Creations marketing automation team at work"
        trustAlt="Why businesses trust BizzBuzz Creations' automation"
      />
    </>
  );
}
