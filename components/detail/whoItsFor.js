import RichText from "@/components/ui/richText";

// "Who it's for" (sub-service pages, redesign) — the page's six capability
// points as an open grid split by thin lines (no boxes): icon, title, one
// paragraph. 3 across on desktop, 2 on tablets, stacked on phones.
export default function WhoItsFor({ id, heading, items }) {
  if (!items?.length) return null;
  return (
    <section id={id} className="scroll-mt-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-[#40A2D8]">Who it&rsquo;s for</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading || "What's Included"}</h2>
        </div>
        <ul className="reveal-stagger mt-12 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {items.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="border-b border-white/10 py-8 sm:pr-10">
              {Icon && (
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B60B0]/15 text-[#40A2D8]">
                  <Icon size={18} />
                </span>
              )}
              <h3 className="font-display mt-5 text-xl leading-snug text-white">{title}</h3>
              <RichText as="p" text={desc} className="mt-3 text-sm leading-relaxed text-white/65" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
