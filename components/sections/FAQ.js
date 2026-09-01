import React from "react";
import DarkFAQSection from "@/components/sections/darkFAQSection";

const DEFAULT_FAQS = [
  {
    question: "What does BizzBuzz Creations do?",
    answer:
      "We're a full-stack digital marketing and business solutions agency offering SEO, social media marketing, Google Ads, website development, AI automation, marketing automation, BPO support, and business consultancy under one team.",
  },
  {
    question: "Do you only work with businesses in Prayagraj?",
    answer:
      "No. We work with businesses in Prayagraj, across India, and internationally with the same team and process, wherever you're based.",
  },
  {
    question: "Do I have to hire you for everything, or can I pick one service?",
    answer:
      "You can start with a single service — SEO, ads, or a website, for example — and add more later as your needs grow. Nothing is bundled or forced.",
  },
  {
    question: "How much does it cost to work with BizzBuzz Creations?",
    answer:
      "There's no fixed package pricing; it depends on the services and scope you need. Every engagement starts with a free consultation, so you get a clear quote before committing to anything.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation. We'll look at your business, current online presence, and goals, then recommend the right starting point — no pressure, no obligation.",
  },
  {
    question: "What makes BizzBuzz Creations different from other agencies?",
    answer:
      "One team, one point of contact, and full ownership of your accounts and data — no vendor lock-in, no juggling five different agencies for one growth strategy.",
  },
];

export default function FAQ({ content }) {
  const heading = content?.faqHeading || "FAQs";
  const faqs = content?.faqItems?.length > 0 ? content.faqItems : DEFAULT_FAQS;

  return <DarkFAQSection faqs={faqs} heading={heading} />;
}
