import DetailHero from "@/components/detail/detailHero";
import WhoItsFor from "@/components/detail/whoItsFor";
import BreakdownTabs from "@/components/detail/breakdownTabs";
import WhyTrust from "@/components/detail/whyTrust";
import RoadmapSteps from "@/components/detail/roadmapSteps";
import LocalityBlock from "@/components/detail/localityBlock";
import DetailCta from "@/components/detail/detailCta";
import FaqV2 from "@/components/home/faqV2";
import BeamsBlock from "@/components/home/band";
import { SERVICE_LINES } from "@/lib/siteNav";

// Shared template every /industries/<slug> page (all 15) renders through;
// each page plugs in its own content (lib/industryPageContent.js +
// dashboard overrides).
//
// Rebuild: the same sections as the sub-service pages (components/detail/*):
// hero with a breadcrumb to /industries and the industry's generated
// signature in a wide frame (no photo — the industry photos were low
// quality; the dashboard's hero image field is not shown) → who it's for → what we do (service groups, tabbed panel / accordion)
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
          secondaryHref={showCapabilities ? "#included" : null}
          aside={{ title: "What we do", links: SERVICE_LINES.map((s) => ({ label: s.name, href: s.href })) }}
        />
      )}
      {showCapabilities && <WhoItsFor id="included" heading={capabilitiesHeading} items={capabilities} no="01" />}
      {!hidden.has("serviceBreakdown") && <BreakdownTabs heading={serviceBreakdownHeading} items={serviceBreakdown} no="02" />}
      {(showWhy || showRoadmap) && (
        <BeamsBlock>
          {showWhy && <WhyTrust heading={differentiatorsHeading} items={differentiators} no="03" divided />}
          {showRoadmap && <RoadmapSteps heading={roadmapCarouselHeading} steps={roadmapCarouselSteps} no="04" />}
        </BeamsBlock>
      )}
      {!hidden.has("whyChooseUs") && (
        <LocalityBlock
          eyebrow="Why businesses choose us"
          heading={whyChooseUsHeading || `Why Businesses Choose Us for ${label}`}
          text={whyChooseUsText}
          no="05"
        />
      )}
      {!hidden.has("faq") && faqs?.length > 0 && (
        <FaqV2 content={{ faqHeading: faqsHeading || "Frequently Asked Questions", faqItems: faqs }} no="06" />
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
