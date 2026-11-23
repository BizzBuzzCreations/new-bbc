// Structured data every service / industry / content page gets without anyone
// having to write JSON: the breadcrumb trail (Home > page, matching the URL
// structure) and, for the service pages, a Service entry tying the page to
// the business. It is only used where the page has no schema of its own saved
// in the dashboard's SEO tab (that always wins) — see PageSeoScripts.
// Names come from the same data the pages are built from, so they never
// drift from what visitors read.
import { PAGE_PATHS, SITE_URL } from "@/lib/pagePaths";
import { HUB_LABELS } from "@/lib/subServiceContentRegistry";
import { SUB_SERVICE_PAGE_CONTENT } from "@/lib/subServicePageContent";
import { INDUSTRIES } from "@/lib/industriesData";

const BUSINESS_ID = `${SITE_URL}/`; // the LocalBusiness block in lib/siteSchema.js

const titleCase = (slug) =>
  String(slug || "")
    .split("-")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

// slugs that title-casing would get wrong
const NAMES = { faq: "FAQ", "terms-and-conditions": "Terms and Conditions" };

const abs = (path) => `${SITE_URL}${path === "/" ? "" : path}`;

// pageKey -> { crumbs: [{ name, path }], service?: { name, description } }
function describe(pageKey, ownPath) {
  if (pageKey === "home") return null;
  if (pageKey.startsWith("service-")) {
    const hub = pageKey.slice("service-".length);
    const name = HUB_LABELS[hub];
    if (!name) return null;
    return { crumbs: [{ name, path: ownPath }], service: { name } };
  }
  if (pageKey.startsWith("subservice-")) {
    const rest = pageKey.slice("subservice-".length);
    const hub = Object.keys(HUB_LABELS).find((h) => rest.startsWith(`${h}-`));
    const entry = hub && SUB_SERVICE_PAGE_CONTENT[rest];
    if (!hub || !entry?.label) return null;
    return {
      crumbs: [
        { name: HUB_LABELS[hub], path: `/${hub}` },
        { name: entry.label, path: ownPath },
      ],
      service: { name: entry.label, description: entry.description },
    };
  }
  if (pageKey.startsWith("industry-")) {
    const industry = INDUSTRIES.find((i) => `industry-${i.slug}` === pageKey);
    if (!industry) return null;
    return {
      crumbs: [
        { name: "Industries", path: "/industries" },
        { name: industry.label, path: ownPath },
      ],
    };
  }
  if (pageKey.startsWith("outside-location")) return null; // the UK / location pages carry their own graph
  if (!PAGE_PATHS[pageKey]) return null; // dashboard-created pages etc.: leave to their own schema
  if (pageKey === "bpo-team" || pageKey === "rnd-team")
    return {
      crumbs: [
        { name: "Our Team", path: "/our-team" },
        { name: pageKey === "bpo-team" ? "BPO Team" : "R&D Team", path: ownPath },
      ],
    };
  const last = ownPath.split("/").filter(Boolean).pop();
  return { crumbs: [{ name: NAMES[last] || titleCase(last), path: ownPath }] };
}

export function buildAutoSchema(pageKey, ownPath) {
  const d = describe(pageKey, ownPath || PAGE_PATHS[pageKey]);
  if (!d) return [];
  const out = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...d.crumbs].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: abs(c.path),
      })),
    },
  ];
  if (d.service) {
    const url = abs(ownPath || PAGE_PATHS[pageKey]);
    out.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: d.service.name,
      serviceType: d.service.name,
      ...(d.service.description ? { description: d.service.description } : {}),
      url,
      provider: { "@type": "LocalBusiness", "@id": BUSINESS_ID, name: "BizzBuzz Creations" },
      areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
    });
  }
  return out;
}
