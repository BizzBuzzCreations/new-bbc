import {
  Stethoscope,
  PiggyBank,
  UtensilsCrossed,
  Watch,
  Film,
  Plane,
  Dumbbell,
  GraduationCap,
  Home as HomeIcon,
  ShoppingCart,
  CalendarDays,
  Factory,
  Shirt,
  Gamepad2,
  HardHat,
} from "lucide-react";
import PageHero from "@/components/detail/pageHero";
import CatalogGrid from "@/components/detail/catalogGrid";
import CertificationsRow from "@/components/detail/certificationsRow";
import BuildV2 from "@/components/home/buildV2";
import FaqV2 from "@/components/home/faqV2";
import CtaV2 from "@/components/home/ctaV2";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

// Icons stay code-driven (design), matched positionally to whichever
// industry cards are saved — same order as the default list below.
const INDUSTRY_ICONS = [
  Stethoscope,
  PiggyBank,
  UtensilsCrossed,
  Watch,
  Film,
  Plane,
  Dumbbell,
  GraduationCap,
  HomeIcon,
  ShoppingCart,
  CalendarDays,
  Factory,
  Shirt,
  Gamepad2,
  HardHat,
];

// Each card links straight to that industry's own dedicated /industries
// page (not a generic service page), so clicking "Healthcare" lands on
// the Healthcare industry page, and so on for all 15. `image` is each
// industry's own real photo (the same ones used on that industry's own
// hero section) — was previously a generic pool of 11 photos cycled
// across all 15 cards via index modulo, unrelated to which industry a
// card actually was, and two of those 11 (/banner.png, /teamPic.webp)
// don't even exist in /public, so a couple of cards always rendered a
// broken image regardless of which industry landed on that slot.
const DEFAULT_INDUSTRY_CARDS = [
  { title: "Healthcare", description: "Build a stronger healthcare presence with digital marketing, SEO, and websites designed to connect with patients.", linkText: "Learn More", linkHref: "/industries/healthcare", image: "/Healthcare.png" },
  { title: "Finance", description: "Strengthen your finance brand with digital strategies that build visibility, trust, engagement, and qualified customer opportunities.", linkText: "Learn More", linkHref: "/industries/finance", image: "/Finance.png" },
  { title: "Restaurant", description: "Attract more diners with local SEO, social media, and digital marketing strategies built for restaurant growth.", linkText: "Learn More", linkHref: "/industries/restaurant", image: "/Restaurant.png" },
  { title: "Wearables", description: "Grow your wearable technology brand with digital strategies that improve visibility, engagement, and online customer discovery.", linkText: "Learn More", linkHref: "/industries/wearables", image: "/wearables.png" },
  { title: "Entertainment", description: "Reach wider audiences with creative digital marketing, social media, and content strategies built for entertainment brands.", linkText: "Learn More", linkHref: "/industries/entertainment", image: "/Entertainment.png" },
  { title: "Travel", description: "Increase bookings and brand visibility with SEO, digital marketing, and engaging online experiences for travel businesses.", linkText: "Learn More", linkHref: "/industries/travel", image: "/Travel.png" },
  { title: "Fitness", description: "Build a stronger fitness brand with digital marketing strategies that attract members, increase visibility, and drive growth.", linkText: "Learn More", linkHref: "/industries/fitness", image: "/fitness.png" },
  { title: "Education", description: "Connect with students and learners through SEO, digital marketing, and websites designed for educational businesses.", linkText: "Learn More", linkHref: "/industries/education", image: "/Education.png" },
  { title: "Real Estate", description: "Generate more property leads with SEO, digital marketing, and conversion-focused websites built for real estate businesses.", linkText: "Learn More", linkHref: "/industries/real-estate", image: "/Real estate.png" },
  { title: "E-commerce", description: "Grow your online store with SEO, digital marketing, and conversion-focused strategies designed for e-commerce success.", linkText: "Learn More", linkHref: "/industries/ecommerce", image: "/ecommerce.png" },
  { title: "Events", description: "Build event awareness and increase registrations with social media, digital marketing, and engaging online campaigns.", linkText: "Learn More", linkHref: "/industries/events", image: "/Events.png" },
  { title: "Manufacturing", description: "Strengthen your manufacturing business with digital strategies that improve visibility, reach buyers, and generate qualified leads.", linkText: "Learn More", linkHref: "/industries/manufacturing", image: "/Manufacturing.png" },
  { title: "Fashion & Apparel", description: "Build a stronger fashion brand with social media, digital marketing, and e-commerce strategies that turn attention into growth.", linkText: "Learn More", linkHref: "/industries/fashion-apparel", image: "/Fashion.png" },
  { title: "Gaming", description: "Reach gaming audiences with engaging digital marketing, social media, and content strategies built around player communities.", linkText: "Learn More", linkHref: "/industries/gaming", image: "/Gaming.png" },
  { title: "Construction", description: "Generate qualified leads and strengthen your online presence with SEO, digital marketing, and conversion-focused web solutions.", linkText: "Learn More", linkHref: "/industries/construction", image: "/Construction.png" },
];

