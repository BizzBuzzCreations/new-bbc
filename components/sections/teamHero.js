import Link from "next/link";

// Dark gradient backdrop — no photo, just the intro copy and CTA.
export default function TeamHero({ content } = {}) {
  const heading = content?.teamHeroHeading || "The Humans Behind the Hustle";
  const subheading =
    content?.teamHeroSubheading || "Strategy. Creativity. Technology. One Team.";
  const paragraph =
    content?.teamHeroParagraph ||
    "Meet the marketers, strategists, designers, developers, and digital specialists behind BizzBuzz Creations. Our team brings together diverse expertise to build smarter digital strategies and meaningful growth for businesses across Prayagraj, India, and worldwide.";
  const ctaText = content?.teamHeroCtaText || "Meet the Team";

  return (
    <section
      className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-24 text-white"
      style={{
        background:
          "linear-gradient(120deg, #050b16 0%, #0B60B0 30%, #050b16 75%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight max-w-2xl">
          {heading}
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#8fd0f2] mb-8">
          {subheading}
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed">
            {paragraph}
          </p>
          <Link href="#meet-our-team" className="inline-block w-fit">
            <button className="animated-button animated-button-lg whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{ctaText}</span>
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
