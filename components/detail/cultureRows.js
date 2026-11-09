import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// Photo + text rows that zig-zag (about's culture, team pages' BPO / R&D
// teams) (rebuild): a numbered kicker, the title, tagline, text and link
// beside a framed photo; every second row flips. `rows`: { title, tagline,
// body, img, href, linkText }.
export default function CultureRows({ id, eyebrow = "Our culture", heading, rows }) {
  if (!rows?.length) return null;
  return (
    <section id={id} className="scroll-mt-20 bg-ink text-white">
      <div className="wrap space-y-20 py-24 md:space-y-32 md:py-36">
        {heading && (
          <div className="max-w-4xl">
            <Kicker>{eyebrow}</Kicker>
            <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4.75rem)] leading-[0.96]">
              <AccentText text={heading} />
            </h2>
          </div>
        )}
        {rows.map(({ title, tagline, body, img, href, linkText }, i) => (
          <div key={`${title}-${i}`} className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
              <p className="kicker text-buzz">{String(i + 1).padStart(2, "0")}{!heading && i === 0 ? ` · ${eyebrow}` : ""}</p>
              <h3 className="font-display mt-5 text-4xl leading-[1] md:text-5xl">
                <AccentText text={title} />
              </h3>
              {tagline && <p className="mt-5 text-xl text-white">{tagline}</p>}
              <RichText as="p" text={body} className="mt-5 text-lg leading-relaxed text-fog" />
              {href && (
                <div className="mt-8">
                  <Button href={href} variant="outline">
                    {linkText || "Learn more"}
                  </Button>
                </div>
              )}
            </div>
            {img && (
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[20px] border border-white/10 bg-ink-2 lg:col-span-6 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                <Image src={img} alt={title || ""} fill sizes="(min-width: 1440px) 680px, (min-width: 1024px) 48vw, 100vw" className="object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
