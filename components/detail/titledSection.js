import RichText from "@/components/ui/richText";

// A plain section with the redesign's heading block — small blue eyebrow,
// big light heading, optional blue tagline and text (heading left, text
// right on desktop) — and whatever goes under it (`children`), e.g.
// /our-team's people grids.
export default function TitledSection({ id, eyebrow, heading, tagline, text, children }) {
  return (
    <section id={id} className="scroll-mt-20 bg-ink text-white">
      <div className="wrap py-24 md:py-32">
        <div className="reveal grid gap-6 md:grid-cols-[2fr_3fr] md:items-end md:gap-16">
          <div>
            {eyebrow && <p className="kicker mb-6 text-buzz">{eyebrow}</p>}
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.98]">{heading}</h2>
            {tagline && <p className="mt-4 text-lg text-buzz">{tagline}</p>}
          </div>
          {text && <RichText as="p" text={text} className="text-base leading-relaxed text-fog md:text-lg" />}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
