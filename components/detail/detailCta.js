import { Phone, MessageCircle } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";

// Closing call to action (sub-service pages, redesign) — same look as the
// homepage's closing section (big light heading, illustration on the right)
// but with the page's own heading, text and two buttons (both to /contact
// unless `secondaryHref` says otherwise, e.g. /our-team's "Explore
// Careers"), plus Call / WhatsApp. Illustration lazy-loads; hidden on
// phones.
export default function DetailCta({ heading, tagline, text, primaryText, secondaryText, secondaryHref = "/contact" }) {
  return (
    <section id="CTA" className="scroll-mt-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 md:pb-32">
        <div className="reveal-stagger grid gap-12 border-t border-white/10 pt-16 md:grid-cols-[3fr_2fr] md:items-center md:gap-16 md:pt-20">
          <div>
            <h2 className="font-display max-w-4xl text-4xl leading-[1.06] md:text-6xl">{heading}</h2>
            {tagline && <p className="mt-4 text-lg text-[#40A2D8]">{tagline}</p>}
            <RichText as="p" text={text} className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg" />
            <div className="mt-10 flex flex-wrap gap-3">
              <Pill href="/contact" variant="solid" className="px-6 py-3 text-base">{primaryText || "Get a Free Consultation"}</Pill>
              {secondaryText && <Pill href={secondaryHref} className="px-6 py-3 text-base">{secondaryText}</Pill>}
            </div>
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
          {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized 1x / 2x files (the homepage's); decorative */}
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
