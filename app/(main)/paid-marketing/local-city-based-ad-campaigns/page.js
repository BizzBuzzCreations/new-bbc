import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  MapPin,
  Navigation,
  PhoneCall,
  Building2,
  BarChart3,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Local & City-Based Ad Campaigns | BizzBuzz Creations",
  description:
    "Local and city-based ad campaigns in India — hyper-local targeting that puts your business in front of nearby customers actively searching for what you offer, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/local-city-based-ad-campaigns",
  },
};

const SERVICE_ITEMS = [
  {
    icon: MapPin,
    heading: "Hyper-Local Geo-Targeting",
    description:
      "Ads are targeted to specific neighborhoods, cities, or radius zones, so your budget reaches customers genuinely close enough to visit.",
  },
  {
    icon: Navigation,
    heading: "Local Search & Map Ads",
    description:
      "We run ads designed to show up when nearby customers search for your product or service on Google and Maps.",
  },
  {
    icon: PhoneCall,
    heading: "Click-to-Call Campaigns",
    description:
      "Call-focused ad formats make it effortless for local customers to ring your business directly from the ad itself.",
  },
  {
    icon: Building2,
    heading: "Multi-Location Campaign Management",
    description:
      "For businesses with more than one location, we run separate, properly targeted campaigns for each city or branch.",
  },
  {
    icon: Target,
    heading: "Local Audience Targeting",
    description:
      "We combine location targeting with audience data relevant to your specific city or region, not a generic national approach.",
  },
  {
    icon: BarChart3,
    heading: "Foot Traffic & Call Tracking",
    description:
      "We track calls, direction requests, and store visits generated from local campaigns, not just clicks and impressions.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Location & Audience Mapping",
    body: "We map out your service area and the local customer profile most likely to walk through your door or call.",
  },
  {
    title: "Local Campaign Setup",
    body: "Geo-targeted search, map, and call campaigns get built specifically for your city or neighborhood.",
  },
  {
    title: "Launch & Real-Time Optimization",
    body: "Campaigns launch with close monitoring, adjusting targeting and budget as real local performance data comes in.",
  },
  {
    title: "Scale & Report on Local Impact",
    body: "We scale what's driving calls and visits and report transparently on local business impact every month.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Hyper-Local Expertise",
    description:
      "As a trusted paid marketing agency in Allahabad, we run hyper-local campaigns built for how nearby customers actually search.",
  },
  {
    number: "002",
    title: "Foot Traffic Focused",
    description:
      "Campaigns are built to put your business in front of nearby customers actively searching for what you offer, not just online browsers.",
  },
  {
    number: "003",
    title: "Multi-Location Ready",
    description:
      "We manage separate, properly targeted campaigns for businesses with more than one location or service city.",
  },
  {
    number: "004",
    title: "Call & Visit Tracking",
    description:
      "We track calls, direction requests, and store visits, giving you visibility into real local business impact.",
  },
  {
    number: "005",
    title: "Transparent Numbers",
    description:
      "We're honest about what's working and what isn't, obsessed with getting you a better cost per lead every month.",
  },
  {
    number: "006",
    title: "A Team, Not a Vendor",
    description:
      "Think of us less like a vendor and more like a hired paid marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "What is a local or city-based ad campaign?",
    answer:
      "It's an ad campaign geo-targeted to a specific city, neighborhood, or radius zone, aimed at reaching nearby customers actively searching for your product or service.",
  },
  {
    question: "Which businesses benefit most from local ad campaigns?",
    answer:
      "Businesses with a physical location or a defined local service area — clinics, restaurants, retail stores, and local service providers — typically see the strongest results.",
  },
  {
    question: "Can you run campaigns for multiple cities or branches?",
    answer:
      "Yes, we manage separate, properly targeted campaigns for each location or city your business serves.",
  },
  {
    question: "How do you track results from local campaigns?",
    answer:
      "We track calls, direction requests, and store visits generated from your campaigns, not just clicks and impressions.",
  },
  {
    question: "How much does a local ad campaign cost?",
    answer:
      "Budget depends on your city, competition, and campaign scope — we'll recommend a realistic starting budget and optimize it as data comes in.",
  },
];

export default function LocalCityBasedAdCampaigns() {
  return (
    <>
      <BpoHero
        heading="Local & City-Based Ad Campaigns in India"
        description="Need customers walking through your door? As a trusted paid marketing agency in Allahabad, we run hyper-local campaigns that put your business in front of nearby customers actively searching for what you offer."
        img="/ads.webp"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/digital.webp"
              alt="Local and city-based ad campaigns at BizzBuzz Creations"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(200deg, rgba(5,11,22,0.75) 0%, rgba(11,96,176,0.3) 45%, transparent 75%)",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-3 text-white">
              Get Customers Walking Through Your Door
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Need customers walking through your door? As a trusted paid
              marketing agency in Allahabad, we run hyper-local campaigns
              that put your business in front of nearby customers actively
              searching for what you offer.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a paid marketing agency based in Prayagraj,
              proudly serving local businesses across Allahabad and Uttar
              Pradesh, as well as multi-location brands across India.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Local & City-Based Ad Campaigns"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Local & City-Based Ads Process"
            description="We map your service area and local customer profile first, then build and optimize geo-targeted campaigns designed to drive calls and visits."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* We are */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Local & City-Based Ad Campaign Company"
          description="BizzBuzz Creations runs hyper-local ad campaigns for businesses across India, built to bring nearby customers through the door, not just clicks online."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      <BpoWhyChooseDark />
      <div className="bg-black pt-10">
        <CTA />
      </div>
    </>
  );
}
