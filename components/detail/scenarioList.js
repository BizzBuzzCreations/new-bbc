import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";

// "What are you trying to fix?" (/services, redesign) — each problem with a
// line of text and the service that solves it, as a two-column thin-line
// list instead of a carousel; every row links to that service. `items`:
// { question, detail, service: { label, href, icon } }. Sits on the beams
// background.
export default function ScenarioList({ eyebrow, heading, subtext, items }) {
  if (!items?.length) return null;
  return (
    <section className="relative text-white">
      <div className="wrap py-24 md:py-32">
        <div className="reveal max-w-3xl">
          <p className="kicker text-buzz">{eyebrow}</p>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.98]">{heading}</h2>
          {subtext && <RichText as="p" text={subtext} className="mt-5 text-base leading-relaxed text-fog md:text-lg" />}
        </div>
        <ul className="reveal-stagger mt-12 grid border-t border-white/10 md:mt-16 md:grid-cols-2 md:gap-x-12">
          {items.map(({ question, detail, service: { label, href, icon: Icon } }, i) => (
            <li key={i} className="border-b border-white/10">
              <Link href={href} className="group flex gap-6 py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buzz">
                <div className="flex-1">
                  <h3 className="font-display text-xl leading-snug text-white transition-colors group-hover:text-buzz md:text-2xl">{question}</h3>
                  <RichText as="p" text={detail} noLink className="mt-3 text-sm leading-relaxed text-fog md:text-base" />
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-buzz">
                    {Icon && <Icon size={16} aria-hidden="true" />}
                    {label}
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 group-hover:border-buzz group-hover:bg-buzz group-hover:text-buzz-ink"
                >
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
