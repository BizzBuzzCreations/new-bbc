import ContactSection from "@/components/sections/contactSection";
import GlobeTrust from "@/components/sections/globeTrust";
import MarketingCTA from "@/components/sections/marketingCTA";
import JoinTeamCTA from "@/components/sections/joinTeamCTA";
import ContactFAQ from "@/components/sections/contactFAQ";
import WavyDivider from "@/components/ui/wavy-divider";
import React from "react";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("contact", {
    title: "Contact BizzBuzz Creations | Free Marketing Consultation",
    description:
      "Need more leads and sales? Contact BizzBuzz Creations for SEO, social media, and website services in Prayagraj. Get a free consultation today.",
    alternates: {
      canonical: "https://bizzbuzzcreations.com/contact",
    },
  });
}

export default async function Contact() {
  const content = await getPageContent("contact");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);

  return (
    <>
      <PageSeoScripts pageKey="contact" />
      {!hidden.has("contactHero") && (
      <>
      <ContactSection content={content} headingLevel="h1" />
      </>
      )}

      {/* Wavy divider — ContactSection and GlobeTrust are both black, so
          without this the two sections just blend into one another. */}
      {!hidden.has("globeTrust") && (
      <>
      <div className="bg-black pt-3 pb-2 md:pt-4 md:pb-3">
        <WavyDivider />
      </div>
      </>
      )}

      {!hidden.has("globeTrust") && (
      <>
      <GlobeTrust content={content} />
      </>
      )}

      {!hidden.has("marketingCTA") && (
      <>
      <MarketingCTA content={content} />
      </>
      )}

      {/* FAQs — sits between the marketing-services CTA and Join Our Team,
          5 questions specific to reaching out/working with us.
          overflow-hidden keeps ContactFAQ's own bottom margin contained
          inside this box instead of collapsing through it and exposing a
          gap before JoinTeamCTA. */}
      {!hidden.has("contactFaq") && (
      <>
      <div className="relative bg-black pt-16 overflow-hidden">
        <div className="relative z-10">
          <ContactFAQ content={content} />
        </div>
      </div>
      </>
      )}

      {!hidden.has("joinTeam") && (
      <>
      <JoinTeamCTA content={content} />
      </>
      )}
    </>
  );
}

<div></div>;
