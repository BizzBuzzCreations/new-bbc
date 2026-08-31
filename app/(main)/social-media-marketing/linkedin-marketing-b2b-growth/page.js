import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Linkedin,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "LinkedIn Marketing for B2B Growth | BizzBuzz Creations",
  description:
    "LinkedIn marketing for B2B growth in India — connect with decision-makers, build industry authority, and turn LinkedIn into a steady lead source, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/linkedin-marketing-b2b-growth",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "B2B Startups & Early-Stage Companies",
    desc: "B2B startups need to reach decision-makers without an existing brand or network to lean on. We build LinkedIn presence and outreach early, so startups start conversations with the right people from day one.",
  },
  {
    icon: Building2,
    title: "Small & Medium B2B Businesses",
    desc: "SMBs often have a LinkedIn page that sits idle without any real lead generation strategy behind it. We build LinkedIn marketing sized for SMB budgets, focused on converting connections into genuine pipeline.",
  },
  {
    icon: Building,
    title: "Enterprises & Multi-Team Organizations",
    desc: "Enterprises need consistent thought leadership and lead generation across multiple teams and product lines. We run LinkedIn marketing at enterprise scale, coordinating company pages and executive presence together.",
  },
  {
    icon: ShoppingCart,
    title: "B2B SaaS & Service Providers",
    desc: "SaaS and service companies need LinkedIn to actually shorten their sales cycle, not just build vague brand awareness. We build content and outreach strategies tied directly to demo requests and qualified conversations.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a LinkedIn Fulfillment Partner",
    desc: "Agencies managing B2B clients need specialist LinkedIn execution without building that expertise internally. We work as a white-label LinkedIn partner, handling strategy and content agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Companies With an Inactive Company Page",
    desc: "Companies with a LinkedIn page that hasn't been touched in months are losing credibility with prospects who check it. We rebuild inactive pages into an active source of authority and inbound interest.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Company Page Optimization",
    desc: "Your LinkedIn company page optimized to clearly communicate what you do and why decision-makers should pay attention.",
    ctaText: "Know Our Services",
    services: [
      "Company Page Setup & Optimization",
      "Page Positioning & Messaging",
      "Showcase Page Strategy",
      "Page Content Calendar",
      "Employee Tagging Strategy",
      "Page Analytics Review",
      "Visual Branding for LinkedIn",
      "Page Growth Strategy",
    ],
  },
  {
    number: "02",
    title: "Thought Leadership Content",
    desc: "Posts planned and written that position your leadership as genuine experts in your industry, not generic corporate updates.",
    ctaText: "Know Our Services",
    services: [
      "Thought Leadership Strategy",
      "Executive Ghostwriting",
      "Industry Insight Content",
      "Founder Personal Branding",
      "Content Series Planning",
      "Long-Form Post Development",
      "Comment Engagement Strategy",
      "Content Performance Tracking",
    ],
  },
  {
    number: "03",
    title: "Decision-Maker Targeting",
    desc: "Content and outreach aimed at the specific job titles and industries most likely to become real B2B customers.",
    ctaText: "Know Our Services",
    services: [
      "ICP & Decision-Maker Mapping",
      "Job Title & Industry Targeting",
      "Sales Navigator Strategy",
      "Account-Based Targeting",
      "Persona-Based Content Planning",
      "Targeted Outreach Lists",
      "Connection Request Strategy",
      "Audience Segmentation",
    ],
  },
  {
    number: "04",
    title: "LinkedIn Ads for Lead Generation",
    desc: "LinkedIn ad campaigns built specifically for B2B lead generation, tracked against real pipeline impact.",
    ctaText: "Know Our Services",
    services: [
      "LinkedIn Ad Campaign Setup",
      "Sponsored Content Ads",
      "Lead Gen Form Ads",
      "InMail Campaign Setup",
      "B2B Audience Targeting",
      "Ad Budget Management",
      "Conversion Tracking Setup",
      "Ad Performance Reporting",
    ],
  },
  {
    number: "05",
    title: "Employee Advocacy & Networking",
    desc: "Your team supported in extending organic reach by sharing and engaging with company content on their own profiles.",
    ctaText: "Know Our Services",
    services: [
      "Employee Advocacy Programs",
      "Team Profile Optimization",
      "Shareable Content Kits",
      "Networking Outreach Support",
      "Internal Engagement Guidelines",
      "Executive Networking Strategy",
      "Employee Content Amplification",
      "Advocacy Performance Tracking",
    ],
  },
  {
    number: "06",
    title: "Pipeline & Lead Tracking",
    desc: "Actual leads and connections generated measured, not just impressions, so LinkedIn's ROI is clear to you.",
    ctaText: "Know Our Services",
    services: [
      "Lead Tracking Setup",
      "Pipeline Attribution Reporting",
      "Connection-to-Lead Tracking",
      "CRM Integration for LinkedIn Leads",
      "Monthly Pipeline Reports",
      "Campaign ROI Reporting",
      "Conversation-to-Meeting Tracking",
      "Ongoing Reporting Reviews",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "B2B Audience & Goal Mapping",
    desc: "We identify the exact decision-makers and industries you want to reach before planning a single post or ad.",
  },
  {
    number: "02",
    title: "Profile & Content Strategy",
    desc: "We optimize your company page and plan thought leadership content that builds credibility with your target audience.",
  },
  {
    number: "03",
    title: "Content Production & Approval",
    desc: "Thought leadership posts and company content get drafted and shared for review before anything goes live.",
  },
  {
    number: "04",
    title: "Content & Ad Launch",
    desc: "Posts and LinkedIn ad campaigns go live together, aimed at generating genuine B2B leads, not just visibility.",
  },
  {
    number: "05",
    title: "Track Pipeline & Refine",
    desc: "We track leads and connections generated, refining targeting and content based on what's actually building pipeline.",
  },
  {
    number: "06",
    title: "Monthly Pipeline Review",
    desc: "We review pipeline impact each month with your team, adjusting content and targeting based on real sales feedback.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Built for B2B Lead Generation",
    desc: "Every strategy is designed around generating real business leads, not just LinkedIn engagement for its own sake.",
  },
  {
    number: "02",
    title: "Decision-Maker Focused",
    desc: "Content and targeting are aimed at the specific roles and industries that actually make purchasing decisions.",
  },
  {
    number: "03",
    title: "Thought Leadership Positioning",
    desc: "We help build genuine authority for your leadership team, which drives trust with B2B buyers earlier in the sales process.",
  },
  {
    number: "04",
    title: "Pipeline-Tracked Results",
    desc: "We measure leads and connections generated, giving you a clear picture of LinkedIn's actual business impact.",
  },
  {
    number: "05",
    title: "Coordinated Organic & Paid",
    desc: "Organic content and LinkedIn ads work together as one strategy, not disconnected efforts pulling in different directions.",
  },
  {
    number: "06",
    title: "Sales Team Feedback Built Into Strategy",
    desc: "We incorporate what your sales team hears from real conversations, keeping content grounded in actual buyer objections.",
  },
];

