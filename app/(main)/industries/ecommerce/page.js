import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("ecommerce");
const content = getIndustryPageContent("ecommerce");

export const metadata = {
  title: `${industry.label} Digital Marketing Services | BizzBuzz Creations`,
  description: industry.description,
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/ecommerce",
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
