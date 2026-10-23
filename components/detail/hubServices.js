import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";

// The service's sub-services (service pages, redesign) — each one a card
// with its icon, name, text and a "Learn more" arrow; the whole card links
// to the sub-service page (these are the service pages' main internal
// links). 3 across on desktop (2 for a 4-card list), 2 on tablets, 1 on
// phones. Hover lights the border and fills the arrow.
export default function HubServices({ id, heading, subheading, items }) {
  if (!items?.length) return null;
  const cols = items.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section id={id} className="scroll-mt-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal grid gap-6 md:grid-cols-[2fr_3fr] md:items-end md:gap-16">
          <div>
            <p className="text-sm text-[#40A2D8]">Services</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          {subheading && <RichText as="p" text={subheading} className="text-base leading-relaxed text-white/70 md:text-lg" />}
        </div>
        <ul className={`reveal-stagger mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 ${cols}`}>
          {items.map(({ icon: Icon, heading: title, description, href, linkText }) => {
            const body = (
              <>
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B60B0]/15 text-[#40A2D8]">
                  {Icon && <Icon size={20} />}
                </span>
                <h3 className="font-display mt-5 text-xl leading-snug text-white transition-colors group-hover:text-[#40A2D8] md:text-2xl">{title}</h3>
                <RichText as="p" text={description} noLink={Boolean(href)} className="mt-3 text-sm leading-relaxed text-white/65" />
                {href && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#40A2D8]">
                    {(linkText || "Learn more").replace(/\s*→\s*$/, "")}
                    <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                )}
              </>
            );
            const card = "group block h-full rounded-3xl border border-white/10 bg-[#0b0e16] p-6 transition-colors duration-300 hover:border-[#40A2D8]/50 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] md:p-7";
            return (
              <li key={title}>
                {href ? <Link href={href} className={card}>{body}</Link> : <div className={card}>{body}</div>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
