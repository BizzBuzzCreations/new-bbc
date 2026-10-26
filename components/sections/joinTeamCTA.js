import Image from "next/image";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";

export default function JoinTeamCTA({ content }) {
  const eyebrow = content?.joinTeamEyebrow || "We’re Always Looking for Great Talent";
  const heading = content?.joinTeamHeading || "Join Our Team!";
  const paragraph = content?.joinTeamParagraph || "Bring your ideas. Build your skills. Create work you're proud of.";
  const emailButtonText = content?.joinTeamEmailButtonText || "Drop An Email";
  const careersButtonText = content?.joinTeamCareersButtonText || "See All Careers";
  const image = content?.joinTeamImage1 || "/team-images/team-5.jpeg";

  // Redesign: the team photo on the left, the heading, text and two pills
  // (email us / careers) on the right; phones: text, then photo.
  return (
    <section className="overflow-x-clip bg-black text-white">
      <div className="reveal-sides mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-16 md:px-10 pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl bg-[#0a0a0a] md:order-none">
          <Image src={image} alt="The BizzBuzz Creations team" fill sizes="(min-width: 1280px) 600px, (min-width: 768px) 48vw, 100vw" className="object-cover" />
        </div>
        <div className="order-1 md:order-none">
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-6xl">{heading}</h2>
          <RichText as="p" text={paragraph} className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill href="/career" variant="solid" className="px-6 py-3 text-base">{careersButtonText}</Pill>
            <Pill href="mailto:info@bizzbuzzcreations.com" className="px-6 py-3 text-base">{emailButtonText}</Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
