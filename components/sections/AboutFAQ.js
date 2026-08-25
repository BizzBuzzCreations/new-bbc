import DarkFAQSection from "@/components/sections/darkFAQSection";

const DEFAULT_FAQS = [
  {
    question: "Who is BizzBuzz Creations?",
    answer:
      "BizzBuzz Creations is a digital marketing agency based in Prayagraj (Allahabad), India, helping businesses grow through SEO, digital marketing, paid advertising, social media, web development, and digital strategy.",
  },
  {
    question: "Where is BizzBuzz Creations based?",
    answer:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, India, and works with businesses across India as well as clients in international markets, including the UK and US.",
  },
  {
    question: "What digital marketing services does BizzBuzz Creations offer?",
    answer:
      "BizzBuzz Creations provides SEO, digital marketing, social media marketing, paid advertising, content marketing, web design and development, and digital strategy. Services can be combined based on your business goals.",
  },
  {
    question: "Does BizzBuzz Creations work with businesses outside Prayagraj?",
    answer:
      "Yes. While we work with businesses in Prayagraj and across India, we also help businesses in international markets build their online presence, generate leads, and achieve sustainable digital growth.",
  },
  {
    question: "Why choose BizzBuzz Creations as your digital marketing agency?",
    answer:
      "We focus on strategy before campaigns, measurable growth over vanity metrics, and long-term digital performance. Every strategy is tailored to the business, audience, competition, and goals rather than using a one-size-fits-all approach.",
  },
  {
    question: "How can I get started with BizzBuzz Creations?",
    answer:
      "Contact our team to discuss your business, current digital presence, and growth goals. We'll identify the right opportunities and help you build a practical digital marketing strategy designed around your business.",
  },
];

export default function AboutFAQ({ content }) {
  const heading = content?.aboutFaqHeading || "FAQs";
  const faqs = content?.aboutFaqItems?.length > 0 ? content.aboutFaqItems : DEFAULT_FAQS;
  return <DarkFAQSection faqs={faqs} heading={heading} />;
}
