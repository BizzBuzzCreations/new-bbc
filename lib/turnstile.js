// Server side of Cloudflare Turnstile (the invisible "are you human" check on
// the enquiry forms). A form sends the one-time token the visitor's browser
// got from Cloudflare; this asks Cloudflare whether it is genuine.
//
// - No TURNSTILE_SECRET_KEY set  -> the check is off and every request passes
//   (so the site works exactly as before until the keys are added).
// - Secret set, token missing/invalid -> rejected.
// - Cloudflare itself unreachable -> allowed, so an outage on their side
//   never stops a real enquiry (the honeypot and rate limits still apply).
export const TURNSTILE_MESSAGE =
  "We couldn't confirm you're human. Please refresh the page and try again.";

export async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true, skipped: true };
  token = String(token || "");
  if (!token || token.length > 4096) return { ok: false };
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "unknown") body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(5000),
    });
    const data = await res.json();
    return { ok: data?.success === true };
  } catch (error) {
    console.error("Turnstile verification unreachable, allowing the request:", error?.message || error);
    return { ok: true, unreachable: true };
  }
}
