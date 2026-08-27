import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("finance");
const content = getIndustryPageContent("finance");

export const metadata = {
  title: "Finance Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a fintech and financial services digital marketing agency helping NBFCs, insurers and lenders grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/finance",
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
