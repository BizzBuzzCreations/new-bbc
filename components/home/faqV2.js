import { Plus } from "lucide-react";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// FAQ (rebuild) — used by the homepage and every page template: a paper
// section, heading left (sticky on desktop), numbered questions right as
// native <details> (keyboard and screen-reader friendly with no script);
// the answer opens smoothly where the browser supports it (globals.css,
// .faq details). Same fields: faqEyebrow, faqHeading, faqSubheading,
// faqItems. `tone` "paper" (default) | "ink". `no` the kicker number.
export default function FaqV2({ content, tone = "paper", no = "10" }) {
  const heading = content?.faqHeading || "Frequently asked questions";
  const subtext = content?.faqSubheading || "";
  const eyebrow = content?.faqEyebrow || "Questions";
  const items = (content?.faqItems || []).filter((f) => f?.question);
  if (!items.length) return null;
  const dark = tone === "paper";

  return (
    <section aria-labelledby="faq-heading" className={`faq ${dark ? "bg-paper text-ink" : "bg-ink text-white"}`}>
      <div className="wrap grid gap-12 py-24 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <Kicker no={no} tone={dark ? "dark" : "light"}>
            {eyebrow}
          </Kicker>
          <h2 id="faq-heading" className="font-display mt-6 text-[clamp(2.2rem,4vw,3.75rem)] leading-[0.98]">
            <AccentText text={heading} />
          </h2>
          {subtext && <RichText as="p" text={subtext} className={`mt-5 max-w-md text-lg leading-relaxed ${dark ? "text-stone" : "text-fog"}`} />}
        </div>
        <div className={`border-t lg:col-span-7 lg:col-start-6 ${dark ? "border-ink/15" : "border-white/10"}`}>
          {items.map((f, i) => (
            <details key={i} className={`group border-b ${dark ? "border-ink/15" : "border-white/10"}`}>
              <summary className="flex cursor-pointer list-none items-start gap-5 py-6 text-left md:py-7 [&::-webkit-details-marker]:hidden">
                <span className={`kicker w-7 shrink-0 pt-1.5 ${dark ? "text-stone" : "text-fog"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-lg font-medium leading-snug md:text-xl">{f.question}</span>
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,color] duration-500 ease-out-soft group-open:rotate-45 ${
                    dark ? "border-ink/20 group-open:bg-ink group-open:text-white" : "border-white/25 group-open:bg-buzz group-open:text-buzz-ink"
                  }`}
                >
                  <Plus size={16} />
                </span>
              </summary>
              <RichText as="div" text={f.answer} className={`max-w-2xl pb-8 pl-12 pr-14 text-base leading-relaxed ${dark ? "text-stone" : "text-fog"}`} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
