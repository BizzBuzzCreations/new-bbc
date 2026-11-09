import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// A heading with a set of links as pills (how we work's tools).
export default function LinkChips({ eyebrow, heading, tagline, text, links }) {
  if (!links?.length) return null;
  return (
    <section className="on-paper border-t border-(--line)">
      <div className="wrap grid gap-12 py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          {eyebrow && <Kicker>{eyebrow}</Kicker>}
          <h2 className="font-display mt-8 text-balance text-[clamp(2.2rem,4.4vw,4.25rem)] leading-[0.98] tracking-[-0.05em]">
            <AccentText text={heading} />
          </h2>
          {tagline && <p className="mt-5 text-xl">{tagline}</p>}
          {text && <RichText as="p" text={text} className="mt-5 max-w-lg text-lg leading-relaxed text-(--mut)" />}
        </div>
        <ul className="flex flex-wrap content-end gap-2.5 lg:col-span-5 lg:col-start-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="group inline-flex h-12 items-center gap-2 rounded-full border border-(--fg)/30 px-5 text-[0.9375rem] transition-colors duration-300 hover:border-(--fg) hover:bg-(--fg) hover:text-(--bg)">
                {label}
                <ArrowUpRight aria-hidden="true" size={15} className="opacity-50 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
