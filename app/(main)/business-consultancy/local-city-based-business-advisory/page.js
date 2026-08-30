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
  title: "Local & City-Based Business Advisory | BizzBuzz Creations",
  description:
    "Local and city-based business advisory in India — hands-on guidance grounded in the Prayagraj and Allahabad market landscape, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/local-city-based-business-advisory",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Local Startups & New Businesses",
    desc: "Local startups need advisory grounded in how the Prayagraj and Allahabad market actually works. We guide new local businesses with hands-on advisory based on real local customer behavior, not generic national assumptions.",
  },
  {
    icon: Building2,
    title: "Small & Medium Local Businesses",
    desc: "SMBs competing for local customers need advisory sized for their scale and budget. We provide local advisory sized for SMB budgets, focused on winning nearby customers against local competitors.",
  },
  {
    icon: Building,
    title: "Multi-Location & Expanding Businesses",
    desc: "Businesses expanding into new cities need advisory that accounts for each market's local dynamics. We help multi-location businesses adapt strategy city by city, rather than applying one national approach everywhere.",
  },
  {
    icon: ShoppingCart,
    title: "Local Retail & Service Businesses",
    desc: "Local retail and service businesses depend heavily on community reputation and word of mouth. We provide advisory grounded in how local customers actually decide, buy, and recommend businesses nearby.",
  },
  {
    icon: Handshake,
    title: "Businesses Seeking Local Connections",
    desc: "Businesses new to the Prayagraj market often need genuine local connections, not just advice. We connect businesses with local resources, partners, and contacts genuinely useful to operating here.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Losing Ground Locally",
    desc: "Businesses losing local market share to competitors need advisory grounded in what's actually changed nearby. We audit the local landscape and help you adapt to shifts in the market you might be missing from outside.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Local Market Understanding",
    desc: "We bring genuine, hands-on knowledge of the local market landscape, not generalized national assumptions applied blindly.",
    ctaText: "Know Our Services",
    services: [
      "Local Market Research",
      "Local Competitor Analysis",
      "Regional Trend Assessment",
      "Local Demand Analysis",
      "Neighborhood-Level Insights",
      "Local Economic Context Review",
      "Market Positioning Advisory",
      "Local Market Reporting",
    ],
  },
  {
    number: "02",
    title: "In-Person Advisory Availability",
    desc: "We offer in-person meetings when needed, for businesses that value face-to-face conversation over purely remote consulting.",
    ctaText: "Know Our Services",
    services: [
      "In-Person Consultation Sessions",
      "On-Site Business Visits",
      "Local Workshop Facilitation",
      "Face-to-Face Strategy Sessions",
      "Local Team Training",
      "In-Person Stakeholder Meetings",
      "Site Assessment Visits",
      "Local Event Participation",
    ],
  },
  {
    number: "03",
    title: "Local Customer Behavior Insight",
    desc: "We understand how local customers actually behave and buy, helping shape strategy that fits the real market, not assumptions.",
    ctaText: "Know Our Services",
    services: [
      "Local Customer Research",
      "Buying Behavior Analysis",
      "Local Preference Mapping",
      "Word-of-Mouth Pattern Analysis",
      "Local Review & Reputation Review",
      "Community Engagement Insights",
      "Local Demographic Analysis",
      "Behavior-Based Strategy Input",
    ],
  },
  {
    number: "04",
    title: "Local Network & Connections",
    desc: "Where relevant, we can connect you with local resources, partners, or contacts genuinely useful to your business.",
    ctaText: "Know Our Services",
    services: [
      "Local Partner Introductions",
      "Vendor & Supplier Connections",
      "Local Business Community Access",
      "Networking Facilitation",
      "Local Resource Referrals",
      "Community Relationship Building",
      "Local Event Introductions",
      "Ongoing Network Support",
    ],
  },
  {
    number: "05",
    title: "City-Specific Growth Planning",
    desc: "Growth plans account for the specific dynamics of your city or region, not a one-size-fits-all national playbook.",
    ctaText: "Know Our Services",
    services: [
      "City-Specific Strategy Development",
      "Local Growth Roadmapping",
      "Regional Expansion Planning",
      "Local Regulatory Considerations",
      "City-Level Market Entry Planning",
      "Local Growth Milestone Setting",
      "Region-Specific Advisory",
      "Local Growth Tracking",
    ],
  },
  {
    number: "06",
    title: "Ongoing Local Advisory",
    desc: "We stay available for ongoing questions and guidance as local conditions and your business evolve.",
    ctaText: "Know Our Services",
    services: [
      "Ongoing Advisory Access",
      "Regular Check-In Sessions",
      "Local Market Update Briefings",
      "Ad-Hoc Advisory Support",
      "Long-Term Advisory Relationship",
      "Local Condition Monitoring",
      "Priority Advisory Access",
      "Continued Local Guidance",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Local Business Discovery",
    desc: "We start with a clear-eyed look at your business and the local market it operates in, before recommending anything.",
  },
  {
    number: "02",
    title: "Local Market & Customer Analysis",
    desc: "We research how local customers actually behave and buy, so strategy is grounded in reality, not assumptions.",
  },
  {
    number: "03",
    title: "Grounded Strategy Development",
    desc: "Strategy gets built around your specific city and customer base, not generic advice pulled from a national template.",
  },
  {
    number: "04",
    title: "Local Connections & Resources",
    desc: "Where useful, we connect you with local partners, vendors, or resources genuinely relevant to your business.",
  },
  {
    number: "05",
    title: "Hands-On, In-Person Support",
    desc: "We stay involved through execution, with in-person availability where it genuinely helps, not just remote check-ins.",
  },
  {
    number: "06",
    title: "Ongoing Review & Course Correction",
    desc: "We're direct about what's working and honest about what isn't, adjusting the plan as real local results come in.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Grounded in the Local Landscape",
    desc: "As a trusted business consultant in Prayagraj and Allahabad, we offer hands-on advisory grounded in the local market, not generic assumptions.",
  },
  {
    number: "02",
    title: "In-Person When It Helps",
    desc: "We offer in-person meetings when needed, for businesses that value that over purely remote consulting.",
  },
  {
    number: "03",
    title: "No Generic Playbooks",
    desc: "Every recommendation is built around your specific city, customers, and real numbers, not a template pulled off a shelf.",
  },
  {
    number: "04",
    title: "We Stay Involved",
    desc: "From the first conversation to ongoing questions, we stay by your side long after the first meeting.",
  },
  {
    number: "05",
    title: "A Team, Not Outside Consultants",
    desc: "Think of us less like outside consultants and more like a hired team genuinely invested in your local success.",
  },
  {
    number: "06",
    title: "Born and Based in Prayagraj",
    desc: "We're not a national firm dabbling locally — we're rooted here, and we understand what it takes to build a business in this market.",
  },
];

