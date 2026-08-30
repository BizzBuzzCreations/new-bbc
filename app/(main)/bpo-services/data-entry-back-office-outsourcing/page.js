import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  FileText,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Data Entry & Back Office Outsourcing | BizzBuzz Creations",
  description:
    "Data entry and back office outsourcing in India — invoices, CRM updates, and reconciliations handled with enterprise-grade accuracy, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/data-entry-back-office-outsourcing",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often handle data entry themselves until it eats into founder time that should go elsewhere. We offer flexible, small-batch data entry outsourcing so early-stage teams can hand off records without a long-term commitment.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently fall behind on invoices, records, and CRM updates during busy periods. We provide back office outsourcing sized for SMB budgets, keeping records current without the cost of a full in-house admin team.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need back office desks that handle high volume accurately across departments and systems. We run enterprise-grade data entry and reconciliation desks built for high volume, strict accuracy checks, and integration with existing systems.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce businesses generate constant order, inventory, and customer data that needs accurate entry. We handle order data entry, inventory updates, and customer record management so your catalog and CRM stay reliable.",
  },
  {
    icon: Handshake,
    title: "Agencies & Finance Partners",
    desc: "Agencies and finance-adjacent partners managing client records need a dependable back office extension. We work as a white-label data entry and back office partner, handling volume agencies can present as part of their own service.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Digitizing Legacy Records",
    desc: "Businesses sitting on years of paper records or scattered spreadsheets need a structured digitization plan. We handle the conversion of legacy records into clean, structured digital data your team can actually use.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Data Entry & Digitization",
    desc: "Paper records, forms, and scattered spreadsheets get converted into clean, structured digital data your team can actually use.",
    ctaText: "Know Our Services",
    services: [
      "Manual Data Entry",
      "Document Digitization",
      "Form Data Capture",
      "Spreadsheet Cleanup",
      "OCR-Assisted Entry",
      "Data Formatting",
      "Bulk Data Upload",
      "Data Entry Quality Checks",
    ],
  },
  {
    number: "02",
    title: "CRM & Database Updates",
    desc: "We keep your CRM and databases current — new leads, contact updates, and status changes entered accurately and on schedule.",
    ctaText: "Know Our Services",
    services: [
      "CRM Record Updates",
      "Contact Database Management",
      "Lead Data Entry",
      "Database Cleanup",
      "Duplicate Record Removal",
      "Field Standardization",
      "Data Migration Support",
      "Scheduled Update Cycles",
    ],
  },
  {
    number: "03",
    title: "Invoice & Records Processing",
    desc: "Invoices and business records are processed and filed consistently, reducing the backlog that piles up during busy periods.",
    ctaText: "Know Our Services",
    services: [
      "Invoice Processing",
      "Records Filing",
      "Document Indexing",
      "Backlog Clearance",
      "Purchase Order Entry",
      "Vendor Record Management",
      "Archive Management",
      "Records Retrieval Support",
    ],
  },
  {
    number: "04",
    title: "Reconciliation & Accuracy Checks",
    desc: "Our desks work with the same accuracy checks a large enterprise would demand, catching mismatches before they become bigger problems.",
    ctaText: "Know Our Services",
    services: [
      "Data Reconciliation",
      "Cross-System Verification",
      "Discrepancy Resolution",
      "Double-Entry Validation",
      "Accuracy Audits",
      "Error Reporting",
      "Exception Handling",
      "Sign-Off Checklists",
    ],
  },
  {
    number: "05",
    title: "Finance & Accounting Support",
    desc: "Beyond raw data entry, we support finance and accounting back-office tasks like ledger updates and basic reconciliations.",
    ctaText: "Know Our Services",
    services: [
      "Ledger Entry Support",
      "Basic Bookkeeping Support",
      "Expense Record Entry",
      "Payment Reconciliation",
      "Financial Data Entry",
      "Invoice Matching",
      "Accounts Payable Support",
      "Accounts Receivable Support",
    ],
  },
  {
    number: "06",
    title: "Confidential, Timely Handling",
    desc: "Sensitive business data is handled under NDA with agreed turnaround times, so backlogs don't quietly build up.",
    ctaText: "Know Our Services",
    services: [
      "NDA-Backed Data Handling",
      "Turnaround SLA Management",
      "Access-Controlled Processing",
      "Secure File Transfer",
      "Confidentiality Protocols",
      "Data Retention Compliance",
      "Priority Batch Processing",
      "Status Reporting",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Understand Data & Formats",
    desc: "We review your current data sources, formats, and volume to design an accurate, efficient workflow for your specific records.",
  },
  {
    number: "02",
    title: "Set Up Accuracy Checks",
    desc: "Validation rules and double-checks are built into the process upfront, at a cost a small business can actually plan around.",
  },
  {
    number: "03",
    title: "Team & Tool Assignment",
    desc: "We assign a team trained on your specific data and formats, and set up the tools needed to process it efficiently.",
  },
  {
    number: "04",
    title: "Dedicated Back Office Team",
    desc: "A team trained on your specific data and formats handles ongoing entry, updates, and processing.",
  },
  {
    number: "05",
    title: "Ongoing Quality Audits",
    desc: "Regular audits catch drift in accuracy early, keeping your data reliable as volume grows.",
  },
  {
    number: "06",
    title: "Reporting & Scaling",
    desc: "We report on volume, accuracy, and turnaround, scaling the desk up as your data volume genuinely grows.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Enterprise-Grade Accuracy",
    desc: "Our data entry outsourcing and back office desks work with the same accuracy checks a large enterprise would demand.",
  },
  {
    number: "02",
    title: "Affordable for Small Business",
    desc: "Enterprise-level accuracy at a cost a small business can actually plan around, without a long-term enterprise contract.",
  },
  {
    number: "03",
    title: "Confidentiality First",
    desc: "NDA available before any project details or data access are shared, with handling built around India's DPDP Act, 2023.",
  },
  {
    number: "04",
    title: "Fast, Reliable Turnaround",
    desc: "Agreed turnaround times keep your records current instead of piling up into a backlog during busy periods.",
  },
  {
    number: "05",
    title: "Finance & Accounting Ready",
    desc: "Our desks support finance-adjacent back-office tasks, not just generic data entry.",
  },
  {
    number: "06",
    title: "Scalable Desk Size",
    desc: "We scale the team with your actual data volume, adding capacity only as your workload genuinely grows.",
  },
];

