import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("education");
const content = getIndustryPageContent("education");

export const metadata = {
  title: "Education Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an education digital marketing agency helping schools, coaching institutes, and EdTech brands grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/education",
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
