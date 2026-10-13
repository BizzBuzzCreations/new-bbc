"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SERVICES_FOR_LEAD_FORM } from "@/lib/bizzbee/config";

const field =
  "w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#40A2D8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8]/60";
const label = "mb-1 block text-xs font-semibold text-white/80";

// Enquiry form shown inside the chat. Posts to /api/bizzbee/lead (our own
// backend) — nothing typed here is sent to the AI provider. "Success" is
// only shown after the server confirms the enquiry was stored.
export default function BizzBeeLeadForm({ onDone, onCancel, defaultService = "" }) {
  const uid = useId();
  const [values, setValues] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: defaultService,
    description: "",
    preferred: "",
    consent: false,
    website: "", // honeypot — hidden from people
  });
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState("");
  const [doneMessage, setDoneMessage] = useState("");

  const set = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setError("");

    // Client-side checks (the server repeats all of them).
    if (values.name.trim().length < 2) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) return setError("Please enter a valid email address.");
    const phone = values.phone.replace(/[\s()+-]/g, "");
    if (phone && !/^\d{7,15}$/.test(phone)) return setError("Phone number should be 7–15 digits, or leave it blank.");
    if (values.description.trim().length < 10) return setError("Please add a short description of what you need.");
    if (!values.consent) return setError("Please accept the privacy consent to continue.");

    setStatus("sending");
    try {
      const res = await fetch("/api/bizzbee/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setDoneMessage(data.message || "Thanks! Your enquiry has been sent.");
        setStatus("done");
        onDone?.(data.message);
      } else {
        setError(data.message || "Something went wrong. Please try again or use the Contact page.");
        setStatus("idle");
      }
    } catch {
      setError("Network problem — please check your connection and try again.");
      setStatus("idle");
    }
  };

  if (status === "done") {
    return (
      <div role="status" className="flex items-start gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-white">
        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
        <p>{doneMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-3 rounded-xl border border-white/15 bg-black/40 p-3">
      <p className="text-sm font-semibold text-white">Share your details and the team will get back to you</p>
      <p className="text-xs text-white/60">
        Name, email and a short description are required. Everything else is optional. These details go to the
        BizzBuzz team only — not to the AI.
      </p>

      <div>
        <label htmlFor={`${uid}-name`} className={label}>Name *</label>
        <input id={`${uid}-name`} className={field} value={values.name} onChange={set("name")} maxLength={100} autoComplete="name" required />
      </div>
      <div>
        <label htmlFor={`${uid}-business`} className={label}>Business name</label>
        <input id={`${uid}-business`} className={field} value={values.business} onChange={set("business")} maxLength={120} autoComplete="organization" />
      </div>
      <div>
        <label htmlFor={`${uid}-email`} className={label}>Email *</label>
        <input id={`${uid}-email`} type="email" className={field} value={values.email} onChange={set("email")} maxLength={150} autoComplete="email" required />
      </div>
      <div>
        <label htmlFor={`${uid}-phone`} className={label}>Phone (optional)</label>
        <input id={`${uid}-phone`} type="tel" inputMode="tel" className={field} value={values.phone} onChange={set("phone")} maxLength={20} autoComplete="tel" />
      </div>
      <div>
        <label htmlFor={`${uid}-service`} className={label}>Service of interest</label>
        <select id={`${uid}-service`} className={field} value={values.service} onChange={set("service")}>
          <option value="" className="text-black">Select…</option>
          {SERVICES_FOR_LEAD_FORM.map((s) => (
            <option key={s} value={s} className="text-black">{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${uid}-desc`} className={label}>Tell us briefly what you need *</label>
        <textarea id={`${uid}-desc`} rows={3} className={`${field} resize-none`} value={values.description} onChange={set("description")} maxLength={1200} required />
      </div>
      <div>
        <label htmlFor={`${uid}-pref`} className={label}>Preferred contact method</label>
        <select id={`${uid}-pref`} className={field} value={values.preferred} onChange={set("preferred")}>
          <option value="" className="text-black">No preference</option>
          <option className="text-black">Email</option>
          <option className="text-black">Phone call</option>
          <option className="text-black">WhatsApp</option>
        </select>
      </div>

      {/* Honeypot: off-screen, skipped by keyboards and screen readers. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${uid}-web`}>Website</label>
        <input id={`${uid}-web`} tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

      <label className="flex items-start gap-2 text-xs text-white/80">
        <input type="checkbox" checked={values.consent} onChange={set("consent")} className="mt-0.5 h-4 w-4 shrink-0 accent-[#40A2D8]" />
        <span>
          I agree that BizzBuzz Creations may use these details to contact me about my enquiry, as described in the{" "}
          <Link href="/privacy-policy" target="_blank" className="font-semibold text-[#6cc3ee] underline">Privacy Policy</Link>.
        </span>
      </label>

      {error && <p role="alert" className="text-xs font-medium text-red-300">{error}</p>}

      <div className="flex items-center gap-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-[#0B60B0] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0d70cf] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8] disabled:opacity-60"
        >
          {status === "sending" && <Loader2 size={14} className="animate-spin" aria-hidden="true" />}
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full px-3 py-2 text-sm text-white/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
