import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Newspaper,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "WordPress Development Company | BizzBuzz Creations",
  description:
    "High-performance, SEO-ready WordPress development in India — custom themes, plugin development, and AI-assisted security monitoring by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/wordpress-development",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need a credible website live fast without a huge upfront build cost. We build custom WordPress sites on a flexible theme foundation, letting startups launch quickly and add pages as the business grows.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often outgrow generic WordPress themes once they need specific functionality or a distinct brand look. We build custom WordPress sites sized for SMB budgets, matched to your actual content and business needs.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need WordPress builds that handle content volume and traffic reliably at scale. We provide enterprise WordPress development built for high traffic, strict security requirements, and integration with existing systems.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & WooCommerce Stores",
    desc: "Stores running WooCommerce need a build that stays fast and secure as catalog size and orders grow. We build and optimize WooCommerce stores structured for reliable checkout and manageable inventory as your business scales.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a WordPress Partner",
    desc: "Design and marketing agencies often need a technical WordPress partner to execute client builds. We work as a white-label or direct WordPress development partner, delivering builds agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Migrating to WordPress",
    desc: "Businesses on outdated platforms or unmaintainable custom code need a careful, SEO-safe migration. We handle structured migrations to WordPress, preserving content and rankings while upgrading the underlying platform.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Custom WordPress Theme Development",
    desc: "We build custom WordPress themes around your brand and content needs, instead of stretching a generic theme to do things it wasn't built for.",
    ctaText: "Know Our Services",
    services: [
      "Custom Theme Design",
      "Custom Theme Development",
      "Gutenberg Block Development",
      "Brand-Led Design Systems",
      "Landing Page Templates",
      "Multi-Page Website Builds",
      "Responsive Theme Design",
      "Theme Documentation",
    ],
  },
  {
    number: "02",
    title: "Plugin Development & Customization",
    desc: "When off-the-shelf plugins don't fit, we build and customize functionality directly, keeping your site lean instead of plugin-bloated.",
    ctaText: "Know Our Services",
    services: [
      "Custom Plugin Development",
      "Plugin Customization",
      "WooCommerce Customization",
      "Form Plugin Configuration",
      "Booking Plugin Setup",
      "Membership Plugin Setup",
      "Plugin Conflict Resolution",
      "Plugin Performance Auditing",
    ],
  },
  {
    number: "03",
    title: "Security Hardening & Malware Protection",
    desc: "WordPress is a common attack target. We harden installs against common vulnerabilities and add AI-assisted threat monitoring.",
    ctaText: "Know Our Services",
    services: [
      "Security Hardening",
      "Malware Scanning & Removal",
      "AI-Assisted Threat Monitoring",
      "Firewall Configuration",
      "Login Security Setup",
      "Vulnerability Patching",
      "Backup & Recovery Setup",
      "Security Audits",
    ],
  },
  {
    number: "04",
    title: "Speed & Performance Optimization",
    desc: "Caching, image optimization, and clean code keep your WordPress site fast, even with rich content and multiple plugins running.",
    ctaText: "Know Our Services",
    services: [
      "Caching Setup",
      "Image Optimization",
      "Database Optimization",
      "Code Cleanup",
      "CDN Configuration",
      "Core Web Vitals Fixes",
      "Hosting Optimization",
      "Performance Monitoring",
    ],
  },
  {
    number: "05",
    title: "SEO-Ready Setup",
    desc: "We configure technical SEO fundamentals — structure, schema, and Core Web Vitals — so your WordPress site is built to rank from launch.",
    ctaText: "Know Our Services",
    services: [
      "Technical SEO Setup",
      "Schema Markup",
      "XML Sitemap Configuration",
      "SEO Plugin Setup",
      "URL Structure Planning",
      "Metadata Configuration",
      "Site Speed for SEO",
      "Search Console Setup",
    ],
  },
  {
    number: "06",
    title: "Ongoing Maintenance & Support",
    desc: "Plugin updates, core updates, and backups are handled on an ongoing basis, so your site stays secure and online without you having to track it.",
    ctaText: "Know Our Services",
    services: [
      "Core & Plugin Updates",
      "Scheduled Backups",
      "Uptime Monitoring",
      "Bug Fixes",
      "Content Update Support",
      "Security Monitoring",
      "Monthly Health Reports",
      "Priority Support Access",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "We map out your content structure, features, and goals before choosing themes, plugins, or custom development needed.",
  },
  {
    number: "02",
    title: "Design & Wireframing",
    desc: "We design key pages and layouts around your brand, sharing wireframes for review before development begins.",
  },
  {
    number: "03",
    title: "Design & Theme Development",
    desc: "A custom or heavily customized theme gets built around your brand, designed mobile-first and built for speed.",
  },
  {
    number: "04",
    title: "Plugin & Feature Integration",
    desc: "We add the functionality you actually need — forms, ecommerce, bookings — via clean, well-maintained plugins or custom code.",
  },
  {
    number: "05",
    title: "Security & Performance Testing",
    desc: "We test speed, security, and functionality thoroughly across devices before launch, catching issues while they're easy to fix.",
  },
  {
    number: "06",
    title: "Launch & Support",
    desc: "We handle the technical launch, then provide ongoing updates, security monitoring, and support to keep the site running smoothly.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "WordPress Specialists",
    desc: "We know the platform's ecosystem well — themes, plugins, and hosting quirks — so builds are efficient, not trial-and-error.",
  },
  {
    number: "02",
    title: "Security-First Builds",
    desc: "Hardening against common vulnerabilities and AI-assisted threat monitoring are part of every WordPress project we deliver.",
  },
  {
    number: "03",
    title: "SEO-Ready Out of the Box",
    desc: "Technical SEO fundamentals are configured from the start, giving your site a real foundation to rank on.",
  },
  {
    number: "04",
    title: "Fast-Loading Sites",
    desc: "We optimize performance deliberately, so a content-rich WordPress site doesn't end up slow and bloated.",
  },
  {
    number: "05",
    title: "AI-Assisted Threat Monitoring",
    desc: "Ongoing, AI-assisted monitoring helps catch security threats early, before they become a bigger problem.",
  },
  {
    number: "06",
    title: "Prayagraj-Based, Globally Trusted",
    desc: "A full-service WordPress development team in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
  },
];

