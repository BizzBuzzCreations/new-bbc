// The four local landing pages (SEO / marketing / websites / ads for
// Prayagraj and Kanpur). Everything stated here is already true and shown
// elsewhere on the site (offices, phone, free consultation, services,
// badges) — no client names, results, prices or rankings. Rendered by
// components/sections/localLandingPage.js; each lives at /<slug>.
import {
  BarChart3, Bot, Code2, FileText, Globe, Layout, Megaphone, MapPin,
  Search, Share2, ShoppingCart, Target, TrendingUp, RefreshCw, Gauge,
} from "lucide-react";
import { buildPageMetadata } from "@/lib/pageMetadata";
import { SITE_URL } from "@/lib/pagePaths";

const CTA = "Get a Free Consultation";

export const LOCAL_PAGES = {
  "seo-company-prayagraj": {
    title: "SEO Company in Prayagraj | BizzBuzz Creations",
    description:
      "SEO company in Prayagraj for local businesses: Google Maps and local search, website SEO, content and AI-search visibility. Talk to our Civil Lines team.",
    h1: "SEO Company in Prayagraj",
    label: "SEO Company in Prayagraj",
    serviceName: "SEO services in Prayagraj",
    parentLabel: "SEO Services",
    parentHref: "/search-engine-optimization",
    heroImage: "/seo 1.png",
    placeImage: "/team-images/team-11.jpeg",
    intro:
      "BizzBuzz Creations is a digital marketing and business solutions company based in Civil Lines, Prayagraj. We help businesses get found on Google, on Google Maps and in AI search tools, and turn that visibility into enquiries.",
    whatHeading: "What we do for your business",
    what: [
      { icon: MapPin, title: "Local SEO and Google Business Profile", desc: "Setting up and improving your Google listing, your local citations and the way you collect reviews, so people nearby find you first." },
      { icon: Search, title: "Technical and on-page SEO", desc: "Fixing what slows or confuses search engines: site speed, structure, page titles, descriptions and internal links." },
      { icon: FileText, title: "Content that answers real searches", desc: "Pages and articles written around what your customers actually type into Google, in plain language." },
      { icon: Bot, title: "AI search visibility", desc: "Making your business easy for Google's AI answers and tools like ChatGPT to understand and quote." },
    ],
    stepsHeading: "How we work",
    steps: [
      { title: "Free consultation", desc: "We learn about your business, your area and your goals before recommending anything." },
      { title: "Review and plan", desc: "We review your website and Google listing, then give you a plan with priorities." },
      { title: "Monthly work", desc: "We carry out the plan month by month." },
      { title: "A report you can read", desc: "You see what changed and what comes next, in plain language." },
    ],
    placeHeading: "Based in Civil Lines, Prayagraj",
    place: [
      "Our headquarters is at 43/33, Tej Bahadur Sapru Rd, Civil Lines, Prayagraj. You are welcome to visit or call us.",
      "We work with businesses across India, and we also have offices in Kanpur and London.",
    ],
    links: [
      { href: "/search-engine-optimization", label: "Search Engine Optimization", icon: Search },
      { href: "/search-engine-optimization/high-intent-local-seo", label: "High-Intent & Local SEO", icon: MapPin },
      { href: "/search-engine-optimization/ai-search-optimization", label: "AI Search Optimization", icon: Bot },
      { href: "/search-engine-optimization/answer-engine-optimization", label: "Answer Engine Optimization", icon: Target },
    ],
    faqs: [
      { question: "How long does SEO take?", answer: "It depends on where your website starts and how competitive your market is. Most businesses need a few months before the changes show clearly in Google. Anyone who promises a fixed rank in days is not being honest." },
      { question: "Do you do Google Maps listings?", answer: "Yes. Setting up and improving your Google Business Profile is part of our local SEO work." },
      { question: "Do you work with businesses outside Prayagraj?", answer: "Yes. We work with businesses across India and with clients in the UK." },
      { question: "What do you need from me?", answer: "Access to your website and Google listing, and a short conversation about your customers and services." },
      { question: "Do you guarantee rankings?", answer: "No one honestly can, because search engines make the final decision. What we do guarantee is careful work, clear reporting and honest advice." },
    ],
    ctaHeading: "Talk to an SEO team in Prayagraj",
    ctaText: "Tell us about your business. We will review where you stand in search and tell you honestly what would help.",
  },

  "digital-marketing-agency-kanpur": {
    title: "Digital Marketing Agency in Kanpur | BizzBuzz Creations",
    description:
      "Digital marketing agency in Kanpur: SEO, Google Ads, social media and websites for local businesses, from our Lal Bangla office. Get a free consultation.",
    h1: "Digital Marketing Agency in Kanpur",
    label: "Digital Marketing Agency in Kanpur",
    serviceName: "Digital marketing services in Kanpur",
    parentLabel: "Our Services",
    parentHref: "/services",
    heroImage: "/seo 1.png",
    placeImage: "/team-images/team-6.jpeg",
    intro:
      "BizzBuzz Creations has an office in Kanpur, at Harjindar Nagar in Lal Bangla, as well as our headquarters in Prayagraj. We run SEO, Google Ads, social media and website projects for businesses in Kanpur and across India.",
    whatHeading: "What we can do for your business",
    what: [
      { icon: Search, title: "SEO", desc: "Be found on Google and Google Maps when people in Kanpur search for what you sell." },
      { icon: Megaphone, title: "Google and Meta ads", desc: "Paid campaigns aimed at enquiries and sales, with clear reporting on what you spent and what it brought." },
      { icon: Share2, title: "Social media", desc: "Content and management for your business pages, so your brand stays active and consistent." },
      { icon: Globe, title: "Websites", desc: "Fast, clean websites, from simple business sites to online shops." },
    ],
    stepsHeading: "How we work",
    steps: [
      { title: "Free consultation", desc: "We listen first, then recommend only what fits your goals and budget." },
      { title: "A clear plan", desc: "We tell you what we will do and in what order." },
      { title: "Regular work and reports", desc: "We carry out the plan and send you a report you can read." },
    ],
    placeHeading: "An office in Kanpur",
    place: [
      "Our Kanpur office is at Plot no. 218, Harjindar Nagar, Lal Bangla, J K Puri, Kanpur. Call or message us to arrange a time to meet.",
      "Our headquarters is in Civil Lines, Prayagraj, and we also have an office in London.",
    ],
    links: [
      { href: "/search-engine-optimization", label: "Search Engine Optimization", icon: Search },
      { href: "/paid-marketing", label: "Paid Marketing", icon: Megaphone },
      { href: "/social-media-marketing", label: "Social Media Marketing", icon: Share2 },
      { href: "/web-development", label: "Web Development", icon: Code2 },
    ],
    faqs: [
      { question: "Do you have an office in Kanpur?", answer: "Yes, in Lal Bangla. Our headquarters is in Civil Lines, Prayagraj." },
      { question: "Which service should I start with?", answer: "It depends on your goal. If you want customers searching nearby to find you, start with local SEO and your Google listing. If you want enquiries quickly, paid ads may suit you better. We will tell you honestly which fits." },
      { question: "Can I meet the team?", answer: "Yes. Call or message us and we will arrange a time." },
      { question: "Do you work with small businesses?", answer: "Yes. Tell us your budget on the consultation and we will say what is realistic." },
    ],
    ctaHeading: "Talk to our Kanpur team",
    ctaText: "Tell us what your business needs. We will recommend what fits, and nothing you do not need.",
  },

  "website-development-company-prayagraj": {
    title: "Website Development Company, Prayagraj | BizzBuzz Creations",
    description:
      "Website development company in Prayagraj: fast custom sites, WordPress, Shopify and web apps built to bring you enquiries. See how we work and get a quote.",
    h1: "Website Development Company in Prayagraj",
    label: "Website Development Company in Prayagraj",
    serviceName: "Website development in Prayagraj",
    parentLabel: "Website Development",
    parentHref: "/web-development",
    heroImage: "/website development 1.png",
    placeImage: "/team-images/team-1.jpeg",
    intro:
      "We design and build business websites in Prayagraj: fast, easy to use on a phone, and set up so search engines can understand them. Our team works from Civil Lines and builds for businesses across India.",
    whatHeading: "What we build",
    what: [
      { icon: Layout, title: "Custom websites", desc: "Designed around your business, not copied from a template." },
      { icon: Globe, title: "WordPress", desc: "Sites you can edit yourself, without calling a developer for every change." },
      { icon: ShoppingCart, title: "Shopify and online shops", desc: "Online stores set up to sell, with the checkout and product pages done properly." },
      { icon: Code2, title: "React and Next.js", desc: "Fast, modern sites and web apps for projects that need more than a standard website." },
      { icon: Gauge, title: "PHP web applications", desc: "Custom web applications built around how your business works." },
      { icon: RefreshCw, title: "Redesign and management", desc: "Improving a website you already have, and keeping it running well." },
    ],
    stepsHeading: "How we work",
    steps: [
      { title: "Free consultation", desc: "Your goals, your audience, and what the website must do for you." },
      { title: "Design and structure", desc: "We show you the design and page structure for your approval before building." },
      { title: "Build and test", desc: "We build it and test it on phones and computers." },
      { title: "Launch and support", desc: "We launch the site and stay available for support if you want it." },
    ],
    placeHeading: "Why speed and search-friendliness matter",
    place: [
      "A slow website loses visitors and search ranking. We build with speed, mobile use and basic SEO in mind from the start, so you do not pay to fix it later.",
      "Our team is based in Civil Lines, Prayagraj, and you are welcome to visit or call.",
    ],
    links: [
      { href: "/web-development", label: "Web Development", icon: Code2 },
      { href: "/web-development/custom-web-development", label: "Custom Web Development", icon: Layout },
      { href: "/web-development/wordpress-development", label: "WordPress Development", icon: Globe },
      { href: "/web-development/shopify-ecommerce-development", label: "Shopify & eCommerce", icon: ShoppingCart },
      { href: "/web-development/react-nextjs-development", label: "React & Next.js", icon: Code2 },
      { href: "/web-development/website-redesign-management", label: "Redesign & Management", icon: RefreshCw },
    ],
    faqs: [
      { question: "How long does a website take?", answer: "It depends on its size and how quickly we receive your content. We give you a timeline after the consultation." },
      { question: "Who owns the website?", answer: "You do." },
      { question: "Can you redesign my current website?", answer: "Yes. We redesign and improve existing websites." },
      { question: "Do you provide hosting and maintenance?", answer: "Ask us on the consultation. We can advise on the options and on keeping the site running." },
      { question: "How much does a website cost?", answer: "It depends on the pages and features you need. We give a clear quote once we understand what you want." },
    ],
    ctaHeading: "Talk to a website team in Prayagraj",
    ctaText: "Tell us what your website needs to do. We will explain the options and give you a clear quote.",
  },

  "google-ads-agency-prayagraj": {
    title: "Google Ads Agency in Prayagraj | BizzBuzz Creations",
    description:
      "Google Ads agency in Prayagraj: search and Meta ads managed for leads and sales, with clear monthly reports. Get a free ads consultation.",
    h1: "Google Ads Agency in Prayagraj",
    label: "Google Ads Agency in Prayagraj",
    serviceName: "Google Ads management in Prayagraj",
    parentLabel: "Paid Marketing",
    parentHref: "/paid-marketing",
    heroImage: "/google ads and paid marketing 2 1.png",
    placeImage: "/team-images/team-12.jpeg",
    intro:
      "We manage Google Ads and Meta (Facebook and Instagram) ads for businesses in Prayagraj and across India. Our team includes people certified by Google Ads, and we focus on real enquiries and sales, not just clicks.",
    whatHeading: "What we manage",
    what: [
      { icon: Search, title: "Google Search Ads", desc: "Show up when people search for what you sell." },
      { icon: Share2, title: "Meta and social ads", desc: "Ads on Facebook and Instagram, aimed at the people you want to reach." },
      { icon: Target, title: "Lead generation campaigns", desc: "Campaigns built to bring you enquiries, not only visits." },
      { icon: MapPin, title: "Local, city-based campaigns", desc: "Ads aimed at your city or area, so your budget goes to people who can actually buy from you." },
      { icon: TrendingUp, title: "Performance marketing", desc: "Campaigns managed against the results that matter to your business." },
      { icon: BarChart3, title: "Ecommerce and retargeting", desc: "Bringing back people who visited your website but did not buy." },
    ],
    stepsHeading: "How we work",
    steps: [
      { title: "Free consultation", desc: "Your goal, your budget and your customers." },
      { title: "Tracking first", desc: "We set up tracking before launch, so every enquiry is counted." },
      { title: "Launch and improve", desc: "We launch, watch the results and keep improving the campaigns." },
      { title: "A clear report", desc: "You see what you spent and what it brought." },
    ],
    placeHeading: "Your ad budget and our fee",
    place: [
      "Your ad budget is what you pay Google or Meta to show your ads. Our fee is for managing the campaigns. We explain both on the consultation, so nothing is a surprise.",
      "Our team is based in Civil Lines, Prayagraj, and you are welcome to visit or call.",
    ],
    links: [
      { href: "/paid-marketing", label: "Paid Marketing", icon: Megaphone },
      { href: "/paid-marketing/google-search-ads-management", label: "Google Search Ads", icon: Search },
      { href: "/paid-marketing/meta-social-ads-management", label: "Meta & Social Ads", icon: Share2 },
      { href: "/paid-marketing/lead-generation-campaigns", label: "Lead Generation Campaigns", icon: Target },
      { href: "/paid-marketing/local-city-based-ad-campaigns", label: "Local City-Based Campaigns", icon: MapPin },
    ],
    faqs: [
      { question: "What budget do I need?", answer: "It depends on your market and your goal. After the consultation we recommend a realistic starting amount." },
      { question: "How long until I get enquiries?", answer: "Ads can bring visitors within days, but results usually improve over the first weeks as we learn what works." },
      { question: "Who owns the ad account?", answer: "You should. We set it up so that you keep access." },
      { question: "Do you guarantee results?", answer: "No one honestly can. We guarantee careful management and clear reporting." },
    ],
    ctaHeading: "Talk to a Google Ads team in Prayagraj",
    ctaText: "Tell us your goal and budget. We will say what is realistic, before you spend anything.",
  },
};

export const LOCAL_PAGE_SLUGS = Object.keys(LOCAL_PAGES);
export const LOCAL_CTA_TEXT = CTA;

export function localPageMetadata(slug) {
  const p = LOCAL_PAGES[slug];
  return buildPageMetadata(`local-${slug}`, {
    title: p.title,
    description: p.description,
    alternates: { canonical: `${SITE_URL}/${slug}` },
  });
}
