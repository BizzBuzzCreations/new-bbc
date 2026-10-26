import Image from "next/image";
import RichText from "@/components/ui/richText";

// Local positioning (sub-service pages, redesign) — the page's "Based in
// Prayagraj…" statement with its photo: photo left, text right on desktop
// (the sections above put text first, so this flips the rhythm); text,
// then photo, on phones. Photo lazy-loads. Without a photo it's a single
// text column (heading left, text right on desktop).
export default function LocalityBlock({ heading, subtext, text, image, alt = "", eyebrow = "Where we work" }) {
  const paragraphs = (Array.isArray(text) ? text : [text]).filter(Boolean);
  if (!paragraphs.length) return null;
  if (!image) {
    return (
      <section className="bg-black text-white">
        <div className="reveal-stagger mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-[2fr_3fr] md:gap-16 md:px-10 py-16 md:py-20">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          <div className="space-y-4 md:self-end">
            {subtext && <RichText as="p" text={subtext} className="text-base leading-relaxed text-white md:text-lg" />}
            {paragraphs.map((p, i) => (
              <RichText key={i} as="p" text={p} className="text-base leading-relaxed text-white/70 md:text-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="overflow-x-clip bg-black text-white">
      <div className="reveal-sides mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-16 md:px-10 py-16 md:py-20">
        {image && (
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl bg-[#0a0a0a] md:order-none">
            <Image src={image} alt={alt} fill sizes="(min-width: 1280px) 600px, (min-width: 768px) 48vw, 100vw" className="object-cover" />
          </div>
        )}
        <div className="order-1 md:order-none">
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {subtext && <RichText as="p" text={subtext} className="mt-6 text-base leading-relaxed text-white md:text-lg" />}
          {paragraphs.map((p, i) => (
            <RichText key={i} as="p" text={p} className="mt-4 text-base leading-relaxed text-white/70 md:text-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
