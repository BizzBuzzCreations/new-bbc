// The site's structure in one place (rebuild): the header's mega menus, the
// phone menu, the footer, the homepage's service rows and the /services and
// /industries indexes all read from here, so a link can't exist in one and
// be missing from another. URLs are the live ones — never change them here
// without a redirect.

export const SERVICE_LINES = [
  {
    no: "01",
    name: "Search Engine Optimisation",
    short: "SEO",
    href: "/search-engine-optimization",
    line: "Rank on Google and get named by AI assistants — technical, local and content SEO.",
    subs: [
      { label: "AI Search Optimization", href: "/search-engine-optimization/ai-search-optimization" },
      { label: "Generative Engine Optimization (GEO)", href: "/search-engine-optimization/generative-engine-optimization" },
      { label: "Answer Engine Optimization (AEO)", href: "/search-engine-optimization/answer-engine-optimization" },
      { label: "Semantic SEO & Topical Authority", href: "/search-engine-optimization/semantic-seo-topical-authority" },
      { label: "Agency Growth & White Label SEO", href: "/search-engine-optimization/ai-content-optimization" },
      { label: "High-Intent & Local SEO", href: "/search-engine-optimization/high-intent-local-seo" },
    ],
  },
  {
    no: "02",
    name: "Paid Marketing",
    short: "Google Ads & paid",
    href: "/paid-marketing",
    line: "Google, Meta and AI-platform ads run for leads and sales, not clicks.",
    subs: [
      { label: "Google & Search Ads Management", href: "/paid-marketing/google-search-ads-management" },
      { label: "Meta & Social Ads Management", href: "/paid-marketing/meta-social-ads-management" },
      { label: "Performance Marketing & ROI Campaigns", href: "/paid-marketing/performance-marketing-roi-campaigns" },
      { label: "Lead Generation Campaigns", href: "/paid-marketing/lead-generation-campaigns" },
      { label: "E-commerce & Retargeting Ads", href: "/paid-marketing/ecommerce-retargeting-ads" },
      { label: "ChatGPT & AI Platform Ads Service", href: "/paid-marketing/local-city-based-ad-campaigns" },
    ],
  },
  {
    no: "03",
    name: "Social Media Marketing",
    short: "Social media",
    href: "/social-media-marketing",
    line: "Content, reels and community on Instagram, Facebook and LinkedIn — planned, made and managed.",
    subs: [
      { label: "Social Media Management Services", href: "/social-media-marketing/social-media-management-services" },
      { label: "Instagram Marketing Agency", href: "/social-media-marketing/instagram-marketing-agency" },
      { label: "Facebook & Meta Ads Agency", href: "/social-media-marketing/facebook-meta-ads-agency" },
      { label: "LinkedIn Marketing for B2B Growth", href: "/social-media-marketing/linkedin-marketing-b2b-growth" },
      { label: "AI Social Media Marketing", href: "/social-media-marketing/ai-social-media-marketing" },
      { label: "Reels & Short Video Marketing", href: "/social-media-marketing/reels-short-video-marketing" },
    ],
  },
  {
    no: "04",
    name: "Website Development",
    short: "Websites & web apps",
    href: "/web-development",
    line: "Fast, secure sites and web apps — custom, React / Next.js, WordPress, Shopify and PHP.",
    subs: [
      { label: "Custom Web Development & Design", href: "/web-development/custom-web-development" },
      { label: "Shopify & Ecommerce Development", href: "/web-development/shopify-ecommerce-development" },
      { label: "PHP Web Application Development", href: "/web-development/php-web-application-development" },
      { label: "React & Next.js Development", href: "/web-development/react-nextjs-development" },
      { label: "Website Redesign & Management", href: "/web-development/website-redesign-management" },
      { label: "WordPress Development", href: "/web-development/wordpress-development" },
    ],
  },
  {
    no: "05",
    name: "AI Solutions",
    short: "AI agents & automation",
    href: "/ai-solutions",
    line: "AI agents, chatbots, content engines and automated workflows built into the way you work.",
    subs: [
      { label: "Custom AI Agents & Chatbots", href: "/ai-solutions/custom-ai-agents-chatbots" },
      { label: "AI Content & Generative Engines", href: "/ai-solutions/ai-content-generative-engines" },
      { label: "Workflow & Process Automation", href: "/ai-solutions/workflow-process-automation" },
      { label: "AI Strategy & Implementation Consulting", href: "/ai-solutions/generative-engine-optimization" },
    ],
  },
  {
    no: "06",
    name: "Marketing Automation",
    short: "CRM, email & WhatsApp",
    href: "/marketing-automation",
    line: "CRM, email and WhatsApp journeys that follow up every lead while your team sleeps.",
    subs: [
      { label: "CRM Marketing Automation", href: "/marketing-automation/crm-marketing-automation" },
      { label: "Email Marketing Automation", href: "/marketing-automation/email-marketing-automation" },
      { label: "WhatsApp Marketing Automation", href: "/marketing-automation/whatsapp-marketing-automation" },
      { label: "Lead Nurturing Automation", href: "/marketing-automation/lead-nurturing-automation" },
    ],
  },
  {
    no: "07",
    name: "BPO Services",
    short: "Call centre & back office",
    href: "/bpo-services",
    line: "Inbound and outbound calling, support, data entry and virtual assistants — staffed and AI-assisted.",
    subs: [
      { label: "AI-Powered BPO & Call Center Solutions", href: "/bpo-services/ai-powered-bpo-call-center-solutions" },
      { label: "Inbound & Outbound Call Center Services", href: "/bpo-services/inbound-outbound-call-center-services" },
      { label: "Business Process Automation Services", href: "/bpo-services/business-process-automation-services" },
      { label: "Data Entry & Back Office Outsourcing", href: "/bpo-services/data-entry-back-office-outsourcing" },
      { label: "Virtual Assistant & Startup Outsourcing", href: "/bpo-services/virtual-assistant-startup-outsourcing" },
      { label: "24/7 & E-commerce Customer Support", href: "/bpo-services/24-7-ecommerce-customer-support" },
    ],
  },
  {
    no: "08",
    name: "Business Consultancy",
    short: "Strategy & growth",
    href: "/business-consultancy",
    line: "Strategy, operations and growth advice from people who also build and run the systems.",
    subs: [
      { label: "Business Strategy Consulting", href: "/business-consultancy/business-strategy-consulting" },
      { label: "Startup & New Business Consulting", href: "/business-consultancy/startup-new-business-consulting" },
      { label: "Business Growth & Scaling Consulting", href: "/business-consultancy/business-growth-scaling-consulting" },
      { label: "Operations & Process Consulting", href: "/business-consultancy/operations-process-consulting" },
      { label: "Business Development & Marketing Consulting", href: "/business-consultancy/business-development-marketing-consulting" },
      { label: "Local & City-Based Business Advisory", href: "/business-consultancy/local-city-based-business-advisory" },
    ],
  },
];

