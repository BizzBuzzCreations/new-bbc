import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";

export const metadata = {
  title: "Local & City-Based Ad Campaigns | BizzBuzz Creations",
  description: "BizzBuzz Creations runs local and city-based ad campaigns that bring nearby customers across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing/local-city-based-ad-campaigns"
  }
};

const staticContent = getSubServicePageContent("paid-marketing", "local-city-based-ad-campaigns");

export default async function LocalCityBasedAdCampaigns() {
  const overrides = await getPageContent("subservice-paid-marketing-local-city-based-ad-campaigns");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
