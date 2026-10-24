import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getPageContent } from "@/actions/pageContentActions";
import { sanitizeBlogContent } from "@/lib/sanitizeBlogContent";
import { extractTableOfContents } from "@/lib/extractTableOfContents";
import { legalPageKey, LEGAL_PAGES } from "@/lib/legalContentRegistry";

// Shared renderer for the four legal pages. Title, "Last Updated" and the
// body come from the dashboard's Legal Pages tab (defaults = the original
// copy). Redesign, like a blog post: the title in the site's dark band
// (breadcrumb, light headline, last updated), the text on white below it
// for easy reading (the blog's .article typography, so whatever the rich-
// text editor produces still looks right), a "Contents" list of its
// sections beside it from lg up, and links to the other legal pages at the
// end.
export default async function LegalPage({ slug }) {
  const content = await getPageContent(legalPageKey(slug));
  const { html, toc } = extractTableOfContents(sanitizeBlogContent(content?.legalBody || ""));
  const sections = toc.filter((h) => h.level === 2);
  const others = LEGAL_PAGES.filter((p) => p.slug !== slug);

  return (
    <>
      <header className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-12 md:px-10 md:pt-14 md:pb-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
              <li>
                <Link href="/" className="text-[#40A2D8] hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="text-white/80">{content?.legalTitle}</li>
            </ol>
          </nav>
          <h1 className="font-display mt-6 max-w-4xl text-[2.3rem] leading-[1.06] sm:text-5xl md:mt-8">{content?.legalTitle}</h1>
          {content?.legalUpdated && <p className="mt-5 text-sm text-white/60">Last Updated: {content.legalUpdated}</p>}
        </div>
      </header>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl gap-12 px-6 pt-10 pb-20 md:px-10 md:pt-14 lg:flex lg:items-start">
          {sections.length > 2 && (
            <aside className="sticky top-28 hidden max-h-[calc(100vh-8rem)] w-60 shrink-0 self-start overflow-y-auto lg:block">
              {/* a label, not a heading: it sits between the h1 and the text's own h2s */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">Contents</p>
              <ol className="space-y-1.5 border-l border-gray-200">
                {sections.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="-ml-px block border-l border-transparent py-0.5 pl-4 text-sm text-gray-600 transition-colors hover:border-[#0B60B0] hover:text-[#0B60B0]">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          )}
          <div className="min-w-0 flex-1">
            {/* headings get their own line height (the body text's 1.8 left big gaps in wrapped headings) */}
            <div className="article [&_h2]:scroll-mt-28 [&_h2]:leading-snug [&_h3]:scroll-mt-28 [&_h3]:leading-snug" dangerouslySetInnerHTML={{ __html: html }} />
            <nav aria-label="Other policies" className="mx-auto mt-14 max-w-[750px] border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">Other policies</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link href={p.path} className="inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-800 transition-colors hover:border-[#0B60B0] hover:bg-[#0B60B0] hover:text-white">
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
