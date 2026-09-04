import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeAbout({ content }) {
  const eyebrow = content?.aboutEyebrow || "About Us";
  const heading = content?.aboutHeading || "We Are BizzBuzz Creations";
  const paragraph =
    content?.aboutParagraph ||
    "BizzBuzz Creations is a digital marketing and business solutions agency helping businesses in Prayagraj (Allahabad), across India, and international markets build a stronger digital presence. We understand that every business has different goals, audiences, and challenges, so we focus on practical solutions rather than one-size-fits-all marketing. Our expertise covers SEO, local SEO, Google Ads, social media marketing, website development, content marketing, AI solutions, and marketing automation. From improving search visibility and generating qualified leads to building better websites and streamlining business processes, we bring multiple digital capabilities under one team. Our goal is simple: help businesses reach the right audience, create meaningful opportunities, and build a digital presence that supports long-term growth.";
  const buttonText = content?.aboutButtonText || "Learn More";
  const backgroundImage = content?.aboutBackgroundImage || "/building.jpg";

  const button = (
    <Link href="/about" aria-label="Learn more about BizzBuzz Creations" className="inline-block">
      <button className="relative cursor-pointer border-2 border-white text-white px-6 py-3 rounded-lg overflow-hidden group">
        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
        <span className="relative z-10 group-hover:text-black">{buttonText}</span>
      </button>
    </Link>
  );

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Desktop/tablet only. The gradient and the photo are drawn as
          plain siblings sized to the SAME container (not two independent
          CSS background layers — that's what broke the fade earlier: a
          gradient's `background-size: contain` just fills the whole
          positioning area since gradients have no intrinsic size, so it
          never actually matched the photo's own contain-computed box).
          The image box is now full-bleed to the right edge of the
          viewport (`flex-1`, no right padding/max-width, no rounded
          corners on that edge) instead of sitting in a padded, capped
          column with black space to its right — only the text column on
          the left keeps its own padding. */}
      <div className="hidden md:flex relative min-h-[620px] lg:min-h-[700px] items-stretch">
        <div className="relative z-10 flex items-center max-w-2xl shrink-0 pl-12 lg:pl-24 pr-10">
          <div>
            <p className="text-white/60">{eyebrow}</p>
            <h2 className="text-4xl font-bold mb-4 text-[#40A2D8]">{heading}</h2>
            <p className="max-w-xl mb-6 text-white/80">{paragraph}</p>
            {button}
          </div>
        </div>

        <div className="relative flex-1">
          <Image
            src={backgroundImage}
            alt="BizzBuzz Creations office"
            fill
            sizes="60vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0) 60%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile only — plain stacked layout, no fade needed: heading,
          then the photo as its own boxed block, then the paragraph and
          button below it. */}
      <div className="md:hidden px-6 py-16 text-center">
        <p className="text-white/60">{eyebrow}</p>
        <h2 className="text-3xl font-bold mb-6 text-[#40A2D8]">{heading}</h2>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
          <Image src={backgroundImage} alt="BizzBuzz Creations office" fill sizes="100vw" className="object-cover" />
        </div>
        <p className="max-w-lg mx-auto mb-6 text-white/80">{paragraph}</p>
        {button}
      </div>
    </section>
  );
}
