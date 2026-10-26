import { Megaphone, Palette, Code2, Target, Headset, FlaskConical } from "lucide-react";
import PageHero from "@/components/detail/pageHero";
import HeroSlideshow from "@/components/detail/heroSlideshow";
import TitledSection from "@/components/detail/titledSection";
import PeopleGrid from "@/components/detail/peopleGrid";
import CultureRows from "@/components/detail/cultureRows";
import WhoItsFor from "@/components/detail/whoItsFor";
import WhyTrust from "@/components/detail/whyTrust";
import DetailCta from "@/components/detail/detailCta";
import BeamsBlock from "@/components/home/band";
import ContactSection from "@/components/sections/contactSection";
import { TEAM_FOUNDERS, TEAM_LEADERS, TEAM_GROUPS, TEAM_SPECIALTIES, TEAM_WHY_IT_WORKS } from "@/lib/teamPageContent";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

// The hero's photos until others are saved.
const HERO_SLIDES = ["/team-images/team-5.jpeg", "/team-images/team-6.jpeg", "/team-images/team-2.jpeg", "/team-images/team-13.jpeg"];

// Icons stay code-driven (design), matched positionally to whichever
// specialities are saved.
const SPECIALTY_ICONS = [Megaphone, Palette, Code2, Target, Headset, FlaskConical];

// The BPO and R&D team rows link to their own pages, in this order.
const TEAM_GROUP_LINKS = ["/our-team/bpo-team", "/our-team/rnd-team"];

export async function generateMetadata() {
  return buildPageMetadata("our-team", {
  title: "Our Team | BizzBuzz Creations Digital Marketing Agency",
  description:
    "Meet the team behind BizzBuzz Creations: SEO, ads, development, and AI specialists building digital growth for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/our-team",
  },
});
}

export default async function OurTeamPage() {
  const content = await getPageContent("our-team");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);
  const pick = (list, fallback) => (list?.length > 0 ? list : fallback);

  const heroHeading = content?.teamHeroHeading || "The Humans Behind the Hustle";
  const heroTagline = content?.teamHeroSubheading || "Strategy. Creativity. Technology. One Team.";
  const heroParagraph =
    content?.teamHeroParagraph ||
    "Meet the marketers, strategists, designers, developers, and digital specialists behind BizzBuzz Creations. Our team brings together diverse expertise to build smarter digital strategies and meaningful growth for businesses across Prayagraj, India, and worldwide.";
  const heroCtaText = content?.teamHeroCtaText || "Meet the Team";
  const heroSlides = content?.teamHeroSlides?.length > 0 ? content.teamHeroSlides.map((s) => s.image) : HERO_SLIDES;

  const founders = pick(content?.founders, TEAM_FOUNDERS);
  const leaders = pick(content?.leaders, TEAM_LEADERS);
  const teamGroups = pick(content?.teamGroups, TEAM_GROUPS).map((g, i) => ({
    title: g.title,
    tagline: g.tagline,
    body: g.desc,
    img: g.image,
    href: TEAM_GROUP_LINKS[i],
    linkText: "Our Team",
  }));
  const specialties = pick(content?.teamSpecialties, TEAM_SPECIALTIES).map((s, i) => ({ ...s, icon: SPECIALTY_ICONS[i % SPECIALTY_ICONS.length] }));
  const whyItWorks = pick(content?.whyItWorks, TEAM_WHY_IT_WORKS);

  const ctaHeading = content?.teamCtaHeading || "Want to Work With the People Behind the Work?";
  const ctaParagraph =
    content?.teamCtaParagraph ||
    "Whether you're looking for a digital marketing partner or interested in joining our growing team, we'd love to hear from you.";
  const ctaPrimaryText = content?.teamCtaPrimaryText || "Work With Our Team";
  const ctaSecondaryText = content?.teamCtaSecondaryText || "Explore Careers";
  const showSpecialties = !hidden.has("specialties");
  const showWhyItWorks = !hidden.has("whyItWorks");

  // Redesign, in the homepage's style: hero (photo slideshow) → founders →
  // leadership → the BPO and R&D teams → (on the beams background) what each
  // team brings + why it works → contact form → closing CTA. Same dashboard
  // fields and "Remove section" switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="our-team" />
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("teamHero") && (
        <PageHero
          label="Our Team"
          title={heroHeading}
          tagline={heroTagline}
          description={heroParagraph}
          actions={[{ text: heroCtaText, href: "#meet-our-team", variant: "solid" }]}
          media={<HeroSlideshow slides={heroSlides} />}
        />
      )}

      {!hidden.has("founders") && (
        <TitledSection
          eyebrow="Founders"
          heading={content?.foundersHeading || "Meet the Founders"}
          tagline={content?.foundersSubheading || "The Minds Behind BizzBuzz Creations"}
          text={
            content?.foundersParagraph ||
            "BizzBuzz Creations was built on a simple belief: digital marketing should connect creativity with measurable business outcomes. Our founders combine entrepreneurial thinking, marketing expertise, and a long-term vision to build solutions that help businesses grow with clarity and confidence."
          }
        >
          <PeopleGrid people={founders} variant="profiles" />
        </TitledSection>
      )}

      {!hidden.has("leaders") && (
        <TitledSection
          eyebrow="Leadership"
          heading={content?.leadersHeading || "Meet Our Leadership Team"}
          tagline={content?.leadersSubheading || "The People Driving Strategy, Growth & Execution"}
          text={
            content?.leadersParagraph ||
            "Our leadership team brings together expertise across digital marketing, technology, business strategy, and operations. They stay closely involved in the work, guide our teams, and help turn business objectives into focused strategies and effective digital solutions."
          }
        >
          {/* LinkedIn only on the founders, as before */}
          <PeopleGrid people={leaders.map(({ linkedin, ...l }) => l)} />
        </TitledSection>
      )}

      {!hidden.has("teamGroups") && (
        <CultureRows id="meet-our-team" eyebrow="Our teams" heading={content?.teamGroupsHeading || "Meet Our Team"} rows={teamGroups} />
      )}

      {(showSpecialties || showWhyItWorks) && (
        <BeamsBlock>
          {showSpecialties && (
            <WhoItsFor
              eyebrow={content?.specialtiesSubheading || "One Team. Multiple Specialities."}
              heading={content?.specialtiesHeading || "What Each Team Brings"}
              items={specialties}
              className=""
            />
          )}
          {showWhyItWorks && <WhyTrust eyebrow="How we work together" heading={content?.whyItWorksHeading || "Why It Works Together"} items={whyItWorks} />}
        </BeamsBlock>
      )}

      {/* Contact — same working form as the Contact page, with its own
          page-scoped heading/copy overrides. */}
      {!hidden.has("teamContact") && (
        <ContactSection
          content={{
            contactHeroHeading: content?.teamContactHeading,
            contactHeroParagraph: content?.teamContactParagraph,
            contactFormHeading: content?.teamContactFormHeading,
            contactFormButtonText: content?.teamContactFormButtonText,
            contactSteps: content?.teamContactSteps,
          }}
        />
      )}

      {!hidden.has("teamCta") && (
        <DetailCta heading={ctaHeading} text={ctaParagraph} primaryText={ctaPrimaryText} secondaryText={ctaSecondaryText} secondaryHref="/career" />
      )}
    </div>
  );
}
