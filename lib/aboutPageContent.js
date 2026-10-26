// /about's built-in content: what each section shows until something is
// saved for it in the dashboard (same values as before the redesign).

// The hero's photo mosaic (team and office photos).
export const ABOUT_HERO_IMAGES = [
  { id: 1, src: "/team-images/team-11.jpeg" },
  { id: 2, src: "/team-images/team-6.jpeg" },
  { id: 3, src: "/team-images/team-1.jpeg" },
  { id: 4, src: "/image-3.jpg" },
  { id: 5, src: "/image-5.webp" },
  { id: 6, src: "/image-9.jpg" },
  { id: 7, src: "/team-images/team-12.jpeg" },
  { id: 8, src: "/team-images/team-7.jpeg" },
  { id: 9, src: "/team-images/team-14.jpeg" },
];

// Our Journey, 2022 to 2026. Deliberately general: it reuses only facts
// established elsewhere on the site (90+ projects, 50+ clients, real
// certifications) rather than invented per-year numbers or awards.
export const ABOUT_JOURNEY_YEARS = [
  {
    year: "2022",
    title: "Building the Foundation",
    body: "We began our journey with a focus on digital marketing, creative branding, and online business growth, helping brands establish a stronger and more meaningful digital presence.",
    img: "/team-images/team-2.jpeg",
  },
  {
    year: "2023",
    title: "Expanding Digital Expertise",
    body: "We continued developing our expertise in SEO, social media marketing, content marketing, website solutions, and digital branding to create stronger online experiences for growing businesses.",
    img: "/image-5.webp",
  },
  {
    year: "2024",
    title: "Strengthening Our Approach",
    body: "Our focus evolved toward result-driven digital marketing strategies, combining SEO, content, social media, branding, and web solutions to help businesses build visibility and connect with their audiences.",
    img: "/team-images/team-13.jpeg",
  },
  {
    year: "2025",
    title: "Growing Digital Possibilities",
    body: "We continued refining our digital marketing and SEO strategies, focusing on stronger brand visibility, engaging content, effective online campaigns, and sustainable digital growth across different business needs.",
    img: "/image-6.jpg",
  },
  {
    year: "2026",
    title: "Where We Are Today",
    body: "Today, we continue building smarter digital marketing, SEO, branding, content, social media, and web strategies, helping businesses strengthen their online presence and grow with confidence.",
    img: "/team-images/team-5.jpeg",
  },
];

// What makes us different.
export const ABOUT_DIFFERENTIATORS = [
  {
    title: "Data Over Guesswork",
    desc: `Every decision is backed by real performance data, not assumptions or industry "best guesses."`,
  },
  {
    title: "AI & Search-Ready Strategy",
    desc: "We optimize for how India searches today — voice assistants, AI tools, and answer engines, not just Google.",
  },
  {
    title: "Full-Funnel Marketing",
    desc: "From brand awareness to final conversion, we manage the entire customer journey under one roof.",
  },
  {
    title: "Custom Roadmaps, Not Templates",
    desc: "Every client gets a strategy built around their industry, competitors, and specific business goals.",
  },
  {
    title: "Radical Transparency",
    desc: "Live performance dashboards, not vague monthly summaries — you see exactly where your budget goes.",
  },
  {
    title: "Proven Delivery",
    desc: "90+ projects and 50+ clients trust us to turn strategy into measurable, repeatable growth.",
  },
];

// Culture: real BizzBuzz facts and real office/team photos (no stock
// photography).
export const ABOUT_CULTURE_ROWS = [
  {
    title: "We Build With Real Ownership",
    body: "At BizzBuzz Creations, clear communication and accountability drive everything we do. Our digital marketing team in Prayagraj takes ownership from strategy to execution, turning ideas into marketing that creates real business impact.",
    img: "/team-images/team-13.jpeg",
  },
  {
    title: "We Work As One Team",
    body: "Our teams work together across strategy, design, technology, SEO, and digital marketing. Based in Prayagraj, India, with an international outlook, we bring different skills together to build smarter digital solutions for businesses.",
    img: "/team-images/team-12.jpeg",
  },
  {
    title: "We Grow Together",
    body: "We believe great work comes from continuous learning and shared growth. Our team works on real campaigns, explores new digital strategies, and keeps developing the skills needed to deliver better marketing results for businesses in India and worldwide.",
    img: "/team-images/team-7.jpeg",
  },
];

