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
  title: "Ecommerce & Retargeting Ads Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an e-commerce ads agency running retargeting and PPC campaigns for stores across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/ecommerce-retargeting-ads",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & New Store Launches",
    desc: "New stores need to build initial traffic and recover early cart abandonment without a big budget. We set up lean product and retargeting campaigns that capture early demand and don't waste budget on cold traffic alone.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMB stores often lose sales to abandoned carts and never retarget those shoppers. We build product and retargeting ads sized for SMB budgets, focused on recovering the sales already sitting in your cart data.",
  },
  {
    icon: Building,
    title: "Enterprises & High-Volume Retailers",
    desc: "Large catalogs need retargeting structured across thousands of SKUs and customer segments. We run ecommerce ad campaigns at enterprise scale, structured for high SKU counts and multi-segment retargeting.",
  },
  {
    icon: Package,
    title: "D2C & Product Brands",
    desc: "D2C brands depend on retargeting to turn browsers into buyers and buyers into repeat customers. We build dynamic product retargeting and repeat purchase campaigns tailored to your specific catalog and margins.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing an Ecommerce Ads Partner",
    desc: "Agencies managing ecommerce clients need a specialist partner for product and retargeting campaigns. We work as a white-label ecommerce ads partner, handling execution agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Stores Losing Sales to Cart Abandonment",
    desc: "Stores with high cart abandonment and no retargeting strategy are leaving revenue on the table. We build cart abandonment and retargeting campaigns specifically designed to recover those near-miss sales.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Product Ad Campaigns",
    desc: "We run product listing and catalog ads that put your inventory in front of shoppers actively searching for similar items.",
    ctaText: "Know Our Services",
    services: [
      "Product Listing Ads",
      "Catalog Ad Setup",
      "Google Shopping Ads",
      "Meta Catalog Ads",
      "Product Feed Optimization",
      "Category-Level Ad Structuring",
      "New Arrival Campaigns",
      "Seasonal Product Campaigns",
    ],
  },
  {
    number: "02",
    title: "Cart Abandonment Retargeting",
    desc: "Shoppers who added to cart but didn't check out get retargeted with tailored ads, recovering sales you'd otherwise lose.",
    ctaText: "Know Our Services",
    services: [
      "Cart Abandonment Ad Setup",
      "Abandonment Audience Building",
      "Time-Delayed Retargeting",
      "Discount-Triggered Retargeting",
      "Cross-Platform Cart Retargeting",
      "Abandonment Rate Analysis",
      "Recovery Campaign Testing",
      "Abandonment Reporting",
    ],
  },
  {
    number: "03",
    title: "Dynamic Product Retargeting",
    desc: "We show past visitors the exact products they viewed, keeping your store top of mind until they're ready to purchase.",
    ctaText: "Know Our Services",
    services: [
      "Dynamic Product Ads",
      "Product View Retargeting",
      "Cross-Sell Retargeting",
      "Upsell Retargeting",
      "Personalized Ad Creative",
      "Product Feed Sync",
      "Browse Abandonment Retargeting",
      "Dynamic Ad Performance Tracking",
    ],
  },
  {
    number: "04",
    title: "Repeat Purchase Campaigns",
    desc: "We target past customers with campaigns designed to bring them back for a repeat purchase, not just chase new buyers.",
    ctaText: "Know Our Services",
    services: [
      "Repeat Customer Targeting",
      "Post-Purchase Retargeting",
      "Replenishment Campaigns",
      "Loyalty-Focused Ads",
      "Customer Lifetime Value Campaigns",
      "Win-Back Campaigns",
      "Cross-Category Retargeting",
      "Repeat Purchase Reporting",
    ],
  },
  {
    number: "05",
    title: "Customer Segment Targeting",
    desc: "Ads are tailored to different customer segments — new visitors, cart abandoners, repeat buyers — each with the right message.",
    ctaText: "Know Our Services",
    services: [
      "Customer Segmentation",
      "New Visitor Targeting",
      "Segment-Specific Messaging",
      "Funnel Stage Targeting",
      "High-Value Customer Targeting",
      "Segment Performance Analysis",
      "Audience Layering",
      "Segment-Based Budget Allocation",
    ],
  },
  {
    number: "06",
    title: "Revenue & ROAS Tracking",
    desc: "We track return on ad spend and revenue directly, so you know retargeting is recovering real sales, not just clicks.",
    ctaText: "Know Our Services",
    services: [
      "ROAS Tracking Setup",
      "Revenue Attribution",
      "Ecommerce Conversion Tracking",
      "Custom ROAS Dashboards",
      "Recovered Revenue Reporting",
      "Campaign-Level Revenue Breakdown",
      "Weekly Performance Reviews",
      "Monthly ROAS Reports",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Store & Funnel Audit",
    desc: "We review your store, product catalog, and current checkout funnel to identify where sales are actually being lost.",
  },
  {
    number: "02",
    title: "Campaign & Retargeting Setup",
    desc: "Product ads and retargeting audiences get built around cart abandoners, product viewers, and past customers.",
  },
  {
    number: "03",
    title: "Tracking & Feed Setup",
    desc: "We set up conversion tracking and product feed integration so every ad decision is based on accurate revenue data.",
  },
  {
    number: "04",
    title: "Launch & Real-Time Optimization",
    desc: "Campaigns launch with close monitoring, adjusting creative and targeting as real conversion data comes in.",
  },
  {
    number: "05",
    title: "Segment Testing & Refinement",
    desc: "We test messaging and offers across different customer segments, refining what actually recovers sales for each group.",
  },
  {
    number: "06",
    title: "Scale & Report on ROAS",
    desc: "We scale what's recovering sales and report transparently on return on ad spend every month.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Ecommerce Specialists",
    desc: "Our team specializes in performance marketing for e-commerce needs, from product ads to full-funnel retargeting.",
  },
  {
    number: "02",
    title: "Recover Lost Sales",
    desc: "We help you recover lost sales from shoppers who almost bought but didn't complete checkout.",
  },
  {
    number: "03",
    title: "Repeat Purchase Focus",
    desc: "Campaigns are also built to boost repeat purchases, not just chase one-time new customers.",
  },
  {
    number: "04",
    title: "Segment-Specific Messaging",
    desc: "Different customer segments get different retargeting messages, tailored to where they are in the buying journey.",
  },
  {
    number: "05",
    title: "ROAS-Tracked Campaigns",
    desc: "We track return on ad spend and revenue directly, so results are measured in real business impact.",
  },
  {
    number: "06",
    title: "A Team, Not a Vendor",
    desc: "Think of us less like a vendor and more like a hired paid marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "How much does ecommerce ads management cost in India?",
    answer:
      "Cost typically includes both our management fee and your ad spend budget, kept separate. We scope management pricing after understanding your product catalog, margins, and current performance, rather than offering a flat rate upfront.",
  },
  {
    question: "Can you manage ads for a Shopify store specifically?",
    answer:
      "Yes, Shopify-specific ads management is a core part of our service, including pixel setup, product feed optimization, and app integrations built around how Shopify stores actually operate.",
  },
  {
    question: "How does retargeting help recover abandoned carts?",
    answer:
      "Dynamic retargeting shows shoppers the exact products they viewed or added to cart in a previous visit, reminding them of genuine interest rather than showing a generic ad. This typically recovers a meaningful share of otherwise lost sales.",
  },
  {
    question: "What's a good ROAS for ecommerce ad campaigns?",
    answer:
      "A \"good\" ROAS varies significantly by product margin and business model, there's no universal benchmark that applies to every store. We help establish a realistic target based on your specific margins, then optimize campaigns toward that number.",
  },
  {
    question: "Do you manage both Google Shopping and Meta ads together?",
    answer:
      "Yes, we manage Shopping, search, and social ecommerce ads together as one coordinated strategy, since most stores benefit from combined visibility across how shoppers actually research and buy products.",
  },
  {
    question: "How long before ecommerce ads start showing profitable results?",
    answer:
      "Initial data usually comes in within the first one to two weeks, though meaningful ROAS improvement typically takes four to six weeks as retargeting audiences build and campaigns gather enough data to optimize efficiently.",
  },
];

