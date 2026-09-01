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
  title: "Local & City-Based Ad Campaigns | BizzBuzz Creations",
  description:
    "BizzBuzz Creations runs local and city-based ad campaigns that bring nearby customers across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/local-city-based-ad-campaigns",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Local startups need customers walking through the door fast, without wasting spend on distant audiences. We build hyper-local campaigns tightly geo-targeted from launch, so early budget only reaches genuinely nearby customers.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs with a physical location often run ads that reach people too far away to ever visit. We size local ad campaigns for SMB budgets, targeting the specific radius customers actually travel from.",
  },
  {
    icon: Building,
    title: "Enterprises & Multi-Location Brands",
    desc: "Enterprises with multiple locations need separate, properly targeted campaigns for each branch. We run local ad campaigns at enterprise scale, managing geo-targeting consistently across every location.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Service Businesses",
    desc: "Retail and service businesses depend on nearby customers finding them at the exact moment of need. We run click-to-call and local search ads structured around the specific services you offer nearby.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Local Ads Partner",
    desc: "Agencies managing local clients need a specialist partner for hyper-local campaign execution. We work as a white-label local ads partner, handling geo-targeted execution agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Losing Local Customers to Competitors",
    desc: "Businesses watching nearby competitors win local customers need a targeting fix, not just more spend. We audit your current local targeting and rebuild it around where your actual customers physically are.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Hyper-Local Geo-Targeting",
    desc: "Ads are targeted to specific neighborhoods, cities, or radius zones, so your budget reaches customers genuinely close enough to visit.",
    ctaText: "Know Our Services",
    services: [
      "Radius Targeting Setup",
      "Neighborhood-Level Targeting",
      "City-Specific Targeting",
      "Geo-Fencing",
      "Location Exclusion Setup",
      "Multi-Zone Targeting",
      "Location Performance Analysis",
      "Geo-Targeting Refinement",
    ],
  },
  {
    number: "02",
    title: "Local Search & Map Ads",
    desc: "We run ads designed to show up when nearby customers search for your product or service on Google and Maps.",
    ctaText: "Know Our Services",
    services: [
      "Local Search Ads",
      "Google Maps Ads",
      "Local Inventory Ads",
      "Local Service Ads",
      "Near-Me Search Targeting",
      "Map Pack Ad Optimization",
      "Local Search Keyword Research",
      "Location Extension Setup",
    ],
  },
  {
    number: "03",
    title: "Click-to-Call Campaigns",
    desc: "Call-focused ad formats make it effortless for local customers to ring your business directly from the ad itself.",
    ctaText: "Know Our Services",
    services: [
      "Click-to-Call Ad Setup",
      "Call Extension Configuration",
      "Call-Only Campaigns",
      "Call Tracking Setup",
      "Call Scheduling by Hours",
      "Call Ad Copywriting",
      "Call Conversion Tracking",
      "Call Volume Reporting",
    ],
  },
  {
    number: "04",
    title: "Multi-Location Campaign Management",
    desc: "For businesses with more than one location, we run separate, properly targeted campaigns for each city or branch.",
    ctaText: "Know Our Services",
    services: [
      "Multi-Location Campaign Setup",
      "Location-Specific Ad Copy",
      "Branch-Level Budget Allocation",
      "Location Group Management",
      "Franchise Ad Management",
      "Location Performance Comparison",
      "Centralized Multi-Location Reporting",
      "Location Rollout Planning",
    ],
  },
  {
    number: "05",
    title: "Local Audience Targeting",
    desc: "We combine location targeting with audience data relevant to your specific city or region, not a generic national approach.",
    ctaText: "Know Our Services",
    services: [
      "Local Demographic Targeting",
      "Regional Interest Targeting",
      "City-Specific Audience Building",
      "Local Language Targeting",
      "Local Event-Based Targeting",
      "Local Competitor Conquesting",
      "Local Audience Testing",
      "Regional Trend Analysis",
    ],
  },
  {
    number: "06",
    title: "Foot Traffic & Call Tracking",
    desc: "We track calls, direction requests, and store visits generated from local campaigns, not just clicks and impressions.",
    ctaText: "Know Our Services",
    services: [
      "Foot Traffic Tracking",
      "Direction Request Tracking",
      "Call Tracking",
      "Store Visit Reporting",
      "Local Conversion Attribution",
      "Location-Based ROI Reporting",
      "Monthly Local Performance Reports",
      "Offline Conversion Tracking",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Location & Audience Mapping",
    desc: "We map out your service area and the local customer profile most likely to walk through your door or call.",
  },
  {
    number: "02",
    title: "Local Campaign Setup",
    desc: "Geo-targeted search, map, and call campaigns get built specifically for your city or neighborhood.",
  },
  {
    number: "03",
    title: "Tracking Setup",
    desc: "We set up call and direction tracking before launch, so every local result is measured accurately from day one.",
  },
  {
    number: "04",
    title: "Launch & Real-Time Optimization",
    desc: "Campaigns launch with close monitoring, adjusting targeting and budget as real local performance data comes in.",
  },
  {
    number: "05",
    title: "Location Testing & Refinement",
    desc: "We test different radius zones and neighborhoods, narrowing in on the areas actually generating calls and visits.",
  },
  {
    number: "06",
    title: "Scale & Report on Local Impact",
    desc: "We scale what's driving calls and visits and report transparently on local business impact every month.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Hyper-Local Expertise",
    desc: "As a trusted paid marketing agency in Allahabad, we run hyper-local campaigns built for how nearby customers actually search.",
  },
  {
    number: "02",
    title: "Foot Traffic Focused",
    desc: "Campaigns are built to put your business in front of nearby customers actively searching for what you offer, not just online browsers.",
  },
  {
    number: "03",
    title: "Multi-Location Ready",
    desc: "We manage separate, properly targeted campaigns for businesses with more than one location or service city.",
  },
  {
    number: "04",
    title: "Call & Visit Tracking",
    desc: "We track calls, direction requests, and store visits, giving you visibility into real local business impact.",
  },
  {
    number: "05",
    title: "Transparent Numbers",
    desc: "We're honest about what's working and what isn't, obsessed with getting you a better cost per lead every month.",
  },
  {
    number: "06",
    title: "A Team, Not a Vendor",
    desc: "Think of us less like a vendor and more like a hired paid marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "How much do local PPC advertising services cost in India?",
    answer:
      "Cost typically includes both our management fee and your ad spend budget, kept separate. We scope management pricing after understanding your service area and competition level, rather than offering a flat rate upfront.",
  },
  {
    question: "What's the difference between local ads and regular PPC campaigns?",
    answer:
      "Local ads use precise geographic targeting, radius targeting, location extensions, geo-fencing, to reach only people within your realistic service area, while regular PPC campaigns often target much broader or even national audiences by default.",
  },
  {
    question: "Can you run separate campaigns for each of our locations?",
    answer:
      "Yes, multi-location campaign management is a core part of what we do, coordinating separate, location-specific campaigns that stay consistent in branding without competing against each other for the same nearby customers.",
  },
  {
    question: "What is geo-fencing, and is it worth it for a local business?",
    answer:
      "Geo-fencing targets ads to people within a very specific geographic boundary, often used around a physical location or event. It's genuinely valuable for businesses needing precise, neighborhood-level targeting, though not every local business needs this level of precision.",
  },
  {
    question: "How do you prevent multiple locations from competing against each other?",
    answer:
      "We structure campaigns with clear geographic boundaries and coordinated bidding, so each location's ads target its own specific area without overlapping and bidding against a sister location for the same searches.",
  },
  {
    question: "How long before local ad campaigns start bringing in customers?",
    answer:
      "Initial local leads typically start coming in within the first couple of weeks, since local intent searches often convert faster than broader awareness campaigns, though full optimization usually takes four to six weeks.",
  },
];

