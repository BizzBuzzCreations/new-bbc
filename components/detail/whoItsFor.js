import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";

// "Who it's for" / "What's included" grids: numbered items in a hairline
// grid, three across on wide screens. `items`: { title, tagline, desc } (an
// `icon` is ignored — no icons). `surface` "paper" (default) | "ink".
export default function WhoItsFor({ id, heading, items, eyebrow = "Who it’s for", subtext, footnote, twoUpOnPhones = false, cols = "lg:grid-cols-3", surface = "paper", no = "01" }) {
  if (!items?.length) return null;
  return (
    <section id={id} className={`on-${surface} scroll-mt-10 border-t border-(--line)`}>
      <div className="wrap py-7 md:py-10">
        <SectionHead no={no} kicker={eyebrow} heading={heading || "What's included"} text={subtext} size="m" />
        <ul className={`mt-8 grid border-t border-(--fg) sm:grid-cols-2 md:mt-10 ${cols} ${twoUpOnPhones ? "grid-cols-2" : ""}`}>
          {items.map(({ title, tagline, desc }, i) => (
            <li key={title} className={`border-b border-(--line) py-8 sm:pr-10 ${twoUpOnPhones ? "pr-4" : ""}`}>
              <span className="kicker text-(--mut)">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-8 text-2xl leading-tight tracking-[-0.035em]">{title}</h3>
              {tagline && <p className="mt-2 font-medium">{tagline}</p>}
              <RichText as="p" text={desc} className="mt-3 text-[0.9375rem] leading-relaxed text-(--mut)" />
            </li>
          ))}
        </ul>
        {footnote && <RichText as="p" text={footnote} className="mt-12 max-w-3xl text-lg leading-relaxed" />}
      </div>
    </section>
  );
}
