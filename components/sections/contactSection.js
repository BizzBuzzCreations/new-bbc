"use client";

import { useState } from "react";
import { sendMail } from "@/actions/serverActions";
import { toast, Bounce } from "react-toastify";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, Mail, Paperclip } from "lucide-react";
import RichText from "@/components/ui/richText";
import { AccentTitle } from "@/components/detail/detailHero";
import { markEnquired } from "@/lib/enquiryFlag";

const DEFAULT_STEPS = [
  {
    title: "Tell Us Your Challenge",
    description:
      "Share your goals, challenges, and what you want to achieve. We'll take the time to understand your business.",
  },
  {
    title: "Get a Free Consultation",
    description:
      "Talk to our team about your goals, requirements, and priorities. We'll explore the right opportunities for your business.",
  },
  {
    title: "Get a Clear Growth Roadmap",
    description:
      "Get a practical direction for your next steps, priorities, and opportunities. We'll help you move forward with confidence.",
  },
];

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Bounce,
};

const MAX_FILE_BYTES = 4 * 1024 * 1024;

const inputClasses =
  "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition focus:border-[#40A2D8] md:text-sm";
const labelClasses = "mb-1.5 block text-sm text-white/80";

// Redesign (dark, like the rest of the site): on the left the heading (a
// breadcrumb above it on /contact), the text, the three steps as a
// numbered thin-line list and the direct lines (call / WhatsApp / email);
// on the right the form on a dark card. Same fields, checks and enquiry
// handling as before (sendMail; a successful enquiry also stops the
// consultation popup).
export default function ContactSection({ content, headingLevel = "h2" }) {
  const Heading = headingLevel;
  // Sub-headings sit one level below whichever heading the section uses.
  const SubHeading = headingLevel === "h1" ? "h2" : "h3";
  const heading = content?.contactHeroHeading || "Let’s Turn Your Digital Goals Into a Growth Plan";
  const paragraph =
    content?.contactHeroParagraph ||
    "You bring the goals. We bring the strategy, execution, and ongoing support. From the first idea to measurable results, our team handles the heavy lifting, so you can focus on growing your business.";
  const formHeading = content?.contactFormHeading || "Send Us a Message";
  const formButtonText = content?.contactFormButtonText || "Send Message";
  const steps = content?.contactSteps?.length > 0 ? content.contactSteps : DEFAULT_STEPS;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    contact: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const fileName = file?.name || "";
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    // Phone: digits only, max 10 (no letters, "-", "+", spaces).
    if (name === "contact") value = value.replace(/\D/g, "").slice(0, 10);
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFile = (e) => {
    const picked = e.target.files?.[0] || null;
    if (picked && picked.size > MAX_FILE_BYTES) {
      toast.error("Attachment must be 4MB or smaller.", toastOptions);
      e.target.value = "";
      setFile(null);
      return;
    }
    setFile(picked);
  };

  // File -> base64 (without the data: prefix) for the server action.
  const readAsBase64 = (f) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
      reader.onerror = reject;
      reader.readAsDataURL(f);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    let attachment;
    if (file) {
      try {
        attachment = { name: file.name, base64: await readAsBase64(file) };
      } catch {
        setSubmitting(false);
        toast.error("Couldn't read the attached file.", toastOptions);
        return;
      }
    }

    const response = await sendMail({
      name: form.name,
      email: form.email,
      subject: form.subject,
      text: form.message,
      contact: form.contact,
      attachment,
    });

    setSubmitting(false);

    if (response?.success) {
      markEnquired(); // the consultation popup won't ask again
      toast.success(response.message, toastOptions);
      setForm({ name: "", email: "", subject: "", contact: "", message: "" });
      setFile(null);
    } else {
      toast.error(response?.message || "Something went wrong.", toastOptions);
    }
  };

  const field = (id, label, input) => (
    <div>
      <label className={labelClasses} htmlFor={id}>{label}</label>
      {input}
    </div>
  );

  return (
    <section id="contact-form" className="scroll-mt-20 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-8 pb-16 md:px-10 md:pt-14 md:pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          {headingLevel === "h1" && (
            <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                <li>
                  <Link href="/" className="text-[#40A2D8] hover:text-white">Home</Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>
                <li aria-current="page" className="text-white/80">Contact</li>
              </ol>
            </nav>
          )}
          <Heading className="font-display text-[2.3rem] leading-[1.06] sm:text-5xl">
            <AccentTitle title={heading} />
          </Heading>
          <RichText as="p" text={paragraph} className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg" />

          <ol className="mt-10 border-t border-white/10">
            {steps.map(({ title, description }, i) => (
              <li key={i} className="flex gap-5 border-b border-white/10 py-5">
                <span aria-hidden="true" className="font-display w-8 shrink-0 text-2xl text-[#40A2D8]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <SubHeading className="text-base font-medium text-white">{title}</SubHeading>
                  <RichText as="p" text={description} className="mt-1.5 text-sm leading-relaxed text-white/65" />
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="w-full text-sm text-white/60">or reach us directly:</span>
            <a href="tel:+918115585285" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-white hover:bg-white hover:text-black">
              <Phone size={16} aria-hidden="true" /> +91 81155 85285
            </a>
            <a href="https://wa.me/918115585285" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-black">
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp
            </a>
            <a href="mailto:info@bizzbuzzcreations.com" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-white hover:bg-white hover:text-black">
              <Mail size={16} aria-hidden="true" /> info@bizzbuzzcreations.com
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0b0e16] p-6 sm:p-8 lg:p-10">
          <SubHeading className="font-display text-2xl text-white">{formHeading}</SubHeading>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {field("name", "Full Name", (
                <input id="name" name="name" autoComplete="name" value={form.name} onChange={handleChange} className={inputClasses} placeholder="Your name" required />
              ))}
              {field("email", "Email Address", (
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*\.[a-zA-Z]{2,}"
                  title="Enter a valid email address, e.g. name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="your@email.com"
                  required
                />
              ))}
            </div>
            {field("subject", "Subject", (
              <input id="subject" name="subject" value={form.subject} onChange={handleChange} className={inputClasses} placeholder="What is this regarding?" required />
            ))}
            {field("contact", "Contact Number", (
              <input
                id="contact"
                name="contact"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                title="Enter a 10-digit mobile number"
                value={form.contact}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your contact number"
                required
              />
            ))}
            {field("message", "Message", (
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." required />
            ))}

            {/* sr-only, not hidden: the input stays reachable by keyboard
                (the label shows the focus ring) */}
            <div>
              <label
                htmlFor="file"
                className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-white/20 px-4 py-3 text-sm text-white/60 transition-colors hover:border-white/40 has-[+input:focus-visible]:border-[#40A2D8]"
              >
                <span className="truncate">{fileName || "Attach PDF/Doc File (optional)"}</span>
                <Paperclip size={16} aria-hidden="true" className="shrink-0" />
              </label>
              <input id="file" type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="sr-only" />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#0B60B0] bg-[#0B60B0] px-6 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:border-[#0d70cf] hover:bg-[#0d70cf] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] disabled:opacity-60"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current opacity-80 transition-transform duration-200 group-hover:scale-[1.7]" />
              {submitting ? "Sending…" : formButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
