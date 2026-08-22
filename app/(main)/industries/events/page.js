import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("events");
const content = getIndustryPageContent("events");

export const metadata = {
  title: `${industry.label} Digital Marketing Services | BizzBuzz Creations`,
  description: industry.description,
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/events",
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
