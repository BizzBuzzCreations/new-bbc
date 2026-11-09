import Link from "next/link";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";
import { INDUSTRIES } from "@/lib/siteNav";

// Industries: no pictures — all fifteen as one large run of text, each a
// link. Hovering or focusing one dims the rest. Same dashboard fields as
// before (industriesEyebrow, industriesHeading, industriesSubtext,
// industriesButtonText).
export default function IndustriesV2({ content }) {
  const eyebrow = content?.industriesEyebrow || "Industries";
  const heading = content?.industriesHeading || "Digital Solutions for Businesses Across Industries";
  const subtext = content?.industriesSubtext || "Every industry buys differently. We start from how your customers search, compare and decide — then build the marketing around it.";
  const buttonText = content?.industriesButtonText || "All industries";
  return (
    <section aria-labelledby="industries-heading" className="on-paper">
      <div className="wrap py-7 md:py-10">
        <SectionHead id="industries-heading" no="04" of="08" kicker={eyebrow} heading={heading} text={subtext} size="m" />
        <ul className="group/list font-display mt-8 flex flex-wrap gap-x-[0.5em] gap-y-[0.05em] text-[clamp(2.4rem,6.4vw,6.75rem)] leading-[1.04] tracking-[-0.05em] md:mt-10">
          {INDUSTRIES.map((ind, i) => (
            <li key={ind.href} className="transition-opacity duration-300 group-hover/list:opacity-25 group-focus-within/list:opacity-25 hover:!opacity-100 focus-within:!opacity-100">
              <Link href={ind.href} className="group/item relative inline-block">
                {ind.label}
                <sup className="kicker ml-1 align-super tracking-normal text-(--mut) not-italic">{String(i + 1).padStart(2, "0")}</sup>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-[0.06em] h-[0.06em] origin-left scale-x-0 bg-buzz transition-transform duration-500 ease-out-soft group-hover/item:scale-x-100 group-focus-visible/item:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/industries" variant="outline">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
