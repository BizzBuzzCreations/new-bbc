import {
  Users,
  ShieldCheck,
  FileSignature,
  Layers,
  Unlock,
  LifeBuoy,
} from "lucide-react";
import PageHero from "@/components/detail/pageHero";
import CatalogGrid from "@/components/detail/catalogGrid";
import WhoItsFor from "@/components/detail/whoItsFor";
import ScenarioList from "@/components/detail/scenarioList";
import WhyTrust from "@/components/detail/whyTrust";
import FaqV2 from "@/components/home/faqV2";
import CtaV2 from "@/components/home/ctaV2";
import BeamsBlock from "@/components/home/band";
import { SERVICES } from "@/lib/industriesData";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

// Real, short descriptions already used elsewhere on the site (the
// homepage's Categories showcase) — reused here rather than invented,
// so this index and that widget never say different things about the
// same service.
const DEFAULT_SERVICE_DETAILS = {
  seo: { description: "Improve search visibility, attract qualified organic traffic, and build sustainable growth with technical SEO, content, on-page optimization, and link-building strategies.", buttonText: "Explore SEO Services" },
  smm: { description: "Build your brand presence and engage the right audience with strategic content, social media management, paid campaigns, and platform-specific marketing strategies.", buttonText: "Explore Social Media Marketing" },
  paidAds: { description: "Reach high-intent customers faster with targeted Google Ads and paid campaigns designed to increase qualified traffic, generate leads, and maximize marketing performance.", buttonText: "Explore Paid Marketing" },
  webDev: { description: "Build fast, responsive, SEO-friendly websites that strengthen your online presence, deliver better user experiences, and turn visitors into meaningful business opportunities.", buttonText: "Explore Website Development" },
  bpo: { description: "Improve operational efficiency with reliable BPO and customer support solutions covering customer queries, order support, back-office operations, and business processes.", buttonText: "Explore BPO Services" },
  ai: { description: "Use AI-powered solutions, intelligent chatbots, workflow automation, and custom systems to reduce repetitive work, improve efficiency, and support smarter business operations.", buttonText: "Explore AI Solutions" },
  automation: { description: "Streamline lead nurturing and follow-ups with CRM workflows, email automation, customer journeys, and marketing systems that keep your sales process moving consistently.", buttonText: "Explore Marketing Automation" },
  consultancy: { description: "Get practical business guidance through strategic audits, workshops, market insights, and growth roadmaps designed to help you make better decisions with confidence.", buttonText: "Explore Business Consultancy" },
};

// Services page FAQs — questions specific to choosing/working with our
// service lineup.
const SERVICES_FAQS = [
  {
    question: "What services does BizzBuzz Creations offer?",
    answer:
      "BizzBuzz Creations provides SEO, social media marketing, Google Ads and paid marketing, website development, BPO and customer support, AI solutions, marketing automation, and business consultancy.",
  },
  {
    question: "How much do digital marketing services cost?",
    answer:
      "Pricing depends on the services and scope you choose; there's no fixed package. A free consultation gets you a clear, upfront quote before any work begins.",
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "The right service depends on your goals, industry, audience, competition, budget, and current digital presence. Our team can evaluate your needs and recommend the most suitable services and priorities.",
  },
  {
    question: "How long does it take to see results from SEO or paid ads?",
    answer:
      "Paid ads typically show measurable traffic and leads within days to a few weeks. SEO is a longer-term investment; most businesses see meaningful ranking improvements in 3 to 6 months, depending on competition.",
  },
  {
    question: "Can BizzBuzz Creations handle both marketing and website development?",
    answer:
      "Yes. We provide digital marketing and website development under one team, allowing businesses to coordinate their online visibility, marketing campaigns, content, and website experience more efficiently.",
  },
  {
    question: "Do you provide services to businesses outside Prayagraj?",
    answer:
      "Yes. BizzBuzz Creations works with businesses in Prayagraj, across India, and worldwide, providing digital marketing, web development, BPO, AI, automation, and other business solutions.",
  },
];

const DEFAULT_WHY_CHOOSE_ITEMS = [
  {
    title: "Everything Under One Roof",
    description:
      "SEO, paid advertising, social media, websites, AI, automation, BPO, and consultancy without coordinating multiple agencies.",
  },
  {
    title: "Built Around Your Business",
    description:
      "We consider your industry, audience, market, and requirements instead of forcing your business into a standard package.",
  },
  {
    title: "Flexible as You Grow",
    description:
      "Start with what you need today and add services as new opportunities, challenges, and business requirements emerge.",
  },
  {
    title: "Focused on Business Outcomes",
    description:
      "Our work is designed to support meaningful outcomes such as visibility, enquiries, customers, efficiency, and stronger digital operations.",
  },
];

