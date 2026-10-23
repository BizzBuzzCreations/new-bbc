import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Globe,
  Share2,
  MonitorSmartphone,
  Sparkles,
  BarChart3,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";

// Icons and hrefs stay code-driven (design/routing), matched positionally
// to whichever cards are saved.
const STAGE_LAYOUT = [
  { icon: Search, href: "/search-engine-optimization" },
  { icon: Globe, href: "/services" },
  { icon: Share2, href: "/social-media-marketing" },
  { icon: MonitorSmartphone, href: "/web-development" },
  { icon: Sparkles, href: "/business-consultancy" },
  { icon: BarChart3, href: "/industries" },
];

const DEFAULT_TRUST_LINES = [
  { text: "Trusted by growing businesses across Prayagraj, India, and the UK — no long-term lock-in, just a team focused on measurable results." },
  { text: "Every engagement starts with a free consultation — no fixed package, just what your business actually needs." },
  { text: "Transparent reporting and clear communication, so you always know exactly what's happening and why." },
];

const DEFAULT_STAGES = [
  { title: "Get Found on Google", description: "Boost visibility and attract the right audience with smarter SEO.", ctaText: "Explore SEO Services" },
  { title: "Own Your Digital Space", description: "Build a stronger online presence with strategies made for growth.", ctaText: "Explore Digital Marketing Services" },
  { title: "Make Social Work Harder", description: "Turn attention and engagement into meaningful business growth.", ctaText: "Explore Social Media Marketing" },
  { title: "Build a Website That Sells", description: "Create a website that engages visitors and drives conversions.", ctaText: "Explore Web Development Services" },
  { title: "Make Your Brand Stand Out", description: "Build a memorable identity that makes your business impossible to ignore.", ctaText: "Explore Branding Services" },
  { title: "See Growth in Action", description: "Explore our work, strategies, and results for growing businesses.", ctaText: "View Our Industries" },
];

export default function MarketingCTA({ content }) {
  const eyebrow = content?.marketingCtaEyebrow || "BizzBuzz Creations";
  const heading = content?.marketingCtaHeading || "Let’s Put Your Brand on the Map";
  const paragraph =
    content?.marketingCtaParagraph ||
    "Whether you're launching, scaling, or ready for a fresh marketing direction, tell us what you're working on. We'll show you the smartest way forward.";
  const buttonText = content?.marketingCtaButtonText || "Get a Free Consultation";
  const trustLinesRaw = content?.marketingCtaTrustLines?.length > 0 ? content.marketingCtaTrustLines : DEFAULT_TRUST_LINES;
  const trustLines = trustLinesRaw.map((t) => t.text);
  // "/building.jpg" was the old default — a dashboard save stores every
  // field, defaults included, so a saved copy of it is treated as "never
  // customised" and gets the new default photo instead.
  const savedBackground = content?.marketingCtaBackgroundImage;
  const backgroundImage =
    !savedBackground || savedBackground === "/building.jpg" ? "/building.webp" : savedBackground;
  const stagesEyebrow = content?.stagesEyebrow || "Wherever You Are, We Have a Path";
  const stagesRaw = content?.stages?.length > 0 ? content.stages : DEFAULT_STAGES;
  const STAGES = stagesRaw.map((s, i) => ({ ...s, ...STAGE_LAYOUT[i % STAGE_LAYOUT.length] }));

  // Redesign: on the left the heading, text, the button back up to the form,
  // the photo in a rounded frame and the trust lines; on the right the six
  // paths as a linked thin-line list (icon, title, line, link text). Phones:
  // one column.
  return (
    <section className="overflow-x-clip bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          <RichText as="p" text={paragraph} className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg" />
          <div className="mt-8">
            <Pill href="#contact-form" variant="solid" className="px-6 py-3 text-base">{buttonText}</Pill>
          </div>
          <div className="relative mt-10 hidden aspect-[16/9] overflow-hidden rounded-3xl bg-[#0a0a0a] sm:block">
            <Image src={backgroundImage} alt="" fill sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
          <ul className="mt-8 space-y-4">
            {trustLines.map((line, i) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheck size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#40A2D8]" />
                <RichText as="p" text={line} className="text-sm leading-relaxed text-white/80" />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-white/60">{stagesEyebrow}</p>
          <ul className="mt-6 border-t border-white/10">
            {STAGES.map(({ icon: Icon, title, description, ctaText, href }) => (
              <li key={title} className="border-b border-white/10">
                <Link href={href} className="group flex gap-5 py-6 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]">
                  <span aria-hidden="true" className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B60B0]/15 text-[#40A2D8]">
                    <Icon size={18} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl leading-snug text-white transition-colors group-hover:text-[#40A2D8]">{title}</h3>
                    <RichText as="p" text={description} noLink className="mt-2 text-sm leading-relaxed text-white/65" />
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#40A2D8]">
                      {ctaText}
                      <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
