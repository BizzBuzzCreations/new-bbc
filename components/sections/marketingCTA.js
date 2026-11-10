import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// Icons and hrefs stay code-driven (design/routing), matched positionally
// to whichever cards are saved.
const STAGE_LAYOUT = [
  { href: "/search-engine-optimization" },
  { href: "/services" },
  { href: "/social-media-marketing" },
  { href: "/web-development" },
  { href: "/business-consultancy" },
  { href: "/industries" },
];

const DEFAULT_TRUST_LINES = [
  {
    text: "Trusted by growing businesses across Prayagraj, India, and the UK — no long-term lock-in, just a team focused on measurable results.",
  },
  {
    text: "Every engagement starts with a free consultation — no fixed package, just what your business actually needs.",
  },
  {
    text: "Transparent reporting and clear communication, so you always know exactly what's happening and why.",
  },
];

const DEFAULT_STAGES = [
  {
    title: "Get Found on Google",
    description:
      "Boost visibility and attract the right audience with smarter SEO.",
    ctaText: "Explore SEO Services",
  },
  {
    title: "Own Your Digital Space",
    description:
      "Build a stronger online presence with strategies made for growth.",
    ctaText: "Explore Digital Marketing Services",
  },
  {
    title: "Make Social Work Harder",
    description:
      "Turn attention and engagement into meaningful business growth.",
    ctaText: "Explore Social Media Marketing",
  },
  {
    title: "Build a Website That Sells",
    description:
      "Create a website that engages visitors and drives conversions.",
    ctaText: "Explore Web Development Services",
  },
  {
    title: "Make Your Brand Stand Out",
    description:
      "Build a memorable identity that makes your business impossible to ignore.",
    ctaText: "Explore Branding Services",
  },
  {
    title: "See Growth in Action",
    description:
      "Explore our work, strategies, and results for growing businesses.",
    ctaText: "View Our Industries",
  },
];

export default function MarketingCTA({ content }) {
  const eyebrow = content?.marketingCtaEyebrow || "BizzBuzz Creations";
  const heading =
    content?.marketingCtaHeading || "Let’s Put Your Brand on the Map";
  const paragraph =
    content?.marketingCtaParagraph ||
    "Whether you're launching, scaling, or ready for a fresh marketing direction, tell us what you're working on. We'll show you the smartest way forward.";
  const buttonText =
    content?.marketingCtaButtonText || "Get a Free Consultation";
  const trustLinesRaw =
    content?.marketingCtaTrustLines?.length > 0
      ? content.marketingCtaTrustLines
      : DEFAULT_TRUST_LINES;
  const trustLines = trustLinesRaw.map((t) => t.text);
  // "/building.jpg" was the old default — a dashboard save stores every
  // field, defaults included, so a saved copy of it is treated as "never
  // customised" and gets the new default photo instead.
  const savedBackground = content?.marketingCtaBackgroundImage;
  const backgroundImage =
    !savedBackground || savedBackground === "/building.jpg"
      ? "/building.webp"
      : savedBackground;
  const stagesEyebrow =
    content?.stagesEyebrow || "Wherever You Are, We Have a Path";
  const stagesRaw =
    content?.stages?.length > 0 ? content.stages : DEFAULT_STAGES;
  const STAGES = stagesRaw.map((s, i) => ({
    ...s,
    ...STAGE_LAYOUT[i % STAGE_LAYOUT.length],
  }));

  // Redesign: on the left the heading, text, the button back up to the form,
  // the photo in a rounded frame and the trust lines; on the right the six
  // paths as a linked thin-line list (icon, title, line, link text). Phones:
  // one column.
  return (
    <section className="on-ink">
      <div className="wrap grid gap-16 py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Kicker>{eyebrow}</Kicker>
          <h2 className="font-display mt-8 text-balance text-[clamp(2.4rem,5vw,5rem)] leading-[0.96] tracking-[-0.05em]">
            <AccentText text={heading} />
          </h2>
          <RichText
            as="p"
            text={paragraph}
            className="mt-6 max-w-xl text-lg leading-relaxed text-(--mut)"
          />
          <div className="mt-8">
            <Button href="#contact-form" variant="buzz">
              {buttonText}
            </Button>
          </div>
          <div className="group relative mt-12 hidden aspect-[16/9] overflow-hidden bg-ink-2 sm:block">
            <Image
              src={backgroundImage}
              alt="The BizzBuzz Creations office"
              fill
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, 100vw"
              className="object-cover "
            />
          </div>
          <ul className="mt-10 border-t border-(--line)">
            {trustLines.map((line, i) => (
              <li
                key={i}
                className="grid grid-cols-[2rem_1fr] gap-2 border-b border-(--line) py-4"
              >
                <span className="kicker pt-0.5 text-(--mut)">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <RichText
                  as="p"
                  text={line}
                  className="text-[0.9375rem] leading-relaxed text-(--mut)"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="kicker text-(--mut)">{stagesEyebrow}</p>
          <ul className="mt-6 border-t border-(--fg)">
            {STAGES.map(({ title, description, ctaText, href }, i) => (
              <li key={title} className="border-b border-(--line)">
                <Link
                  href={href}
                  className="group grid grid-cols-[2.5rem_1fr] gap-2 py-6"
                >
                  <span className="kicker pt-1.5 text-(--mut)">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight tracking-[-0.035em] group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[6px]">
                      {title}
                    </h3>
                    <RichText
                      as="p"
                      text={description}
                      noLink
                      className="mt-2 text-[0.9375rem] leading-relaxed text-(--mut)"
                    />
                    <span className="kicker mt-3 inline-flex items-center gap-1.5">
                      {ctaText}
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
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
