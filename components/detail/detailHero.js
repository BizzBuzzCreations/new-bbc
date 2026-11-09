import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import AccentText from "@/components/brand/accentText";
import Breadcrumb from "@/components/brand/breadcrumb";
import IndustrySignature from "@/components/brand/industrySignature";
import { ClockLine } from "@/components/brand/clock";

// Kept for older imports: a title with its accent word (now the rebuild's
// AccentText — last word, or a *starred* word, in the accent serif).
export function AccentTitle({ title }) {
  return <AccentText text={title} />;
}

const FRAME_SHAPES = { "2.18": "md:aspect-[2.18/1]", "2.86": "md:aspect-[2.86/1]" };

// Hero of the service hubs, sub-service and industry pages (rebuild):
// breadcrumb (Home / parent / page) → a big H1 with its accent word on the
// left, the description and the buttons on the right → the page's image in
// a wide frame. `signature` (industry pages): an industry signature drawn
// in place of a photo. `kicker` replaces the default "[BBC] …" line.
export default function DetailHero({ parentLabel, parentHref, label, title, description, ctaText, image, secondaryHref, imageShape = "2.18", signature, kicker }) {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink pt-28 text-white md:pt-36">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: parentLabel, href: parentHref }, { label }]} />
          <ClockLine className="hidden text-fog md:inline-flex" />
        </div>
        <div className="mt-12 grid gap-10 md:mt-20 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            {kicker && <p className="kicker mb-6 text-buzz">{kicker}</p>}
            <h1 className="font-display text-balance text-[clamp(2.6rem,6.6vw,6.75rem)] leading-[0.93] motion-safe:animate-[hero-rise_0.9s_var(--ease-out-soft)_both]">
              <AccentText text={title} />
            </h1>
          </div>
          <div className="lg:col-span-4 motion-safe:animate-[hero-rise_0.9s_0.12s_var(--ease-out-soft)_both]">
            <RichText as="p" text={description} className="text-lg leading-relaxed text-fog" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="solid">
                {ctaText || "Get a Free Consultation"}
              </Button>
              {secondaryHref && (
                <Button href={secondaryHref} variant="outline">
                  What&rsquo;s included
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {(signature || image) && (
        <div className="wrap pb-6 pt-14 md:pt-20">
          <div className={`relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-ink-2 ${FRAME_SHAPES[imageShape] || FRAME_SHAPES["2.18"]}`}>
            {signature ? (
              <>
                <IndustrySignature slug={signature} lines={34} className="absolute inset-0 h-full w-full" />
                <p className="kicker absolute bottom-4 left-5 text-fog">
                  <span className="text-buzz">Signature</span> · {label}
                </p>
              </>
            ) : (
              <Image src={image} alt="" fill preload fetchPriority="high" sizes="(min-width: 1440px) 1360px, 100vw" className="object-cover" />
            )}
          </div>
        </div>
      )}
      {!signature && !image && <div className="pb-16 md:pb-24" />}
    </section>
  );
}
