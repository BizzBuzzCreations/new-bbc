import Link from "next/link";

// Colorful gradient treatment for the Guides resource page.
export default function GuidesHero({ content } = {}) {
  const heading = content?.guidesHeroHeading || "Digital Marketing Guides & Resources";
  const paragraph =
    content?.guidesHeroParagraph ||
    "Practical, no-fluff guides and insights on SEO, paid ads, social media, websites, content, AI, and digital growth.";
  const primaryCtaText = content?.guidesHeroPrimaryCtaText || "Explore Our Guides";
  const secondaryCtaText = content?.guidesHeroSecondaryCtaText || "Need Help With Marketing?";

  return (
    <section className="relative overflow-hidden py-24 md:py-28 px-6 md:px-12 lg:px-24 text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #050b16 0%, #0B60B0 35%, #4c2f91 65%, #050b16 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "conic-gradient(from 200deg at 70% 15%, transparent, rgba(64,162,216,0.55), transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "conic-gradient(from 20deg at 20% 90%, transparent, rgba(124,58,237,0.5), transparent 35%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
          {heading}
        </h1>
        <p className="text-white/80 max-w-xl mb-8 leading-relaxed">
          {paragraph}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#all-guides" className="inline-block">
            <button className="animated-button animated-button-lg whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{primaryCtaText}</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
          <Link href="/contact" className="inline-block">
            <button className="animated-button animated-button-lg whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{secondaryCtaText}</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
