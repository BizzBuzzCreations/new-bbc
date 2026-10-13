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

export function clientIp(request) {
  const fwd = request.headers.get("x-forwarded-for");
  const ip = (fwd ? fwd.split(",")[0] : request.headers.get("x-real-ip")) || "unknown";
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