export default function LocalCityBasedAdCampaigns() {
  return (
    <ServiceDetailPage
      sectionLabel="Paid Marketing"
      label="Local & City-Based Ad Campaigns"
      icon={MapPin}
      description="Need customers walking through your door? As a trusted paid marketing agency in Allahabad, we run hyper-local campaigns that put your business in front of nearby customers actively searching for what you offer."
      heroTitle="Local & City-Based Ad Campaigns in India"
      heroDescription="Need customers walking through your door? As a trusted paid marketing agency in Allahabad, we run hyper-local campaigns that put your business in front of nearby customers actively searching for what you offer."
      capabilitiesHeading="Built for Businesses Ready for Customers Nearby"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Local Ad Campaigns"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Run Their Local Campaigns"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Nearby Searches Into Customers Through the Door"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Local Campaigns Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every local ad campaign, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and multi-location enterprises across India, sizing local campaigns to each business's actual service area and foot traffic goals. For businesses looking to run local ad campaigns beyond India, we manage geo-targeting remotely, tracking calls and visits across regions and time zones to the same standard regardless of location. Whether you're a startup targeting your first neighborhood or an enterprise running campaigns across dozens of branches, our approach starts with mapping exactly where your customers actually are."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Customers Walking Through Your Door?"
      ctaText="Whether you need a single-location campaign built from scratch, a multi-branch local ad program, or a fix to targeting that's currently reaching the wrong audience, the right approach depends on your actual service area. Let's talk through your locations and scope what local ad campaigns would actually involve."
      ctaPrimaryText="Talk to a Local Ads Specialist"
      ctaSecondaryText="Get Your Free Local Ads Consultation"
    />
  );
}
