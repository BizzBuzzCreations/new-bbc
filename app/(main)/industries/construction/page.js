import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("construction");
const content = getIndustryPageContent("construction");

export const metadata = {
  title: "Construction Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a construction digital marketing agency helping contractors and builders get more leads across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/construction",
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
