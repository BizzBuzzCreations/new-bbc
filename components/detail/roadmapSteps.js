import ScrollSteps from "@/components/ui/scrollSteps";
import RichText from "@/components/ui/richText";

// Roadmap (sub-service pages, redesign) — the page's steps as a vertical
// timeline instead of an auto-scrolling carousel: the heading stays beside
// the steps on desktop (sticky), and as you scroll the line fills and each
// step's dot lights up when it reaches it (ScrollSteps, vertical). Nothing
// moves on its own; under reduced motion everything is shown lit.
export default function RoadmapSteps({ heading, subtext, steps }) {
  if (!steps?.length) return null;
  return (
    <section className="relative text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[2fr_3fr] md:gap-16 md:px-10 py-16 md:py-20">
        <div className="reveal md:sticky md:top-28 md:self-start">
          <p className="text-sm text-[#40A2D8]">How it works</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {subtext && <RichText as="p" text={subtext} className="mt-5 text-base leading-relaxed text-white/70" />}
        </div>
        <ScrollSteps vertical className="relative">
          {/* the line, and its filled part */}
          <span aria-hidden="true" className="absolute bottom-2 left-[19px] top-2 w-px bg-white/15" />
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-2 w-px origin-top bg-linear-to-b from-[#40A2D8] to-[#7b74f7]"
            style={{ height: "calc(100% - 1rem)", transform: "scaleY(var(--steps-progress, 0))" }}
          />
          <ol className="space-y-10">
            {steps.map(({ title, desc }, i) => (
              <li key={title} data-step={i} data-steps={steps.length} data-active="false" className="group relative pl-16">
                <span
                  aria-hidden="true"
                  className="font-display absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black text-sm text-white/70 transition-colors duration-500 group-data-[active=true]:border-[#40A2D8] group-data-[active=true]:bg-[#40A2D8] group-data-[active=true]:text-black"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl leading-snug text-white md:text-2xl">{title}</h3>
                <RichText as="p" text={desc} className="mt-2 text-sm leading-relaxed text-white/65 md:text-base" />
              </li>
            ))}
          </ol>
        </ScrollSteps>
      </div>
    </section>
  );
}
