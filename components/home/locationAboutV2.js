import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { whoWeAreContent } from "@/components/sections/whoWeAreBox";

// About, for the location pages (redesign) — the About block and the "Who
// We Are" numbers in one section instead of two that said the same thing:
// heading, text and link on the left, the team photo on the right (in a 4:3
// frame no wider than ~560px, so an uploaded photo isn't blown up past its
// pixels), then the numbers and the quick links in one row underneath.
// Reads the same dashboard fields (About + "Who We Are Card": stats and
// links); `showGlance` false hides the numbers row (the old "Who We Are"
// Remove switch). On phones: text, photo, numbers, links.
export default function LocationAboutV2({ content, showGlance = true }) {
  const eyebrow = content?.aboutEyebrow || "About Us";
  const heading = content?.aboutHeading || "We Are BizzBuzz Creations";
  const paragraph =
    content?.aboutParagraph ||
    "BizzBuzz Creations is a digital marketing and business solutions agency helping businesses in Prayagraj (Allahabad), across India, and international markets build a stronger digital presence.";
  const buttonText = content?.aboutButtonText || "Know More About Us";
  const buttonLink = content?.aboutButtonLink || "/about";
  const saved = content?.aboutBackgroundImage;
  const photo = !saved || saved === "/bbc-building.png" ? "/about-home.png" : saved;
  const { stats, links } = whoWeAreContent(content);

  return (
    <section className="overflow-x-clip bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal-sides grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
            <RichText as="div" text={paragraph} className="mt-6 space-y-4 text-base leading-relaxed text-white/70 md:text-lg" />
            <div className="mt-8">
              <Pill href={buttonLink} srText="about BizzBuzz Creations">{buttonText}</Pill>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-3xl bg-[#0a0a0a]">
            <Image src={photo} alt="The BizzBuzz Creations team at work" fill sizes="(min-width: 1280px) 560px, (min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>

        {showGlance && (
          <div className="reveal mt-14 grid gap-8 border-t border-white/10 pt-10 md:mt-16 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
            <dl className="grid grid-cols-3">
              {stats.slice(0, 3).map(({ value, label }, i) => (
                <div key={`${label}-${i}`} className="flex flex-col-reverse justify-end border-l border-white/10 px-4 first:border-l-0 first:pl-0 sm:px-6">
                  <dt className="mt-1 text-[11px] uppercase leading-snug tracking-wider text-white/60 sm:text-xs">{label}</dt>
                  <dd className="font-display text-3xl text-white md:text-5xl">{value}</dd>
                </div>
              ))}
            </dl>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
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
        )}
      </div>
    </section>
  );
}
