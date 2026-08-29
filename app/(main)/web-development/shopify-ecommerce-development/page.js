import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Palette,
  CreditCard,
  Package,
  Gauge,
  Puzzle,
  Search,
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

const SERVICE_ITEMS = [
  {
    icon: Palette,
    heading: "Custom Shopify Theme Development",
    description:
      "We design and build Shopify themes around your brand instead of relying on stock templates, so your store looks distinct and matches how you actually sell.",
  },
  {
    icon: CreditCard,
    heading: "Secure Checkout & Payment Integration",
    description:
      "Smooth, trustworthy checkout experiences with the payment gateways your customers actually use, tuned to reduce cart abandonment at the final step.",
  },
  {
    icon: Package,
    heading: "Product Catalog & Inventory Setup",
    description:
      "From 20 SKUs to 20,000, we structure collections, variants, and inventory so your catalog stays manageable as it grows, not chaotic.",
  },
  {
    icon: Gauge,
    heading: "Store Speed & Mobile Optimization",
    description:
      "Most ecommerce traffic is mobile. We optimize page speed and mobile UX so shoppers don't bounce before they even see your products.",
  },
  {
    icon: Puzzle,
    heading: "App Integrations & Automation",
    description:
      "We connect the apps you need — reviews, email marketing, shipping, inventory sync — and automate the repetitive parts of running a store.",
  },
  {
    icon: Search,
    heading: "Ecommerce SEO & Migration",
    description:
      "Whether you're launching fresh or migrating from another platform, we handle SEO-safe migrations and structure your store to actually rank.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Store Strategy & Platform Setup",
    body: "We map out your catalog, customer journey, and growth plans before choosing the right Shopify plan and structure for your store.",
  },
  {
    title: "Design & Theme Development",
    body: "A custom or heavily customized theme gets built around your brand and products, designed mobile-first for real shoppers.",
  },
  {
    title: "Apps, Payments & Shipping Setup",
    body: "We configure payment gateways, shipping rules, taxes, and the apps your store needs to actually run day-to-day.",
  },
  {
    title: "Launch, Testing & Growth Support",
    body: "We test checkout flows end-to-end before launch, then stick around for performance monitoring and ongoing store improvements.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Specialist Shopify Developers",
    description:
      "We focus on Shopify and ecommerce builds specifically, not general websites, so we know the platform's quirks and workarounds inside out.",
  },
  {
    number: "002",
    title: "Built for Conversions",
    description:
      "Every store is designed around smooth checkout flows and clear product pages that turn browsers into buyers.",
  },
  {
    number: "003",
    title: "Mobile Shopper Ready",
    description:
      "Fast-loading, mobile-first storefronts designed for how people actually shop today — on their phones, in short sessions.",
  },
  {
    number: "004",
    title: "Scales From 20 to 20,000 Products",
    description:
      "Whether you're launching a small catalog or migrating an established store, we structure it to handle growth without a rebuild.",
  },
  {
    number: "005",
    title: "Secure Payments, Global Reach",
    description:
      "Trusted payment integrations and store architecture built to serve customers reliably across India and international markets.",
  },
  {
    number: "006",
    title: "Ongoing Store Support",
    description:
      "Apps break, platforms update, and traffic grows — we provide ongoing support so your store keeps running smoothly after launch.",
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
    <>
      <BpoHero
        heading="Shopify & Ecommerce Development Company in India"
        description="Fast-loading, conversion-focused online stores with smooth checkout experiences — built for speed, mobile shoppers, and global scalability, from a team in Prayagraj serving all of India."
        img="/web-dev.webp"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/website.jpg"
              alt="Shopify and ecommerce store development at BizzBuzz Creations"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(200deg, rgba(5,11,22,0.75) 0%, rgba(11,96,176,0.3) 45%, transparent 75%)",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-3 text-white">
              Online Stores Built to Sell, Not Just Look Good
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              As specialist Shopify website developers, we build fast-loading,
              conversion-focused online stores with smooth checkout
              experiences, designed for speed, mobile shoppers, and global
              scalability — from 20 products to 20,000.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service ecommerce development team in
              Prayagraj, proudly serving clients locally across Allahabad
              and Uttar Pradesh, as well as businesses across the UK, USA,
              and India, from launch to ongoing store management.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Shopify & Ecommerce Development"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Shopify & Ecommerce Development Process"
            description="From strategy to launch, we build stores that convert, not just stores that exist. Our four-step process keeps checkout, speed, and scalability front and center."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* We are */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Shopify & Ecommerce Development Company"
          description="BizzBuzz Creations is an ecommerce development company in Prayagraj, building fast, secure, and scalable Shopify stores for businesses across India and beyond."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      <BpoWhyChooseDark />
      <div className="bg-black pt-10">
        <CTA />
      </div>
    </>
  );
}
