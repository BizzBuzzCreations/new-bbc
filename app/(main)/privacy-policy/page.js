import LegalPage from "@/components/sections/legalPage";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("legal-privacy-policy", {
  title: "Privacy Policy of Bizzbuzz Creations",
  description: "About our policies || Bizzbuzz Creations",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/privacy-policy",
  },
});
}

export default function Page() {
  return <LegalPage slug="privacy-policy" />;
}
