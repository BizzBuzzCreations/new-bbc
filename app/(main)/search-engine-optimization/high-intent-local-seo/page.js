import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  MapPin,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "High-Intent & Local SEO Services | BizzBuzz Creations",
  description:
    "High-intent and local SEO services in India — target ready-to-buy and location-based searches to generate real business results, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/high-intent-local-seo",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups with a local footprint need to show up in nearby searches fast, without a long organic SEO runway. We prioritize Google Business Profile and high-intent keyword targeting first, giving startups quick local visibility wins.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs with a physical location often lose customers to competitors with a stronger local presence. We build high-intent and local SEO sized for SMB budgets, focused on the searches most likely to bring in real customers.",
  },
  {
    icon: Building,
    title: "Enterprises & Multi-Location Brands",
    desc: "Enterprises with multiple locations need consistent local visibility across every branch. We run local SEO programs at enterprise scale, managing profiles and location pages consistently across all your locations.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Service Businesses",
    desc: "Retail and service businesses depend on customers finding them nearby when they're ready to act. We target high-intent, near-me searches so people close by and ready to buy actually find you first.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Local SEO Partner",
    desc: "Marketing agencies managing local clients need a specialist partner for the technical side of local SEO. We work as a white-label local SEO partner, handling profile and citation work agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Losing Ground to Local Competitors",
    desc: "Businesses watching competitors dominate the local map pack need a structural fix, not just more effort. We audit why competitors are outranking you locally and close the specific gaps causing it.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "High-Intent Keyword Targeting",
    desc: "We prioritize keywords that signal real buying intent, not just traffic volume, so visits are more likely to turn into leads.",
    ctaText: "Know Our Services",
    services: [
      "High-Intent Keyword Research",
      "Buyer Intent Analysis",
      "Commercial Keyword Targeting",
      "Conversion-Focused SEO",
      "Keyword Prioritization",
      "Search Intent Mapping",
      "Competitor Keyword Analysis",
      "Intent-Based Content Planning",
    ],
  },
  {
    number: "02",
    title: "Google Business Profile Optimization",
    desc: "We optimize your Google Business Profile with accurate categories, photos, and posts, so you show up in local map results that drive calls and visits.",
    ctaText: "Know Our Services",
    services: [
      "GBP Setup & Optimization",
      "Category Optimization",
      "Photo & Media Management",
      "GBP Post Scheduling",
      "Business Description Optimization",
      "GBP Attribute Setup",
      "Map Pack Ranking Optimization",
      "GBP Insights Reporting",
    ],
  },
  {
    number: "03",
    title: "Local Citation Building",
    desc: "Consistent business listings across relevant directories strengthen local trust signals and improve your visibility in nearby searches.",
    ctaText: "Know Our Services",
    services: [
      "Citation Building",
      "Directory Listing Management",
      "NAP Consistency Audits",
      "Local Directory Submissions",
      "Duplicate Listing Cleanup",
      "Industry-Specific Directories",
      "Citation Monitoring",
      "Local Link Building",
    ],
  },
  {
    number: "04",
    title: "Review Generation & Management",
    desc: "We help build a steady flow of genuine customer reviews and respond to them professionally, which strongly influences local rankings and trust.",
    ctaText: "Know Our Services",
    services: [
      "Review Generation Campaigns",
      "Review Request Automation",
      "Review Response Management",
      "Reputation Monitoring",
      "Negative Review Handling",
      "Review Widget Setup",
      "Review Volume Tracking",
      "Customer Feedback Analysis",
    ],
  },
  {
    number: "05",
    title: "Location-Based Landing Pages",
    desc: "For businesses serving multiple areas, we build dedicated location pages that rank for city and neighborhood-specific searches.",
    ctaText: "Know Our Services",
    services: [
      "Location Page Development",
      "City-Specific Content",
      "Neighborhood Targeting",
      "Multi-Location SEO Structure",
      "Local Schema Markup",
      "Location Page Templates",
      "Service Area Content",
      "Location Page Optimization",
    ],
  },
  {
    number: "06",
    title: "Lead & Call Tracking",
    desc: "We track calls, form fills, and direction requests generated from local search, not just impressions, so you see real business impact.",
    ctaText: "Know Our Services",
    services: [
      "Call Tracking Setup",
      "Form Submission Tracking",
      "Direction Request Tracking",
      "Lead Attribution",
      "Local Conversion Reporting",
      "Call Recording Setup",
      "ROI Reporting",
      "Monthly Lead Reports",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Intent & Local Audit",
    desc: "We review your current local presence and identify high-intent keywords your actual customers use when they're ready to act.",
  },
  {
    number: "02",
    title: "Profile & Citation Optimization",
    desc: "We optimize your Google Business Profile and build consistent citations across relevant directories to strengthen local trust.",
  },
  {
    number: "03",
    title: "Review Strategy Setup",
    desc: "We set up a review generation process so genuine customer reviews build steadily, strengthening trust and local rankings.",
  },
  {
    number: "04",
    title: "Content & Landing Page Build",
    desc: "We create or refine location-specific pages and content targeting the high-intent searches your customers actually make.",
  },
  {
    number: "05",
    title: "Tracking Setup",
    desc: "We implement call and form tracking so every lead generated from local search is measurable, not just estimated.",
  },
  {
    number: "06",
    title: "Track Leads & Refine",
    desc: "We track calls, form fills, and direction requests, refining targeting based on what's actually converting into business.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Intent Over Volume",
    desc: "We prioritize keywords that convert, not just ones that bring traffic — visibility that turns into leads and sales.",
  },
  {
    number: "02",
    title: "Local Search Specialists",
    desc: "We focus on the specific signals that drive local map pack rankings — profile accuracy, citations, and reviews.",
  },
  {
    number: "03",
    title: "Review-Driven Trust",
    desc: "We actively help build genuine review volume and quality, a major factor in both local rankings and customer trust.",
  },
  {
    number: "04",
    title: "Multi-Location Ready",
    desc: "We build dedicated, properly structured location pages for businesses serving more than one area or city.",
  },
  {
    number: "05",
    title: "Lead Tracking, Not Just Traffic",
    desc: "We measure calls, form fills, and direction requests, giving you visibility into real business results, not just visits.",
  },
  {
    number: "06",
    title: "Honest Reporting",
    desc: "No agency can guarantee first-page local rankings, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "What is high-intent SEO?",
    answer:
      "High-intent SEO targets keywords that signal a searcher is close to making a decision or purchase, prioritizing conversion potential over raw traffic volume.",
  },
  {
    question: "How does local SEO help my business?",
    answer:
      "Local SEO improves your visibility in nearby searches and Google Maps results, helping customers in your service area find and choose you over competitors.",
  },
  {
    question: "Do I need a Google Business Profile for local SEO?",
    answer:
      "Yes, an optimized Google Business Profile is one of the strongest factors in local search visibility, especially for map pack rankings.",
  },
  {
    question: "How important are customer reviews for local rankings?",
    answer:
      "Very — genuine review volume, recency, and your responses to them are a significant factor search engines use to rank local businesses.",
  },
  {
    question: "Can you help if I serve multiple cities or areas?",
    answer:
      "Yes, we build dedicated, properly structured location pages so you can rank for searches specific to each area you serve.",
  },
];

