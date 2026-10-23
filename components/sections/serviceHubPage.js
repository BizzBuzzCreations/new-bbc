import DetailHero from "@/components/detail/detailHero";
import HubIntro from "@/components/detail/hubIntro";
import HubServices from "@/components/detail/hubServices";
import WhyTrust from "@/components/detail/whyTrust";
import RoadmapSteps from "@/components/detail/roadmapSteps";
import LocalityBlock from "@/components/detail/localityBlock";
import DetailCta from "@/components/detail/detailCta";
import FaqV2 from "@/components/home/faqV2";
import BeamsBlock from "@/components/home/band";

// Shared template for the 8 service pages (/search-engine-optimization,
// /bpo-services, /web-development, …). Each page.js keeps its own metadata
// and passes its merged content (lib/servicePageContent.js + dashboard
// overrides) plus its photo descriptions; the layout used to be copied
// into all 8 files.
//
// In the homepage's style: hero (breadcrumb to /services, the page photo
// fading into the page) → overview (portrait photo + text) → the
// sub-services as linked cards → how it works + who we are (on the beams
// background) → FAQ → why businesses trust us (photo + text) → closing CTA.
// Same dashboard fields and "Remove section" switches (`hidden`) as before.
export default function ServiceHubPage({ content, label, introAlt = "", trustAlt = "" }) {
  const c = content || {};
  const hidden = new Set(c.hiddenSections || []);
  const showServices = !hidden.has("servicesGrid") && c.services?.length > 0;
  const showRoadmap = !hidden.has("roadmap") && c.roadmapSteps?.length > 0;
  const showWeAre = !hidden.has("weAre") && c.weArePoints?.length > 0;

  return (
    <div data-no-reveal>
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("hero") && (
        <DetailHero
          parentLabel="Services"
          parentHref="/services"
          label={label}
          title={c.heroHeading}
          description={c.heroDescription}
          ctaText={c.heroCtaText}
          image={c.heroImage}
          secondaryHref={showServices ? "#services" : null}
        />
      )}
      {!hidden.has("intro") && (
        <HubIntro
          heading={c.introHeading}
          tagline={c.introTagline}
          paragraphs={[c.introParagraphOne, c.introParagraphTwo]}
          image={c.introImage}
          alt={introAlt}
        />
      )}
      {showServices && <HubServices id="services" heading={c.servicesGridHeading} subheading={c.servicesGridSubheading} items={c.services} />}
      {(showRoadmap || showWeAre) && (
        <BeamsBlock>
          {showRoadmap && <RoadmapSteps heading={c.roadmapHeading} subtext={c.roadmapSubtext} steps={c.roadmapSteps} />}
          {showWeAre && (
            <WhyTrust
              eyebrow="Who we are"
              heading={c.weAreHeading}
              description={c.weAreDescription}
              items={c.weArePoints.map((p) => ({ title: p.title, desc: p.description }))}
            />
          )}
        </BeamsBlock>
      )}
      {!hidden.has("faq") && c.faqs?.length > 0 && (
        <FaqV2 content={{ faqHeading: c.faqHeading || "Frequently Asked Questions", faqSubheading: c.faqSubheading, faqItems: c.faqs }} />
      )}
      {!hidden.has("trust") && (
        <LocalityBlock
          eyebrow="Why businesses trust us"
          heading={c.trustHeading}
          subtext={c.trustSubtext}
          text={[c.trustParagraphOne, c.trustParagraphTwo]}
          image={c.trustImage}
          alt={trustAlt}
        />
      )}
      {!hidden.has("cta") && (
        <DetailCta
          heading={c.ctaHeading || "Get a Free Consultation"}
          tagline={c.ctaTagline}
          text={c.ctaParagraph}
          primaryText={c.ctaPrimaryText}
          secondaryText={c.ctaSecondaryText}
        />
      )}
    </div>
  );
}
