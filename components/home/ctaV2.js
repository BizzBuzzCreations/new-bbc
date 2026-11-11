"use client";

import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { sendMail } from "@/actions/serverActions";
import { markEnquired } from "@/lib/enquiryFlag";
import RichText from "@/components/ui/richText";
import AccentText from "@/components/brand/accentText";
import { CONTACT } from "@/lib/siteNav";

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  theme: "dark",
  transition: Bounce,
};

// The closing call to action — the one dark, loud moment: the dashboard's
// heading set huge, a single email field (same sendMail action as before),
// call and WhatsApp. Dashboard fields as before (ctaHeading, ctaParagraph,
// ctaEmailLabel, ctaEmailPlaceholder). A sent enquiry stops the consultation
// pop-up asking.
export default function CtaV2({ content }) {
  const heading = content?.ctaHeading || "Get a Free Consultation";
  const paragraph =
    content?.ctaParagraph ||
    "Ready to grow your business with trusted digital marketing services in UP? Contact BizzBuzz Creations today and let’s build your success story together.";
  const emailLabel = content?.ctaEmailLabel || "Email address";
  const emailPlaceholder = content?.ctaEmailPlaceholder || "you@company.com";
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setState("sending");
    setError("");
    const response = await sendMail({
      name: "not given",
      email,
      subject: "Request for consultancy",
      text: "Want to start a project",
      contact: null,
    });
    if (response?.success) {
      markEnquired();
      setEmail("");
      setState("sent");
      toast.success(response.message, toastOptions);
    } else {
      setState("error");
      setError(
        response?.message ||
          "Something went wrong — please try again, or call us.",
      );
    }
  };

  return (
    <section
      id="CTA"
      aria-labelledby="cta-heading"
      className="band-open on-ink scroll-mt-10"
    >
      <div className="wrap py-7 md:py-10">
        <p className="kicker text-(--mut)">Let’s talk</p>
        <h2
          id="cta-heading"
          className="font-display mt-8 max-w-[14ch] text-balance text-[clamp(3.2rem,10.5vw,11.5rem)] leading-[0.88] tracking-[-0.06em]"
        >
          <AccentText text={heading} />
        </h2>
        <div className="mt-8 grid gap-12 border-t border-(--line) pt-10 md:mt-10 lg:grid-cols-12 lg:gap-10 [&>*]:min-w-0">
          <RichText
            as="p"
            text={paragraph}
            className="text-lg leading-relaxed text-(--mut) lg:col-span-4"
          />
          <div className="lg:col-span-5 lg:col-start-6">
            {state === "sent" ? (
              <p
                role="status"
                className="font-display text-3xl leading-tight tracking-[-0.03em]"
              >
                Thanks — we’ve got your email and will reply within one working
                day.
              </p>
            ) : (
              <form onSubmit={submit} data-bizzbee-avoid>
                <label htmlFor="cta-email" className="kicker text-(--mut)">
                  {emailLabel}
                </label>
                <div className="mt-3 flex items-center gap-3 border-b border-(--fg) pb-3">
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={emailPlaceholder}
                    aria-invalid={state === "error" ? "true" : undefined}
                    aria-describedby={
                      state === "error" ? "cta-error" : undefined
                    }
                    className="font-display w-0 min-w-0 flex-1 border-0 bg-transparent px-0 py-1 text-2xl tracking-[-0.03em] text-(--fg) placeholder:text-(--mut)/70 focus:outline-none focus:ring-0 md:text-4xl"
                  />
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    aria-label="Send"
                    className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-buzz text-buzz-ink transition-transform duration-300 hover:scale-105 disabled:opacity-60"
                  >
                    {state === "sending" ? (
                      <span className="text-xs">…</span>
                    ) : (
                      <ArrowRight
                        aria-hidden="true"
                        size={22}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    )}
                  </button>
                </div>
                {state === "error" && (
                  <p
                    id="cta-error"
                    role="alert"
                    className="mt-3 text-sm text-[#ff9a8a]"
                  >
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
          <div className="flex flex-wrap items-start gap-3 text-[0.9375rem] lg:col-span-2 lg:flex-col lg:items-end">
            <a
              href={CONTACT.phoneIndia.href}
              className="inline-flex items-center gap-2 underline decoration-(--fg)/30 underline-offset-4 hover:decoration-(--fg)"
            >
              <Phone aria-hidden="true" size={15} />{" "}
              {CONTACT.phoneIndia.display}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 underline decoration-(--fg)/30 underline-offset-4 hover:decoration-(--fg)"
            >
              <MessageCircle aria-hidden="true" size={15} /> WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
