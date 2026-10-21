import React from "react";
import Link from "next/link";
import Image from "next/image";
import RichText from "@/components/ui/richText";
import { resolveIcon } from "@/lib/iconOptions";
import {
  MoveRight,
  Rocket,
  ChartLine,
  Code,
  Video,
  Target,
  Headset,
  Bot,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Headset,
    heading: "BPO Service",
    subheading: "Reliable Support Teams Without the Overhead",
    description:
      "Skip the cost and hassle of hiring in-house. Our trained BPO teams handle customer support, back-office operations, and order processing around the clock, so you get dependable service without the overhead of building a full internal team.",
    href: "/bpo-services",
    buttonText: "Explore BPO Services",
  },
  {
    icon: Code,
    heading: "Website Design & Development",
    subheading: "Build a Website That Converts Visitors Into Customers",
    description:
      "A slow website kills conversions. We build fast, responsive, and clean websites—from local business pages to custom platforms—designed to deliver a smooth user experience that turns visitors into buyers.",
    href: "/web-development",
    buttonText: "Build Your Website",
  },
  {
    icon: ChartLine,
    heading: "Search Engine Optimization (SEO)",
    subheading: "Increase Your Google Rankings & Drive Organic Traffic",
    description:
      "Rank higher on Google and AI-driven search engines. We combine technical SEO, local relevance, and quality content to ensure your business in Allahabad, and across India gets found however customers search.",
    href: "/search-engine-optimization",
    buttonText: "Explore SEO Services",
  },
  {
    icon: Video,
    heading: "Social Media Marketing",
    subheading: "Build a Strong Brand That People Trust",
    description:
      "Stop the scroll and build a brand that sells. We create high-impact Instagram, Facebook, and YouTube Shorts campaigns, leveraging short-form video and social commerce to drive real customer engagement.",
    href: "/social-media-marketing",
    buttonText: "Grow Your Social Presence",
  },
  {
    icon: Target,
    heading: "Google Ads & Paid Marketing",
    subheading: "Reach Customers Ready to Buy",
    description:
      "Stop wasting ad spend. We launch targeted, AI-optimized campaigns with smart audience segmentation and high-converting landing pages designed to turn clicks into genuine, scalable leads.",
    href: "/paid-marketing",
    buttonText: "Start Google Ads",
  },
  {
    icon: Bot,
    heading: "AI Automation",
    subheading: "Automate the Busywork, Scale Without Hiring",
    description:
      "Free your team from repetitive tasks. We build AI chatbots, lead qualification flows, and workflow automations that respond to customers instantly and route the right leads to your team, 24/7.",
    href: "/ai-solutions",
    buttonText: "Automate With AI",
  },
  {
    icon: Workflow,
    heading: "Marketing Automation",
    subheading: "Nurture Leads Automatically, Convert While You Sleep",
    description:
      "Stop letting leads go cold. We set up automated email and follow-up sequences that nurture prospects, qualify interest, and guide them through the buyer's journey without manual chasing.",
    href: "/marketing-automation",
    buttonText: "Automate Your Marketing",
  },
  {
    icon: Rocket,
    heading: "Business Consulting",
    subheading: "Strategic Guidance for Sustainable Growth",
    description:
      "Streamline operations and plan for sustainable growth. We bridge the gap between business fundamentals and digital strategy, giving Prayagraj businesses and scaling Indian brands a clear roadmap to success.",
    href: "/business-consultancy",
    buttonText: "Speak With a Consultant",
  },
];

// Built-in background picture for each card, in the same order as `services`.
const SERVICE_BG_IMAGES = [
  "/home-service-bg/01-bpo-service.webp",
  "/home-service-bg/02-website-design.webp",
  "/home-service-bg/03-seo.webp",
  "/home-service-bg/04-social-media.webp",
  "/home-service-bg/05-google-ads.webp",
  "/home-service-bg/06-ai-automation.webp",
  "/home-service-bg/07-marketing-automation.webp",
  "/home-service-bg/08-business-consulting.webp",
];

