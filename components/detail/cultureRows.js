import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// Photo + text rows (about's culture, the BPO / R&D team pages): each row a
// number, title, tagline, text and optional link beside a real photograph
// (in colour); every second row flips. `rows`: { title,
// tagline, body, img, href, linkText }.
export default function CultureRows({
  id,
  eyebrow = "Our culture",
  heading,
  rows,
}) {
  if (!rows?.length) return null;
  return (
    <section id={id} className="on-paper scroll-mt-10 border-t border-(--line)">
      <div className="wrap space-y-16 py-16 md:space-y-24 md:py-24">
        {heading && (
          <div className="max-w-4xl">
            <Kicker>{eyebrow}</Kicker>
            <h2 className="font-display mt-8 text-balance text-[clamp(2.4rem,5.4vw,5.5rem)] leading-[0.95] tracking-[-0.05em]">
              <AccentText text={heading} />
            </h2>
          </div>
        )}
        {rows.map(({ title, tagline, body, img, href, linkText }, i) => {
          const num = `${String(i + 1).padStart(2, "0")}${!heading && i === 0 ? ` · ${eyebrow}` : ""}`;
          const button = href && (
            <div className="mt-8">
              <Button href={href} variant="outline">
                {linkText || "Learn more"}
              </Button>
            </div>
          );
          if (!img) {
            // no photograph: the row is plain type across the width
            return (
              <div
                key={`${title}-${i}`}
                className="grid gap-6 border-t border-(--fg) pt-6 lg:grid-cols-12 lg:gap-10"
              >
                <p className="kicker text-(--mut) lg:col-span-2">{num}</p>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-balance text-4xl leading-[1] tracking-[-0.05em] md:text-5xl">
                    {title}
                  </h3>
                  {tagline && <p className="mt-5 text-xl">{tagline}</p>}
                </div>
                <div className="lg:col-span-5">
                  <RichText
                    as="p"
                    text={body}
                    className="text-lg leading-relaxed text-(--mut)"
                  />
                  {button}
                </div>
              </div>
            );
          }
          return (
            <div
              key={`${title}-${i}`}
              className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-10"
            >
              <div
                className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}
              >
                <p className="kicker text-(--mut)">{num}</p>
                <h3 className="font-display mt-6 text-balance text-4xl leading-[1] tracking-[-0.05em] md:text-5xl">
                  {title}
                </h3>
                {tagline && <p className="mt-5 text-xl">{tagline}</p>}
                <RichText
                  as="p"
                  text={body}
                  className="mt-5 text-lg leading-relaxed text-(--mut)"
                />
                {button}
              </div>
              <div
                className={`group relative aspect-[4/3] overflow-hidden bg-paper-2 lg:col-span-6 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
              >
                <Image
                  src={img}
                  alt={title || ""}
                  fill
                  sizes="(min-width: 1440px) 680px, (min-width: 1024px) 48vw, 100vw"
                  quality={90}
                  className="object-cover transition-transform duration-1000 ease-out-soft group-hover:scale-[1.02]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
