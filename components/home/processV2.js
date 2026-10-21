import ScrollSteps from "@/components/ui/scrollSteps";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { resolveSteps } from "@/components/sections/whatMakesUs";

// How We Work (redesign) — on the shared navy block (NavyBlock): the 4
// steps as a timeline (GPG-style circles on a line, no boxes). Scrolling
// through fills the line and lights each step's circle as the line reaches
// it (ScrollSteps); on phones the steps stack and light up as they arrive.
export default function ProcessV2({ content }) {
  const eyebrow = content?.processEyebrow || "How We Work";
  const heading = content?.processHeading || "Our Process";
  const subtext = content?.processSubtext || "";
  const steps = resolveSteps(content);

  return (
    <section className="relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="grid gap-6 md:grid-cols-[2fr_3fr] md:gap-16">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          {subtext && <RichText as="p" text={subtext} className="self-end text-base text-white/70 md:text-lg" />}
        </div>

        <ScrollSteps className="relative mt-16 md:mt-24">
          {/* Phones: a still line down the left joining the circles. */}
          <div aria-hidden="true" className="absolute left-5 top-5 bottom-5 w-px bg-white/15 md:hidden" />
          {/* Desktop: a line across that fills as you scroll (--steps-progress, 0 → 1). */}
          <div aria-hidden="true" className="absolute inset-x-5 top-5 hidden h-px bg-white/15 md:block">
            <div
              className="h-full origin-left bg-[#40A2D8] transition-transform duration-200 ease-out"
              style={{ transform: "scaleX(var(--steps-progress, 0))" }}
            />
          </div>
          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} data-step={i} data-steps={steps.length} data-active="false" className="group relative pl-16 md:pl-0">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#06101f] text-white/70 transition-colors duration-500 group-data-[active=true]:border-[#40A2D8] group-data-[active=true]:bg-[#40A2D8] group-data-[active=true]:text-black md:relative">
                    {Icon ? <Icon size={16} /> : i + 1}
                  </span>
                  <p className="mt-0 text-xs text-white/50 md:mt-8">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display mt-2 text-2xl leading-snug">{step.title}</h3>
                  <RichText as="p" text={step.description} className="mt-3 text-sm leading-relaxed text-white/65" />
                </li>
              );
            })}
          </ol>
        </ScrollSteps>

        <div className="mt-16">
          <Pill href="/contact" variant="solid">Book Your Free Audit</Pill>
        </div>
      </div>
    </section>
  );
}
