import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// The sub-services of a service hub (rebuild): numbered rows — name (the
// link), description, "Learn more" — with the buzz line sweeping in on
// hover. `items`: { icon, heading, description, href, linkText }.
export default function HubServices({ id, heading, subheading, items }) {
  if (!items?.length) return null;
  return (
    <section id={id} className="scroll-mt-24 bg-ink text-white">
      <div className="wrap py-24 md:py-36">
        <SectionHead no="02" kicker="Services" heading={heading} text={subheading} />
        <ol className="mt-16 border-t border-white/10 md:mt-20">
          {items.map(({ heading: title, description, href, linkText }, i) => (
            <li key={title} className="group relative border-b border-white/10">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-buzz transition-transform duration-700 ease-out-soft group-hover:scale-x-100 group-focus-within:scale-x-100" />
              <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <span className="kicker text-buzz md:col-span-1 md:pt-2">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.02] transition-transform duration-500 ease-out-soft md:col-span-5 md:group-hover:translate-x-2">
                  {href ? (
                    <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </h3>
                <div className="md:col-span-5">
                  <RichText as="p" text={description} noLink={Boolean(href)} className="leading-relaxed text-fog" />
                  {href && (
                    <span className="kicker mt-5 inline-flex items-center gap-1.5 text-white transition-colors group-hover:text-buzz">
                      {(linkText || "Learn more").replace(/\s*→\s*$/, "")} <ArrowUpRight aria-hidden="true" size={14} />
                    </span>
                  )}
                </div>
                <span aria-hidden="true" className="hidden justify-self-end md:col-span-1 md:flex">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-buzz group-hover:bg-buzz group-hover:text-buzz-ink">
                    <ArrowUpRight size={18} />
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
