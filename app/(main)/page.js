// Homepage redesign (dark, GPG-style): its own sections in components/home/,
// reading the same dashboard fields as before. Other pages keep using the
// original components/sections/ versions.
import HeroHome from "@/components/home/heroHome";
import AboutV2 from "@/components/home/aboutV2";
import ServicesV2 from "@/components/home/servicesV2";
import BuildV2 from "@/components/home/buildV2";
import ProcessV2 from "@/components/home/processV2";
import IndustriesV2 from "@/components/home/industriesV2";
import ReviewsV2 from "@/components/home/reviewsV2";
import ClientVideosV2 from "@/components/home/clientVideosV2";
import BlogsV2 from "@/components/home/blogsV2";
import FaqV2 from "@/components/home/faqV2";
import CtaV2 from "@/components/home/ctaV2";
import BeamsBlock from "@/components/home/band";
import ConsultationPopup from "@/components/sections/popupForm";
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

  // data-no-reveal: the site-wide scroll fade-in (ScrollReveal) hides every
  // heading and grid item below the fold until it scrolls into view. These
  // sections are meant to be visible straight away (they have their own
  // light scroll effects), so they opt out.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="home" />
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {/* Hero: the BizzBuzz Creations wordmark over the background video,
          stats and certification badges (homepage look; the shared HomeHero
          stays as it is on the UK / location pages). */}
      {!hidden.has("hero") && (
        <HeroHome
          content={content}
          stats={content?.zoomStats}
          secondaryCta={hidden.has("services") ? null : { text: "Explore Our Services", href: "#services" }}
        />
      )}

      {/* About + the statement line (the statement can be removed on its own) */}
      {!hidden.has("about") && <AboutV2 content={content} showStatement={!hidden.has("statement")} />}

      {!hidden.has("services") && <ServicesV2 content={content} />}

      {/* What We Build: Clio AI + Praxistence, then the other in-house systems
          (the old case-study wheel). Each part keeps its own Remove switch. */}
      <BuildV2
        content={content}
        showClio={!hidden.has("aiShowcase")}
        showPraxistence={!hidden.has("praxistenceShowcase")}
        showBuilds={!hidden.has("caseStudies")}
      />

      {/* Process, Industries, Reviews and the client videos share one background (the beams) */}
      {["process", "industries", "reviews", "clientVideos"].some((key) => !hidden.has(key)) && (
        <BeamsBlock>
          {!hidden.has("process") && <ProcessV2 content={content} />}
          {!hidden.has("industries") && <IndustriesV2 content={content} />}
          {!hidden.has("reviews") && <ReviewsV2 content={content} />}
          {!hidden.has("clientVideos") && <ClientVideosV2 content={content} />}
        </BeamsBlock>
      )}

      {!hidden.has("latestBlogs") && <BlogsV2 content={content} />}

      {!hidden.has("faq") && <FaqV2 content={content} />}

      {!hidden.has("cta") && <CtaV2 content={content} />}

      {!hidden.has("popup") && <ConsultationPopup content={content} />}
    </div>
  );
}

// ISR — served from cache and regenerated at most every 60s (and instantly
// on dashboard saves / blog publishes via revalidatePath). Replaces
// force-dynamic, which hit MongoDB on every request and slowed TTFB.
export const revalidate = 60;