// Real, company-wide facts about how an engagement actually works —
// already established elsewhere on the site (industry pages, how-we-work)
// — reused here instead of a fabricated testimonial/stat block.
// Icons stay code-driven (design), matched positionally to whichever
// engagement features are saved.
const ENGAGEMENT_ICONS = [Users, Unlock, FileSignature, Layers, ShieldCheck, LifeBuoy];

const DEFAULT_ENGAGEMENT_FEATURES = [
  { title: "One Point of Contact", desc: "Keep communication simple with a dedicated team that understands your business and ongoing requirements." },
  { title: "You Own Your Accounts", desc: "Your website, advertising accounts, analytics, data, and digital assets remain under your ownership." },
  { title: "Clear Scope & Pricing", desc: "Know what's included, what's being delivered, and where your budget is going before work begins." },
  { title: "No Long-Term Lock-In", desc: "Choose the services you need without being pushed into unnecessary packages or complicated commitments." },
  { title: "Secure Information Handling", desc: "Your business information, account access, and project details are handled with appropriate confidentiality and care." },
  { title: "Support When You Need It", desc: "Get help when questions, changes, or new requirements come up instead of being left to figure them out alone." },
];

// Helps a visitor self-select a service based on their actual problem,
// rather than making them guess from a list of 8 labels. `service` keys
// stay code-driven (they drive routing/icon/label), matched positionally
// to whichever questions are saved.
const SCENARIO_SERVICE_KEYS = ["seo", "webDev", "paidAds", "smm", "ai", "bpo", "consultancy", "webDev"];

const DEFAULT_SERVICE_SCENARIOS = [
  { question: "Not Getting Enough Traffic?", detail: "Improve your online visibility and attract more qualified visitors through SEO and search-focused content." },
  { question: "Getting Traffic but Few Enquiries?", detail: "Strengthen your website experience, messaging, and conversion paths to turn more visitors into potential customers." },
  { question: "Need More Leads Quickly?", detail: "Reach customers with high purchase intent through targeted Google Ads and paid digital campaigns." },
  { question: "Struggling to Stay Consistent on Social Media?", detail: "Build a stronger presence with content planning, social media management, and audience-focused campaigns." },
  { question: "Too Many Repetitive Tasks?", detail: "Reduce manual work with AI-powered tools, automated workflows, and connected marketing systems." },
  { question: "Customer Support Taking Too Much Time?", detail: "Delegate customer queries and routine business operations to reliable BPO and support teams." },
  { question: "Not Sure What Your Business Needs Next?", detail: "Get an outside perspective on your digital presence, opportunities, and priorities before investing further." },
  { question: "Need a Better Online Foundation?", detail: "Create a fast, responsive website that gives your brand a stronger digital presence and supports customer acquisition." },
];

export async function generateMetadata() {
  return buildPageMetadata("services", {
  title: "Digital Marketing & Business Services | BizzBuzz Creations",
  description:
    "Explore SEO, social media, Google Ads, web development, BPO, AI, automation, and business consultancy services built for business growth.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/services",
  },
});
}

// Background photo for each service card, keyed by SERVICES[key].
const SERVICE_BG_IMAGES = {
  seo: "/services-bg-image/seo.webp",
  smm: "/services-bg-image/social-media-marketing.webp",
  paidAds: "/services-bg-image/google-ads-paid-marketing.webp",
  webDev: "/services-bg-image/website-development.webp",
  bpo: "/services-bg-image/bpo-customer-support.webp",
  ai: "/services-bg-image/ai-solution.webp",
  automation: "/services-bg-image/marketing-automation.webp",
  consultancy: "/services-bg-image/business-consultancy.webp",
};

