import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// "Where we work" / "Why businesses trust us": heading left, text right. No
// picture. `text`: a string or a list of paragraphs.
export default function LocalityBlock({ heading, subtext, text, eyebrow = "Where we work", no = "05" }) {
  const paragraphs = (Array.isArray(text) ? text : [text]).filter(Boolean);
  if (!paragraphs.length) return null;
  return (
    <section className="on-ink">
      <div className="wrap grid gap-12 py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Kicker no={no}>{eyebrow}</Kicker>
          <h2 className="font-display mt-8 text-balance text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[0.98] tracking-[-0.05em]">
            <AccentText text={heading} />
          </h2>
        </div>
        <div className="space-y-6 lg:col-span-5 lg:col-start-8 lg:pt-14">
          {subtext && <RichText as="p" text={subtext} className="text-xl leading-snug" />}
          {paragraphs.map((p, i) => (
            <RichText key={i} as="p" text={p} className="text-lg leading-relaxed text-(--mut)" />
          ))}
        </div>
      </div>
    </section>
  );
}
