import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";

export const metadata = {
  title: "AI Social Media Marketing Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is an AI social media marketing agency combining automation and strategy for brands across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing/ai-social-media-marketing"
  }
};

const staticContent = getSubServicePageContent("social-media-marketing", "ai-social-media-marketing");

export default async function AiSocialMediaMarketing() {
  const overrides = await getPageContent("subservice-social-media-marketing-ai-social-media-marketing");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
