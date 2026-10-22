import { Plus } from "lucide-react";
import RichText from "@/components/ui/richText";

// FAQ (redesign) — GPG-style: the heading on the left, the questions on the
// right as a thin-line list; each opens with a plus that turns into a cross.
// Native <details>: keyboard and screen-reader friendly with no script, and
// every answer stays in the page. The homepage FAQ structured data is built
// from the same dashboard items (PageSeoScripts), unchanged.
// From md up the left column holds an illustration on a soft light card
// (the picture's own white melts into the card via mix-blend-multiply, so
// there's no white box) and stays beside the questions as they scroll.
// Lazy-loaded with a fixed size (no layout shift); not shown or downloaded
// on phones.
export default function FaqV2({ content }) {
  const heading = content?.faqHeading || "FAQs";
  const items = (content?.faqItems || []).filter((f) => f?.question);
  if (!items.length) return null;

  return (
    <section className="bg-black text-white">
      <div className="reveal-stagger mx-auto grid max-w-7xl gap-10 px-6 md:px-10 py-16 md:grid-cols-[2fr_3fr] md:gap-16 md:py-24">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-sm text-[#40A2D8]">Questions</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          <div className="mt-10 hidden max-w-[24rem] rounded-3xl bg-[#eaf3fd] p-6 md:block">
            {/* eslint-disable-next-line @next/next/no-img-element -- already cropped and compressed (19KB); next/image would recompress the JPEG-sourced art a second time */}
            <img
              src="/faq-thinking.webp"
              alt=""
              width={435}
              height={498}
              loading="lazy"
              decoding="async"
              className="h-auto w-full mix-blend-multiply"
            />
          </div>
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
