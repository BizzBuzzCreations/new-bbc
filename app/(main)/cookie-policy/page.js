import LegalPage from "@/components/sections/legalPage";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("legal-cookie-policy", {
  title: "Cookie Policy | BizzBuzz Creations",
  description: "How BizzBuzz Creations uses cookies and similar technologies on its website.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/cookie-policy",
  },
});
}

export default function Page() {
  return <LegalPage slug="cookie-policy" />;
}