const FAQS = [
  {
    question: "Can I find a business consultant in Prayagraj or Allahabad?",
    answer:
      "Yes, BizzBuzz Creations is a local business consulting firm that understands the market well and can work with you in person when needed.",
  },
  {
    question: "Is local advisory different from general business consulting?",
    answer:
      "Yes, local advisory is grounded in genuine knowledge of the specific city or region's market dynamics and customer behavior, not generalized national advice.",
  },
  {
    question: "Do you only work with businesses in Prayagraj?",
    answer:
      "No, while we're rooted in Prayagraj with strong local market knowledge, we also work with growing companies across India.",
  },
  {
    question: "Can we meet in person for consulting sessions?",
    answer:
      "Yes, we offer in-person meetings when needed for businesses that value face-to-face conversation over purely remote consulting.",
  },
  {
    question: "How much does local business advisory cost?",
    answer:
      "It depends on what you need — some businesses need a one-time strategy session, while others need ongoing support with flexible pricing.",
  },
];

export default function LocalCityBasedBusinessAdvisory() {
  return (
    <ServiceDetailPage
      sectionLabel="Business Consultancy"
      label="Local & City-Based Business Advisory"
      icon={MapPin}
      description="Looking for guidance that understands your local market? As a trusted business consultant in Prayagraj and Allahabad, we offer hands-on advisory grounded in the local landscape."
      heroTitle="Local & City-Based Business Advisory in Prayagraj"
      heroDescription="Looking for guidance that understands your local market? As a trusted business consultant in Prayagraj and Allahabad, we offer hands-on advisory grounded in the local landscape."
      capabilitiesHeading="Built for Businesses Ready for Advisory That Actually Knows the Market"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Local Business Advisory"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us for Local Advisory"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Local Market Knowledge Into Real Guidance"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Advising Businesses Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding is the very foundation of this advisory service, giving us genuine knowledge of how the local market actually works. We work hands-on with businesses across Allahabad and the wider Uttar Pradesh region, offering in-person availability where it genuinely helps. For businesses looking to apply this same locally-grounded approach in other cities or markets, we adapt our method to the specific dynamics of your region, whether that's elsewhere in India or beyond. Whether you're a local startup finding your footing or an established business losing ground to nearby competitors, our approach starts with genuinely understanding your specific market, not applying a national template to it."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Advisory That Actually Knows Your Market?"
      ctaText="Whether you need help understanding the local competitive landscape, in-person strategy sessions grounded in how Prayagraj customers actually behave, or ongoing local advisory as your business grows, generic national advice was never going to get you there. Let's talk through your business and scope what local advisory would actually involve."
      ctaPrimaryText="Talk to a Local Business Advisor"
      ctaSecondaryText="Get Your Free Local Advisory Session"
    />
  );
}
