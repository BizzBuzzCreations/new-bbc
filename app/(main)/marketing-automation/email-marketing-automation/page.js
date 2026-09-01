import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Mail,
  ShoppingCart,
  Inbox,
  Layers,
  UserPlus,
  RefreshCw,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Email Marketing Automation Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides email marketing automation services that turn subscribers into customers across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/email-marketing-automation",
  },
};

const CAPABILITIES = [
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Abandoned Cart & Post-Purchase Emails",
    desc: "Ecommerce stores lose real revenue when abandoned carts and post-purchase moments have no automated follow-up. We provide abandoned cart email automation built to recover sales that would otherwise be lost.",
  },
  {
    icon: Inbox,
    title: "Businesses With an Email List That Isn't Being Used Well",
    desc: "A large email list sitting mostly unused represents real, wasted opportunity. We provide email marketing automation services that turn a dormant list into an active revenue channel.",
  },
  {
    icon: Layers,
    title: "SaaS Companies Needing Onboarding Email Sequences",
    desc: "New SaaS users who don't get properly onboarded often churn before seeing real product value. We build onboarding sequences that guide new users toward genuine product adoption automatically.",
  },
  {
    icon: UserPlus,
    title: "Businesses Needing Welcome & Nurture Sequences for New Leads",
    desc: "New leads that don't receive prompt, structured follow-up often go cold quickly. We provide welcome email sequence services that keep new leads engaged from the first interaction.",
  },
  {
    icon: RefreshCw,
    title: "Companies Sending Manual, Inconsistent Email Campaigns",
    desc: "Manually sent campaigns are easy to delay or skip when things get busy, leading to inconsistent communication. We work as an email automation agency that keeps communication consistent without manual effort.",
  },
  {
    icon: Users,
    title: "Businesses Needing Segmented, Personalized Email Automation",
    desc: "Generic, one-size-fits-all emails perform worse than messages tailored to what a specific subscriber actually cares about. We provide email segmentation and automation that sends relevant content to the right audience.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Email Automation Strategy & Setup",
    desc: "The technical and strategic foundation your automation needs to actually work reliably from day one.",
    ctaText: "Know Our Services",
    services: [
      "Email Automation Strategy",
      "Email Platform Setup",
      "Automation Workflow Mapping",
      "List Import & Cleanup",
      "Email Deliverability Setup",
      "Automation Trigger Planning",
      "Email Compliance Setup",
      "Automation Tool Selection",
    ],
  },
  {
    number: "02",
    title: "Drip & Nurture Sequences",
    desc: "Sequences that guide subscribers through a genuine relationship with your brand, not a single blast of content.",
    ctaText: "Know Our Services",
    services: [
      "Welcome Email Sequences",
      "Lead Nurture Drip Campaigns",
      "Onboarding Email Sequences",
      "Re-Engagement Campaigns",
      "Post-Purchase Follow-Up Sequences",
      "Educational Email Series",
      "Milestone-Based Email Triggers",
      "Sequence Performance Testing",
    ],
  },
  {
    number: "03",
    title: "Ecommerce Email Automation",
    desc: "Automation built specifically around ecommerce moments that directly affect revenue.",
    ctaText: "Know Our Services",
    services: [
      "Abandoned Cart Email Automation",
      "Browse Abandonment Emails",
      "Post-Purchase Email Flows",
      "Product Recommendation Emails",
      "Win-Back Campaigns",
      "Order & Shipping Update Emails",
      "Review Request Automation",
      "Seasonal Campaign Automation",
    ],
  },
  {
    number: "04",
    title: "Segmentation & Personalization",
    desc: "Messages built around who a subscriber actually is, not the same content sent to everyone.",
    ctaText: "Know Our Services",
    services: [
      "Audience Segmentation Setup",
      "Behavioral Trigger Automation",
      "Personalized Content Blocks",
      "Dynamic Email Content",
      "Lead Scoring Integration",
      "Segment-Based Campaign Planning",
      "Preference Center Setup",
      "Segmentation Performance Analysis",
    ],
  },
  {
    number: "05",
    title: "Campaign Design & Copywriting",
    desc: "Emails that look and read well, since even perfect automation fails behind poor design and copy.",
    ctaText: "Know Our Services",
    services: [
      "Email Template Design",
      "Email Copywriting",
      "Subject Line Testing",
      "Mobile-Responsive Email Design",
      "Brand-Consistent Email Design",
      "CTA Optimization",
      "A/B Testing Campaigns",
      "Campaign Calendar Planning",
    ],
  },
  {
    number: "06",
    title: "Email Analytics & Optimization",
    desc: "Ongoing tracking that shows what's actually driving revenue, not just what's getting opened.",
    ctaText: "Know Our Services",
    services: [
      "Email Performance Analytics",
      "Open & Click Rate Optimization",
      "Conversion Tracking",
      "Deliverability Monitoring",
      "Monthly Performance Reports",
      "List Health Monitoring",
      "Automation Flow Optimization",
      "Ongoing Strategy Refinement",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "List & Business Discovery",
    desc: "We start by understanding your current email list, business goals, and existing email performance, identifying the real opportunity for automation.",
  },
  {
    number: "02",
    title: "Automation Strategy & Mapping",
    desc: "We map out the specific automation sequences and triggers that make sense for your business, from welcome flows to post-purchase follow-up.",
  },
  {
    number: "03",
    title: "Sequence & Campaign Development",
    desc: "We build out the email content, design, and copy for each sequence according to the strategy.",
  },
  {
    number: "04",
    title: "Setup & Integration",
    desc: "We configure the automation platform and integrate it with your website, ecommerce store, or CRM as needed.",
  },
  {
    number: "05",
    title: "Launch & Initial Testing",
    desc: "Sequences launch with close monitoring in the early weeks, testing subject lines and content variations to identify what's resonating.",
  },
  {
    number: "06",
    title: "Ongoing Optimization & Reporting",
    desc: "We provide regular reporting on performance and continue refining sequences based on real subscriber behavior.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Email Automation Built Around Revenue, Not Just Opens",
    desc: "We design sequences with actual conversion in mind, sales, sign-ups, repeat purchases, rather than optimizing purely for open rates that don't reflect genuine business impact.",
  },
  {
    number: "02",
    title: "Ecommerce Flows That Actually Recover Lost Sales",
    desc: "Our abandoned cart and post-purchase automation is built specifically around ecommerce buying behavior, recovering sales that a generic email approach would simply miss.",
  },
  {
    number: "03",
    title: "Segmentation That Sends the Right Message to the Right Person",
    desc: "We build genuine segmentation based on behavior and interest, so subscribers receive content actually relevant to them, rather than the same blast everyone else gets.",
  },
  {
    number: "04",
    title: "Copy and Design That Doesn't Look or Read Like Spam",
    desc: "We write and design emails that feel genuinely useful and on-brand, avoiding the generic, promotional tone that gets automated emails ignored or unsubscribed.",
  },
  {
    number: "05",
    title: "Continuous Testing Instead of Set-and-Forget Sequences",
    desc: "We test subject lines, content, and timing continuously, refining sequences based on real performance rather than launching automation once and leaving it unchanged indefinitely.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Revenue Generated, Not Just Open Rates",
    desc: "You see clear reporting tied to actual revenue and conversions where trackable, giving you real evidence of automation's value, not just vanity engagement metrics.",
  },
];

