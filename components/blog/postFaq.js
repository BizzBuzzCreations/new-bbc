import { Plus } from "lucide-react";
import RichText from "@/components/ui/richText";

// A post's own FAQs, in the site's dark thin-line style (native <details>:
// keyboard friendly, every answer stays in the page; the FAQ structured data
// is added by the post page). `faqs`: { question, answer }.
export default function PostFaq({ faqs }) {
  const items = (faqs || []).filter((f) => f?.question);
  if (!items.length) return null;
  return (
    <section className="my-14">
      <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">Frequently Asked Questions</h2>
      <div className="mt-6 border-t border-white/10">
        {items.map((f, i) => (
          <details key={i} className="group border-b border-white/10">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-lg text-white transition-colors hover:text-[#40A2D8] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] [&::-webkit-details-marker]:hidden">
              <span>{f.question}</span>
              <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 transition-transform duration-300 group-open:rotate-45">
                <Plus size={16} />
              </span>
            </summary>
            <RichText as="div" text={f.answer} className="max-w-2xl pb-6 pr-12 text-base leading-relaxed text-white/70" />
          </details>
        ))}
      </div>
    </section>
  );
}
