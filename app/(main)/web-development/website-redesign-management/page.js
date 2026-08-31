import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  RefreshCw,
  Gauge,
  Building,
  Building2,
  ShoppingCart,
  Database,
  ArrowRightLeft,
} from "lucide-react";

export const metadata = {
  title: "Website Redesign & Management Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations offers website redesign and monthly management services that keep sites fast, modern and secure across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/website-redesign-management",
  },
};

const CAPABILITIES = [
  {
    icon: Gauge,
    title: "Businesses With an Outdated or Slow Website",
    desc: "An outdated website quietly loses visitors before they even see what you offer, through slow load times and dated design. We provide website redesign services focused on fixing what's actually driving people away, not just updating colors and fonts.",
  },
  {
    icon: Building,
    title: "Corporate Websites Needing a Professional Refresh",
    desc: "Corporate sites need a redesign that reflects the business's current position without losing the structure stakeholders and investors expect. We handle corporate website redesign agency projects that modernize design while respecting the formality a corporate audience needs.",
  },
  {
    icon: Building2,
    title: "Small Businesses Outgrowing Their DIY Website",
    desc: "DIY website builders work initially, but small businesses often outgrow them once they need more control or better performance. We provide website redesign company services that move businesses onto a more capable, professionally built foundation.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Stores Needing a Conversion-Focused Redesign",
    desc: "Ecommerce stores lose sales at every point of friction, from slow product pages to confusing checkout flows. We run website revamp services focused specifically on removing the friction that's currently costing your store real conversions.",
  },
  {
    icon: Database,
    title: "Businesses Needing Ongoing Website Management",
    desc: "A website needs continued attention after launch, updates, backups, monitoring, that most businesses don't have time to handle internally. We provide monthly website management services that keep your site running without requiring your ongoing attention.",
  },
  {
    icon: ArrowRightLeft,
    title: "Companies Migrating to a New Platform During Redesign",
    desc: "Some redesigns come with a platform change, moving off an outdated or unsupported system entirely. We handle website maintenance and management services alongside platform migration, so the redesign and the move happen as one coordinated project.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Website Redesign & Revamp",
    desc: "Website revamp services built around fixing what's actually underperforming, not just a fresh coat of visual paint.",
    ctaText: "Know Our Services",
    services: [
      "Full Website Redesign",
      "Website Revamp Services",
      "Homepage Redesign",
      "Visual Design Refresh",
      "Content Restructuring",
      "Responsive Redesign",
      "Brand-Aligned Redesign",
      "Redesign Strategy & Planning",
    ],
  },
  {
    number: "02",
    title: "Corporate Website Redesign",
    desc: "Corporate website redesign agency work that modernizes design while keeping the structure a corporate audience expects.",
    ctaText: "Know Our Services",
    services: [
      "Corporate Website Redesign",
      "Enterprise Website Refresh",
      "Multi-Page Site Redesign",
      "Investor & About Page Redesign",
      "Corporate Branding Alignment",
      "Executive-Level Design Review",
      "Compliance-Aware Redesign",
      "Corporate Content Restructuring",
    ],
  },
  {
    number: "03",
    title: "UX & Conversion-Focused Redesign",
    desc: "Redesign work centered on removing friction and guiding visitors toward the action your website actually needs them to take.",
    ctaText: "Know Our Services",
    services: [
      "UX Audit & Redesign",
      "Conversion Rate Optimization",
      "User Journey Redesign",
      "Call-to-Action Optimization",
      "Navigation Restructuring",
      "Mobile Experience Redesign",
      "A/B Testing Support",
      "Heatmap & Behavior Analysis",
    ],
  },
  {
    number: "04",
    title: "Website Migration During Redesign",
    desc: "Platform and hosting migration handled carefully alongside a redesign, so nothing gets lost in the transition.",
    ctaText: "Know Our Services",
    services: [
      "Platform Migration Services",
      "CMS Migration",
      "SEO-Safe Redesign Migration",
      "URL & Redirect Mapping",
      "Content Migration",
      "Data Migration",
      "Zero-Downtime Migration Planning",
      "Post-Migration Testing",
    ],
  },
  {
    number: "05",
    title: "Monthly Website Management",
    desc: "Monthly website management services that keep your site updated, backed up, and monitored without you having to think about it.",
    ctaText: "Know Our Services",
    services: [
      "Monthly Website Management Services",
      "Content Updates",
      "Regular Backups",
      "Uptime Monitoring",
      "Plugin & Software Updates",
      "Performance Monitoring",
      "Monthly Reporting",
      "Priority Support Access",
    ],
  },
  {
    number: "06",
    title: "Website Care, Security & Support",
    desc: "Website maintenance and management services that treat security and uptime as core, ongoing responsibilities.",
    ctaText: "Know Our Services",
    services: [
      "Website Maintenance Plans",
      "Security Monitoring & Patching",
      "Malware Scanning & Removal",
      "SSL & Domain Management",
      "Speed Optimization",
      "Bug Fixes",
      "Emergency Support",
      "Technical Documentation",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Website & Performance Audit",
    desc: "We start by auditing your current site's speed, design, content, and conversion points, identifying specifically what's underperforming and why before any redesign work begins.",
  },
  {
    number: "02",
    title: "Redesign Strategy & Planning",
    desc: "We build a redesign plan defining what changes, structure, content, platform, and what stays, prioritizing fixes based on what's actually affecting your visitors and conversions.",
  },
  {
    number: "03",
    title: "Design & Content Restructuring",
    desc: "We design the new site and restructure content around clearer navigation and stronger calls to action, creating a version you can review before development begins.",
  },
  {
    number: "04",
    title: "Development & Migration",
    desc: "We build the redesigned site and handle any platform migration required, working carefully to preserve existing SEO rankings and functionality throughout the process.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test the redesigned site thoroughly across devices and scenarios before launch, checking that redirects, forms, and functionality all work correctly.",
  },
  {
    number: "06",
    title: "Launch & Ongoing Management",
    desc: "We launch the redesigned site, then continue with monthly management, covering updates, backups, and monitoring so the site stays in good shape long-term.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Redesigns Built Around What's Actually Losing You Visitors",
    desc: "We start every redesign by identifying where your current site is actually losing people, slow pages, confusing navigation, weak calls to action, then fix those specific issues, rather than redesigning based on visual preference alone.",
  },
  {
    number: "02",
    title: "Corporate-Grade Redesign Standards at Every Size",
    desc: "Whether you're a small business or a corporate brand, we apply the same structured design and review process, giving smaller businesses the same professional standard that larger corporate redesigns typically receive.",
  },
  {
    number: "03",
    title: "Migration Handled Without Losing SEO Rankings",
    desc: "When a redesign includes a platform or hosting change, we handle redirects, metadata, and content migration carefully to protect your existing search rankings, rather than treating SEO as an afterthought once the new design is live.",
  },
  {
    number: "04",
    title: "Ongoing Management, Not a One-Time Handoff",
    desc: "A redesign is only the starting point, we offer monthly website management services so your site stays updated, secure, and monitored long after launch, instead of quietly falling out of date again within a year.",
  },
  {
    number: "05",
    title: "Security and Uptime Treated as Core Responsibilities",
    desc: "Our website maintenance and management services include regular security monitoring, backups, and uptime checks as standard, not as a premium add-on, because a redesigned site that goes down or gets compromised defeats the purpose of the investment.",
  },
  {
    number: "06",
    title: "Transparent Monthly Reporting on What's Actually Being Done",
    desc: "Clients on a management plan receive clear monthly reporting on updates, backups, and any issues addressed, so you always know what's happening with your site rather than paying for a service with no visibility into the work.",
  },
];

const FAQS = [
  {
    question: "How much does a website redesign cost in India?",
    answer:
      "Cost depends on scope, a visual refresh costs far less than a full redesign involving restructured content, new functionality, or a platform migration. We scope pricing after auditing your current site and understanding what specifically needs to change, rather than offering a flat rate upfront.",
  },
  {
    question: "Will a website redesign affect my SEO rankings?",
    answer:
      "It can, if redirects, metadata, and URLs aren't handled carefully during the process. We manage redesigns with SEO preservation as a specific priority, mapping old URLs to new ones and maintaining existing content structure where it's already ranking well, to protect your existing search visibility.",
  },
  {
    question: "What's included in monthly website management services?",
    answer:
      "Monthly website management typically includes content updates, regular backups, plugin and software updates, uptime monitoring, and monthly reporting on what's been done. The exact scope depends on your plan, and we can adjust it based on how actively your site needs ongoing attention.",
  },
  {
    question: "How do I know if my website actually needs a redesign?",
    answer:
      "Signs your site needs a redesign include slow load times, high bounce rates, an outdated look compared to competitors, or a design that doesn't work well on mobile. An audit is the clearest way to confirm whether a redesign or smaller fixes would address the actual problem.",
  },
  {
    question: "Can you redesign my website without changing the platform it's built on?",
    answer:
      "Yes, many redesigns happen entirely within your existing platform, refreshing design and structure without a migration. We only recommend a platform change when your current system is genuinely limiting what the redesign needs to achieve, not as a default part of every project.",
  },
  {
    question: "How long does a typical website redesign take?",
    answer:
      "Timeline depends on scope, a visual refresh can take a few weeks, while a full redesign with restructured content and a platform migration can take longer. We provide a specific timeline after the initial audit, once the actual scope of work is clear.",
  },
];

export default function WebsiteRedesignManagement() {
  return (
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="Website Redesign & Management"
      icon={RefreshCw}
      description="Website redesigns and monthly management built to fix what's losing visitors, not just refresh the look, backed by ongoing care."
      heroTitle="Get a Website Redesign That Turns Old Visitors Into New Customers"
      heroDescription="Website redesigns and monthly management built to fix what's losing visitors, not just refresh the look, backed by ongoing care."
      heroCtaText="Get a Free Website Redesign Audit"
      capabilitiesHeading="Built for Websites That Have Stopped Pulling Their Weight"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between an Outdated Site and One That Performs"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Their Website Redesign"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn an Underperforming Site Into One That Converts"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Redesigning Websites Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every redesign project, with the same attention to detail whether a client is nearby or across the world. We provide website redesign services and website redesign company support for businesses across India, built around what's actually underperforming on each specific site. For businesses looking for a corporate website redesign agency beyond India, we support clients worldwide remotely, delivering the same monthly website management services standard regardless of location or time zone. Whether you're a small business in Prayagraj refreshing your first real website or a corporate team anywhere else managing an established one, our approach starts with the same question: what is your current site actually costing you."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Website Redesign That Actually Pays Off?"
      ctaText="Whether your website has grown outdated, slow, or simply stopped converting the way it used to, a redesign only works if it fixes the actual problem, not just the appearance. Let's audit your current site and scope what a redesign, and ongoing management, would actually involve."
      ctaPrimaryText="Talk to a Website Redesign Specialist"
      ctaSecondaryText="Get Your Free Website Redesign Audit"
    />
  );
}
