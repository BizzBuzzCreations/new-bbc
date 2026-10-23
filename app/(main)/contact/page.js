import ContactSection from "@/components/sections/contactSection";
import GlobeTrust from "@/components/sections/globeTrust";
import MarketingCTA from "@/components/sections/marketingCTA";
import JoinTeamCTA from "@/components/sections/joinTeamCTA";
import FaqV2 from "@/components/home/faqV2";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

// Questions specific to reaching out / working with us.
const CONTACT_FAQS = [
  {
    question: "How can I get started with BizzBuzz Creations?",
    answer:
      "You can get started by filling out our contact form and booking a free consultation. We'll discuss your business goals, challenges, requirements, and the right digital marketing or technology solution for you.",
  },
  {
    question: "Does BizzBuzz Creations provide digital marketing services in Prayagraj?",
    answer:
      "Yes. BizzBuzz Creations is a digital marketing agency serving businesses in Prayagraj, across India, and worldwide, with services including SEO, social media marketing, Google Ads, web design, and web development.",
  },
  {
    question: "What digital marketing services does BizzBuzz Creations offer?",
    answer:
      "We provide SEO, social media marketing, Google Ads, web design, web development, content marketing, and other digital solutions designed to improve online visibility, generate leads, and support business growth.",
  },
  {
    question: "Can BizzBuzz Creations work with businesses outside India?",
    answer:
      "Yes. We work with businesses beyond India and can provide digital marketing, website development, and other digital solutions for brands targeting international markets.",
  },
  {
    question: "How much do digital marketing and web development services cost?",
    answer:
      "The cost depends on your goals, project scope, services required, and target market. Contact us for a free consultation and a customized proposal based on your specific requirements.",
  },
  {
    question: "How quickly can I expect results from digital marketing?",
    answer:
      "The timeline depends on the service and your goals. SEO generally requires consistent effort over time, while paid advertising can generate visibility and leads faster. We create a strategy based on your business objectives and track performance along the way.",
  },
];

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

  // Redesign, in the homepage's style: the form (the page's h1) → the globe
  // with our two offices → wherever you are, we have a path → FAQ → join our
  // team. Same dashboard fields and "Remove section" switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="contact" />
      {!hidden.has("contactHero") && <ContactSection content={content} headingLevel="h1" />}

      {!hidden.has("globeTrust") && <GlobeTrust content={content} />}

      {!hidden.has("marketingCTA") && <MarketingCTA content={content} />}

      {!hidden.has("contactFaq") && (
        <FaqV2
          content={{
            faqEyebrow: content?.contactFaqEyebrow || "Got Questions?",
            faqHeading: content?.contactFaqHeading || "Frequently Asked Questions",
            faqItems: content?.contactFaqItems?.length > 0 ? content.contactFaqItems : CONTACT_FAQS,
          }}
        />
      )}

      {!hidden.has("joinTeam") && <JoinTeamCTA content={content} />}
    </div>
  );
}
