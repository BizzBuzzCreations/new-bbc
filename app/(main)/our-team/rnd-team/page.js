import PageHero from "@/components/detail/pageHero";
import PeopleGrid from "@/components/detail/peopleGrid";
import { RND_TEAM } from "@/lib/teamPageContent";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("rnd-team", {
  title: "Meet Our R&D Team | BizzBuzz Creations",
  description:
    "Meet the R&D team at BizzBuzz Creations researching AI search, automation, and emerging digital technologies for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/our-team/rnd-team",
  },
});
}

// Redesign: the page heading (breadcrumb back to /our-team), then everyone
// on the team as photo cards. Same dashboard fields as before.
export default async function RndTeamPage() {
  const content = await getPageContent("rnd-team");
  const team = content?.rndTeamMembers?.length > 0 ? content.rndTeamMembers : RND_TEAM;

  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="rnd-team" />
      <PageHero label="R&D Team" parent={{ label: "Our Team", href: "/our-team" }} title={content?.rndTeamHeading || "Meet Our R&D Team"} />
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          {/* LinkedIn only on the founders, as before */}
          <PeopleGrid people={team.map(({ linkedin, ...p }) => p)} cols="grid-cols-2 md:grid-cols-3 lg:grid-cols-4" headingLevel="h2" />
        </div>
      </section>
    </div>
  );
}
