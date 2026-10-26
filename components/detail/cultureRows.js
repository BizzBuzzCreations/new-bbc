import Image from "next/image";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";

// Photo + text rows that zig-zag (text left / photo right, then the other
// way round), no boxes: a small number, the title, an optional blue
// tagline, the text and an optional link. Phones: text, then photo. Used for
// /about's culture and /our-team's BPO and R&D teams (with a section
// `heading` above the rows). `rows`: { title, tagline, body, img, href,
// linkText }. Photos lazy-load.
export default function CultureRows({ id, eyebrow = "Our culture", heading, rows }) {
  if (!rows?.length) return null;
  return (
    <section id={id} className="scroll-mt-20 overflow-x-clip bg-black text-white">
      <div className="mx-auto max-w-7xl space-y-16 px-6 md:space-y-24 md:px-10 py-16 md:py-20">
        {heading && (
          <div className="reveal max-w-3xl">
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
        )}
        {rows.map(({ title, tagline, body, img, href, linkText }, i) => (
          <div key={`${title}-${i}`} className="reveal-sides grid gap-8 md:grid-cols-2 md:items-center md:gap-16">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              {i === 0 && !heading && <p className="mb-4 text-sm text-[#40A2D8]">{eyebrow}</p>}
              <h3 className="font-display text-3xl leading-[1.1] md:text-4xl">{title}</h3>
              {tagline && <p className="mt-3 text-lg text-[#40A2D8]">{tagline}</p>}
              <RichText as="p" text={body} className="mt-5 text-base leading-relaxed text-white/70 md:text-lg" />
              {href && (
                <div className="mt-8">
                  <Pill href={href}>{linkText || "Learn more"}</Pill>
                </div>
              )}
            </div>
            {img && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#0a0a0a]">
                <Image src={img} alt={title || ""} fill sizes="(min-width: 1280px) 600px, (min-width: 768px) 48vw, 100vw" className="object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
