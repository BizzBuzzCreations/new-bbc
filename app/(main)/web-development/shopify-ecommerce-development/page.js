import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  ShoppingCart,
  ShoppingBag,
  Building,
  RefreshCw,
  Shirt,
  Share2,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "Shopify & Ecommerce Development Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a Shopify development agency building fast, conversion-focused e-commerce stores for brands across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/shopify-ecommerce-development",
  },
};

const CAPABILITIES = [
  {
    icon: ShoppingBag,
    title: "D2C Brands & Online Retailers",
    desc: "D2C brands need a store that converts cold traffic into first-time buyers without relying on a marketplace's built-in audience. We build Shopify e-commerce development company projects focused on product page clarity, fast checkout, and conversion-tested layouts that turn visitors into paying customers.",
  },
  {
    icon: Building,
    title: "Shopify Plus Merchants & Enterprise Brands",
    desc: "High-volume brands need infrastructure that handles scale, complex catalogs, and custom checkout logic reliably. We provide Shopify Plus development agency services built for enterprise traffic, multi-store setups, and B2B storefronts that standard Shopify plans can't support.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Migrating to Shopify",
    desc: "Brands stuck on WooCommerce, Magento, or a custom platform needs a migration that doesn't tank their SEO rankings or lose product data. We handle Shopify migration services with a documented plan for redirects, data integrity, and zero-downtime cutover.",
  },
  {
    icon: Shirt,
    title: "Fashion, Beauty & Lifestyle Brands",
    desc: "Visual-first brands need a store where design and speed both matter equally, since slow product pages lose sales regardless of how good the photography is. We build fast, image-heavy Shopify store development projects that don't sacrifice load time for visual appeal.",
  },
  {
    icon: Share2,
    title: "Multi-Channel & Marketplace Sellers",
    desc: "Sellers running Amazon, Instagram Shop, and their own store simultaneously need Shopify set up to sync inventory and orders across every channel. We build e-commerce website development services that connect your Shopify store to the other platforms you already sell on.",
  },
  {
    icon: Rocket,
    title: "Startups Launching Their First Store",
    desc: "First-time Shopify sellers need a store that's ready to sell from day one, without months of trial and error on theme settings. We build launch-ready stores sized for a startup budget, covering the essentials that actually drive early sales.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Shopify Store Design & Development",
    desc: "Custom Shopify store development built around your product catalog and brand, designed to guide visitors toward checkout rather than just browsing.",
    ctaText: "Know Our Services",
    services: [
      "Shopify Store Setup",
      "Custom Shopify Store Design",
      "Product Page Development",
      "Collection Page Development",
      "Checkout Customization",
      "Shopify Store Development",
      "Mobile-Optimized Shopify Stores",
      "Conversion-Focused Store Design",
    ],
  },
  {
    number: "02",
    title: "Shopify Plus Development",
    desc: "Shopify Plus development agency work for high-volume merchants needing enterprise-scale architecture, automation, and multi-store capability.",
    ctaText: "Know Our Services",
    services: [
      "Shopify Plus Development",
      "Shopify Plus Migration",
      "Multi-Store Setup",
      "B2B Shopify Development",
      "Custom Checkout Extensions",
      "Shopify Plus App Integration",
      "Automation & Shopify Flow",
      "Enterprise-Scale Store Architecture",
    ],
  },
  {
    number: "03",
    title: "Custom Shopify App Development",
    desc: "Custom Shopify app development for functionality that off-the-shelf apps from the Shopify App Store simply don't cover for your specific store.",
    ctaText: "Know Our Services",
    services: [
      "Custom Shopify App Development",
      "Private App Development",
      "Shopify API Integration",
      "Third-Party App Integration",
      "Custom Shopify Functions",
      "Shopify Checkout Extensions",
      "Inventory & Order Automation Apps",
      "Custom Storefront Features",
    ],
  },
  {
    number: "04",
    title: "Ecommerce Migration & Replatforming",
    desc: "Shopify migration services that move your store, products, and rankings over safely, without losing what your current SEO has already built.",
    ctaText: "Know Our Services",
    services: [
      "Shopify Migration Services",
      "WooCommerce to Shopify Migration",
      "Magento to Shopify Migration",
      "Custom Platform to Shopify Migration",
      "Data & Product Migration",
      "SEO-Safe Migration",
      "Zero-Downtime Migration Planning",
      "Post-Migration Testing",
    ],
  },
  {
    number: "05",
    title: "Shopify Theme Development & Customization",
    desc: "Shopify theme development that goes beyond editing a purchased theme, built or customized to match exactly what your store needs to do.",
    ctaText: "Know Our Services",
    services: [
      "Shopify Theme Development",
      "Custom Theme Coding",
      "Theme Customization",
      "Liquid Development",
      "Theme Speed Optimization",
      "Responsive Theme Design",
      "Theme Section & Block Development",
      "Theme Upgrades & Maintenance",
    ],
  },
  {
    number: "06",
    title: "Shopify Store Optimization & Support",
    desc: "Ongoing Shopify SEO optimization and Shopify speed optimization to keep your store converting well after the initial launch.",
    ctaText: "Know Our Services",
    services: [
      "Shopify SEO Optimization",
      "Shopify Speed Optimization",
      "Conversion Rate Optimization",
      "Ongoing Store Maintenance",
      "Bug Fixes & Updates",
      "Shopify Store Audits",
      "A/B Testing Support",
      "Post-Launch Support",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Store & Business Discovery",
    desc: "We start by understanding your products, target customers, and current sales challenges, identifying what your Shopify store specifically needs to do to convert visitors in your category.",
  },
  {
    number: "02",
    title: "Shopify Architecture Planning",
    desc: "We plan the store's structure, app requirements, and technical approach upfront, whether that's standard Shopify, Shopify Plus, or a migration from an existing platform.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    desc: "We design product pages, collections, and checkout flow around your brand and conversion goals, creating a structure you can review before full development begins.",
  },
  {
    number: "04",
    title: "Development & App Integration",
    desc: "We build the store, theme, and any custom apps or integrations required, keeping speed and mobile performance in mind throughout development.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test checkout flow, payment processing, and site performance thoroughly across devices before launch, catching issues before they cost you real sales.",
  },
  {
    number: "06",
    title: "Launch & Ongoing Optimization",
    desc: "We launch the store, then continue optimizing speed, conversion rate, and SEO as real customer data comes in, refining what's actually working.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Shopify Development Built Around Revenue, Not Just Design",
    desc: "We treat every Shopify project as a sales tool first and a design project second. Product pages, checkout flow, and site speed are all built with conversion in mind, so the finished store isn't just visually polished, it's structured to actually turn visitors into paying customers.",
  },
  {
    number: "02",
    title: "Shopify Plus Expertise for Growing Brands",
    desc: "As a Shopify Plus development agency, we understand the added complexity of enterprise-scale stores, custom checkout logic, multi-store setups, and B2B requirements that standard Shopify plans can't handle, giving growing brands the infrastructure to match their scale.",
  },
  {
    number: "03",
    title: "Custom App Development When Off-the-Shelf Apps Fall Short",
    desc: "When your store needs functionality that no App Store app quite covers, we build it directly through custom Shopify app development, giving you exactly the feature you need instead of stacking multiple apps that slow your store down.",
  },
  {
    number: "04",
    title: "Migration Handled Without Losing SEO or Sales",
    desc: "Moving platforms is risky if redirects, product data, and search rankings aren't handled carefully. Our Shopify migration services follow a documented process built to protect your existing SEO equity and sales continuity throughout the switch.",
  },
  {
    number: "05",
    title: "Store Performance Built for Speed and Conversion",
    desc: "A slow Shopify store loses sales regardless of how good the design looks. We prioritize Shopify speed optimization and conversion-focused structure from the first line of code, not as an afterthought once the store is already live.",
  },
  {
    number: "06",
    title: "Support That Continues After Launch",
    desc: "Shopify store development doesn't end at launch, we provide ongoing maintenance, bug fixes, and optimization support so your store keeps performing as your product catalog and traffic grow, not just on day one.",
  },
];

const FAQS = [
  {
    question: "How much does it cost to hire a Shopify developer in India?",
    answer:
      "Cost depends on scope, a store built on a standard theme with light customization costs far less than a fully custom Shopify Plus build with custom apps. We scope pricing after understanding your specific requirements, product catalog size, and any custom functionality needed, rather than quoting a flat rate upfront.",
  },
  {
    question: "What's the difference between Shopify and Shopify Plus?",
    answer:
      "Shopify Plus is built for higher-volume merchants, offering greater checkout customization, multi-store management, B2B functionality, and higher API limits than standard Shopify plans. Most growing brands stay on standard Shopify until traffic, catalog complexity, or specific features genuinely require the added capability Shopify Plus provides.",
  },
  {
    question: "Can you build a custom Shopify app for my store?",
    answer:
      "Yes, custom Shopify app development is one of our core services, used when existing Shopify App Store apps don't cover a specific feature your store needs. We build private apps and custom functionality tailored to your exact requirements rather than relying on generic third-party solutions.",
  },
  {
    question: "How long does it take to build a Shopify store?",
    answer:
      "Timeline depends on complexity, a standard store with light customization typically takes a few weeks, while a Shopify Plus build with custom apps and migration can take longer. We provide a specific timeline once your requirements, product catalog, and any custom features are clear.",
  },
  {
    question: "Can you migrate my existing store to Shopify without losing SEO rankings?",
    answer:
      "Yes, our Shopify migration services follow a structured process covering redirects, metadata preservation, and product data migration specifically to protect your existing search rankings. We test thoroughly before and after cutover to catch any issues that could affect your organic traffic.",
  },
  {
    question: "Do you provide support after the Shopify store is launched?",
    answer:
      "Yes, we offer ongoing maintenance covering bug fixes, speed optimization, and feature updates after launch, since a Shopify store's performance depends on continued attention, not just the initial build. Most clients work with us on an ongoing basis rather than a single one-time project.",
  },
];

export default function ShopifyEcommerceDevelopment() {
  return (
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="Shopify & Ecommerce Development"
      icon={ShoppingCart}
      description="Shopify stores engineered to turn traffic into orders, not just look good, are built around checkout, speed and real conversion for your brand."
      heroTitle="Get More Sales With a Shopify Store Built to Convert"
      heroDescription="Shopify stores engineered to turn traffic into orders, not just look good, are built around checkout, speed and real conversion for your brand."
      heroCtaText="Get a Free Shopify Store Audit"
      capabilitiesHeading="Built for Brands Ready to Sell More on Shopify"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Shopify Store and Real Sales"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Brands Trust Us With Their Shopify Store"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn a Shopify Build Into a Selling Machine"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building Shopify Stores That Sell Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every Shopify project, with the same attention to detail whether a client is nearby or on the other side of the world. We work as a Shopify development agency for D2C brands and retailers across India, providing Shopify e-commerce development company support built around each store's specific products and customers. For brands looking to hire a Shopify developer beyond India, we support clients worldwide remotely, delivering the same Shopify Plus development agency standard of work regardless of location or time zone. Whether you're launching your first store in Prayagraj or migrating an enterprise catalog from anywhere else, our approach starts with the same question: what does your store actually need to convert more of its visitors."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Shopify Store That Actually Sells?"
      ctaText="Whether you're launching your first Shopify store, migrating from another platform, or need a custom app your current setup can't support, a good-looking store isn't the same as one that converts. Let's talk through your products and requirements and scope what a store built for sales would actually involve."
      ctaPrimaryText="Talk to a Shopify Development Specialist"
      ctaSecondaryText="Get Your Free Shopify Store Audit"
    />
  );
}
