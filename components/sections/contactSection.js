"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check, Mail, MessageCircle, Paperclip, Phone } from "lucide-react";
import { sendMail } from "@/actions/serverActions";
import { markEnquired } from "@/lib/enquiryFlag";
import RichText from "@/components/ui/richText";
import AccentText from "@/components/brand/accentText";
import Breadcrumb from "@/components/brand/breadcrumb";
import Kicker from "@/components/brand/kicker";
import Clock from "@/components/brand/clock";
import { CONTACT, SERVICE_LINES } from "@/lib/siteNav";

const DEFAULT_STEPS = [
  { title: "Tell Us Your Challenge", description: "Share your goals, challenges, and what you want to achieve. We'll take the time to understand your business." },
  { title: "Get a Free Consultation", description: "Talk to our team about your goals, requirements, and priorities. We'll explore the right opportunities for your business." },
  { title: "Get a Clear Growth Roadmap", description: "Get a practical direction for your next steps, priorities, and opportunities. We'll help you move forward with confidence." },
];
const NEEDS = SERVICE_LINES.map((s) => s.short).concat(["Not sure yet"]);
const BUDGETS = ["Under ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+", "Let’s discuss"];
const TIMELINES = ["As soon as possible", "1–3 months", "3–6 months", "Just exploring"];
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// The contact section (rebuild) — /contact (as the page's H1) and /our-team.
// Left: heading, text, the "what happens next" steps, direct lines with the
// offices' local time. Right: the enquiry form — name, email, phone,
// company, what you need (several), budget, timeline, project description,
// optional attachment — checked as you go (errors under each field, focus
// to the first problem on submit), then a success panel. Sent through the
// same sendMail action as before: the extra answers are added to the
// message, so the email and the dashboard's Submissions show everything.
// Dashboard fields: contactHeroHeading, contactHeroParagraph,
// contactFormHeading, contactFormButtonText, contactSteps.
export default function ContactSection({ content, headingLevel = "h2" }) {
  const Heading = headingLevel;
  const Sub = headingLevel === "h1" ? "h2" : "h3";
  const heading = content?.contactHeroHeading || "Let’s Turn Your Digital Goals Into a Growth Plan";
  const paragraph =
    content?.contactHeroParagraph ||
    "You bring the goals. We bring the strategy, execution, and ongoing support. From the first idea to measurable results, our team handles the heavy lifting, so you can focus on growing your business.";
  const formHeading = content?.contactFormHeading || "Send Us a Message";
  const formButtonText = content?.contactFormButtonText || "Send Message";
  const steps = content?.contactSteps?.length > 0 ? content.contactSteps : DEFAULT_STEPS;

  const empty = { name: "", email: "", contact: "", company: "", message: "" };
  const [form, setForm] = useState(empty);
  const [needs, setNeeds] = useState([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | sent
  const [serverError, setServerError] = useState("");
  const [sentName, setSentName] = useState("");
  const formRef = useRef(null);

  const check = (f = form) => {
    const e = {};
    if (!f.name.trim()) e.name = "Please tell us your name.";
    if (!f.email.trim()) e.email = "We need an email to reply to.";
    else if (!EMAIL.test(f.email.trim())) e.email = "That email doesn’t look right — check for typos.";
    if (f.contact && f.contact.length !== 10) e.contact = "Phone numbers here are 10 digits (no country code).";
    if (f.message.trim().length < 10) e.message = "A sentence or two about the project, please (10+ characters).";
    return e;
  };
  const onChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === "contact") value = value.replace(/\D/g, "").slice(0, 10);
    const next = { ...form, [name]: value };
    setForm(next);
    if (errors[name]) setErrors((old) => ({ ...old, [name]: check(next)[name] }));
  };
  const onBlur = (e) => {
    const { name } = e.target;
    setErrors((old) => ({ ...old, [name]: check()[name] }));
  };
  const onFile = (e) => {
    const picked = e.target.files?.[0] || null;
    if (picked && picked.size > MAX_FILE_BYTES) {
      setErrors((old) => ({ ...old, file: "Attachments can be up to 4MB." }));
      e.target.value = "";
      setFile(null);
      return;
    }
    setErrors((old) => ({ ...old, file: undefined }));
    setFile(picked);
  };
  const readAsBase64 = (f) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
      reader.onerror = reject;
      reader.readAsDataURL(f);
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const found = check();
    setErrors(found);
    if (Object.keys(found).length) {
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setState("sending");
    let attachment;
    if (file) {
      try {
        attachment = { name: file.name, base64: await readAsBase64(file) };
      } catch {
        setState("idle");
        setErrors((old) => ({ ...old, file: "Couldn’t read that file — try another." }));
        return;
      }
    }
    const details = [
      form.company && `Company: ${form.company}`,
      needs.length && `Needs: ${needs.join(", ")}`,
      budget && `Budget: ${budget}`,
      timeline && `Timeline: ${timeline}`,
    ].filter(Boolean);
    const text = `${form.message.trim()}${details.length ? `\n\n— ${details.join("\n")}` : ""}`.slice(0, 5000);
    const subject = `Enquiry${needs.length ? `: ${needs.join(", ")}` : ""}${form.company ? ` — ${form.company}` : ""}`.slice(0, 200);
    const response = await sendMail({ name: form.name.trim(), email: form.email.trim(), subject, text, contact: form.contact, attachment });
    if (response?.success) {
      markEnquired(); // the consultation popup won't ask again
      setSentName(form.name.trim().split(/\s+/)[0]);
      setForm(empty);
      setNeeds([]);
      setBudget("");
      setTimeline("");
      setFile(null);
      setState("sent");
    } else {
      setState("idle");
      setServerError(response?.message || "Something went wrong. Please try again, or call or WhatsApp us.");
    }
  };

  const fieldCls = (name) =>
    `mt-1 w-full border-0 border-b bg-transparent px-0 py-3 text-lg text-white placeholder:text-white/35 focus:outline-none focus:ring-0 ${errors[name] ? "border-[#ff8a7a]" : "border-white/20 focus:border-buzz"}`;
  const err = (name) => errors[name] && (
    <p id={`${name}-error`} className="mt-2 text-sm text-[#ff8a7a]">
      {errors[name]}
    </p>
  );
  const input = (name, label, props = {}) => (
    <label className="block">
      <span className="kicker text-fog">
        {label}
        {props.required && <span aria-hidden="true" className="text-buzz"> *</span>}
      </span>
      <input
        name={name}
        value={form[name]}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={errors[name] ? "true" : undefined}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className={fieldCls(name)}
        {...props}
      />
      {err(name)}
    </label>
  );
  const chips = (legend, options, selected, toggle, multi) => (
    <fieldset>
      <legend className="kicker text-fog">
        {legend} {multi && <span className="normal-case tracking-normal text-white/40">(pick any)</span>}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = multi ? selected.includes(o) : selected === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(o)}
              className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-sm transition-colors duration-200 ${
                on ? "border-buzz bg-buzz text-buzz-ink" : "border-white/20 text-white/80 hover:border-white/60 hover:text-white"
              }`}
            >
              {on && <Check aria-hidden="true" size={14} strokeWidth={3} />}
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );

  return (
    <section className={`grain relative isolate overflow-hidden bg-ink text-white ${headingLevel === "h1" ? "pt-28 md:pt-36" : "border-t border-white/10 pt-24 md:pt-32"}`}>
      <div className="wrap grid gap-14 pb-24 md:pb-32 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          {headingLevel === "h1" ? <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} /> : <Kicker>Contact</Kicker>}
          <Heading className="font-display mt-10 text-balance text-[clamp(2.6rem,5.4vw,5.5rem)] leading-[0.93] md:mt-14">
            <AccentText text={heading} />
          </Heading>
          <RichText as="p" text={paragraph} className="mt-8 text-lg leading-relaxed text-fog" />

          <ol className="mt-12 border-t border-white/10">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-white/10 py-5">
                <span className="kicker pt-1 text-buzz">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <Sub className="text-lg font-medium">{s.title}</Sub>
                  <RichText as="p" text={s.description} className="mt-1 text-[0.9375rem] leading-relaxed text-fog" />
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a href={CONTACT.phoneIndia.href} className="group rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/30">
              <span className="kicker flex items-center justify-between text-fog">
                <span className="flex items-center gap-2"><Phone aria-hidden="true" size={13} /> India</span>
                <Clock tz="Asia/Kolkata" zone="IST" className="text-buzz" />
              </span>
              <span className="mt-2 block text-lg">{CONTACT.phoneIndia.display}</span>
            </a>
            <a href={CONTACT.phoneUk.href} className="group rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/30">
              <span className="kicker flex items-center justify-between text-fog">
                <span className="flex items-center gap-2"><Phone aria-hidden="true" size={13} /> United Kingdom</span>
                <Clock tz="Europe/London" zone="UK" className="text-buzz" />
              </span>
              <span className="mt-2 block text-lg">{CONTACT.phoneUk.display}</span>
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/30">
              <span className="kicker flex items-center gap-2 text-fog"><MessageCircle aria-hidden="true" size={13} /> WhatsApp</span>
              <span className="mt-2 block text-lg">Message us</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/30">
              <span className="kicker flex items-center gap-2 text-fog"><Mail aria-hidden="true" size={13} /> Email</span>
              <span className="mt-2 block break-all text-lg">{CONTACT.email}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="rounded-[20px] border border-white/10 bg-ink-2 p-6 md:p-10 lg:sticky lg:top-28">
            {state === "sent" ? (
              <div role="status" className="py-10 md:py-16">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-buzz text-buzz-ink">
                  <Check aria-hidden="true" size={26} strokeWidth={2.5} />
                </span>
                <p className="font-display mt-8 text-4xl leading-tight md:text-5xl">
                  Thanks{sentName ? `, ${sentName}` : ""} — it&rsquo;s with <span className="font-accent">us.</span>
                </p>
                <p className="mt-5 max-w-md text-lg text-fog">We reply within one working day with a first view of what we&rsquo;d do. Urgent? Call or WhatsApp us.</p>
                <button type="button" onClick={() => setState("idle")} className="mt-8 text-white underline decoration-white/30 underline-offset-4 hover:decoration-buzz">
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate>
                <Sub className="font-display text-3xl leading-tight md:text-4xl">
                  <AccentText text={formHeading} />
                </Sub>
                <p className="mt-2 text-sm text-fog">
                  Fields marked <span className="text-buzz">*</span> are required. We never share your details.
                </p>
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {input("name", "Your name", { type: "text", autoComplete: "name", placeholder: "Full name", required: true })}
                  {input("email", "Email", { type: "email", autoComplete: "email", placeholder: "you@company.com", required: true })}
                  {input("contact", "Phone (10 digits)", { type: "tel", inputMode: "numeric", autoComplete: "tel-national", placeholder: "Mobile number" })}
                  {input("company", "Company", { type: "text", autoComplete: "organization", placeholder: "Business name" })}
                </div>
                <div className="mt-10 space-y-8">
                  {chips("What do you need?", NEEDS, needs, (o) => setNeeds((n) => (n.includes(o) ? n.filter((x) => x !== o) : [...n, o])), true)}
                  <div className="grid gap-8 md:grid-cols-2">
                    {chips("Budget", BUDGETS, budget, (o) => setBudget(budget === o ? "" : o))}
                    {chips("Timeline", TIMELINES, timeline, (o) => setTimeline(timeline === o ? "" : o))}
                  </div>
                  <label className="block">
                    <span className="kicker text-fog">
                      About the project<span aria-hidden="true" className="text-buzz"> *</span>
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder="What are you selling, to whom, and what should change?"
                      aria-invalid={errors.message ? "true" : undefined}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`${fieldCls("message")} resize-y`}
                    />
                    {err("message")}
                  </label>
                  <div>
                    <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-fog transition-colors hover:text-white">
                      <Paperclip aria-hidden="true" size={16} />
                      <span>{file ? file.name : "Attach a brief (PDF, DOC, DOCX · up to 4MB)"}</span>
                      <input type="file" name="file" accept=".pdf,.doc,.docx" onChange={onFile} className="sr-only" />
                    </label>
                    {err("file")}
                  </div>
                </div>
                {serverError && (
                  <p role="alert" className="mt-8 rounded-xl border border-[#ff8a7a]/40 bg-[#ff8a7a]/10 px-4 py-3 text-sm text-white">
                    {serverError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="group mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-buzz text-base font-medium text-buzz-ink transition-colors hover:bg-[#ffe066] disabled:opacity-60 sm:w-auto sm:px-8"
                >
                  {state === "sending" ? "Sending…" : formButtonText}
                  <ArrowRight aria-hidden="true" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
