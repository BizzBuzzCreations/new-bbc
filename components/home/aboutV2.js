import Image from "next/image";
import RichText from "@/components/ui/richText";
import Parallax from "@/components/ui/parallax";
import Pill from "@/components/home/pill";
import LightUpText from "@/components/home/lightUpText";

// About (redesign) — the old About block and the separate statement line in
// one calm section: label + heading on the left, the paragraph and a link on
// the right, then the office photo as a wide, gently drifting image and the
// statement lighting up word by word. Same dashboard fields as before.
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
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[2fr_3fr] md:gap-16 md:py-24">
        <div>
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
        </div>
        <div>
          <RichText as="div" text={paragraph} className="space-y-4 text-base leading-relaxed text-white/70 md:text-lg" />
          <div className="mt-8">
            <Pill href={buttonLink} srText="about BizzBuzz Creations">{buttonText}</Pill>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl md:aspect-[21/8]">
          <Parallax className="absolute inset-x-0 -inset-y-16" strength={0.08}>
            <Image src={photo} alt="BizzBuzz Creations office" fill sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
          </Parallax>
        </div>
      </div>

      {showStatement && (
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <LightUpText text={statement} as="p" className="font-display max-w-5xl text-4xl leading-[1.1] md:text-6xl" />
        </div>
      )}
    </section>
  );
}