const FAQS = [
  {
    question: "How much does email marketing automation cost in India?",
    answer:
      "Cost depends on scope, a single welcome sequence costs less than a full ecommerce automation suite covering abandoned cart, post-purchase, and win-back flows. We scope pricing after understanding your specific requirements, rather than offering a flat rate upfront.",
  },
  {
    question: "Which email platform do you use, or can you work with ours?",
    answer:
      "We work with major email marketing platforms and can set up automation within whichever platform you're already using, or recommend one if you haven't chosen yet, based on your specific needs.",
  },
  {
    question: "Can automation recover abandoned cart sales for our store?",
    answer:
      "Yes, abandoned cart email automation is one of our most requested services, since it typically recovers a meaningful share of otherwise lost sales with relatively straightforward setup.",
  },
  {
    question: "How long does it take to set up email automation?",
    answer:
      "Timeline depends on scope, a single sequence can take a couple of weeks, while a full suite of ecommerce automation flows typically takes longer to build and test properly.",
  },
  {
    question: "Will our emails end up in spam if we automate them?",
    answer:
      "Not if set up correctly, we configure proper authentication and deliverability settings as part of setup, and monitor deliverability ongoing to catch issues before they affect your sender reputation.",
  },
  {
    question: "Do you write the email copy, or do we need to provide it?",
    answer:
      "We handle copywriting as part of our service, though we're happy to incorporate your existing brand voice, content, or drafts if you already have material you'd like used.",
  },
];

export default function EmailMarketingAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="Marketing Automation"
      label="Email Marketing Automation"
      icon={Mail}
      description="Email marketing automation is built to nurture and convert automatically, not just send newsletters, and engineered to work while you focus elsewhere."
      heroTitle="Get Emails That Sell While You Sleep"
      heroDescription="Email marketing automation is built to nurture and convert automatically, not just send newsletters, and engineered to work while you focus elsewhere."
      heroCtaText="Get a Free Email Automation Audit"
      capabilitiesHeading="Built for Businesses Sending Emails That Nobody Opens"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Subscriber and a Repeat Customer"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Their Email Automation"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Email List Into a Sales Channel"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Email Automation Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every email automation project, with the same attention to deliverability whether a client is nearby or across the world. We provide email marketing automation services for businesses across India, built around each business's specific list and customer journey. For businesses looking for an email automation agency beyond India, we support clients worldwide remotely, delivering the same automated email marketing services standard of work regardless of time zone. Whether you're an e-commerce store in Prayagraj or a SaaS company anywhere else needing onboarding sequences, our approach starts with the same question: where is your current email approach actually leaving revenue on the table."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Emails That Actually Sell?"
      ctaText="Whether your email list sits mostly unused, you're losing sales to abandoned carts, or new leads go cold without proper follow-up, manual, inconsistent emails were never going to fix that. Let's audit your current setup and scope what real email automation would actually involve."
      ctaPrimaryText="Talk to an Email Automation Specialist"
      ctaSecondaryText="Get Your Free Email Automation Audit"
    />
  );
}
