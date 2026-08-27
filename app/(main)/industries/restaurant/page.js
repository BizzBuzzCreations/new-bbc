import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("restaurant");
const content = getIndustryPageContent("restaurant");

export const metadata = {
  title: "Restaurant Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a restaurant digital marketing agency helping restaurants, cafes, and cloud kitchens grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/restaurant",
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