export default function EcommerceRetargetingAds() {
  return (
    <ServiceDetailPage
      sectionLabel="Paid Marketing"
      label="E-commerce & Retargeting Ads"
      icon={ShoppingCart}
      description="Running an online store? Our team specializes in performance marketing for e-commerce needs, from product ads to retargeting shoppers who almost bought, helping you recover lost sales and boost repeat purchases."
      heroTitle="E-commerce & Retargeting Ads in India"
      heroDescription="Running an online store? Our team specializes in performance marketing for e-commerce needs, from product ads to retargeting shoppers who almost bought, helping you recover lost sales and boost repeat purchases."
      capabilitiesHeading="Built for Stores Ready to Recover Lost Sales"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Ecommerce & Retargeting Ads"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Stores Trust Us to Run Their Retargeting Ads"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Near-Miss Sales Into Real Revenue"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Ecommerce Ads Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we run every ecommerce ads engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprise retailers across India, sizing campaigns to each store's actual catalog and cart abandonment rate. For stores looking to run ecommerce ads beyond India, we manage campaigns remotely, tracking ROAS across markets and time zones to the same standard regardless of location. Whether you're a startup running your first retargeting campaign or an enterprise managing retargeting across thousands of SKUs, our approach starts with auditing where you're actually losing sales."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Recover the Sales You're Already Losing?"
      ctaText="Whether you need cart abandonment retargeting set up for the first time, product ads built around your full catalog, or a repeat purchase campaign for existing customers, the right approach depends on where your store is actually losing sales. Let's talk through your funnel and scope what ecommerce ad management would actually involve."
      ctaPrimaryText="Talk to an Ecommerce Ads Specialist"
      ctaSecondaryText="Get Your Free Ecommerce Ads Audit"
    />
  );
}
