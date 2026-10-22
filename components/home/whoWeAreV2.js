import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import LightUpText from "@/components/home/lightUpText";
import { whoWeAreContent } from "@/components/sections/whoWeAreBox";

// "Who We Are" (location pages, redesign) — the location page's own blurb in
// the homepage's style instead of the old bordered card: heading and text
// with the link on the left, the numbers on the right (light, large, like
// the hero's), the quick links as a row of plain arrow links, then the
// tagline lighting up word by word. Same dashboard fields as before
// ("Who We Are Card").
export default function WhoWeAreV2({ content }) {
  const { heading, paragraph, buttonText, buttonLink, tagline, stats, links } = whoWeAreContent(content);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal-stagger grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm text-[#40A2D8]">At a Glance</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
            <RichText as="div" text={paragraph} className="mt-6 space-y-4 text-base leading-relaxed text-white/70 md:text-lg" />
            <div className="mt-8">
              <Pill href={buttonLink}>{buttonText}</Pill>
            </div>
          </div>
          <div className="md:self-end">
            <dl className="grid grid-cols-3 border-t border-white/10 pt-6">
              {stats.slice(0, 3).map(({ value, label }, i) => (
                <div key={`${label}-${i}`} className="flex flex-col-reverse justify-end border-l border-white/10 px-4 first:border-l-0 first:pl-0 sm:px-6">
                  <dt className="mt-1 text-[11px] uppercase leading-snug tracking-wider text-white/60 sm:text-xs">{label}</dt>
                  <dd className="font-display text-3xl text-white md:text-5xl">{value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={href} className="bg-black">
                  <Link href={href} className="group flex items-center gap-3 px-5 py-4 text-sm text-white transition-colors hover:bg-white/[0.04] hover:text-[#40A2D8]">
                    {Icon && <Icon size={18} aria-hidden="true" className="shrink-0 text-[#40A2D8]" />}
                    <span className="flex-1">{label}</span>
                    <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 md:mt-20">
          <LightUpText text={tagline} as="p" className="font-display max-w-5xl text-4xl leading-[1.1] md:text-6xl" />
        </div>
      </div>
    </section>
  );
}
