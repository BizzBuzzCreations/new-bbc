import Link from "next/link";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { INDUSTRIES } from "@/lib/industriesData";

// Industries (redesign) — a solid deep-blue block (GPG-style): heading and
// intro on the left, every industry as a big, light typographic link on the
// right. Each name goes to its industry page.
export default function IndustriesV2({ content }) {
  const eyebrow = content?.industriesEyebrow || "Industries";
  const heading = content?.industriesHeading || "Digital Solutions for Businesses Across Industries";
  const subtext = content?.industriesSubtext || "";

  return (
    <section id="industries" className="bg-[#0a3f7a] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[2fr_3fr] md:gap-16 md:py-32">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-sm text-white/80">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {subtext && <RichText as="p" text={subtext} className="mt-6 text-base text-white/80" />}
          <div className="mt-8">
            <Pill href="/industries">All industries</Pill>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-x-6 sm:gap-x-10">
          {INDUSTRIES.map((ind) => (
            <li key={ind.slug}>
              <Link
                href={`/industries/${ind.slug}`}
                className="font-display block py-1.5 text-xl leading-tight sm:text-3xl text-white/65 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:underline focus-visible:underline-offset-8 focus-visible:outline-none md:text-4xl"
              >
                {ind.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