const FAQS = [
  {
    question: "Is LinkedIn marketing worth it for B2B businesses?",
    answer:
      "Yes, LinkedIn is one of the most effective platforms for reaching decision-makers directly, especially for B2B lead generation and industry authority building.",
  },
  {
    question: "How is LinkedIn marketing different from Instagram or Facebook?",
    answer:
      "LinkedIn content and targeting focus on professional decision-makers and B2B relationships, while Instagram and Facebook typically suit broader consumer engagement.",
  },
  {
    question: "Do you run LinkedIn ads as well as organic content?",
    answer:
      "Yes, we combine organic thought leadership content with targeted LinkedIn ad campaigns for a coordinated lead generation strategy.",
  },
  {
    question: "How long does it take to see B2B leads from LinkedIn?",
    answer:
      "Ads can generate initial leads within weeks, while organic thought leadership and authority-building typically takes a few months to compound.",
  },
  {
    question: "Can you help our leadership team build a personal presence too?",
    answer:
      "Yes, we can plan thought leadership content for founders or executives alongside your company page strategy.",
  },
];

export default function LinkedinMarketingB2bGrowth() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="LinkedIn Marketing for B2B Growth"
      icon={Linkedin}
      description="LinkedIn strategy built for B2B lead generation, connecting you with decision-makers and turning LinkedIn into a steady source of business leads."
      heroTitle="Get a LinkedIn Strategy Built to Generate Real B2B Pipeline"
      heroDescription="LinkedIn strategy built for B2B lead generation, connecting you with decision-makers and turning LinkedIn into a steady source of business leads."
      heroCtaText="Get a Free LinkedIn Marketing Consultation"
      capabilitiesHeading="Built for B2B Companies Ready to Reach Decision-Makers"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our LinkedIn Marketing"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="What Makes Our LinkedIn Marketing Different"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="Our LinkedIn Marketing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building B2B Pipeline Nationally"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every LinkedIn strategy, with the same discipline on decision-maker targeting whether a client is nearby or across the country. We run LinkedIn marketing for B2B startups, SMBs, and enterprises across India, sizing content and outreach to each business's actual sales cycle. Whether you're a B2B startup in Prayagraj starting your first thought leadership push or an enterprise coordinating multiple teams on LinkedIn, our approach starts with the same question: who exactly is the decision-maker you need to reach."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for LinkedIn to Actually Build Your Pipeline?"
      ctaText="Whether your company page has gone quiet, your leadership team wants genuine industry authority, or you need LinkedIn ads tied to real pipeline impact, occasional posting was never going to generate consistent B2B leads. Let's talk through your goals and scope what real LinkedIn marketing would actually involve."
      ctaPrimaryText="Talk to a LinkedIn Marketing Specialist"
      ctaSecondaryText="Get Your Free LinkedIn Marketing Consultation"
    />
  );
}
