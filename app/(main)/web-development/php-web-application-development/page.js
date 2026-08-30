import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Server,
  Rocket,
  Building2,
  Building,
  Layers,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "PHP Web Application Development Company | BizzBuzz Creations",
  description:
    "Custom PHP web application development and legacy system modernization in India — secure, scalable backend builds for internal tools and customer-facing platforms by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/php-web-application-development",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need a backend that can evolve fast as the product finds its shape. We build PHP applications on a flexible architecture, letting startups add features without a full rebuild every time requirements change.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often need internal tools or customer platforms off-the-shelf software can't quite fit. We build custom PHP applications sized for SMB budgets, matching your exact workflow instead of forcing you to adapt to generic software.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need backend systems that handle scale, security, and integration with existing internal tools reliably. We provide enterprise PHP development built for high traffic, strict security requirements, and integration with existing CRMs and ERPs.",
  },
  {
    icon: Layers,
    title: "SaaS & Platform Companies",
    desc: "SaaS companies need a backend that supports multi-user access, billing, and ongoing feature development. We build custom PHP applications covering everything from authentication to billing as one connected, maintainable system.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Development Partner",
    desc: "Agencies often need a reliable backend development partner to execute what they've scoped for clients. We work as a white-label or direct PHP development partner, helping agencies deliver custom builds without adding permanent headcount.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Modernizing Legacy PHP Systems",
    desc: "Businesses running old, unmaintainable PHP codebases need a careful, planned modernization rather than a risky rebuild. We handle migration from legacy PHP systems to modern, maintainable applications, preserving what works while fixing what doesn't.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Custom PHP Application Development",
    desc: "From internal tools to customer-facing platforms, our full-stack PHP developers build applications tailored to your exact workflow instead of forcing you into off-the-shelf software.",
    ctaText: "Know Our Services",
    services: [
      "Custom PHP Development",
      "Internal Business Tools",
      "Customer-Facing Platforms",
      "Laravel Application Development",
      "Multi-User Systems",
      "Admin Panel Development",
      "Workflow-Specific Applications",
      "Application Documentation",
    ],
  },
  {
    number: "02",
    title: "Legacy System Modernization",
    desc: "Running an old PHP codebase that's become a liability? We modernize legacy systems for better security, speed, and maintainability without disrupting your business.",
    ctaText: "Know Our Services",
    services: [
      "Legacy Code Audits",
      "Framework Migration",
      "Codebase Refactoring",
      "Security Hardening for Legacy Systems",
      "Performance Modernization",
      "Incremental Migration Planning",
      "Legacy Data Migration",
      "Downtime-Minimized Rollouts",
    ],
  },
  {
    number: "03",
    title: "Database Design & Integration",
    desc: "Well-structured databases underpin every reliable application. We design schemas and integrations that stay fast and consistent as your data grows.",
    ctaText: "Know Our Services",
    services: [
      "Database Schema Design",
      "MySQL/PostgreSQL Development",
      "Database Optimization",
      "Data Migration Support",
      "Query Performance Tuning",
      "Database Integration",
      "Backup & Recovery Setup",
      "Data Integrity Checks",
    ],
  },
  {
    number: "04",
    title: "API Development & Integration",
    desc: "We build and integrate APIs so your PHP application talks cleanly to other systems — payment gateways, CRMs, third-party tools, or your own internal services.",
    ctaText: "Know Our Services",
    services: [
      "REST API Development",
      "Third-Party API Integration",
      "Payment Gateway Integration",
      "CRM & ERP Integration",
      "Webhook Development",
      "API Documentation",
      "API Security & Authentication",
      "Rate Limiting & Throttling",
    ],
  },
  {
    number: "05",
    title: "Security Hardening",
    desc: "Custom applications are a common attack target. We follow secure coding practices and harden deployments against common vulnerabilities.",
    ctaText: "Know Our Services",
    services: [
      "Secure Coding Practices",
      "Vulnerability Assessments",
      "Authentication & Authorization Systems",
      "Input Validation & Sanitization",
      "SQL Injection Prevention",
      "Server Hardening",
      "Security Patch Management",
      "Penetration Test Support",
    ],
  },
  {
    number: "06",
    title: "Ongoing Maintenance & Support",
    desc: "Applications need upkeep long after launch. We provide ongoing bug fixes, updates, and performance monitoring to keep things running smoothly.",
    ctaText: "Know Our Services",
    services: [
      "Ongoing Bug Fixes",
      "Feature Enhancements",
      "Performance Monitoring",
      "Security Patching",
      "Server & Hosting Support",
      "Version Upgrades",
      "Technical Documentation",
      "SLA-Based Support Plans",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Requirement Analysis",
    desc: "We dig into your actual workflow and technical constraints before proposing an architecture, so the build matches how your business really operates.",
  },
  {
    number: "02",
    title: "Architecture & Database Design",
    desc: "We plan the application structure and database schema upfront, avoiding the shortcuts that turn into expensive rewrites later.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    desc: "We design the interface and key workflows, creating prototypes you can review before full development begins.",
  },
  {
    number: "04",
    title: "Development & Testing",
    desc: "Features get built and tested iteratively, with regular check-ins so you see progress and can course-correct early.",
  },
  {
    number: "05",
    title: "Security & Quality Assurance",
    desc: "We test functionality, performance, and security thoroughly before launch, catching issues while they're still easy to fix.",
  },
  {
    number: "06",
    title: "Deployment & Support",
    desc: "We handle deployment and stay on for maintenance, security patches, and feature updates as your needs evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Full-Stack PHP Team",
    desc: "From frontend to database, our developers handle the complete stack, so you're not coordinating between multiple vendors.",
  },
  {
    number: "02",
    title: "Legacy Modernization Experts",
    desc: "We specialize in updating aging PHP systems for better security and performance without a risky full rebuild.",
  },
  {
    number: "03",
    title: "Secure by Design",
    desc: "Security isn't bolted on at the end — we build with secure coding practices from the first line of code.",
  },
  {
    number: "04",
    title: "Scalable Architecture",
    desc: "We design applications to handle growth in users and data, not just the demo you saw in the pitch.",
  },
  {
    number: "05",
    title: "Transparent Communication",
    desc: "Regular updates and clear technical explanations, so you always know where your project stands.",
  },
  {
    number: "06",
    title: "Prayagraj-Based, Globally Trusted",
    desc: "A full-service PHP development team in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
  },
];

