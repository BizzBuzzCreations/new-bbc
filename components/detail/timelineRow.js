import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// A row of dated / numbered steps (how we work's timeline). `steps`:
// { step, title, desc }.
export default function TimelineRow({ eyebrow = "Timeline", heading, subtext, steps }) {
  if (!steps?.length) return null;
  return (
    <section className="on-paper border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <SectionHead kicker={eyebrow} heading={heading} text={subtext} size="m" />
        <ol className="mt-8 grid border-t border-(--fg) md:mt-10 lg:grid-cols-5">
          {steps.map(({ step, title, desc }, i) => (
            <li key={`${title}-${i}`} className="border-b border-(--line) py-8 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0">
              <p className="kicker text-(--mut)">{step || String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display mt-6 text-xl leading-snug tracking-[-0.03em]">{title}</h3>
              <RichText as="p" text={desc} className="mt-3 text-sm leading-relaxed text-(--mut)" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
