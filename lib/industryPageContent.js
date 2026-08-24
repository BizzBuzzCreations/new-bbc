// Content for every /industries/<slug> dedicated page (rendered through
// components/sections/industryDetailPage.js). Each entry supplies the
// capabilities, full-spectrum services, "who we help" segments,
// deliverables, FAQs, and trust points shown on that industry's page —
// all genuine BizzBuzz service/positioning copy (no invented stats,
// client counts, or market-size figures). Real, verified facts (project
// counts, certifications) live once in the shared template component.
import {
  MapPin,
  Megaphone,
  ShieldCheck,
  Bot,
  Headset,
  Star,
  Stethoscope,
  Building2,
  Video,
  Microscope,
  Pill,
  Brain,
  Watch,
  Activity,
  HeartPulse,
  Smartphone,
  Battery,
  Dumbbell,
  Trophy,
  Timer,
  Salad,
  Bike,
  Users,
  ShoppingCart,
  ShoppingBag,
  Package,
  Truck,
  Tag,
  Store,
  HardHat,
  Wrench,
  Ruler,
  Hammer,
  Warehouse,
  PiggyBank,
  Landmark,
  Wallet,
  TrendingUp,
  CreditCard,
  Film,
  Music,
  Tv,
  Mic,
  Camera,
  Sparkles,
  GraduationCap,
  BookOpen,
  School,
  Laptop,
  Award,
  CalendarDays,
  Ticket,
  PartyPopper,
  Factory,
  Cog,
  Boxes,
  UtensilsCrossed,
  Coffee,
  ChefHat,
  Wine,
  Soup,
  Plane,
  Luggage,
  BedDouble,
  Compass,
  Ship,
  Home as HomeIcon,
  KeyRound,
  Gamepad2,
  Radio,
  Swords,
  Search,
  Share2,
  Globe,
  Workflow,
  Shirt,
} from "lucide-react";

const SPECTRUM_IMAGES = [
  "/image-1.jpg",
  "/image-2.jpg",
  "/banner.png",
  "/image-3.jpg",
  "/image-4.webp",
  "/image-5.webp",
];

// The 4 facts genuinely true of every engagement, plus 4 more with a
// light industry-flavored line — reused across every page since these
// are company-wide policies, not industry-specific claims.
function buildTrustPoints(label) {
  return [
    "Every engagement starts with a free consultation — no fixed package, just what your business actually needs.",
    "Your Google Ads, Analytics, and website accounts stay owned by you, always — no lock-in.",
    "An NDA is available before any project details or account access are shared.",
    "Transparent, regular reporting — you always know what's happening and why.",
    "Access to your accounts is scoped to only what's needed for the work, nothing more.",
    `A team that understands ${label.toLowerCase()}'s buying cycle, not a generic one-size-fits-all playbook.`,
    "Combined or standalone services — built around your actual goals, not a fixed package.",
    "The same team stays on your account, so context never gets lost between calls.",
  ];
}

// 4 of 5 FAQs are the same shape for every industry (only the wording
// adapts); the "sensitive data" answer is passed in per industry since
// what counts as sensitive varies (patient records vs. financial details
// vs. nothing at all).
function buildFaqs(label, dataAnswer) {
  const lower = label.toLowerCase();
  return [
    {
      question: `How is marketing for ${lower} businesses different?`,
      answer: `${label} has its own buying pattern and trust signals — our campaigns are built around how ${lower} customers actually search and decide, not a generic playbook reused across every industry.`,
    },
    {
      question: "Will you have access to sensitive business or customer data?",
      answer: dataAnswer,
    },
    {
      question: `Can you work with both small and multi-location ${lower} businesses?`,
      answer: `Yes — the approach flexes both ways: focused local campaigns for a single location, or coordinated visibility and reporting across every branch for a larger group.`,
    },
    {
      question: "How quickly can we expect to see results?",
      answer:
        "Paid campaigns can start driving leads within the first couple of weeks. SEO is a longer game — most businesses see meaningful movement within a few months of consistent work.",
    },
    {
      question: "Do we own our accounts and data after the engagement?",
      answer:
        "Yes — your Google Ads, Analytics, and website accounts remain in your name throughout and after the engagement. We work as authorized users, never owners.",
    },
  ];
}

function buildSpectrumServices(items) {
  return items.map((item, i) => ({ ...item, img: SPECTRUM_IMAGES[i % SPECTRUM_IMAGES.length] }));
}

