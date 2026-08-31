import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  MapPin,
  Wrench,
  Building2,
  Store,
  Star,
  TrendingUp,
  Building,
} from "lucide-react";

export const metadata = {
  title: "High-Intent & Local SEO Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations offers high-intent local SEO services that bring nearby, ready-to-buy customers across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/high-intent-local-seo",
  },
};

const CAPABILITIES = [
  {
    icon: Wrench,
    title: "Local Service Businesses Needing Nearby Customers",
    desc: "Local service businesses lose customers to whichever competitor shows up first in nearby search results, regardless of actual service quality. We provide local SEO services built specifically around winning that visibility for your service area.",
  },
  {
    icon: Building2,
    title: "Multi-Location Businesses Needing Location-Specific Visibility",
    desc: "Businesses with multiple locations need each one to rank for its own nearby searches, not just the flagship location. We structure local SEO for multi-location business needs so every branch gets discovered in its own area.",
  },
  {
    icon: Store,
    title: "Small Businesses Competing With Larger, Established Brands",
    desc: "Small businesses often assume they can't compete with larger brands in search, but local intent actually favors genuine proximity and relevance. We provide a local SEO company for small business support built to win on local relevance, not budget size.",
  },
  {
    icon: Star,
    title: "Businesses Needing Google Business Profile Optimization",
    desc: "An incomplete or poorly managed Google Business Profile quietly costs businesses visibility in the exact place customers look first. We provide Google Business Profile optimization services that turn this into an active growth channel, not an afterthought.",
  },
  {
    icon: TrendingUp,
    title: "High-Ticket Businesses Needing High-Intent Buyer Traffic",
    desc: "High-ticket businesses need to reach the smaller number of people actually ready to buy, not broad, low-intent traffic. We build a high-intent keyword SEO strategy that prioritizes buyer-stage searches over generic awareness terms.",
  },
  {
    icon: Building,
    title: "City-Specific Businesses Needing City-Based SEO",
    desc: "Businesses operating in a specific city need content and rankings tailored to that exact market, not a generic national approach. We provide city-based SEO services built around the specific searches your local market actually runs.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Local SEO Strategy & Audits",
    desc: "A clear picture of your current local visibility, and exactly where you're losing ground to nearby competitors.",
    ctaText: "Know Our Services",
    services: [
      "Local SEO Audit",
      "Local Search Visibility Assessment",
      "Competitor Local SEO Analysis",
      "Local Keyword Research",
      "High-Intent Keyword Mapping",
      "Local SEO Strategy Development",
      "Local Search Opportunity Analysis",
      "Local SEO KPI Planning",
    ],
  },
  {
    number: "02",
    title: "Google Business Profile Optimization",
    desc: "A fully optimized, actively managed Google Business Profile, since this is often where local decisions actually get made.",
    ctaText: "Know Our Services",
    services: [
      "Google Business Profile Optimization",
      "GBP Category & Attribute Optimization",
      "GBP Photo & Post Management",
      "Google Maps Ranking Optimization",
      "GBP Review Management",
      "GBP Q&A Management",
      "Multi-Location GBP Management",
      "GBP Performance Tracking",
    ],
  },
  {
    number: "03",
    title: "High-Intent Keyword Targeting",
    desc: "Keyword strategy that prioritizes searches from people close to making a purchase decision, not just browsing.",
    ctaText: "Know Our Services",
    services: [
      "High-Intent Keyword Research",
      "Commercial Intent Content Strategy",
      "Buyer-Stage Keyword Mapping",
      "Near-Me Search Optimization",
      "Transactional Keyword Targeting",
      "Conversion-Focused Page Optimization",
      "High-Intent Landing Page Creation",
      "Intent-Based Content Prioritization",
    ],
  },
  {
    number: "04",
    title: "Local Citation & Directory Management",
    desc: "Consistent, accurate business information across the web, since inconsistency quietly undermines local search trust.",
    ctaText: "Know Our Services",
    services: [
      "Local Citation Building",
      "NAP Consistency Management",
      "Directory Listing Management",
      "Industry-Specific Directory Submissions",
      "Citation Audit & Cleanup",
      "Local Business Schema Markup",
      "Duplicate Listing Cleanup",
      "Citation Monitoring",
    ],
  },
  {
    number: "05",
    title: "Local Content & Location Pages",
    desc: "Location-specific content built for each area you serve, not one generic page trying to cover everywhere at once.",
    ctaText: "Know Our Services",
    services: [
      "Location Page Development",
      "City-Specific Landing Pages",
      "Local Content Marketing",
      "Local Blog Content",
      "Service Area Page Creation",
      "Local Case Study Content",
      "Community-Focused Content",
      "Multi-Location Content Strategy",
    ],
  },
  {
    number: "06",
    title: "Local SEO Reporting & Optimization",
    desc: "Clear reporting on local rankings and real leads generated, not just general traffic numbers.",
    ctaText: "Know Our Services",
    services: [
      "Local Ranking Tracking",
      "Local SEO Performance Reporting",
      "Google Maps Position Tracking",
      "Local Traffic Analysis",
      "Conversion Tracking for Local Leads",
      "Monthly Local SEO Reports",
      "Ongoing Strategy Refinement",
      "Local Competitor Benchmarking",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Local Market & Competitor Audit",
    desc: "We assess your current local visibility and analyze nearby competitors, identifying exactly where you're losing ground in local search.",
  },
  {
    number: "02",
    title: "High-Intent Keyword Research",
    desc: "We research the specific searches your ready-to-buy customers actually use, prioritizing commercial and transactional intent over broad awareness terms.",
  },
  {
    number: "03",
    title: "Google Business Profile & Citation Setup",
    desc: "We optimize your Google Business Profile fully and clean up citations across the web, building the foundation local rankings depend on.",
  },
  {
    number: "04",
    title: "Local Content & Landing Page Development",
    desc: "We build location-specific content and landing pages for each area you serve, structured around your actual local search opportunities.",
  },
  {
    number: "05",
    title: "Launch & Local Ranking Tracking",
    desc: "We launch the full local SEO strategy and begin tracking rankings across your target locations and keywords.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Optimization",
    desc: "We report on local rankings and lead generation regularly, refining strategy as local search results continue to shift.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Local SEO Built Around Ready-to-Buy Customers, Not Just Rankings",
    desc: "We prioritize high-intent searches, people actively looking to buy or visit soon, over broad awareness terms that generate traffic without genuine purchase intent behind it.",
  },
  {
    number: "02",
    title: "Google Business Profile Managed as a Core Growth Channel",
    desc: "We treat your Google Business Profile as an active, ongoing asset requiring regular updates, photos, and review management, not a one-time setup left untouched afterward.",
  },
  {
    number: "03",
    title: "High-Intent Keyword Targeting That Prioritizes Buyers Over Browsers",
    desc: "We focus keyword strategy on commercial and transactional intent specifically, recognizing that ranking for high-volume but low-intent terms rarely translates into actual customers.",
  },
  {
    number: "04",
    title: "Multi-Location Strategy That Doesn't Cannibalize Your Own Listings",
    desc: "We structure multi-location SEO so each branch ranks for its own area without competing against your other locations for the same search terms.",
  },
  {
    number: "05",
    title: "Citation Accuracy That Google Actually Trusts",
    desc: "We ensure your business information stays consistent across every directory and citation source, since inconsistency is a common, quietly damaging cause of local ranking issues.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Rankings and Real Local Leads",
    desc: "You see actual local ranking positions and lead volume, not just general traffic, giving you a clear picture of whether local SEO is genuinely bringing in customers.",
  },
];

const FAQS = [
  {
    question: "How much do local SEO services cost in India?",
    answer:
      "Cost depends on scope, a single-location business costs less to optimize than a multi-location business needing separate strategies for each branch. We scope pricing after understanding your specific locations and competition, rather than offering a flat rate upfront.",
  },
  {
    question: "What's the difference between local SEO and regular SEO?",
    answer:
      "Local SEO focuses specifically on ranking for searches with local intent, \"near me\" queries, city-specific searches, and Google Maps results, while regular SEO covers broader organic visibility. Local SEO also depends heavily on Google Business Profile management, which regular SEO doesn't involve.",
  },
  {
    question: "How important is Google Business Profile for local SEO?",
    answer:
      "Extremely important, it's often the first thing potential customers see and directly affects your visibility in Google Maps and local search results. An incomplete or poorly managed profile is one of the most common reasons local businesses underperform in search.",
  },
  {
    question: "How long does local SEO take to show results?",
    answer:
      "The timeline varies by competition and current visibility, but many businesses see initial improvements within a few weeks after Google Business Profile optimization, while broader keyword rankings typically take a few months to build meaningfully.",
  },
  {
    question: "Can you manage local SEO for multiple business locations?",
    answer:
      "Yes, multi-location local SEO is a core part of what we do, structuring each location's presence so they rank for their own local searches without competing against each other for the same terms.",
  },
  {
    question: "What is high-intent keyword targeting, and why does it matter?",
    answer:
      "High-intent keywords are searches from people close to making a purchase decision, rather than just browsing information. Prioritizing these terms means your SEO investment focuses on traffic more likely to actually convert into customers, not just visitors.",
  },
];

export default function HighIntentLocalSeo() {
  return (
    <ServiceDetailPage
      sectionLabel="SEO Services"
      label="High-Intent & Local SEO"
      icon={MapPin}
      description="Local SEO is built to reach customers actively searching nearby, ready to buy, not just building general brand awareness over time."
      heroTitle="Get Found by Customers Ready to Buy Right Now"
      heroDescription="Local SEO is built to reach customers actively searching nearby, ready to buy, not just building general brand awareness over time."
      heroCtaText="Get a Free Local SEO Audit"
      capabilitiesHeading="Built for Businesses Ready to Own Their Local Market"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Local Search and a Walk-In Customer"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Local & High-Intent SEO"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Get You Found by Ready-to-Buy Customers"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Local SEO Campaigns Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach local SEO for every client, with the same attention to detail whether a client is nearby or across the world. We provide local SEO services for businesses across India, helping them win visibility in their specific city or service area. For businesses looking for a local SEO agency near me beyond India, we support clients worldwide remotely, delivering the same local seo company for small business standard of work regardless of location. Whether you're a single-location business in Prayagraj or a multi-city brand anywhere else, our approach starts with the same question: what does your specific local customer actually search for?"
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Be Found by Customers, Ready to Buy?"
      ctaText="Whether you're losing local customers to a nearby competitor, your Google Business Profile hasn't been touched in months, or you're expanding into new locations, broad, low-intent traffic was never going to fill your pipeline. Let's audit your current local presence and scope what real local SEO would actually involve."
      ctaPrimaryText="Talk to a Local SEO Specialist"
      ctaSecondaryText="Get Your Free Local SEO Audit"
    />
  );
}
