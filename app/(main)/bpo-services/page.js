import ServiceHubPage from "@/components/sections/serviceHubPage";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("service-bpo-services", {
  title: "Top BPO & Outsourcing Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a BPO and outsourcing company providing call center, automation, and support services worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services",
  },
});
}

const staticContent = getServicePageContent("bpo-services");

// Layout: components/sections/serviceHubPage.js (shared by all 8 service pages).
export default async function BPO() {
  const overrides = await getPageContent("service-bpo-services");
  const content = mergeServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="service-bpo-services" />
      <ServiceHubPage
        content={content}
        label="BPO Services"
        introAlt="BizzBuzz Creations support agent handling client work"
        trustAlt="Why businesses trust BizzBuzz Creations with their operations"
      />
    </>
  );
}
