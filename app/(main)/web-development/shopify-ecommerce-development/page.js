import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  ShoppingCart,
  Rocket,
  Building2,
  Building,
  Package,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Shopify & Ecommerce Development Company | BizzBuzz Creations",
  description:
    "Fast, conversion-focused Shopify and ecommerce development in India — custom stores, secure checkout, and scalable builds from 20 products to 20,000, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/shopify-ecommerce-development",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & New Store Launches",
    desc: "New brands need a store that looks credible and converts from day one without a bloated build timeline. We build launch-ready Shopify stores around a lean product catalog, letting startups get to market fast without cutting corners on checkout or speed.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMB stores often outgrow generic themes once they need specific workflows or a distinct brand look. We build custom Shopify stores sized for SMB budgets, giving growing catalogs a design and structure that actually fits how they sell.",
  },
  {
    icon: Building,
    title: "Enterprises & High-Volume Retailers",
    desc: "Large catalogs need store architecture that handles high traffic and complex inventory reliably. We build enterprise-grade Shopify Plus stores structured for high SKU counts, multi-region selling, and integration with existing ERP systems.",
  },
  {
    icon: Package,
    title: "D2C & Product Brands",
    desc: "D2C brands live and die on checkout conversion and mobile shopping experience. We build stores optimized for mobile shoppers and smooth checkout flows, designed specifically to turn browsers into repeat buyers.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Shopify Partner",
    desc: "Marketing and design agencies often need a technical Shopify partner to execute builds for clients. We work as a white-label or direct Shopify development partner, handling the technical build so agencies can focus on strategy and creative.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Migrating to Shopify",
    desc: "Stores stuck on WooCommerce, Magento, or another platform need a careful, SEO-safe migration. We handle structured migrations to Shopify, preserving products, orders, and rankings while upgrading the underlying store.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Custom Shopify Theme Development",
    desc: "We design and build Shopify themes around your brand instead of relying on stock templates, so your store looks distinct and matches how you actually sell.",
    ctaText: "Know Our Services",
    services: [
      "Custom Theme Design",
      "Custom Theme Development",
      "Shopify 2.0 Section Builds",
      "Brand-Led Store Design",
      "Homepage & Collection Design",
      "Product Page Customization",
      "Theme Speed Optimization",
      "Theme Documentation",
    ],
  },
  {
    number: "02",
    title: "Secure Checkout & Payment Integration",
    desc: "Smooth, trustworthy checkout experiences with the payment gateways your customers actually use, tuned to reduce cart abandonment at the final step.",
    ctaText: "Know Our Services",
    services: [
      "Checkout Customization",
      "Payment Gateway Integration",
      "Multi-Currency Setup",
      "Cart Abandonment Reduction",
      "One-Click Checkout Setup",
      "Local Payment Method Support",
      "Fraud Prevention Setup",
      "Checkout Testing",
    ],
  },
  {
    number: "03",
    title: "Product Catalog & Inventory Setup",
    desc: "From 20 SKUs to 20,000, we structure collections, variants, and inventory so your catalog stays manageable as it grows, not chaotic.",
    ctaText: "Know Our Services",
    services: [
      "Product Catalog Structuring",
      "Collection Setup",
      "Variant Configuration",
      "Bulk Product Upload",
      "Inventory Sync Setup",
      "Product Data Migration",
      "SKU Management",
      "Catalog Taxonomy Planning",
    ],
  },
  {
    number: "04",
    title: "Store Speed & Mobile Optimization",
    desc: "Most ecommerce traffic is mobile. We optimize page speed and mobile UX so shoppers don't bounce before they even see your products.",
    ctaText: "Know Our Services",
    services: [
      "Page Speed Optimization",
      "Mobile UX Optimization",
      "Image Optimization",
      "Core Web Vitals Fixes",
      "App Bloat Reduction",
      "Lazy Loading Setup",
      "Mobile Checkout Testing",
      "Performance Monitoring",
    ],
  },
  {
    number: "05",
    title: "App Integrations & Automation",
    desc: "We connect the apps you need — reviews, email marketing, shipping, inventory sync — and automate the repetitive parts of running a store.",
    ctaText: "Know Our Services",
    services: [
      "Review App Integration",
      "Email Marketing Integration",
      "Shipping App Setup",
      "Inventory Sync Automation",
      "Subscription App Setup",
      "Loyalty Program Integration",
      "Third-Party API Integration",
      "Workflow Automation",
    ],
  },
  {
    number: "06",
    title: "Ecommerce SEO & Migration",
    desc: "Whether you're launching fresh or migrating from another platform, we handle SEO-safe migrations and structure your store to actually rank.",
    ctaText: "Know Our Services",
    services: [
      "Ecommerce SEO Setup",
      "Platform Migration",
      "URL Redirect Mapping",
      "Product Schema Markup",
      "Collection Page SEO",
      "Technical SEO Audits",
      "Search Ranking Preservation",
      "Post-Migration QA",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Discovery & Catalog Assessment",
    desc: "We map out your catalog, customer journey, and growth plans before choosing the right Shopify plan and structure for your store.",
  },
  {
    number: "02",
    title: "Architecture & Platform Setup",
    desc: "We plan the store's structure, apps, and Shopify plan upfront, so the foundation supports your catalog size and growth plans.",
  },
  {
    number: "03",
    title: "Design & Theme Development",
    desc: "A custom or heavily customized theme gets built around your brand and products, designed mobile-first for real shoppers.",
  },
  {
    number: "04",
    title: "Apps, Payments & Shipping Setup",
    desc: "We configure payment gateways, shipping rules, taxes, and the apps your store needs to actually run day-to-day.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test checkout flows, mobile experience, and app integrations thoroughly across devices before launch.",
  },
  {
    number: "06",
    title: "Launch, Testing & Growth Support",
    desc: "We test checkout flows end-to-end before launch, then stick around for performance monitoring and ongoing store improvements.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Specialist Shopify Developers",
    desc: "We focus on Shopify and ecommerce builds specifically, not general websites, so we know the platform's quirks and workarounds inside out.",
  },
  {
    number: "02",
    title: "Built for Conversions",
    desc: "Every store is designed around smooth checkout flows and clear product pages that turn browsers into buyers.",
  },
  {
    number: "03",
    title: "Mobile Shopper Ready",
    desc: "Fast-loading, mobile-first storefronts designed for how people actually shop today — on their phones, in short sessions.",
  },
  {
    number: "04",
    title: "Scales From 20 to 20,000 Products",
    desc: "Whether you're launching a small catalog or migrating an established store, we structure it to handle growth without a rebuild.",
  },
  {
    number: "05",
    title: "Secure Payments, Global Reach",
    desc: "Trusted payment integrations and store architecture built to serve customers reliably across India and international markets.",
  },
  {
    number: "06",
    title: "Ongoing Store Support",
    desc: "Apps break, platforms update, and traffic grows — we provide ongoing support so your store keeps running smoothly after launch.",
  },
];

