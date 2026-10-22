// The "Why Our Way of Working Is Different" cards (statCards) — the
// built-in defaults and the saved-content resolver. Plain data (no
// "use client"), so both the old StatsShowcase (a client component) and the
// redesigned server-rendered WhyUsV2 (components/home/whyUsV2.js) use it.
export const STATS = [
  {
    tag: "Why It's Different",
    value: "01.",
    label: "One Team, Multiple Capabilities",
    description:
      "Get SEO, Google Ads, social media marketing, web development, AI, automation, and BPO support from one connected digital team.",
    visual: {
      type: "image",
      src: "/oneteam-multiplecapabilities.jpg",
      alt: "One team, multiple capabilities",
    },
  },
  {
    tag: "Why It's Different",
    value: "02.",
    label: "Solutions Built Around You",
    description:
      "We consider your industry, audience, market, and business needs to recommend digital solutions that fit your objectives.",
    visual: {
      type: "image",
      src: "/solutionbuilt-aroundus.jpg",
      alt: "Solutions built around you",
    },
  },
  {
    tag: "Why It's Different",
    value: "03.",
    label: "Clear From Day One",
    description:
      "Know what's included, what we're working on, and what to expect through straightforward communication and practical recommendations.",
    visual: {
      type: "image",
      src: "/clearfrom-dayone.jpg",
      alt: "Clear from day one",
    },
  },
  {
    tag: "Why It's Different",
    value: "04.",
    label: "Built to Adapt With You",
    description:
      "Start with the services you need today and expand into SEO, advertising, technology, automation, or business support as your needs evolve.",
    visual: {
      type: "image",
      src: "/builtto-adaptwithyou.jpg",
      alt: "Built to adapt with you",
    },
  },
];

// The dashboard's card list drives the cards — adding or removing a card
// there adds/removes it here (it used to always show exactly the 4
// built-in cards and ignore any beyond them). A card with no uploaded
// image falls back to one of the built-in photos, by position. Shared with
// the redesigned location pages (components/home/whyUsV2.js).
export function resolveStatCards(content) {
  const saved = content?.statCards;
  return saved?.length > 0
    ? saved.map((card, i) => {
        const base = STATS[i % STATS.length];
        const { image, ...text } = card;
        return {
          ...base,
          ...text,
          visual: image ? { type: "image", src: image, alt: text.label || base.label } : base.visual,
        };
      })
    : STATS;
}
