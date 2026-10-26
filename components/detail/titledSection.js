import RichText from "@/components/ui/richText";

// A plain section with the redesign's heading block — small blue eyebrow,
// big light heading, optional blue tagline and text (heading left, text
// right on desktop) — and whatever goes under it (`children`), e.g.
// /our-team's people grids.
export default function TitledSection({ id, eyebrow, heading, tagline, text, children }) {
  return (
    <section id={id} className="scroll-mt-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal grid gap-6 md:grid-cols-[2fr_3fr] md:items-end md:gap-16">
          <div>
            {eyebrow && <p className="mb-4 text-sm text-[#40A2D8]">{eyebrow}</p>}
            <h2 className="font-display text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
            {tagline && <p className="mt-4 text-lg text-[#40A2D8]">{tagline}</p>}
          </div>
          {text && <RichText as="p" text={text} className="text-base leading-relaxed text-white/70 md:text-lg" />}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
