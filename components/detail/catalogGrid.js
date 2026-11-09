import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// The /services and /industries catalogues: hairline cells, one per item —
// number, name (the link), a line of text, the button text; hover inverts
// the cell. No pictures. `items`: { key, label, href, description,
// buttonText }. `cols` sets the wide-screen columns.
export default function CatalogGrid({ id, eyebrow, heading, subtext, items, cols = "xl:grid-cols-4", no }) {
  if (!items?.length) return null;
  return (
    <section id={id} className="on-paper scroll-mt-10 border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <SectionHead no={no} kicker={eyebrow} heading={heading} text={subtext} size="m" />
        <ul className={`mt-8 grid border-l border-t border-(--line) sm:grid-cols-2 md:mt-10 lg:grid-cols-3 ${cols}`}>
          {items.map(({ key, label, href, description, buttonText }, i) => (
            <li key={key || href} className="group relative flex min-h-[18rem] flex-col border-b border-r border-(--line) p-6 transition-colors duration-500 ease-out-soft hover:bg-(--fg) hover:text-(--bg) focus-within:bg-(--fg) focus-within:text-(--bg)">
              <div className="flex items-start justify-between">
                <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                <ArrowUpRight aria-hidden="true" size={20} className="opacity-40 transition-all duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
              <div className="mt-auto pt-12">
                <h3 className="font-display text-[1.75rem] leading-[1.02] tracking-[-0.04em]">
                  <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                    {label}
                  </Link>
                </h3>
                <RichText as="p" text={description} noLink className="mt-4 line-clamp-3 text-[0.9375rem] leading-relaxed opacity-70" />
                <span className="kicker mt-5 block opacity-60">{buttonText || "Explore"}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
