import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";

export const metadata = {
  title: "AI Strategy Consulting Services | BizzBuzz Creations",
  description: "BizzBuzz Creations provides AI strategy consulting that helps businesses adopt AI properly across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/ai-solutions/generative-engine-optimization"
  }
};

const staticContent = getSubServicePageContent("ai-solutions", "generative-engine-optimization");

export default async function AiStrategyImplementationConsulting() {
  const overrides = await getPageContent("subservice-ai-solutions-generative-engine-optimization");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
