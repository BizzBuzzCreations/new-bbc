import { getPageContent } from "@/actions/pageContentActions";
import { sanitizeBlogContent } from "@/lib/sanitizeBlogContent";
import { legalPageKey } from "@/lib/legalContentRegistry";

// Shared renderer for the four legal pages. Title, "Last Updated" and the
// body come from the dashboard's Legal Pages tab (defaults = the original
// copy). Styling is applied to the body by element, not by class, so
// whatever the rich-text editor produces still looks right.
export default async function LegalPage({ slug }) {
  const content = await getPageContent(legalPageKey(slug));
  const body = sanitizeBlogContent(content?.legalBody || "");
  return (
    <div className="bg-gray-100 px-4 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 ring-1 ring-black/5 shadow-[0_12px_40px_-8px_rgba(15,23,42,0.18),0_4px_12px_rgba(15,23,42,0.08)] p-6 sm:p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{content?.legalTitle}</h1>
        {content?.legalUpdated && (
          <p className="text-sm text-gray-500 mb-6">Last Updated: {content.legalUpdated}</p>
        )}
        <div
          className="text-gray-900 [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_ol]:mb-4 [&_strong]:font-semibold [&_a]:text-[#0B60B0] [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
}
