import Image from "next/image";
import RichText from "@/components/ui/richText";

// Intro (service pages, redesign) — the page's portrait photo (4:5) on the
// left, heading, tagline and two paragraphs on the right; on phones the text
// comes first and the photo sits below it at a modest width. Photo
// lazy-loads. Also /about's story (with its own `eyebrow`).
export default function HubIntro({ heading, tagline, paragraphs = [], image, alt = "", eyebrow = "Overview" }) {
  const text = paragraphs.filter(Boolean);
  if (!heading && !text.length) return null;
  return (
    <section className="overflow-x-clip bg-black text-white">
      <div className="reveal-sides mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[2fr_3fr] md:items-center md:gap-16 md:px-10 py-16 md:py-20">
        {image && (
          <div className="relative order-2 mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-[#0a0a0a] md:order-none md:max-w-none">
            <Image src={image} alt={alt} fill sizes="(min-width: 1280px) 460px, (min-width: 768px) 38vw, 384px" className="object-cover" />
          </div>
        )}
        <div className="order-1 md:order-none">
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {tagline && <p className="mt-4 text-lg text-[#40A2D8]">{tagline}</p>}
          {text.map((p, i) => (
            <RichText key={i} as="p" text={p} className="mt-5 text-base leading-relaxed text-white/70 md:text-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
