import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  ShoppingCart,
  RefreshCw,
  Package,
  Users,
  BarChart3,
  Repeat,
} from "lucide-react";

export const metadata = {
  title: "E-commerce & Retargeting Ads | BizzBuzz Creations",
  description:
    "E-commerce and retargeting ad campaigns in India — product ads and retargeting for shoppers who almost bought, recovering lost sales, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/ecommerce-retargeting-ads",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Package,
    heading: "Product Ad Campaigns",
    description:
      "We run product listing and catalog ads that put your inventory in front of shoppers actively searching for similar items.",
  },
  {
    icon: RefreshCw,
    heading: "Cart Abandonment Retargeting",
    description:
      "Shoppers who added to cart but didn't check out get retargeted with tailored ads, recovering sales you'd otherwise lose.",
  },
  {
    icon: ShoppingCart,
    heading: "Dynamic Product Retargeting",
    description:
      "We show past visitors the exact products they viewed, keeping your store top of mind until they're ready to purchase.",
  },
  {
    icon: Repeat,
    heading: "Repeat Purchase Campaigns",
    description:
      "We target past customers with campaigns designed to bring them back for a repeat purchase, not just chase new buyers.",
  },
  {
    icon: Users,
    heading: "Customer Segment Targeting",
    description:
      "Ads are tailored to different customer segments — new visitors, cart abandoners, repeat buyers — each with the right message.",
  },
  {
    icon: BarChart3,
    heading: "Revenue & ROAS Tracking",
    description:
      "We track return on ad spend and revenue directly, so you know retargeting is recovering real sales, not just clicks.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Store & Funnel Audit",
    body: "We review your store, product catalog, and current checkout funnel to identify where sales are actually being lost.",
  },
  {
    title: "Campaign & Retargeting Setup",
    body: "Product ads and retargeting audiences get built around cart abandoners, product viewers, and past customers.",
  },
  {
    title: "Launch & Real-Time Optimization",
    body: "Campaigns launch with close monitoring, adjusting creative and targeting as real conversion data comes in.",
  },
  {
    title: "Scale & Report on ROAS",
    body: "We scale what's recovering sales and report transparently on return on ad spend every month.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Ecommerce Specialists",
    description:
      "Our team specializes in performance marketing for e-commerce needs, from product ads to full-funnel retargeting.",
  },
  {
    number: "002",
    title: "Recover Lost Sales",
    description:
      "We help you recover lost sales from shoppers who almost bought but didn't complete checkout.",
  },
  {
    number: "003",
    title: "Repeat Purchase Focus",
    description:
      "Campaigns are also built to boost repeat purchases, not just chase one-time new customers.",
  },
  {
    number: "004",
    title: "Segment-Specific Messaging",
    description:
      "Different customer segments get different retargeting messages, tailored to where they are in the buying journey.",
  },
  {
    number: "005",
    title: "ROAS-Tracked Campaigns",
    description:
      "We track return on ad spend and revenue directly, so results are measured in real business impact.",
  },
  {
    number: "006",
    title: "A Team, Not a Vendor",
    description:
      "Think of us less like a vendor and more like a hired paid marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "What is retargeting and how does it help my online store?",
    answer:
      "Retargeting shows ads to people who already visited your store or viewed products but didn't buy, bringing them back to complete a purchase they were already considering.",
  },
  {
    question: "Which platforms do you use for e-commerce ads?",
    answer:
      "We typically run product and retargeting campaigns across Google Shopping, Facebook, and Instagram, depending on where your customers are most active.",
  },
  {
    question: "Can you help with cart abandonment specifically?",
    answer:
      "Yes, cart abandonment retargeting is one of our core e-commerce campaign types, aimed directly at recovering near-miss sales.",
  },
  {
    question: "Do you also target past customers for repeat purchases?",
    answer:
      "Yes, we build campaigns specifically aimed at bringing past customers back for repeat purchases, not just acquiring new buyers.",
  },
  {
    question: "How do you measure success for e-commerce campaigns?",
    answer:
      "We track return on ad spend and actual revenue generated, giving you a clear picture of real business impact from your ad budget.",
  },
];

export default function EcommerceRetargetingAds() {
  return (
    <>
      <BpoHero
        heading="E-commerce & Retargeting Ads in India"
        description="Running an online store? Our team specializes in performance marketing for e-commerce needs, from product ads to retargeting shoppers who almost bought, helping you recover lost sales and boost repeat purchases."
        img="/ads.webp"
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
              src="/leadGen.webp"
              alt="Ecommerce and retargeting ads at BizzBuzz Creations"
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
              Recover Lost Sales, Boost Repeat Purchases
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Running an online store? Our team specializes in performance
              marketing for e-commerce needs, from product ads to
              retargeting shoppers who almost bought, helping you recover
              lost sales and boost repeat purchases.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a paid marketing agency based in Prayagraj,
              proudly serving online stores locally across Allahabad and
              Uttar Pradesh, as well as e-commerce brands across India.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our E-commerce & Retargeting Ads"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our E-commerce Ads Process"
            description="We audit your store and funnel first, then build product and retargeting campaigns designed specifically to recover lost sales and drive repeat purchases."
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
          title="E-commerce & Retargeting Ads Company"
          description="BizzBuzz Creations runs product and retargeting ad campaigns for online stores across India, focused on recovering lost sales and boosting repeat purchases."
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
