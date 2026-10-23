import ServiceHubPage from "@/components/sections/serviceHubPage";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("service-business-consultancy", {
  title: "Top Business Consulting Firm | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a business consulting firm advising on strategy, growth and operations for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy",
  },
});
}

const staticContent = getServicePageContent("business-consultancy");

// Layout: components/sections/serviceHubPage.js (shared by all 8 service pages).
export default async function BusinessConsultancy() {
  const overrides = await getPageContent("service-business-consultancy");
  const content = mergeServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="service-business-consultancy" />
      <ServiceHubPage
        content={content}
        label="Business Consultancy"
        introAlt="BizzBuzz Creations business consultants at work"
        trustAlt="Why businesses trust BizzBuzz Creations' advice"
      />
    </>
  );
}
