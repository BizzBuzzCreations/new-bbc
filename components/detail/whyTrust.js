import RichText from "@/components/ui/richText";

// "Why trust us" (sub-service pages, redesign) — the page's differentiators
// as a numbered list in two columns, big light numbers and thin lines, in
// place of the old alternating timeline. Sits on the shared beams
// background (BeamsBlock) with the roadmap.
export default function WhyTrust({ heading, items }) {
  if (!items?.length) return null;
  return (
    <section className="relative overflow-x-clip text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-[#40A2D8]">Why us</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
        </div>
        <ol className="reveal-sides mt-12 grid border-t border-white/10 md:mt-16 md:grid-cols-2 md:gap-x-12">
          {items.map(({ title, desc }, i) => (
            <li key={title} className="flex gap-6 border-b border-white/10 py-8">
              <span aria-hidden="true" className="font-display w-12 shrink-0 text-3xl text-[#40A2D8] md:text-4xl">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xl leading-snug text-white md:text-2xl">{title}</h3>
                <RichText as="p" text={desc} className="mt-3 text-sm leading-relaxed text-white/65 md:text-base" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
