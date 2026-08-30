import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  RefreshCw,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  Database,
} from "lucide-react";

export const metadata = {
  title: "Website Redesign & Management Company | BizzBuzz Creations",
  description:
    "Website redesign and ongoing management services in India — modernize UI/UX, fix Core Web Vitals, and keep your site secure with monitoring, updates, and backups from BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/website-redesign-management",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups that launched fast on a basic site often outgrow it once traction picks up. We redesign early-stage sites around actual usage data, upgrading the parts holding back conversions without a costly full rebuild.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently sit on sites that were never updated after the initial launch. We redesign and manage sites sized for SMB budgets, fixing what's actually broken instead of a generic visual refresh.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need redesigns that preserve SEO equity and integrate with existing systems across departments. We handle enterprise-scale redesigns built around careful migration planning, security requirements, and long-term management.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce sites lose sales quietly to slow load times and dated checkout flows. We redesign stores around conversion data, fixing Core Web Vitals and UX friction points that are actually costing you sales.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Redesign Partner",
    desc: "Agencies managing client sites sometimes need a technical partner for redesign and ongoing management work. We work as a white-label redesign and management partner, handling the technical execution behind the scenes.",
  },
  {
    icon: Database,
    title: "Businesses Needing Ongoing Site Management",
    desc: "Businesses without an in-house developer need someone reliable handling updates, security, and backups long-term. We provide ongoing website management for sites we redesign or take over, keeping them fast and secure year after year.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "UI/UX Redesign Audit",
    desc: "We start by auditing what's actually holding your current site back — confusing navigation, dated design, or friction in the conversion path.",
    ctaText: "Know Our Services",
    services: [
      "UX Audit",
      "Conversion Funnel Analysis",
      "Navigation Review",
      "Visual Design Audit",
      "Analytics Review",
      "Heatmap & Behavior Analysis",
      "Competitor Benchmarking",
      "Redesign Recommendations Report",
    ],
  },
  {
    number: "02",
    title: "Core Web Vitals Fixes",
    desc: "Slow load times and poor Core Web Vitals quietly hurt both rankings and conversions. We diagnose and fix them as part of every redesign.",
    ctaText: "Know Our Services",
    services: [
      "Core Web Vitals Audit",
      "Page Speed Optimization",
      "Image Optimization",
      "Code Minification",
      "Server Response Optimization",
      "Caching Setup",
      "Mobile Performance Fixes",
      "Ongoing Speed Monitoring",
    ],
  },
  {
    number: "03",
    title: "Content & Structure Overhaul",
    desc: "We restructure navigation, page layout, and content so visitors find what they need and take action, not bounce in confusion.",
    ctaText: "Know Our Services",
    services: [
      "Information Architecture Redesign",
      "Navigation Restructuring",
      "Content Rewriting",
      "Page Layout Redesign",
      "Call-to-Action Optimization",
      "Content Migration",
      "Sitemap Restructuring",
      "User Flow Redesign",
    ],
  },
  {
    number: "04",
    title: "Security Updates & Backups",
    desc: "Outdated plugins and platforms are a common breach point. We patch vulnerabilities and set up reliable, scheduled backups.",
    ctaText: "Know Our Services",
    services: [
      "Security Vulnerability Patching",
      "Plugin & Platform Updates",
      "Scheduled Backup Setup",
      "Malware Scanning",
      "SSL Configuration",
      "Firewall Setup",
      "Access Control Review",
      "Disaster Recovery Planning",
    ],
  },
  {
    number: "05",
    title: "Performance Monitoring",
    desc: "After redesign, we keep an eye on uptime, speed, and errors, catching problems before your customers notice them.",
    ctaText: "Know Our Services",
    services: [
      "Uptime Monitoring",
      "Speed Monitoring",
      "Error Tracking",
      "Alert Configuration",
      "Monthly Performance Reports",
      "Downtime Response",
      "Server Health Checks",
      "Analytics Dashboard Setup",
    ],
  },
  {
    number: "06",
    title: "Ongoing Website Management",
    desc: "A redesigned site still needs upkeep. We provide ongoing content updates, technical maintenance, and support after launch.",
    ctaText: "Know Our Services",
    services: [
      "Content Update Support",
      "Technical Maintenance",
      "Plugin & Software Updates",
      "Hosting Support",
      "Minor Feature Additions",
      "Monthly Health Checks",
      "Priority Support Access",
      "Long-Term Management Plans",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Website Audit",
    desc: "We review your current site's design, speed, SEO, and analytics to pinpoint exactly what's costing you visitors and conversions.",
  },
  {
    number: "02",
    title: "Redesign Planning",
    desc: "Based on the audit, we plan the new structure, design direction, and technical fixes needed, prioritized by impact.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    desc: "We design key pages and interactions around the audit findings, sharing prototypes for your review before development starts.",
  },
  {
    number: "04",
    title: "Redesign & Migration",
    desc: "We rebuild the site with modern UI/UX and Core Web Vitals fixes, migrating content carefully to protect your existing SEO rankings.",
  },
  {
    number: "05",
    title: "Testing & Pre-Launch QA",
    desc: "We test the redesigned site across devices and browsers, checking that rankings, forms, and functionality all carry over correctly.",
  },
  {
    number: "06",
    title: "Ongoing Management",
    desc: "After launch, we monitor performance and security, handling updates and backups so the site stays fast and online.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Data-Backed Redesigns",
    desc: "We redesign based on what your analytics and audit actually show is broken, not guesswork or trends for their own sake.",
  },
  {
    number: "02",
    title: "Core Web Vitals Focused",
    desc: "Speed and technical health are treated as core redesign goals, not an afterthought bolted on at the end.",
  },
  {
    number: "03",
    title: "SEO-Safe Migration",
    desc: "We plan redesigns carefully to protect your existing search rankings instead of accidentally resetting years of SEO progress.",
  },
  {
    number: "04",
    title: "Proactive Security",
    desc: "Regular patching and hardening reduce the risk of your site being compromised through outdated software.",
  },
  {
    number: "05",
    title: "24/7 Monitoring",
    desc: "We keep watch on uptime and performance so issues get caught and fixed before they cost you customers.",
  },
  {
    number: "06",
    title: "Long-Term Care",
    desc: "Redesign is the start, not the end — we stay on for ongoing management so your site keeps performing for years.",
  },
];

