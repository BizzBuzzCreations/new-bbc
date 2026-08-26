import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("healthcare");
const content = getIndustryPageContent("healthcare");

export const metadata = {
  title: "Healthcare Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations helps hospitals, clinics and doctors grow with healthcare SEO, PPC, content and social media marketing across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/healthcare",
  },
};

export default function HealthcareIndustryPage() {
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
