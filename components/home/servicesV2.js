import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";
import ServicesExplorer from "@/components/home/servicesExplorer";
import { resolveServices } from "@/components/sections/ourServices";
import { SERVICE_LINES, SUB_SERVICE_COUNT } from "@/lib/siteNav";

// Services: the 8 lines as a selector (see servicesExplorer.js — rows on the
// left with a liquid-glass blob that slides to the one you point at, the
// line's name, dashboard text and sub-services on the right). The panels are
// rendered here, on the server, and handed to the selector, so all 44
// sub-service links are in the page. Dashboard fields as before
// (servicesEyebrow, servicesHeading, servicesSubtext, serviceCards).
export default function ServicesV2({ content }) {
  const eyebrow = content?.servicesEyebrow || "Our services";
  const heading =
    content?.servicesHeading || "Digital Marketing & Business Solutions";
  const subtext =
    content?.servicesSubtext ||
    `${SERVICE_LINES.length} lines of work, ${SUB_SERVICE_COUNT} services — planned together, run by one team, reported in one place.`;
  const services = resolveServices(content);
  const linesByHref = new Map(SERVICE_LINES.map((l) => [l.href, l]));

  const rows = services.map((s, i) => {
    const subs = linesByHref.get(s.href)?.subs || [];
    const no = String(i + 1).padStart(2, "0");
    return {
      href: s.href,
      heading: s.heading,
      no,
      panel: (
        <article className="lg:pt-2">
          <p className="kicker text-(--mut)">
            {no} / {String(services.length).padStart(2, "0")} · {subs.length}{" "}
            services
          </p>
          <h3 className="font-display mt-4 text-balance break-words text-[clamp(2rem,4.4vw,4.2rem)] leading-[0.96] tracking-[-0.05em]">
            {s.heading}
          </h3>
          {s.subheading && (
            <p className="mt-3 text-lg font-medium leading-snug">
              {s.subheading}
            </p>
          )}
          <RichText
            as="p"
            text={s.description}
            noLink
            className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-(--mut)"
          />
          {subs.length > 0 && (
            <ul className="mt-7 grid border-t border-(--fg) sm:grid-cols-2 sm:gap-x-8">
              {subs.map((sub) => (
                <li key={sub.href} className="border-b border-(--line)">
                  <Link
                    href={sub.href}
                    className="group/l flex items-center justify-between gap-3 py-3 text-[0.9375rem] transition-[padding] duration-300 hover:pl-2"
                  >
                    <span>{sub.label}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={15}
                      className="shrink-0 opacity-40 transition-all duration-300 group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5 group-hover/l:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-7">
            <Button
              href={s.href}
              variant="solid"
              size="lg"
              className="h-auto max-w-full !whitespace-normal py-3.5 text-left leading-tight"
            >
              Explore {s.heading}
            </Button>
          </div>
        </article>
      ),
    };
  });

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="on-paper scroll-mt-10"
    >
      <div className="wrap pb-7 md:pb-10">
        <SectionHead
          id="services-heading"
          no="01"
          of="08"
          kicker={eyebrow}
          heading={heading}
          text={subtext}
        />
        <ServicesExplorer rows={rows} />
      </div>
    </section>
  );
}
