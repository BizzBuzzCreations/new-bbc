import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";

export const metadata = {
  title: "AI Search Optimization Services | BizzBuzz Creations",
  description: "BizzBuzz Creations offers AI search optimization services that improve visibility across AI search results in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization/ai-search-optimization"
  }
};

const staticContent = getSubServicePageContent("search-engine-optimization", "ai-search-optimization");

export default async function AiSearchOptimization() {
  const overrides = await getPageContent("subservice-search-engine-optimization-ai-search-optimization");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
