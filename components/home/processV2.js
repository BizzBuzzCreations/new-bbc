import ScrollSteps from "@/components/ui/scrollSteps";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";
import { resolveSteps } from "@/components/sections/whatMakesUs";

// Our process: four steps as columns on a line that fills in as you scroll
// (Kerna's numbered steps; ScrollSteps marks the reached ones). Phones: a
// list. Dashboard fields as before (processEyebrow, processHeading,
// processSubtext, processSteps).
export default function ProcessV2({ content }) {
  const eyebrow = content?.processEyebrow || "How we work";
  const heading = content?.processHeading || "Our Process";
  const subtext = content?.processSubtext || "Four steps, the same every time — so you always know what happens next and who is doing it.";
  const steps = resolveSteps(content);
  return (
    <section aria-labelledby="process-heading" className="on-paper">
      <div className="wrap py-7 md:py-10">
        <SectionHead id="process-heading" no="07" of="08" kicker={eyebrow} heading={heading} text={subtext} size="m" />
        <ScrollSteps className="relative mt-6 md:mt-8">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-px bg-(--line) md:block">
            <div className="h-full origin-left bg-(--fg) transition-transform duration-200 ease-out" style={{ transform: "scaleX(var(--steps-progress, 0))" }} />
          </div>
          <ol className="grid md:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} data-step={i} data-steps={steps.length} data-active="false" className="group border-t border-(--line) py-8 md:border-l md:border-t-0 md:px-6 md:pb-0 md:pt-10 md:first:border-l-0 md:first:pl-0">
                <span className="font-display text-6xl leading-none tracking-[-0.06em] text-current/50 transition-colors duration-500 group-data-[active=true]:text-current md:text-7xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-8 text-2xl leading-tight tracking-[-0.03em] md:text-[1.75rem]">{step.title}</h3>
                <RichText as="p" text={step.description} className="mt-4 text-[0.9375rem] leading-relaxed text-(--mut)" />
              </li>
            ))}
          </ol>
        </ScrollSteps>
        <div className="mt-8">
          <Button href="/contact" variant="solid">Book your free audit</Button>
        </div>
      </div>
    </section>
  );
}
