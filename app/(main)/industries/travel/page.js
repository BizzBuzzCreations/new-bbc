import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("travel");
const content = getIndustryPageContent("travel");

export const metadata = {
  title: "Travel Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a travel digital marketing agency helping travel agencies, hotels and tour operators grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/travel",
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
