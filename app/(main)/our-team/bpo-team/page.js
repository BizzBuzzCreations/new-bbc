import PageHero from "@/components/detail/pageHero";
import PeopleGrid from "@/components/detail/peopleGrid";
import { BPO_TEAM } from "@/lib/teamPageContent";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("bpo-team", {
  title: "Meet Our BPO Team | BizzBuzz Creations",
  description:
    "Meet the BPO team at BizzBuzz Creations handling customer support, call handling, and back-office work for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/our-team/bpo-team",
  },
});
}

// Redesign: the page heading (breadcrumb back to /our-team), then everyone
// on the team as photo cards. Same dashboard fields as before.
export default async function BpoTeamPage() {
  const content = await getPageContent("bpo-team");
  const team = content?.bpoTeamMembers?.length > 0 ? content.bpoTeamMembers.filter((p) => p.name !== "Monika Sharma") : BPO_TEAM;

  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="bpo-team" />
      <PageHero label="BPO Team" parent={{ label: "Our Team", href: "/our-team" }} title={content?.bpoTeamHeading || "Meet Our BPO Team"} />
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <PeopleGrid people={team} cols="grid-cols-2 md:grid-cols-3 lg:grid-cols-4" headingLevel="h2" />
        </div>
      </section>
    </div>
  );
}
