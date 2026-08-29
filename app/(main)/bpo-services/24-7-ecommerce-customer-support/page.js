import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Clock,
  ShoppingCart,
  RotateCcw,
  MessageCircle,
  Bot,
  Headset,
} from "lucide-react";

export const metadata = {
  title: "24/7 & E-commerce Customer Support | BizzBuzz Creations",
  description:
    "24/7 and e-commerce customer support outsourcing in India — order queries, returns, and chat support covered round the clock, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/24-7-ecommerce-customer-support",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Clock,
    heading: "Round-the-Clock Support Coverage",
    description:
      "Shift-based agents cover every hour, so your online store never leaves a customer waiting until morning for a reply.",
  },
  {
    icon: ShoppingCart,
    heading: "Order & Shipping Query Handling",
    description:
      "Order status, delivery delays, and tracking questions get resolved quickly, keeping customers informed without you lifting a finger.",
  },
  {
    icon: RotateCcw,
    heading: "Returns & Refunds Management",
    description:
      "Returns, exchanges, and refund requests are processed consistently, following your policies without unnecessary back-and-forth.",
  },
  {
    icon: MessageCircle,
    heading: "Live Chat & Email Support",
    description:
      "Trained agents handle live chat and email queries across your storefront, keeping response times low even during sales spikes.",
  },
  {
    icon: Bot,
    heading: "Chatbot for After-Hours Queries",
    description:
      "Chatbot support services handle the late-night rush of common questions, with agents picking up anything that needs a human.",
  },
  {
    icon: Headset,
    heading: "Multi-Channel Support",
    description:
      "Phone, chat, email, and social DMs are covered under one consistent support process, so customers get the same experience everywhere.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understand Order Flow & Policies",
    body: "We learn your platform, shipping process, and return policies before a single ticket is answered on your behalf.",
  },
  {
    title: "Set Up Shift-Based Coverage",
    body: "Agents are scheduled across shifts to guarantee true 24/7 support outsourcing, not just extended business hours.",
  },
  {
    title: "Launch With Chatbot Backup",
    body: "Chatbot support services handle the late-night rush of repetitive questions, with agents on standby for anything more complex.",
  },
  {
    title: "Ongoing Monitoring & Feedback",
    body: "Response times, resolution rates, and customer feedback are tracked continuously, so support quality doesn't drift over time.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "True 24/7 Coverage",
    description:
      "Real shift-based staffing guarantees round-the-clock support, not just a wider business-hours window.",
  },
  {
    number: "002",
    title: "Ecommerce Platform Familiarity",
    description:
      "Agents are comfortable working across common ecommerce platforms and order management systems.",
  },
  {
    number: "003",
    title: "Fast Response Times",
    description:
      "Chat and email queries get handled quickly, even during sale-driven traffic spikes.",
  },
  {
    number: "004",
    title: "Chatbot + Human Hybrid",
    description:
      "Chatbots absorb repetitive after-hours queries while agents handle everything that needs real judgment.",
  },
  {
    number: "005",
    title: "Scales With Order Volume",
    description:
      "Support capacity flexes with seasonal spikes and sale events instead of staying fixed year-round.",
  },
  {
    number: "006",
    title: "Transparent Reporting",
    description:
      "Response times, resolution rates, and ticket volumes are reported regularly, not summarized once a month.",
  },
];

const FAQS = [
  {
    question: "Which ecommerce platforms do you support?",
    answer:
      "We work with agents familiar across common platforms and order management systems — we'll confirm compatibility with your specific setup during onboarding.",
  },
  {
    question: "What's your response time for chat and email queries?",
    answer:
      "We agree on a clear response-time SLA upfront and track it continuously, so you know exactly what to expect during normal and peak periods.",
  },
  {
    question: "Do you provide support during holidays and sale events?",
    answer:
      "Yes, we can scale up shift coverage specifically around sale events and holiday traffic spikes when order volume rises.",
  },
  {
    question: "How much does 24/7 customer support outsourcing cost?",
    answer:
      "Pricing depends on channel mix, ticket volume, and coverage hours — we scope every engagement and provide a clear, tailored quote.",
  },
  {
    question: "Can you support us across phone, chat, and social media?",
    answer:
      "Yes, we cover multi-channel support including phone, live chat, email, and social media DMs under one consistent process.",
  },
];

export default function TwentyFourSevenEcommerceCustomerSupport() {
  return (
    <>
      <BpoHero
        heading="24/7 & E-commerce Customer Support in India"
        description="Online stores and growing brands can't afford support that sleeps. Order queries, returns, and chat support covered round the clock, with chatbots handling the late-night rush."
        img="/BPO%20service.png"
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
              src="/BPO.webp"
              alt="24/7 e-commerce customer support at BizzBuzz Creations"
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
              Support That Never Clocks Out
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Online stores and growing brands can't afford support that
              sleeps. Our 24/7 support outsourcing services and e-commerce
              customer support outsourcing cover order queries, returns, and
              chat support round the clock, with chatbot support services
              handling the late-night rush.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a BPO and customer support partner based in
              Prayagraj, serving ecommerce brands locally across Allahabad
              and Uttar Pradesh, as well as businesses across India, so your
              customers always get a response.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our 24/7 & Ecommerce Support"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our 24/7 Support Onboarding Process"
            description="We learn your store's policies and order flow first, then build round-the-clock coverage backed by chatbots for the quiet hours."
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
          title="24/7 & Ecommerce Customer Support Company"
          description="BizzBuzz Creations provides round-the-clock ecommerce customer support for growing brands across India, blending trained agents with chatbot backup."
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
