import LocalLandingPage from "@/components/sections/localLandingPage";
import { localPageMetadata } from "@/lib/localPages";

export async function generateMetadata() {
  return localPageMetadata("website-development-company-prayagraj");
}

// Content: lib/localPages.js. Layout: components/sections/localLandingPage.js.
export default function Page() {
  return <LocalLandingPage slug="website-development-company-prayagraj" />;
}
