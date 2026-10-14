import { CONTACT } from "./config";

// SERVER ONLY. Deterministic answers for "what's your email / number /
// WhatsApp / address / hours?" — the reply contains only the contact detail
// that was asked for, structured as a short list. Details come from the
// verified CONTACT config, never from free-text search.

const EMAIL = /\b(e-?mail|mail|gmail|mail id|email id)\b/;
const PHONE = /\b(phone|mobile|telephone|contact (no|number|num)|call (you|us|me)|number|numbers|calling)\b/;
const WHATSAPP = /\b(whats ?app|wa\.me)\b/;
const ADDRESS = /\b(address|location|located|office|offices|headquarters?|hq|where (are|is)|kahan)\b/;
const HOURS = /\b(hours|timing|timings|open|opening|schedule|working days|available)\b/;
const GENERAL = /\b(contact details|contact info|contact information|contact us|get in touch|reach (you|us|out)|how (can|do) i contact|contact)\b/;

// Words that mean the question is about something else.
const OTHER = /\b(call cent(er|re)|bpo|price|pricing|cost|seo|ads|job|jobs|career|opening|openings|vacanc\w*|blog|article|industry|industries|team|member|how many|total)\b/;

const line = {
  email: () => `- [${CONTACT.email}](mailto:${CONTACT.email})`,
  indiaPhone: () => `- **India:** [${CONTACT.phoneIndia}](tel:${CONTACT.phoneIndiaTel})`,
  ukPhone: () => `- **UK:** [${CONTACT.phoneUk}](tel:${CONTACT.phoneUkTel})`,
  whatsapp: () => `- [Chat on WhatsApp](${CONTACT.whatsappUrl}) — ${CONTACT.phoneIndia}`,
  hours: () => `- **Hours:** ${CONTACT.hours}`,
};

const OFFICES = [
  "- **Prayagraj (HQ):** 43/33, Tej Bahdur Sapru Rd, Agnipath Colony, Civil Lines, Prayagraj, UP 211001",
  "- **Kanpur:** Plot no. 218, Harjindar Nagar, Lal Bangla, J K Puri, Kanpur, UP 208007",
  "- **London, UK:** 3 Thornham St, London SE10 9SA",
];

// "How many branches / offices do you have?" and "where are you located?"
const BRANCH = /\b(branch|branches|office|offices|head ?office|headquarters?|hq|centers?|centres?|locations?|cities|city|presence|located|based|address|addresses|kahan|shakha)\b/;

function branchAnswer(q) {
  if (!BRANCH.test(q)) return null;
  // Questions about something else that merely mention "location" (e.g. a service) are left alone.
  if (/\b(seo|ads|job|jobs|career|price|pricing|cost|blog|industry|industries|team|member|local seo|google business)\b/.test(q)) return null;
  const count = /\b(how many|kitne|number of|total|count)\b/.test(q);
  const head = count || /\b(branch|branches|offices|locations|cities|centers|centres)\b/.test(q)
    ? "We have **3 branches** of BizzBuzz Creations:"
    : "BizzBuzz Creations operates from **3 locations**:";
  return [
    head,
    "",
    "- **Prayagraj (HQ):** 43/33, Tej Bahdur Sapru Rd, Agnipath Colony, Civil Lines, Prayagraj, UP 211001",
    "- **Kanpur:** Plot no. 218, Harjindar Nagar, Lal Bangla, J K Puri, Kanpur, UP 208007",
    "- **London, UK:** 3 Thornham St, London SE10 9SA",
    "",
    "[Open the Contact page](/contact)",
  ].join("\n");
}

export function contactAnswer(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = last.toLowerCase().replace(/[?!.,]/g, " ").replace(/\s+/g, " ").trim();
  if (!q || q.split(" ").length > 14) return null;

  const branches = branchAnswer(q);
  if (branches) return branches;

  if (OTHER.test(q)) return null;

  const wantsEmail = EMAIL.test(q);
  const wantsPhone = PHONE.test(q);
  const wantsWhatsapp = WHATSAPP.test(q);
  const wantsAddress = ADDRESS.test(q);
  const wantsHours = HOURS.test(q) && /\b(hours|timing|timings|working|open|opening|schedule|available)\b/.test(q);
  const wantsGeneral = GENERAL.test(q);

  // "number" alone is too vague (e.g. "number of projects") — require a contact cue.
  const phoneCue = /\b(phone|mobile|telephone|call|calling|contact|whatsapp|reach|your|company|bizzbuzz|helpline|support)\b/.test(q);
  // "whatsapp number" means the WhatsApp contact only, not the phone lines.
  const phone = wantsPhone && phoneCue && !(wantsWhatsapp && !/(phone|mobile|telephone|call|calling)/.test(q));

  if (!(wantsEmail || phone || wantsWhatsapp || wantsAddress || wantsHours || wantsGeneral)) return null;

  const out = [];
  const add = (title, lines) => out.push(`**${title}**`, ...lines, "");

  if (wantsEmail) add("Email", [line.email()]);
  if (phone) {
    add("Phone", [line.indiaPhone(), line.ukPhone(), line.hours()]);
  } else if (wantsHours) {
    add("Working hours", [line.hours()]);
  }
  if (wantsWhatsapp) add("WhatsApp", [line.whatsapp()]);
  if (wantsAddress) add("Our offices", OFFICES);

  if (!out.length) {
    // General "how do I contact you?" — everything, in one structured block.
    add("Phone", [line.indiaPhone(), line.ukPhone()]);
    add("Email", [line.email()]);
    add("WhatsApp", [line.whatsapp()]);
    add("Working hours", [line.hours()]);
    out.push("[Open the Contact page](/contact)");
  }
  return out.join("\n").trim();
}
