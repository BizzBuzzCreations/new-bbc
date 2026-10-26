import ServiceHubPage from "@/components/sections/serviceHubPage";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("service-web-development", {
  title: "Top Website Development Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations builds fast, secure, high-converting websites — custom, WordPress, Shopify — for businesses in Prayagraj, Allahabad, India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development",
  },
});
}

const staticContent = getServicePageContent("web-development");

// Layout: components/sections/serviceHubPage.js (shared by all 8 service pages).
export default async function WebDevelopment() {
  const overrides = await getPageContent("service-web-development");
  const content = mergeServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="service-web-development" />
      <ServiceHubPage
        content={content}
        label="Website Development"
        introAlt="BizzBuzz Creations web development team at work"
        trustAlt="Why businesses choose BizzBuzz Creations"
      />
    </>
  );
}
