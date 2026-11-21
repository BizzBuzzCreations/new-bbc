import LegalPage from "@/components/sections/legalPage";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("legal-privacy-policy", {
  title: "Privacy Policy of BizzBuzz Creations",
  description: "Read the BizzBuzz Creations privacy policy: what personal information we collect, how we use and protect it, and the choices you have.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/privacy-policy",
  },
});
}

export default function Page() {
  return <LegalPage slug="privacy-policy" />;
}
