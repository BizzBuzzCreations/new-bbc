import RichText from "@/components/ui/richText";

// "Who it's for" (sub-service pages, redesign) — the page's six capability
// points as an open grid split by thin lines (no boxes): icon, title, one
// paragraph. 3 across on desktop, 2 on tablets, stacked on phones. Also
// used on /services and /about (with their own `eyebrow`, `subtext` and a
// closing `footnote`) and /how-we-work. `twoUpOnPhones`: short items sit 2
// across on phones too; `cols`: the wide-screen columns; an item's optional
// `tagline` shows in blue under its title; `className` sets the background
// (none on the beams).
export default function WhoItsFor({ id, heading, items, eyebrow = "Who it’s for", subtext, footnote, twoUpOnPhones = false, cols = "lg:grid-cols-3", className = "bg-black" }) {
  if (!items?.length) return null;
  return (
    <section id={id} className={`scroll-mt-24 text-white ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading || "What's Included"}</h2>
          {subtext && <RichText as="p" text={subtext} className="mt-5 text-base leading-relaxed text-white/70 md:text-lg" />}
        </div>
        <ul className={`reveal-stagger mt-12 grid border-t border-white/10 sm:grid-cols-2 md:mt-16 ${cols} ${twoUpOnPhones ? "grid-cols-2" : ""}`}>
          {items.map(({ icon: Icon, title, tagline, desc }) => (
            <li key={title} className={`border-b border-white/10 py-8 sm:pr-10 ${twoUpOnPhones ? "pr-4" : ""}`}>
              {Icon && (
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B60B0]/15 text-[#40A2D8]">
                  <Icon size={18} />
                </span>
              )}
              <h3 className="font-display mt-5 text-xl leading-snug text-white">{title}</h3>
              {tagline && <p className="mt-1 text-sm text-[#40A2D8]">{tagline}</p>}
              <RichText as="p" text={desc} className="mt-3 text-sm leading-relaxed text-white/65" />
            </li>
          ))}
        </ul>
        {footnote && <RichText as="p" text={footnote} className="reveal mt-10 max-w-3xl text-base leading-relaxed text-white md:text-lg" />}
      </div>
    </section>
  );
}
