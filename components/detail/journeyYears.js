import Image from "next/image";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// The years of our journey (about) (rebuild): a paper timeline — the year
// big on the left, what happened in the middle, a photo on the right.
export default function JourneyYears({ heading, years }) {
  if (!years?.length) return null;
  return (
    <section className="relative bg-paper text-ink">
      <div className="wrap py-24 md:py-36">
        <SectionHead kicker="Since 2022" heading={heading} tone="dark" size="m" />
        <ol className="mt-16 border-t border-ink/15 md:mt-20">
          {years.map(({ year, title, body, img }, i) => (
            <li key={`${year}-${i}`} className="grid gap-4 border-b border-ink/15 py-10 md:grid-cols-12 md:items-center md:gap-10">
              <span className="font-display text-6xl leading-none md:col-span-3 md:text-8xl">{year}</span>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl leading-tight md:text-3xl">{title}</h3>
                <RichText as="p" text={body} className="mt-3 leading-relaxed text-stone" />
              </div>
              {img && (
                <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl bg-paper-2 md:col-span-3 md:col-start-10 md:block">
                  <Image src={img} alt={title || ""} fill sizes="320px" className="object-cover" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
