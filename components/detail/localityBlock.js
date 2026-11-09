import Image from "next/image";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// "Where we work" / "Why businesses trust us" (rebuild): on ink — heading
// left, text right; with an `image`, the photo sits in a frame under the
// heading. `text`: a string or a list of paragraphs.
export default function LocalityBlock({ heading, subtext, text, image, alt = "", eyebrow = "Where we work", no = "05" }) {
  const paragraphs = (Array.isArray(text) ? text : [text]).filter(Boolean);
  if (!paragraphs.length) return null;
  return (
    <section className="relative bg-ink text-white">
      <div className="wrap grid gap-12 py-24 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Kicker no={no}>{eyebrow}</Kicker>
          <h2 className="font-display mt-6 text-balance text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[0.98]">
            <AccentText text={heading} />
          </h2>
          {image && (
            <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[20px] border border-white/10 bg-ink-2">
              <Image src={image} alt={alt} fill sizes="(min-width: 1440px) 560px, (min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          )}
        </div>
        <div className="space-y-6 lg:col-span-6 lg:col-start-7 lg:pt-16">
          {subtext && <RichText as="p" text={subtext} className="text-xl leading-snug text-white" />}
          {paragraphs.map((p, i) => (
            <RichText key={i} as="p" text={p} className="text-lg leading-relaxed text-fog" />
          ))}
        </div>
      </div>
    </section>
  );
}
