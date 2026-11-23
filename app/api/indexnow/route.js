import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { buildSitemapEntries } from "@/lib/sitemapBuilder";
import { submitToIndexNow, indexNowEnabled, INDEXNOW_KEY } from "@/lib/indexNow";

// One-time (or occasional) "tell Bing about every page": sends every URL in
// the sitemap to IndexNow. Same secret as /api/publish-scheduled, sent in a
// header so it stays out of logs:
//   curl -H "Authorization: Bearer <CRON_SECRET>" https://bizzbuzzcreations.com/api/indexnow
// Add ?dry=1 to only count the URLs without sending anything.
export const dynamic = "force-dynamic";

function secretMatches(given, expected) {
  if (!given || !expected) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function GET(request) {
  const auth = request.headers.get("authorization") || "";
  const given = (auth.startsWith("Bearer ") ? auth.slice(7).trim() : "") || request.headers.get("x-cron-secret");
  if (!secretMatches(given, process.env.CRON_SECRET)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const entries = await buildSitemapEntries();
  const urls = entries.map((e) => e.url).filter(Boolean);
  if (request.nextUrl.searchParams.get("dry") === "1") {
    return NextResponse.json({ success: true, dryRun: true, enabled: indexNowEnabled(), count: urls.length, keyFile: `/${INDEXNOW_KEY}.txt` });
  }
  const result = await submitToIndexNow(urls);
  return NextResponse.json({ success: result.sent, ...result });
}
