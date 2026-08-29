import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Sparkles,
  Bot,
  Clock,
  TrendingUp,
  BarChart3,
  Wand2,
} from "lucide-react";

export const metadata = {
  title: "AI Social Media Marketing Services | BizzBuzz Creations",
  description:
    "AI social media marketing in India — smarter content planning, trend prediction, and automation for faster results and lower cost per lead, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/ai-social-media-marketing",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "AI-Assisted Content Planning",
    description:
      "AI tools help identify content ideas and formats likely to perform, giving our strategists a data-backed starting point instead of guesswork.",
  },
  {
    icon: TrendingUp,
    heading: "Early Trend Prediction",
    description:
      "AI-powered trend analysis helps us spot emerging content formats and topics early, so your brand posts before a trend peaks, not after.",
  },
  {
    icon: Clock,
    heading: "Smart Posting Time Optimization",
    description:
      "We use engagement data and AI recommendations to post when your specific audience is most active, not a generic best-practice time.",
  },
  {
    icon: Wand2,
    heading: "Social Media Automation",
    description:
      "Routine scheduling and workflow tasks get automated, freeing our team's time for creative strategy and genuine engagement.",
  },
  {
    icon: BarChart3,
    heading: "AI-Powered Performance Analysis",
    description:
      "AI tools help surface patterns in what's converting across your content, sharpening the strategy faster than manual review alone.",
  },
  {
    icon: Sparkles,
    heading: "Human-Reviewed AI Output",
    description:
      "Every AI-assisted recommendation and piece of content is reviewed by our team before it goes live, keeping quality and brand voice intact.",
  },
];

const PROCESS_STEPS = [
  {
    title: "AI Audit & Data Setup",
    body: "We connect AI tools to your existing social data to establish a baseline of what's currently working across your content.",
  },
  {
    title: "AI-Backed Content Planning",
    body: "AI-assisted trend and performance analysis feeds into a content calendar, refined by our strategists before anything is scheduled.",
  },
  {
    title: "Automated Scheduling & Posting",
    body: "Approved content gets scheduled and posted at data-optimized times using automation tools, reducing delays and missed windows.",
  },
  {
    title: "AI-Assisted Optimization",
    body: "We continuously feed performance data back into our AI tools to refine future content and targeting decisions.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "AI Where It Genuinely Helps",
    description:
      "We use AI for planning, trend spotting, and analysis, while creative judgment and brand voice stay human-led.",
  },
  {
    number: "002",
    title: "Faster, Lower-Cost Results",
    description:
      "AI-assisted planning and automation speed up execution, helping bring down cost per lead over time.",
  },
  {
    number: "003",
    title: "Early Trend Advantage",
    description:
      "AI-powered trend analysis helps your brand show up on emerging formats before they become oversaturated.",
  },
  {
    number: "004",
    title: "Human-Reviewed Quality",
    description:
      "Every piece of AI-assisted content is reviewed by our team, so nothing generic or off-brand goes live.",
  },
  {
    number: "005",
    title: "Data-Driven Decisions",
    description:
      "AI-powered analysis surfaces patterns in your performance data faster than manual review, sharpening strategy sooner.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    description:
      "A social media team in Prayagraj combining AI tools with human strategy, serving brands across India.",
  },
];

const FAQS = [
  {
    question: "Does AI replace human strategists in social media marketing?",
    answer:
      "No, AI assists with planning, trend prediction, and analysis, while our human strategists make the creative and brand-voice decisions.",
  },
  {
    question: "Will AI-generated content look robotic or generic?",
    answer:
      "No, every AI-assisted output is reviewed and refined by our team before publishing, so content stays genuine and on-brand.",
  },
  {
    question: "How does AI help lower cost per lead?",
    answer:
      "AI-assisted targeting, timing, and content planning improve efficiency, meaning ad and content spend goes further toward results that convert.",
  },
  {
    question: "What tools do you use for AI social media marketing?",
    answer:
      "We use a mix of AI-powered scheduling, trend analysis, and performance tools, chosen based on what fits your platforms and goals best.",
  },
  {
    question: "Is AI social media marketing more expensive than standard management?",
    answer:
      "Not necessarily — AI-assisted efficiency often helps offset costs over time by improving targeting and reducing wasted spend.",
  },
];

export default function AiSocialMediaMarketing() {
  return (
    <>
      <BpoHero
        heading="AI Social Media Marketing Services in India"
        description="We use AI marketing tools and social media automation to plan smarter content, predict trends early, and post at the best time for engagement — faster results, lower cost per lead."
        img="/socialmedia%2002.jpg"
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
              src="/social%20media.webp"
              alt="AI social media marketing at BizzBuzz Creations"
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
              Smarter Content, Faster Results
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use AI marketing tools and social media automation to plan
              smarter content, predict trends early, and post at the best
              time for engagement — faster results, lower cost per lead,
              without losing the human touch.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a social media marketing agency based in
              Prayagraj, proudly serving businesses locally across Allahabad
              and Uttar Pradesh, as well as brands across India, pairing AI
              tools with real strategic judgment.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our AI Social Media Marketing"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our AI Social Media Marketing Process"
            description="AI tools feed data and trend signals into our planning, but every recommendation is reviewed and refined by our team before it goes live."
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
          title="AI Social Media Marketing Company"
          description="BizzBuzz Creations combines AI-powered planning and automation with human strategy to deliver faster, more efficient social media marketing for brands across India."
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
