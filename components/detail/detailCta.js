import { MessageCircle, Phone } from "lucide-react";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import AccentText from "@/components/brand/accentText";
import { CONTACT } from "@/lib/siteNav";

// The closing call to action of the page templates: the heading huge on ink,
// the text, the button(s) and the direct lines.
export default function DetailCta({ heading, tagline, text, primaryText, secondaryText, secondaryHref = "/contact" }) {
  return (
    <section id="CTA" className="on-ink scroll-mt-10 border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <p className="kicker text-(--mut)">Let’s talk</p>
        <h2 className="font-display mt-8 max-w-[16ch] text-balance text-[clamp(2.8rem,8vw,8.5rem)] leading-[0.9] tracking-[-0.06em]">
          <AccentText text={heading} />
        </h2>
        {tagline && <p className="mt-6 text-xl">{tagline}</p>}
        <div className="mt-8 grid gap-10 border-t border-(--line) pt-10 md:mt-10 lg:grid-cols-12 lg:gap-10">
          <RichText as="p" text={text} className="text-lg leading-relaxed text-(--mut) lg:col-span-5" />
          <div className="flex flex-wrap items-start gap-3 lg:col-span-7 lg:justify-end">
            <Button href="/contact" variant="buzz" size="lg">
              {primaryText || "Get a Free Consultation"}
            </Button>
            {secondaryText && (
              <Button href={secondaryHref} variant="outline" size="lg">
                {secondaryText}
              </Button>
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
          <a href={CONTACT.phoneIndia.href} className="inline-flex items-center gap-2 underline decoration-(--fg)/30 underline-offset-4 hover:decoration-(--fg)">
            <Phone aria-hidden="true" size={15} /> {CONTACT.phoneIndia.display}
          </a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline decoration-(--fg)/30 underline-offset-4 hover:decoration-(--fg)">
            <MessageCircle aria-hidden="true" size={15} /> WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
