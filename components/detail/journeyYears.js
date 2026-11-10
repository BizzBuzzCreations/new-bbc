import Image from "next/image";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// The years of our journey (about): a timeline — the year huge on the left,
// what happened in the middle, a real photo on the right.
export default function JourneyYears({ heading, years }) {
  if (!years?.length) return null;
  return (
    <section className="on-ink">
      <div className="wrap py-7 md:py-10">
        <SectionHead kicker="Since 2022" heading={heading} size="m" />
        <ol className="mt-8 border-t border-(--fg) md:mt-10">
          {years.map(({ year, title, body, img }, i) => (
            <li
              key={`${year}-${i}`}
              className="grid gap-4 border-b border-(--line) py-10 md:grid-cols-12 md:items-center md:gap-10"
            >
              <span className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.85] tracking-[-0.06em] md:col-span-4">
                {year}
              </span>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl leading-tight tracking-[-0.035em] md:text-3xl">
                  {title}
                </h3>
                <RichText
                  as="p"
                  text={body}
                  className="mt-3 leading-relaxed text-(--mut)"
                />
              </div>
              {img && (
                <div className="group relative hidden aspect-[4/3] overflow-hidden bg-ink-2 md:col-span-3 md:block">
                  <Image
                    src={img}
                    alt={title || ""}
                    fill
                    sizes="320px"
                    className="object-cover "
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
