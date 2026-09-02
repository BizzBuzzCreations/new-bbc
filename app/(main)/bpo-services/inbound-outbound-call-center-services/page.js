import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  PhoneCall,
  PhoneMissed,
  Clock,
  Building2,
  PhoneOutgoing,
  Globe,
  Languages,
} from "lucide-react";

export const metadata = {
  title: "Inbound & Outbound Call Center | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides inbound and outbound call center services for businesses across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/inbound-outbound-call-center-services",
  },
};

const CAPABILITIES = [
  {
    icon: PhoneMissed,
    title: "Businesses Missing Calls They Can't Afford to Lose",
    desc: "Every missed call is a potential customer lost to a competitor who happened to answer first. We provide inbound call center services built to ensure every call gets handled promptly and professionally.",
  },
  {
    icon: Clock,
    title: "Ecommerce Brands Needing 24/7 Customer Support Coverage",
    desc: "Ecommerce customers expect support at any hour, not just during standard business hours. We provide 24/7 call center services that keep your store covered around the clock without you managing shifts.",
  },
  {
    icon: Building2,
    title: "Small Businesses Needing Call Center Support Without In-House Staff",
    desc: "Small businesses often can't justify hiring dedicated phone staff, even though missed calls directly cost them revenue. We provide call center services for small business sized to fit smaller budgets without sacrificing quality.",
  },
  {
    icon: PhoneOutgoing,
    title: "Businesses Needing Outbound Sales & Follow-Up Calling",
    desc: "Sales opportunities go cold without prompt, consistent follow-up, which many internal teams struggle to sustain. We provide outbound call center services built around timely, professional follow-up that keeps opportunities alive.",
  },
  {
    icon: Globe,
    title: "Companies Needing Offshore Call Center Cost Savings",
    desc: "Businesses running in-house call teams often pay significantly more than outsourcing to an experienced offshore team. We provide offshore call center services that deliver quality coverage at meaningfully lower cost.",
  },
  {
    icon: Languages,
    title: "Businesses Needing Multilingual Call Center Coverage",
    desc: "Serving customers across different languages with in-house staff is expensive and difficult to schedule reliably. We provide multilingual call center services that cover multiple languages without complex internal staffing.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Inbound Call Center Services",
    desc: "Every inbound call answered promptly and handled professionally, representing your business the way you'd want.",
    ctaText: "Know Our Services",
    services: [
      "Inbound Call Answering",
      "Customer Query Handling",
      "Order & Booking Support",
      "Inbound Call Routing",
      "After-Hours Call Coverage",
      "Multilingual Inbound Support",
      "Inbound Script Development",
      "Inbound Call Reporting",
    ],
  },
  {
    number: "02",
    title: "Outbound Call Center Services",
    desc: "Outbound calling that follows up consistently and professionally, keeping sales opportunities and relationships alive.",
    ctaText: "Know Our Services",
    services: [
      "Outbound Sales Calling",
      "Follow-Up Call Campaigns",
      "Appointment Setting Calls",
      "Customer Feedback Calling",
      "Outbound Survey Calling",
      "Telemarketing Campaigns",
      "Outbound Script Development",
      "Outbound Call Reporting",
    ],
  },
  {
    number: "03",
    title: "24/7 Call Center Coverage",
    desc: "Genuine round-the-clock coverage, so your customers can always reach a real, capable agent.",
    ctaText: "Know Our Services",
    services: [
      "Round-the-Clock Call Coverage",
      "Overnight & Weekend Support",
      "Holiday Coverage Planning",
      "Peak-Hour Overflow Support",
      "Time Zone Coverage Planning",
      "Emergency Call Handling",
      "Continuous Coverage Scheduling",
      "24/7 Performance Monitoring",
    ],
  },
  {
    number: "04",
    title: "Customer Support Call Handling",
    desc: "Support calls handled with real problem-solving, not just a script read without context.",
    ctaText: "Know Our Services",
    services: [
      "Customer Support Call Handling",
      "Complaint Resolution Calling",
      "Technical Support Calls",
      "Order Status Support",
      "Refund & Return Call Support",
      "Customer Retention Calling",
      "Support Escalation Handling",
      "Customer Support Reporting",
    ],
  },
  {
    number: "05",
    title: "Sales & Lead Qualification Calling",
    desc: "Sales calls that qualify genuine interest, so your sales team spends time on real opportunities.",
    ctaText: "Know Our Services",
    services: [
      "Lead Qualification Calls",
      "Sales Call Support",
      "Cold Calling Campaigns",
      "Warm Lead Follow-Up",
      "Sales Script Development",
      "CRM-Integrated Calling",
      "Sales Call Coaching",
      "Sales Call Reporting",
    ],
  },
  {
    number: "06",
    title: "Call Center Quality & Reporting",
    desc: "Ongoing quality monitoring and clear reporting, so you always know how your calls are actually going.",
    ctaText: "Know Our Services",
    services: [
      "Call Quality Monitoring",
      "Call Recording & Review",
      "Agent Performance Reporting",
      "Customer Satisfaction Tracking",
      "Call Volume Analytics",
      "Compliance Monitoring",
      "Monthly Performance Reports",
      "Ongoing Process Refinement",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Business & Call Volume Discovery",
    desc: "We start by understanding your current call volume, common query types, and specific requirements for inbound and outbound handling.",
  },
  {
    number: "02",
    title: "Script & Process Design",
    desc: "We design call scripts and handling processes around your actual products, policies, and common customer scenarios.",
  },
  {
    number: "03",
    title: "Agent Training & Onboarding",
    desc: "We train agents specifically on your business, ensuring they can handle genuine variation in calls, not just a rigid script.",
  },
  {
    number: "04",
    title: "System & CRM Integration",
    desc: "We integrate call handling with your existing CRM and systems, ensuring customer history and data stay properly connected.",
  },
  {
    number: "05",
    title: "Launch & Initial Monitoring",
    desc: "We launch call center operations with close monitoring in the early weeks, refining scripts and processes based on real calls.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Optimization",
    desc: "We provide regular reporting on call volume and outcomes, continuing to refine processes as your business needs evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Call Handling Built to Protect Your Customer Relationships",
    desc: "We treat every call as a genuine touchpoint with your brand, training agents to represent your business professionally rather than treating calls as generic tickets to close quickly.",
  },
  {
    number: "02",
    title: "Trained Agents, Not a Script Read Without Context",
    desc: "Our agents understand your products, policies, and common scenarios, allowing them to handle genuine variation in calls rather than breaking down whenever a conversation goes off-script.",
  },
  {
    number: "03",
    title: "Inbound and Outbound Handled Under One Coordinated Team",
    desc: "We manage both inbound and outbound calling together, keeping messaging and customer history consistent rather than fragmenting your call operations across separate, disconnected teams.",
  },
  {
    number: "04",
    title: "24/7 Coverage Without Your Business Managing Shifts",
    desc: "We handle the scheduling complexity of round-the-clock coverage internally, so you get continuous availability without the operational burden of managing overnight and weekend staffing yourself.",
  },
  {
    number: "05",
    title: "Offshore Cost Efficiency Without Sacrificing Call Quality",
    desc: "We deliver meaningful cost savings compared to in-house teams while maintaining genuine quality standards, rather than treating cost reduction as an excuse for lower service quality.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Calls Handled and Outcomes",
    desc: "You receive clear reporting on call volume, resolution rates, and outcomes, giving you real visibility into call center performance rather than a vague summary of activity.",
  },
];

const FAQS = [
  {
    question: "How much do call center outsourcing services cost in India?",
    answer:
      "Cost depends on call volume, coverage hours, and whether you need inbound, outbound, or both. We scope pricing after understanding your specific requirements, rather than offering a flat rate upfront for something this variable.",
  },
  {
    question: "Can you handle both inbound and outbound calls for our business?",
    answer:
      "Yes, managing both together under one coordinated team is a core part of our service, keeping customer history and messaging consistent rather than fragmenting operations across separate providers.",
  },
  {
    question: "Do you provide 24/7 call center coverage?",
    answer:
      "Yes, genuine round-the-clock coverage is available, including overnight, weekends, and holidays, handled through coordinated shift scheduling on our end so you don't have to manage it internally.",
  },
  {
    question: "Will your agents represent our brand professionally?",
    answer:
      "Yes, we train agents specifically on your business, products, and tone, so calls reflect your brand accurately rather than sounding like a generic, disconnected call center.",
  },
  {
    question: "Can call center services work for a small business, not just large companies?",
    answer:
      "Yes, we scope services to fit smaller call volumes and budgets, since missed calls cost small businesses just as much proportionally as they cost larger companies.",
  },
  {
    question: "How do you ensure call quality and customer satisfaction?",
    answer:
      "We monitor calls through recording review, quality scoring, and customer satisfaction tracking, providing regular reporting and adjusting training based on real performance data rather than assuming quality without verification.",
  },
];

export default function InboundOutboundCallCenterServices() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="Inbound & Outbound Call Center Services"
      icon={PhoneCall}
      description="Inbound and outbound call center services built to handle real call volume professionally, not just answer and transfer blindly."
      heroTitle="Get Call Handling That Doesn't Cost You Customers"
      heroDescription="Inbound and outbound call center services built to handle real call volume professionally, not just answer and transfer blindly."
      heroCtaText="Get a Free Call Center Consultation"
      heroImage="/Inbound & Outbound Call Center Services.png"
      capabilitiesHeading="Built for Businesses Losing Customers to Missed Calls"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Ringing Phone and a Resolved Call"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Their Call Center Operations"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Handle Your Calls Like They're Our Own Business"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Call Center Operations Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every call center engagement, with the same attention to call quality whether a client is nearby or across the world. We provide inbound call center services for businesses across India, built around each business's specific call volume and customer needs. For businesses looking for offshore call center services beyond India, we support clients worldwide remotely, delivering the same call center outsourcing company standard of work regardless of time zone. Whether you're a small business in Prayagraj or an ecommerce brand anywhere else needing 24/7 coverage, our approach starts with the same question: what happens on your calls today that's actually costing you customers."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Call Handling That Actually Keeps Customers?"
      ctaText="Whether you're missing calls during busy hours, need genuine 24/7 coverage, or want consistent outbound follow-up that doesn't fall through the cracks, an overwhelmed in-house team was never going to solve that. Let's talk through your call volume and scope what proper call center support would actually involve."
      ctaPrimaryText="Talk to a Call Center Specialist"
      ctaSecondaryText="Get Your Free Call Center Consultation"
    />
  );
}
