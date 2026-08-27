import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";

const industry = getIndustryBySlug("ecommerce");
const content = getIndustryPageContent("ecommerce");

export const metadata = {
  title: "E-commerce Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an e-commerce digital marketing agency helping D2C brands, Shopify and Amazon sellers grow sales across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/ecommerce",
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
