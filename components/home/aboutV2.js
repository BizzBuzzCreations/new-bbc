import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";
import Statement from "@/components/brand/statement";

// About (rebuild): the first paper section — the statement (zoomTagline)
// fills in word by word as it scrolls past, then the about heading and
// paragraph beside the team photo. Same dashboard fields as before
// (aboutEyebrow, aboutHeading, aboutParagraph, aboutButtonText/Link,
// aboutBackgroundImage, zoomTagline; `showStatement` = its Remove switch).
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
    <section aria-labelledby="about-heading" className="relative bg-paper text-ink">
      <div className="col-lines-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="wrap relative py-24 md:py-40">
        {showStatement && (
          <Statement text={statement} tone="dark" className="max-w-[18ch] text-[clamp(2.4rem,6.4vw,6.5rem)] leading-[0.95]" />
        )}
        <div className={`grid gap-12 md:grid-cols-12 md:gap-10 ${showStatement ? "mt-24 md:mt-36" : ""}`}>
          <div className="md:col-span-5">
            <Kicker no="01" tone="dark">
              {eyebrow}
            </Kicker>
            <h2 id="about-heading" className="font-display mt-6 text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.98]">
              <AccentText text={heading} />
            </h2>
            <RichText as="div" text={paragraph} className="mt-8 space-y-4 text-lg leading-relaxed text-stone" />
            <div className="mt-10">
              <Button href={buttonLink} variant="ink" srText="about BizzBuzz Creations">
                {buttonText}
              </Button>
            </div>
          </div>
          <figure className="md:col-span-6 md:col-start-7">
            <div className="relative aspect-[1705/922] overflow-hidden rounded-[20px] bg-paper-2">
              <Image src={photo} alt="The BizzBuzz Creations team at work" fill sizes="(min-width: 1440px) 680px, (min-width: 768px) 48vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="kicker mt-3 flex justify-between text-stone">
              <span>The team</span>
              <span>Prayagraj · Kanpur · London</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
