import LocalLandingPage from "@/components/sections/localLandingPage";
import { localPageMetadata } from "@/lib/localPages";

export async function generateMetadata() {
  return localPageMetadata("digital-marketing-agency-kanpur");
}

// Content: lib/localPages.js. Layout: components/sections/localLandingPage.js.
export default function Page() {
  return <LocalLandingPage slug="digital-marketing-agency-kanpur" />;
}
