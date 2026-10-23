import ServiceHubPage from "@/components/sections/serviceHubPage";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("service-social-media-marketing", {
  title: "Top Social Media Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a social media marketing agency managing strategy, ads, and content for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing",
  },
});
}

const staticContent = getServicePageContent("social-media-marketing");

// Layout: components/sections/serviceHubPage.js (shared by all 8 service pages).
export default async function SocialMediaMarketing() {
  const overrides = await getPageContent("service-social-media-marketing");
  const content = mergeServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="service-social-media-marketing" />
      <ServiceHubPage
        content={content}
        label="Social Media Marketing"
        introAlt="BizzBuzz Creations social media team at work"
        trustAlt="Why brands choose BizzBuzz Creations"
      />
    </>
  );
}
