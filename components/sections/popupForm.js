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
const SCROLL_TRIGGER = 0.6;

// Consultation popup. No timer: it opens once the visitor has scrolled 60%
// of the page, or (desktop) when the mouse leaves through the top of the
// window. At most once per session, not again for 7 days after it's
// closed, and never after a successful enquiry from any form on the site
// (lib/enquiryFlag.js). Removing the "popup" section in the dashboard
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

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= SCROLL_TRIGGER) show();
    };
    // Exit intent: only for a real mouse, leaving through the top edge.
    const onMouseOut = (e) => {
      if (!e.relatedTarget && e.clientY <= 0) show();
    };
    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
    // Not while the visitor is busy: typing in a form field (the closing
    // CTA box sits past the trigger point) or chatting with BizzBee. It
    // simply tries again on a later scroll.
    const busy = () =>
      document.activeElement?.matches?.("input, textarea, select") ||
      !!document.querySelector('[aria-label="BizzBee AI website assistant"]')?.checkVisibility?.();
    function show() {
      if (busy()) return;
      cleanup();
      if (!popupAllowed()) return;
      markPopupShown();
      returnFocusRef.current = document.activeElement;
      setOpen(true);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    if (window.matchMedia("(pointer: fine)").matches) document.addEventListener("mouseout", onMouseOut);
    // The visitor may already be past the trigger before this runs (a jump
    // link, a restored scroll position, or a scroll before hydration).
    onScroll();
    return cleanup;
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => close()} aria-hidden="true"></div>

      {/* Popup */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-popup-title"
        className="relative mx-5 z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl"
      >
        {/* Header */}
        <div className="relative bg-black py-4 text-center">
          <h2 id="consultation-popup-title" className="text-white text-sm  sm:text-lg font-semibold">
            {headerTitle}
          </h2>
          <button
            type="button"
            onClick={() => close()}
            className="cursor-pointer absolute right-3 top-2 p-2 text-white hover:scale-115 transition"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8">
          {/* LEFT SECTION (Hidden on Mobile) */}
          <div className="hidden md:block">
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-6">{tagline}</p>

            <h4 className="font-semibold mb-2">Why Choose Us</h4>

            <div className="bg-[#eef8fc] rounded-lg p-4 grid grid-cols-3 gap-4 text-sm font-semibold mb-6">
              <div>
                <p className="text-xl font-bold">50+</p>
                <p>Projects Delivered</p>
              </div>
              <div>
                <p className="text-xl font-bold">10000+</p>
                <p>Leads Generated</p>
              </div>
              <div>
                <p className="text-xl font-bold">4.9</p>
                <p>Google Rating</p>
              </div>
            </div>

            <ul className="flex items-center  space-y-2 text-sm text-gray-700 font-bold">
              <li>
                <Image
                  src="/CDL.png"
                  width={80}
                  height={80}
                  alt="Google Partner"
                  className="inline mr-2"
                />
              </li>
              <li>
                <Image
                  src="/clutch.png"
                  width={80}
                  height={80}
                  alt="clutch Partner"
                  className="inline mr-2"
                />
              </li>
              <li>
                <Image
                  src="/iso.png"
                  width={80}
                  height={80}
                  alt="ISO Partner"
                  className="inline mr-2"
                />
              </li>
              <li>
                <Image
                  src="/GA.png"
                  width={80}
                  height={80}
                  alt="Google Analytics Partner"
                  className="inline mr-2"
                />
              </li>
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div className="md:border-l md:border-dashed md:pl-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                ref={firstFieldRef}
                name="name"
                type="text"
                aria-label="Your name"
                autoComplete="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3 text-sm"
                required
              />

              <input
                name="contact"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                aria-label="Mobile number (10 digits)"
                autoComplete="tel-national"
                placeholder="Enter 10 Digit Mobile Number"
                value={form.contact}
                onChange={handleChange}
                onKeyDown={(e) => {
                  // Block the minus/plus/decimal/exponent keys a numeric
                  // keypad or physical keyboard can still send — the
                  // onChange digit-stripping is the real guard, this just
                  // stops them from visibly flashing into the field first.
                  if (["-", "+", ".", "e", "E"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                className="w-full border rounded-md px-4 py-3 text-sm"
                title="Enter a valid 10 digit mobile number"
                required
              />

              <input
                name="email"
                type="email"
                aria-label="Email address"
                autoComplete="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3 text-sm"
                title="Enter a valid email address"
                required
              />

              <button
                type="submit"
                className="cursor-pointer w-full bg-black text-white py-3 rounded-md font-medium"
              >
                Book Appointment
              </button>
            </form>

            {/* Styled links (a <button> inside a link is invalid). */}
            <div className="flex gap-4 mt-6">
              <a
                href="tel:+918115585285"
                className="flex-1 flex items-center justify-center gap-2 border border-black py-3 rounded-md text-sm hover:bg-black hover:text-white transition"
              >
                <Phone size={16} />
                Call now
              </a>

              <a
                href="https://wa.me/+918115585285"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-green-700 text-green-700 py-3 rounded-md text-sm hover:bg-green-700 hover:text-white transition"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
