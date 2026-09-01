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

  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden min-h-[460px] sm:min-h-[500px] md:min-h-[560px] flex items-center">
      {/* Background photo — fades from solid white behind the text (left)
          into the photo itself (right), same idea as the reference. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,96,176,0.1) 1px, transparent 1px), linear-gradient(90deg, #ffffff 0%, #ffffff 42%, rgba(255,255,255,0.82) 58%, rgba(255,255,255,0.25) 82%, rgba(255,255,255,0) 100%)",
          backgroundSize: "22px 22px, 100% 100%",
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-xl md:text-start text-center mx-auto md:mx-0">
          <p className="text-gray-900">{eyebrow}</p>
          <h2 className="md:text-4xl text-3xl font-bold mb-4">
            {heading}
          </h2>
          <p className="max-w-lg mb-6 text-gray-900">{paragraph}</p>
          <Link
            href="/about"
            aria-label="Learn more about BizzBuzz Creations"
            className="inline-block"
          >
            <button className="relative cursor-pointer border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg overflow-hidden group">
              <span className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
              <span className="relative z-10 group-hover:text-white">
                {buttonText}
              </span>
            </button>
          </Link>
        </div>
=======
    <div className="px-10 py-10 flex flex-col lg:flex-row  justify-center gap-10 items-center mx-auto">
      <div className="md:text-start text-center">
        <p className="text-gray-900">About Us</p>
        <h2 className="md:text-4xl text-3xl font-bold mb-4">
         We Are BizzBuzz Creations
        </h2>
        <p className="max-w-lg mb-6 text-gray-900">
          We're not just another agency running the same playbook for every client. <b>BizzBuzz Creations</b> is built on the idea that real growth comes from understanding a business first and marketing it second. That's why local businesses trust us as one of the <b>best digital marketing companies</b> in Prayagraj  and why brands from Allahabad to Lucknow to Delhi rely on us as they expand their digital footprint across India.
          Our team blends SEO expertise, AI-assisted campaign optimization, paid advertising know-how, and sharp creative work to deliver digital marketing solutions that actually move the needle  more visibility, more leads, and more revenue, no matter which city or state your customers are searching from.
        </p>
        <Link
          href="/about"
          aria-label="Learn more about BizzBuzz Creations"
          className="inline-block"
        >
          <button className="relative cursor-pointer border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
            <span className="relative z-10 group-hover:text-white">
              Learn More
            </span>
          </button>
        </Link>
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
      </div>
      <Image
        src="/Industry Authority (1).png"
        alt="banner"
        width={500}
        height={500}
        className="xl:w-lg lg:w-md"
      />
    </div>
  );
}
