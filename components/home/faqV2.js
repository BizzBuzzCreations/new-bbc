import { Plus } from "lucide-react";
import RichText from "@/components/ui/richText";

// FAQ (redesign) — GPG-style: the heading on the left, the questions on the
// right as a thin-line list; each opens with a plus that turns into a cross.
// Native <details>: keyboard and screen-reader friendly with no script, and
// every answer stays in the page. The homepage FAQ structured data is built
// from the same dashboard items (PageSeoScripts), unchanged.
// From md up the left column holds an illustration (transparent WebP, 1x
// and 2x so it's sharp on high-resolution screens) that stays beside the
// questions as they scroll.
// Lazy-loaded with a fixed size (no layout shift); not shown or downloaded
// on phones.
export default function FaqV2({ content }) {
  const heading = content?.faqHeading || "FAQs";
  const items = (content?.faqItems || []).filter((f) => f?.question);
  if (!items.length) return null;

  return (
    <section className="bg-black text-white">
      <div className="reveal-stagger mx-auto grid max-w-7xl gap-10 px-6 md:px-10 py-16 md:grid-cols-[2fr_3fr] md:gap-16 md:py-20">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-sm text-[#40A2D8]">Questions</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized 1x / 2x files (31KB / 75KB); next/image would only recompress them */}
          <img
            src="/faq-question-336.webp"
            srcSet="/faq-question-336.webp 336w, /faq-question-672.webp 672w"
            sizes="336px"
            alt=""
            width={336}
            height={378}
            loading="lazy"
            decoding="async"
            className="mt-10 hidden h-auto w-full max-w-[21rem] md:block"
          />
        </div>
        <div className="border-t border-white/10">
          {items.map((f, i) => (
            <details key={i} className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-lg text-white transition-colors hover:text-[#40A2D8] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] [&::-webkit-details-marker]:hidden">
                <span>{f.question}</span>
                <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 transition-transform duration-300 group-open:rotate-45">
                  <Plus size={16} />
                </span>
              </summary>
              <RichText as="div" text={f.answer} className="max-w-2xl pb-6 pr-12 text-base leading-relaxed text-white/65" />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
