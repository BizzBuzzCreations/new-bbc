import slugify from "slugify";

// The author's page address, from the name typed in the blog editor
// ("Priya Sharma" -> "priya-sharma"). Plain (no database), so server and
// client components can both build author links with it.
export const authorSlug = (name) => slugify(String(name || ""), { lower: true, strict: true }) || "author";

export const authorPath = (name) => `/author/${authorSlug(name)}`;
