import FaqHero from "@/components/sections/faqHero";
import FaqTopics from "@/components/sections/faqTopics";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Digital Marketing FAQs | BizzBuzz Creations",
  description:
    "Explore expert answers to SEO, digital marketing, AEO, GEO, AI search, Google Ads, social media, and web development questions for businesses worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <FaqHero />
      <FaqTopics />
      <div className="bg-black pt-4">
        <CTA />
      </div>
    </>
  );
}
