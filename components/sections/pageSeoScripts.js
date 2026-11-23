import { getPageContent } from "@/actions/pageContentActions";
import { hasCustomSchema, isTrue, parseSchemaJson, publicPathFor } from "@/lib/seo";
import { buildAutoSchema } from "@/lib/autoSchema";
import ImageAltPatcher from "@/components/sections/imageAltPatcher";

// Rendered once near the top of every dashboard-editable page. Outputs
// what the SEO panel saves that can't go through generateMetadata():
//   - the page's JSON-LD schema (when enabled and valid)
//   - the image alt-text overrides
export default async function PageSeoScripts({ pageKey }) {
  const content = await getPageContent(pageKey);

  let jsonLd = null;
  if (isTrue(content?.schemaEnabled, false)) {
    const parsed = parseSchemaJson(content.schemaJson);
    if (parsed.ok) {
      jsonLd = parsed.data["@context"]
        ? parsed.data
        : { "@context": "https://schema.org", ...parsed.data };
    }
  }

  const alts = content?.imageAlts || {};
  const hasAlts = Object.keys(alts).length > 0;

  // No schema of its own saved for this page: give it the automatic
  // breadcrumb (and Service) data. A page with its own always wins, untouched.
  const slug = content?.seoSlug && /^[a-z0-9-]+$/i.test(content.seoSlug) ? content.seoSlug : "";
  const auto = jsonLd ? [] : buildAutoSchema(pageKey, slug ? publicPathFor(pageKey, slug) : undefined);

  if (!jsonLd && !hasAlts && auto.length === 0) return null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          // Lets the site-wide default schema (allScripts.js) see that this
          // page carries its own and not add a duplicate.
          data-custom-schema="true"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {auto.map((o, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(o).replace(/</g, "\\u003c") }}
        />
      ))}
      {hasAlts && <ImageAltPatcher alts={alts} />}
    </>
  );
}
