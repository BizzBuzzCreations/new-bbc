import Image from "next/image";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import LightUpText from "@/components/home/lightUpText";

// About (redesign) — the old About block and the separate statement line in
// one calm section: label + heading with the whole team photo under it on
// the left (its own shape, never cropped or enlarged, so it stays sharp),
// the paragraph and a link on the right, then the statement lighting up
// word by word. On phones: heading, photo, text. Same dashboard fields.
export default function AboutV2({ content, showStatement = true }) {
  const eyebrow = content?.aboutEyebrow || "About Us";
  const heading = content?.aboutHeading || "We Are BizzBuzz Creations";
  const paragraph =
    content?.aboutParagraph ||
    "BizzBuzz Creations is a digital marketing and business solutions agency helping businesses in Prayagraj (Allahabad), across India, and international markets build a stronger digital presence.";
  const buttonText = content?.aboutButtonText || "Know More About Us";
  const buttonLink = content?.aboutButtonLink || "/about";
  const saved = content?.aboutBackgroundImage;
  const photo = !saved || saved === "/bbc-building.png" ? "/about-home.png" : saved;
  const statement = content?.zoomTagline || "One team, every capability — built to help your business grow.";

  return (
    <section className="bg-black text-white">
      <div className="reveal-stagger mx-auto grid max-w-7xl gap-10 px-6 md:px-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          <div className="relative mt-8 aspect-[1705/922] overflow-hidden rounded-3xl bg-[#0a0a0a] md:mt-10">
            <Image src={photo} alt="The BizzBuzz Creations team at work" fill sizes="(min-width: 1280px) 568px, (min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div>
          <RichText as="div" text={paragraph} className="space-y-4 text-base leading-relaxed text-white/70 md:text-lg" />
          <div className="mt-8">
            <Pill href={buttonLink} srText="about BizzBuzz Creations">{buttonText}</Pill>
          </div>
        </div>
      </div>

      {showStatement && (
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
          <LightUpText text={statement} as="p" className="font-display max-w-5xl text-4xl leading-[1.1] md:text-6xl" />
        </div>
      )}
    </section>
  );
}
