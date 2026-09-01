import Link from "next/link";
import { Bot, Workflow, Sparkles, Radar, ArrowUpRight } from "lucide-react";

// Real categories from the /ai-solutions service page — kept consistent
// with what BizzBuzz Creations actually offers instead of inventing claims.
const FEATURES = [
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description: "Automate conversations, qualify leads, answer questions, and support customers 24/7.",
  },
  {
    icon: Workflow,
    title: "Smart Business Automation",
    description: "Reduce repetitive work with AI-powered workflows, integrations, and process automation.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Content",
    description: "Create and manage content faster with intelligent systems built around your brand and marketing needs.",
  },
  {
    icon: Radar,
    title: "AI Search Optimization",
    description: "Improve your visibility across AI-powered search and emerging discovery platforms.",
  },
];

export default function AiShowcase({ content }) {
  const heading = content?.aiHeadingMain || "Make AI Work for Your Business";
  const paragraph =
    content?.aiParagraph ||
    "From AI chatbots and intelligent agents to workflow automation, AI-powered content, and AI search optimization, we help businesses in Prayagraj, across India, and worldwide put practical AI solutions to work.";
  const posterImage = content?.aiPosterImage || "/aiservice.webp";
  const videoSrc = content?.aiVideo || "/Sequence 01 1.mp4";
  const buttonText = content?.aiButtonText || "Explore AI Solutions";

  // Icon stays fixed (structural); title + description come from the
  // saved override, matched by position.
  const features = FEATURES.map((feature, i) => {
    const override = content?.aiFeatures?.[i];
    return override ? { ...feature, ...override } : feature;
  });

  return (
    <section className="bg-black overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Video side */}
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterImage}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 55%, 8% 50%, 0 45%)",
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/40 lg:to-black/10" />
        </div>

        {/* Content side */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {heading}
          </h2>

          <p className="text-white/60 max-w-xl">{paragraph}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold mb-2 transition-colors duration-300">{title}</h3>
                <p className="text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/ai-solutions"
              className="inline-flex items-center justify-center gap-1.5 bg-white text-black hover:bg-[#0B60B0] hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-300"
            >
              {buttonText}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
