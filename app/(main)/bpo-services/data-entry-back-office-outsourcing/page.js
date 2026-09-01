import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  FileText,
  ClipboardList,
  Database,
  ShoppingCart,
  ScanLine,
  Building2,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Data Entry & Back-Office Outsourcing | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides data entry and back-office outsourcing services for businesses across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/data-entry-back-office-outsourcing",
  },
};

const CAPABILITIES = [
  {
    icon: ClipboardList,
    title: "Businesses Drowning in Manual Data Entry Work",
    desc: "Teams spending hours on manual data entry have less time for work that actually requires judgment and expertise. We provide data entry outsourcing company support that takes this repetitive burden off your internal team.",
  },
  {
    icon: Database,
    title: "Companies Needing Bulk Data Processing at Volume",
    desc: "Large data processing projects need consistent accuracy across thousands of records, which is difficult to sustain internally at scale. We provide data processing outsourcing company services built for genuine volume without accuracy dropping off.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Product & Inventory Data Entry",
    desc: "Ecommerce catalogs need constant updates to product details, pricing, and stock levels across multiple channels. We provide specialized product and inventory data entry support built specifically for e-commerce operations.",
  },
  {
    icon: ScanLine,
    title: "Businesses Needing Document Digitization & Processing",
    desc: "Paper records and scanned documents locked away in filing cabinets provide little value until they're properly digitized. We provide document processing outsourcing services that turn physical records into organized, searchable digital data.",
  },
  {
    icon: Building2,
    title: "Small Businesses Needing Affordable Back-Office Support",
    desc: "Small businesses need back-office support without the cost of hiring dedicated internal staff for administrative work. We provide data entry services for small business sized to fit smaller budgets without sacrificing quality.",
  },
  {
    icon: Globe,
    title: "Companies Needing Offshore Data Entry for Cost Savings",
    desc: "Businesses running data entry in-house often pay significantly more than outsourcing to an experienced offshore team. We provide offshore data entry services that deliver meaningful cost savings while maintaining accuracy.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Data Entry Services",
    desc: "Accurate data entry at volume, handled by trained teams rather than rushed, error-prone processing.",
    ctaText: "Know Our Services",
    services: [
      "Bulk Data Entry",
      "Online Data Entry",
      "Offline Data Entry",
      "Form Data Entry",
      "Data Entry From Scanned Documents",
      "Multi-Format Data Entry",
      "Data Entry Speed & Accuracy QA",
      "Data Entry Reporting",
    ],
  },
  {
    number: "02",
    title: "Data Processing & Cleansing",
    desc: "Data cleaned, validated, and standardized, so what you're working with is actually reliable.",
    ctaText: "Know Our Services",
    services: [
      "Data Cleansing Services",
      "Data Validation",
      "Duplicate Data Removal",
      "Data Standardization",
      "Data Migration Support",
      "Data Formatting",
      "Data Processing Automation",
      "Data Quality Reporting",
    ],
  },
  {
    number: "03",
    title: "Document Processing & Digitization",
    desc: "Physical records and documents converted into organized, searchable digital data.",
    ctaText: "Know Our Services",
    services: [
      "Document Digitization Services",
      "Document Scanning & Indexing",
      "OCR-Based Data Extraction",
      "Document Categorization",
      "Archive Digitization",
      "Document Processing Workflows",
      "Secure Document Handling",
      "Document Processing Reporting",
    ],
  },
  {
    number: "04",
    title: "Ecommerce & Product Data Entry",
    desc: "Product and inventory data kept accurate and current across every channel you sell on.",
    ctaText: "Know Our Services",
    services: [
      "Product Catalog Data Entry",
      "Inventory Data Management",
      "Product Listing Updates",
      "Price & Stock Data Entry",
      "Marketplace Data Entry",
      "Product Data Cleansing",
      "Ecommerce Data Accuracy Checks",
      "Ecommerce Data Reporting",
    ],
  },
  {
    number: "05",
    title: "Back-Office Administrative Support",
    desc: "Core administrative data processing handled reliably, freeing your team from routine paperwork.",
    ctaText: "Know Our Services",
    services: [
      "Back-Office Support Services",
      "Invoice Data Processing",
      "Records Management Support",
      "Administrative Data Support",
      "Payroll Data Entry Support",
      "Compliance Documentation Support",
      "Back-Office Workflow Support",
      "Back-Office Reporting",
    ],
  },
  {
    number: "06",
    title: "Quality Control & Reporting",
    desc: "Multi-level review built into every project, so accuracy is verified, not just assumed.",
    ctaText: "Know Our Services",
    services: [
      "Data Accuracy Quality Checks",
      "Multi-Level Review Process",
      "Error Rate Tracking",
      "Turnaround Time Reporting",
      "Monthly Performance Reports",
      "Data Security Compliance",
      "Process Improvement Reviews",
      "Client Satisfaction Tracking",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Data & Volume Discovery",
    desc: "We start by understanding your specific data types, current volume, and accuracy requirements for the project.",
  },
  {
    number: "02",
    title: "Process & Workflow Design",
    desc: "We design a data entry and processing workflow suited to your specific data format and quality standards.",
  },
  {
    number: "03",
    title: "Team Training & Tool Setup",
    desc: "We train the team on your specific data requirements and set up any tools needed for efficient processing.",
  },
  {
    number: "04",
    title: "Initial Batch Processing & QA",
    desc: "We process an initial batch with thorough quality review, confirming accuracy standards before scaling to full volume.",
  },
  {
    number: "05",
    title: "Full-Scale Data Processing",
    desc: "We process your full data volume consistently, with multi-level review built into the ongoing workflow.",
  },
  {
    number: "06",
    title: "Ongoing Quality Reporting",
    desc: "We provide regular reporting on accuracy and turnaround time, continuing to refine the process as needed.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Data Accuracy Built Around Quality Checks, Not Just Speed",
    desc: "We build multi-level review into every data entry and processing project, ensuring accuracy at volume rather than treating speed as the only priority.",
  },
  {
    number: "02",
    title: "Trained Teams Handling Volume Without Cutting Corners",
    desc: "Our teams are trained specifically for accurate, consistent processing at scale, rather than rushing through volume in a way that quietly increases error rates.",
  },
  {
    number: "03",
    title: "Ecommerce-Specific Expertise in Product and Inventory Data",
    desc: "We understand the specific accuracy demands of ecommerce data, pricing, stock levels, product details, going beyond generic data entry to catalog management that actually matters for sales.",
  },
  {
    number: "04",
    title: "Secure Handling of Sensitive Documents and Records",
    desc: "We follow proper data security practices for sensitive documents and records, treating confidentiality as a core requirement rather than an afterthought.",
  },
  {
    number: "05",
    title: "Offshore Cost Efficiency Without Sacrificing Data Quality",
    desc: "We deliver meaningful cost savings compared to in-house teams while maintaining genuine accuracy standards, rather than treating cost reduction as an excuse for lower quality.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Turnaround Time and Accuracy Rates",
    desc: "You receive clear reporting on processing volume, turnaround time, and accuracy rates, giving you real visibility into service quality rather than a vague activity summary.",
  },
];

const FAQS = [
  {
    question: "How much does data entry outsourcing cost in India?",
    answer:
      "Cost depends on data volume, complexity, and turnaround time requirements. We scope pricing after understanding your specific project, rather than offering a flat rate upfront for something this variable.",
  },
  {
    question: "How do you ensure data accuracy at high volume?",
    answer:
      "We build multi-level quality review into every project, with dedicated accuracy checks rather than relying on a single pass through the data, ensuring errors are caught before delivery.",
  },
  {
    question: "Can you handle document digitization, not just typed data entry?",
    answer:
      "Yes, document digitization and processing is a core part of our service, covering scanning, OCR-based extraction, and organizing physical records into searchable digital data.",
  },
  {
    question: "Is our data kept secure and confidential?",
    answer:
      "Yes, we follow proper data security practices for sensitive information and documents, treating confidentiality as a standard requirement across all data entry and processing work.",
  },
  {
    question: "Can you manage ongoing product and inventory data updates for e-commerce?",
    answer:
      "Yes, ongoing e-commerce data management is a core service, covering product catalog updates, pricing, and stock level changes across whichever channels you sell on.",
  },
  {
    question: "What's the typical turnaround time for a data entry project?",
    answer:
      "Turnaround time depends on volume and complexity, we provide a specific estimate after understanding your project scope, rather than a generic timeline that doesn't account for your actual data requirements.",
  },
];

export default function DataEntryBackOfficeOutsourcing() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="Data Entry & Back Office Outsourcing"
      icon={FileText}
      description="Data entry and back-office outsourcing built for accuracy at volume, not just speed, backed by trained teams and quality checks."
      heroTitle="Get Accurate Data Entry Without Hiring an In-House Team"
      heroDescription="Data entry and back-office outsourcing built for accuracy at volume, not just speed, backed by trained teams and quality checks."
      heroCtaText="Get a Free Back-Office Outsourcing Consultation"
      capabilitiesHeading="Built for Businesses Drowning in Data They Can't Keep Up With"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between Raw Data and a Clean, Usable Record"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Their Back-Office Work"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Raw Data Into Accurate, Usable Records"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Processing Data Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every data entry project, with the same attention to accuracy whether a client is nearby or across the world. We provide data entry outsourcing company support for businesses across India, built around each business's specific data volume and requirements. For companies looking for offshore data entry services beyond India, we support clients worldwide remotely, delivering the same back office outsourcing services standard of work regardless of time zone. Whether you're a small business in Prayagraj or an e-commerce brand anywhere else managing large catalogs, our approach starts with the same question: where is inaccurate or outdated data actually costing your business?"
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Get Your Data Handled Accurately?"
      ctaText="Whether you're drowning in manual data entry, need document digitization, or want ongoing product data management for your e-commerce store, doing it internally at scale was never going to stay accurate. Let's talk through your data volume and scope what proper back-office support would actually involve."
      ctaPrimaryText="Talk to a Data Entry Specialist"
      ctaSecondaryText="Get Your Free Back-Office Outsourcing Consultation"
    />
  );
}
