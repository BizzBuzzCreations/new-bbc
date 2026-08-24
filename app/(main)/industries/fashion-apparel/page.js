import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("fashion-apparel");
const content = getIndustryPageContent("fashion-apparel");

export const metadata = {
  title: "Fashion & Apparel Digital Marketing Services | BizzBuzz Creations",
  description: industry.description,
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/fashion-apparel",
  },
};

export default function FashionApparelIndustryPage() {
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
