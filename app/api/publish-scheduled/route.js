import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { publishDueScheduledPosts } from "@/actions/blogActions";

// Point a free external cron service (e.g. cron-job.org) at this URL every
// 5-15 minutes so scheduled posts go live at the exact time picked in the
// dashboard — no VPS/server cron required. Send the secret in a header
// (`Authorization: Bearer <CRON_SECRET>` or `x-cron-secret`) so it stays out
// of access logs. `?secret=` still works as a fallback for existing cron
// jobs, but it is logged in URLs — switch them to the header.
function secretMatches(given, expected) {
  if (!given || !expected) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function GET(request) {
  const auth = request.headers.get("authorization") || "";
  const given =
    (auth.startsWith("Bearer ") ? auth.slice(7).trim() : "") ||
    request.headers.get("x-cron-secret") ||
    request.nextUrl.searchParams.get("secret");

  if (!secretMatches(given, process.env.CRON_SECRET)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const result = await publishDueScheduledPosts();
  if (result?.publishedCount > 0) revalidatePath("/", "layout");
  return NextResponse.json(result);
}
