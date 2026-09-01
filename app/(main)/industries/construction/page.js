import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";

const industry = getIndustryBySlug("construction");
const staticContent = getIndustryPageContent("construction");

export const metadata = {
  title: "Construction Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a construction digital marketing agency helping contractors and builders get more leads across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/construction",
  },
};

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-construction");
  const content = mergeIndustryContent(staticContent, overrides);
  return (
    <IndustryDetailPage
      label={industry.label}
      icon={industry.icon}
      description={industry.description}
      spectrumHeading={`Our Full Spectrum of ${industry.label} Marketing Services`}
      serviceBreakdownFlip
      {...content}
    />
  );
}