const FAQS = [
  {
    question: "How do I know if my website needs a redesign?",
    answer:
      "Signs include slow load times, high bounce rates, an outdated look, poor mobile experience, or a site that simply isn't converting visitors anymore.",
  },
  {
    question: "Will a redesign affect my current SEO rankings?",
    answer:
      "Not if it's planned carefully — we migrate content and URLs strategically to protect your existing rankings during the redesign.",
  },
  {
    question: "How much does website redesign cost?",
    answer:
      "It depends on the scope of changes needed — we audit your site first and give you a clear, tailored quote based on what's actually required.",
  },
  {
    question: "What's included in your ongoing management plans?",
    answer:
      "Our management plans typically cover monitoring, security updates, backups, and minor content updates — we'll tailor a plan to your needs.",
  },
  {
    question: "Will there be downtime during the redesign or migration?",
    answer:
      "We plan migrations to minimize downtime, typically scheduling the switch during low-traffic periods so disruption is minimal.",
  },
];

export default function WebsiteRedesignManagement() {
  return (
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="Website Redesign & Management"
      icon={RefreshCw}
      description="Modernize your site's UI/UX for higher conversions, fix Core Web Vitals, and keep it secure and online with ongoing monitoring, updates, and backups."
      heroTitle="Website Redesign & Management Services in India"
      heroDescription="Modernize your site's UI/UX for higher conversions, fix Core Web Vitals, and keep it secure and online with ongoing monitoring, updates, and backups."
      capabilitiesHeading="Built for Sites Ready to Stop Losing Customers Quietly"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into a Redesign Built to Convert"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Redesign and Manage Their Site"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn an Underperforming Site Into One That Converts"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Redesigning Websites Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every redesign engagement, with the same care whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, redesigning and managing sites sized to each business's actual traffic and technical debt. For businesses looking to redesign a site beyond India, we support clients worldwide remotely, working across time zones to deliver the same standard of care regardless of location. Whether you're a startup refreshing your first site or an enterprise migrating a high-traffic platform, our approach starts with auditing what's actually broken before changing anything."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Site That Stops Losing You Customers?"
      ctaText="Whether you need a full redesign, targeted Core Web Vitals fixes, or ongoing management for a site that's currently unmaintained, the right approach depends on what your audit actually reveals. Let's talk through your site and scope what a redesign would actually involve."
      ctaPrimaryText="Talk to a Redesign Specialist"
      ctaSecondaryText="Get Your Free Website Audit"
    />
  );
}
