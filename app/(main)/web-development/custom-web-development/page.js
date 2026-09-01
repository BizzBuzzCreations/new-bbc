import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Compass,
  Rocket,
  Building2,
  Building,
  Layers,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Custom Web Development Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a custom web development company building bespoke websites and web apps for businesses across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/custom-web-development",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need a website that can evolve fast without a rebuild every few months. We build custom web development around a flexible base architecture, letting startups add features and pages as the business grows instead of hitting template limitations early.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often outgrow drag-and-drop builders once they need specific workflows, integrations, or a design that actually differentiates them. We build custom website design services sized for SMB budgets, giving growing businesses a site built around their exact process, not a generic layout.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need web platforms that handle scale, security, and integration with existing internal systems reliably. We provide enterprise web development services built for high traffic, strict security requirements, and integration with CRMs, ERPs, and internal tools already in use.",
  },
  {
    icon: Layers,
    title: "SaaS & Product Companies",
    desc: "SaaS companies need a marketing site and web app that work together seamlessly, from signup flow to in-product experience. We build custom web app development company projects covering both the public-facing site and the authenticated product experience as one connected system.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Development Partner",
    desc: "Design and marketing agencies often need a reliable development partner to execute what they've designed, without hiring an in-house dev team. We work as a white-label or direct development partner, helping agencies deliver custom builds without adding permanent headcount.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Migrating Off Legacy Systems",
    desc: "Businesses stuck on outdated platforms or unmaintainable legacy code need a careful, planned migration rather than a risky rebuild. We handle migration from legacy systems to modern, maintainable custom web development, preserving what works while fixing what doesn't.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Custom Website Design & Development",
    desc: "Custom website design services built from scratch around your brand and business goals, not adapted from a pre-made template.",
    ctaText: "Know Our Services",
    services: [
      "Custom Website Design",
      "Custom Website Development",
      "Responsive Web Design",
      "Brand-Led Design Systems",
      "Landing Page Development",
      "Multi-Page Website Builds",
      "Content-Managed Websites",
      "Website Information Architecture",
    ],
  },
  {
    number: "02",
    title: "Web Application Development",
    desc: "Custom web app development company work covering everything from internal tools to customer-facing platforms built to your exact specification.",
    ctaText: "Know Our Services",
    services: [
      "Custom Web Application Development",
      "Internal Business Tools",
      "Customer Portals",
      "Booking & Scheduling Systems",
      "Dashboard & Admin Panel Development",
      "Workflow Automation Tools",
      "Multi-User Platforms",
      "Progressive Web Apps",
    ],
  },
  {
    number: "03",
    title: "Enterprise & Scalable Web Solutions",
    desc: "Enterprise web development services designed for reliability at scale, built to handle real production traffic and long-term maintenance.",
    ctaText: "Know Our Services",
    services: [
      "Enterprise Website Development",
      "Scalable Architecture Planning",
      "High-Traffic Website Builds",
      "Load & Performance Optimization",
      "Security-Focused Development",
      "Role-Based Access Systems",
      "Multi-Environment Deployment",
      "Long-Term Maintenance Planning",
    ],
  },
  {
    number: "04",
    title: "API Integration & Backend Development",
    desc: "Custom backend systems and API integrations that connect your website or app to the tools your business already relies on.",
    ctaText: "Know Our Services",
    services: [
      "Custom Backend Development",
      "REST API Development",
      "Third-Party API Integration",
      "Payment Gateway Integration",
      "CRM & ERP Integration",
      "Database Design & Development",
      "Server-Side Architecture",
      "Authentication & Authorization Systems",
    ],
  },
  {
    number: "05",
    title: "UI/UX Design for Web Platforms",
    desc: "Bespoke web development agency work includes design, not just code, ensuring the finished product is as usable as it is functional.",
    ctaText: "Know Our Services",
    services: [
      "Custom UI Design",
      "UX Research & Planning",
      "Wireframing & Prototyping",
      "User Flow Design",
      "Design System Creation",
      "Accessibility-Focused Design",
      "Mobile-First Design",
      "Conversion-Focused Layouts",
    ],
  },
  {
    number: "06",
    title: "Website Maintenance, Support & Scaling",
    desc: "Ongoing support after launch, so your custom website or app keeps working reliably as your business and traffic grow.",
    ctaText: "Know Our Services",
    services: [
      "Website Maintenance Plans",
      "Bug Fixes & Updates",
      "Performance Monitoring",
      "Security Patching",
      "Feature Additions Post-Launch",
      "Hosting & Server Support",
      "Scaling Support as Traffic Grows",
      "Technical Documentation",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Discovery & Requirements",
    desc: "We start by understanding your business, goals, and specific requirements in detail, identifying what a custom build needs to do that a template genuinely cannot, before any design or development begins.",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    desc: "We plan the site or application's structure, technology stack, and architecture upfront, accounting for scale, integrations, and future features so the foundation supports growth rather than limiting it later.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    desc: "We design the user interface and experience around your brand and users, creating wireframes and prototypes you can review and refine before full development begins.",
  },
  {
    number: "04",
    title: "Development & Integration",
    desc: "We build the frontend, backend, and any required integrations according to the approved design and architecture, with regular progress updates throughout the build.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test functionality, performance, and security thoroughly across devices and scenarios before launch, catching issues while they're still easy to fix rather than after go-live.",
  },
  {
    number: "06",
    title: "Launch & Ongoing Support",
    desc: "We launch the finished website or application, then provide ongoing maintenance and support so it continues to run reliably as your business and traffic grow.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Built Around Your Business, Not a Template",
    desc: "We start every project by understanding your actual workflow, customers, and goals, then build a website or web app around that, rather than adapting your business to fit a pre-made theme. This means the finished site does exactly what your business needs it to do.",
  },
  {
    number: "02",
    title: "Full-Stack Capability Under One Roof",
    desc: "Design, frontend, backend, and API integration are handled by one connected team instead of being split across multiple vendors. This means fewer handoff issues, faster development, and a single point of accountability for the entire build.",
  },
  {
    number: "03",
    title: "Built to Scale From Day One",
    desc: "We architect custom web development projects with growth in mind, so a site built for a startup today doesn't need a full rebuild once traffic or feature needs increase. Scalability is planned for upfront, not bolted on later.",
  },
  {
    number: "04",
    title: "Transparent Development Process",
    desc: "You get visibility into progress at every stage, from wireframes through development to launch, rather than a black-box process with no updates until the final delivery. This means fewer surprises and more control over the direction of your project.",
  },
  {
    number: "05",
    title: "Post-Launch Support That Actually Continues",
    desc: "Custom web development doesn't end at launch, we provide ongoing maintenance, bug fixes, and support so your site keeps working reliably as your business and traffic grow. You're not left with a finished product and no one to call.",
  },
  {
    number: "06",
    title: "Enterprise-Grade Standards at Every Size",
    desc: "Whether you're a startup or an enterprise, we apply the same security, performance, and code quality standards to every custom web development project, so smaller businesses get the same reliable foundation larger organizations expect.",
  },
];

