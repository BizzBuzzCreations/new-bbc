import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";

// Detail-page hero (sub-service pages, redesign): a breadcrumb back to the
// parent page, the big light headline (last three words in the beams'
// blue → violet, like the homepage), the description with the page's own
// CTA, then the page photo in a wide rounded frame at its own 2.18:1 shape
// (all these photos are that crop, so nothing important is cut off). The
// photo is the LCP element: loaded eagerly at high priority.
export default function DetailHero({ parentLabel, parentHref, label, title, description, ctaText, image, secondaryHref }) {
  const words = (title || "").split(/\s+/);
  const lead = words.slice(0, Math.max(0, words.length - 3)).join(" ");
  const accent = words.slice(-3).join(" ");

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-8 md:px-10 md:pt-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            {parentHref ? (
              <li>
                <Link href={parentHref} className="text-[#40A2D8] hover:text-white">{parentLabel}</Link>
              </li>
            ) : (
              <li>{parentLabel}</li>
            )}
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page" className="text-white/80">{label}</li>
          </ol>
        </nav>

        <div className="mt-6 grid gap-8 md:mt-8 md:grid-cols-[3fr_2fr] md:items-end md:gap-16">
          <h1 className="font-display text-[2.3rem] leading-[1.06] sm:text-5xl xl:text-6xl">
            {lead && <span>{lead} </span>}
            <span className="bg-linear-to-r from-[#40A2D8] via-[#7b74f7] to-[#b57cff] bg-clip-text pb-1 text-transparent">{accent}</span>
          </h1>
          <div>
            <RichText as="p" text={description} className="text-base leading-relaxed text-white/70 md:text-lg" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill href="/contact" variant="solid" className="px-6 py-3 text-base">{ctaText || "Get a Free Consultation"}</Pill>
              {secondaryHref && <Pill href={secondaryHref} className="px-6 py-3 text-base">What&rsquo;s included</Pill>}
            </div>
          </div>
        </div>
      </div>

      {image && (
        <div className="mx-auto max-w-7xl px-6 pt-10 md:px-10 md:pt-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-[#0a0a0a] md:aspect-[2.18/1]">
            <Image src={image} alt="" fill preload fetchPriority="high" sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
          </div>
        </div>
      )}
    </section>
  );
}
