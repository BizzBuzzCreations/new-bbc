import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// A section with a heading and free content under it (team pages).
export default function TitledSection({ id, eyebrow, heading, tagline, text, children }) {
  return (
    <section id={id} className="on-paper scroll-mt-10 border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <SectionHead kicker={eyebrow} heading={heading} text={text} size="m" />
        {tagline && <p className="mt-6 text-xl">{tagline}</p>}
        <div className="mt-6 md:mt-8">{children}</div>
      </div>
    </section>
  );
}
