import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Linkedin,
  Target,
  Building2,
  User,
  RefreshCw,
  BarChart3,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "LinkedIn Marketing Agency for B2B | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a LinkedIn marketing agency generating qualified B2B leads for businesses across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/linkedin-marketing-b2b-growth",
  },
};

const CAPABILITIES = [
  {
    icon: Target,
    title: "B2B Companies Needing Qualified Leads",
    desc: "B2B companies need leads that turn into actual sales conversations, not just page followers with no buying intent. We provide b2b linkedin lead generation agency services built around reaching people who are actually in a position to buy.",
  },
  {
    icon: Building2,
    title: "SaaS & Tech Companies Building Category Authority",
    desc: "SaaS companies need to be seen as credible experts before a prospect ever books a demo. We build linkedin marketing services for b2b that position your company as a category authority through consistent, substantive content.",
  },
  {
    icon: User,
    title: "Founders & Executives Building a Personal Brand",
    desc: "Buyers increasingly trust individual voices over company pages, making founder visibility a genuine B2B growth lever. We manage executive LinkedIn presence as part of our linkedin growth agency work, building trust before the first sales call.",
  },
  {
    icon: RefreshCw,
    title: "Companies With an Inactive or Underused LinkedIn Page",
    desc: "Many B2B companies have a LinkedIn page that's been dormant for months, quietly signaling inactivity to visiting prospects. We revive underused pages with a real content strategy, not just a burst of posts before going quiet again.",
  },
  {
    icon: BarChart3,
    title: "Businesses Needing LinkedIn Ads for B2B",
    desc: "Organic reach alone often isn't enough to reach specific job titles or industries at scale. We provide linkedin ads management services targeted precisely at the roles and companies most likely to actually convert.",
  },
  {
    icon: Handshake,
    title: "Agencies & Consultancies Needing LinkedIn-Led Growth",
    desc: "Agencies and consultancies often rely on referrals alone, missing the compounding effect of consistent LinkedIn visibility. We work as a b2b social media marketing agency helping these businesses build a second, scalable growth channel.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "LinkedIn Strategy & Company Page Management",
    desc: "A clear strategy behind your company page, built around your specific buyers and sales cycle.",
    ctaText: "Know Our Services",
    services: [
      "LinkedIn Strategy Development",
      "Company Page Setup & Optimization",
      "Content Calendar Planning",
      "Audience Research",
      "Competitor Analysis",
      "Posting Schedule Management",
      "Page Growth Strategy",
      "Brand Voice Development",
    ],
  },
  {
    number: "02",
    title: "B2B Content Marketing on LinkedIn",
    desc: "Content built to position your company as a credible authority, not just an active poster.",
    ctaText: "Know Our Services",
    services: [
      "LinkedIn Content Creation",
      "Thought Leadership Content",
      "Case Study Content",
      "Industry Insight Posts",
      "Carousel & Document Posts",
      "LinkedIn Article Writing",
      "Video Content for LinkedIn",
      "Content Performance Optimization",
    ],
  },
  {
    number: "03",
    title: "LinkedIn Ads Management",
    desc: "Precisely targeted campaigns reaching the specific roles and industries most likely to actually convert.",
    ctaText: "Know Our Services",
    services: [
      "LinkedIn Ads Management",
      "Sponsored Content Campaigns",
      "LinkedIn Lead Gen Forms",
      "Message Ads Campaigns",
      "Audience Targeting",
      "Ad Creative Development",
      "Budget Optimization",
      "Conversion Tracking",
    ],
  },
  {
    number: "04",
    title: "LinkedIn Lead Generation & Outreach",
    desc: "Direct outreach and lead generation campaigns focused on quality conversations, not spray-and-pray connection requests.",
    ctaText: "Know Our Services",
    services: [
      "B2B Lead Generation Campaigns",
      "LinkedIn Outreach Services",
      "Connection Request Strategy",
      "InMail Campaign Management",
      "Lead Qualification",
      "CRM Integration for Leads",
      "Sales Navigator Strategy",
      "Follow-Up Sequence Design",
    ],
  },
  {
    number: "05",
    title: "Executive & Founder Personal Branding",
    desc: "Personal brand management for founders and executives, building trust with buyers before the first sales call.",
    ctaText: "Know Our Services",
    services: [
      "Executive Personal Branding",
      "Founder LinkedIn Profile Optimization",
      "Thought Leadership Positioning",
      "Personal Content Strategy",
      "Ghostwriting for Executives",
      "Engagement & Networking Support",
      "Speaking & Visibility Positioning",
      "Personal Brand Analytics",
    ],
  },
  {
    number: "06",
    title: "LinkedIn Analytics & Reporting",
    desc: "Clear reporting on lead quality and engagement, not just follower growth or impressions.",
    ctaText: "Know Our Services",
    services: [
      "LinkedIn Performance Analytics",
      "Lead Quality Reporting",
      "Engagement Rate Tracking",
      "Follower Growth Analysis",
      "Campaign ROI Reporting",
      "Monthly Strategy Reviews",
      "Competitor Benchmarking",
      "Content Performance Analysis",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Business & Audience Discovery",
    desc: "We start by understanding your business, ideal customer profile, and sales cycle, identifying which roles and industries LinkedIn efforts should actually target.",
  },
  {
    number: "02",
    title: "LinkedIn Strategy & Positioning",
    desc: "We define content pillars, positioning, and outreach strategy aligned with how your specific buyers research and make decisions.",
  },
  {
    number: "03",
    title: "Content & Campaign Development",
    desc: "We build content, ad creative, and outreach messaging according to the strategy, positioning your company and any relevant executives as credible authorities.",
  },
  {
    number: "04",
    title: "Outreach & Ads Launch",
    desc: "We launch content publishing, outreach campaigns, and any agreed LinkedIn ads, tracking engagement and response from the start.",
  },
  {
    number: "05",
    title: "Lead Qualification & Follow-Up",
    desc: "We qualify incoming leads and manage follow-up sequences, ensuring conversations move toward genuine sales opportunities rather than stalling.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Optimization",
    desc: "We report on lead quality and engagement regularly, refining targeting and messaging based on what's actually generating results.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "LinkedIn Marketing Built for B2B Buying Behavior",
    desc: "We understand that B2B purchase decisions take longer and involve multiple stakeholders, and build content and outreach strategy around that reality, rather than applying consumer social media tactics that don't fit how B2B buyers actually decide.",
  },
  {
    number: "02",
    title: "Content That Positions You as Category Authority, Not Just Active",
    desc: "Our content strategy focuses on substantive insight and thought leadership, not generic engagement bait, because B2B buyers trust companies that demonstrate genuine expertise over accounts that simply post frequently.",
  },
  {
    number: "03",
    title: "Lead Generation Focused on Qualified Decision-Makers",
    desc: "Our outreach and lead generation campaigns target specific roles and industries relevant to your business, so you're having conversations with people who can actually make a purchasing decision, not just anyone willing to connect.",
  },
  {
    number: "04",
    title: "Executive Branding That Builds Trust Before the First Call",
    desc: "We help founders and executives build a credible LinkedIn presence, since buyers increasingly research individual leadership before ever contacting a company, making personal branding a genuine part of the B2B sales funnel.",
  },
  {
    number: "05",
    title: "Ads Targeted at Actual Buyers, Not Broad Reach",
    desc: "LinkedIn ad targeting lets us reach specific job titles, industries, and company sizes precisely, and we use that capability fully rather than running broad campaigns that waste budget on irrelevant audiences.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Lead Quality, Not Just Volume",
    desc: "We report on the quality of leads generated, not just the quantity, since a smaller number of genuinely qualified B2B leads is worth more than a large number of unqualified form fills.",
  },
];

const FAQS = [
  {
    question: "How much does LinkedIn marketing cost for B2B companies in India?",
    answer:
      "Cost depends on scope, organic content management alone costs less than a package including outreach, ads, and executive personal branding. We scope pricing after understanding your specific goals, target audience, and sales cycle, rather than offering a flat rate upfront.",
  },
  {
    question: "How is LinkedIn marketing different from Facebook or Instagram marketing?",
    answer:
      "LinkedIn audiences engage in a more professional, research-driven mindset, making thought leadership and credibility more important than the visual, entertainment-focused content that works on Facebook or Instagram. Strategy, tone, and content format all differ significantly between the platforms.",
  },
  {
    question: "Can you help generate leads through LinkedIn outreach, not just ads?",
    answer:
      "Yes, direct outreach through connection requests and personalized messaging is a core part of our lead generation approach, often producing higher-quality conversations than ads alone. We combine outreach with content strategy so prospects recognize your brand before you reach out.",
  },
  {
    question: "Do you build personal LinkedIn brands for founders and executives?",
    answer:
      "Yes, executive personal branding is one of our core services, since B2B buyers increasingly research individual leaders before engaging with a company. We help position founders and executives as credible voices in their specific industry through consistent content.",
  },
  {
    question: "How long does it take to see results from LinkedIn marketing?",
    answer:
      "B2B sales cycles are typically longer than consumer purchases, so meaningful lead flow often takes a few months to build, though engagement and visibility improvements can appear sooner. We set realistic expectations during onboarding based on your specific industry and sales cycle.",
  },
  {
    question: "Can you manage LinkedIn ads for a small B2B budget?",
    answer:
      "Yes, we scope LinkedIn ad campaigns to fit realistic budgets, focusing spend on the most relevant audience segments rather than broad targeting that wastes a smaller budget. We're transparent about what results a given budget can realistically deliver.",
  },
];

export default function LinkedinMarketingB2bGrowth() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="LinkedIn Marketing for B2B Growth"
      icon={Linkedin}
      description="LinkedIn marketing built to reach real decision-makers, not just grow page followers, engineered around B2B buying behavior."
      heroTitle="Get Qualified B2B Leads From LinkedIn, Not Just Impressions"
      heroDescription="LinkedIn marketing built to reach real decision-makers, not just grow page followers, engineered around B2B buying behavior."
      heroCtaText="Get a Free LinkedIn Strategy Consultation"
      capabilitiesHeading="Built for B2B Brands That Need Decision-Makers, Not Just Views"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a LinkedIn Post and a Qualified Lead"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why B2B Brands Trust Us With LinkedIn"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn LinkedIn Into a B2B Lead Channel"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running B2B LinkedIn Campaigns Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every LinkedIn account, with the same attention to lead quality whether a client is nearby or across the world. We work as a linkedin marketing agency for B2B companies across India, providing b2b linkedin lead generation agency support built around each business's specific buyers and sales cycle. For companies looking for linkedin marketing services for b2b beyond India, we support clients worldwide remotely, delivering the same linkedin growth agency standard of work regardless of time zone. Whether you're a SaaS company in Prayagraj or a consultancy anywhere else building B2B visibility, our approach starts with the same question: who actually makes the buying decision, and how do they research it."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for LinkedIn That Actually Generates B2B Leads?"
      ctaText="Whether your company page has gone quiet, your outreach isn't converting, or you simply haven't started using LinkedIn strategically yet, impressions alone were never going to bring in qualified B2B leads. Let's talk through your sales cycle and scope what a real LinkedIn strategy would actually involve."
      ctaPrimaryText="Talk to a LinkedIn Marketing Specialist"
      ctaSecondaryText="Get Your Free LinkedIn Strategy Consultation"
    />
  );
}