export default function HighIntentLocalSeo() {
  return (
    <ServiceDetailPage
      sectionLabel="SEO Services"
      label="High-Intent & Local SEO"
      icon={MapPin}
      description="Driving traffic is not enough; you need customers ready to take action. We target high-intent and location-based searches to generate real business results."
      heroTitle="High-Intent & Local SEO Services in India"
      heroDescription="Driving traffic is not enough; you need customers ready to take action. We target high-intent and location-based searches to generate real business results."
      capabilitiesHeading="Built for Businesses Ready for Customers, Not Just Clicks"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our High-Intent & Local SEO"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their Local Visibility"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Local Searches Into Real Customers"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building Local Visibility Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every local SEO engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and multi-location enterprises across India, sizing local SEO to each business's actual service area and competition. For businesses looking to build local visibility beyond India, we deliver high-intent and local SEO remotely, managing profiles and citations across regions and time zones to the same standard regardless of location. Whether you're a startup optimizing your first Google Business Profile or an enterprise managing local visibility across dozens of locations, our approach starts with auditing where you currently stand in local search."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Customers Who Are Actually Ready to Act?"
      ctaText="Whether you need a Google Business Profile overhaul, a full local citation and review strategy, or location pages built for multiple areas, the right approach depends on where your local visibility currently stands. Let's talk through your local presence and scope what high-intent local SEO would actually involve."
      ctaPrimaryText="Talk to a Local SEO Specialist"
      ctaSecondaryText="Get Your Free Local SEO Audit"
    />
  );
}
