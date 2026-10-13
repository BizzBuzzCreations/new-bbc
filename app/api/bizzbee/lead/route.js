import dns from "node:dns/promises";
import { Resend } from "resend";
import connectDB from "@/db/connect";
import Submission from "@/models/submissions";
import { BIZZBEE, SERVICES_FOR_LEAD_FORM } from "@/lib/bizzbee/config";
import { cleanText } from "@/lib/bizzbee/sanitize";
import { checkRateLimit, clientIp, isSameOrigin } from "@/lib/bizzbee/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Enquiries from the BizzBee chat widget. They are stored in the same
// `Submission` collection as the Contact form (so they show up in the
// dashboard's Submissions tab, tagged "BizzBee chat enquiry") and a
// notification email goes to SITE_MAIL_RECIEVER via Resend. Success is only
// reported after the database write succeeds.

const json = (body, status = 200, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  });

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
const DISPOSABLE = new Set([
  "mailinator.com", "tempmail.com", "temp-mail.org", "10minutemail.com", "guerrillamail.com",
  "yopmail.com", "trashmail.com", "sharklasers.com", "getnada.com", "throwawaymail.com",
  "maildrop.cc", "fakeinbox.com", "dispostable.com", "mailnesia.com", "tempail.com",
  "test.com", "example.com",
]);

async function isGenuineEmail(email) {
  if (!EMAIL_RE.test(email) || email.includes("..")) return false;
  const domain = email.split("@")[1];
  if (DISPOSABLE.has(domain)) return false;
  try {
    if ((await dns.resolveMx(domain)).length > 0) return true;
  } catch (err) {
    // Only a definite "no such domain" rejects; a DNS hiccup shouldn't block a real visitor.
    if (err?.code !== "ENOTFOUND" && err?.code !== "ENODATA") return true;
  }
  try {
    return (await dns.resolve4(domain)).length > 0;
  } catch {
    return false;
  }
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const recentByEmail = new Map(); // email -> timestamp (duplicate guard)
const DUPLICATE_WINDOW_MS = 10 * 60_000;

export async function POST(request) {
  if (!isSameOrigin(request)) return json({ success: false, message: "Forbidden." }, 403);

  const limit = checkRateLimit(`lead:${clientIp(request)}`, [
    { windowMs: 3_600_000, max: BIZZBEE.leadPerHour },
  ]);
  if (!limit.ok) {
    return json(
      { success: false, message: "Too many requests. Please try again a little later." },
      429,
      { "Retry-After": String(limit.retryAfterSec) },
    );
  }

  const raw = await request.text();
  if (raw.length > 8 * 1024) return json({ success: false, message: "Request too large." }, 413);
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ success: false, message: "Invalid request." }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend success.
  if (body?.website) return json({ success: true, message: "Thanks!" });

  const name = cleanText(body?.name, 100);
  const email = cleanText(body?.email, 150).toLowerCase();
  const business = cleanText(body?.business, 120);
  const service = SERVICES_FOR_LEAD_FORM.includes(body?.service) ? body.service : "";
  const description = cleanText(body?.description, 1200);
  const preferred = ["Email", "Phone call", "WhatsApp"].includes(body?.preferred) ? body.preferred : "";
  const phoneDigits = String(body?.phone ?? "").replace(/[\s()+-]/g, "");

  if (name.length < 2) return json({ success: false, message: "Please enter your name." }, 400);
  if (!(await isGenuineEmail(email))) {
    return json({ success: false, message: "Please enter a valid email address." }, 400);
  }
  if (phoneDigits && !/^\d{7,15}$/.test(phoneDigits)) {
    return json({ success: false, message: "Phone number should be 7–15 digits (or leave it blank)." }, 400);
  }
  if (description.length < 10) {
    return json({ success: false, message: "Please add a short description of what you need." }, 400);
  }
  if (body?.consent !== true) {
    return json({ success: false, message: "Please accept the privacy consent to continue." }, 400);
  }

  const now = Date.now();
  if (now - (recentByEmail.get(email) || 0) < DUPLICATE_WINDOW_MS) {
    return json({
      success: true,
      duplicate: true,
      message: "We've already received your enquiry — the team will be in touch soon.",
    });
  }

  const subject = `BizzBee chat enquiry${service ? ` — ${service}` : ""}`;
  const message = [
    business && `Business: ${business}`,
    service && `Service of interest: ${service}`,
    preferred && `Preferred contact: ${preferred}`,
    `Project: ${description}`,
    "Source: BizzBee AI chat widget (consent to be contacted given).",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await connectDB();
    await Submission.create({
      name,
      email,
      subject,
      ...(phoneDigits && { phone: Number(phoneDigits) }),
      message,
    });
    recentByEmail.set(email, now);
  } catch (error) {
    console.error("BizzBee lead save failed:", error?.message || error);
    return json(
      { success: false, message: "We couldn't send your enquiry right now. Please try the Contact page or WhatsApp." },
      500,
    );
  }

  // Notification email — best effort; the enquiry is already safely stored.
  if (process.env.RESEND_API_KEY && process.env.SITE_MAIL_RECIEVER) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: "BizzBuzz Website <contact@bizzbuzzcreations.com>",
        to: process.env.SITE_MAIL_RECIEVER,
        replyTo: email,
        subject,
        html: `<div style="font-family:Arial,sans-serif;max-width:600px">
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> ${esc(email)}</p>
          ${phoneDigits ? `<p><strong>Phone:</strong> ${esc(phoneDigits)}</p>` : ""}
          <pre style="font-family:inherit;white-space:pre-wrap">${esc(message)}</pre>
        </div>`,
      });
      if (error) console.error("BizzBee lead email error:", error);
    } catch (error) {
      console.error("BizzBee lead email failed:", error?.message || error);
    }
  }

  return json({ success: true, message: "Thanks! Your enquiry has been sent — the team will get back to you soon." });
}