const FAQS = [
  {
    question:
      "What is custom web development, and how is it different from using a template?",
    answer:
      "Custom web development means building a website or application from scratch around your specific business requirements, rather than adapting a pre-made template or theme. This gives you full control over functionality, design, and performance, though it typically takes longer and costs more upfront than a template-based site.",
  },
  {
    question: "How much does custom web development cost in India?",
    answer:
      "Cost depends heavily on scope, a simple custom website costs far less than a multi-feature web application with integrations and user accounts. We scope pricing after understanding your specific requirements, features, and timeline, rather than offering a flat rate upfront for something as variable as custom development.",
  },
  {
    question: "How long does it take to build a custom website or web app?",
    answer:
      "Timeline depends on complexity, a custom marketing website typically takes a few weeks, while a full web application with custom features and integrations can take a few months. We provide a specific timeline estimate after the discovery phase, once your exact requirements are clear.",
  },
  {
    question: "Should I hire custom web developers or use a website builder?",
    answer:
      "Website builders work well for simple sites with standard needs and limited budgets. Custom web development makes sense once you need specific functionality, unique design, integrations with other systems, or a platform that can scale, things most builders struggle to deliver well.",
  },
  {
    question:
      "Can you build both the website and a custom web application together?",
    answer:
      "Yes, we regularly build projects that combine a marketing website with a connected web application, like a customer portal or booking system, as one integrated project. This ensures both pieces share consistent design and work together smoothly rather than feeling like separate products.",
  },
  {
    question: "Do you provide support after the website or application is launched?",
    answer:
      "Yes, we offer ongoing maintenance and support after launch, covering bug fixes, security updates, performance monitoring, and new feature additions as your business needs evolve. Custom web development is an ongoing relationship for most clients, not a one-time delivery.",
  },
];

export default function CustomWebDevelopment() {
  return (
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="Custom Web Development & Design"
      icon={Compass}
      description="Custom websites and web applications built to turn visitors into enquiries, not just look good, engineered around how your business actually converts customers."
      heroTitle="Get More Leads With a Custom Website Built Around Your Business"
      heroDescription="Custom websites and web applications built to turn visitors into enquiries, not just look good, engineered around how your business actually converts customers."
      heroCtaText="Get a Free Web Development Consultation"
      capabilitiesHeading="Built for Businesses Ready to Turn Visitors Into Customers"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into a Website Built to Convert"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their Lead-Generating Website"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Requirements Into a Website That Sells"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building Websites That Convert Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every custom web development project, with the same care and attention whether a client is down the road or across the world. We work with startups, SMBs, and enterprises across India, providing custom website design services and custom web app development company support built around each business's specific requirements. For businesses looking to hire custom web developers beyond India, we support clients worldwide remotely, working across time zones to deliver the same enterprise web development services standard regardless of location. Whether you're a small business in Prayagraj or an enterprise team anywhere else, our approach starts with the same question: what does your business actually need this website or application to do."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Website That Actually Brings You Business?"
      ctaText="Whether you need a custom website that actually reflects how your business works, a web application to replace manual processes, or an enterprise platform built to scale, a template was never going to get you there. Let's talk through your requirements and scope what a custom build would actually involve."
      ctaPrimaryText="Talk to a Web Development Specialist"
      ctaSecondaryText="Get Your Free Development Consultation"
    />
  );
}
