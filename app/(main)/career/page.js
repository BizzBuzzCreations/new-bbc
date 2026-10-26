import { Briefcase } from "lucide-react";
import { getAllJobs } from "@/actions/serverActions";
import PageHero from "@/components/detail/pageHero";
import HeroSlideshow from "@/components/detail/heroSlideshow";
import LocalityBlock from "@/components/detail/localityBlock";
import TitledSection from "@/components/detail/titledSection";
import PhotoFeatures from "@/components/detail/photoFeatures";
import PhotoMosaic from "@/components/detail/photoMosaic";
import CtaV2 from "@/components/home/ctaV2";
import { getPageContent } from "@/actions/pageContentActions";
import JobCard from "@/components/ui/jobCard";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

// The hero's photos until others are saved (real team / office photos).
const HERO_SLIDES = ["/team-images/team-5.jpeg", "/team-images/team-13.jpeg", "/team-images/team-8.jpeg", "/team-images/team-2.jpeg"];

const DEFAULT_JOIN_TEAM_POINTS = [
  { title: "Learn by Doing", desc: "Work on real campaigns and business challenges." },
  { title: "Take Ownership", desc: "Bring ideas forward and take responsibility for your work." },
  { title: "Keep Growing", desc: "Develop skills through hands-on experience and collaboration." },
];

export async function generateMetadata() {
  return buildPageMetadata("career", {
  title: "Digital Marketing Jobs & Internships | BizzBuzz Creations",
  description:
    "Join BizzBuzz Creations and build your career in SEO, Meta Ads, content marketing & branding. Explore digital marketing jobs and internship opportunities today.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/career",
  },
});
}

export default async function Career() {
  const getDaysSincePosted = (createdAt) => {
    const createdDate = new Date(createdAt);
    const today = new Date();
    const diffTime = today - createdDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const content = await getPageContent("career");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);
  const openPositionsHeading = content?.openPositionsHeading || "Open Positions";

  const response = await getAllJobs();
  const jobsData = response?.success ? response?.data : [];

  const heroSlides = content?.careerHeroSlides?.length > 0 ? content.careerHeroSlides.map((s) => s.image) : HERO_SLIDES;
  const joinPoints = content?.careerJoinPoints?.length > 0 ? content.careerJoinPoints : DEFAULT_JOIN_TEAM_POINTS;
  const joinImages = [
    content?.careerJoinImage1 || "/image-5.webp",
    content?.careerJoinImage2 || "/team-images/team-14.jpeg",
    content?.careerJoinImage3 || "/team-images/team-5.jpeg",
    content?.careerJoinImage4 || "/team-images/team-11.jpeg",
  ].map((src) => ({ src }));

  // Redesign, in the homepage's style: hero (photo slideshow) → why work
  // here → open positions → grow beyond your job description → closing CTA.
  // Same dashboard fields and "Remove section" switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="career" />
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("careerHero") && (
        <PageHero
          label="Careers"
          title={content?.careerHeroHeading || "Work Where Your Ideas Matter"}
          tagline={content?.careerHeroSubheading || "Learn by Doing. Grow by Owning."}
          description={
            content?.careerHeroParagraph ||
            "At BizzBuzz Creations, we believe great work comes from trust, ownership, and collaboration. Our flat structure means fewer layers, faster decisions, and more room to turn your ideas into real outcomes."
          }
          actions={[
            { text: content?.careerHeroCtaText || "Apply Now", href: "/contact", variant: "solid" },
            !hidden.has("openPositions") && { text: "See Open Roles", href: "#open-positions" },
          ]}
          media={<HeroSlideshow slides={heroSlides} />}
        />
      )}

      {!hidden.has("careerWhyUs") && (
        <LocalityBlock
          eyebrow="Life at BizzBuzz"
          heading={content?.careerWhyUsHeading || "Roots in Prayagraj, India. An International Outlook."}
          text={
            content?.careerWhyUsParagraph ||
            "We're a growing agency with roots in Prayagraj, India, and clients across the world. From day one, you'll work on real challenges across digital marketing, technology, design, and strategy — building practical skills instead of simply following a checklist. We value people who stay curious, take initiative, share ideas, and want to keep getting better. Your growth matters here, because when our people grow, BizzBuzz Creations grows too."
          }
          image={content?.careerWhyUsImage || "/team-images/team-5.jpeg"}
          alt="Inside the BizzBuzz Creations office"
        />
      )}

      {!hidden.has("openPositions") && (
        <TitledSection
          id="open-positions"
          eyebrow="Join us"
          heading={openPositionsHeading}
          text={
            jobsData.length > 0
              ? `${jobsData.length} role${jobsData.length === 1 ? "" : "s"} currently open`
              : "No open roles right now — check back soon"
          }
        >
          {jobsData.length === 0 ? (
            <div className="flex flex-col items-start gap-4 border-y border-white/10 py-10 sm:flex-row sm:items-center">
              <Briefcase className="shrink-0 text-[#40A2D8]" size={28} aria-hidden="true" />
              <p className="text-base text-white/80">
                We don&rsquo;t have any open positions posted at the moment. Check back soon, or reach out through our{" "}
                <a href="/contact" className="text-[#40A2D8] underline underline-offset-2 hover:text-white">
                  contact page
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="border-t border-white/10">
              {jobsData.map((job, i) => (
                <JobCard key={i} job={job} days={getDaysSincePosted(job.createdAt)} />
              ))}
            </div>
          )}
        </TitledSection>
      )}

      {!hidden.has("careerJoinTeam") && (
        <PhotoFeatures
          eyebrow="Grow with us"
          heading={content?.careerJoinHeading || "Grow Beyond Your Job Description"}
          tagline={content?.careerJoinTagline || "Your role here is a starting point, not a ceiling."}
          text={
            content?.careerJoinParagraph ||
            "At BizzBuzz Creations, growth isn't limited to a job title. You'll have opportunities to explore new skills, work across disciplines, take on responsibility, and discover where your strengths can take you."
          }
          media={<PhotoMosaic images={joinImages} cols={2} />}
          features={joinPoints.map(({ title, desc }) => ({ title, description: desc }))}
          action={{ text: content?.careerJoinCtaText || "Apply Now", href: hidden.has("openPositions") ? "/contact" : "#open-positions" }}
        />
      )}

      {!hidden.has("cta") && <CtaV2 content={content} />}
    </div>
  );
}

// ISR — jobs add/edit/delete already call revalidatePath("/career").
export const revalidate = 60;
