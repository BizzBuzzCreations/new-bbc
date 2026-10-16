// Small in-memory sliding-window limiter. The site runs as one long-lived
// Node process (server.js), so a process-local Map is enough. If this is
// ever deployed to several instances / serverless, swap the store for
// Redis (same function signature).
const buckets = new Map();
let lastSweep = 0;

function sweep(now) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [key, hits] of buckets) {
    if (!hits.length || now - hits[hits.length - 1] > 3_600_000) buckets.delete(key);
  }
}

// Returns { ok: true } or { ok: false, retryAfterSec }.
export function checkRateLimit(key, rules) {
  const now = Date.now();
  sweep(now);
  const hits = (buckets.get(key) || []).filter((t) => now - t < 3_600_000);

  for (const { windowMs, max } of rules) {
    const inWindow = hits.filter((t) => now - t < windowMs);
    if (inWindow.length >= max) {
      const retryAfterSec = Math.max(1, Math.ceil((inWindow[0] + windowMs - now) / 1000));
      buckets.set(key, hits);
      return { ok: false, retryAfterSec };
    }
  }
  hits.push(now);
  buckets.set(key, hits);
  return { ok: true };
}

// The client can put anything in X-Forwarded-For, but each proxy in front of
// the app APPENDS the address it saw. So the entry counted from the right is
// the one our own proxy wrote and can be trusted; the left-most one is
// attacker-controlled. TRUSTED_PROXY_HOPS = how many proxies sit in front of
// the app (default 1: e.g. nginx; use 2 for Cloudflare + nginx).
export function clientIp(request) {
  const hops = Math.max(1, Number(process.env.TRUSTED_PROXY_HOPS) || 1);
  const fwd = request.headers.get("x-forwarded-for");
  const parts = fwd ? fwd.split(",").map((p) => p.trim()).filter(Boolean) : [];
  const ip =
    (parts.length ? parts[Math.max(0, parts.length - hops)] : request.headers.get("x-real-ip")) ||
    "unknown";
  return ip.trim().slice(0, 64);
}

// Same-origin check for browser POSTs. Requests with no Origin header
// (curl, server-to-server) are allowed through to the rate limiter only.
export function isSameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
