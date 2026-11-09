import { MessageCircle, Phone } from "lucide-react";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import AccentText from "@/components/brand/accentText";
import { CONTACT } from "@/lib/siteNav";

// Closing call to action of the page templates (rebuild): the buzz-yellow
// block — heading, tagline, text, the primary button (to /contact), an
// optional second one, and call / WhatsApp.
export default function DetailCta({ heading, tagline, text, primaryText, secondaryText, secondaryHref = "/contact" }) {
  return (
    <section id="CTA" className="relative scroll-mt-20 overflow-hidden bg-buzz text-buzz-ink">
      <div className="col-lines-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="wrap relative grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <p className="kicker text-buzz-ink/70">[—] Let&rsquo;s talk</p>
          <h2 className="font-display mt-6 text-balance text-[clamp(2.75rem,6.5vw,6.5rem)] leading-[0.92]">
            <AccentText text={heading} />
          </h2>
          {tagline && <p className="mt-6 text-xl">{tagline}</p>}
        </div>
        <div className="lg:col-span-5">
          <RichText as="p" text={text} className="text-lg leading-relaxed text-buzz-ink/80" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="ink" size="lg">
              {primaryText || "Get a Free Consultation"}
            </Button>
            {secondaryText && (
              <Button href={secondaryHref} variant="line" size="lg">
                {secondaryText}
              </Button>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-[0.9375rem] font-medium">
            <a href={CONTACT.phoneIndia.href} className="inline-flex h-12 items-center gap-2 rounded-full border border-buzz-ink/30 px-5 transition-colors hover:bg-buzz-ink hover:text-white">
              <Phone aria-hidden="true" size={16} /> {CONTACT.phoneIndia.display}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-buzz-ink/30 px-5 transition-colors hover:bg-buzz-ink hover:text-white">
              <MessageCircle aria-hidden="true" size={16} /> WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
