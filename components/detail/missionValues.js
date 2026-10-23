import { Target, Rocket } from "lucide-react";
import RichText from "@/components/ui/richText";

// Mission, vision and core values (/about, redesign) — the mission and the
// vision as two large statements side by side (stacked on phones), then
// the core values as an open row split by thin lines (no boxes): icon,
// title, one line. 5 across on wide screens, 2 on tablets and phones.
// `values`: { title, description, Icon }.
export default function MissionValues({ heading, mission, vision, valuesHeading, values = [] }) {
  const statements = [
    { ...mission, Icon: Target },
    { ...vision, Icon: Rocket },
  ].filter((s) => s.text);
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-[#40A2D8]">What drives us</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
        </div>

        {statements.length > 0 && (
          <div className="reveal-stagger mt-12 grid gap-10 border-t border-white/10 pt-10 md:mt-16 md:grid-cols-2 md:gap-16">
            {statements.map(({ title, text, Icon }) => (
              <div key={title}>
                <h3 className="font-display flex items-center gap-3 text-xl text-white md:text-2xl">
                  <Icon size={20} aria-hidden="true" className="text-[#40A2D8]" />
                  {title}
                </h3>
                <RichText as="p" text={text} className="font-display mt-5 text-2xl leading-snug text-white/85 md:text-3xl" />
              </div>
            ))}
          </div>
        )}

        {values.length > 0 && (
          <>
            <h3 className="font-display mt-16 text-2xl md:mt-20 md:text-3xl">{valuesHeading}</h3>
            <ul className="reveal-stagger mt-8 grid grid-cols-2 border-t border-white/10 lg:grid-cols-5">
              {values.map(({ title, description, Icon }) => (
                <li key={title} className="border-b border-white/10 py-8 pr-4 sm:pr-8">
                  {Icon && (
                    <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B60B0]/15 text-[#40A2D8]">
                      <Icon size={18} />
                    </span>
                  )}
                  <h4 className="font-display mt-5 text-lg leading-snug text-white">{title}</h4>
                  <RichText as="p" text={description} className="mt-2 text-sm leading-relaxed text-white/65" />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