const FAQS = [
  {
    question: "How do you keep our data secure?",
    answer:
      "We work under NDA with account access scoped to what's needed, and handling built around India's DPDP Act, 2023.",
  },
  {
    question: "What's the typical turnaround time for data entry?",
    answer:
      "Turnaround depends on volume and complexity — we agree on a clear SLA upfront so you know what to expect.",
  },
  {
    question: "What types of data or records can you handle?",
    answer:
      "Invoices, CRM records, forms, spreadsheets, and general back-office documents — we'll confirm feasibility for anything unusual before starting.",
  },
  {
    question: "Is there a minimum volume required to outsource data entry?",
    answer:
      "No fixed minimum — we can start with a small, defined batch and scale the desk as your volume grows.",
  },
  {
    question: "How is pricing structured for back office outsourcing?",
    answer:
      "Pricing is typically based on volume or a dedicated desk model — we'll recommend whichever fits your workload better.",
  },
];

export default function DataEntryBackOfficeOutsourcing() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="Data Entry & Back Office Outsourcing"
      icon={FileText}
      description="Invoices, records, CRM updates, and reconciliations handled with enterprise-grade accuracy checks, at a cost a small business can actually plan around."
      heroTitle="Data Entry & Back Office Outsourcing in India"
      heroDescription="Invoices, records, CRM updates, and reconciliations handled with enterprise-grade accuracy checks, at a cost a small business can actually plan around."
      capabilitiesHeading="Built for Businesses Ready to Get Their Records Under Control"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Data Entry & Back Office Desks"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Run Their Back Office"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Messy Records Into a Reliable Back Office"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Back Office Desks Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we handle every data entry and back office engagement, with the same accuracy standards whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing desks to each business's actual data volume and formats. For businesses looking to outsource back office work beyond India, we run data entry and reconciliation desks remotely, working across time zones to deliver the same accuracy standard regardless of location. Whether you're a startup digitizing your first batch of records or an enterprise running a dedicated back office desk, our approach starts with understanding your exact data and formats before a single record is touched."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Records You Can Actually Rely On?"
      ctaText="Whether you need a one-time digitization project, ongoing CRM and invoice processing, or a dedicated back office desk built around your specific formats, the right setup depends on your actual data volume. Let's talk through your requirements and scope what a back office desk would actually involve."
      ctaPrimaryText="Talk to a Back Office Specialist"
      ctaSecondaryText="Get Your Free Back Office Consultation"
    />
  );
}
