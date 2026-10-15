// Shared by the enquiry form (browser) and /api/bizzbee/lead (server), so both
// apply exactly the same rules. No server-only imports here.

// Format: sensible local part, a real-looking domain, letters-only TLD of 2+ chars.
const EMAIL_RE = /^[a-z0-9]+([._%+-][a-z0-9]+)*@([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,24}$/i;

// Placeholder-style addresses people type to get past a form.
const FAKE_LOCAL = /^(test\d*|testing|demo|sample|fake|dummy|abc\d*|abcd|xyz\d*|asdf\w*|qwerty\w*|temp\d*|noreply|no-reply|admin|user\d*|email|mail|none|na|no|nil|null|name|a+|x+)$/i;

// Typos of the big providers ("gmial.com") are almost always mistakes.
const TYPO_DOMAINS = new Set([
  "gmial.com", "gmai.com", "gmail.co", "gmail.cm", "gamil.com", "gmaill.com", "gmal.com", "gnail.com", "gmail.con",
  "yaho.com", "yahooo.com", "yahoo.con", "yhaoo.com", "hotmial.com", "hotmai.com", "hotmail.con", "outlok.com", "outloook.com", "outlook.con",
]);

export function emailProblem(raw) {
  const email = String(raw ?? "").trim().toLowerCase();
  if (!email) return "Please enter your email address.";
  if (email.length > 150 || !EMAIL_RE.test(email)) return "Please enter a valid email address, like name@example.com.";
  const [local, domain] = email.split("@");
  if (TYPO_DOMAINS.has(domain)) return "That email domain looks misspelled — please check it.";
  if (FAKE_LOCAL.test(local) || /^(.)\1{3,}$/.test(local.replace(/[^a-z0-9]/g, ""))) {
    return "Please enter your real email address — placeholder emails can't be accepted.";
  }
  return "";
}

// Phone is optional; when given it must be exactly 10 digits (digits only — no +, -, spaces or negatives).
export function phoneProblem(raw) {
  const phone = String(raw ?? "").trim();
  if (!phone) return "";
  if (!/^\d{10}$/.test(phone)) return "Phone number must be exactly 10 digits (numbers only), or leave it blank.";
  if (/^(\d)\1{9}$/.test(phone) || phone === "1234567890" || phone === "0123456789" || phone === "9876543210") {
    return "Please enter your real 10-digit phone number.";
  }
  return "";
}
