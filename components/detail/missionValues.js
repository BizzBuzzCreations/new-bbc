import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// Mission, vision and values (about): the two statements large side by side,
// then the values as a numbered row.
export default function MissionValues({ heading, mission, vision, valuesHeading, values = [] }) {
  const statements = [mission, vision].filter((s) => s?.text);
  return (
    <section className="on-paper border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <SectionHead kicker="What drives us" heading={heading} size="m" />
        {statements.length > 0 && (
          <div className="mt-8 grid gap-12 border-t border-(--fg) pt-10 md:mt-10 md:grid-cols-2 md:gap-10">
            {statements.map(({ title, text }, i) => (
              <div key={title}>
                <p className="kicker text-(--mut)">{String(i + 1).padStart(2, "0")} · {title}</p>
                <RichText as="p" text={text} className="font-display mt-6 text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.1] tracking-[-0.04em]" />
              </div>
            ))}
          </div>
        )}
        {values.length > 0 && (
          <>
            <h3 className="font-display mt-10 text-3xl tracking-[-0.04em] md:text-4xl">{valuesHeading}</h3>
            <ul className="mt-6 grid grid-cols-2 border-t border-(--fg) lg:grid-cols-5">
              {values.map(({ title, description }, i) => (
                <li key={title} className="border-b border-(--line) py-8 pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0">
                  <span className="kicker text-(--mut)">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="font-display mt-6 text-xl leading-snug tracking-[-0.03em]">{title}</h4>
                  <RichText as="p" text={description} className="mt-2 text-sm leading-relaxed text-(--mut)" />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
