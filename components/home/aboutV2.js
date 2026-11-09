import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";
import Statement from "@/components/brand/statement";

// About: the team's real photograph across the full width (grayscale, colour
// on hover), the statement (zoomTagline) filling in word by word, then the
// about heading and paragraph. Dashboard fields as before (aboutEyebrow,
// aboutHeading, aboutParagraph, aboutButtonText/Link, aboutBackgroundImage,
// zoomTagline; `showStatement` = its Remove switch).
export default function AboutV2({ content, showStatement = true }) {
  const eyebrow = content?.aboutEyebrow || "About us";
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
    <section aria-labelledby="about-heading" className="on-paper relative">
      <div className="wrap">
        <figure>
          <div className="group relative aspect-[16/9] overflow-hidden bg-paper-2 md:aspect-[21/9]">
            <Image src={photo} alt="The BizzBuzz Creations team at work" fill sizes="(min-width: 1440px) 1360px, 100vw" className="object-cover grayscale transition-[filter,transform] duration-1000 ease-out-soft group-hover:scale-[1.02] group-hover:grayscale-0" />
          </div>
          <figcaption className="kicker mt-3 flex justify-between text-(--mut)">
            <span>The team</span>
            <span>Prayagraj · Kanpur · London</span>
          </figcaption>
        </figure>

        <div className="grid gap-10 border-t border-(--line) py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            {showStatement && <Statement text={statement} className="max-w-[16ch] text-[clamp(2.4rem,5.6vw,6rem)] leading-[0.96] tracking-[-0.045em]" />}
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Kicker>{eyebrow}</Kicker>
            <h2 id="about-heading" className="font-display mt-5 text-[clamp(1.9rem,3vw,2.8rem)] leading-[1] tracking-[-0.04em]">
              <AccentText text={heading} />
            </h2>
            <RichText as="div" text={paragraph} className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed" />
            <div className="mt-7">
              <Button href={buttonLink} variant="solid" srText="about BizzBuzz Creations">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
