import ScrollSteps from "@/components/ui/scrollSteps";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";
import { resolveSteps } from "@/components/sections/whatMakesUs";

// Our process (rebuild): the four steps as columns on a line that fills in
// buzz as the section scrolls past (ScrollSteps sets --steps-progress and
// marks reached steps data-active). Phones: a vertical list. Same dashboard
// fields as before (processEyebrow, processHeading, processSubtext,
// processSteps).
export default function ProcessV2({ content }) {
  const eyebrow = content?.processEyebrow || "How we work";
  const heading = content?.processHeading || "Our Process";
  const subtext = content?.processSubtext || "Four steps, the same every time — so you always know what happens next and who is doing it.";
  const steps = resolveSteps(content);

  return (
    <section aria-labelledby="process-heading" className="relative bg-ink text-white">
      <div className="wrap py-24 md:py-40">
        <SectionHead id="process-heading" no="08" kicker={eyebrow} heading={heading} text={subtext} />
        <ScrollSteps className="relative mt-16 md:mt-24">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-px bg-white/15 md:block">
            <div className="h-full origin-left bg-buzz transition-transform duration-200 ease-out" style={{ transform: "scaleX(var(--steps-progress, 0))" }} />
          </div>
          <ol className="grid md:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                data-step={i}
                data-steps={steps.length}
                data-active="false"
                className="group border-t border-white/10 py-8 md:border-l md:border-t-0 md:px-6 md:pb-0 md:pt-10 md:first:border-l-0 md:first:pl-0"
              >
                <span className="kicker text-fog transition-colors duration-500 group-data-[active=true]:text-buzz">Step {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-5 text-[1.75rem] leading-tight md:text-3xl">{step.title}</h3>
                <RichText as="p" text={step.description} className="mt-4 text-[0.9375rem] leading-relaxed text-fog" />
              </li>
            ))}
          </ol>
        </ScrollSteps>
        <div className="mt-14">
          <Button href="/contact" variant="solid">
            Book your free audit
          </Button>
        </div>
      </div>
    </section>
  );
}
