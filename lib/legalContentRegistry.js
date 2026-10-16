// Dashboard registry for the four legal pages (Privacy Policy, Terms &
// Conditions, Cookie Policy, Disclaimer). Edited from the dashboard's own
// "Legal Pages" tab (components/sections/dashboardLegal.js), not the
// Website Content tab. Defaults are the exact copy the pages shipped with
// (lib/legalPagesContent.js), so nothing changes until an admin saves.
import { LEGAL_PAGE_DEFAULTS } from "./legalPagesContent";

export const LEGAL_PAGES = [
  { slug: "privacy-policy", label: "Privacy Policy", path: "/privacy-policy" },
  { slug: "terms-and-conditions", label: "Terms & Conditions", path: "/terms-and-conditions" },
  { slug: "cookie-policy", label: "Cookie Policy", path: "/cookie-policy" },
  { slug: "disclaimer", label: "Disclaimer", path: "/disclaimer" },
];

export const legalPageKey = (slug) => `legal-${slug}`;

export const LEGAL_CONTENT_REGISTRY = LEGAL_PAGES.map(({ slug, label }) => {
  const d = LEGAL_PAGE_DEFAULTS[slug];
  return {
    key: legalPageKey(slug),
    label: `Legal — ${label}`,
    sections: [
      {
        key: "legal",
        label,
        fields: [
          { key: "legalTitle", label: "Page Title", type: "text", default: d.title },
          { key: "legalUpdated", label: "Last Updated", type: "text", default: d.updated },
          { key: "legalBody", label: "Page Content", type: "textarea", default: d.body },
        ],
      },
    ],
  };
});
