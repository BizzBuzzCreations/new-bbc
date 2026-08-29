import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  FileText,
  Database,
  CheckCircle2,
  Calculator,
  ShieldCheck,
  Clock,
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

const SERVICE_ITEMS = [
  {
    icon: FileText,
    heading: "Data Entry & Digitization",
    description:
      "Paper records, forms, and scattered spreadsheets get converted into clean, structured digital data your team can actually use.",
  },
  {
    icon: Database,
    heading: "CRM & Database Updates",
    description:
      "We keep your CRM and databases current — new leads, contact updates, and status changes entered accurately and on schedule.",
  },
  {
    icon: CheckCircle2,
    heading: "Invoice & Records Processing",
    description:
      "Invoices and business records are processed and filed consistently, reducing the backlog that piles up during busy periods.",
  },
  {
    icon: ShieldCheck,
    heading: "Reconciliation & Accuracy Checks",
    description:
      "Our desks work with the same accuracy checks a large enterprise would demand, catching mismatches before they become bigger problems.",
  },
  {
    icon: Calculator,
    heading: "Finance & Accounting Support",
    description:
      "Beyond raw data entry, we support finance and accounting back-office tasks like ledger updates and basic reconciliations.",
  },
  {
    icon: Clock,
    heading: "Confidential, Timely Handling",
    description:
      "Sensitive business data is handled under NDA with agreed turnaround times, so backlogs don't quietly build up.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understand Data & Formats",
    body: "We review your current data sources, formats, and volume to design an accurate, efficient workflow for your specific records.",
  },
  {
    title: "Set Up Accuracy Checks",
    body: "Validation rules and double-checks are built into the process upfront, at a cost a small business can actually plan around.",
  },
  {
    title: "Dedicated Back Office Team",
    body: "A team trained on your specific data and formats handles ongoing entry, updates, and processing.",
  },
  {
    title: "Ongoing Quality Audits",
    body: "Regular audits catch drift in accuracy early, keeping your data reliable as volume grows.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Enterprise-Grade Accuracy",
    description:
      "Our data entry outsourcing and back office desks work with the same accuracy checks a large enterprise would demand.",
  },
  {
    number: "002",
    title: "Affordable for Small Business",
    description:
      "Enterprise-level accuracy at a cost a small business can actually plan around, without a long-term enterprise contract.",
  },
  {
    number: "003",
    title: "Confidentiality First",
    description:
      "NDA available before any project details or data access are shared, with handling built around India's DPDP Act, 2023.",
  },
  {
    number: "004",
    title: "Fast, Reliable Turnaround",
    description:
      "Agreed turnaround times keep your records current instead of piling up into a backlog during busy periods.",
  },
  {
    number: "005",
    title: "Finance & Accounting Ready",
    description:
      "Our desks support finance-adjacent back-office tasks, not just generic data entry.",
  },
  {
    number: "006",
    title: "Scalable Desk Size",
    description:
      "We scale the team with your actual data volume, adding capacity only as your workload genuinely grows.",
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
    <>
      <BpoHero
        heading="Data Entry & Back Office Outsourcing in India"
        description="Invoices, records, CRM updates, and reconciliations handled with enterprise-grade accuracy checks, at a cost a small business can actually plan around."
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
              src="/bpo.jpg"
              alt="Data entry and back office outsourcing at BizzBuzz Creations"
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
              Back-Office Accuracy Without the Enterprise Price Tag
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Invoices, records, CRM updates, reconciliations — our data
              entry outsourcing and back office outsourcing desks work with
              the same accuracy checks a large enterprise would demand, at a
              cost a small business can actually plan around, including
              finance and accounting outsourcing support.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a BPO and back-office partner based in Prayagraj,
              serving clients locally across Allahabad and Uttar Pradesh, as
              well as businesses across India, handling data with the same
              care as our own.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Data Entry & Back Office Outsourcing"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Data Entry & Back Office Process"
            description="We understand your data formats and accuracy needs before assigning a dedicated desk, so quality stays consistent from the first batch onward."
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
          title="Data Entry & Back Office Outsourcing Company"
          description="BizzBuzz Creations runs data entry and back office outsourcing for businesses across India, combining enterprise-grade accuracy with pricing small businesses can plan around."
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
