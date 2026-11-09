import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// Overview block (service hubs, about): the heading as the thesis on the
// left, the paragraphs on the right. No picture.
export default function HubIntro({ heading, tagline, paragraphs = [], eyebrow = "Overview" }) {
  const text = paragraphs.filter(Boolean);
  if (!heading && !text.length) return null;
  return (
    <section className="on-paper border-t border-(--line)">
      <div className="wrap grid gap-12 py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Kicker no="01">{eyebrow}</Kicker>
          <h2 className="font-display mt-8 text-balance text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[0.98] tracking-[-0.05em]">
            <AccentText text={heading} />
          </h2>
          {tagline && <p className="mt-6 text-xl leading-snug">{tagline}</p>}
        </div>
        <div className="space-y-6 lg:col-span-5 lg:col-start-8 lg:pt-14">
          {text.map((p, i) => (
            <RichText key={i} as="p" text={p} className="text-lg leading-relaxed text-(--mut)" />
          ))}
        </div>
      </div>
    </section>
  );
}
