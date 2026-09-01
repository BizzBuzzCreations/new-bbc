import Link from "next/link";

// Colorful gradient treatment for the Guides resource page.
export default function GuidesHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28 px-6 text-center text-white">
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

      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
          Digital Marketing Guides &amp; Resources
        </h1>
        <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Practical, no-fluff guides and insights on SEO, paid ads, social
          media, websites, content, AI, and digital growth.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#all-guides"
            className="inline-flex items-center gap-1.5 bg-white hover:bg-black text-black hover:text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors duration-300"
          >
            Explore Our Guides
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 border border-white/50 hover:border-white bg-transparent hover:bg-white text-white hover:text-black text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors duration-300"
          >
            Need Help With Marketing?
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
