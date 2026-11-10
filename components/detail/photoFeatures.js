import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// Heading + a list of reasons beside a real photograph / mosaic (about's
// "Why businesses continue working with us", careers' "Grow beyond your job
// description"). `features`: { title, description }. `media` replaces the photo.
export default function PhotoFeatures({ eyebrow, heading, tagline, text, image, alt = "", media, features, action }) {
  if (!features?.length) return null;
  return (
    <section className="on-ink">
      <div className="wrap grid gap-10 py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          {eyebrow && <Kicker>{eyebrow}</Kicker>}
          <h2 className="font-display mt-6 text-balance text-[clamp(2.2rem,4.4vw,4.25rem)] leading-[0.98] tracking-[-0.05em]">
            <AccentText text={heading} />
          </h2>
          {tagline && <p className="mt-5 text-xl">{tagline}</p>}
          {text && <RichText as="p" text={text} className="mt-4 max-w-xl text-lg leading-relaxed text-(--mut)" />}
          <ol className="mt-8 border-t border-(--fg)">
            {features.map(({ title, description }, i) => (
              <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-(--line) py-5">
                <span className="kicker pt-1 text-(--mut)">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl leading-snug tracking-[-0.03em]">{title}</h3>
                  <RichText as="p" text={description} className="mt-1.5 leading-relaxed text-(--mut)" />
                </div>
              </li>
            ))}
          </ol>
          {action?.text && action?.href && (
            <div className="mt-8">
              <Button href={action.href} variant="solid">{action.text}</Button>
            </div>
          )}
        </div>
        {(media || image) && (
          <div className="lg:col-span-6">
            {media || (
              <div className="group relative aspect-[4/3] overflow-hidden bg-ink-2">
                <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 48vw, 100vw" quality={90} className="object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0" />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
