import DetailHero from "@/components/detail/detailHero";
import WhoItsFor from "@/components/detail/whoItsFor";
import BreakdownTabs from "@/components/detail/breakdownTabs";
import WhyTrust from "@/components/detail/whyTrust";
import RoadmapSteps from "@/components/detail/roadmapSteps";
import LocalityBlock from "@/components/detail/localityBlock";
import DetailCta from "@/components/detail/detailCta";
import FaqV2 from "@/components/home/faqV2";
import BeamsBlock from "@/components/home/band";

// Shared template every /industries/<slug> page (all 15) renders through;
// each page plugs in its own content (lib/industryPageContent.js +
// dashboard overrides).
//
// Redesigned with the same sections as the sub-service pages
// (components/detail/*): hero with a breadcrumb to /industries and the
// industry photo in a wide frame (2.86:1, the industry photos' own shape)
// → who it's for → what we do (service groups, tabbed panel / accordion)
// → why us + how it works (on the beams background) → the "why businesses
// choose us" statement (text only — these pages have no second photo) →
// FAQ → closing CTA. Each section keeps its dashboard "Remove section"
// switch (`hidden`).
export default function IndustryDetailPage({
  label,
  description,
  heroTitle,
  heroDescription,
  heroCtaText,
  heroImage,
  capabilitiesHeading,
  capabilities,
  serviceBreakdownHeading,
  serviceBreakdown,
  differentiatorsHeading,
  differentiators,
  roadmapCarouselHeading,
  roadmapCarouselSteps,
  faqs,
  faqsHeading,
  whyChooseUsHeading,
  whyChooseUsText,
  ctaHeading,
  ctaText,
  ctaPrimaryText,
  ctaSecondaryText,
  hiddenSections,
}) {
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(hiddenSections || []);
  const showCapabilities = !hidden.has("capabilities") && capabilities?.length > 0;
  const showWhy = !hidden.has("differentiators") && differentiators?.length > 0;
  const showRoadmap = !hidden.has("roadmap") && roadmapCarouselSteps?.length > 0;

  return (
    <div data-no-reveal>
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("hero") && (
        <DetailHero
          parentLabel="Industries"
          parentHref="/industries"
          label={label}
          title={heroTitle || `Digital Marketing for ${label}`}
          description={heroDescription || description}
          ctaText={heroCtaText}
          image={heroImage}
          imageShape="2.86"
          secondaryHref={showCapabilities ? "#included" : null}
        />
      )}
      {showCapabilities && <WhoItsFor id="included" heading={capabilitiesHeading} items={capabilities} />}
      {!hidden.has("serviceBreakdown") && <BreakdownTabs heading={serviceBreakdownHeading} items={serviceBreakdown} />}
      {(showWhy || showRoadmap) && (
        <BeamsBlock>
          {showWhy && <WhyTrust heading={differentiatorsHeading} items={differentiators} />}
          {showRoadmap && <RoadmapSteps heading={roadmapCarouselHeading} steps={roadmapCarouselSteps} />}
        </BeamsBlock>
      )}
      {!hidden.has("whyChooseUs") && (
        <LocalityBlock
          eyebrow="Why businesses choose us"
          heading={whyChooseUsHeading || `Why Businesses Choose Us for ${label}`}
          text={whyChooseUsText}
        />
      )}
      {!hidden.has("faq") && faqs?.length > 0 && (
        <FaqV2 content={{ faqHeading: faqsHeading || "Frequently Asked Questions", faqItems: faqs }} />
      )}
      {!hidden.has("cta") && (
        <DetailCta
          heading={ctaHeading || "Get a Free Consultation"}
          text={ctaText}
          primaryText={ctaPrimaryText}
          secondaryText={ctaSecondaryText}
        />
      )}
    </div>
  );
}
