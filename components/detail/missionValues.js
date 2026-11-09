import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// Mission, vision and values (about) (rebuild): the two statements large,
// side by side, then the values as a numbered grid.
export default function MissionValues({ heading, mission, vision, valuesHeading, values = [] }) {
  const statements = [mission, vision].filter((s) => s?.text);
  return (
    <section className="bg-ink text-white">
      <div className="wrap py-24 md:py-36">
        <SectionHead kicker="What drives us" heading={heading} size="m" />
        {statements.length > 0 && (
          <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 md:mt-20 md:grid-cols-2 md:gap-10">
            {statements.map(({ title, text }, i) => (
              <div key={title}>
                <p className="kicker text-buzz">
                  {String(i + 1).padStart(2, "0")} · {title}
                </p>
                <RichText as="p" text={text} className="font-display mt-6 text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.15]" />
              </div>
            ))}
          </div>
        )}
        {values.length > 0 && (
          <>
            <h3 className="font-display mt-24 text-3xl md:text-4xl">{valuesHeading}</h3>
            <ul className="mt-10 grid grid-cols-2 border-t border-white/10 lg:grid-cols-5">
              {values.map(({ title, description, Icon }, i) => (
                <li key={title} className="border-b border-white/10 py-8 pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0">
                  <div className="flex items-center justify-between">
                    <span className="kicker text-buzz">{String(i + 1).padStart(2, "0")}</span>
                    {Icon && <Icon size={18} aria-hidden="true" strokeWidth={1.5} className="text-white/50" />}
                  </div>
                  <h4 className="font-display mt-6 text-xl leading-snug">{title}</h4>
                  <RichText as="p" text={description} className="mt-2 text-sm leading-relaxed text-fog" />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
