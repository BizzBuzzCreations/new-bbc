import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// "Why us" / "Who we are" lists (rebuild): a numbered list in two columns
// — big index, title, text — on ink. `items`: { title, desc }.
export default function WhyTrust({ heading, description, items, eyebrow = "Why us", no = "03", divided = false }) {
  if (!items?.length) return null;
  return (
    <section className={`relative bg-ink text-white ${divided ? "border-t border-white/10" : ""}`}>
      <div className="wrap py-24 md:py-36">
        <SectionHead no={no} kicker={eyebrow} heading={heading} text={description} />
        <ol className="mt-16 grid border-t border-white/10 md:mt-20 md:grid-cols-2 md:gap-x-10">
          {items.map(({ title, desc }, i) => (
            <li key={title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-white/10 py-8 md:py-10">
              <span className="font-display text-3xl leading-none text-buzz">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <RichText as="p" text={desc} className="mt-3 leading-relaxed text-fog" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
