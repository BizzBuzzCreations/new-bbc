import Image from "next/image";
import RichText from "@/components/ui/richText";

// Our journey (/about, redesign) — every year at once as a thin-line list
// instead of a one-year-at-a-time picker: the year large in blue, its title
// and text, and its photo on the right from md up (phones: year, title,
// text only). `years`: { year, title, body, img }. Photos lazy-load.
export default function JourneyYears({ heading, years }) {
  if (!years?.length) return null;
  return (
    <section className="relative text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-[#40A2D8]">Since 2022</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
        </div>
        <ol className="reveal-stagger mt-12 border-t border-white/10 md:mt-16">
          {years.map(({ year, title, body, img }, i) => (
            <li key={`${year}-${i}`} className="grid gap-3 border-b border-white/10 py-8 md:grid-cols-[9rem_1fr_15rem] md:items-center md:gap-12 md:py-10">
              <span className="font-display text-4xl text-[#40A2D8] md:text-5xl">{year}</span>
              <div>
                <h3 className="font-display text-xl leading-snug text-white md:text-2xl">{title}</h3>
                <RichText as="p" text={body} className="mt-3 text-sm leading-relaxed text-white/65 md:text-base" />
              </div>
              {img && (
                <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl bg-[#0a0a0a] md:block">
                  <Image src={img} alt={title || ""} fill sizes="240px" className="object-cover" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
