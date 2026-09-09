import BpoTeamGrid from "@/components/sections/bpoTeamGrid";

export const metadata = {
  title: "Meet Our BPO Team | BizzBuzz Creations",
  description:
    "Meet the BPO team at BizzBuzz Creations handling customer support, call handling, and back-office work for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/our-team/bpo-team",
  },
};

export default function BpoTeamPage() {
  return (
    <div className="bg-black min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          Meet Our BPO Team
        </h1>
        <BpoTeamGrid />
      </div>

      {/* Full-width (edge-to-edge) divider between the cards and the
          footer — deliberately outside the padded content wrapper above,
          so it spans the whole viewport width, not just the content
          column. */}
      <div className="w-full border-t border-white mt-16" />
    </div>
  );
}
