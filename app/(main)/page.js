import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import HomeAbout from "@/components/sections/homeAbout";
import HomeHero from "@/components/sections/homeHero";
import OurServices from "@/components/sections/ourServices";
import CaseStudies from "@/components/sections/caseStudies";
import ScrollZoomReveal from "@/components/sections/scrollZoomReveal";
import StatsShowcase from "@/components/sections/statsShowcase";
import WavyDivider from "@/components/ui/wavy-divider";
import AiShowcase from "@/components/sections/aiShowcase";
import Reviews from "@/components/sections/reviews";
import WhatMAkesUs from "@/components/sections/whatMakesUs";
import Recognitions from "@/components/sections/recognitions";
import IndustriesShowcase from "@/components/sections/industriesShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ConsultationPopup from "@/components/sections/popupForm";
import LatestBlogs from "@/components/sections/latestBlogs";
import { getPageContent } from "@/actions/pageContentActions";

export const metadata = {
  title: "Digital Marketing Agency in India | BizzBuzz Creations",
  description:
    "Full-stack digital marketing agency in Prayagraj, India. SEO, Google Ads, social media & web development for clients across India and worldwide.",
  keywords:
    "best digital marketing agency in allahabad, best digital marketing agency in prayagraj, best digital marketing company in prayagraj, professional digital marketing, Best SEO Service in prayagraj, Expert SEO service, SMM services in prayagraj, Best SMM agency in prayagraj, local SEO services in prayagraj, Best Paid Ads services in prayagraj, Professional SEO Services in Prayagraj",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/",
  },
  openGraph: {
    title:
      "Best Digital Marketing Agency in Prayagraj | Best SEO Service Company in Prayagraj | Best SMM Service In Prayagraj",
    description:
      "Grow your business with BizzBuzz Creations, a trusted digital marketing agency in Prayagraj offering SEO, Google Ads, web development & social media.",
    url: "https://bizzbuzzcreations.com/",
    type: "website",
    siteName: "BizzBuzz Creations",
    locale: "en_US",
    images: ["https://bizzbuzzcreations.com/Industry Authority (1).png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Digital Marketing Agency in Prayagraj| SEO and SMM Service Company | BizzBuzz Creations",
    description:
      "Searching for the best SEO and SMM service company in Prayagraj? We help businesses rank higher, increase visibility, and get more leads with proven digital marketing strategies.",
    images: ["https://bizzbuzzcreations.com/Industry Authority (1).png"],
  },
};

export default async function Home() {
  const content = await getPageContent("home");

  return (
    <>
      {/* Home Hero Section */}
      <HomeHero content={content} />

      {/* About section */}
      <HomeAbout content={content} />

      {/* Our Services */}
      <OurServices content={content} />

      {/* Case Studies — client work carousel */}
      <CaseStudies content={content} />

      {/* Scroll-pinned "Know More About Us" zoom-text transition — the
          rest of the homepage sections continue right after this. */}
      <ScrollZoomReveal />

      {/* Wavy divider — visually splits the two back-to-back dark sections.
          Padding on both sides keeps it floating in the middle of the gap
          instead of sitting flush against the section below it. */}
      <div className="bg-black pt-3 pb-8 md:pt-4 md:pb-10">
        <WavyDivider />
      </div>

      {/* Stats showcase — auto-scrolling numbers/logos/services carousel */}
      <StatsShowcase content={content} />

      {/* AI showcase — video + AI services split section */}
      <AiShowcase content={content} />

      {/* What Makes Us Different section */}
      <WhatMAkesUs content={content} />

      {/* Why choose us */}
      <WhyChooseUs dark content={content} />

      {/* Proven Expertise — real certifications & partnerships */}
      <Recognitions content={content} />

      {/* Industries we work with — same list as the navbar's mega-menu */}
      <IndustriesShowcase content={content} />

      {/* Reviews section */}
      <Reviews content={content} />

      <LatestBlogs dark />

      <div className="bg-black pt-10">
        {/* FAQ section */}
        <FAQ content={content} />

        {/* CTA section */}
        <CTA content={content} />
      </div>
      {/* Popup form */}
      <ConsultationPopup content={content} />
    </>
  );
}

// LatestBlogs fetches from MongoDB — force-dynamic so this page renders at
// request time instead of during `next build`, where the build sandbox
// can't reliably resolve the Atlas mongodb+srv:// DNS record (this was
// causing the Netlify build to fail outright). Same pattern already used
// on /career and /blog.
export const dynamic = "force-dynamic";
