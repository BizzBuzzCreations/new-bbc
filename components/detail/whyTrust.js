import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// "Why us" / "Who we are": a numbered list in two columns — big index,
// title, text. `items`: { title, desc }.
export default function WhyTrust({ heading, description, items, eyebrow = "Why us", no = "03" }) {
  if (!items?.length) return null;
  return (
    <section className="on-paper border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <SectionHead no={no} kicker={eyebrow} heading={heading} text={description} size="m" />
        <ol className="mt-8 grid border-t border-(--fg) md:mt-10 md:grid-cols-2 md:gap-x-10">
          {items.map(({ title, desc }, i) => (
            <li key={title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-(--line) py-8 md:py-10">
              <span className="font-display text-3xl leading-none tracking-[-0.05em] text-current/55">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-2xl leading-tight tracking-[-0.035em]">{title}</h3>
                <RichText as="p" text={desc} className="mt-3 leading-relaxed text-(--mut)" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
