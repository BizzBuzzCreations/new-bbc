import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Newspaper,
  Layout,
  ShoppingCart,
  RefreshCw,
  Handshake,
  Puzzle,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "WordPress Development Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a WordPress development company building custom WordPress and WooCommerce sites for India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/wordpress-development",
  },
};

const CAPABILITIES = [
  {
    icon: Layout,
    title: "Businesses Needing a Custom WordPress Website",
    desc: "A default theme rarely reflects a business's actual brand or structure once real content and pages get added. We provide custom wordpress website design built around your specific business, not a generic theme with your logo swapped in.",
  },
  {
    icon: ShoppingCart,
    title: "Online Stores Needing WooCommerce Development",
    desc: "Store owners on WooCommerce need more than the default setup once product catalogs, payments, and shipping get complex. We work as a woocommerce development agency, building stores structured for real product management and checkout conversion.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Migrating to WordPress",
    desc: "Businesses moving from another platform or a custom system need a migration that preserves content, SEO, and functionality. We handle wordpress website development services including migration, keeping rankings and data intact during the transition.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a WordPress Development Partner",
    desc: "Design and marketing agencies often need a reliable WordPress developer to execute what they've designed without hiring in-house. We work as a hire wordpress developer partner for agencies, delivering builds without adding permanent headcount.",
  },
  {
    icon: Puzzle,
    title: "Businesses Needing a Custom WordPress Plugin",
    desc: "Some WordPress requirements simply aren't covered by any existing plugin, no matter how the site is configured. We build custom WordPress plugins for functionality that off-the-shelf options genuinely can't provide.",
  },
  {
    icon: Wrench,
    title: "Businesses Needing Ongoing WordPress Maintenance",
    desc: "WordPress sites need regular updates and security attention, since outdated plugins and themes are a common attack vector. We provide wordpress maintenance services that keep sites updated, secure, and running reliably.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Custom WordPress Website Design",
    desc: "Custom wordpress website design built from your brand and content, not adapted from a purchased theme.",
    ctaText: "Know Our Services",
    services: [
      "Custom WordPress Website Design",
      "WordPress Website Development Services",
      "Responsive WordPress Design",
      "Elementor Website Development",
      "Landing Page Development",
      "Multi-Page Website Builds",
      "Brand-Aligned WordPress Design",
      "Content-Managed Website Setup",
    ],
  },
  {
    number: "02",
    title: "WooCommerce Development",
    desc: "Woocommerce development agency work built around real product catalogs, checkout flow, and conversion, not a generic store setup.",
    ctaText: "Know Our Services",
    services: [
      "WooCommerce Store Development",
      "WooCommerce Theme Customization",
      "Payment Gateway Integration",
      "Product Catalog Setup",
      "WooCommerce Plugin Integration",
      "Shipping & Tax Configuration",
      "WooCommerce Checkout Optimization",
      "Multi-Currency Store Setup",
    ],
  },
  {
    number: "03",
    title: "Custom WordPress Plugin & Theme Development",
    desc: "Custom plugin and theme development for functionality and design that existing WordPress options genuinely can't provide.",
    ctaText: "Know Our Services",
    services: [
      "Custom WordPress Plugin Development",
      "Custom WordPress Theme Development",
      "Theme Customization",
      "Plugin Customization & Extension",
      "Child Theme Development",
      "Custom Post Types & Fields",
      "Gutenberg Block Development",
      "Plugin Compatibility Fixes",
    ],
  },
  {
    number: "04",
    title: "WordPress Migration Services",
    desc: "Wordpress migration services that move your site, content, and rankings over safely from another platform or host.",
    ctaText: "Know Our Services",
    services: [
      "WordPress Migration Services",
      "Platform-to-WordPress Migration",
      "Hosting Migration",
      "Content & Data Migration",
      "SEO-Safe Migration",
      "Theme Migration",
      "Zero-Downtime Migration Planning",
      "Post-Migration Testing",
    ],
  },
  {
    number: "05",
    title: "WordPress Speed & SEO Optimization",
    desc: "Wordpress speed optimization and SEO work to keep your site fast and visible, not just functional.",
    ctaText: "Know Our Services",
    services: [
      "WordPress Speed Optimization",
      "WordPress SEO Services",
      "Core Web Vitals Optimization",
      "Image & Asset Optimization",
      "Caching Configuration",
      "Database Optimization",
      "Technical SEO Audits",
      "Mobile Performance Optimization",
    ],
  },
  {
    number: "06",
    title: "WordPress Maintenance & Support",
    desc: "Wordpress maintenance services that keep your site updated, secure, and backed up without you having to manage it yourself.",
    ctaText: "Know Our Services",
    services: [
      "WordPress Maintenance Services",
      "Plugin & Core Updates",
      "Security Monitoring & Hardening",
      "Malware Scanning & Removal",
      "Regular Backups",
      "Uptime Monitoring",
      "Bug Fixes & Support",
      "Emergency Recovery Support",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Website & Business Discovery",
    desc: "We start by understanding your business, content needs, and goals, identifying what your WordPress site specifically needs to do beyond simply existing online.",
  },
  {
    number: "02",
    title: "Site Structure & Plugin Planning",
    desc: "We plan the site's structure, required plugins, and any custom functionality upfront, whether it's a standard site, a WooCommerce store, or a migration.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    desc: "We design the site around your brand and content, creating a structure you can review and refine before development begins.",
  },
  {
    number: "04",
    title: "Development & Customization",
    desc: "We build the site, theme, and any custom plugins or WooCommerce functionality required, keeping speed and mobile performance in mind throughout.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test functionality, checkout flow where relevant, and site performance thoroughly across devices before launch, catching issues early.",
  },
  {
    number: "06",
    title: "Launch & Ongoing Maintenance",
    desc: "We launch the site, then provide ongoing maintenance covering updates, backups, and security monitoring so it keeps running reliably.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "WordPress Development Built Around Conversion, Not Just Content",
    desc: "We build every WordPress site with a clear conversion goal in mind, enquiries, bookings, or sales, rather than treating the site as a static brochure. This means the finished site is structured to actually generate business, not just exist online.",
  },
  {
    number: "02",
    title: "WooCommerce Expertise for Stores That Need to Actually Sell",
    desc: "As a woocommerce development agency, we understand the details that affect real sales, checkout friction, payment options, shipping configuration, going beyond a default WooCommerce install to a store built for conversion.",
  },
  {
    number: "03",
    title: "Custom Plugins When Off-the-Shelf Options Fall Short",
    desc: "When your WordPress site needs functionality no existing plugin quite covers, we build it directly, giving you exactly the feature you need instead of stacking multiple conflicting plugins that slow the site down.",
  },
  {
    number: "04",
    title: "Migration Handled Without Losing SEO or Uptime",
    desc: "Our wordpress migration services follow a structured process covering redirects, content, and metadata specifically to protect your existing search rankings, so moving platforms doesn't cost you the visibility you've already built.",
  },
  {
    number: "05",
    title: "Speed and Security Treated as Non-Negotiable",
    desc: "WordPress speed optimization and security hardening are built into every project by default, not offered as a separate premium service, because a slow or vulnerable WordPress site undermines the entire investment regardless of how it looks.",
  },
  {
    number: "06",
    title: "Maintenance Plans That Keep Sites Actually Maintained",
    desc: "Our wordpress maintenance services include regular updates, backups, and security monitoring as standard, addressing the most common reason WordPress sites break or get compromised, outdated plugins and themes left unattended.",
  },
];

const FAQS = [
  {
    question: "Website & Business Discovery",
    answer:
      "We start by understanding your business, content needs, and goals, identifying what your WordPress site specifically needs to do beyond simply existing online.",
  },
  {
    question: "Site Structure & Plugin Planning",
    answer:
      "We plan the site's structure, required plugins, and any custom functionality upfront, whether it's a standard site, a WooCommerce store, or a migration.",
  },
  {
    question: "Design & Prototyping",
    answer:
      "We design the site around your brand and content, creating a structure you can review and refine before development begins.",
  },
  {
    question: "Development & Customization",
    answer:
      "We build the site, theme, and any custom plugins or WooCommerce functionality required, keeping speed and mobile performance in mind throughout.",
  },
  {
    question: "Testing & Quality Assurance",
    answer:
      "We test functionality, checkout flow where relevant, and site performance thoroughly across devices before launch, catching issues early.",
  },
  {
    question: "Launch & Ongoing Maintenance",
    answer:
      "We launch the site, then provide ongoing maintenance covering updates, backups, and security monitoring so it keeps running reliably.",
  },
];

export default function WordPressDevelopment() {
  return (
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="WordPress Development"
      icon={Newspaper}
      description="Custom WordPress and WooCommerce sites built to load fast and convert, not just publish content, backed by ongoing support."
      heroTitle="Get a Custom WordPress Website Built to Convert"
      heroDescription="Custom WordPress and WooCommerce sites built to load fast and convert, not just publish content, backed by ongoing support."
      heroCtaText="Get a Free WordPress Site Audit"
      capabilitiesHeading="Built for Businesses That Need More Than a Default Theme"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a WordPress Site and One That Sells"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Hire Us for WordPress Development"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn a WordPress Build Into a Working Site"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building WordPress Sites Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every WordPress project, with the same attention to detail whether a client is nearby or across the world. We work as a wordpress development company for businesses across India, providing custom wordpress website design and woocommerce development agency support built around each business's actual products and goals. For businesses looking to hire a wordpress developer beyond India, we support clients worldwide remotely, delivering the same wordpress maintenance services standard of work regardless of location or time zone. Whether you're a small business in Prayagraj launching your first WordPress site or a store anywhere else scaling on WooCommerce, our approach starts with the same question: what does your site actually need to do to convert."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a WordPress Site That Actually Performs?"
      ctaText="Whether you need a custom WordPress website, a WooCommerce store built to actually sell, or ongoing maintenance for a site you already have, a default theme and a forgotten update schedule were never going to get you there. Let's talk through your requirements and scope what a proper WordPress build would actually involve."
      ctaPrimaryText="Talk to a WordPress Development Specialist"
      ctaSecondaryText="Get Your Free WordPress Site Audit"
    />
  );
}
