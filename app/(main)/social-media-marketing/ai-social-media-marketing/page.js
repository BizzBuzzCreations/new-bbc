import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Sparkles,
  Zap,
  BarChart3,
  Clock,
  ShoppingCart,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "AI Social Media Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an AI social media marketing agency combining automation and strategy for brands across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/ai-social-media-marketing",
  },
};

const CAPABILITIES = [
  {
    icon: Zap,
    title: "Brands Needing Faster Content Production",
    desc: "Manual content creation often can't keep pace with how much brands need to post to stay visible. We provide ai content creation for social media that speeds up production without turning your brand voice generic.",
  },
  {
    icon: BarChart3,
    title: "Businesses Wanting Data-Driven Social Strategy",
    desc: "Many social strategies are based on guesswork rather than actual audience data and trend patterns. We use ai social media management tools to base strategy on real insight, not intuition alone.",
  },
  {
    icon: Clock,
    title: "Teams Overwhelmed by Manual Posting & Reporting",
    desc: "Internal teams often spend more time on repetitive scheduling and reporting tasks than actual strategy. We provide automated social media posting service support that frees up time for the strategic work that actually needs a human.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing AI-Personalized Content",
    desc: "Ecommerce brands benefit from content and targeting personalized to different audience segments at a scale manual work can't match. We use AI-assisted personalization to tailor content and targeting without losing brand consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Businesses Curious About AI But Wary of Losing Brand Voice",
    desc: "Many brands want AI's speed but worry about content sounding generic or off-brand. We combine ai powered social media management with human review on every piece, keeping your specific voice intact.",
  },
  {
    icon: Handshake,
    title: "Agencies & Marketing Teams Needing AI-Assisted Workflows",
    desc: "Agencies and internal marketing teams increasingly need AI-assisted workflows to handle growing content demands efficiently. We work as an ai social media strategy agency partner, integrating AI tools into existing team workflows without replacing strategic judgment.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AI-Assisted Content Strategy",
    desc: "Strategy informed by real data and trend analysis, not just automated guesswork applied to every brand equally.",
    ctaText: "Know Our Services",
    services: [
      "AI-Driven Content Strategy",
      "Trend Prediction & Analysis",
      "Audience Insight Generation",
      "Content Gap Analysis",
      "AI-Assisted Competitor Research",
      "Data-Backed Content Planning",
      "Platform Performance Prediction",
      "Strategy Refinement Using AI Insights",
    ],
  },
  {
    number: "02",
    title: "AI Content Creation & Copywriting",
    desc: "Faster content production using AI trained on your specific brand voice, reviewed before anything gets published.",
    ctaText: "Know Our Services",
    services: [
      "AI-Generated Content Drafts",
      "AI-Assisted Caption Writing",
      "AI Image & Design Support",
      "AI Video Script Generation",
      "Brand-Voice-Trained AI Content",
      "Multi-Format Content Generation",
      "Rapid Content Iteration",
      "AI Content Editing & Refinement",
    ],
  },
  {
    number: "03",
    title: "AI-Powered Analytics & Insights",
    desc: "Predictive insight into what's likely to perform, based on real data rather than assumption alone.",
    ctaText: "Know Our Services",
    services: [
      "AI Social Media Management Tools",
      "Predictive Performance Analytics",
      "Sentiment Analysis",
      "Automated Reporting",
      "Real-Time Trend Alerts",
      "Audience Behavior Insights",
      "Content Performance Prediction",
      "Competitive Intelligence Tracking",
    ],
  },
  {
    number: "04",
    title: "Automated Scheduling & Posting",
    desc: "An automated social media posting service that keeps content live consistently without manual scheduling effort.",
    ctaText: "Know Our Services",
    services: [
      "Automated Social Media Posting",
      "AI-Optimized Posting Times",
      "Multi-Platform Auto-Scheduling",
      "Content Queue Management",
      "Automated A/B Testing",
      "Smart Content Recycling",
      "Automated Approval Workflows",
      "Cross-Platform Publishing Automation",
    ],
  },
  {
    number: "05",
    title: "AI Chatbots & Engagement Automation",
    desc: "Automated responses that handle common questions instantly, while genuine conversations still reach a real person.",
    ctaText: "Know Our Services",
    services: [
      "AI Chatbot Setup for Social Media",
      "Automated DM & Comment Responses",
      "Lead Qualification Chatbots",
      "FAQ Automation",
      "Automated Engagement Triggers",
      "AI-Assisted Community Management",
      "Response Time Optimization",
      "Chatbot Performance Monitoring",
    ],
  },
  {
    number: "06",
    title: "Human Oversight, Editing & Brand Control",
    desc: "Every piece of AI-assisted content reviewed by a real person before it represents your brand publicly.",
    ctaText: "Know Our Services",
    services: [
      "Human Review of AI Content",
      "Brand Voice Consistency Checks",
      "Quality Control Workflows",
      "Strategic Human Oversight",
      "AI Output Editing",
      "Brand Safety Monitoring",
      "Escalation Handling",
      "Ongoing AI Tool Training",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Brand & Workflow Discovery",
    desc: "We start by understanding your brand voice, current workflow, and where AI could genuinely help, rather than assuming automation fits every part of your process equally.",
  },
  {
    number: "02",
    title: "AI Tool & Strategy Selection",
    desc: "We select AI tools suited to your specific needs, training them on your brand voice and existing content where relevant.",
  },
  {
    number: "03",
    title: "Content Generation & Human Review",
    desc: "AI assists with drafting and ideation, with every piece reviewed and refined by a real person before anything gets published.",
  },
  {
    number: "04",
    title: "Automated Scheduling & Engagement",
    desc: "We set up automated posting and engagement workflows where appropriate, keeping human oversight on anything requiring genuine judgment.",
  },
  {
    number: "05",
    title: "Performance Tracking & Insights",
    desc: "We track performance using AI-powered analytics, identifying patterns and opportunities that inform ongoing strategy adjustments.",
  },
  {
    number: "06",
    title: "Ongoing Refinement & Optimization",
    desc: "We continuously refine which AI applications are genuinely adding value, adjusting the balance of automation and human input as needed.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AI Speed Without Losing Your Brand Voice",
    desc: "We train AI tools specifically on your brand's tone and style, and review output before publishing, so speed doesn't come at the cost of your content sounding generic or off-brand.",
  },
  {
    number: "02",
    title: "Strategy Backed by Data, Not Just Automated Guesswork",
    desc: "Our use of ai social media management tools focuses on genuine insight, trend prediction, audience behavior, performance patterns, rather than applying the same automated template to every brand regardless of context.",
  },
  {
    number: "03",
    title: "Human Oversight on Every Piece of AI-Assisted Content",
    desc: "No AI-generated content goes live without human review, protecting your brand from the generic or occasionally inaccurate output AI tools can produce when left completely unsupervised.",
  },
  {
    number: "04",
    title: "Faster Content Production Without Sacrificing Quality",
    desc: "AI accelerates drafting and ideation, but final quality control remains human, giving you the speed benefit of automation without the quality risk of removing people from the process entirely.",
  },
  {
    number: "05",
    title: "AI Tools Selected for Your Brand, Not a One-Size-Fits-All Stack",
    desc: "We choose which AI tools genuinely fit your specific needs and industry, rather than applying the same automated stack to every client regardless of what actually helps their particular situation.",
  },
  {
    number: "06",
    title: "Transparent Reporting on What AI Is Actually Improving",
    desc: "We report clearly on where AI is genuinely saving time or improving performance, rather than presenting automation as inherently valuable without evidence that it's delivering real results for your account.",
  },
];

const FAQS = [
  {
    question: "Will AI-generated content sound like our brand, or generic?",
    answer:
      "It depends heavily on execution, unsupervised AI content often does sound generic. We train tools on your specific brand voice and review every piece before publishing, which is why human oversight remains a core part of how we use AI rather than an afterthought.",
  },
  {
    question: "How much does AI social media marketing cost in India?",
    answer:
      "Cost depends on scope, how much of your workflow involves AI-assisted content, automation, and analytics versus traditional management. We scope pricing after understanding your specific needs, rather than offering a flat rate that assumes every brand wants the same level of automation.",
  },
  {
    question: "Do you use AI tools, or is a human still involved?",
    answer:
      "Both, we use AI to speed up drafting, scheduling, and analysis, but every piece of content is reviewed by a real person before publishing. AI supports the process; it doesn't replace the strategic judgment a human brings to brand decisions.",
  },
  {
    question: "Can AI really improve our social media strategy, not just speed?",
    answer:
      "Yes, when used well, AI can surface patterns in audience behavior and content performance that would take much longer to identify manually, informing genuinely better strategic decisions rather than just producing content faster.",
  },
  {
    question: "Is AI content creation safe for a brand's reputation?",
    answer:
      "It can be, provided there's human review before anything publishes. Unsupervised AI content carries real risk of inaccuracy or off-brand tone, which is exactly why we build human oversight into every step of our AI-assisted workflow.",
  },
  {
    question: "What social media management tools do you use AI for?",
    answer:
      "We use AI across content drafting, scheduling optimization, performance analytics, and chatbot-assisted engagement, selecting specific tools based on what genuinely fits your brand's needs rather than applying the same fixed stack to every client.",
  },
];

export default function AiSocialMediaMarketing() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="AI Social Media Marketing"
      icon={Sparkles}
      description="AI-powered social media marketing built for speed and smarter strategy, not just automation for its own sake, backed by real oversight."
      heroTitle="Get Smarter Social Media Marketing, Powered by AI"
      heroDescription="AI-powered social media marketing built for speed and smarter strategy, not just automation for its own sake, backed by real oversight."
      heroCtaText="Get a Free AI Social Media Audit"
      capabilitiesHeading="Built for Brands Ready to Move Faster Than Manual Posting Allows"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between AI Automation and a Real Strategy"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Brands Trust Us With AI-Powered Social Media"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Combine AI Speed With Human Strategy"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running AI-Powered Campaigns Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every AI-assisted social media account, with the same human oversight whether a client is nearby or across the world. We work as an ai social media marketing agency for brands across India, providing ai powered social media management support built around each brand's specific voice and goals. For businesses looking for an ai social media strategy agency beyond India, we support clients worldwide remotely, delivering the same standard of human-reviewed, AI-assisted work regardless of time zone. Whether you're a brand in Prayagraj exploring AI for the first time or a team anywhere else scaling content production, our approach starts with the same question: where can AI genuinely help without costing you your brand voice."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Social Media That Moves as Fast as AI Allows?"
      ctaText="Whether you're overwhelmed by manual posting, curious about AI but worried about losing your brand voice, or ready to scale content production properly, automation alone was never going to replace real strategy. Let's talk through your workflow and scope where AI could actually help."
      ctaPrimaryText="Talk to an AI Social Media Specialist"
      ctaSecondaryText="Get Your Free AI Social Media Audit"
    />
  );
}
