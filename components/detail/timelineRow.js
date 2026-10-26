import RichText from "@/components/ui/richText";

// "What to expect, and when" (/how-we-work, redesign) — the stages in one
// row on wide screens, joined by a thin line with a dot per stage: how long
// it takes (small, blue), the stage, one line. Stacked with the line on the
// left on smaller screens. Nothing moves. `steps`: { step, title, desc }.
export default function TimelineRow({ eyebrow = "Timeline", heading, subtext, steps }) {
  if (!steps?.length) return null;
  return (
    <section className="relative text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {subtext && <RichText as="p" text={subtext} className="mt-5 text-base leading-relaxed text-white/70 md:text-lg" />}
        </div>
        <ol className="reveal-stagger relative mt-12 grid gap-10 border-l border-white/15 pl-8 md:mt-16 lg:grid-cols-5 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
          {steps.map(({ step, title, desc }, i) => (
            <li key={`${title}-${i}`} className="relative">
              <span aria-hidden="true" className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full bg-[#40A2D8] ring-4 ring-black lg:-top-[45px] lg:left-0" />
              {step && <p className="text-xs font-medium uppercase tracking-wider text-[#40A2D8]">{step}</p>}
              <h3 className="font-display mt-2 text-xl leading-snug text-white">{title}</h3>
              <RichText as="p" text={desc} className="mt-3 text-sm leading-relaxed text-white/65" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
