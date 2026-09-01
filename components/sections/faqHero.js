import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// FAQ page hero — same full-bleed-photo treatment as HomeAbout's building
// shot: the question-mark graphic spans the whole section as a background
// image, fading from solid black (behind the text) into the photo on the
// right. Dark-theme version of that pattern (black fade instead of white).
export default function FaqHero({ content } = {}) {
  const headingLine1 = content?.faqHeroHeadingLine1 || "Frequently Asked";
  const headingLine2 = content?.faqHeroHeadingLine2 || "Questions";
  const subheading =
    content?.faqHeroSubheading ||
    "Answers to What Businesses Ask Before They Grow With Us";
  const paragraph =
    content?.faqHeroParagraph ||
    "Have questions about SEO, Google Ads, social media, web development, AI automation, or working with BizzBuzz Creations? Find clear answers below — and if you don't see what you're looking for, our team is one message away.";
  const ctaText = content?.faqHeroCtaText || "Ask Us Directly";
  const backgroundImage = content?.faqHeroBackgroundImage || "/question-mark.jpeg";

  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[560px] flex items-center bg-black">
      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Fades from solid black (behind the text, left) into the photo
          (right) — no dot texture. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #000000 0%, #000000 42%, rgba(0,0,0,0.82) 58%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-xl">
          <h1 className="text-white leading-[1.05]">
            <span className="block text-4xl sm:text-5xl md:text-6xl font-light">
              {headingLine1}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-bold">
              {headingLine2}
            </span>
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-[#40A2D8]">
            {subheading}
          </h2>
          <p className="mt-6 text-white/60 max-w-lg leading-relaxed">
            {paragraph}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0B60B0] hover:bg-white text-white hover:text-[#0B60B0] text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#0B60B0]/30 transition-colors duration-300 mt-8"
          >
            {ctaText}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
