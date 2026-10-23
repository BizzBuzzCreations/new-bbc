import PageHero from "@/components/detail/pageHero";
import FaqTopics from "@/components/sections/faqTopics";
import CtaV2 from "@/components/home/ctaV2";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("faq", {
  title: "Digital Marketing FAQs | BizzBuzz Creations",
  description:
    "Explore expert answers to SEO, digital marketing, AEO, GEO, AI search, Google Ads, social media, and web development questions for businesses worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/faq",
  },
});
}

export default async function FAQPage() {
  const content = await getPageContent("faq");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);
  const title = [content?.faqHeroHeadingLine1 || "Frequently Asked", content?.faqHeroHeadingLine2 || "Questions"].join(" ");

  // Redesign, in the homepage's style: hero → every topic's questions (with
  // the topic list beside them) → closing CTA. Same dashboard fields and
  // "Remove section" switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="faq" />
      {!hidden.has("faqHero") && (
        <PageHero
          label="FAQ"
          title={title}
          tagline={content?.faqHeroSubheading || "Answers to What Businesses Ask Before They Grow With Us"}
          description={
            content?.faqHeroParagraph ||
            "Have questions about SEO, Google Ads, social media, web development, AI automation, or working with BizzBuzz Creations? Find clear answers below — and if you don't see what you're looking for, our team is one message away."
          }
          actions={[{ text: content?.faqHeroCtaText || "Ask Us Directly", href: "/contact", variant: "solid" }]}
          image={content?.faqHeroBackgroundImage || "/FAQ.png"}
          imageAspect="aspect-[4/3]"
          imageClassName="object-[75%_50%]"
        />
      )}
      {!hidden.has("faqTopics") && <FaqTopics content={content} />}
      {!hidden.has("cta") && <CtaV2 content={content} />}
    </div>
  );
}
