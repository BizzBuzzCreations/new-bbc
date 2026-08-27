import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("fashion-apparel");
const content = getIndustryPageContent("fashion-apparel");

export const metadata = {
  title: "Fashion Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a fashion digital marketing agency helping D2C, apparel and clothing brands grow across India and worldwide.",
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
