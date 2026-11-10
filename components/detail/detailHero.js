import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import AccentText from "@/components/brand/accentText";
import Breadcrumb from "@/components/brand/breadcrumb";
import HeroAside from "@/components/brand/heroAside";

// Kept for older imports: a title with its muted tail.
export function AccentTitle({ title }) {
  return <AccentText text={title} />;
}

// Hero of the service hubs, sub-service and industry pages: breadcrumb, the
// page's title set huge and two-tone, then the description and buttons in a
// column to the right. No picture — the dashboard's image fields are not
// shown on these pages (DESIGN_DIRECTION.md §7).
export default function DetailHero({ parentLabel, parentHref, label, title, description, ctaText, secondaryHref, aside }) {
  return (
    <section className="on-paper relative pt-24 md:pt-32">
      <div className="wrap pb-7 md:pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: parentLabel, href: parentHref }, { label }]} />
        </div>
        <div className="mt-6 grid gap-10 md:mt-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h1 className="font-display max-w-[17ch] text-balance text-[clamp(2.7rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.055em] motion-safe:animate-[fade-up_0.9s_var(--ease-out-soft)_both]">
              <AccentText text={title} />
            </h1>
          </div>
          {aside && <HeroAside title={aside.title} links={aside.links} current={aside.current} className="lg:col-span-3 lg:col-start-10 lg:pt-3" />}
        </div>
        <div className="mt-6 grid gap-8 border-t border-(--line) pt-8 md:mt-12 md:grid-cols-12 md:gap-10">
          <p className="kicker text-(--mut) md:col-span-3">{parentLabel}</p>
          <RichText as="p" text={description} className="text-lg leading-relaxed md:col-span-5 md:text-xl" />
          <div className="flex flex-wrap items-start gap-3 md:col-span-4">
            <Button href="/contact" data-bizzbee-avoid variant="solid" size="lg">
              {ctaText || "Get a Free Consultation"}
            </Button>
            {secondaryHref && (
              <Button href={secondaryHref} data-bizzbee-avoid variant="outline" size="lg">
                What&rsquo;s included
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
