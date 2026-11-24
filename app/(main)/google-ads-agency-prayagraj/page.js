import LocalLandingPage from "@/components/sections/localLandingPage";
import { localPageMetadata } from "@/lib/localPages";

export async function generateMetadata() {
  return localPageMetadata("google-ads-agency-prayagraj");
}

// Content: lib/localPages.js. Layout: components/sections/localLandingPage.js.
export default function Page() {
  return <LocalLandingPage slug="google-ads-agency-prayagraj" />;
}
