import LegalPage from "@/components/sections/legalPage";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("legal-terms-and-conditions", {
  title: "Terms & Conditions | BizzBuzz Creations",
  description: "The terms and conditions governing use of the BizzBuzz Creations website and its digital marketing services.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/terms-and-conditions",
  },
});
}

export default function Page() {
  return <LegalPage slug="terms-and-conditions" />;
}
