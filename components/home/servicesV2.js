import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import { resolveServices } from "@/components/sections/ourServices";

// Services (redesign) — no boxes: a numbered list split by thin lines, like
// GPG. Each row: number, service name, its one-line promise, the full
// description, and an arrow; the whole row is the link (stretched link).
// Same 8 services and dashboard text as before, nothing cut.
export default function ServicesV2({ content }) {
  const eyebrow = content?.servicesEyebrow || "Our Services";
  const heading = content?.servicesHeading || "Digital Marketing & Business Solutions";
  const subtext = content?.servicesSubtext || "";
  const services = resolveServices(content);

  return (
    <section id="services" className="scroll-mt-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-[2fr_3fr] md:gap-16">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          {subtext && <RichText as="p" text={subtext} className="self-end text-base text-white/70 md:text-lg" />}
        </div>

        <ol className="mt-14 border-t border-white/10 md:mt-20">
          {services.map((s, i) => (
            <li key={s.heading} className="group relative border-b border-white/10">
              <div className="grid gap-3 py-6 md:grid-cols-[4rem_1fr_1.2fr_2.5rem] md:gap-8 md:py-8">
                <span className="font-display text-sm text-white/50 md:pt-2">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-2xl text-white transition-colors duration-200 group-hover:text-[#40A2D8] md:text-3xl">
                    <Link href={s.href} className="after:absolute after:inset-0 after:content-[''] focus:outline-none">
                      {s.heading}
                    </Link>
                  </h3>
                  {s.subheading && <p className="mt-2 text-sm text-[#40A2D8]">{s.subheading}</p>}
                </div>
                <RichText as="p" text={s.description} className="line-clamp-2 text-sm leading-relaxed text-white/65 md:line-clamp-none md:text-base" />
                <span
                  aria-hidden="true"
                  className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 group-hover:border-[#40A2D8] group-hover:bg-[#40A2D8] group-hover:text-black md:flex"
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>
              {/* keyboard focus outline for the whole row */}
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-lg ring-[#40A2D8] group-has-[a:focus-visible]:ring-2" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
