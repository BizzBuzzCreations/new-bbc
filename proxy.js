import { NextResponse } from "next/server";
import { normalizePath } from "@/lib/seo";

// The rules live in MongoDB, so the code that reads them (mongoose) is loaded
// on first use instead of being imported at the top of this file. That keeps
// the database driver out of the proxy's own bundle: a host that packages the
// proxy as an edge-style function (Netlify does) otherwise loads the whole
// MongoDB driver while the function starts, and its build fails with
// "Failed to compile CJS module … mongodb" / "Maximum call stack size exceeded".
// Where the driver cannot be loaded the rules are simply empty and every
// request passes through, exactly as when MongoDB is unreachable. On the
// normal Node server this is the same code, just loaded on the first request.
const NO_RULES = { redirects: {}, slugRedirects: {}, rewrites: {} };
let loader = null;
async function getRules() {
  loader ??= import("@/lib/routingRules")
    .then((m) => m.getRoutingRules)
    .catch((error) => {
      console.error("Routing rules unavailable:", error?.message || error);
      return null;
    });
  const get = await loader;
  if (!get) return NO_RULES;
  try {
    return (await get()) || NO_RULES;
  } catch (error) {
    console.error("Routing rules failed:", error?.message || error);
    return NO_RULES;
  }
}

// Runs before every page request to apply what the dashboard saves:
//   1. Redirect Manager — enabled 301 redirects (old URL -> new URL)
//   2. URL Slug — a page whose slug was changed 301s from its old URL
//      to the new one, and the new URL is served by the original page
// Anything else passes straight through. If MongoDB is unreachable the
// rules come back empty and every request just passes through.
export async function proxy(request) {
  const { pathname, search } = request.nextUrl;
  const path = normalizePath(pathname);
  const rules = await getRules();

  const redirectTo = rules.redirects[path] || rules.slugRedirects[path];
  if (redirectTo) {
    const target = /^https?:\/\//i.test(redirectTo)
      ? new URL(redirectTo)
      : new URL(redirectTo, request.url);
    if (!target.search) target.search = search;
    // Never redirect a URL onto itself.
    if (target.origin !== request.nextUrl.origin || target.pathname !== pathname) {
      return NextResponse.redirect(target, 301);
    }
  }

  const rewriteTo = rules.rewrites[path];
  if (rewriteTo) {
    return NextResponse.rewrite(new URL(rewriteTo + search, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, the dashboard, API routes and anything with a
  // file extension (images, scripts, robots.txt, sitemap.xml, ...).
  // Double backslash: in a plain JS string "\." collapses to "." and the
  // pattern would then exclude every path.
  matcher: ["/((?!_next/|admin|api/|.*\\..*).*)"],
};
