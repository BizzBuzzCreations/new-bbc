import Link from "next/link";
import {
  Megaphone,
  Search,
  Bot,
  Share2,
  MonitorSmartphone,
  Handshake,
  MousePointerClick,
  Link2,
  FileText,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import PageHero from "@/components/detail/pageHero";
import BlogsV2 from "@/components/home/blogsV2";
import FaqV2 from "@/components/home/faqV2";
import CtaV2 from "@/components/home/ctaV2";
import Pill from "@/components/home/pill";
import { getPageContent } from "@/actions/pageContentActions";
import RichText from "@/components/ui/richText";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("guides", {
  title: "Digital Marketing Guides & Resources | BizzBuzz Creations",
  description:
    "Explore practical digital marketing guides on SEO, AI, social media, Google Ads, websites, content marketing, and more.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/guides",
  },
});
}

// Icons stay code-driven (design), matched positionally to whichever
// guide categories are saved; the "01." style tag is auto-numbered.
const GUIDE_ICONS = [
  Megaphone,
  Search,
  Bot,
  Share2,
  MonitorSmartphone,
  Handshake,
  MousePointerClick,
  Link2,
  FileText,
  Compass,
];

const DEFAULT_GUIDES = [
  { title: "Digital Marketing Services", body: "Explore practical strategies, trends, and insights to strengthen your digital presence and accelerate business growth." },
  { title: "SEO Services", body: "Discover proven SEO strategies, techniques, and insights to improve rankings, visibility, and organic traffic." },
  { title: "AI Marketing", body: "Explore AI-powered marketing strategies, tools, trends, and practical ideas for smarter digital growth." },
  { title: "Social Media Marketing", body: "Learn social media strategies, content ideas, trends, and techniques to build engagement and grow your brand." },
  { title: "Website Development Services", body: "Discover website development insights, technologies, strategies, and tips for creating better digital experiences." },
  { title: "Business Development", body: "Explore practical strategies, opportunities, and insights to build partnerships, attract customers, and drive growth." },
  { title: "Google Ads Services", body: "Learn Google Ads strategies, optimization techniques, campaign insights, and tips for improving advertising results." },
  { title: "Backlink Strategy", body: "Discover effective backlink strategies, link-building insights, and techniques for building stronger search authority." },
  { title: "Content Marketing & SEO", body: "Learn how content and SEO work together to attract audiences, improve visibility, and generate organic growth." },
  { title: "SEO, AEO & GEO", body: "Explore modern search strategies for traditional search, answer engines, and AI-powered generative search experiences." },
];

// Guides page FAQs — questions specific to the guides/resources library.
// The last default answer links to /services (saved answers can carry
// their own links).
const DEFAULT_GUIDES_FAQS = [
  {
    question: "What topics are covered in the BizzBuzz Creations guides?",
    answer:
      "Our guides cover digital marketing, SEO, AI marketing, social media marketing, website development, Google Ads, content marketing, backlink strategies, business development, and SEO, AEO & GEO.",
  },
  {
    question: "Are these digital marketing guides suitable for beginners?",
    answer:
      "Yes. Our guides are created for beginners, marketers, business owners, and professionals looking for practical insights, strategies, and actionable digital marketing knowledge.",
  },
  {
    question: "How can these guides help my business?",
    answer:
      "Our guides provide practical strategies and insights to help you improve online visibility, attract the right audience, generate leads, and make better digital marketing decisions.",
  },
  {
    question: "How often are new guides and insights published?",
    answer:
      "We regularly publish new guides covering emerging trends, proven strategies, industry updates, tools, and important developments across digital marketing and technology.",
  },
  {
    question: "Do your guides cover the latest SEO and AI search trends?",
    answer:
      "Yes. We cover evolving SEO practices along with AEO, GEO, AI search, Google updates, and other changes shaping how businesses are discovered online.",
  },
  {
    question: "Can I get professional help if I need help implementing these strategies?",
    answer:
      'Yes. If you need help applying the strategies covered in our guides, you can explore our <a href="/services">digital marketing services</a> or contact BizzBuzz Creations for a consultation.',
  },
];

