// The UK office's details in one place — used by the footer's office card
// and the location pages' office section (components/home/officeV2.js), so
// they can't drift apart. Phone in international form for the tel: link
// (no trunk 0 after +44, or the call fails on many phones).
export const UK_OFFICE = {
  country: "United Kingdom",
  city: "London · UK time (GMT/BST)",
  lines: ["3 Thornham St,", "London SE10 9SA,", "United Kingdom"],
  maps: "3 Thornham St, London SE10 9SA, United Kingdom",
  phone: { display: "+44 7862 608652", href: "tel:+447862608652" },
};

export const mapsUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
