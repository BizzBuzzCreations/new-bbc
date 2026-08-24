import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
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
import CTA from "@/components/sections/CTA";
import CaseStudies from "@/components/sections/caseStudies";
import CertificationsCarousel from "@/components/sections/certificationsCarousel";
import IndustriesHeroBadges from "@/components/sections/industriesHeroBadges";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { getPageContent } from "@/actions/pageContentActions";

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
// the Healthcare industry page, and so on for all 15.
const DEFAULT_INDUSTRY_CARDS = [
  { title: "Healthcare", description: "Build a stronger healthcare presence with digital marketing, SEO, and websites designed to connect with patients.", linkText: "Learn More", linkHref: "/industries/healthcare" },
  { title: "Finance", description: "Strengthen your finance brand with digital strategies that build visibility, trust, engagement, and qualified customer opportunities.", linkText: "Learn More", linkHref: "/industries/finance" },
  { title: "Restaurant", description: "Attract more diners with local SEO, social media, and digital marketing strategies built for restaurant growth.", linkText: "Learn More", linkHref: "/industries/restaurant" },
  { title: "Wearables", description: "Grow your wearable technology brand with digital strategies that improve visibility, engagement, and online customer discovery.", linkText: "Learn More", linkHref: "/industries/wearables" },
  { title: "Entertainment", description: "Reach wider audiences with creative digital marketing, social media, and content strategies built for entertainment brands.", linkText: "Learn More", linkHref: "/industries/entertainment" },
  { title: "Travel", description: "Increase bookings and brand visibility with SEO, digital marketing, and engaging online experiences for travel businesses.", linkText: "Learn More", linkHref: "/industries/travel" },
  { title: "Fitness", description: "Build a stronger fitness brand with digital marketing strategies that attract members, increase visibility, and drive growth.", linkText: "Learn More", linkHref: "/industries/fitness" },
  { title: "Education", description: "Connect with students and learners through SEO, digital marketing, and websites designed for educational businesses.", linkText: "Learn More", linkHref: "/industries/education" },
  { title: "Real Estate", description: "Generate more property leads with SEO, digital marketing, and conversion-focused websites built for real estate businesses.", linkText: "Learn More", linkHref: "/industries/real-estate" },
  { title: "E-commerce", description: "Grow your online store with SEO, digital marketing, and conversion-focused strategies designed for e-commerce success.", linkText: "Learn More", linkHref: "/industries/ecommerce" },
  { title: "Events", description: "Build event awareness and increase registrations with social media, digital marketing, and engaging online campaigns.", linkText: "Learn More", linkHref: "/industries/events" },
  { title: "Manufacturing", description: "Strengthen your manufacturing business with digital strategies that improve visibility, reach buyers, and generate qualified leads.", linkText: "Learn More", linkHref: "/industries/manufacturing" },
  { title: "Fashion & Apparel", description: "Build a stronger fashion brand with social media, digital marketing, and e-commerce strategies that turn attention into growth.", linkText: "Learn More", linkHref: "/industries/fashion-apparel" },
  { title: "Gaming", description: "Reach gaming audiences with engaging digital marketing, social media, and content strategies built around player communities.", linkText: "Learn More", linkHref: "/industries/gaming" },
  { title: "Construction", description: "Generate qualified leads and strengthen your online presence with SEO, digital marketing, and conversion-focused web solutions.", linkText: "Learn More", linkHref: "/industries/construction" },
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

export const metadata = {
  title: "Digital Marketing Services by Industry | BizzBuzz Creations",
  description:
    "Explore industry-specific digital marketing, SEO, social media, web development, and BPO solutions for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries",
  },
};

// Same real photo pool reused across the site (individual industry pages,
// homepage shuffle grid) — no stock photography, no fabricated client
// logos or awards.
const DEFAULT_CARD_IMAGES = [
  "/image-1.jpg",
  "/image-2.jpg",
  "/banner.png",
  "/image-3.jpg",
  "/image-4.webp",
  "/image-5.webp",
  "/image-6.jpg",
  "/image-7.jpg",
  "/image-8.jpg",
  "/image-9.jpg",
  "/teamPic.webp",
];

export default async function IndustriesIndexPage() {
  const content = await getPageContent("industries");

  const heroEyebrow = content?.industriesHeroEyebrow || "Industries";
  const heroHeading = content?.industriesHeroHeading || "Digital Growth Solutions for Every Industry";
  const heroParagraph =
    content?.industriesHeroParagraph ||
    "Every industry has different goals, audiences, and challenges. We create tailored digital marketing, BPO, and web solutions that fit the way your business works.";
  const heroButtonText = content?.industriesHeroButtonText || "Explore Our Solutions";

  const gridEyebrow = content?.industriesGridEyebrow || "Industries We Serve";
  const gridHeading = content?.industriesGridHeading || "Delivering Value Across Every Major Industry";
  const gridSubtext = content?.industriesGridSubtext || "Real challenges, real solutions — pick your industry below to see how we approach it.";
  const CARD_IMAGES =
    content?.industriesCardImages?.length > 0
      ? content.industriesCardImages.map((i) => i.src)
      : DEFAULT_CARD_IMAGES;

  const certHeading = content?.industriesCertHeading || "Certified & Recognized By";
  const certSubtext = content?.industriesCertSubtext || "Real credentials that back up how we work, not just what we say.";

  const industryCardsRaw = content?.industryCards?.length > 0 ? content.industryCards : DEFAULT_INDUSTRY_CARDS;
  const industryCards = industryCardsRaw.map((card, i) => ({
    ...card,
    icon: INDUSTRY_ICONS[i % INDUSTRY_ICONS.length],
  }));

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 md:pt-32 pb-20 px-6 md:px-12 lg:px-24 text-white"
        style={{ background: "radial-gradient(circle at top, #0d1b2e, #000000)" }}
      >
        <div
          className="absolute top-1/4 right-[8%] w-[420px] h-[420px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4">
              {heroEyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {heroHeading}
            </h1>
            <p className="text-white/70 leading-relaxed mb-9 max-w-lg">
              {heroParagraph}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0B60B0] hover:bg-[#0d72cf] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#0B60B0]/30 transition"
            >
              {heroButtonText}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Real industries we serve, not fabricated client logos */}
          <IndustriesHeroBadges />
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
            {gridEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl mb-4">
            {gridHeading}
          </h2>
          <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
            {gridSubtext}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.linkHref}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={CARD_IMAGES[i % CARD_IMAGES.length]}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
                      }}
                      aria-hidden="true"
                    />
                    <span className="absolute top-3 right-3 text-[11px] font-bold text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B60B0] text-white shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={16} />
                      </span>
                      <span className="font-bold text-white">{card.title}</span>
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8] mt-3 transition-colors duration-300 group-hover:text-white">
                      {card.linkText}
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case studies — real BizzBuzz clients */}
      <div className="border-t border-white/10">
        <CaseStudies />
      </div>

      {/* Certifications carousel */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {certHeading}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-14 leading-relaxed">
            {certSubtext}
          </p>
          <CertificationsCarousel />
        </div>
      </section>

      {/* FAQs — questions specific to working across industries */}
      <DarkFAQSection faqs={INDUSTRIES_FAQS} heading="Frequently Asked Questions" />

      <CTA />
    </>
  );
}
