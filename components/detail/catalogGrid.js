import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";
import IndustrySignature from "@/components/brand/industrySignature";

// Index grids — the /industries and /services catalogues (rebuild). No
// photos (the old industry photos were low quality, the service art was the
// old look): every card gets its own generated signature, a number, the
// name, a line of text and its link; the whole card is the link.
// `items`: { key, label, href, description, buttonText }. `cols` as before.
export default function CatalogGrid({ id, eyebrow, heading, subtext, items, cols = "xl:grid-cols-4", no }) {
  if (!items?.length) return null;
  return (
    <section id={id} className="scroll-mt-24 bg-ink text-white">
      <div className="wrap py-24 md:py-36">
        <SectionHead no={no} kicker={eyebrow} heading={heading} text={subtext} />
        <ul className={`mt-16 grid gap-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 ${cols}`}>
          {items.map(({ key, label, href, description, buttonText }, i) => (
            <li key={key || href} className="group relative flex flex-col bg-ink transition-colors duration-500 hover:bg-ink-2">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                <IndustrySignature slug={String(href || key).split("/").filter(Boolean).pop()} lines={18} className="absolute inset-0 h-full w-full opacity-80 transition-[opacity,transform] duration-700 ease-out-soft group-hover:scale-[1.04] group-hover:opacity-100" />
                <span className="kicker absolute left-4 top-4 text-fog">
                  <span className="text-buzz">{String(i + 1).padStart(2, "0")}</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl leading-tight">
                  <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                    {label}
                  </Link>
                </h3>
                <RichText as="p" text={description} noLink className="mt-3 line-clamp-3 text-[0.9375rem] leading-relaxed text-fog" />
                <span className="kicker mt-auto inline-flex items-center gap-1.5 pt-6 text-white transition-colors group-hover:text-buzz">
                  {buttonText || "Explore"} <ArrowUpRight aria-hidden="true" size={14} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
