import Image from "next/image";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// Overview block (service hubs, about) (rebuild): a paper section — the
// heading as the thesis on the left with the tagline, the paragraphs on the
// right, and the photo (if any) in a frame under the text column.
export default function HubIntro({ heading, tagline, paragraphs = [], image, alt = "", eyebrow = "Overview" }) {
  const text = paragraphs.filter(Boolean);
  if (!heading && !text.length) return null;
  return (
    <section className="relative bg-paper text-ink">
      <div className="wrap grid gap-12 py-24 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Kicker no="01" tone="dark">
            {eyebrow}
          </Kicker>
          <h2 className="font-display mt-6 text-balance text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.98]">
            <AccentText text={heading} />
          </h2>
          {tagline && <p className="mt-6 text-xl leading-snug">{tagline}</p>}
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          {text.map((p, i) => (
            <RichText key={i} as="p" text={p} className={`text-lg leading-relaxed text-stone ${i ? "mt-6" : ""}`} />
          ))}
          {image && (
            <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[20px] bg-paper-2">
              <Image src={image} alt={alt} fill sizes="(min-width: 1440px) 680px, (min-width: 1024px) 48vw, 100vw" className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
