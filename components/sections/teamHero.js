import Link from "next/link";

// Dark gradient backdrop — no photo, just the intro copy and CTA.
export default function TeamHero() {
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
          The Humans Behind the Hustle
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#8fd0f2] mb-8">
          Strategy. Creativity. Technology. One Team.
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed">
            Meet the marketers, strategists, designers, developers, and
            digital specialists behind BizzBuzz Creations. Our team brings
            together diverse expertise to build smarter digital strategies
            and meaningful growth for businesses across Prayagraj, India,
            and worldwide.
          </p>
          <Link
            href="#meet-our-team"
            className="inline-flex items-center justify-center shrink-0 bg-white hover:bg-black text-black hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-300 w-fit"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
