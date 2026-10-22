import HeroHome from "@/components/home/heroHome";
import AboutV2 from "@/components/home/aboutV2";
import ServicesV2 from "@/components/home/servicesV2";
import BuildV2 from "@/components/home/buildV2";
import WhyUsV2 from "@/components/home/whyUsV2";
import WhoWeAreV2 from "@/components/home/whoWeAreV2";
import ProcessV2 from "@/components/home/processV2";
import IndustriesV2 from "@/components/home/industriesV2";
import ReviewsV2 from "@/components/home/reviewsV2";
import VideoTestimonialV2 from "@/components/home/videoTestimonialV2";
import BlogsV2 from "@/components/home/blogsV2";
import FaqV2 from "@/components/home/faqV2";
import CtaV2 from "@/components/home/ctaV2";
import BeamsBlock from "@/components/home/band";
import ConsultationPopup from "@/components/sections/popupForm";
import { getPageContent } from "@/actions/pageContentActions";
import PageSeoScripts from "@/components/sections/pageSeoScripts";
import { ukPageSchema } from "@/lib/ukPageSchema";
import { hasCustomSchema } from "@/lib/seo";

// The Outside Location page layout — the UK page
// (/en-uk/digital-marketing-services-in-uk) and every page created from
// the dashboard's Outside Location section (/en-uk/<slug>) render through
// this one component, so they always have the exact same structure. Only
// `pageKey` differs: it decides which saved content / SEO settings load.
//
// Built from the redesigned homepage's sections (components/home/*), with
// the location pages' own differences: the hero's background is the
// dashboard's either/or Image-or-Video (`mediaChoice`) and has no outlined
// wordmark; the Clio card reads the clio* fields; and three sections only
// these pages have — "Why Our Way of Working Is Different" (WhyUsV2),
// "Who We Are" (WhoWeAreV2) and the client video testimonial — in the same
// style. Recognitions are the badges in the hero now, as on the homepage.
// Each section can be switched off from the dashboard ("Remove section") —
// `hidden` below.
export default async function OutsideLocationPage({ pageKey }) {
  const content = await getPageContent(pageKey);
  const hidden = new Set(content?.hiddenSections || []);
  const isUk = pageKey === "outside-location-uk";

  return (
    <div data-no-reveal>
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      <PageSeoScripts pageKey={pageKey} />
      {/* The UK page's own structured data (the site-wide India
          LocalBusiness schema is skipped on that route — see allScripts.js);
          `<` is escaped so no field can close the script tag early. Pages
          created from the dashboard use the site-wide default instead, and
          a custom schema saved in the SEO panel replaces either. */}
      {isUk && !hasCustomSchema(content) && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ukPageSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {!hidden.has("hero") && (
        <HeroHome
          content={content}
          mediaChoice
          showWordmark={false}
          secondaryCta={hidden.has("services") ? null : { text: "Explore Our Services", href: "#services" }}
        />
      )}
      {!hidden.has("about") && <AboutV2 content={content} showStatement={false} />}
      {!hidden.has("services") && <ServicesV2 content={content} />}
      {/* Clio AI (clio* fields), Praxistence and the in-house systems; each
          part keeps its own Remove switch. */}
      <BuildV2
        content={content}
        clioPrefix="clio"
        showClio={!hidden.has("clioShowcase")}
        showPraxistence={!hidden.has("praxistenceShowcase")}
        showBuilds={!hidden.has("caseStudies")}
      />
      {!hidden.has("stats") && <WhyUsV2 content={content} />}
      {!hidden.has("whoWeAre") && <WhoWeAreV2 content={content} />}
      {["process", "industries", "reviews", "videoTestimonial"].some((key) => !hidden.has(key)) && (
        <BeamsBlock>
          {!hidden.has("process") && <ProcessV2 content={content} />}
          {!hidden.has("industries") && <IndustriesV2 content={content} />}
          {!hidden.has("reviews") && <ReviewsV2 content={content} />}
          {!hidden.has("videoTestimonial") && <VideoTestimonialV2 content={content} />}
        </BeamsBlock>
      )}
      <BlogsV2 content={content} />
      {!hidden.has("faq") && <FaqV2 content={content} />}
      {!hidden.has("cta") && <CtaV2 content={content} />}
      {!hidden.has("popup") && <ConsultationPopup content={content} />}
    </div>
  );
}
