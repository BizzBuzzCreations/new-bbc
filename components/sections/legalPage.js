import Link from "next/link";
import { getPageContent } from "@/actions/pageContentActions";
import { sanitizeBlogContent } from "@/lib/sanitizeBlogContent";
import { extractTableOfContents } from "@/lib/extractTableOfContents";
import { legalPageKey, LEGAL_PAGES } from "@/lib/legalContentRegistry";
import Breadcrumb from "@/components/brand/breadcrumb";

// Privacy, terms, cookies, disclaimer (rebuild): an ink header (breadcrumb,
// title, last updated) and the text on paper for comfortable reading, with
// the numbered contents list beside it on wide screens and the other
// policies at the end. Text from the dashboard (legalTitle, legalUpdated,
// legalBody).
export default async function LegalPage({ slug }) {
  const content = await getPageContent(legalPageKey(slug));
  const { html, toc } = extractTableOfContents(sanitizeBlogContent(content?.legalBody || ""));
  const sections = toc.filter((h) => h.level === 2);
  const others = LEGAL_PAGES.filter((p) => p.slug !== slug);

  return (
    <>
      <header className="on-paper relative pt-24 md:pt-32">
        <div className="wrap pb-7 md:pb-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: content?.legalTitle }]} />
          <h1 className="font-display mt-8 max-w-4xl text-[clamp(2.7rem,7vw,7rem)] leading-[0.94] tracking-[-0.055em] md:mt-10">{content?.legalTitle}</h1>
          {content?.legalUpdated && <p className="kicker mt-8 text-(--mut)">Last updated · {content.legalUpdated}</p>}
        </div>
      </header>

      <div className="on-paper border-t border-(--line)">
        <div className="wrap grid gap-12 py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
          {sections.length > 2 && (
            <aside className="sticky top-28 hidden max-h-[calc(100vh-8rem)] self-start overflow-y-auto lg:col-span-3 lg:block">
              {/* a label, not a heading: it sits between the h1 and the text's own h2s */}
              <p className="kicker mb-5 text-(--mut)">Contents</p>
              <ol className="border-t border-ink/15">
                {sections.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="flex gap-3 border-b border-ink/15 py-2.5 text-sm text-(--mut) transition-colors hover:text-ink">
                      <span className="kicker w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          )}
          <div className={`min-w-0 ${sections.length > 2 ? "lg:col-span-8 lg:col-start-5" : "lg:col-span-8 lg:col-start-3"}`}>
            {/* headings get their own line height (the body text's 1.8 left big gaps in wrapped headings) */}
            <div className="article article-paper [&_h2]:scroll-mt-28 [&_h2]:leading-snug [&_h3]:scroll-mt-28 [&_h3]:leading-snug" dangerouslySetInnerHTML={{ __html: html }} />
            <nav aria-label="Other policies" className="mt-8 border-t border-ink/15 pt-8">
              <p className="kicker text-(--mut)">Other policies</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link href={p.path} className="inline-flex h-11 items-center rounded-full border border-ink/25 px-5 text-sm transition-colors hover:border-ink hover:bg-(--bg) hover:text-(--fg)">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
