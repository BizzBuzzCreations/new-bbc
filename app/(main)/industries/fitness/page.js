import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("fitness");
const content = getIndustryPageContent("fitness");

export const metadata = {
  title: "Fitness Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a fitness digital marketing agency helping gyms, studios, and personal trainers get more leads and members across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/fitness",
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
