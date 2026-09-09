import { FAQSection } from "@/components/ui/faq-accordion";

// Dark-themed FAQ wrapper — same styling used on the BPO page, generic so
// every service page can reuse it with its own real FAQ content.
export default function DarkFAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  subheading,
}) {
  return (
    <section className="bg-black py-16">
      {subheading && (
        <div className="container max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            {heading}
          </h2>
          <p className="text-white/60 text-center mb-10">{subheading}</p>
        </div>
      )}
      <FAQSection
        faqs={faqs}
        className="container max-w-4xl mx-auto px-5"
        headingClassName="text-3xl font-bold mb-10 text-center text-white"
        heading={subheading ? undefined : heading}
        triggerClassName="bg-white/5 border-[#0B60B0]/50 hover:border-[#0B60B0] text-white hover:bg-white/10 hover:shadow-none"
        iconClassName="text-[#40A2D8]"
        questionTextClassName="text-white"
        chevronWrapClassName="bg-white/10"
        chevronClassName="text-white"
        answerClassName="bg-white/5 border border-[#0B60B0]/30 shadow-none"
        answerTextClassName="text-white/70"
        answerIconWrapClassName="bg-white/10"
        answerIconClassName="text-[#40A2D8]"
      />
    </section>
  );
}