const FAQS = [
  {
    question: "Should I use Shopify or another ecommerce platform?",
    answer:
      "For most growing businesses, Shopify offers the best balance of speed, security, and app ecosystem — we'll advise honestly if another platform suits your case better.",
  },
  {
    question: "Can you migrate my existing store to Shopify?",
    answer:
      "Yes, we handle SEO-safe migrations of products, orders, and customer data from platforms like WooCommerce or Magento with minimal downtime.",
  },
  {
    question: "How much does Shopify development cost?",
    answer:
      "Costs depend on catalog size, custom features, and integrations needed — we'll give you a clear quote after understanding your requirements.",
  },
  {
    question: "How long does it take to launch a Shopify store?",
    answer:
      "A standard store typically launches in a few weeks; larger catalogs or heavily custom builds take longer. We'll set a realistic timeline upfront.",
  },
  {
    question: "Do you provide support after the store goes live?",
    answer:
      "Yes, we offer ongoing maintenance, app updates, and performance monitoring so your store keeps converting after launch.",
  },
];

export default function ShopifyEcommerceDevelopment() {
  return (
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="Shopify & Ecommerce Development"
      icon={ShoppingCart}
      description="Fast-loading, conversion-focused online stores with smooth checkout experiences — built for speed, mobile shoppers, and global scalability, from a team in Prayagraj serving all of India."
      heroTitle="Shopify & Ecommerce Development Company in India"
      heroDescription="Fast-loading, conversion-focused online stores with smooth checkout experiences — built for speed, mobile shoppers, and global scalability, from a team in Prayagraj serving all of India."
      capabilitiesHeading="Built for Stores Ready to Turn Browsers Into Buyers"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into a Store Built to Sell"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Brands Trust Us to Build Their Shopify Store"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Catalog Into a Converting Store"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building Shopify Stores Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every Shopify build, with the same care whether a client is nearby or overseas. We work with startups, SMBs, and enterprise retailers across India, providing Shopify and ecommerce development sized to each brand's actual catalog and traffic. For brands looking to hire Shopify developers beyond India, we support clients worldwide remotely, working across time zones to deliver the same store quality standard regardless of location. Whether you're launching your first 20 products or migrating an established catalog of 20,000, our approach starts with the same question: what does your store actually need to do to convert."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Store That Actually Converts?"
      ctaText="Whether you need a new Shopify store built from scratch, a custom theme for an existing catalog, or a careful migration from another platform, a generic theme was never going to get you there. Let's talk through your catalog and scope what a custom Shopify build would actually involve."
      ctaPrimaryText="Talk to a Shopify Development Specialist"
      ctaSecondaryText="Get Your Free Shopify Consultation"
    />
  );
}
