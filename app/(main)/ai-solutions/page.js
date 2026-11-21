import ServiceHubPage from "@/components/sections/serviceHubPage";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("service-ai-solutions", {
  title: "Top AI Solutions Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an AI solutions company building agents, content, and automation for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/ai-solutions",
  },
});
}

const staticContent = getServicePageContent("ai-solutions");

// Layout: components/sections/serviceHubPage.js (shared by all 8 service pages).
export default async function AISolutions() {
  const overrides = await getPageContent("service-ai-solutions");
  const content = mergeServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="service-ai-solutions" />
      <ServiceHubPage
        content={content}
        label="AI Solutions"
        introAlt="BizzBuzz Creations AI team at work"
        trustAlt="Why businesses trust BizzBuzz Creations with AI"
      />
    </>
  );
}