// The 8 services with any dashboard edits applied (shared with the
// redesigned homepage list, components/home/servicesV2.js).
export function resolveServices(content) {
  // Icon + href stay fixed (structural); only the copy comes from the
  // saved override, matched by position to the real service list.
  // `icon` / `buttonLink` are only editable on the Outside Location page
  // (its registry adds those two fields); everywhere else they're never
  // saved, so the built-in icon and link always win.
  return services.map((service, i) => {
    // A saved `image` (even "" = removed in the dashboard) wins over the built-in one.
    const base = { ...service, image: SERVICE_BG_IMAGES[i] };
    const override = content?.serviceCards?.[i];
    if (!override) return base;
    const { icon, buttonLink, ...text } = override;
    return {
      ...base,
      ...text,
      icon: resolveIcon(icon, service.icon),
      href: buttonLink || service.href,
    };
  });
}

export default function OurServices({ content }) {
  const heading =
    content?.servicesHeading || "Digital Marketing & Business Solutions";
  const subtext =
    content?.servicesSubtext ||
    "We don't believe in one-size-fits-all marketing. Our customized digital strategies help businesses attract qualified customers, increase conversions, and grow sustainably.";

  const displayServices = resolveServices(content);

  const eyebrow = content?.servicesEyebrow ?? "Our Services";

  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(64, 162, 216, 0.08) 0, rgba(64, 162, 216, 0.08) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(64, 162, 216, 0.08) 0, rgba(64, 162, 216, 0.08) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
        className="relative py-14 md:py-20 overflow-hidden scroll-mt-20"
        id="services"
      >

        {/* Top + bottom fades — the diamond pattern used to
            stop at a hard edge against the plain-black sections above and
            below; fading them out to solid black lets this section blend
            into its neighbours instead of reading as a separate block. */}
        <div
          className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {eyebrow && (
          <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-[#40A2D8] text-center mb-3">{eyebrow}</p>
        )}
        <h2 className="relative z-10 md:text-4xl text-3xl font-bold mb-10 text-center text-white">
          {heading}
        </h2>
        <RichText
          as="p"
          text={subtext}
          className="relative z-10 text-lg text-white text-center mb-10 md:mb-20 max-w-2xl mx-auto px-4"
        />

        {/* Tighter gaps and a smaller icon circle on phones, where the cards
            stack one per row and the 40px gaps alone added most of a screen. */}
        <div className="relative z-10 flex flex-wrap sm:p-0 px-4 max-w-6xl mx-auto gap-4 md:gap-10 items-center justify-center">
          {displayServices.map((service) => {
            const Icon = service.icon;
            const bgImage = service.image;
            return (
              <div
                key={service.heading}
                className="group relative isolate max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black p-5 md:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-[#0B60B0]/20 has-[a:focus-visible]:border-[#40A2D8] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-[#40A2D8]"
              >
                {bgImage && (
                  <>
                    <Image
                      src={bgImage}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark scrim keeps the text readable; the card itself keeps its image on hover: it lifts, the border glows blue and the icon turns white. */}
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/70 to-black/85"
                      aria-hidden="true"
                    />
                  </>
                )}
                {/* Content */}
                <div className="flex items-start gap-4">
                  {/* Icon — on phones it sits in the card's top-right corner so
                      the text gets the full card width. */}
                  <div className="max-md:absolute max-md:right-4 max-md:top-4 text-4xl text-[#40A2D8] p-2 md:p-4 rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                    <Icon size={28} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-white max-md:pr-12">
                      {service.heading}
                    </h3>
                    <p className="mt-1 text-sm text-white transition-colors duration-300 group-hover:text-white/85">
                      <b>{service.subheading}</b>
                      <br />
                      {service.description}
                    </p>
                    {/* Button */}
                    {/* A styled link, not a <button> inside a <Link> (a button
                        nested in a link is invalid and confuses screen readers).
                        Its ::after covers the whole card, so a click anywhere
                        on the card opens the service (the card already looked
                        clickable); the arrow nudges right on hover. */}
                    <div className="mt-4 md:mt-6">
                      <Link
                        href={service.href}
                        className="inline-flex rounded-lg py-2 gap-2 items-center text-sm font-medium text-[#40A2D8] transition-colors duration-300 group-hover:text-white focus:outline-none after:absolute after:inset-0 after:content-['']"
                      >
                        {service.buttonText}
                        <MoveRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