export const INDUSTRY_PAGE_CONTENT = {
  healthcare: {
    capabilities: [
      {
        icon: MapPin,
        title: "Local SEO & Google Maps Visibility",
        desc: "Ranking your clinic where patients are actually searching, so nearby, urgent searches find you before a competitor.",
      },
      {
        icon: Megaphone,
        title: "Appointment-Focused Paid Campaigns",
        desc: "Google & Meta campaigns built around bookings, not just clicks — every rupee tied to a measurable outcome.",
      },
      {
        icon: Star,
        title: "Patient Trust & Reputation Content",
        desc: "Websites and content that convey clinical credibility, plus a system for gathering and showcasing patient reviews.",
      },
      {
        icon: ShieldCheck,
        title: "Careful, Scoped Data Handling",
        desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared.",
      },
      {
        icon: Bot,
        title: "AI-Powered Patient FAQs",
        desc: "Chatbots and automated flows that answer routine questions instantly, any hour, without tying up your front desk.",
      },
      {
        icon: Headset,
        title: "BPO Patient Support",
        desc: "A trained team handling appointment calls and follow-ups, so genuine inquiries never sit on hold.",
      },
    ],
    spectrumSubtitle:
      "From getting found in local search to turning that visibility into booked appointments — here's what we bring to a healthcare engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Local SEO & Visibility", desc: "Google Business Profile optimization, local citations, and technical SEO so your clinic ranks where patients are searching." },
      { title: "Appointment-Focused Paid Ads", desc: "Google & Meta campaigns built around bookings, with clear reporting on cost-per-appointment, not just clicks." },
      { title: "Website & Patient Portal Development", desc: "Fast, trustworthy websites with easy booking flows — built to convert visits into scheduled appointments." },
      { title: "Reputation & Review Management", desc: "A system for collecting, responding to, and showcasing patient reviews across Google and the platforms that matter most." },
      { title: "AI-Powered Patient Support", desc: "Chatbots and automated flows that answer routine questions instantly, any hour, without tying up your front desk." },
      { title: "BPO Patient Call Handling", desc: "A trained team handling appointment calls and follow-ups, so genuine inquiries never sit on hold." },
    ]),
    whoWeHelpSubtitle:
      "Different healthcare businesses compete for attention differently, and win on different things — proximity, referrals, discretion, or convenience. Our approach adapts to which one you are, instead of running the same playbook for everyone.",
    whoWeHelp: [
      { icon: Stethoscope, title: "Clinics & Private Practices", desc: "Local SEO and appointment campaigns built for single-location practices competing on nearby search." },
      { icon: Building2, title: "Multi-Location Hospital Groups", desc: "Coordinated visibility and reporting across every branch, without losing a consistent brand voice." },
      { icon: Microscope, title: "Diagnostic & Imaging Centers", desc: "Campaigns built around referral and walk-in search intent — where accuracy and turnaround time sell." },
      { icon: Video, title: "Telehealth & Wellness Platforms", desc: "Digital-first acquisition and retention strategies for providers with no physical waiting room to rely on." },
      { icon: Pill, title: "Pharmacies & Wellness Retail", desc: "Local SEO and promotional campaigns that turn nearby searches for medicines and wellness products into footfall." },
      { icon: Brain, title: "Mental Health & Therapy Practices", desc: "Sensitive, trust-first content and discreet booking funnels for practices where privacy shapes every decision." },
    ],
    deliverables: [
      { number: "01", title: "Local SEO Optimization", desc: "Google Business Profile, local citations, and on-page fixes that get you found in nearby, urgent searches." },
      { number: "02", title: "Appointment Booking Funnels", desc: "Landing pages and ad flows engineered around one goal: turning a search into a booked appointment." },
      { number: "03", title: "AI Patient FAQ Chatbot", desc: "An always-on assistant that handles routine questions instantly, freeing up your front-desk staff." },
      { number: "04", title: "Reputation & Review Management", desc: "A system for collecting, responding to, and showcasing patient reviews across the platforms that matter." },
      { number: "05", title: "Conversion-Optimized Landing Pages", desc: "Service and location pages built specifically to turn visits into calls and bookings, not just page views." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on what's working — traffic, calls, and bookings — so you always know where the budget went." },
    ],
    faqs: buildFaqs("Healthcare", "No — we handle your marketing accounts (ads, analytics, website, listings), not clinical or patient data. Access is scoped to only what's needed for the work, and an NDA is available on request."),
    trustPoints: buildTrustPoints("Healthcare"),
  },

  wearables: {
    capabilities: [
      { icon: Watch, title: "Product Launch Campaigns", desc: "Coordinated paid and social pushes timed around launch day, built to convert early attention into sell-through." },
      { icon: Megaphone, title: "Performance Retargeting", desc: "Audience segmentation and retargeting tuned for e-commerce conversion, not just impressions." },
      { icon: HeartPulse, title: "Brand Story Content", desc: "Content that carries the sale beyond specs — the story, the use case, the reason to choose you." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Workflow, title: "Automated Post-Purchase Flows", desc: "Email and retargeting sequences that keep launch-week buyers engaged well past the first sale." },
      { icon: Search, title: "SEO for Product Discovery", desc: "Technical and content SEO so your products get found in search, not just paid feeds." },
    ],
    spectrumSubtitle:
      "From launch-day buzz to the retargeting that turns a spike into sustained sell-through — here's what we bring to a wearables engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Launch Campaign Management", desc: "Coordinated paid and social campaigns timed around product launches, built to convert attention into sales." },
      { title: "Performance Retargeting & Ads", desc: "Google & Meta ads tuned for e-commerce conversion, with efficient audience segmentation against big-budget competitors." },
      { title: "Brand & Content Strategy", desc: "Content that carries the sale — the story and use case behind the spec sheet." },
      { title: "Marketing Automation", desc: "Email sequences and lifecycle automations that keep buyers engaged between launches." },
      { title: "SEO for Product Discovery", desc: "Technical and content SEO so your products get found organically, not just through paid spend." },
      { title: "Social Media Management", desc: "Content calendars and community management that build a following that actually converts." },
    ]),
    whoWeHelpSubtitle:
      "Wearable-tech brands compete on more than specs — from first-time DTC launches to established players managing an always-on retargeting engine.",
    whoWeHelp: [
      { icon: Smartphone, title: "DTC Wearable Startups", desc: "Launch-focused campaigns for brands taking a first product to market direct-to-consumer." },
      { icon: Activity, title: "Fitness & Health Trackers", desc: "Content and ads that translate technical health features into everyday buyer benefits." },
      { icon: Battery, title: "Smart Accessory Brands", desc: "Retargeting and content strategy for brands competing in a crowded accessory category." },
      { icon: Store, title: "Retail & Marketplace Sellers", desc: "SEO and ads built to lift visibility across your own store and third-party marketplaces alike." },
      { icon: Users, title: "Subscription & Membership Models", desc: "Automation and retention campaigns for wearables sold with an ongoing service or app subscription." },
      { icon: TrendingUp, title: "Scaling E-Commerce Brands", desc: "Performance marketing built to handle rising ad costs without losing return on spend." },
    ],
    deliverables: [
      { number: "01", title: "Launch Campaign Planning", desc: "A coordinated paid and social plan timed around your launch date, not built after the fact." },
      { number: "02", title: "Retargeting Funnels", desc: "Segmented retargeting that turns launch-week browsers into buyers over the following weeks." },
      { number: "03", title: "Product SEO Optimization", desc: "Technical and content fixes so your product pages rank, not just your paid ads." },
      { number: "04", title: "Automated Email Sequences", desc: "Lifecycle emails that keep buyers engaged from cart to repeat purchase." },
      { number: "05", title: "Conversion-Optimized Product Pages", desc: "Landing pages built to convert traffic, tested and refined against real performance data." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reporting on what's working — spend, conversion rate, and repeat purchase — every month." },
    ],
    faqs: buildFaqs("Wearables", "We only need access to your marketing accounts (ads, analytics, storefront), not customer health or usage data collected by the device itself. An NDA is available before any details are shared."),
    trustPoints: buildTrustPoints("Wearables"),
  },

  fitness: {
    capabilities: [
      { icon: MapPin, title: "Local SEO for Gyms & Studios", desc: "Ranking your studio in nearby search, where most fitness decisions actually start." },
      { icon: Megaphone, title: "Trial Sign-Up Campaigns", desc: "Paid campaigns built around trial sign-ups and membership conversions, not just page likes." },
      { icon: Share2, title: "Social Content That Fills Classes", desc: "A content calendar built to turn followers into people who actually show up." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Workflow, title: "Automated Renewal Reminders", desc: "Automation that keeps members engaged between sign-up and renewal, cutting silent churn." },
      { icon: Trophy, title: "Member Retention Content", desc: "Ongoing content and email that keeps members motivated well past their first month." },
    ],
    spectrumSubtitle:
      "From the first local search to the renewal that keeps a member coming back — here's what we bring to a fitness engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Local SEO & Visibility", desc: "Google Business Profile and local SEO so your studio ranks in nearby, high-intent searches." },
      { title: "Trial & Membership Ad Campaigns", desc: "Google & Meta campaigns built around trial sign-ups and membership conversions, with clear cost-per-lead reporting." },
      { title: "Social Content & Community", desc: "Content calendars and community management that build a following that actually shows up to class." },
      { title: "Marketing Automation", desc: "Automated renewal reminders and re-engagement flows that reduce silent membership churn." },
      { title: "Website & Booking Development", desc: "Fast, mobile-friendly sites with class booking flows built to convert visits into sign-ups." },
      { title: "Member Retention Campaigns", desc: "Ongoing content and email built to keep members engaged well past their first month." },
    ]),
    whoWeHelpSubtitle:
      "Every fitness business fills its pipeline differently — a boutique studio wins on community, a franchise wins on consistency across locations.",
    whoWeHelp: [
      { icon: Dumbbell, title: "Independent Gyms & Studios", desc: "Local SEO and trial campaigns built for single-location businesses competing on nearby search." },
      { icon: Building2, title: "Multi-Location Fitness Chains", desc: "Coordinated visibility and reporting across every branch, without losing a consistent brand voice." },
      { icon: Salad, title: "Nutrition & Wellness Coaches", desc: "Content and lead campaigns for coaches selling programs and ongoing accountability, not just a facility." },
      { icon: Bike, title: "Specialty & Boutique Studios", desc: "Niche content strategy for cycling, yoga, and specialty formats that compete on community, not price." },
      { icon: Timer, title: "Personal Trainers & Small Teams", desc: "Lean, budget-conscious campaigns built for trainers growing a client base without a marketing team." },
      { icon: Users, title: "Corporate Wellness Programs", desc: "B2B-facing content and outreach for fitness businesses selling into corporate wellness partnerships." },
    ],
    deliverables: [
      { number: "01", title: "Local SEO Optimization", desc: "Google Business Profile and citation fixes that get you found in nearby, high-intent searches." },
      { number: "02", title: "Trial Sign-Up Funnels", desc: "Landing pages and ad flows engineered around one goal: converting a search into a trial visit." },
      { number: "03", title: "Renewal Automation Flows", desc: "Automated reminders and re-engagement emails that catch members before they quietly churn." },
      { number: "04", title: "Social Content Calendar", desc: "A consistent content plan built to keep your studio visible between promotions." },
      { number: "05", title: "Conversion-Optimized Booking Pages", desc: "Class and membership pages built to turn visits into scheduled trials, not just page views." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on trial sign-ups, conversion rate, and retention — every month." },
    ],
    faqs: buildFaqs("Fitness", "We only need access to your marketing accounts (ads, analytics, booking system) — not member health or payment data, which stays with your own systems."),
    trustPoints: buildTrustPoints("Fitness"),
  },

  ecommerce: {
    capabilities: [
      { icon: Search, title: "SEO for Product Discovery", desc: "Technical and content SEO so your catalog gets found organically, not just through paid spend." },
      { icon: Megaphone, title: "ROAS-Focused Paid Ads", desc: "Google & Meta campaigns tied to conversion rate and revenue, not just clicks." },
      { icon: ShoppingCart, title: "Cart Abandonment Recovery", desc: "Automated flows that win back carts before checkout friction quietly bleeds revenue." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Workflow, title: "Repeat Purchase Automation", desc: "Lifecycle email and retargeting built to actively manage repeat purchase rate, not leave it to chance." },
      { icon: Globe, title: "Fast, Conversion-Ready Storefronts", desc: "Website and checkout builds engineered for speed and conversion, not just aesthetics." },
    ],
    spectrumSubtitle:
      "From getting a product found in search to the repeat purchase that compounds — here's what we bring to an e-commerce engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "SEO & Product Discovery", desc: "Technical audits and content SEO so your catalog ranks in organic search, not just paid feeds." },
      { title: "Performance Paid Advertising", desc: "Google & Meta campaigns built for ROAS, with every rupee of spend tied to a measurable return." },
      { title: "Marketing Automation", desc: "Cart abandonment recovery and lifecycle email that actively manage repeat purchase rate." },
      { title: "Website & Checkout Development", desc: "Fast, mobile-optimized storefronts engineered to reduce checkout friction and lift conversion." },
      { title: "Retargeting Campaigns", desc: "Segmented retargeting that brings back browsers who didn't convert on the first visit." },
      { title: "Social Commerce & Content", desc: "Social content and paid campaigns built to drive traffic straight into your storefront." },
    ]),
    whoWeHelpSubtitle:
      "Every online store competes on a different lever — some on price and volume, others on brand and repeat loyalty.",
    whoWeHelp: [
      { icon: ShoppingBag, title: "DTC & Independent Brands", desc: "Full-funnel SEO and ads for brands building a customer base direct-to-consumer." },
      { icon: Package, title: "Multi-Product Catalog Stores", desc: "Technical SEO and campaign structure built to scale across large, varied product catalogs." },
      { icon: Truck, title: "Subscription & Repeat-Order Brands", desc: "Automation and retention campaigns built around recurring purchase behavior." },
      { icon: Tag, title: "Seasonal & Promotion-Driven Sellers", desc: "Campaign planning timed around sales events and seasonal demand spikes." },
      { icon: Store, title: "Marketplace & Multi-Channel Sellers", desc: "Visibility strategy that lifts performance across your own store and third-party marketplaces." },
      { icon: TrendingUp, title: "Scaling D2C Brands", desc: "Performance marketing structured to handle rising ad costs without losing return on spend." },
    ],
    deliverables: [
      { number: "01", title: "Technical & Product SEO", desc: "On-page and technical fixes so your product pages rank in organic search." },
      { number: "02", title: "ROAS-Focused Ad Campaigns", desc: "Paid campaigns built and reported around return on ad spend, not just clicks." },
      { number: "03", title: "Cart Recovery Automation", desc: "Automated flows that win back abandoned carts before they're lost for good." },
      { number: "04", title: "Retargeting Funnels", desc: "Segmented retargeting that brings back browsers who didn't convert the first time." },
      { number: "05", title: "Conversion-Optimized Product Pages", desc: "Product and checkout pages tested and refined against real conversion data." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reporting on traffic, conversion rate, and repeat purchases — every month." },
    ],
    faqs: buildFaqs("ECommerce", "We only need access to your marketing and storefront accounts (ads, analytics, e-commerce platform) — not customer payment details, which stay with your payment processor."),
    trustPoints: buildTrustPoints("ECommerce"),
  },

  construction: {
    capabilities: [
      { icon: MapPin, title: "Local SEO for Contractors", desc: "Ranking your business in local search, where serious buyers start looking for a contractor." },
      { icon: Megaphone, title: "Qualified Lead Campaigns", desc: "Paid campaigns targeted at people actively planning to build, not broad awareness." },
      { icon: Star, title: "Project Portfolio Marketing", desc: "A website and content system that showcases finished work to serious, high-value buyers." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Users, title: "Consultancy for Long Sales Cycles", desc: "Strategy for nurturing big-ticket leads over months, not a one-time ad click." },
      { icon: Globe, title: "Fast, Credible Websites", desc: "Websites built to make a strong first impression on buyers researching before they call." },
    ],
    spectrumSubtitle:
      "From getting found by serious buyers to nurturing a long sales cycle to close — here's what we bring to a construction engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Local SEO & Visibility", desc: "Local SEO and citations so your business ranks where people actively planning to build are searching." },
      { title: "Qualified Lead Generation Ads", desc: "Paid campaigns targeted at people actively planning to build, with clear cost-per-lead reporting." },
      { title: "Project Portfolio Websites", desc: "Websites built to showcase your finished work to serious, high-value buyers doing their research." },
      { title: "Lead Nurturing Consultancy", desc: "A follow-up strategy for long sales cycles, so leads don't go cold waiting on a decision." },
      { title: "Content & Case Studies", desc: "Case studies and project write-ups that build credibility long before the first phone call." },
      { title: "Referral Pipeline Support", desc: "A digital pipeline to fall back on when word-of-mouth referrals slow down." },
    ]),
    whoWeHelpSubtitle:
      "From residential builders to commercial contractors, every construction business wins leads differently — but all of them need a pipeline that doesn't rely purely on referrals.",
    whoWeHelp: [
      { icon: HardHat, title: "Residential Builders", desc: "Local SEO and portfolio marketing for builders competing on nearby, high-intent searches." },
      { icon: Building2, title: "Commercial Contractors", desc: "Lead generation and content built for longer, higher-value commercial project cycles." },
      { icon: Warehouse, title: "Renovation & Remodeling Firms", desc: "Campaigns timed around seasonal renovation demand and local search intent." },
      { icon: Wrench, title: "Trade & Specialty Contractors", desc: "Focused local SEO for plumbing, electrical, and other specialty trades competing on proximity." },
      { icon: Ruler, title: "Architecture & Design-Build Firms", desc: "Portfolio-led content strategy for firms that sell on design credibility, not just price." },
      { icon: Hammer, title: "Equipment & Material Suppliers", desc: "B2B lead generation for suppliers selling into the construction and trade ecosystem." },
    ],
    deliverables: [
      { number: "01", title: "Local SEO Optimization", desc: "Local citations and on-page fixes that get you found by people actively planning to build." },
      { number: "02", title: "Qualified Lead Funnels", desc: "Landing pages and ad flows built to filter for serious, ready-to-build buyers." },
      { number: "03", title: "Project Portfolio Pages", desc: "A portfolio built to make serious buyers confident in your work before they ever call." },
      { number: "04", title: "Lead Nurturing Sequences", desc: "Follow-up campaigns that keep long-cycle leads warm instead of going cold." },
      { number: "05", title: "Conversion-Optimized Landing Pages", desc: "Service pages built specifically to turn research into a booked consultation." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on leads, cost-per-lead, and pipeline — every month." },
    ],
    faqs: buildFaqs("Construction", "We only need access to your marketing accounts (ads, analytics, website) — not client contracts or project financials, which stay entirely with you."),
    trustPoints: buildTrustPoints("Construction"),
  },

  finance: {
    capabilities: [
      { icon: Star, title: "Trust-First Content", desc: "Content built to earn trust before a click ever turns into a lead — no vague claims." },
      { icon: Megaphone, title: "Compliant Lead Generation", desc: "Campaigns designed to stay within regulatory bounds while still converting." },
      { icon: Users, title: "High-Value Lead Follow-Up", desc: "A consultancy-backed process for following up on high-value leads, not an inbox of unqualified fills." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Search, title: "SEO for Financial Services", desc: "Search visibility built around the specific, high-intent terms financial buyers actually search." },
      { icon: Headset, title: "BPO for Inquiry Handling", desc: "A trained team to handle inquiry volume so genuine leads never sit unanswered." },
    ],
    spectrumSubtitle:
      "From earning trust before the first click to following up on a high-value lead properly — here's what we bring to a finance engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "SEO for Financial Services", desc: "Search visibility built around the specific, high-intent terms financial buyers actually search." },
      { title: "Compliant Lead Generation Ads", desc: "Paid campaigns designed to stay within regulatory bounds while still converting into qualified leads." },
      { title: "Trust-Building Content & Consultancy", desc: "Content and strategy that earns trust before a click ever turns into a lead." },
      { title: "BPO for Inquiry Handling", desc: "A trained team handling inquiry volume so genuine leads never sit unanswered." },
      { title: "Website Development", desc: "Websites built to convey credibility and convert serious, high-value visitors." },
      { title: "Lead Follow-Up Systems", desc: "A structured follow-up process built around real conversion, not just form-fill volume." },
    ]),
    whoWeHelpSubtitle:
      "Financial services businesses of every size share one problem — earning trust fast enough to convert a click into a real conversation.",
    whoWeHelp: [
      { icon: PiggyBank, title: "Independent Financial Advisors", desc: "Trust-first content and lead generation for advisors building a client base one relationship at a time." },
      { icon: Landmark, title: "Lending & Loan Providers", desc: "Compliant campaigns built around specific, high-intent borrower search terms." },
      { icon: Wallet, title: "Insurance Agencies", desc: "Lead generation and follow-up systems built for insurance's longer decision cycle." },
      { icon: CreditCard, title: "Fintech & Digital-First Platforms", desc: "Performance marketing for platforms competing on trust as much as on features." },
      { icon: TrendingUp, title: "Investment & Wealth Management Firms", desc: "Content-led SEO and consultancy for firms where credibility drives every lead." },
      { icon: Building2, title: "Multi-Branch Financial Institutions", desc: "Coordinated visibility and reporting across every branch, without losing a consistent voice." },
    ],
    deliverables: [
      { number: "01", title: "Compliant Lead Generation Campaigns", desc: "Paid campaigns built within regulatory limits, still tied to a measurable return." },
      { number: "02", title: "Trust-Building Content", desc: "Content that earns confidence before a click ever turns into a lead." },
      { number: "03", title: "High-Value Lead Follow-Up", desc: "A structured process for following up on high-value leads properly, not letting them go cold." },
      { number: "04", title: "SEO for High-Intent Terms", desc: "Search visibility built around the specific terms financial buyers actually use." },
      { number: "05", title: "Conversion-Optimized Landing Pages", desc: "Service pages built to convert serious, high-value visitors into consultations." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on leads, cost-per-lead, and qualified pipeline — every month." },
    ],
    faqs: buildFaqs("Finance", "We handle your marketing accounts only (ads, analytics, website) — never client financial records or account data, which stay entirely within your own compliant systems. An NDA is available on request."),
    trustPoints: buildTrustPoints("Finance"),
  },

  entertainment: {
    capabilities: [
      { icon: Share2, title: "Social-First Content", desc: "Content built to grow audiences and keep them engaged between releases, not just around launch." },
      { icon: Megaphone, title: "Buzz & Awareness Campaigns", desc: "Paid campaigns built to build hype and stand out in an oversaturated feed." },
      { icon: Bot, title: "AI-Driven Audience Insights", desc: "AI tools that put campaign audience data to work for the next release, not left unused." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Search, title: "SEO for Discoverability", desc: "Search visibility that keeps your brand findable between release cycles, not just at launch." },
      { icon: Sparkles, title: "Between-Release Engagement", desc: "A content plan built to keep audiences engaged in the gaps between big moments." },
    ],
    spectrumSubtitle:
      "From building hype before a release to keeping an audience engaged after — here's what we bring to an entertainment engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Social-First Content Strategy", desc: "Content calendars built to grow audiences and keep them engaged between releases." },
      { title: "Buzz & Paid Awareness Campaigns", desc: "Paid campaigns built to build hype and stand out in an oversaturated feed." },
      { title: "AI-Driven Audience Insights", desc: "AI tools that put campaign audience data to work for the next release cycle." },
      { title: "SEO for Discoverability", desc: "Search visibility that keeps your brand findable between big release moments." },
      { title: "Community & Fan Engagement", desc: "Community management that keeps fans engaged well beyond the trailer drop." },
      { title: "Content Production Support", desc: "Content built specifically to fill the gaps between major release moments." },
    ]),
    whoWeHelpSubtitle:
      "Entertainment brands live and die on attention — our approach adapts to how your audience actually engages, not a generic content calendar.",
    whoWeHelp: [
      { icon: Film, title: "Film & Streaming Studios", desc: "Buzz campaigns and social content built around release cycles and audience retention." },
      { icon: Music, title: "Music Labels & Artists", desc: "Fan engagement and content strategy built to grow and retain an active listener base." },
      { icon: Tv, title: "TV & Broadcast Networks", desc: "Social-first content and SEO built to keep programming discoverable between air dates." },
      { icon: Mic, title: "Podcasts & Audio Creators", desc: "Distribution-focused content and community management for audio-first audiences." },
      { icon: Camera, title: "Content Creators & Influencers", desc: "Personal brand campaigns built around consistent, recognizable audience engagement." },
      { icon: Users, title: "Event & Live Entertainment Brands", desc: "Awareness campaigns timed around live shows, tours, and appearances." },
    ],
    deliverables: [
      { number: "01", title: "Pre-Release Buzz Campaigns", desc: "Paid and social campaigns timed to build hype well before a release date." },
      { number: "02", title: "Between-Release Content Plan", desc: "A content calendar built to keep audiences engaged in the gaps between big moments." },
      { number: "03", title: "AI Audience Insights", desc: "Campaign data put to work for the next release, not left sitting unused." },
      { number: "04", title: "SEO for Discoverability", desc: "Search visibility fixes that keep your brand findable year-round, not just at launch." },
      { number: "05", title: "Community Management", desc: "Ongoing engagement that keeps fans active between content drops." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on reach, engagement, and audience growth — every month." },
    ],
    faqs: buildFaqs("Entertainment", "We only need access to your marketing and social accounts (ads, analytics, socials) — not proprietary content, scripts, or unreleased material, which stays entirely with you."),
    trustPoints: buildTrustPoints("Entertainment"),
  },

  education: {
    capabilities: [
      { icon: MapPin, title: "Local SEO for Institutes", desc: "Ranking your school or institute where students and parents are actually searching." },
      { icon: Megaphone, title: "Admission-Season Ad Campaigns", desc: "Paid campaigns timed to admission season, when the window for a slow start is unforgiving." },
      { icon: Share2, title: "Content for Two Audiences", desc: "Messaging built to reach students and parents, who search and decide differently." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Headset, title: "BPO for Inquiry Season", desc: "A trained team handling peak-season inquiry volume so no genuine lead goes unanswered." },
      { icon: Globe, title: "Fast, Enrollment-Ready Websites", desc: "Websites built with clear enrollment paths for two very different visitor types." },
    ],
    spectrumSubtitle:
      "From reaching two decision-makers at once to handling peak-season inquiry volume — here's what we bring to an education engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Local & Institutional SEO", desc: "SEO built to rank your school or institute where students and parents are actually searching." },
      { title: "Admission-Season Ad Campaigns", desc: "Paid campaigns timed to the admission window, when a slow start misses the season entirely." },
      { title: "Social Outreach & Content", desc: "Content built to reach students and parents, who search and decide very differently." },
      { title: "BPO for Peak-Season Inquiries", desc: "A trained team handling inquiry volume during peak season, without overwhelming front-office staff." },
      { title: "Enrollment-Focused Website Development", desc: "Websites built with clear enrollment paths for two very different visitor types." },
      { title: "Reputation & Review Content", desc: "Content built to showcase outcomes and reviews that build parent confidence." },
    ]),
    whoWeHelpSubtitle:
      "From single-campus schools to multi-branch coaching chains, every education business runs on a tight, seasonal enrollment window.",
    whoWeHelp: [
      { icon: GraduationCap, title: "Schools & Colleges", desc: "Local SEO and admission-season campaigns built for institutions competing on nearby search." },
      { icon: BookOpen, title: "Coaching Centers & Tutorials", desc: "Enrollment-focused campaigns timed around exam and admission seasons." },
      { icon: School, title: "Multi-Branch Institute Chains", desc: "Coordinated visibility and reporting across every branch, without losing a consistent voice." },
      { icon: Laptop, title: "Online Course & EdTech Platforms", desc: "Performance marketing built for digital-first learners with no physical campus to rely on." },
      { icon: Award, title: "Certification & Skill Programs", desc: "Lead generation built around outcome-driven, career-focused search intent." },
      { icon: Users, title: "Corporate Training Providers", desc: "B2B-facing content and outreach for providers selling training into other businesses." },
    ],
    deliverables: [
      { number: "01", title: "Local SEO Optimization", desc: "Local citations and on-page fixes that get you found by students and parents alike." },
      { number: "02", title: "Admission Funnel Campaigns", desc: "Landing pages and ad flows built around the tight admission-season window." },
      { number: "03", title: "Peak-Season Inquiry Support", desc: "A support system that handles inquiry volume without overwhelming your front office." },
      { number: "04", title: "Dual-Audience Content", desc: "Messaging built to speak to both students and the parents making the final call." },
      { number: "05", title: "Conversion-Optimized Enrollment Pages", desc: "Enrollment pages built specifically to turn visits into completed applications." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on inquiries, cost-per-lead, and enrollment — every month." },
    ],
    faqs: buildFaqs("Education", "We only need access to your marketing accounts (ads, analytics, website) — not student records or academic data, which stay entirely within your own systems."),
    trustPoints: buildTrustPoints("Education"),
  },

  events: {
    capabilities: [
      { icon: Megaphone, title: "Ticket-Sales Ad Campaigns", desc: "Paid campaigns built around a hard deadline — momentum has to build fast before doors open." },
      { icon: Share2, title: "Awareness-to-Registration Content", desc: "Content built to convert awareness into actual ticket sales, not just impressions." },
      { icon: CalendarDays, title: "Pre-Event Hype Building", desc: "A campaign timeline built to build hype well before the event date, not the week of." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Globe, title: "Fast, Ticketing-Ready Websites", desc: "Event pages and ticketing flows built to convert visits into registrations." },
      { icon: Users, title: "Post-Event Follow-Up", desc: "Content and follow-up campaigns that put an already-built audience to work for the next event." },
    ],
    spectrumSubtitle:
      "From awareness weeks out to the last-minute push for ticket sales — here's what we bring to an events engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Ticket-Sales Ad Campaigns", desc: "Paid campaigns built around the hard deadline of event day, with clear cost-per-registration reporting." },
      { title: "Social Awareness Content", desc: "Content built to build hype and convert awareness into actual ticket sales." },
      { title: "Event Website & Ticketing Pages", desc: "Fast event pages and ticketing flows built to convert visits into registrations." },
      { title: "Post-Event Content & Follow-Up", desc: "Follow-up campaigns that put an already-built audience to work for the next event." },
      { title: "SEO for Event Discovery", desc: "Search visibility so your event gets found by people actively searching for it." },
      { title: "Sponsor & Partner Content", desc: "Content and reporting built to support sponsor visibility and partner relationships." },
    ]),
    whoWeHelpSubtitle:
      "Every event runs against the same hard deadline — our approach adapts to how your specific audience discovers and decides to attend.",
    whoWeHelp: [
      { icon: Ticket, title: "Conference & Conclave Organizers", desc: "B2B-focused campaigns built around professional audiences and registration deadlines." },
      { icon: PartyPopper, title: "Festivals & Public Events", desc: "Broad-reach social and paid campaigns built to build public hype fast." },
      { icon: Music, title: "Concerts & Live Shows", desc: "Ticket-sales campaigns timed around on-sale dates and artist announcements." },
      { icon: Building2, title: "Corporate & Trade Events", desc: "Professional-audience campaigns built around B2B registration and lead capture." },
      { icon: Users, title: "Community & Recurring Meetups", desc: "Lightweight, consistent campaigns for organizers running events on a recurring schedule." },
      { icon: MapPin, title: "Venue & Event Space Operators", desc: "Local SEO and lead generation for venues booking out their own space to organizers." },
    ],
    deliverables: [
      { number: "01", title: "Pre-Event Hype Campaigns", desc: "Paid and social campaigns timed to build momentum well before doors open." },
      { number: "02", title: "Ticket-Sales Funnels", desc: "Landing pages and ad flows engineered around one goal: converting interest into a purchased ticket." },
      { number: "03", title: "Event Website & Ticketing Pages", desc: "Fast pages built to convert visits into completed registrations." },
      { number: "04", title: "Post-Event Follow-Up Content", desc: "Campaigns that put your built audience to work for the next event, instead of starting from zero." },
      { number: "05", title: "SEO for Event Discovery", desc: "Search visibility fixes so people actively searching for your event actually find it." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on registrations, cost-per-ticket, and reach — every month." },
    ],
    faqs: buildFaqs("Events", "We only need access to your marketing and ticketing accounts (ads, analytics, ticketing platform) — not attendee payment details, which stay with your ticketing provider."),
    trustPoints: buildTrustPoints("Events"),
  },

  manufacturing: {
    capabilities: [
      { icon: Search, title: "Industrial & Technical SEO", desc: "SEO built for specific, low-volume industrial search terms, not generic content." },
      { icon: Users, title: "B2B Lead Nurturing", desc: "A follow-up process for long procurement cycles, so leads don't go cold waiting on a decision." },
      { icon: Globe, title: "Credible B2B Websites", desc: "Websites built to hold up under the extensive research B2B buyers do before making contact." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Megaphone, title: "Targeted B2B Paid Campaigns", desc: "Paid campaigns built to reach the specific buyers and partners searching for what you make." },
      { icon: Star, title: "Case Studies & Proof Points", desc: "Content that builds credibility with technical, research-heavy B2B buyers before they ever call." },
    ],
    spectrumSubtitle:
      "From getting found by the right B2B buyer to nurturing a long procurement cycle — here's what we bring to a manufacturing engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Industrial SEO", desc: "Technical SEO built for specific, low-volume industrial search terms, not generic content." },
      { title: "B2B Lead Generation Ads", desc: "Paid campaigns built to reach the specific buyers and partners actually searching for what you make." },
      { title: "Business Consultancy", desc: "Strategic guidance for long procurement cycles, so leads get real nurturing, not a one-time ad click." },
      { title: "Website Development", desc: "Credible B2B websites built to hold up under extensive buyer research." },
      { title: "Case Studies & Content", desc: "Proof-point content that builds credibility with technical, research-heavy buyers before they call." },
      { title: "Lead Nurturing Systems", desc: "A structured follow-up process built around long, multi-stakeholder procurement decisions." },
    ]),
    whoWeHelpSubtitle:
      "B2B manufacturing buyers research extensively before ever making contact — our approach is built around that long, careful decision process.",
    whoWeHelp: [
      { icon: Factory, title: "Industrial Manufacturers", desc: "Technical SEO and lead generation for manufacturers competing on specific, low-volume search terms." },
      { icon: Cog, title: "Component & Parts Suppliers", desc: "B2B campaigns built to reach buyers researching specific components and specifications." },
      { icon: Truck, title: "Logistics & Distribution Partners", desc: "Visibility strategy for businesses selling into the broader manufacturing supply chain." },
      { icon: Package, title: "Contract & OEM Manufacturers", desc: "Credibility-focused content for manufacturers pitching to enterprise and OEM buyers." },
      { icon: Boxes, title: "Wholesale & Bulk Suppliers", desc: "Lead generation built around bulk-order, long-cycle B2B purchasing behavior." },
      { icon: Building2, title: "Multi-Facility Operations", desc: "Coordinated visibility and reporting across every plant and facility." },
    ],
    deliverables: [
      { number: "01", title: "Industrial SEO Optimization", desc: "Technical fixes and content built for specific, low-volume industrial search terms." },
      { number: "02", title: "B2B Lead Generation Campaigns", desc: "Paid campaigns built to reach the exact buyers and partners searching for what you make." },
      { number: "03", title: "Lead Nurturing Sequences", desc: "Follow-up campaigns that keep long-cycle procurement leads warm instead of going cold." },
      { number: "04", title: "Case Studies & Proof Content", desc: "Content built to build credibility with research-heavy B2B buyers before they call." },
      { number: "05", title: "Conversion-Optimized Website Pages", desc: "Pages built specifically to turn extensive buyer research into a real inquiry." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on leads, cost-per-lead, and pipeline — every month." },
    ],
    faqs: buildFaqs("Manufacturing", "We only need access to your marketing accounts (ads, analytics, website) — not proprietary specs, pricing, or supplier data, which stay entirely with you."),
    trustPoints: buildTrustPoints("Manufacturing"),
  },

  restaurant: {
    capabilities: [
      { icon: MapPin, title: "Local SEO & Maps Visibility", desc: "Ranking your restaurant where diners decide where to eat — local search and Maps, right now." },
      { icon: Share2, title: "Social Content That Sells", desc: "A consistent social presence that makes even great food look memorable, not forgettable." },
      { icon: Star, title: "Review & Reputation Management", desc: "A system for actively managing reviews, since repeat visits compound only when someone's on it." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Megaphone, title: "Footfall-Driven Paid Campaigns", desc: "Paid campaigns built around getting people through the door, not just impressions." },
      { icon: Headset, title: "BPO for Reservations & Orders", desc: "A trained team handling reservation and order calls so genuine business never sits on hold." },
    ],
    spectrumSubtitle:
      "From getting found in local search to turning a first visit into a regular — here's what we bring to a restaurant engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Local SEO & Maps Optimization", desc: "Google Business Profile and local SEO so your restaurant ranks in nearby, high-intent searches." },
      { title: "Footfall-Driven Paid Ads", desc: "Google & Meta campaigns built around getting people through the door, with clear reporting." },
      { title: "Social Content & Community", desc: "A consistent content calendar that makes great food look memorable online." },
      { title: "Review & Reputation Management", desc: "A system for collecting and responding to reviews that compound into repeat visits." },
      { title: "BPO for Reservations & Orders", desc: "A trained team handling reservation and order calls so genuine business never sits on hold." },
      { title: "Website & Online Ordering", desc: "Fast websites with easy ordering and reservation flows built to convert visits into bookings." },
    ]),
    whoWeHelpSubtitle:
      "From a single neighborhood café to a multi-location chain, every restaurant business competes on visibility right where hungry customers are searching.",
    whoWeHelp: [
      { icon: UtensilsCrossed, title: "Independent Restaurants & Cafes", desc: "Local SEO and social content built for single-location spots competing on nearby search." },
      { icon: Building2, title: "Multi-Location Restaurant Chains", desc: "Coordinated visibility and reporting across every branch, without losing a consistent brand voice." },
      { icon: Coffee, title: "Cafes & Quick-Service Spots", desc: "Footfall-driven campaigns built around fast, frequent, nearby decision-making." },
      { icon: ChefHat, title: "Fine Dining & Chef-Led Concepts", desc: "Brand-led content strategy for restaurants that sell on experience, not just convenience." },
      { icon: Wine, title: "Bars & Nightlife Venues", desc: "Event-driven social campaigns built around nightly and weekend footfall." },
      { icon: Soup, title: "Cloud Kitchens & Delivery-First Brands", desc: "Digital-first acquisition strategy for brands with no dine-in presence to rely on." },
    ],
    deliverables: [
      { number: "01", title: "Local SEO & Maps Optimization", desc: "Google Business Profile fixes that get you found in nearby, right-now searches." },
      { number: "02", title: "Footfall Campaign Management", desc: "Paid campaigns built and reported around getting people through the door." },
      { number: "03", title: "Review & Reputation System", desc: "An active process for collecting and responding to reviews across every platform that matters." },
      { number: "04", title: "Social Content Calendar", desc: "A consistent content plan built to keep your restaurant top of mind between visits." },
      { number: "05", title: "Online Ordering & Booking Pages", desc: "Website flows built to convert visits into completed reservations or orders." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on visibility, footfall campaigns, and reviews — every month." },
    ],
    faqs: buildFaqs("Restaurant", "We only need access to your marketing accounts (ads, analytics, listings) — not payment or ordering-system data, which stay with your own POS and ordering provider."),
    trustPoints: buildTrustPoints("Restaurant"),
  },

  travel: {
    capabilities: [
      { icon: Share2, title: "Inspiration-Stage Content", desc: "Content built for the inspiration stage, long before someone's ready to book — most campaigns skip it." },
      { icon: Megaphone, title: "Booking-Focused Paid Campaigns", desc: "Ads built to convert booking intent, timed against seasonal and time-sensitive demand." },
      { icon: Star, title: "Trust Signal Content", desc: "Reviews, real photos, and clear pricing — trust signals that matter more in travel than almost anywhere." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Search, title: "SEO for Destination Search", desc: "Search visibility built around the destinations and experiences people are actively researching." },
      { icon: Globe, title: "Fast, Booking-Ready Websites", desc: "Websites with booking flows built to convert inspired browsers into confirmed bookings." },
    ],
    spectrumSubtitle:
      "From inspiring a trip to converting booking intent before the window closes — here's what we bring to a travel engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Inspiration-Stage Content", desc: "Content built for the earliest stage of a travel decision, long before someone's ready to book." },
      { title: "Booking-Focused Paid Ads", desc: "Google & Meta campaigns timed to seasonal demand and built to convert booking intent." },
      { title: "SEO for Destination Search", desc: "Search visibility built around the destinations and experiences people are actively researching." },
      { title: "Trust & Review Content", desc: "Real photos, reviews, and clear pricing — the trust signals that matter most in travel." },
      { title: "Website & Booking Development", desc: "Fast booking flows built to convert inspired browsers into confirmed reservations." },
      { title: "Social Content & Community", desc: "Content that keeps your destination or service top of mind through the whole planning journey." },
    ]),
    whoWeHelpSubtitle:
      "Travel decisions move through inspiration, research, and booking — our approach is built to catch demand at every one of those stages.",
    whoWeHelp: [
      { icon: Plane, title: "Travel Agencies & Tour Operators", desc: "Full-journey campaigns from inspiration content through to booking conversion." },
      { icon: BedDouble, title: "Hotels & Resorts", desc: "Local SEO and booking-focused ads for properties competing on direct bookings." },
      { icon: Luggage, title: "Destination Marketing Organizations", desc: "Broad-reach inspiration content built to put a destination on the map." },
      { icon: Compass, title: "Adventure & Experience Providers", desc: "Content and campaigns built around niche, experience-led travel demand." },
      { icon: Ship, title: "Cruise & Group Travel Operators", desc: "Seasonal campaign planning timed to group booking windows and demand spikes." },
      { icon: MapPin, title: "Local Tour & Activity Businesses", desc: "Local SEO and paid campaigns for businesses competing on nearby, in-destination search." },
    ],
    deliverables: [
      { number: "01", title: "Inspiration-Stage Content", desc: "Content built to reach travelers before they're ready to book, not just after." },
      { number: "02", title: "Booking-Focused Ad Campaigns", desc: "Paid campaigns timed to seasonal demand and built to convert booking intent." },
      { number: "03", title: "SEO for Destination Search", desc: "Search visibility fixes built around the destinations people are actively researching." },
      { number: "04", title: "Trust & Review Content", desc: "Real photos, reviews, and clear pricing that build confidence before a booking." },
      { number: "05", title: "Conversion-Optimized Booking Pages", desc: "Booking flows built to convert inspired browsers into confirmed reservations." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on traffic, bookings, and seasonal performance — every month." },
    ],
    faqs: buildFaqs("Travel", "We only need access to your marketing and booking accounts (ads, analytics, booking engine) — not traveler payment details, which stay with your booking or payment provider."),
    trustPoints: buildTrustPoints("Travel"),
  },

  "real-estate": {
    capabilities: [
      { icon: MapPin, title: "Local SEO for Listings", desc: "Optimizing listings for local search so they don't sit unseen while competitors get found first." },
      { icon: Megaphone, title: "Qualified Buyer & Renter Ads", desc: "Paid campaigns built to filter for serious buyers and renters, not just clicks." },
      { icon: Star, title: "Listing Pages That Convert", desc: "Listing pages built to hold up under the extensive research high-value decisions demand." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Headset, title: "BPO for Inquiry Handling", desc: "A trained team handling inquiries so agent time isn't wasted on unqualified leads." },
      { icon: Globe, title: "Fast, Listing-Ready Websites", desc: "Websites built to showcase listings clearly and convert visits into inquiries." },
    ],
    spectrumSubtitle:
      "From getting a listing found in local search to qualifying the leads that come from it — here's what we bring to a real estate engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Local SEO for Listings", desc: "Local search optimization so listings get found first, not lost behind competitors." },
      { title: "Qualified Buyer & Renter Ads", desc: "Paid campaigns built to filter for serious prospects, with clear cost-per-lead reporting." },
      { title: "Listing Page Optimization", desc: "Listing pages built to hold up under the research buyers do before making contact." },
      { title: "BPO for Inquiry Handling", desc: "A trained team handling inquiries so agent time isn't wasted on unqualified leads." },
      { title: "Website Development", desc: "Fast, clear websites built to showcase listings and convert visits into inquiries." },
      { title: "Social & Content Marketing", desc: "Content that builds visibility for your listings and your agency's reputation alike." },
    ]),
    whoWeHelpSubtitle:
      "From individual agents to full brokerages, real estate businesses all compete on the same thing — getting a listing seen by the right buyer first.",
    whoWeHelp: [
      { icon: HomeIcon, title: "Independent Agents & Brokers", desc: "Local SEO and lead campaigns built for agents competing on nearby, high-intent search." },
      { icon: Building2, title: "Real Estate Agencies & Brokerages", desc: "Coordinated visibility and reporting across every agent and listing." },
      { icon: KeyRound, title: "Rental & Property Management Firms", desc: "Lead generation built around renter search behavior and availability turnaround." },
      { icon: Warehouse, title: "Commercial Real Estate Firms", desc: "B2B-facing campaigns for firms selling and leasing commercial space." },
      { icon: Landmark, title: "New Development & Builder Sales", desc: "Launch-focused campaigns for new projects competing for early buyer interest." },
      { icon: MapPin, title: "Local Property Portals & Listings", desc: "SEO and content built to lift visibility across owned listing platforms." },
    ],
    deliverables: [
      { number: "01", title: "Local SEO for Listings", desc: "Local search fixes so listings get found first, not lost behind the competition." },
      { number: "02", title: "Qualified Lead Campaigns", desc: "Paid campaigns built to filter for serious buyers and renters, not just clicks." },
      { number: "03", title: "Listing Page Optimization", desc: "Listing pages built to convert extensive buyer research into a real inquiry." },
      { number: "04", title: "Inquiry Handling Support", desc: "A support system that filters and routes inquiries so agent time isn't wasted." },
      { number: "05", title: "Conversion-Optimized Website Pages", desc: "Website pages built specifically to turn visits into scheduled viewings." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on leads, cost-per-lead, and listing performance — every month." },
    ],
    faqs: buildFaqs("Real Estate", "We only need access to your marketing accounts (ads, analytics, listing platforms) — not buyer financial or personal documents, which stay entirely with you."),
    trustPoints: buildTrustPoints("Real Estate"),
  },

  gaming: {
    capabilities: [
      { icon: Megaphone, title: "Player Acquisition Campaigns", desc: "Paid campaigns built around retention-minded acquisition, not just install volume." },
      { icon: Share2, title: "Community-First Content", desc: "Social content built to keep community sentiment positive between updates and patches." },
      { icon: Bot, title: "AI-Powered Player Support", desc: "AI chatbots and automation that handle routine player questions without slowing down support." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: Workflow, title: "Retention Automation", desc: "Lifecycle automation built to keep players engaged between content drops, not just at launch." },
      { icon: Star, title: "Launch & Update Hype Building", desc: "Campaigns built to build hype around launches and updates, and sustain it afterward." },
    ],
    spectrumSubtitle:
      "From player acquisition to keeping a community engaged between content drops — here's what we bring to a gaming engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Player Acquisition Campaigns", desc: "Paid campaigns built around retention-minded acquisition, not just install volume." },
      { title: "Community & Social Content", desc: "Content built to keep community sentiment positive between updates and patches." },
      { title: "AI-Powered Player Support", desc: "AI chatbots and automation that handle routine player questions without slowing support." },
      { title: "Retention & Lifecycle Automation", desc: "Automation built to keep players engaged between content drops, not just at launch." },
      { title: "Launch Campaign Management", desc: "Coordinated campaigns built to build hype around launches and major updates." },
      { title: "Analytics & Reporting", desc: "Clear reporting on acquisition cost, retention, and engagement — not vanity install numbers." },
    ]),
    whoWeHelpSubtitle:
      "From indie studios to live-service platforms, every gaming business needs a plan for the harder problem — sustaining engagement, not just generating hype.",
    whoWeHelp: [
      { icon: Gamepad2, title: "Indie Game Studios", desc: "Launch and community campaigns built for studios growing a following from scratch." },
      { icon: Trophy, title: "Esports & Competitive Platforms", desc: "Community and content strategy built around competitive events and tournament hype." },
      { icon: Users, title: "Live-Service & Multiplayer Games", desc: "Retention automation and content built to sustain engagement between content drops." },
      { icon: Radio, title: "Game Streaming & Broadcast Platforms", desc: "Content strategy built for platforms where discovery drives the whole business." },
      { icon: Swords, title: "Mobile Game Publishers", desc: "Performance-focused acquisition campaigns tuned for mobile install and retention economics." },
      { icon: Tv, title: "Gaming Hardware & Accessory Brands", desc: "Product launch and community content for brands selling into the gaming ecosystem." },
    ],
    deliverables: [
      { number: "01", title: "Player Acquisition Campaigns", desc: "Paid campaigns built around retention-minded acquisition, not just installs." },
      { number: "02", title: "Community Management", desc: "Ongoing engagement that keeps community sentiment positive between updates." },
      { number: "03", title: "AI Player Support Chatbot", desc: "An always-on assistant that handles routine player questions instantly." },
      { number: "04", title: "Retention Automation Flows", desc: "Lifecycle automation that keeps players engaged well past day one." },
      { number: "05", title: "Launch & Update Hype Campaigns", desc: "Coordinated campaigns built to build and sustain hype around major releases." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reports on acquisition cost, retention, and engagement — every month." },
    ],
    faqs: buildFaqs("Gaming", "We only need access to your marketing and community accounts (ads, analytics, socials) — not player accounts, in-game data, or payment information, which stay entirely within your own systems."),
    trustPoints: buildTrustPoints("Gaming"),
  },

  "fashion-apparel": {
    capabilities: [
      { icon: Share2, title: "Social-First Content & Campaigns", desc: "Content and paid social built around what's trending right now, not a calendar planned months in advance." },
      { icon: Megaphone, title: "Performance Retargeting", desc: "Audience segmentation and retargeting tuned for e-commerce conversion in a fast-moving, visual category." },
      { icon: Camera, title: "Brand & Lookbook Content", desc: "Content that carries the sale beyond the product photo — the story, the styling, the reason to buy now." },
      { icon: ShieldCheck, title: "Careful, Scoped Data Handling", desc: "Access to your accounts is scoped to what's needed, with an NDA available before any project details are shared." },
      { icon: ShoppingBag, title: "Conversion-Ready Storefronts", desc: "Fast, mobile-first storefronts built to turn browsing into checked-out carts." },
      { icon: Search, title: "SEO for Product & Trend Discovery", desc: "Technical and content SEO so your collections get found organically, not just through paid spend." },
    ],
    spectrumSubtitle:
      "From styling content that carries the sale to the storefront that closes it — here's what we bring to a fashion and apparel engagement.",
    spectrumServices: buildSpectrumServices([
      { title: "Social Media Marketing", desc: "Content calendars and styling content built around trending looks and real-time buying behavior." },
      { title: "Performance Paid Advertising", desc: "Google & Meta campaigns tuned for e-commerce conversion, with efficient retargeting against fast-changing trends." },
      { title: "SEO for Product Discovery", desc: "Technical and content SEO so your collections rank organically, not just through paid feeds." },
      { title: "Website & Storefront Development", desc: "Fast, mobile-first storefronts engineered to reduce checkout friction and lift conversion." },
      { title: "Brand & Content Strategy", desc: "Lookbook-style content and styling stories that carry the sale beyond the product photo." },
      { title: "Marketing Automation", desc: "Cart recovery and lifecycle email that keep browsers moving toward checkout." },
    ]),
    whoWeHelpSubtitle:
      "Fashion and apparel brands compete on more than product — from first-time DTC labels to established retailers managing an always-on content and ad engine.",
    whoWeHelp: [
      { icon: ShoppingBag, title: "DTC Fashion Startups", desc: "Launch-focused campaigns for labels taking a first collection to market direct-to-consumer." },
      { icon: Store, title: "Retail & Marketplace Sellers", desc: "SEO and ads built to lift visibility across your own store and third-party marketplaces alike." },
      { icon: Sparkles, title: "Boutique & Designer Labels", desc: "Brand-led content strategy for labels that sell on story and craft, not just price." },
      { icon: Tag, title: "Seasonal & Drop-Based Brands", desc: "Campaign planning timed around collection drops and seasonal demand spikes." },
      { icon: Users, title: "Subscription & Membership Fashion", desc: "Retention and automation campaigns for apparel sold with an ongoing box or membership model." },
      { icon: TrendingUp, title: "Scaling E-Commerce Fashion Brands", desc: "Performance marketing built to handle rising ad costs without losing return on spend." },
    ],
    deliverables: [
      { number: "01", title: "Social Content Calendar", desc: "A consistent content plan built around trending styles and real buying behavior, not a generic monthly schedule." },
      { number: "02", title: "Performance Ad Campaigns", desc: "Paid campaigns built and reported around conversion rate and revenue, not just clicks." },
      { number: "03", title: "Product & Collection SEO", desc: "Technical and content fixes so your collections rank in organic search." },
      { number: "04", title: "Cart Recovery Automation", desc: "Automated flows that win back carts before checkout friction quietly bleeds revenue." },
      { number: "05", title: "Conversion-Optimized Storefront Pages", desc: "Product and checkout pages tested and refined against real conversion data." },
      { number: "06", title: "Monthly Performance Reporting", desc: "Clear reporting on traffic, conversion rate, and repeat purchases — every month." },
    ],
    faqs: buildFaqs("Fashion & Apparel", "We only need access to your marketing and storefront accounts (ads, analytics, e-commerce platform) — not customer payment details, which stay with your payment processor."),
    trustPoints: buildTrustPoints("Fashion & Apparel"),
  },
};

export function getIndustryPageContent(slug) {
  return INDUSTRY_PAGE_CONTENT[slug];
}
