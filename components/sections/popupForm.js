"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, Phone, MessageCircle } from "lucide-react";
import { sendMail } from "@/actions/serverActions";
import { toast, Bounce } from "react-toastify";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { markEnquired, markPopupDismissed, markPopupShown, popupAllowed } from "@/lib/enquiryFlag";

// The real homepage and the Outside Location page both render this
// component (see their own page.js files). Module-level so its reference
// stays stable across renders.
const POPUP_PAGES = ["/", "/en-uk/digital-marketing-services-in-uk"];
const OPEN_AFTER_MS = 10000;

// Consultation popup. Opens 10 seconds after the page loads — at most once
// per session, not again for 7 days after it's closed, and never after a
// successful enquiry from any form on the site (lib/enquiryFlag.js). Removing the "popup" section in the dashboard
// turns it off completely (the page doesn't render it).
export default function ConsultationPopup({ content }) {
  const headerTitle = content?.popupHeaderTitle || "Book Your Consultation Now";
  const title = content?.popupTitle || "BizzBuzz Creations";
  const tagline = content?.popupTagline || "Innovate and Integrate Everyday";

  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const returnFocusRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
  });

  const pathname = usePathname();

  useEffect(() => {
    // Trailing slash trimmed so "/en-uk/…/" still matches.
    const path = pathname === "/" ? "/" : pathname?.replace(/\/+$/, "");
    if (!POPUP_PAGES.includes(path) || !popupAllowed()) return;

    // Not while the visitor is busy: typing in a form field or chatting
    // with BizzBee — it looks again every 5 seconds until they're not.
    const busy = () =>
      document.activeElement?.matches?.("input, textarea, select") ||
      !!document.querySelector('[aria-label="BizzBee AI website assistant"]')?.checkVisibility?.();
    let timer;
    const tryOpen = () => {
      if (busy()) {
        timer = window.setTimeout(tryOpen, 5000);
        return;
      }
      if (!popupAllowed()) return;
      markPopupShown();
      returnFocusRef.current = document.activeElement;
      setOpen(true);
    };
    timer = window.setTimeout(tryOpen, OPEN_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const close = useCallback(({ dismissed = true } = {}) => {
    setOpen(false);
    if (dismissed) markPopupDismissed();
    // Back to wherever the visitor was before the popup took focus.
    const el = returnFocusRef.current;
    if (el && typeof el.focus === "function" && document.contains(el)) el.focus({ preventScroll: true });
  }, []);

  // While open: focus the first field, keep Tab inside the dialog, Esc closes.
  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus({ preventScroll: true });
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = [...dialogRef.current.querySelectorAll("a[href], button, input, textarea, select")].filter(
        (el) => !el.disabled && el.getClientRects().length > 0,
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Basic RFC 5322-ish email check — good enough to reject typos and
  // obviously-invalid input without being overly strict about edge cases.
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      // Strip everything but digits as the user types — this alone rules
      // out the minus sign, decimal point, and "e" that a native
      // type="number" field would otherwise still accept, and caps
      // length at 10 so a valid number can never grow past that.
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, contact: digitsOnly });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.contact.length !== 10) {
      toast.error("Please enter a valid 10 digit mobile number.", {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
      return;
    }

    if (!EMAIL_REGEX.test(form.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
      return;
    }

    const response = await sendMail({
      name: form.name,
      email: form.email,
      subject: "Request for consultancy",
      text: "Want to start a project",
      contact: form.contact,
    });

    if (response?.success) {
      // Mail still sends as normal — the "Message sent!" toast itself is
      // what's being removed here, per request. The form just quietly
      // resets and the popup closes instead of announcing success.
      markEnquired();
      setForm({ name: "", contact: "", email: "" });
      close({ dismissed: false });
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
    }
  };

  return (
    // `inert` while closed: the faded-out dialog stays in the DOM for the
    // transition but can't be tabbed into or read out.
    <div
      inert={!open}
      className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-500
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
    >
      {/* Overlay — clicking it closes the popup */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => close()} aria-hidden="true"></div>

      {/* Popup */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={headerTitle}
        className="relative z-10 mx-4 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[20px] border border-white/10 bg-ink-2 text-white shadow-2xl"
      >
        <button
          type="button"
          onClick={() => close()}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="grid md:grid-cols-2">
          {/* left: who we are (hidden on phones to keep the form first) */}
          <div className="relative hidden overflow-hidden border-r border-white/10 p-10 md:block">
            <p className="kicker text-buzz">[—] {title}</p>
            <h2 id="consultation-popup-title" className="font-display mt-6 text-5xl leading-[0.95]">
              {headerTitle}
            </h2>
            <p className="mt-5 text-fog">{tagline}</p>
            <p className="kicker mt-10 text-fog">Certified &amp; verified</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                ["/CDL.png", "Google Partner"],
                ["/clutch.png", "Clutch"],
                ["/GA.png", "Google Analytics"],
                ["/iso.png", "ISO"],
              ].map(([src, alt]) => (
                <li key={alt} className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                  <Image src={src} width={40} height={40} alt={alt} className="h-9 w-9 object-contain" />
                </li>
              ))}
            </ul>
          </div>

          {/* right: the form */}
          <div className="p-6 pt-16 md:p-10">
            <p className="font-display text-3xl leading-tight md:hidden">{headerTitle}</p>
            <form onSubmit={handleSubmit} data-bizzbee-avoid className="mt-4 space-y-6 md:mt-0">
              <label className="block">
                <span className="kicker text-fog">Your name</span>
                <input ref={firstFieldRef} name="name" type="text" autoComplete="name" placeholder="Full name" value={form.name} onChange={handleChange} className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-base text-white placeholder:text-white/40 focus:border-buzz focus:outline-none focus:ring-0" required />
              </label>
              <label className="block">
                <span className="kicker text-fog">Mobile number (10 digits)</span>
                <input
                  name="contact"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  autoComplete="tel-national"
                  placeholder="10-digit mobile"
                  value={form.contact}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    // keep the minus/plus/decimal/exponent keys from flashing into the field
                    if (["-", "+", ".", "e", "E"].includes(e.key)) e.preventDefault();
                  }}
                  className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-base text-white placeholder:text-white/40 focus:border-buzz focus:outline-none focus:ring-0"
                  title="Enter a valid 10 digit mobile number"
                  required
                />
              </label>
              <label className="block">
                <span className="kicker text-fog">Email</span>
                <input name="email" type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={handleChange} className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-base text-white placeholder:text-white/40 focus:border-buzz focus:outline-none focus:ring-0" title="Enter a valid email address" required />
              </label>
              <button type="submit" className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-buzz font-medium text-buzz-ink transition-colors hover:bg-[#ffe066]">
                Book a free consultation
              </button>
            </form>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <a href="tel:+918115585285" className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 transition-colors hover:bg-white hover:text-ink">
                <Phone size={16} aria-hidden="true" /> Call now
              </a>
              <a href="https://wa.me/918115585285" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 transition-colors hover:bg-white hover:text-ink">
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
