import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  TrendingUp,
  Store,
  Building2,
  Handshake,
  Building,
  User,
  CalendarClock,
} from "lucide-react";

export const metadata = {
  title: "Social Media Management Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations offers social media management services that grow your brand consistently across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/social-media-management-services",
  },
};

const CAPABILITIES = [
  {
    icon: Store,
    title: "Small Businesses Needing a Consistent Social Presence",
    desc: "Small businesses often post inconsistently, going quiet for weeks before a sudden burst of activity that confuses followers. We provide social media management services built around a real, sustainable posting cadence, not sporadic effort when time allows.",
  },
  {
    icon: Building2,
    title: "Brands Currently Managing Social Media In-House",
    desc: "In-house social media often falls to whoever has time, resulting in inconsistent quality and strategy. We work as a social media management company that takes this off your plate, applying dedicated strategy instead of leftover attention.",
  },
  {
    icon: Handshake,
    title: "Businesses Outsourcing Social Media for the First Time",
    desc: "First-time outsourcing can feel risky without knowing what to expect from an agency relationship. We provide clear onboarding and reporting as part of outsource social media management, so you always know what's being done and why.",
  },
  {
    icon: Building,
    title: "Multi-Location Businesses Needing Coordinated Posting",
    desc: "Businesses with multiple locations struggle to keep messaging consistent while still reflecting each location's local relevance. We coordinate content across locations while allowing for local flexibility, keeping brand voice consistent without making every post identical.",
  },
  {
    icon: User,
    title: "Personal Brands & Founders Needing Visibility",
    desc: "Founders and personal brands need consistent content to build visibility, but rarely have time to plan and post it themselves. We manage the full social media presence, keeping the founder's voice intact without demanding their daily attention.",
  },
  {
    icon: CalendarClock,
    title: "Businesses Needing Monthly, Ongoing Management",
    desc: "Some businesses need consistent monthly management, not a one-off campaign that stops after a few weeks. We provide monthly social media management packages built for ongoing presence, not a short-term project with no follow-through.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Social Media Strategy & Planning",
    desc: "A clear strategy behind every post, built around your actual audience and goals, not a generic content template.",
    ctaText: "Know Our Services",
    services: [
      "Social Media Strategy Development",
      "Content Calendar Planning",
      "Audience Research",
      "Competitor Analysis",
      "Platform Selection Strategy",
      "Brand Voice Development",
      "Campaign Planning",
      "Goal & KPI Setting",
    ],
  },
  {
    number: "02",
    title: "Content Creation & Scheduling",
    desc: "Consistent, brand-aligned content creation and scheduling, so your feed stays active without demanding your daily involvement.",
    ctaText: "Know Our Services",
    services: [
      "Social Media Content Creation",
      "Graphic Design for Social Posts",
      "Caption Writing",
      "Post Scheduling",
      "Content Calendar Management",
      "Seasonal & Festive Content",
      "Brand-Consistent Visual Content",
      "Content Approval Workflows",
    ],
  },
  {
    number: "03",
    title: "Community Management & Engagement",
    desc: "Active community management that responds to your audience and protects your brand's reputation in real time.",
    ctaText: "Know Our Services",
    services: [
      "Community Management",
      "Comment & DM Response",
      "Engagement Monitoring",
      "Follower Growth Support",
      "Crisis & Negative Comment Handling",
      "User-Generated Content Curation",
      "Hashtag Strategy",
      "Audience Interaction Campaigns",
    ],
  },
  {
    number: "04",
    title: "Social Media Analytics & Reporting",
    desc: "Clear reporting on what's actually working, so decisions are based on real performance, not guesswork.",
    ctaText: "Know Our Services",
    services: [
      "Performance Analytics",
      "Monthly Reporting",
      "Engagement Rate Tracking",
      "Follower Growth Tracking",
      "Content Performance Analysis",
      "Competitor Benchmarking",
      "ROI Reporting",
      "Strategy Adjustment Based on Data",
    ],
  },
  {
    number: "05",
    title: "Platform-Specific Management",
    desc: "Coordinated management across every platform that matters for your brand, each handled the way that platform actually works.",
    ctaText: "Know Our Services",
    services: [
      "Instagram Management",
      "Facebook Page Management",
      "LinkedIn Page Management",
      "Twitter/X Management",
      "YouTube Channel Management",
      "Pinterest Management",
      "Multi-Platform Coordination",
      "Platform-Specific Content Formatting",
    ],
  },
  {
    number: "06",
    title: "Monthly Social Media Packages & Support",
    desc: "Ongoing monthly social media management packages built for ongoing consistency, not a short-lived project.",
    ctaText: "Know Our Services",
    services: [
      "Monthly Social Media Management Packages",
      "Dedicated Account Management",
      "Priority Support",
      "Flexible Package Upgrades",
      "Ad-Hoc Campaign Support",
      "Onboarding & Brand Audit",
      "Ongoing Strategy Reviews",
      "Content Bank & Backup Planning",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Brand & Audience Discovery",
    desc: "We start by understanding your brand, audience, and current social media performance, identifying what's working, what isn't, and where the real opportunity is.",
  },
  {
    number: "02",
    title: "Strategy & Content Calendar Planning",
    desc: "We build a content strategy and calendar aligned with your goals, covering what to post, when, and on which platforms.",
  },
  {
    number: "03",
    title: "Content Creation & Design",
    desc: "We create content, posts, graphics, captions, and video, aligned with your brand voice and the strategy already agreed on.",
  },
  {
    number: "04",
    title: "Scheduling & Community Management",
    desc: "We schedule content consistently and manage community engagement, responding to comments and messages as they come in.",
  },
  {
    number: "05",
    title: "Performance Tracking & Reporting",
    desc: "We track performance against your goals and provide clear monthly reporting on growth, engagement, and content results.",
  },
  {
    number: "06",
    title: "Ongoing Optimization & Scaling",
    desc: "We refine strategy based on what's actually performing, scaling what works and adjusting what isn't delivering results.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Social Media Management Built Around Growth, Not Just Posting",
    desc: "We treat every post as part of a larger strategy toward actual growth, followers, engagement, and enquiries, rather than treating consistent posting alone as the goal. This means your social media works toward real business outcomes.",
  },
  {
    number: "02",
    title: "Consistent Content Without the Consistency Falling on You",
    desc: "Once you hand off social media management, it stays consistent regardless of how busy your team gets internally, since it's no longer dependent on someone finding spare time between other responsibilities.",
  },
  {
    number: "03",
    title: "Strategy That Adapts Based on Real Performance Data",
    desc: "We review what's actually resonating with your audience and adjust content strategy accordingly, rather than sticking rigidly to an initial plan regardless of how it performs in practice.",
  },
  {
    number: "04",
    title: "Community Management That Protects Your Brand's Reputation",
    desc: "We monitor and respond to comments and messages actively, catching issues early and handling them appropriately, so your brand's online reputation stays protected rather than left unmanaged.",
  },
  {
    number: "05",
    title: "Multi-Platform Coordination From One Team",
    desc: "Managing Instagram, Facebook, LinkedIn, and other platforms through one coordinated team keeps your brand voice consistent everywhere, instead of fragmenting across different people or agencies handling each platform separately.",
  },
  {
    number: "06",
    title: "Transparent Monthly Reporting on What's Actually Working",
    desc: "You receive clear monthly reporting on growth, engagement, and content performance, so you always know exactly what outsource social media management is actually delivering for your business.",
  },
];

const FAQS = [
  {
    question: "How much do social media management services cost in India?",
    answer:
      "Cost depends on scope, platforms managed, and content volume, a single-platform package costs less than full multi-platform management with video content. We scope pricing after understanding your specific requirements and goals, rather than offering a flat rate upfront for something this variable.",
  },
  {
    question: "What's included in monthly social media management packages?",
    answer:
      "Monthly packages typically include content creation, scheduling, community management, and monthly reporting, with the exact scope depending on your plan. We can adjust the package based on how many platforms you need managed and how actively your audience needs engagement.",
  },
  {
    question: "Can you manage multiple platforms at once?",
    answer:
      "Yes, managing Instagram, Facebook, LinkedIn, and other platforms simultaneously is a core part of what we do, coordinated through one team to keep your brand voice consistent everywhere rather than fragmented across separate management for each platform.",
  },
  {
    question: "Do you create the content, or do we need to provide it?",
    answer:
      "We handle content creation as part of our service, including graphics, captions, and video, though we're also happy to incorporate content or assets you already have. Most clients prefer we handle the full process rather than supplying raw material themselves.",
  },
  {
    question: "How do you measure whether social media management is actually working?",
    answer:
      "We track engagement rate, follower growth, content performance, and where relevant, enquiries or leads generated, reporting on these clearly each month. This gives you a real picture of impact rather than vanity metrics that don't reflect actual business results.",
  },
  {
    question: "Can you take over social media management from our in-house team?",
    answer:
      "Yes, we regularly take over accounts previously managed in-house, starting with a brand and content audit to understand what's already been done before building a forward strategy, so the transition happens smoothly without losing existing audience trust.",
  },
];

export default function SocialMediaManagementServices() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="Social Media Management Services"
      icon={TrendingUp}
      description="Social media management built to grow your audience and generate enquiries, not just fill a content calendar, backed by real strategy."
      heroTitle="Get a Social Media Presence Built to Grow, Not Just Post"
      heroDescription="Social media management built to grow your audience and generate enquiries, not just fill a content calendar, backed by real strategy."
      heroCtaText="Get a Free Social Media Audit"
      capabilitiesHeading="Built for Brands Tired of Posting Into the Void"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Content Calendar and Real Growth"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Brands Trust Us With Their Social Media"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Posting Into an Actual Strategy"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Managing Social Media Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every social media account, with the same consistency whether a client is nearby or across the world. We work as a social media management company for businesses across India, providing monthly social media management packages built around each brand's actual audience and goals. For businesses looking to outsource social media management beyond India, we support clients worldwide remotely, delivering the same best social media management agency standard of work regardless of time zone. Whether you're a small business in Prayagraj building your first real presence or a brand anywhere else scaling across platforms, our approach starts with the same question: what does your audience actually want to see from you."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Social Media That Actually Grows Your Business?"
      ctaText="Whether your social media has gone quiet, feels inconsistent, or simply isn't translating into real business results, posting alone was never going to fix that. Let's audit your current presence and scope what a proper social media management strategy would actually involve."
      ctaPrimaryText="Talk to a Social Media Specialist"
      ctaSecondaryText="Get Your Free Social Media Audit"
    />
  );
}
