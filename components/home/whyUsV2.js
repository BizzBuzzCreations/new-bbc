import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";
import { resolveStatCards } from "@/lib/statCards";

// "Why our way of working is different" (UK / location pages) (rebuild):
// the stat cards as numbered rows — name (the link), text, its button text
// — no pictures (the old card art was the previous look). Same dashboard
// fields (statsEyebrow, statsHeading, statCards).
export default function WhyUsV2({ content }) {
  const heading = content?.statsHeading || "Here’s Why Our Way of Working Is Different";
  const eyebrow = content?.statsEyebrow ?? "Why us";
  const cards = resolveStatCards(content);
  if (!cards.length) return null;

  return (
    <section className="bg-ink text-white">
      <div className="wrap py-24 md:py-36">
        <SectionHead kicker={eyebrow} heading={heading} />
        <ol className="mt-16 grid border-t border-white/10 md:mt-20 md:grid-cols-2 md:gap-x-10">
          {cards.map((c, i) => (
            <li key={`${c.label}-${i}`} className="group relative grid grid-cols-[3.5rem_1fr] gap-4 border-b border-white/10 py-8 md:py-10">
              <span className="font-display text-3xl leading-none text-buzz">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-2xl leading-tight">
                  <Link href={c.buttonLink || "/about"} className="after:absolute after:inset-0 after:content-[''] group-hover:underline group-hover:decoration-buzz group-hover:underline-offset-4">
                    {c.label}
                  </Link>
                </h3>
                <RichText as="p" text={c.description} className="mt-3 leading-relaxed text-fog" />
                <span aria-hidden="true" className="kicker mt-4 inline-flex items-center gap-1.5 text-white transition-colors group-hover:text-buzz">
                  {c.buttonText || "Learn more"} <ArrowUpRight size={14} />
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