const FAQS = [
  {
    question: "Is WordPress secure enough for a business website?",
    answer:
      "Yes, when properly hardened and maintained. We harden installs against common vulnerabilities and add AI-assisted threat monitoring to keep it that way.",
  },
  {
    question: "Can you build an online store on WordPress?",
    answer:
      "Yes, we build WooCommerce-based stores on WordPress when it's the right fit for your catalog and workflow, alongside our dedicated Shopify service for larger stores.",
  },
  {
    question: "Can you migrate my existing site to WordPress?",
    answer:
      "Yes, we handle migrations from other platforms, preserving your content and SEO rankings during the move.",
  },
  {
    question: "How much does WordPress development cost?",
    answer:
      "Costs depend on design complexity, custom features, and plugins required — we scope every project and give you a clear, tailored quote.",
  },
  {
    question: "Do you offer WordPress maintenance plans?",
    answer:
      "Yes, we provide ongoing maintenance covering core and plugin updates, backups, and security monitoring so your site stays healthy after launch.",
  },
];

export default function WordPressDevelopment() {
  return (
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="WordPress Development"
      icon={Newspaper}
      description="High-performance, SEO-ready WordPress websites with strong security, including protection against common vulnerabilities and AI-assisted threat monitoring."
      heroTitle="WordPress Development Company in India"
      heroDescription="High-performance, SEO-ready WordPress websites with strong security, including protection against common vulnerabilities and AI-assisted threat monitoring."
      capabilitiesHeading="Built for Businesses Ready for a WordPress Site That Performs"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our WordPress Development"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their WordPress Site"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Content Into a Working WordPress Site"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building WordPress Sites Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every WordPress project, with the same care whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, building WordPress sites sized to each business's actual content and traffic needs. For businesses looking to hire WordPress developers beyond India, we support clients worldwide remotely, working across time zones to deliver the same security and performance standard regardless of location. Whether you're a startup launching your first site or an enterprise managing a high-traffic WordPress platform, our approach starts with the same question: what does your business actually need this site to do."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a WordPress Site That Performs and Stays Secure?"
      ctaText="Whether you need a custom WordPress theme built from scratch, a WooCommerce store, or a careful migration from another platform, a generic theme was never going to get you there. Let's talk through your requirements and scope what a custom WordPress build would actually involve."
      ctaPrimaryText="Talk to a WordPress Development Specialist"
      ctaSecondaryText="Get Your Free WordPress Consultation"
    />
  );
}
