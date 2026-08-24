import { FAQSection } from "@/components/ui/faq-accordion";

const DEFAULT_FAQS = [
  {
    question: "How can I get started with BizzBuzz Creations?",
    answer:
      "You can get started by filling out our contact form and booking a free consultation. We'll discuss your business goals, challenges, requirements, and the right digital marketing or technology solution for you.",
  },
  {
    question: "Does BizzBuzz Creations provide digital marketing services in Prayagraj?",
    answer:
      "Yes. BizzBuzz Creations is a digital marketing agency serving businesses in Prayagraj, across India, and worldwide, with services including SEO, social media marketing, Google Ads, web design, and web development.",
  },
  {
    question: "What digital marketing services does BizzBuzz Creations offer?",
    answer:
      "We provide SEO, social media marketing, Google Ads, web design, web development, content marketing, and other digital solutions designed to improve online visibility, generate leads, and support business growth.",
  },
  {
    question: "Can BizzBuzz Creations work with businesses outside India?",
    answer:
      "Yes. We work with businesses beyond India and can provide digital marketing, website development, and other digital solutions for brands targeting international markets.",
  },
  {
    question: "How much do digital marketing and web development services cost?",
    answer:
      "The cost depends on your goals, project scope, services required, and target market. Contact us for a free consultation and a customized proposal based on your specific requirements.",
  },
  {
    question: "How quickly can I expect results from digital marketing?",
    answer:
      "The timeline depends on the service and your goals. SEO generally requires consistent effort over time, while paid advertising can generate visibility and leads faster. We create a strategy based on your business objectives and track performance along the way.",
  },
];

// Blue-tinted hover instead of the accordion's default gray — matches the
// treatment already used on /faq, so the two pages read as one system.
const TRIGGER_HOVER = "hover:bg-[#eaf4fb] hover:border-[#40A2D8]/40";

export default function ContactFAQ({ content }) {
  const eyebrow = content?.contactFaqEyebrow || "Got Questions?";
  const heading = content?.contactFaqHeading || "Frequently Asked Questions";
  const faqs = content?.contactFaqItems?.length > 0 ? content.contactFaqItems : DEFAULT_FAQS;

  return (
    <div className="max-w-5xl mx-auto px-4 pb-20">
      <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] text-center mb-3">
        {eyebrow}
      </p>
      <FAQSection
        faqs={faqs}
        defaultValue="item-0"
        headingClassName="md:text-4xl text-3xl font-bold text-center mb-12 text-white"
        heading={heading}
        triggerClassName={TRIGGER_HOVER}
      />
    </div>
  );
}
