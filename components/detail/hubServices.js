import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// The sub-services of a service hub: numbered hairline rows — name (the
// link), description, "Learn more". Hover inverts the row. `items`:
// { heading, description, href, linkText }.
export default function HubServices({ id, heading, subheading, items }) {
  if (!items?.length) return null;
  return (
    <section id={id} className="on-paper scroll-mt-10 border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <SectionHead no="02" kicker="Services" heading={heading} text={subheading} size="m" />
        <ol className="mt-8 border-t border-(--fg) md:mt-10">
          {items.map(({ heading: title, description, href, linkText }, i) => (
            <li key={title} className="group relative border-b border-(--line) transition-colors duration-500 ease-out-soft hover:bg-(--fg) hover:text-(--bg) focus-within:bg-(--fg) focus-within:text-(--bg)">
              <div className="grid gap-4 px-0 py-8 md:grid-cols-12 md:gap-10 md:px-4 md:py-10">
                <span className="kicker md:col-span-1 md:pt-2">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.02] tracking-[-0.045em] md:col-span-5">
                  {href ? (
                    <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </h3>
                <RichText as="p" text={description} noLink={Boolean(href)} className="leading-relaxed opacity-70 md:col-span-5" />
                <span aria-hidden="true" className="hidden justify-self-end md:col-span-1 md:block">
                  <ArrowUpRight size={22} className="transition-transform duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