export const SUB_SERVICE_COUNT = SERVICE_LINES.reduce((n, s) => n + s.subs.length, 0);

export const INDUSTRIES = [
  { label: "Healthcare", href: "/industries/healthcare", slug: "healthcare" },
  { label: "E-commerce", href: "/industries/ecommerce", slug: "ecommerce" },
  { label: "Real Estate", href: "/industries/real-estate", slug: "real-estate" },
  { label: "Education", href: "/industries/education", slug: "education" },
  { label: "Finance", href: "/industries/finance", slug: "finance" },
  { label: "Manufacturing", href: "/industries/manufacturing", slug: "manufacturing" },
  { label: "Construction", href: "/industries/construction", slug: "construction" },
  { label: "Restaurant", href: "/industries/restaurant", slug: "restaurant" },
  { label: "Travel", href: "/industries/travel", slug: "travel" },
  { label: "Fitness", href: "/industries/fitness", slug: "fitness" },
  { label: "Fashion & Apparel", href: "/industries/fashion-apparel", slug: "fashion-apparel" },
  { label: "Events", href: "/industries/events", slug: "events" },
  { label: "Entertainment", href: "/industries/entertainment", slug: "entertainment" },
  { label: "Gaming", href: "/industries/gaming", slug: "gaming" },
  { label: "Wearables", href: "/industries/wearables", slug: "wearables" },
];

export const COMPANY_LINKS = [
  { label: "About us", href: "/about", line: "Who we are and how we think" },
  { label: "Our team", href: "/our-team", line: "The people behind the work" },
  { label: "How we work", href: "/how-we-work", line: "Our process, step by step" },
  { label: "Careers", href: "/career", line: "Open roles in India" },
  { label: "FAQ", href: "/faq", line: "Straight answers" },
];

export const INSIGHT_LINKS = [
  { label: "Insights & blog", href: "/blog", line: "Articles from our team" },
  { label: "Guides", href: "/guides", line: "Practical, step-by-step" },
];

export const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms & conditions", href: "/terms-and-conditions" },
  { label: "Cookie policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const CONTACT = {
  email: "info@bizzbuzzcreations.com",
  phoneIndia: { display: "+91 81155 85285", href: "tel:+918115585285" },
  phoneUk: { display: "+44 7862 608652", href: "tel:+447862608652" },
  whatsapp: "https://wa.me/918115585285",
};

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bizz-buzz-creations" },
  { label: "Instagram", href: "https://www.instagram.com/bizzbuzzcreations" },
  { label: "Facebook", href: "https://www.facebook.com/bizzbuzzcreation" },
  { label: "YouTube", href: "https://www.youtube.com/@bizzbuzzcreations" },
  { label: "X", href: "https://x.com/BizzBuzzAgency" },
];

// Offices with their time zone, for the live clocks.
export const OFFICES = [
  {
    city: "Prayagraj",
    tag: "Headquarters",
    country: "India",
    tz: "Asia/Kolkata",
    zone: "IST",
    lines: ["43/33, Tej Bahadur Sapru Rd,", "Agnipath Colony, Civil Lines,", "Prayagraj, Uttar Pradesh 211001"],
    maps: "43/33, Tej Bahadur Sapru Rd, Civil Lines, Prayagraj, Uttar Pradesh 211001",
    phone: { display: "+91 81155 85285", href: "tel:+918115585285" },
  },
  {
    city: "Kanpur",
    tag: "Office",
    country: "India",
    tz: "Asia/Kolkata",
    zone: "IST",
    lines: ["Plot no. 218, Harjindar Nagar,", "Lal Bangla, J K Puri,", "Kanpur, Uttar Pradesh 208007"],
    maps: "Plot no. 218, Harjindar Nagar, Lal Bangla, J K Puri, Kanpur, Uttar Pradesh 208007",
    phone: { display: "+91 81155 85285", href: "tel:+918115585285" },
  },
  {
    city: "London",
    tag: "UK office",
    country: "United Kingdom",
    tz: "Europe/London",
    zone: "UK",
    lines: ["3 Thornham St,", "London SE10 9SA,", "United Kingdom"],
    maps: "3 Thornham St, London SE10 9SA, United Kingdom",
    phone: { display: "+44 7862 608652", href: "tel:+447862608652" },
  },
];

export const mapsUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
