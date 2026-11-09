import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";
import { resolveServices } from "@/components/sections/ourServices";
import { SERVICE_LINES, SUB_SERVICE_COUNT } from "@/lib/siteNav";

// Services: the 8 lines as hairline cells in a grid (Kerna / Tenity): the
// name (the whole cell links to the hub), the dashboard's line and text, and
// that line's sub-services as links, always visible. Hover or keyboard focus
// inverts the cell. Phones: a single column. Dashboard fields as before (servicesEyebrow,
// servicesHeading, servicesSubtext, serviceCards).
export default function ServicesV2({ content }) {
  const eyebrow = content?.servicesEyebrow || "Our services";
  const heading = content?.servicesHeading || "Digital Marketing & Business Solutions";
  const subtext =
    content?.servicesSubtext || `${SERVICE_LINES.length} lines of work, ${SUB_SERVICE_COUNT} services — planned together, run by one team, reported in one place.`;
  const services = resolveServices(content);
  const linesByHref = new Map(SERVICE_LINES.map((l) => [l.href, l]));

  return (
    <section id="services" aria-labelledby="services-heading" className="on-paper scroll-mt-10">
      <div className="wrap pb-7 md:pb-10">
        <SectionHead id="services-heading" no="01" of="08" kicker={eyebrow} heading={heading} text={subtext} />
        <ol className="mt-6 grid border-l border-t border-(--line) sm:grid-cols-2 md:mt-8 lg:grid-cols-4">
          {services.map((s, i) => {
            const subs = linesByHref.get(s.href)?.subs || [];
            return (
              <li key={s.href || s.heading} className="group relative flex flex-col border-b border-r border-(--line) p-5 transition-colors duration-500 ease-out-soft hover:bg-(--fg) hover:text-(--bg) focus-within:bg-(--fg) focus-within:text-(--bg) md:p-6">
                <div className="flex items-start justify-between">
                  <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                  <ArrowUpRight aria-hidden="true" size={20} className="opacity-40 transition-all duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <h3 className="font-display mt-8 text-[1.75rem] leading-[1] tracking-[-0.04em] md:mt-10">
                  <Link href={s.href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                    {s.heading}
                  </Link>
                </h3>
                {s.subheading && <p className="mt-2.5 text-sm opacity-60">{s.subheading}</p>}
                <RichText as="p" text={s.description} noLink className="mt-4 line-clamp-3 text-[0.9375rem] leading-relaxed opacity-70" />
                {subs.length > 0 && (
                  <ul className="relative z-10 mt-6 border-t border-current/20 text-[0.875rem]">
                    {subs.map((sub) => (
                      <li key={sub.href} className="border-b border-current/10 last:border-b-0">
                        <Link href={sub.href} className="flex items-center justify-between gap-3 py-2 opacity-80 transition-opacity hover:opacity-100">
                          <span>{sub.label}</span>
                          <ArrowUpRight aria-hidden="true" size={13} className="shrink-0 opacity-40" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