// Real certifications/partnerships only — no invented awards or years. Each
// badge and line can be replaced in the dashboard (clutchBadgeImage /
// clutchTitle, …).
export const ABOUT_RECOGNITIONS = [
  {
    org: "Clutch",
    status: "Verified Partner",
    title: "Listed among trusted digital marketing agencies on Clutch",
    badge: "/clutch.png",
    alt: "Clutch Partner",
  },
  {
    org: "Google Partner",
    status: "Certified",
    title: "Certified Google Ads & Marketing Partner",
    badge: "/CDL.png",
    alt: "Google Partner",
  },
  {
    org: "Google Analytics",
    status: "Certified",
    title: "Certified Google Analytics Partner",
    badge: "/GA.png",
    alt: "Google Analytics Partner",
  },
  {
    org: "ISO",
    status: "Certified",
    title: "Quality-certified business processes",
    badge: "/iso.png",
    alt: "ISO Certified",
  },
];

// Why businesses choose us.
export const ABOUT_TRUST_ITEMS = [
  { title: "Proven Track Record", desc: "90+ projects delivered across India with real, measurable business outcomes." },
  { title: "Future-Focused SEO", desc: "We optimize for traditional search, AI search, and voice assistants — all at once." },
  { title: "End-to-End Services", desc: "SEO, paid ads, content, social, and web design — everything under one roof." },
  { title: "Honest Partnerships", desc: "No inflated promises, just clear strategy, consistent effort, and steady growth." },
  { title: "Dedicated Account Support", desc: "You get a real team that knows your brand, not a ticket number." },
  { title: "Growing Client Base", desc: "50+ businesses across India already trust us with their growth." },
];

// Why businesses continue working with us.
export const ABOUT_WHY_CHOOSE_FEATURES = [
  { title: "Transparent Reporting", description: "Know exactly where your marketing budget is invested with detailed reports and actionable insights." },
  { title: "Dedicated Marketing Experts", description: "Our team continuously monitors industry trends, and emerging technologies to keep your business ahead of competitors." },
  { title: "Data-Driven Decision Making", description: "Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions." },
  { title: "Long-Term Partnership", description: "We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth." },
];

// About page FAQs.
export const ABOUT_FAQS = [
  {
    question: "Who is BizzBuzz Creations?",
    answer:
      "BizzBuzz Creations is a digital marketing agency based in Prayagraj (Allahabad), India, helping businesses grow through SEO, digital marketing, paid advertising, social media, web development, and digital strategy.",
  },
  {
    question: "Where is BizzBuzz Creations based?",
    answer:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, India, and works with businesses across India as well as clients in international markets, including the UK and US.",
  },
  {
    question: "What digital marketing services does BizzBuzz Creations offer?",
    answer:
      "BizzBuzz Creations provides SEO, digital marketing, social media marketing, paid advertising, content marketing, web design and development, and digital strategy. Services can be combined based on your business goals.",
  },
  {
    question: "Does BizzBuzz Creations work with businesses outside Prayagraj?",
    answer:
      "Yes. While we work with businesses in Prayagraj and across India, we also help businesses in international markets build their online presence, generate leads, and achieve sustainable digital growth.",
  },
  {
    question: "Why choose BizzBuzz Creations as your digital marketing agency?",
    answer:
      "We focus on strategy before campaigns, measurable growth over vanity metrics, and long-term digital performance. Every strategy is tailored to the business, audience, competition, and goals rather than using a one-size-fits-all approach.",
  },
  {
    question: "How can I get started with BizzBuzz Creations?",
    answer:
      "Contact our team to discuss your business, current digital presence, and growth goals. We'll identify the right opportunities and help you build a practical digital marketing strategy designed around your business.",
  },
];
