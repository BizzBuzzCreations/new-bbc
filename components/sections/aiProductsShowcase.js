import Image from "next/image";
import {
  PhoneCall,
  CalendarCheck,
  UserRoundCheck,
  Gauge,
  LayoutDashboard,
  PhoneOutgoing,
  BellRing,
  Bot,
} from "lucide-react";
import RichText from "@/components/ui/richText";
import AnimatedButton from "@/components/ui/animatedButton";

// Clio AI and Praxistence side by side in one section — replaces the two
// separate full-width video sections (AiShowcase/ClioShowcase +
// PraxistenceShowcase). Each card keeps everything those sections showed
// (its own heading, paragraph, the four feature points and its button),
// just without the autoplaying background video.
//
// The homepage saves Clio's copy under ai* fields; the UK / Outside
// Location pages use clio* — `clioPrefix` picks which.

// Clio AI features — from its product docs (clio.praxistence.com/docs).
const CLIO_FEATURES = [
  { icon: PhoneCall, title: "AI Voice Agents", description: "Handle inbound and outbound calls end to end, from greeting the caller to qualifying the lead." },
  { icon: CalendarCheck, title: "Meetings Booked Automatically", description: "Book meetings straight into Google Calendar and send follow-up emails through Gmail." },
  { icon: UserRoundCheck, title: "Smart Human Handoff", description: "Escalate to your team the moment a conversation needs a human touch." },
  { icon: Gauge, title: "Live Cost & Team Control", description: "See what every call costs in real time and manage your team with role-based access." },
];

const PRAXISTENCE_FEATURES = [
  { icon: LayoutDashboard, title: "All-in-One CRM", description: "Keep your leads, customers, and conversations together in a single platform instead of scattered tools." },
  { icon: PhoneOutgoing, title: "Built for Calling Teams", description: "A CRM designed around the way calling teams actually work, from the first call to the last follow-up." },
  { icon: BellRing, title: "Never Miss a Follow-Up", description: "Stay on top of every follow-up so no lead is forgotten and every conversation keeps moving." },
  { icon: Bot, title: "Works with Clio AI", description: "Pair Praxistence with Clio, our AI voice agent, to handle calls and follow-ups together." },
];

export const CLIO_IMAGE = "/AI solutions 2.webp";
export const PRAXISTENCE_IMAGE = "/CRM Marketing Automation 2.png";
// Saved as the old video posters but never in /public — the video always
// covered them, so nobody saw the broken image.
const MISSING_IMAGES = new Set(["/aiservice.webp"]);

// Icon stays fixed (structural); title + description come from the saved
// override, matched by position.
function withOverrides(defaults, saved) {
  return defaults.map((feature, i) => (saved?.[i] ? { ...feature, ...saved[i] } : feature));
}

function ProductCard({ heading, paragraph, image, features, buttonText, buttonLink }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      {/* Fixed 16:9 frame + object-cover, so a dashboard image of any shape
          fills it without stretching. Decorative: the heading below says
          what the card is about. */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">{heading}</h2>
        <RichText as="div" text={paragraph} className="text-white space-y-3" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#40A2D8]">
                <Icon size={16} />
              </span>
              <div className="min-w-0">
                <RichText as="h3" text={title} className="block text-sm font-semibold leading-snug break-words" />
                <RichText as="p" text={description} className="block mt-1 text-sm leading-relaxed text-white/80" />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <AnimatedButton href={buttonLink} external={/^https?:\/\//.test(buttonLink)} size="sm">
            {buttonText}
          </AnimatedButton>
        </div>
      </div>
    </article>
  );
}

// The two product cards' content (Clio AI, Praxistence) with dashboard edits
// and image fallbacks applied — shared with the redesigned homepage
// (components/home/buildV2.js).
export function productCards(content, { clioPrefix = "ai", showClio = true, showPraxistence = true } = {}) {
  const c = (key) => content?.[`${clioPrefix}${key}`];
  const usable = (src) => (src && !MISSING_IMAGES.has(src) ? src : "");

  const clioImage = usable(c("PosterImage")) || CLIO_IMAGE;
  let praxistenceImage = usable(content?.praxistencePosterImage) || PRAXISTENCE_IMAGE;
  // Both old posters often point at the same file; give the cards different pictures.
  if (showClio && praxistenceImage === clioImage) praxistenceImage = clioImage === PRAXISTENCE_IMAGE ? CLIO_IMAGE : PRAXISTENCE_IMAGE;

  return [
    showClio && {
      key: "clio",
      heading: c("HeadingMain") || "Meet Clio AI, Your AI Voice Agent",
      paragraph:
        c("Paragraph") ||
        "Clio AI is our intelligent voice agent that answers and makes sales calls for your business. It qualifies leads, books meetings, and hands over to your team when a human is needed, all in natural conversation.",
      image: clioImage,
      features: withOverrides(CLIO_FEATURES, c("Features")),
      buttonText: c("ButtonText") || "Explore Clio AI",
      buttonLink: c("ButtonLink") || "https://clio.praxistence.com/",
    },
    showPraxistence && {
      key: "praxistence",
      heading: content?.praxistenceHeading || "Praxistence: All-in-One CRM for Calling & Follow-Up Teams",
      paragraph:
        content?.praxistenceParagraph ||
        "Praxistence is a CRM platform built for calling and follow-up teams. Manage every lead and conversation in one place, stay on top of follow-ups, and pair it with Clio AI to handle calls automatically.",
      image: praxistenceImage,
      features: withOverrides(PRAXISTENCE_FEATURES, content?.praxistenceFeatures),
      buttonText: content?.praxistenceButtonText || "Explore Praxistence",
      buttonLink: content?.praxistenceButtonLink || "https://praxistence.com/",
    },
  ].filter(Boolean);
}

export default function AiProductsShowcase({ content, clioPrefix = "ai", showClio = true, showPraxistence = true }) {
  const cards = productCards(content, { clioPrefix, showClio, showPraxistence });

  if (!cards.length) return null;

  return (
    <section className="bg-black py-12 md:py-16 px-6 md:px-12">
      <div className={`mx-auto grid gap-6 lg:gap-8 ${cards.length > 1 ? "max-w-6xl md:grid-cols-2" : "max-w-2xl"}`}>
        {cards.map(({ key, ...card }) => (
          <ProductCard key={key} {...card} />
        ))}
      </div>
    </section>
  );
}