export default async function ServicesIndexPage() {
  const content = await getPageContent("services");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);
  const services = Object.values(SERVICES);

  const heroHeading = content?.servicesHeroHeading || "Stop Juggling Agencies. Start Growing.";
  const heroParagraph =
    content?.servicesHeroParagraph ||
    "SEO, ads, web development and automation — one roof, one team, wherever your customers are.";
  const heroButtonText = content?.servicesHeroButtonText || "Explore Our Services";
  const heroSecondaryButtonText = content?.servicesHeroSecondaryButtonText || "Get a Free Consultation";
  const heroImage = content?.servicesHeroImage || "/services.png";

  const gridHeading = content?.servicesGridHeading || "Explore Our Digital Growth Services";
  const gridSubtext = content?.servicesGridSubtext || "Choose the services that match your goals, or combine multiple solutions to support different areas of your business.";
  const serviceDetailsList =
    content?.serviceDescriptions?.length > 0
      ? content.serviceDescriptions
      : Object.values(DEFAULT_SERVICE_DETAILS);
  const serviceDetailsByKey = {};
  Object.keys(SERVICES).forEach((key, i) => {
    serviceDetailsByKey[key] = serviceDetailsList[i] ?? DEFAULT_SERVICE_DETAILS[key];
  });

  const engagementEyebrow = content?.engagementEyebrow || "How We Work";
  const engagementHeading = content?.engagementHeading || "A Better Experience From Start to Finish";
  const engagementSubtext =
    content?.engagementSubtext || "Simple communication, clear ownership, and a straightforward experience without the usual agency complications.";
  const engagementFeaturesRaw = content?.engagementFeatures?.length > 0 ? content.engagementFeatures : DEFAULT_ENGAGEMENT_FEATURES;
  const engagementFeatures = engagementFeaturesRaw.map((f, i) => ({ ...f, icon: ENGAGEMENT_ICONS[i % ENGAGEMENT_ICONS.length] }));

  const scenariosEyebrow = content?.scenariosEyebrow || "Not Sure Where to Start?";
  const scenariosHeading = content?.scenariosHeading || "What Are You Trying to Fix?";
  const scenariosSubtext =
    content?.scenariosSubtext ||
    "Start with the challenge, not the service. We'll help you find the right digital solution.";
  const scenarioQuestionsRaw = content?.scenarioQuestions?.length > 0 ? content.scenarioQuestions : DEFAULT_SERVICE_SCENARIOS;
  const serviceScenarios = scenarioQuestionsRaw.map((s, i) => ({
    question: s.question,
    detail: s.detail,
    service: SCENARIO_SERVICE_KEYS[i % SCENARIO_SERVICE_KEYS.length],
  }));

  const whyChooseEyebrow = content?.servicesProcessEyebrow || "Why Choose Us?";
  const whyChooseHeading = content?.servicesProcessHeading || "Why Businesses Choose BizzBuzz Creations";
  const whyChooseSubtext = content?.servicesProcessSubtext || "More than individual services, you get one team that understands the bigger picture of your digital presence.";
  const whyChooseItems = content?.servicesProcessSteps?.length > 0 ? content.servicesProcessSteps : DEFAULT_WHY_CHOOSE_ITEMS;

  // The saved default is the old full-width background strip
  // (/services.png); the framed hero shows its icon-grid part instead
  // (/services-hero-mobile.png, a crop of the same artwork).
  const heroPhoto = !heroImage || heroImage === "/services.png" ? "/services-hero-mobile.png" : heroImage;
  const catalog = services.map((service) => {
    const details = serviceDetailsByKey[service.key];
    // A saved image (even "" = removed in the dashboard) wins over the built-in one.
    return { ...service, description: details?.description, buttonText: details?.buttonText, image: details?.image ?? SERVICE_BG_IMAGES[service.key] };
  });
  const showGrid = !hidden.has("servicesGrid");
  const showScenarios = !hidden.has("scenarios");
  const showWhyChoose = !hidden.has("servicesProcess");

  // Redesign, in the homepage's style: hero → the 8 services as picture
  // cards → what every engagement includes → (on the beams background) what
  // are you trying to fix + why choose us → FAQ → closing CTA. Same
  // dashboard fields and "Remove section" switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="services" />
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("servicesHero") && (
        <PageHero
          label="Services"
          title={heroHeading}
          description={heroParagraph}
          actions={[
            { text: heroSecondaryButtonText, href: "/contact", variant: "solid" },
            showGrid && { text: heroButtonText, href: "#services-grid" },
          ]}
          image={heroPhoto}
          imageAspect="aspect-[680/550]"
        />
      )}

      {showGrid && <CatalogGrid id="services-grid" eyebrow="Our services" heading={gridHeading} subtext={gridSubtext} items={catalog} />}

      {!hidden.has("engagement") && (
        <WhoItsFor eyebrow={engagementEyebrow} heading={engagementHeading} subtext={engagementSubtext} items={engagementFeatures} />
      )}

      {(showScenarios || showWhyChoose) && (
        <BeamsBlock>
          {showScenarios && (
            <ScenarioList
              eyebrow={scenariosEyebrow}
              heading={scenariosHeading}
              subtext={scenariosSubtext}
              items={serviceScenarios.map(({ question, service: key, detail }) => ({
                question,
                detail: detail || serviceDetailsByKey[key]?.description,
                service: SERVICES[key],
              }))}
            />
          )}
          {showWhyChoose && (
            <WhyTrust
              eyebrow={whyChooseEyebrow}
              heading={whyChooseHeading}
              description={whyChooseSubtext}
              items={whyChooseItems.map(({ title, description }) => ({ title, desc: description }))}
            />
          )}
        </BeamsBlock>
      )}

      {!hidden.has("servicesFaq") && (
        <FaqV2
          content={{
            faqHeading: content?.servicesFaqHeading || "Frequently Asked Questions",
            faqItems: content?.servicesFaqItems?.length > 0 ? content.servicesFaqItems : SERVICES_FAQS,
          }}
        />
      )}

      {!hidden.has("cta") && <CtaV2 content={content} />}
    </div>
  );
}
