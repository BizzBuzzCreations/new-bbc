import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// "Join our team" (contact page): the team's real photograph and a plain
// invitation. Fields: joinTeamEyebrow / Heading / Paragraph / Image1 /
// CareersButtonText / EmailButtonText.
export default function JoinTeamCTA({ content }) {
  const eyebrow = content?.joinTeamEyebrow || "We’re Always Looking for Great Talent";
  const heading = content?.joinTeamHeading || "Join Our Team!";
  const paragraph = content?.joinTeamParagraph || "Bring your ideas. Build your skills. Create work you're proud of.";
  const emailButtonText = content?.joinTeamEmailButtonText || "Drop An Email";
  const careersButtonText = content?.joinTeamCareersButtonText || "See All Careers";
  const image = content?.joinTeamImage1 || "/team-images/team-5.jpeg";
  return (
    <section className="on-paper border-t border-(--line)">
      <div className="wrap grid gap-12 py-7 md:py-10 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="group relative aspect-[4/3] overflow-hidden bg-paper-2 lg:col-span-6">
          <Image src={image} alt="The BizzBuzz Creations team" fill sizes="(min-width: 1440px) 680px, (min-width: 1024px) 48vw, 100vw" className="object-cover grayscale transition-[filter,transform] duration-1000 ease-out-soft group-hover:scale-[1.02] group-hover:grayscale-0" />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Kicker>{eyebrow}</Kicker>
          <h2 className="font-display mt-8 text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em]">
            <AccentText text={heading} />
          </h2>
          <RichText as="p" text={paragraph} className="mt-6 max-w-md text-lg leading-relaxed text-(--mut)" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/career" variant="solid">{careersButtonText}</Button>
            <Button href="mailto:info@bizzbuzzcreations.com" variant="outline">{emailButtonText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