export default async function GuidesPage() {
  const content = await getPageContent("guides");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);

  const allGuidesHeading = content?.allGuidesHeading || "All Guides";
  const guidesRaw = content?.guides?.length > 0 ? content.guides : DEFAULT_GUIDES;
  const guides = guidesRaw.map((g, i) => ({ ...g, icon: GUIDE_ICONS[i % GUIDE_ICONS.length] }));

  const sidebarHeading = content?.guidesSidebarHeading || "Want Hands-On Help With Any of This?";
  const sidebarParagraph =
    content?.guidesSidebarParagraph ||
    "Reading is a great start — but a strategy built for your specific business moves faster. Talk to our team and we'll turn these guides into a clear, actionable plan.";
  const sidebarPrimaryText = content?.guidesSidebarPrimaryText || "Schedule a Call";
  const sidebarSecondaryText = content?.guidesSidebarSecondaryText || "View Our Services";
  const showGuides = !hidden.has("allGuides");

  // Redesign, in the homepage's style: hero → every guide (each opens its
  // category on the blog) with a help card beside them → FAQ → latest
  // posts → closing CTA. Same dashboard fields and "Remove section"
  // switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="guides" />
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("guidesHero") && (
        <PageHero
          label="Guides"
          title={content?.guidesHeroHeading || "Digital Marketing Guides & Resources"}
          description={
            content?.guidesHeroParagraph ||
            "Practical, no-fluff guides and insights on SEO, paid ads, social media, websites, content, AI, and digital growth."
          }
          actions={[
            showGuides && { text: content?.guidesHeroPrimaryCtaText || "Explore Our Guides", href: "#all-guides", variant: "solid" },
            { text: content?.guidesHeroSecondaryCtaText || "Need Help With Marketing?", href: "/contact", variant: showGuides ? "outline" : "solid" },
          ]}
          image={content?.guidesHeroImage || "/guide.jpg"}
          imageAspect="aspect-[1100/633]"
        />
      )}

      {showGuides && (
        <section id="all-guides" className="scroll-mt-20 bg-black text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 py-16 md:py-20 lg:grid-cols-[1fr_340px] lg:gap-16">
            <div>
              <p className="text-sm text-[#40A2D8]">{guides.length} guides</p>
              <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{allGuidesHeading}</h2>
              {/* each guide opens its category on the blog */}
              <ul className="reveal-stagger mt-12 grid border-t border-white/10 md:grid-cols-2 md:gap-x-10">
                {guides.map(({ icon: Icon, title, body }, i) => (
                  <li key={i} className="border-b border-white/10">
                    <Link href={`/blog?category=${encodeURIComponent(title)}`} className="group flex gap-5 py-7 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]">
                      <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B60B0]/15 text-[#40A2D8]">
                        <Icon size={18} />
                      </span>
                      <div className="flex-1">
                        <span aria-hidden="true" className="text-xs tabular-nums text-white/60">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="font-display mt-1 text-xl leading-snug text-white transition-colors group-hover:text-[#40A2D8]">{title}</h3>
                        <RichText as="p" text={body} noLink className="mt-2 text-sm leading-relaxed text-white/65" />
                      </div>
                      <ArrowUpRight size={18} aria-hidden="true" className="mt-1 shrink-0 text-white/40 transition-colors group-hover:text-[#40A2D8]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {!hidden.has("guidesSidebar") && (
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-[#40A2D8]/40 bg-linear-to-br from-[#0B60B0]/30 to-[#0b0e16] p-7">
                  <h3 className="font-display text-2xl leading-snug text-white">{sidebarHeading}</h3>
                  <RichText as="p" text={sidebarParagraph} className="mt-4 text-sm leading-relaxed text-white/75" />
                  <div className="mt-7 flex flex-col gap-3">
                    <Pill href="/contact" variant="solid" className="justify-center">{sidebarPrimaryText}</Pill>
                    <Pill href="/services" className="justify-center">{sidebarSecondaryText}</Pill>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </section>
      )}

      {!hidden.has("guidesFaq") && (
        <FaqV2
          content={{
            faqHeading: content?.guidesFaqHeading || "Frequently Asked Questions",
            faqItems: content?.guidesFaqItems?.length > 0 ? content.guidesFaqItems : DEFAULT_GUIDES_FAQS,
          }}
        />
      )}

      {!hidden.has("latestBlogs") && <BlogsV2 content={content} />}

      {!hidden.has("cta") && <CtaV2 content={content} />}
    </div>
  );
}

// The latest posts come from MongoDB — force-dynamic so this page renders
// at request time instead of during `next build`, where the build sandbox
// can't reliably resolve the Atlas mongodb+srv:// DNS record. Same pattern
// already used on /career and /blog.
export const dynamic = "force-dynamic";
