import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// "Who it's for" / "What's included" grids (rebuild): a paper section —
// numbered items in a hairline grid (3 across on desktop). `items`:
// { icon, title, tagline, desc }. `tone` "paper" (default) | "ink".
// `cols`, `twoUpOnPhones`, `footnote`, `subtext` as before.
export default function WhoItsFor({ id, heading, items, eyebrow = "Who it’s for", subtext, footnote, twoUpOnPhones = false, cols = "lg:grid-cols-3", tone = "paper", no = "01" }) {
  if (!items?.length) return null;
  const paper = tone === "paper";
  const line = paper ? "border-ink/15" : "border-white/10";
  return (
    <section id={id} className={`scroll-mt-24 ${paper ? "bg-paper text-ink" : "bg-ink text-white"}`}>
      <div className="wrap py-24 md:py-36">
        <SectionHead no={no} kicker={eyebrow} heading={heading || "What's included"} text={subtext} tone={paper ? "dark" : "light"} size="m" />
        <ul className={`mt-16 grid border-t sm:grid-cols-2 md:mt-20 ${line} ${cols} ${twoUpOnPhones ? "grid-cols-2" : ""}`}>
          {items.map(({ icon: Icon, title, tagline, desc }, i) => (
            <li key={title} className={`border-b py-8 sm:pr-10 ${line} ${twoUpOnPhones ? "pr-4" : ""}`}>
              <div className="flex items-center justify-between gap-4">
                <span className={`kicker ${paper ? "text-stone" : "text-buzz"}`}>{String(i + 1).padStart(2, "0")}</span>
                {Icon && <Icon aria-hidden="true" size={20} strokeWidth={1.5} className={paper ? "text-ink/60" : "text-white/50"} />}
              </div>
              <h3 className="font-display mt-6 text-2xl leading-tight">{title}</h3>
              {tagline && <p className={`mt-2 font-medium ${paper ? "text-ink" : "text-white"}`}>{tagline}</p>}
              <RichText as="p" text={desc} className={`mt-3 text-[0.9375rem] leading-relaxed ${paper ? "text-stone" : "text-fog"}`} />
            </li>
          ))}
        </ul>
        {footnote && <RichText as="p" text={footnote} className={`mt-12 max-w-3xl text-lg leading-relaxed ${paper ? "text-ink" : "text-white"}`} />}
      </div>
    </section>
  );
}
