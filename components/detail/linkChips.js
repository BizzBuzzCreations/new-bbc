import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// A heading with a set of links as chips (how we work's tools) (rebuild).
export default function LinkChips({ eyebrow, heading, tagline, text, links }) {
  if (!links?.length) return null;
  return (
    <section className="bg-ink text-white">
      <div className="wrap grid gap-12 py-24 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          {eyebrow && <Kicker>{eyebrow}</Kicker>}
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[0.98]">
            <AccentText text={heading} />
          </h2>
          {tagline && <p className="mt-5 text-xl">{tagline}</p>}
          {text && <RichText as="p" text={text} className="mt-5 text-lg leading-relaxed text-fog" />}
        </div>
        <ul className="flex flex-wrap content-end gap-2.5 lg:col-span-6 lg:col-start-7">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link href={href} className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-white/20 px-5 text-[0.9375rem] transition-colors duration-300 hover:border-buzz hover:bg-buzz hover:text-buzz-ink">
                {Icon && <Icon size={16} aria-hidden="true" />}
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
