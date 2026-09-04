import RndTeamGrid from "@/components/sections/rndTeamGrid";

export const metadata = {
  title: "Meet Our R&D Team | BizzBuzz Creations",
  description:
    "Meet the R&D team at BizzBuzz Creations researching AI search, automation, and emerging digital technologies for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/our-team/rnd-team",
  },
};

export default function RndTeamPage() {
  return (
    <div className="bg-black min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          Meet Our R&D Team
        </h1>
        <RndTeamGrid />
      </div>

      {/* Full-width (edge-to-edge) divider between the cards and the
          footer — deliberately outside the padded content wrapper above,
          so it spans the whole viewport width, not just the content
          column. */}
      <div className="w-full border-t border-white mt-16" />
    </div>
  );
}
