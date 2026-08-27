import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("entertainment");
const content = getIndustryPageContent("entertainment");

export const metadata = {
  title: "Entertainment Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an entertainment digital marketing agency helping artists, OTT platforms, and creators grow audiences across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/entertainment",
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
