import RichText from "@/components/ui/richText";

// "What to expect, and when" (/how-we-work, redesign) — the stages in one
// row on wide screens, joined by a thin line with a dot per stage: how long
// it takes (small, blue), the stage, one line. Stacked with the line on the
// left on smaller screens. Nothing moves. `steps`: { step, title, desc }.
export default function TimelineRow({ eyebrow = "Timeline", heading, subtext, steps }) {
  if (!steps?.length) return null;
  return (
    <section className="relative text-white">
      <div className="wrap py-24 md:py-32">
        <div className="reveal max-w-3xl">
          <p className="kicker text-buzz">{eyebrow}</p>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.98]">{heading}</h2>
          {subtext && <RichText as="p" text={subtext} className="mt-5 text-base leading-relaxed text-fog md:text-lg" />}
        </div>
        <ol className="reveal-stagger relative mt-12 grid gap-10 border-l border-white/15 pl-8 md:mt-16 lg:grid-cols-5 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
          {steps.map(({ step, title, desc }, i) => (
            <li key={`${title}-${i}`} className="relative">
              <span aria-hidden="true" className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full bg-buzz ring-4 ring-black lg:-top-[45px] lg:left-0" />
              {step && <p className="text-xs font-medium uppercase tracking-wider text-buzz">{step}</p>}
              <h3 className="font-display mt-2 text-xl leading-snug text-white">{title}</h3>
              <RichText as="p" text={desc} className="mt-3 text-sm leading-relaxed text-fog" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
