import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  MessageCircle,
  Package,
  Bot,
  Gift,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "WhatsApp Marketing Automation | BizzBuzz Creations",
  description:
    "WhatsApp marketing automation in India — order updates, offers, reminders, and chatbot replies where your customers already are, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/whatsapp-marketing-automation",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Package,
    heading: "Order Updates & Notifications",
    description:
      "Order confirmations, shipping updates, and delivery notifications get sent automatically on WhatsApp, where customers actually check them.",
  },
  {
    icon: Gift,
    heading: "Offers & Promotional Broadcasts",
    description:
      "Targeted offers and promotions reach customers on WhatsApp, with open rates far higher than email for time-sensitive messages.",
  },
  {
    icon: Bot,
    heading: "Chatbot Replies for Common Questions",
    description:
      "Automated chatbot replies handle common questions instantly, freeing your team from repeating the same answers all day.",
  },
  {
    icon: MessageCircle,
    heading: "Reminder & Follow-Up Messages",
    description:
      "Appointment reminders, payment follow-ups, and re-engagement messages get sent automatically at the right moment.",
  },
  {
    icon: ShieldCheck,
    heading: "Compliant Messaging Setup",
    description:
      "We set up WhatsApp Business automation in line with platform policies, so your messaging stays compliant and account-safe.",
  },
  {
    icon: BarChart3,
    heading: "Delivery & Response Tracking",
    description:
      "We track delivery, read rates, and responses, giving you visibility into how WhatsApp automation is actually performing.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Mapping Customer Touchpoints",
    body: "We identify where WhatsApp fits naturally into your customer journey — order updates, reminders, or common support questions.",
  },
  {
    title: "Building Messages & Chatbot Flows",
    body: "We design the actual message sequences and chatbot reply flows ourselves, rather than handing you a generic tool template.",
  },
  {
    title: "Connecting to Your CRM & Launch",
    body: "WhatsApp automation gets connected to your CRM so conversations and updates sync with your existing customer records.",
  },
  {
    title: "Monthly Review & Optimization",
    body: "Every workflow is reviewed and improved monthly — not left running on autopilot and forgotten after setup.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Where Your Customers Already Are",
    description:
      "WhatsApp automation reaches customers on the channel they actually check, with open rates far higher than email.",
  },
  {
    number: "002",
    title: "We Build the Messaging Ourselves",
    description:
      "We don't sell you a tool subscription and walk away — we build the message flows and chatbot replies ourselves.",
  },
  {
    number: "003",
    title: "Platform-Compliant Setup",
    description:
      "We set up automation in line with WhatsApp Business policies, keeping your account and messaging compliant.",
  },
  {
    number: "004",
    title: "CRM-Connected",
    description:
      "WhatsApp conversations and updates connect to your CRM, so customer records stay current automatically.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    description:
      "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
    title: "One Connected System",
    description:
      "We treat WhatsApp, email, and lead nurturing as one connected system, not separate campaigns running blind.",
  },
];

const FAQS = [
  {
    question: "Do you offer WhatsApp marketing automation?",
    answer:
      "Yes, we automate replies, reminders, updates, and customer interactions on WhatsApp as part of our marketing automation services.",
  },
  {
    question: "Is WhatsApp automation compliant with platform policies?",
    answer:
      "Yes, we set up WhatsApp Business automation in line with platform policies to keep your messaging and account compliant.",
  },
  {
    question: "Can WhatsApp automation handle customer support questions?",
    answer:
      "Yes, chatbot replies can handle common questions instantly, with more complex queries handed off to your team.",
  },
  {
    question: "How does WhatsApp automation connect to our CRM?",
    answer:
      "We connect WhatsApp conversations and updates to your CRM, so customer records and lead status stay current automatically.",
  },
  {
    question: "Why is WhatsApp automation more effective than email for some messages?",
    answer:
      "WhatsApp typically sees far higher open rates than email, making it especially effective for time-sensitive updates like order status and reminders.",
  },
];

export default function WhatsappMarketingAutomation() {
  return (
    <>
      <BpoHero
        heading="WhatsApp Marketing Automation in India"
        description="With open rates far higher than email, WhatsApp automation lets you send order updates, offers, and reminders where your customers already are, plus chatbot replies for common questions."
        img="/digitalmarketing.webp"
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
              src="/digital.webp"
              alt="WhatsApp marketing automation at BizzBuzz Creations"
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
              Reach Customers Where They Already Are
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              With open rates far higher than email, WhatsApp automation
              lets you send order updates, offers, and reminders where your
              customers already are, plus chatbot replies for common
              questions.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a marketing automation agency based in Prayagraj,
              helping businesses locally across Allahabad and Uttar
              Pradesh, as well as across India, put WhatsApp to work as a
              real sales and support channel.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our WhatsApp Marketing Automation"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our WhatsApp Automation Process"
            description="We map where WhatsApp fits into your customer journey first, then build and connect message flows and chatbot replies that actually help."
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
          title="WhatsApp Marketing Automation Company"
          description="BizzBuzz Creations builds WhatsApp automation for businesses across India, reaching customers with updates, offers, and support where they already are."
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
