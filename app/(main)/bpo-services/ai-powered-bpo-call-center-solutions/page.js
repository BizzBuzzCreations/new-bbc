import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";

export const metadata = {
  title: "AI-Powered BPO & Call Center Solutions | BizzBuzz Creations",
  description: "BizzBuzz Creations delivers AI-powered BPO and call center solutions for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services/ai-powered-bpo-call-center-solutions"
  }
};

const staticContent = getSubServicePageContent("bpo-services", "ai-powered-bpo-call-center-solutions");

export default async function AiPoweredBpoCallCenterSolutions() {
  const overrides = await getPageContent("subservice-bpo-services-ai-powered-bpo-call-center-solutions");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