const FAQS = [
  {
    question: "What PHP frameworks do you work with?",
    answer:
      "We work with Laravel and other modern PHP frameworks, choosing the right fit based on your project's complexity and long-term maintenance needs.",
  },
  {
    question: "Can you take over and modernize an existing PHP application?",
    answer:
      "Yes, we regularly step into legacy codebases, audit them, and modernize them for better security and performance without disrupting your business.",
  },
  {
    question: "How much does PHP application development cost?",
    answer:
      "It depends on the complexity of the features and integrations required — we scope every project and provide a clear, tailored quote.",
  },
  {
    question: "How do you handle application security?",
    answer:
      "We follow secure coding practices, harden deployments, and can add ongoing monitoring to catch vulnerabilities before they become incidents.",
  },
  {
    question: "How long does a typical PHP project take?",
    answer:
      "Timelines vary with scope, from a few weeks for a focused tool to several months for a full platform — we'll give you a realistic estimate upfront.",
  },
];

export default function PhpWebApplicationDevelopment() {
  return (
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="PHP Web Application Development"
      icon={Server}
      description="Custom PHP applications and legacy system modernization for businesses with complex backend needs — built for security, speed, and long-term maintainability."
      heroTitle="PHP Web Application Development Company in India"
      heroDescription="Custom PHP applications and legacy system modernization for businesses with complex backend needs — built for security, speed, and long-term maintainability."
      capabilitiesHeading="Built for Businesses With Backend Needs a Template Can't Solve"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our PHP Application Development"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their PHP Applications"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Requirements Into a Working Application"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building PHP Applications Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every PHP application project, with the same care whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, building backend systems sized to each business's actual complexity and scale. For businesses looking to hire PHP developers beyond India, we support clients worldwide remotely, working across time zones to deliver the same engineering standard regardless of location. Whether you're a startup building your first internal tool or an enterprise modernizing a legacy system, our approach starts with the same question: what does your business actually need this application to do."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Backend That Actually Fits How You Work?"
      ctaText="Whether you need a custom internal tool, a customer-facing platform, or a careful modernization of an aging PHP system, off-the-shelf software was never going to get you there. Let's talk through your requirements and scope what a custom PHP build would actually involve."
      ctaPrimaryText="Talk to a PHP Development Specialist"
      ctaSecondaryText="Get Your Free Development Consultation"
    />
  );
}
