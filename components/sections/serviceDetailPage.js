import DetailHero from "@/components/detail/detailHero";
import WhoItsFor from "@/components/detail/whoItsFor";
import BreakdownTabs from "@/components/detail/breakdownTabs";
import WhyTrust from "@/components/detail/whyTrust";
import RoadmapSteps from "@/components/detail/roadmapSteps";
import LocalityBlock from "@/components/detail/localityBlock";
import DetailCta from "@/components/detail/detailCta";
import FaqV2 from "@/components/home/faqV2";
import BeamsBlock from "@/components/home/band";

// Shared template every /<service-hub>/<slug> sub-service page (all 44)
// renders through, so they can't drift out of sync; each page plugs in its
// own content (lib/subServicePageContent.js + dashboard overrides).
//
// Redesigned in the homepage's style (components/detail/*): hero with a
// breadcrumb and the page photo in a wide frame → who it's for (open grid)
// → what we do (the service groups as one tabbed panel / accordion) → why
// us + how it works (numbered list and a scroll-lit timeline, on the beams
// background) → where we work (photo + text) → FAQ → closing CTA.
// Each section keeps its dashboard "Remove section" switch (`hidden`).
//
// The parent service page each sectionLabel belongs to, for the breadcrumb.
const PARENT_PAGES = {
  "BPO Services": "/bpo-services",
  "Website Development": "/web-development",
  "SEO Services": "/search-engine-optimization",
  "Social Media Marketing": "/social-media-marketing",
  "Paid Marketing": "/paid-marketing",
  "AI Solutions": "/ai-solutions",
  "Marketing Automation": "/marketing-automation",
  "Business Consultancy": "/business-consultancy",
};

export default function ServiceDetailPage({
  // Breadcrumb parent ("SEO Services") and this page's name.
  sectionLabel,
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
  localityHeading,
  localityText,
  localityImage,
  faqs,
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
          parentLabel={sectionLabel}
          parentHref={PARENT_PAGES[sectionLabel]}
          label={label}
          title={heroTitle || `${label} Services`}
          description={heroDescription || description}
          ctaText={heroCtaText}
          image={heroImage}
          secondaryHref={showCapabilities ? "#included" : null}
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
      {!hidden.has("locality") && <LocalityBlock heading={localityHeading} text={localityText} image={localityImage || heroImage} no="05" />}
      {!hidden.has("faq") && faqs?.length > 0 && (
        <FaqV2 content={{ faqHeading: "Frequently Asked Questions", faqItems: faqs }} no="06" />
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
