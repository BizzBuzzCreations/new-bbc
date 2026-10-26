import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import { resolveStatCards } from "@/lib/statCards";

// "Why Our Way of Working Is Different" (location pages, redesign) — the
// same cards (number, title, text, photo, link) as the old StatsShowcase,
// as quiet photo cards: 4 across on desktop, 2 on tablets, a swipe row on
// phones. Each card's photo zooms a touch on hover; the title is the link.
// Same dashboard fields as before ("statCards"); photos lazy-load.
// However many cards are saved (the dashboard allows any number), the rows
// fill evenly: the columns follow the count (5 cards = 5 across on wide
// screens, 3 + 2 on tablets) and a shorter last row is centred, never left
// as one card with an empty space beside it.
function columns(n) {
  return {
    md: n <= 2 ? Math.max(n, 1) : n === 4 ? 2 : 3,
    xl: n <= 5 ? Math.max(n, 1) : n === 6 ? 3 : 4,
  };
}
const widthFor = (cols) => `calc((100% - ${(cols - 1) * 1.25}rem) / ${cols})`;

export default function WhyUsV2({ content }) {
  const heading = content?.statsHeading || "Here’s Why Our Way of Working Is Different";
  const eyebrow = content?.statsEyebrow ?? "Why Us";
  const cards = resolveStatCards(content);
  const cols = columns(cards.length);

  return (
    <section className="overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          {eyebrow && <p className="text-sm text-[#40A2D8]">{eyebrow}</p>}
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
        </div>
        <ul
          className="reveal-stagger no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 md:mx-0 md:mt-16 md:flex-wrap md:justify-center md:gap-5 md:overflow-visible md:px-0 md:pb-0"
          style={{ "--w-md": widthFor(cols.md), "--w-xl": widthFor(cols.xl) }}
        >
          {cards.map((c, i) => (
            <li key={`${c.label}-${i}`} className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-[#0b0e16] md:w-(--w-md) xl:w-(--w-xl)">
              {c.visual?.type === "image" && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={c.visual.src} alt="" fill sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 78vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display text-xl leading-snug text-white">
                  <Link href={c.buttonLink || "/about"} className="after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:outline-none">
                    {c.label}
                  </Link>
                </h3>
                <RichText as="p" text={c.description} className="mt-3 text-sm leading-relaxed text-white/65" />
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#40A2D8]">
                  {c.buttonText || "Learn More"}
                  <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
