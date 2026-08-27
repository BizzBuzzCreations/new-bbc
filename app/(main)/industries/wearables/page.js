import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("wearables");
const content = getIndustryPageContent("wearables");

export const metadata = {
  title: "Digital Marketing for Wearable Brands | BizzBuzz Creations",
  description:
    "BizzBuzz Creations helps wearable brands grow with SEO, performance marketing, influencer campaigns and e-commerce strategies across India, the UK, and the USA.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/wearables",
  },
};

export default function IndustryPage() {
  return (
    <IndustryDetailPage
      label={industry.label}
      icon={industry.icon}
      description={industry.description}
      spectrumHeading={`Our Full Spectrum of ${industry.label} Marketing Services`}
      {...content}
    />
  );
}
