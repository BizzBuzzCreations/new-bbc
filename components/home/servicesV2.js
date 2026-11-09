import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";
import { resolveServices } from "@/components/sections/ourServices";
import { SERVICE_LINES, SUB_SERVICE_COUNT } from "@/lib/siteNav";

// Services (rebuild): the 8 service lines as numbered rows (no card grid).
// Each row: number, name (the link), the dashboard's one-line promise and
// description, and (desktop) that line's sub-services as small links. Hover
// sweeps a buzz line over the row and nudges the name — no height change,
// so the list never jumps under the mouse. Phones show the count instead. Same dashboard fields as before (servicesEyebrow,
// servicesHeading, servicesSubtext and the serviceCards list).
export default function ServicesV2({ content }) {
  const eyebrow = content?.servicesEyebrow || "Our services";
  const heading = content?.servicesHeading || "Digital Marketing & Business Solutions";
  const subtext =
    content?.servicesSubtext ||
    `${SERVICE_LINES.length} lines of work, ${SUB_SERVICE_COUNT} services — planned together, run by one team, reported in one place.`;
  const services = resolveServices(content);
  const linesByHref = new Map(SERVICE_LINES.map((l) => [l.href, l]));

  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-ink text-white">
      <div className="wrap py-24 md:py-40">
        <SectionHead id="services-heading" no="02" kicker={eyebrow} heading={heading} text={subtext} />
        <ol className="mt-16 border-t border-white/10 md:mt-24">
          {services.map((s, i) => {
            const line = linesByHref.get(s.href);
            const subs = line?.subs || [];
            return (
              <li key={s.href || s.heading} className="group relative border-b border-white/10">
                {/* the buzz line that sweeps in on hover */}
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-buzz transition-transform duration-700 ease-out-soft group-hover:scale-x-100 group-focus-within:scale-x-100" />
                <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                  <span className="kicker text-buzz md:col-span-1 md:pt-3">{String(i + 1).padStart(2, "0")}</span>
                  <div className="md:col-span-6">
                    <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1] transition-transform duration-500 ease-out-soft md:group-hover:translate-x-3">
                      <Link href={s.href} className="inline-flex items-start gap-3 focus-visible:outline-none">
                        {s.heading}
                        <ArrowUpRight aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 text-white/30 transition-all duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-buzz md:h-9 md:w-9" />
                      </Link>
                    </h3>
                    {s.subheading && <p className="mt-3 text-fog">{s.subheading}</p>}
                  </div>
                  <div className="md:col-span-5">
                    <RichText as="p" text={s.description} className="text-[0.9375rem] leading-relaxed text-white/70 md:line-clamp-3" />
                    {subs.length > 0 && (
                      <>
                        <p className="kicker mt-4 text-fog md:hidden">{subs.length} services</p>
                        <ul className="mt-5 hidden flex-wrap gap-x-4 gap-y-2 md:flex" aria-label={`${s.heading} services`}>
                          {subs.map((sub) => (
                            <li key={sub.href}>
                              <Link href={sub.href} className="text-sm text-fog underline decoration-white/0 underline-offset-4 transition-colors hover:text-white hover:decoration-buzz">
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
