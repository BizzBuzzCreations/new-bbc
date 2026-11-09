import ScrollSteps from "@/components/ui/scrollSteps";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// "How it works" timelines (rebuild): a paper section — heading sticky on
// the left, the steps on the right along a line that fills in ink as the
// list scrolls past (ScrollSteps); each reached step's number turns solid.
// `steps`: { title, desc }. `footnote` a highlighted line under the heading.
export default function RoadmapSteps({ heading, subtext, steps, eyebrow = "How it works", footnote, no = "04" }) {
  if (!steps?.length) return null;
  return (
    <section className="relative bg-paper text-ink">
      <div className="wrap grid gap-14 py-24 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <Kicker no={no} tone="dark">
            {eyebrow}
          </Kicker>
          <h2 className="font-display mt-6 text-balance text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[0.98]">
            <AccentText text={heading} />
          </h2>
          {subtext && <RichText as="p" text={subtext} className="mt-6 max-w-md text-lg leading-relaxed text-stone" />}
          {footnote && <RichText as="p" text={footnote} className="mt-8 max-w-md border-l-2 border-ink pl-5 text-lg leading-relaxed" />}
        </div>
        <ScrollSteps vertical className="relative lg:col-span-6 lg:col-start-7">
          <span aria-hidden="true" className="absolute bottom-3 left-[23px] top-3 w-px bg-ink/15" />
          <span aria-hidden="true" className="absolute left-[23px] top-3 w-px origin-top bg-ink" style={{ height: "calc(100% - 1.5rem)", transform: "scaleY(var(--steps-progress, 0))" }} />
          <ol className="space-y-12">
            {steps.map(({ title, desc }, i) => (
              <li key={title} data-step={i} data-steps={steps.length} data-active="false" className="group relative pl-20">
                <span
                  aria-hidden="true"
                  className="kicker absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-ink/25 bg-paper text-stone transition-colors duration-500 group-data-[active=true]:border-ink group-data-[active=true]:bg-ink group-data-[active=true]:text-buzz"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display pt-2 text-2xl leading-tight md:text-[1.75rem]">{title}</h3>
                <RichText as="p" text={desc} className="mt-3 leading-relaxed text-stone" />
              </li>
            ))}
          </ol>
        </ScrollSteps>
      </div>
    </section>
  );
}
