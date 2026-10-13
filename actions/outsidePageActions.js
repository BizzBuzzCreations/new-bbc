"use server";
import connectDB from "@/db/connect";
import OutsidePage from "@/models/outsidePage";
import PageContent from "@/models/pageContent";
import { getSession } from "@/actions/authActions";
import { revalidatePath } from "next/cache";
import { OUTSIDE_PAGE_PREFIX, isValidSlug } from "@/lib/seo";
import { PAGE_PATHS } from "@/lib/pagePaths";

// Slugs that can't be used: "uk" would collide with the built-in UK page's
// key, and the UK page itself already owns its own URL.
const RESERVED_SLUGS = ["uk", "digital-marketing-services-in-uk"];

async function requireSession() {
  const session = await getSession();
  if (!session) return { success: false, message: "Unauthorized." };
  return null;
}

const internalPath = (slug) => `/en-uk/${slug}`;

const toPlain = (doc) => ({
  slug: doc.slug,
  pageKey: doc.pageKey,
  label: doc.label,
  path: doc.path || internalPath(doc.slug),
});

// First URL segments that belong to the rest of the site (and can never be
// used as a prefix / top-level slug here).
const RESERVED_FIRST_SEGMENTS = new Set([
  "admin", "api", "_next", "blog", "robots.txt", "sitemap.xml",
  ...Object.values(PAGE_PATHS).map((p) => p.split("/")[1]).filter(Boolean),
]);

// Builds + validates the public path from a prefix ("en-uk", "en-ca", or ""
// for none) and a slug. Returns { path } or { error }.
async function buildPublicPath(prefix, slug, ownSlug) {
  const cleanPrefix = String(prefix ?? "").trim().toLowerCase().replace(/^\/+|\/+$/g, "");
  const cleanSlug = String(slug ?? "").trim().toLowerCase();
  if (!cleanSlug || cleanSlug.length > 80 || !isValidSlug(cleanSlug)) {
    return {
      error:
        "URL slug can only use lowercase letters, numbers and single hyphens (e.g. digital-marketing-services-in-canada).",
    };
  }
  if (cleanPrefix) {
    const parts = cleanPrefix.split("/");
    if (parts.length > 2 || parts.some((x) => !x || x.length > 40 || !isValidSlug(x))) {
      return {
        error:
          "URL prefix can only use lowercase letters, numbers and hyphens (e.g. en-uk, en-ca) — or leave it empty for no prefix.",
      };
    }
  }
  const path = cleanPrefix ? `/${cleanPrefix}/${cleanSlug}` : `/${cleanSlug}`;
  const first = path.split("/")[1];
  if (RESERVED_FIRST_SEGMENTS.has(first)) {
    return { error: `"${first}" is used by the rest of the site — pick another prefix or slug.` };
  }
  if (Object.values(PAGE_PATHS).includes(path)) {
    return { error: `${path} is already used by another page.` };
  }
  const others = await OutsidePage.find({ slug: { $ne: ownSlug || "" } }).lean();
  if (others.some((o) => toPlain(o).path === path || internalPath(o.slug) === path)) {
    return { error: `${path} is already used by another page.` };
  }
  return { path };
}

// Public-safe read used by the dashboard dropdown and the page route.
export async function listOutsidePages() {
  try {
    await connectDB();
    const docs = await OutsidePage.find({}).sort({ createdAt: 1 }).lean();
    return docs.map(toPlain);
  } catch (error) {
    console.error("List outside pages failed:", error);
    return [];
  }
}

export async function getOutsidePageBySlug(slug) {
  try {
    await connectDB();
    const doc = await OutsidePage.findOne({ slug }).lean();
    return doc ? toPlain(doc) : null;
  } catch (error) {
    console.error("Get outside page failed:", error);
    return null;
  }
}

export async function createOutsidePage({ label, slug, prefix = "en-uk" }) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  const name = String(label ?? "").trim().slice(0, 100);
  const cleanSlug = String(slug ?? "").trim().toLowerCase();
  if (!name) return { success: false, message: "Give the page a name." };
  if (!cleanSlug || cleanSlug.length > 80 || !isValidSlug(cleanSlug)) {
    return {
      success: false,
      message:
        "URL slug can only use lowercase letters, numbers and single hyphens (e.g. digital-marketing-services-in-canada).",
    };
  }
  if (RESERVED_SLUGS.includes(cleanSlug)) {
    return { success: false, message: `"${cleanSlug}" is already used — pick another slug.` };
  }

  try {
    await connectDB();
    const pageKey = `${OUTSIDE_PAGE_PREFIX}${cleanSlug}`;
    const exists = await OutsidePage.findOne({ $or: [{ slug: cleanSlug }, { pageKey }] }).lean();
    if (exists) {
      return { success: false, message: `A page with the slug "${cleanSlug}" already exists.` };
    }
    const built = await buildPublicPath(prefix, cleanSlug, "");
    if (built.error) return { success: false, message: built.error };
    const doc = await OutsidePage.create({
      slug: cleanSlug,
      pageKey,
      label: name,
      path: built.path === internalPath(cleanSlug) ? "" : built.path,
    });
    revalidatePath("/", "layout");
    return { success: true, page: toPlain(doc) };
  } catch (error) {
    console.error("Create outside page failed:", error);
    return { success: false, message: "Failed to create the page." };
  }
}

// Changes the public URL (prefix + slug) of a dashboard-created page. The
// page's content and internal key stay put; proxy.js serves the new URL and
// 301s the old one to it.
export async function updateOutsidePageUrl({ pageKey, prefix, slug }) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    await connectDB();
    const doc = await OutsidePage.findOne({ pageKey });
    if (!doc) return { success: false, message: "Page not found." };
    const built = await buildPublicPath(prefix, slug, doc.slug);
    if (built.error) return { success: false, message: built.error };
    doc.path = built.path === internalPath(doc.slug) ? "" : built.path;
    await doc.save();
    revalidatePath("/", "layout");
    return { success: true, page: toPlain(doc) };
  } catch (error) {
    console.error("Update outside page URL failed:", error);
    return { success: false, message: "Failed to update the URL." };
  }
}

// Removes a dashboard-created page and its saved content. The built-in UK
// page can't be deleted (it isn't in this collection).
export async function deleteOutsidePage(pageKey) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    await connectDB();
    const doc = await OutsidePage.findOneAndDelete({ pageKey });
    if (!doc) return { success: false, message: "Page not found." };
    await PageContent.deleteOne({ pageKey });
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    console.error("Delete outside page failed:", error);
    return { success: false, message: "Failed to delete the page." };
  }
}
