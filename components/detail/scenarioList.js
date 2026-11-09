import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// "If this is you, start here": questions as rows that link to the right
// service. `items`: { question, detail, service: { label, href } }.
export default function ScenarioList({ eyebrow, heading, subtext, items }) {
  if (!items?.length) return null;
  return (
    <section className="on-paper border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <SectionHead kicker={eyebrow} heading={heading} text={subtext} size="m" />
        <ol className="mt-8 border-t border-(--fg) md:mt-10">
          {items.map(({ question, detail, service: { label, href } }, i) => (
            <li key={i} className="group relative border-b border-(--line) transition-colors duration-500 ease-out-soft hover:bg-(--fg) hover:text-(--bg) focus-within:bg-(--fg) focus-within:text-(--bg)">
              <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-10 md:px-4">
                <span className="kicker md:col-span-1 md:pt-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl leading-tight tracking-[-0.04em] md:col-span-5 md:text-3xl">
                  <Link href={href} className="after:absolute after:inset-0 after:content-['']">{question}</Link>
                </h3>
                <RichText as="p" text={detail} noLink className="leading-relaxed opacity-70 md:col-span-5" />
                <span className="kicker inline-flex items-center gap-1 md:col-span-1 md:justify-end">
                  {label} <ArrowUpRight aria-hidden="true" size={14} />
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
