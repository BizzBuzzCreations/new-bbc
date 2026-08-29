import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  MapPin,
  Building2,
  Users,
  Handshake,
  BarChart3,
  ClipboardCheck,
} from "lucide-react";

export const metadata = {
  title: "Local & City-Based Business Advisory | BizzBuzz Creations",
  description:
    "Local and city-based business advisory in India — hands-on guidance grounded in the Prayagraj and Allahabad market landscape, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/local-city-based-business-advisory",
  },
};

const SERVICE_ITEMS = [
  {
    icon: MapPin,
    heading: "Local Market Understanding",
    description:
      "We bring genuine, hands-on knowledge of the local market landscape, not generalized national assumptions applied blindly.",
  },
  {
    icon: Building2,
    heading: "In-Person Advisory Availability",
    description:
      "We offer in-person meetings when needed, for businesses that value face-to-face conversation over purely remote consulting.",
  },
  {
    icon: Users,
    heading: "Local Customer Behavior Insight",
    description:
      "We understand how local customers actually behave and buy, helping shape strategy that fits the real market, not assumptions.",
  },
  {
    icon: Handshake,
    heading: "Local Network & Connections",
    description:
      "Where relevant, we can connect you with local resources, partners, or contacts genuinely useful to your business.",
  },
  {
    icon: BarChart3,
    heading: "City-Specific Growth Planning",
    description:
      "Growth plans account for the specific dynamics of your city or region, not a one-size-fits-all national playbook.",
  },
  {
    icon: ClipboardCheck,
    heading: "Ongoing Local Advisory",
    description:
      "We stay available for ongoing questions and guidance as local conditions and your business evolve.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Local Business Discovery",
    body: "We start with a clear-eyed look at your business and the local market it operates in, before recommending anything.",
  },
  {
    title: "Grounded Strategy Development",
    body: "Strategy gets built around your specific city and customer base, not generic advice pulled from a national template.",
  },
  {
    title: "Hands-On, In-Person Support",
    body: "We stay involved through execution, with in-person availability where it genuinely helps, not just remote check-ins.",
  },
  {
    title: "Ongoing Review & Course Correction",
    body: "We're direct about what's working and honest about what isn't, adjusting the plan as real local results come in.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Grounded in the Local Landscape",
    description:
      "As a trusted business consultant in Prayagraj and Allahabad, we offer hands-on advisory grounded in the local market, not generic assumptions.",
  },
  {
    number: "002",
    title: "In-Person When It Helps",
    description:
      "We offer in-person meetings when needed, for businesses that value that over purely remote consulting.",
  },
  {
    number: "003",
    title: "No Generic Playbooks",
    description:
      "Every recommendation is built around your specific city, customers, and real numbers, not a template pulled off a shelf.",
  },
  {
    number: "004",
    title: "We Stay Involved",
    description:
      "From the first conversation to ongoing questions, we stay by your side long after the first meeting.",
  },
  {
    number: "005",
    title: "A Team, Not Outside Consultants",
    description:
      "Think of us less like outside consultants and more like a hired team genuinely invested in your local success.",
  },
  {
    number: "006",
    title: "Born and Based in Prayagraj",
    description:
      "We're not a national firm dabbling locally — we're rooted here, and we understand what it takes to build a business in this market.",
  },
];

const FAQS = [
  {
    question: "Can I find a business consultant in Prayagraj or Allahabad?",
    answer:
      "Yes, BizzBuzz Creations is a local business consulting firm that understands the market well and can work with you in person when needed.",
  },
  {
    question: "Is local advisory different from general business consulting?",
    answer:
      "Yes, local advisory is grounded in genuine knowledge of the specific city or region's market dynamics and customer behavior, not generalized national advice.",
  },
  {
    question: "Do you only work with businesses in Prayagraj?",
    answer:
      "No, while we're rooted in Prayagraj with strong local market knowledge, we also work with growing companies across India.",
  },
  {
    question: "Can we meet in person for consulting sessions?",
    answer:
      "Yes, we offer in-person meetings when needed for businesses that value face-to-face conversation over purely remote consulting.",
  },
  {
    question: "How much does local business advisory cost?",
    answer:
      "It depends on what you need — some businesses need a one-time strategy session, while others need ongoing support with flexible pricing.",
  },
];

export default function LocalCityBasedBusinessAdvisory() {
  return (
    <>
      <BpoHero
        heading="Local & City-Based Business Advisory in Prayagraj"
        description="Looking for guidance that understands your local market? As a trusted business consultant in Prayagraj and Allahabad, we offer hands-on advisory grounded in the local landscape."
        img="/businesscons.webp"
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
              src="/teamPic.webp"
              alt="Local and city-based business advisory at BizzBuzz Creations"
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
              Guidance That Actually Understands Your Local Market
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Looking for guidance that understands your local market? As a
              trusted business consultant in Prayagraj and Allahabad, we
              offer hands-on advisory grounded in the local landscape, not
              generic national assumptions.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a business consulting firm born and based in
              Prayagraj, serving businesses locally across Allahabad and
              Uttar Pradesh, with in-person availability when it genuinely
              helps.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Local Business Advisory"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Local Advisory Process"
            description="Anyone can give generic advice. Not everyone actually understands your local market. Our four-step process stays grounded in the realities of your city."
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
          title="Local & City-Based Business Advisory Firm"
          description="BizzBuzz Creations is a business consulting firm born and based in Prayagraj, offering hands-on advisory grounded in the local market landscape."
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