// Industries page FAQs — questions specific to working across industries.
const INDUSTRIES_FAQS = [
  {
    question: "What industries does BizzBuzz Creations serve?",
    answer:
      "BizzBuzz Creations works with businesses across healthcare, finance, restaurants, travel, education, real estate, ecommerce, manufacturing, gaming, and other growing industries.",
  },
  {
    question: "Do you provide industry-specific digital marketing services?",
    answer:
      "Yes. We create digital marketing strategies based on each industry's audience, competition, customer journey, business goals, and market requirements.",
  },
  {
    question: "Can you help my industry improve its online visibility?",
    answer:
      "Yes. Our SEO, digital marketing, social media, Google Ads, and website development solutions help businesses strengthen visibility and reach potential customers.",
  },
  {
    question: "Do you create websites for different industries?",
    answer:
      "Yes. We develop industry-focused websites designed around your business objectives, audience needs, user experience, and conversion goals.",
  },
  {
    question: "Can BizzBuzz Creations work with businesses outside Prayagraj?",
    answer:
      "Yes. We work with businesses in Prayagraj, across India, and worldwide, providing digital marketing, BPO, web development, and other digital solutions.",
  },
  {
    question: "How do I choose the right digital marketing strategy for my industry?",
    answer:
      "Our team can evaluate your industry, audience, competition, goals, and current digital presence to recommend the most suitable marketing and technology solutions.",
  },
];

export async function generateMetadata() {
  return buildPageMetadata("industries", {
  title: "Digital Marketing Services by Industry | BizzBuzz Creations",
  description:
    "Explore industry-specific digital marketing, SEO, social media, web development, and BPO solutions for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries",
  },
});
}

export default async function IndustriesIndexPage() {
  const content = await getPageContent("industries");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);

  const heroEyebrow = content?.industriesHeroEyebrow || "Industries";
  const heroHeading = content?.industriesHeroHeading || "Digital Growth Solutions for Every Industry";
  const heroParagraph =
    content?.industriesHeroParagraph ||
    "Every industry has different goals, audiences, and challenges. We create tailored digital marketing, BPO, and web solutions that fit the way your business works.";
  const heroButtonText = content?.industriesHeroButtonText || "Explore Our Solutions";
  const heroImage = content?.industriesHeroImage || "/industries.png";

  const gridEyebrow = content?.industriesGridEyebrow || "";
  const gridHeading = content?.industriesGridHeading || "Delivering Value Across Every Major Industry";
  const gridSubtext = content?.industriesGridSubtext || "Real challenges, real solutions — pick your industry below to see how we approach it.";

  const certHeading = content?.industriesCertHeading || "Certified & Recognized By";
  const certSubtext = content?.industriesCertSubtext || "Real credentials that back up how we work, not just what we say.";

  const industryCardsRaw = content?.industryCards?.length > 0 ? content.industryCards : DEFAULT_INDUSTRY_CARDS;
  const industryCards = industryCardsRaw.map((card, i) => ({
    ...card,
    icon: INDUSTRY_ICONS[i % INDUSTRY_ICONS.length],
  }));

  // Redesign, in the homepage's style: hero → the 15 industries as picture
  // cards (each links to its own industry page) → what we build (the
  // in-house systems) → certifications → FAQ → closing CTA. Same dashboard
  // fields and "Remove section" switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="industries" />
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("industriesHero") && (
        <PageHero
          label={heroEyebrow}
          title={heroHeading}
          description={heroParagraph}
          actions={[{ text: heroButtonText, href: "/services", variant: "solid" }]}
          image={heroImage}
          imageAspect="aspect-[4/3]"
          imageClassName="object-[62%_50%]"
        />
      )}

      {!hidden.has("industriesGrid") && (
        <CatalogGrid
          id="industries-grid"
          eyebrow={gridEyebrow || "Industries we serve"}
          heading={gridHeading}
          subtext={gridSubtext}
          cols="lg:grid-cols-3"
          imageAspect="aspect-[4/3] sm:aspect-[16/10]"
          items={industryCards.map((card) => ({
            key: card.title,
            label: card.title,
            href: card.linkHref,
            icon: card.icon,
            description: card.description,
            buttonText: card.linkText,
            image: card.image,
          }))}
        />
      )}

      {/* the in-house systems only (the homepage also shows the two products here) */}
      {!hidden.has("caseStudies") && <BuildV2 content={content} showClio={false} showPraxistence={false} />}

      {!hidden.has("industriesCertifications") && <CertificationsRow heading={certHeading} subtext={certSubtext} />}

      {!hidden.has("industriesFaq") && (
        <FaqV2
          content={{
            faqHeading: content?.industriesFaqHeading || "Frequently Asked Questions",
            faqItems: content?.industriesFaqItems?.length > 0 ? content.industriesFaqItems : INDUSTRIES_FAQS,
          }}
        />
      )}

      {!hidden.has("cta") && <CtaV2 content={content} />}
    </div>
  );
}
