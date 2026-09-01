import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Clock,
  Timer,
  MessageCircle,
  Share2,
  TrendingUp,
  CalendarClock,
} from "lucide-react";

export const metadata = {
  title: "24/7 & Ecommerce Customer Support | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides 24/7 e-commerce customer support outsourcing for online stores across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/24-7-ecommerce-customer-support",
  },
};

const CAPABILITIES = [
  {
    icon: Clock,
    title: "Ecommerce Stores Needing 24/7 Customer Support",
    desc: "Online shoppers browse and buy at all hours, but support teams limited to business hours miss most of that window. We provide ecommerce customer support outsourcing that keeps your store covered around the clock.",
  },
  {
    icon: Timer,
    title: "Brands Losing Sales to Slow Response Times",
    desc: "Slow support response often means a lost sale to a competitor who answered faster. We provide 24/7 customer support services built specifically to reduce response time and recover sales that would otherwise be lost.",
  },
  {
    icon: MessageCircle,
    title: "Businesses Needing Live Chat Support Coverage",
    desc: "Live chat converts hesitant shoppers, but only when someone's actually available to respond quickly. We provide live chat support outsourcing company services that keep chat genuinely responsive, not just technically online.",
  },
  {
    icon: Share2,
    title: "Stores Needing Multichannel Support (Email, Chat, Social)",
    desc: "Customers reach out across email, chat, and social media, and inconsistent handling across channels frustrates them. We provide multichannel customer support services that stay consistent no matter which channel a customer uses.",
  },
  {
    icon: TrendingUp,
    title: "Growing Brands Outgrowing Founder-Led Support",
    desc: "Founders handling support personally eventually can't keep pace as order volume grows past what one person can manage. We provide outsourced customer service company support that scales beyond founder-led capacity.",
  },
  {
    icon: CalendarClock,
    title: "Businesses Needing Seasonal or Peak-Time Support Scaling",
    desc: "Support volume spikes dramatically during sales events and festive seasons, straining teams sized for average days. We provide e-commerce helpdesk outsourcing that scales flexibly around your specific peak periods.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "24/7 Customer Support Coverage",
    desc: "Genuine round-the-clock coverage, so customers can always reach a real, capable support agent.",
    ctaText: "Know Our Services",
    services: [
      "Round-the-Clock Support Coverage",
      "Overnight & Weekend Support",
      "Holiday Coverage Planning",
      "Peak Season Support Scaling",
      "Time Zone Coverage Planning",
      "Emergency Support Handling",
      "Continuous Coverage Scheduling",
      "24/7 Performance Monitoring",
    ],
  },
  {
    number: "02",
    title: "Live Chat Support",
    desc: "Live chat that's actually responsive, converting hesitant browsers into confident buyers in real time.",
    ctaText: "Know Our Services",
    services: [
      "Live Chat Support Management",
      "Real-Time Query Resolution",
      "Chat Script Development",
      "Proactive Chat Engagement",
      "Chat-to-Sale Conversion Support",
      "Multilingual Live Chat",
      "Chat Response Time Optimization",
      "Live Chat Reporting",
    ],
  },
  {
    number: "03",
    title: "Email & Ticket Support",
    desc: "Email and ticket queues managed properly, so nothing sits unanswered while customers wait.",
    ctaText: "Know Our Services",
    services: [
      "Email Support Management",
      "Ticket Resolution Handling",
      "Help Desk Ticket Management",
      "Response Time SLA Management",
      "Email Template Development",
      "Ticket Prioritization",
      "Escalation Handling",
      "Email Support Reporting",
    ],
  },
  {
    number: "04",
    title: "Social Media & Multichannel Support",
    desc: "Consistent support across every channel your customers actually use to reach out.",
    ctaText: "Know Our Services",
    services: [
      "Social Media Message Support",
      "Multichannel Support Coordination",
      "WhatsApp Support Management",
      "Cross-Channel Query Tracking",
      "Unified Customer View Setup",
      "Channel Response Consistency",
      "Multichannel Reporting",
      "Channel Performance Analysis",
    ],
  },
  {
    number: "05",
    title: "Ecommerce Helpdesk Management",
    desc: "A helpdesk built specifically around ecommerce needs, orders, shipping, and returns, not generic ticketing.",
    ctaText: "Know Our Services",
    services: [
      "Ecommerce Helpdesk Setup",
      "Order & Shipping Query Support",
      "Return & Refund Support",
      "Product Query Handling",
      "Helpdesk Software Management",
      "FAQ & Knowledge Base Support",
      "Helpdesk Workflow Design",
      "Helpdesk Performance Tracking",
    ],
  },
  {
    number: "06",
    title: "Support Quality & Reporting",
    desc: "Clear reporting on response time and satisfaction, so you always know how support is actually performing.",
    ctaText: "Know Our Services",
    services: [
      "Support Quality Monitoring",
      "Customer Satisfaction Tracking",
      "Support Agent Performance Reporting",
      "Response Time Analytics",
      "Resolution Rate Tracking",
      "Monthly Support Reports",
      "Customer Feedback Analysis",
      "Ongoing Process Improvement",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Support Needs & Volume Discovery",
    desc: "We start by understanding your current support volume, common query types, and specific coverage requirements across channels.",
  },
  {
    number: "02",
    title: "Channel & Coverage Strategy",
    desc: "We define which channels need coverage and what hours genuinely require staffing, based on your actual customer patterns.",
  },
  {
    number: "03",
    title: "Agent Training & Knowledge Base Setup",
    desc: "We train agents on your specific products, policies, and common scenarios, building a knowledge base for consistent answers.",
  },
  {
    number: "04",
    title: "System & Helpdesk Integration",
    desc: "We integrate support with your existing helpdesk, ecommerce platform, and communication channels for seamless handling.",
  },
  {
    number: "05",
    title: "Launch & Initial Monitoring",
    desc: "We launch support coverage with close monitoring in the early weeks, refining processes based on real customer interactions.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Optimization",
    desc: "We provide regular reporting on response time and satisfaction, continuing to refine support as your business evolves.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Support Built Around Response Time, Not Just Ticket Closure",
    desc: "We prioritize how quickly customers actually get a genuine answer, not just how fast tickets get marked resolved, since slow responses lose sales even when tickets eventually close.",
  },
  {
    number: "02",
    title: "Genuine 24/7 Coverage Without Your Team Managing Shifts",
    desc: "We handle the scheduling complexity of round-the-clock coverage internally, so you get continuous availability without the operational burden of managing overnight staffing yourself.",
  },
  {
    number: "03",
    title: "Multichannel Support That Stays Consistent Across Every Platform",
    desc: "We manage email, chat, and social support together with a unified view of each customer, so messaging and information stay consistent regardless of which channel they use.",
  },
  {
    number: "04",
    title: "Ecommerce-Specific Expertise in Orders, Returns, and Shipping Queries",
    desc: "Our agents understand ecommerce-specific scenarios, order tracking, return policies, shipping delays, rather than treating every query as a generic support ticket.",
  },
  {
    number: "05",
    title: "Scalable Coverage That Handles Seasonal Peaks Without Delay",
    desc: "We scale support capacity around your specific peak periods, sales events, festive seasons, so response times don't degrade exactly when order volume is highest.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Response Time and Customer Satisfaction",
    desc: "You receive clear reporting on actual response times and satisfaction scores, giving you real visibility into support quality rather than a vague activity summary.",
  },
];

const FAQS = [
  {
    question: "How much does ecommerce customer support outsourcing cost in India?",
    answer:
      "Cost depends on support volume, channels covered, and coverage hours needed. We scope pricing after understanding your specific requirements, rather than offering a flat rate upfront for something this variable.",
  },
  {
    question: "Can you provide genuine 24/7 coverage, not just business hours?",
    answer:
      "Yes, genuine round-the-clock coverage is available, including overnight, weekends, and holidays, handled through coordinated scheduling on our end so you don't have to manage shifts internally.",
  },
  {
    question: "Do you handle live chat, email, and social media support together?",
    answer:
      "Yes, multichannel support is a core part of our service, managed with a unified view of each customer so messaging stays consistent regardless of which channel they reach out through.",
  },
  {
    question: "Will your agents understand our specific products and policies?",
    answer:
      "Yes, we train agents specifically on your business, products, and policies during onboarding, building a knowledge base that ensures consistent, accurate answers rather than generic responses.",
  },
  {
    question: "Can support scale up during peak seasons like festive sales?",
    answer:
      "Yes, we scale support capacity around your specific peak periods, ensuring response times don't degrade during your highest-volume moments like sales events or festive seasons.",
  },
  {
    question: "How do you measure whether outsourced support is actually working?",
    answer:
      "We track response time, resolution rate, and customer satisfaction scores, providing regular reporting so you can see real evidence of support performance rather than assuming it's working without verification.",
  },
];

export default function TwentyFourSevenEcommerceCustomerSupport() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="24/7 & E-commerce Customer Support"
      icon={Clock}
      description="24/7 ecommerce customer support built to answer real questions promptly, not just close tickets, keeping customers happy around the clock."
      heroTitle="Get Customer Support That Never Sleeps"
      heroDescription="24/7 ecommerce customer support built to answer real questions promptly, not just close tickets, keeping customers happy around the clock."
      heroCtaText="Get a Free Customer Support Consultation"
      capabilitiesHeading="Built for Stores Losing Sales to Slow Support Response"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Customer Question and a Resolved Issue"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Ecommerce Brands Trust Us With Customer Support"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Keep Your Customers Supported Around the Clock"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Supporting Customers Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every customer support engagement, with the same attention to response time whether a client is nearby or across the world. We provide e-commerce customer support outsourcing for stores across India, built around each store's specific order volume and customer patterns. For brands looking for a live chat support outsourcing company beyond India, we support clients worldwide remotely, delivering the same outsourced customer service company standard of work regardless of time zone. Whether you're a growing store in Prayagraj or a brand anywhere else scaling support for peak season, our approach starts with the same question: where are customers currently waiting too long for an answer."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Support That Never Sleeps?"
      ctaText="Whether you're losing sales to slow response times, need genuine 24/7 coverage, or want consistent support across every channel your customers use, business-hours-only support was never going to keep pace with how people actually shop online. Let's talk through your support needs and scope what real coverage would actually involve."
      ctaPrimaryText="Talk to a Customer Support Specialist"
      ctaSecondaryText="Get Your Free Customer Support Consultation"
    />
  );
}
