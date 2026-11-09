import { Plus } from "lucide-react";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";
import { CONTACT } from "@/lib/siteNav";

// FAQ (the homepage and every page template): heading left (sticky), the
// questions right as native <details> — keyboard and screen-reader friendly
// with no script; answers open smoothly where the browser supports it
// (globals.css .faq). Fields: faqEyebrow, faqHeading, faqSubheading,
// faqItems. `no` / `of` the section number; `surface` "paper" | "ink".
export default function FaqV2({ content, no, of, surface = "paper" }) {
  const heading = content?.faqHeading || "Frequently asked questions";
  const subtext = content?.faqSubheading || "";
  const eyebrow = content?.faqEyebrow || "Questions";
  const items = (content?.faqItems || []).filter((f) => f?.question);
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq-heading" className={`faq on-${surface}`}>
      <div className="wrap grid gap-12 py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <Kicker no={no} of={of}>{eyebrow}</Kicker>
          <h2 id="faq-heading" className="font-display mt-8 text-[clamp(2.2rem,4vw,3.75rem)] leading-[0.98] tracking-[-0.045em]">
            <AccentText text={heading} />
          </h2>
          {subtext && <RichText as="p" text={subtext} className="mt-5 max-w-md text-base leading-relaxed text-(--mut)" />}
          <div className="mt-10 max-w-sm border-t border-(--fg) pt-5">
            <p className="font-display text-xl tracking-[-0.03em]">Still have a question?</p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-(--mut)">Ask a person — we reply within one working day.</p>
            <ul className="mt-4 space-y-1.5 text-[0.9375rem]">
              <li><a href={`mailto:${CONTACT.email}`} className="underline decoration-(--fg)/30 underline-offset-4 hover:decoration-(--fg)">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneIndia.href} className="underline decoration-(--fg)/30 underline-offset-4 hover:decoration-(--fg)">{CONTACT.phoneIndia.display}</a></li>
              <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="underline decoration-(--fg)/30 underline-offset-4 hover:decoration-(--fg)">WhatsApp<span className="sr-only"> (opens in a new tab)</span></a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-(--fg) lg:col-span-7 lg:col-start-6">
          {items.map((f, i) => (
            <details key={i} className="group border-b border-(--line)">
              <summary className="flex cursor-pointer list-none items-start gap-5 py-6 text-left md:py-7 [&::-webkit-details-marker]:hidden">
                <span className="kicker w-7 shrink-0 pt-1.5 text-(--mut)">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-lg font-medium leading-snug md:text-xl">{f.question}</span>
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--fg)/30 transition-[transform,background-color,color] duration-500 ease-out-soft group-open:rotate-45 group-open:bg-(--fg) group-open:text-(--bg)">
                  <Plus size={16} />
                </span>
              </summary>
              <RichText as="div" text={f.answer} className="max-w-2xl pb-8 pl-12 pr-14 text-base leading-relaxed text-(--mut)" />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
