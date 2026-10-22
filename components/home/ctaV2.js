"use client";

import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { Phone, MessageCircle } from "lucide-react";
import { sendMail } from "@/actions/serverActions";
import { markEnquired } from "@/lib/enquiryFlag";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";

const toastOptions = { position: "top-right", autoClose: 5000, theme: "light", transition: Bounce };

// Closing call to action (redesign) — a big, light headline, one line of
// text, the email box with one submit pill, and Call / WhatsApp. Same
// dashboard fields and the same enquiry handling as the old closing CTA
// (sendMail; a successful enquiry also stops the consultation popup).
// From md up an illustration sits on the right (the sections above
// alternate: Reviews right, FAQ left, this one right). Lazy-loaded with a
// fixed size; not shown or downloaded on phones.
export default function CtaV2({ content }) {
  const heading = content?.ctaHeading || "Get a Free Consultation";
  const paragraph =
    content?.ctaParagraph ||
    "Ready to grow your business with trusted digital marketing services in UP? Contact BizzBuzz Creations today and let’s build your success story together.";
  const emailLabel = content?.ctaEmailLabel || "Email Address";
  const emailPlaceholder = content?.ctaEmailPlaceholder || "your@email.com";
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const response = await sendMail({ name: "not given", email, subject: "Request for consultancy", text: "Want to start a project", contact: null });
    setSending(false);
    if (response?.success) {
      markEnquired(); // the consultation popup won't ask again
      setEmail("");
      toast.success(response.message, toastOptions);
    } else {
      toast.error(response?.message || "Something went wrong.", toastOptions);
    }
  };

  return (
    <section id="CTA" className="scroll-mt-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-8 pb-24 md:pt-12 md:pb-32">
        <div className="reveal-stagger grid gap-12 border-t border-white/10 pt-16 md:grid-cols-[3fr_2fr] md:items-center md:gap-16 md:pt-24">
          <div>
            <h2 className="font-display max-w-4xl text-5xl leading-[1.04] md:text-6xl xl:text-7xl">{heading}</h2>
            <RichText as="p" text={paragraph} className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg" />

            <form onSubmit={handleSubmit} className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
              <label htmlFor="cta-email" className="sr-only">{emailLabel}</label>
              <input
                id="cta-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/[0.04] px-5 py-3 text-base text-white placeholder:text-white/50 focus:border-[#40A2D8] focus:outline-none"
              />
              <Pill variant="solid" type="submit" className="justify-center">{sending ? "Sending…" : "Send"}</Pill>
            </form>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="w-full text-sm text-white/60 sm:w-auto">or talk to us now:</span>
              <a href="tel:+918115585285" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-white hover:bg-white hover:text-black">
                <Phone size={16} /> Call +91 81155 85285
              </a>
              <a href="https://wa.me/918115585285" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-black">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized 1x / 2x files (33KB / 75KB); next/image would only recompress them */}
          <img
            src="/cta-conversation-440.webp"
            srcSet="/cta-conversation-440.webp 440w, /cta-conversation-880.webp 880w"
            sizes="(min-width: 1280px) 440px, 36vw"
            alt=""
            width={440}
            height={385}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-[28rem] justify-self-end md:block"
          />
        </div>
      </div>
    </section>
  );
}
