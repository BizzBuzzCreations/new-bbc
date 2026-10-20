import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import HomeAbout from "@/components/sections/homeAbout";
import HomeHero from "@/components/sections/homeHero";
import OurServices from "@/components/sections/ourServices";
import CaseStudies from "@/components/sections/caseStudies";
import StatsShowcase from "@/components/sections/statsShowcase";
import AiProductsShowcase from "@/components/sections/aiProductsShowcase";
import Reviews from "@/components/sections/reviews";
import WhatMAkesUs from "@/components/sections/whatMakesUs";
import IndustriesShowcase from "@/components/sections/industriesShowcase";
import ConsultationPopup from "@/components/sections/popupForm";
import LatestBlogs from "@/components/sections/latestBlogs";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("home", {
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
    siteName: "Digital Marketing Agency",
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
});
}

export default async function Home() {
  const content = await getPageContent("home");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);

  return (
    <>
      <PageSeoScripts pageKey="home" />
      {/* Home Hero Section */}
      {/* Stats row under the buttons reuses the saved "Know More About Us"
          numbers (zoomStats); the quieter second link jumps to the services. */}
      {!hidden.has("hero") && (
        <HomeHero
          content={content}
          separated
          showGlow={false}
          stats={content?.zoomStats}
          secondaryCta={hidden.has("services") ? null : { text: "Explore Our Services", href: "#services" }}
        />
      )}

      {/* About section */}
      {!hidden.has("about") && <HomeAbout content={content} separated />}

      {/* Our Services */}
      {!hidden.has("services") && <OurServices content={content} />}

      {/* Case Studies — client work carousel */}
      {!hidden.has("caseStudies") && <CaseStudies content={content} />}

      {/* Stats showcase — auto-scrolling numbers/logos/services carousel —
          now directly after Case Studies. */}
      {!hidden.has("stats") && <StatsShowcase content={content} />}

      {/* Our products — Clio AI and Praxistence as two cards in one
          section. Each card can still be removed on its own from the
          dashboard (its old section key). The scroll-zoom "Know More About
          Us" section and "Why Businesses Continue Working With Us" were
          dropped to shorten the page; the latter still lives on /about. */}
      <AiProductsShowcase
        content={content}
        showClio={!hidden.has("aiShowcase")}
        showPraxistence={!hidden.has("praxistenceShowcase")}
      />

      {/* What Makes Us Different section */}
      {!hidden.has("process") && <WhatMAkesUs content={content} />}

      {/* Industries we work with — same list as the navbar's mega-menu */}
      {!hidden.has("industries") && <IndustriesShowcase content={content} />}

      {/* Reviews section */}
      {!hidden.has("reviews") && <Reviews content={content} />}

      {!hidden.has("latestBlogs") && <LatestBlogs dark content={content} />}

      <div className="bg-black pt-10">
        {/* FAQ section */}
        {!hidden.has("faq") && <FAQ content={content} />}

        {/* CTA section */}
        {!hidden.has("cta") && <CTA content={content} />}
      </div>
      {/* Popup form */}
      {!hidden.has("popup") && <ConsultationPopup content={content} />}
    </>
  );
}

// ISR — served from cache and regenerated at most every 60s (and instantly
// on dashboard saves / blog publishes via revalidatePath). Replaces
// force-dynamic, which hit MongoDB on every request and slowed TTFB.
export const revalidate = 60;
