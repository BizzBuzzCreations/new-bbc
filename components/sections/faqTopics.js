"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Search,
  Megaphone,
  Share2,
  Globe,
  Cpu,
  FileText,
  Headset,
  Briefcase,
  Handshake,
} from "lucide-react";
import { FAQSection } from "@/components/ui/faq-accordion";

// Real, BizzBuzz-specific answers — reusing facts already established
// elsewhere on the site (free consultation flow on /contact, the
// 90+ projects / 50+ clients figure from AboutFAQ, the real Clutch/Google
// Ads/Google Analytics/ISO badges from Recognitions, the India + UK
// offices) rather than inventing anything new.
// Icons stay code-driven (design), matched positionally to whichever
// topics are saved — a topic's id/icon aren't editable, only its label,
// description, and questions.
const TOPIC_ICONS = [
  Building2,
  Search,
  Megaphone,
  Share2,
  Globe,
  Cpu,
  FileText,
  Headset,
  Briefcase,
  Handshake,
];
const TOPIC_IDS = [
  "about",
  "seo",
  "paid-ads",
  "social-media",
  "web-development",
  "ai-automation",
  "content-marketing",
  "crm-bpo",
  "consultancy",
  "working-with-us",
];

const DEFAULT_TOPICS = [
  {
    id: "about",
    label: "About BizzBuzz Creations",
    icon: Building2,
    description: "Who we are, where we work, and how we work with clients.",
    faqs: [
      {
        question: "What does BizzBuzz Creations do?",
        answer:
          "BizzBuzz Creations is a full-stack digital marketing and business solutions agency offering SEO, Google Ads, social media marketing, website development, AI automation, and business consultancy under one team, serving clients in India and worldwide.",
      },
      {
        question: "Does BizzBuzz Creations work with international clients?",
        answer:
          "Yes, BizzBuzz Creations works with businesses across India and internationally, using the same team, process, and communication standards regardless of location.",
      },
      {
        question: "Can I hire BizzBuzz Creations for just one service?",
        answer:
          "Yes, you can start with a single service such as SEO, Google Ads, or web development, and add more services later as your business needs grow; nothing is bundled or forced.",
      },
      {
        question: "How much does digital marketing cost with BizzBuzz Creations?",
        answer:
          "Pricing depends on the services and scope required. Every engagement starts with a free consultation so you receive a clear quote before committing to anything.",
      },
      {
        question: "How do I get started with BizzBuzz Creations?",
        answer:
          "Book a free consultation. The team reviews your business, current online presence, and goals, then recommends a starting point with no obligation.",
      },
      {
        question: "What makes BizzBuzz Creations different from other agencies?",
        answer:
          "BizzBuzz Creations offers one team, one point of contact, and full ownership of your accounts and data — avoiding vendor lock-in or juggling multiple agencies for one strategy.",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO FAQs",
    icon: Search,
    description: "Rankings, local search, and how SEO fits with AI search.",
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO typically takes 3 to 6 months to show measurable ranking and traffic improvements, depending on competition, website history, and consistency of execution.",
      },
      {
        question: "What is local SEO and do I need it?",
        answer:
          "Local SEO helps businesses rank in location-based searches like \"near me\" queries. It's essential for businesses serving a specific city or region alongside national or global reach.",
      },
      {
        question: "Does SEO still work with AI search and Google AI Overviews?",
        answer:
          "Yes. SEO remains essential — AI Overviews pull from well-structured, authoritative web content, so strong technical SEO and content quality directly influence AI search visibility.",
      },
      {
        question: "What's the difference between SEO and Google Ads?",
        answer:
          "SEO builds long-term organic visibility without ongoing ad spend, while Google Ads delivers immediate visibility through paid placements. Most businesses benefit from combining both.",
      },
      {
        question: "How much does SEO cost in India?",
        answer:
          "SEO pricing varies based on website size, competition, and goals. BizzBuzz Creations provides a custom quote after a free audit rather than fixed package pricing.",
      },
      {
        question: "Can SEO help a business rank internationally, not just in India?",
        answer:
          "Yes. International SEO involves targeting specific countries or regions through content, technical setup, and local relevance signals tailored to each target market.",
      },
    ],
  },
  {
    id: "paid-ads",
    label: "Google Ads & Paid Advertising FAQs",
    icon: Megaphone,
    description: "Budgets, timelines, and getting paid campaigns to convert.",
    faqs: [
      {
        question: "How much budget do I need to start Google Ads?",
        answer:
          "Google Ads budgets vary by industry and competition, but most businesses see meaningful data within a monthly spend that allows at least 15 to 20 conversions to gather performance insights.",
      },
      {
        question: "How fast do Google Ads generate leads?",
        answer:
          "Google Ads can generate leads within days of launching, unlike SEO, which takes months — making it effective for immediate visibility and lead flow.",
      },
      {
        question: "What's the difference between Google Ads and Meta Ads?",
        answer:
          "Google Ads target active search intent (people actively searching), while Meta Ads target audiences based on interests and behavior — both serve different stages of the buyer journey.",
      },
      {
        question: "Why isn't my Google Ads campaign converting?",
        answer:
          "Common causes include poor audience targeting, weak landing pages, incorrect keyword match types, or insufficient conversion tracking setup.",
      },
      {
        question: "Do I need a separate landing page for Google Ads?",
        answer:
          "Yes. A dedicated, conversion-focused landing page typically performs significantly better than sending ad traffic to a general homepage.",
      },
      {
        question: "Can Google Ads work for international or global campaigns?",
        answer:
          "Yes. Google Ads campaigns can be geo-targeted to specific countries, regions, or worldwide audiences, with budgets and bidding adjusted per market.",
      },
    ],
  },
  {
    id: "social-media",
    label: "Social Media Marketing FAQs",
    icon: Share2,
    description: "Platforms, posting frequency, and measuring what matters.",
    faqs: [
      {
        question: "Which social media platform is best for business growth?",
        answer:
          "The best platform depends on your audience and industry. Instagram and YouTube Shorts work well for visual/consumer brands, while LinkedIn suits B2B businesses.",
      },
      {
        question: "How often should a business post on social media?",
        answer:
          "Most businesses see steady engagement posting 3 to 5 times per week, prioritizing consistency and content quality over frequency alone.",
      },
      {
        question: "Does social media marketing help with SEO?",
        answer:
          "Social media doesn't directly impact search rankings, but it increases brand visibility, traffic, and content distribution — indirect signals that support SEO efforts.",
      },
      {
        question: "What is social commerce, and why does it matter?",
        answer:
          "Social commerce refers to selling products directly through social platforms like Instagram and Facebook Shops, reducing friction between discovery and purchase.",
      },
      {
        question: "How do you measure social media marketing success?",
        answer:
          "Success is measured through engagement rate, follower growth, website traffic from social channels, and conversions — not just likes or follower count.",
      },
      {
        question: "Can social media marketing work for global audiences?",
        answer:
          "Yes. Campaigns can be tailored by language, region, and platform preference to reach both local and international audiences effectively.",
      },
    ],
  },
  {
    id: "web-development",
    label: "Website Development FAQs",
    icon: Globe,
    description: "Speed, timelines, and choosing the right platform.",
    faqs: [
      {
        question: "Why does website speed matter for conversions?",
        answer:
          "A slow website increases bounce rates and lowers conversions; even a 1-second delay in load time can significantly reduce user engagement and sales.",
      },
      {
        question: "How long does it take to build a business website?",
        answer:
          "A standard business website typically takes 2 to 6 weeks to design, develop, and launch, depending on complexity and content readiness.",
      },
      {
        question: "Do I need a custom website or is a template enough?",
        answer:
          "Templates work for simple sites, but custom development offers better performance, scalability, and brand differentiation for growing businesses.",
      },
      {
        question: "Is my website's mobile-friendliness important for SEO?",
        answer:
          "Yes. Google uses mobile-first indexing, meaning your site's mobile version directly affects search rankings, not just the desktop version.",
      },
      {
        question: "What platform is best for building a business website?",
        answer:
          "The right platform depends on business needs — WordPress suits content-heavy sites, Shopify suits e-commerce, and custom-coded sites suit unique functionality requirements.",
      },
      {
        question: "Can a website be built for both local and global audiences?",
        answer:
          "Yes. Multi-region websites use geo-targeting, localized content, and technical setup like hreflang tags to serve both local and international visitors effectively.",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation FAQs",
    icon: Cpu,
    description: "Chatbots, workflow automation, and where AI actually helps.",
    faqs: [
      {
        question: "What is AI search optimization?",
        answer:
          "AI search optimization improves how a business appears in AI-powered search results and tools like Google AI Overviews, ChatGPT, and Perplexity, alongside traditional SEO.",
      },
      {
        question: "How do AI chatbots help a business?",
        answer:
          "AI chatbots automate conversations, answer common questions, qualify leads, and provide 24/7 customer support without increasing staffing costs.",
      },
      {
        question: "What is marketing automation and how does it help?",
        answer:
          "Marketing automation uses software to handle repetitive tasks like email sequences, lead follow-ups, and workflows, saving time and improving response consistency.",
      },
      {
        question: "Can AI replace a full marketing team?",
        answer:
          "No. AI tools improve efficiency and speed but work best alongside human strategy, creativity, and oversight rather than replacing a team entirely.",
      },
      {
        question: "Is AI automation expensive to implement?",
        answer:
          "Costs vary based on complexity — simple chatbot or workflow automation is relatively affordable, while custom AI systems require larger investment.",
      },
      {
        question: "How is BizzBuzz Creations different in AI implementation?",
        answer:
          "BizzBuzz Creations builds and runs its own in-house AI voice calling system and automation tools in production — not just theoretical recommendations.",
      },
    ],
  },
  {
    id: "content-marketing",
    label: "Content Marketing FAQs",
    icon: FileText,
    description: "Blogging cadence, strategy, and content built for AI search.",
    faqs: [
      {
        question: "What is content marketing and how does it help a business?",
        answer:
          "Content marketing involves creating valuable content — blogs, guides, videos — that attracts, educates, and converts potential customers, while also improving SEO visibility.",
      },
      {
        question: "How often should a business publish blog content?",
        answer:
          "Most businesses benefit from publishing 2 to 4 quality blog posts per month, prioritizing depth and search intent over frequency alone.",
      },
      {
        question: "Does content marketing work faster than SEO?",
        answer:
          "Content marketing supports SEO rather than replacing it — results typically build over months as content gains authority, backlinks, and search rankings.",
      },
      {
        question: "What type of content ranks best in AI search results?",
        answer:
          "Clear, well-structured content that directly answers specific questions using headers, concise answers, and factual accuracy performs best in AI-powered search results.",
      },
      {
        question: "Can one piece of content target multiple keywords?",
        answer:
          "Yes. A well-structured page can rank for multiple related keywords if it comprehensively covers a topic without keyword stuffing.",
      },
      {
        question: "Do I need a content strategy or just occasional blog posts?",
        answer:
          "A structured content strategy — mapped to customer journey stages and search intent — consistently outperforms random, unplanned blog posting.",
      },
    ],
  },
  {
    id: "crm-bpo",
    label: "CRM, BPO & Call Center Solutions FAQs",
    icon: Headset,
    description: "Custom CRMs, outbound calling, and call center automation.",
    faqs: [
      {
        question: "What is a CRM and why does a call center need one?",
        answer:
          "A CRM (Customer Relationship Management) system organizes leads, tracks agent workflows, and centralizes reporting, helping call centers manage customer interactions efficiently.",
      },
      {
        question: "Can BizzBuzz Creations build a custom CRM for my business?",
        answer:
          "Yes. BizzBuzz Creations builds and operates its own custom CRM for BPO and call center teams, and offers similar custom-built systems for client businesses.",
      },
      {
        question: "What's the difference between a generic CRM and a custom-built one?",
        answer:
          "Generic CRMs offer standard features for broad use cases, while a custom CRM is built around a business's specific workflows, reducing unnecessary complexity.",
      },
      {
        question: "Does BizzBuzz Creations support outbound calling operations?",
        answer:
          "Yes. BizzBuzz Creations has in-house experience running outbound calling operations, including debt casework and lead qualification workflows.",
      },
      {
        question: "What is WhatsApp and workflow automation used for in a call center?",
        answer:
          "It automates lead outreach, follow-ups, and customer communication through connected workflows, reducing manual work for sales and support teams.",
      },
      {
        question: "Is a custom CRM expensive to build and maintain?",
        answer:
          "Costs depend on complexity and required integrations. A phased build — starting with core features and expanding later — keeps initial investment manageable.",
      },
    ],
  },
  {
    id: "consultancy",
    label: "Business Consultancy FAQs",
    icon: Briefcase,
    description: "Strategy, prioritization, and where consultancy fits in.",
    faqs: [
      {
        question: "What does a digital business consultant actually do?",
        answer:
          "A digital business consultant reviews your current operations, market position, and growth goals, then recommends a practical roadmap combining strategy, technology, and marketing.",
      },
      {
        question: "Do I need consultancy if I already have a marketing team?",
        answer:
          "Consultancy can complement an existing team by identifying gaps, aligning strategy across departments, and recommending tools or processes the team may not have considered.",
      },
      {
        question: "How is business consultancy different from hiring an agency?",
        answer:
          "Consultancy focuses on strategy and planning, while an agency typically executes campaigns — many businesses benefit from combining both under one team.",
      },
      {
        question: "Can a consultant help decide which digital services to prioritize?",
        answer:
          "Yes. A consultant assesses your budget, goals, and current gaps to recommend which services — SEO, ads, automation, or website — deliver the fastest impact.",
      },
      {
        question: "Is business consultancy only for large companies?",
        answer:
          "No. Small and mid-sized businesses often benefit most from consultancy, since it helps prioritize limited budgets toward the highest-impact actions.",
      },
      {
        question: "How long does a typical consultancy engagement last?",
        answer:
          "It varies — some businesses need a one-time strategic roadmap, while others prefer ongoing advisory support as their operations scale.",
      },
    ],
  },
  {
    id: "working-with-us",
    label: "Working With BizzBuzz Creations",
    icon: Handshake,
    description: "Contracts, reporting, ownership, and switching services.",
    faqs: [
      {
        question: "Does BizzBuzz Creations offer month-to-month contracts?",
        answer:
          "Engagement terms depend on the service and scope discussed during the free consultation — flexibility is assessed case by case rather than fixed upfront.",
      },
      {
        question: "Will I have one point of contact or multiple account managers?",
        answer:
          "BizzBuzz Creations assigns one connected team and point of contact per client, avoiding the fragmentation of juggling multiple vendors.",
      },
      {
        question: "How does BizzBuzz Creations report on campaign performance?",
        answer:
          "Clients receive clear monthly reports covering key metrics, along with ongoing optimization based on real performance data rather than vanity metrics.",
      },
      {
        question: "Who owns my website, ad accounts, and data?",
        answer:
          "Clients retain full ownership of their accounts, website, and data at all times — there is no vendor lock-in.",
      },
      {
        question: "Can I switch services later if my business needs change?",
        answer:
          "Yes. Services can be added, adjusted, or scaled as business needs evolve — nothing is locked into a rigid, fixed package.",
      },
      {
        question: "Does BizzBuzz Creations work with businesses outside India?",
        answer:
          "Yes. BizzBuzz Creations works with international clients using the same team, tools, and communication process as domestic clients.",
      },
    ],
  },
];

// A blue-tinted hover instead of the accordion's default gray, just for
// this page's questions.
const TRIGGER_HOVER =
  "hover:bg-[#eaf4fb] hover:border-[#40A2D8]/40";

const SCROLL_SPY_OFFSET = 140; // px from the top of the viewport

export default function FaqTopics({ content } = {}) {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  // Topic overrides come from the dashboard positionally (icon/id stay
  // code-driven); a topic missing real questions falls back to its own
  // default set rather than rendering with no FAQs at all.
  const overrides = content?.faqTopics;
  const TOPICS =
    overrides?.length > 0
      ? overrides.map((t, i) => ({
          id: TOPIC_IDS[i % TOPIC_IDS.length],
          icon: TOPIC_ICONS[i % TOPIC_ICONS.length],
          label: t.label || DEFAULT_TOPICS[i]?.label,
          description: t.description || DEFAULT_TOPICS[i]?.description,
          faqs: t.faqs?.length > 0 ? t.faqs : DEFAULT_TOPICS[i]?.faqs,
        }))
      : DEFAULT_TOPICS;

  // Scroll-spy: every topic's FAQs are on the page at once (stacked), and
  // the sidebar highlights whichever one the user has scrolled past —
  // walking down the list one topic at a time as they scroll, rather than
  // only reacting to clicks. Driven directly by scroll position (not
  // IntersectionObserver) so it stays accurate even with tall cards.
  useEffect(() => {
    let ticking = false;

    const updateActive = () => {
      let current = 0;
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;
        if (el.getBoundingClientRect().top - SCROLL_SPY_OFFSET <= 0) {
          current = i;
        }
      }
      setActive(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTopic = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-black">
      <div
        data-no-reveal
        className="max-w-7xl mx-auto grid lg:grid-cols-[300px_1fr] lg:gap-6 px-4 md:px-6 pt-8 pb-6 md:pt-28 md:pb-16"
      >
        {/* TOC sidebar — stays put (sticky) while the page scrolls; only
            the active highlight moves between topics via scroll-spy.
            min-w-0: without it, a CSS Grid item won't shrink below its
            content's intrinsic width by default — since the pill row
            below is an unwrapped horizontal scroller, that was forcing
            this whole grid (and the page along with it) wider than the
            viewport on mobile instead of letting overflow-x-auto scroll
            internally. */}
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start bg-black px-2 md:px-4 py-2 lg:py-0">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6 px-2">
          </p>
          {/* Mobile: smaller, snap-scrolling pills — the full-size desktop
              pills (icon + full label, generous padding) only fit about
              1.5 on screen at once on a phone, making the other 9 topics
              hard to discover. Scroll-snap makes each swipe land cleanly
              on the next pill instead of stopping mid-pill. */}
          <div className="flex lg:flex-col gap-1.5 lg:gap-2 overflow-x-auto snap-x snap-mandatory lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
            {TOPICS.map((t, i) => {
              const Icon = t.icon;
              const isActive = active === i;
              return (
                <button
                  key={t.id}
                  onClick={() => scrollToTopic(i)}
                  className={`group snap-start shrink-0 flex items-center gap-2 lg:gap-3 text-left pl-3 pr-3.5 lg:pl-4 lg:pr-4 py-2.5 lg:py-3.5 rounded-xl text-xs lg:text-sm font-medium whitespace-nowrap lg:whitespace-normal transition-all duration-300 border ${
                    isActive
                      ? "bg-[#0B60B0] text-white border-[#40A2D8] shadow-lg shadow-[#0B60B0]/30"
                      : "text-white/60 border-transparent hover:text-white hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <span
                    className={`shrink-0 flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 rounded-lg transition-colors ${
                      isActive
                        ? "bg-white/15"
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon size={15} />
                  </span>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* All topics, stacked — no shared wrapper background anymore;
            each topic is just its own card floating directly on the
            section's black backdrop. */}
        <div className="relative min-w-0 px-2 md:px-4 py-6 md:py-16 space-y-6 md:space-y-16">
          {TOPICS.map((topic, i) => (
            <motion.div
              key={topic.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              data-index={i}
              id={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative scroll-mt-28 bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-10"
            >
              <FAQSection
                heading={topic.label}
                faqs={topic.faqs}
                defaultValue="item-0"
                headingClassName="text-xl md:text-3xl font-bold text-black mb-5 md:mb-8"
                triggerClassName={TRIGGER_HOVER}
                questionTextClassName="text-base md:text-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
