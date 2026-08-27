import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("manufacturing");
const content = getIndustryPageContent("manufacturing");

export const metadata = {
  title: "B2B Manufacturing Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a B2B digital marketing agency helping manufacturers and industrial companies generate leads across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/manufacturing",
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
