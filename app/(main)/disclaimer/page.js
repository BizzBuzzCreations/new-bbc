import LegalPage from "@/components/sections/legalPage";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("legal-disclaimer", {
  title: "Disclaimer | BizzBuzz Creations",
  description: "Disclaimer covering the information, services, and results published on the BizzBuzz Creations website.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/disclaimer",
  },
});
}

export default function Page() {
  return <LegalPage slug="disclaimer" />;
}
