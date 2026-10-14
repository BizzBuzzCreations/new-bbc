// Hand-written question-and-answer bank for BizzBee, covering the questions a
// random website visitor is most likely to ask about the company, its people,
// how it works, careers, industries and resources. Every answer restates
// facts that are published on the public pages (About, Our Team, BPO / R&D
// team, How We Work, Career, FAQ, Industries, Services, Contact, Guides).
//
// Shape: { q, a, url, k }
//   q   — the question as a visitor would ask it
//   a   — the answer (plain text + light markdown, links to real routes only)
//   url — the page the answer comes from
//   k   — extra search words (synonyms, Hinglish) — never shown to anyone
//
// SERVER ONLY (imported by knowledge.js). If the site copy changes, update the
// matching entry here so stored-answer mode stays accurate.

export const SITE_QA = [
  // ---------------------------------------------------------------- Company
  {
    q: "Who is BizzBuzz Creations?",
    a: "BizzBuzz Creations is a digital marketing and business solutions agency based in Prayagraj (Allahabad), India. It helps businesses across India, the UK, the US and beyond grow through SEO, Google Ads, social media marketing, website development, AI solutions, marketing automation, BPO services and business consultancy.",
    url: "/about",
    k: "who are you what is bizzbuzz company agency about overview introduction",
  },
  {
    q: "What does BizzBuzz Creations do?",
    a: "BizzBuzz Creations is a full-service digital growth partner. We offer:\n\n- **SEO** — rankings, local SEO, AI & answer-engine search\n- **Social Media Marketing** — Instagram, Facebook, LinkedIn, reels\n- **Google Ads & Paid Marketing** — leads, ROI campaigns, retargeting\n- **Website Design & Development** — custom, WordPress, Shopify, React/Next.js\n- **BPO & Customer Support** — call center, back office, virtual assistants\n- **AI Solutions** — chatbots, voice agents, workflow automation\n- **Marketing Automation** — CRM, email, WhatsApp, lead nurturing\n- **Business Consultancy** — strategy, growth and startup advisory\n\nAll delivered by one connected in-house team. [See all services](/services)",
    url: "/services",
    k: "what do you do services offered company work kya karti hai",
  },
  {
    q: "How many branches or offices does BizzBuzz Creations have? Where are your offices located?",
    a: "We have **3 branches**:\n\n- **Prayagraj (HQ):** 43/33, Tej Bahdur Sapru Rd, Agnipath Colony, Civil Lines, Prayagraj, UP 211001\n- **Kanpur:** Plot no. 218, Harjindar Nagar, Lal Bangla, J K Puri, Kanpur, UP 208007\n- **London, UK:** 3 Thornham St, London SE10 9SA\n\n[Open the Contact page](/contact)",
    url: "/contact",
    k: "branch branches office offices how many locations address where located kahan headquarters prayagraj allahabad kanpur london uk map cities presence",
  },
  {
    q: "Does BizzBuzz Creations work with businesses outside India?",
    a: "Yes. We work with businesses in Prayagraj and across India, and also with international clients, including the UK and the US. See our [UK services page](/en-uk/digital-marketing-services-in-uk).",
    url: "/about",
    k: "international global worldwide outside india abroad uk us usa foreign clients overseas",
  },
  {
    q: "In which year was BizzBuzz Creations founded? When did the company start?",
    a: "BizzBuzz Creations began its journey in **2022**, in Prayagraj (Allahabad), India.\n\n- **Founders:** Abheuday Mishra (Founder & CEO) and Utkarsh Mishra (Co-Founder & Director)\n- **Started as:** a small team of marketers, designers and strategists\n- **Today:** a digital marketing and business solutions agency serving India, the UK, the US and beyond\n\n[Read our full story](/about)",
    url: "/about",
    k: "founded year established started start since when company bani kab shuru begin beginning inception born age old kis year",
  },
  {
    q: "How long has BizzBuzz Creations been around? What is the company's story and journey?",
    a: "BizzBuzz Creations began in Prayagraj (Allahabad) with a small team of marketers, designers and strategists who believed marketing shouldn't feel like guesswork. The journey so far:\n\n- **2022 — Building the foundation:** digital marketing, creative branding and online business growth\n- **2023 — Expanding expertise:** SEO, social media, content marketing, website solutions and branding\n- **2024 — Strengthening our approach:** result-driven strategies combining SEO, content, social, branding and web\n- **2025 — Growing digital possibilities:** refined SEO and digital marketing for stronger visibility and sustainable growth\n- **2026 — Where we are today:** smarter marketing, SEO, branding, content, social media and web strategies\n\n[Read the full story](/about)",
    url: "/about",
    k: "history story journey timeline 2022 2023 2024 2025 2026 how old growth milestones",
  },
  {
    q: "What is the mission and vision of BizzBuzz Creations?",
    a: "**Mission:** to help every business unlock measurable growth through smart, ethical, future-ready digital marketing — no fluff, no shortcuts, only strategy that works.\n\n**Vision:** to become India's most trusted digital marketing partner, known for turning ambitious brands into industry leaders through innovation and consistency.",
    url: "/about",
    k: "mission vision goal purpose aim objective",
  },
  {
    q: "What are the core values of BizzBuzz Creations?",
    a: "Our core values are: **Results over reports** (real growth, not polished PDFs), **Transparency first** (clear communication and honest timelines), **Innovation-led thinking** (tracking algorithm shifts and AI search trends early), **Client-centric culture** (every strategy built around your business) and **Integrity in execution** (ethical, white-hat practices).",
    url: "/about",
    k: "values principles culture ethics beliefs",
  },
  {
    q: "What makes BizzBuzz Creations different from other agencies? Why should I choose you?",
    a: "A few things set us apart:\n- **Data over guesswork** — decisions are backed by real performance data\n- **AI & search-ready strategy** — we optimise for Google, voice assistants, AI tools and answer engines\n- **Full-funnel marketing** — awareness to conversion under one roof\n- **Custom roadmaps, not templates** — built around your industry, competitors and goals\n- **Radical transparency** — live performance dashboards and clear reporting\n- **Proven delivery** — 90+ projects and 50+ clients\n\nMore on the [About page](/about).",
    url: "/about",
    k: "why choose you different unique better than others advantage usp best agency reasons trust why bizzbuzz",
  },
  {
    q: "How many projects and clients does BizzBuzz Creations have?",
    a: "BizzBuzz Creations has delivered **90+ projects** for **50+ clients**, across **15 industries**.\n\n- [See the industries we serve](/industries)\n- [See our services](/services)",
    url: "/about",
    k: "how many projects clients experience track record numbers stats statistics happy clients portfolio",
  },
  {
    q: "Does BizzBuzz Creations have any certifications or recognitions?",
    a: "Yes. BizzBuzz Creations is listed among trusted digital marketing agencies on Clutch, is a Certified Google Ads & Marketing Partner, a Certified Google Analytics Partner, and has quality-certified business processes.",
    url: "/about",
    k: "certified certification recognition award clutch google partner analytics iso quality badge",
  },
  {
    q: "What is the company culture like at BizzBuzz Creations?",
    a: "We build with **real ownership**, work **as one team** across strategy, design, technology, SEO and digital marketing, and **grow together** through continuous learning on real campaigns. Our structure is flat — fewer layers, faster decisions, more room to turn ideas into outcomes.",
    url: "/about",
    k: "culture work environment values team spirit flat structure workplace",
  },
  {
    q: "Is BizzBuzz Creations a trustworthy agency? Do you guarantee rankings or results?",
    a: "We focus on sustainable growth rather than quick wins, and we deliberately avoid promising \"guaranteed rankings\". You get transparent reporting, honest timelines and a team that knows your brand. Results depend on your market, competition and goals.",
    url: "/about",
    k: "trust trustworthy genuine legit reliable guarantee guaranteed rankings promise safe fake scam reviews",
  },

  // ------------------------------------------------------------- Team
  // Founders, leadership, BPO and R&D member lists/counts are generated in
  // knowledge.js from the Our Team / BPO / R&D page content, so they stay in sync.
  {
    q: "Tell me about the team at BizzBuzz Creations.",
    a: "Our team brings together marketers, strategists, designers, developers and digital specialists across **Digital Marketing, Creative, Technology, Strategy, BPO & Support and R&D**. Work stays in-house with one connected team — no handoffs between separate vendors. Meet them on the [Our Team page](/our-team), including the [BPO team](/our-team/bpo-team) and the [R&D team](/our-team/rnd-team).",
    url: "/our-team",
    k: "team people employees staff who works experts specialists meet our team members",
  },
  {
    q: "Does BizzBuzz outsource work, or is everything done in-house?",
    a: "The work stays in-house. Every project moves through one connected team — not separate vendors passing work around — so one team owns the outcome end to end.",
    url: "/our-team",
    k: "outsource outsourcing in-house inhouse vendors freelancers third party subcontract",
  },
  {
    q: "What teams and specialties does BizzBuzz Creations have?",
    a: "Six areas: **Digital Marketing** (SEO, paid ads, social, content), **Creative** (branding, graphic design, visual content), **Technology** (web development, optimisation, integrations), **Strategy** (research, analytics, positioning, roadmaps), **BPO & Support** (customer communication, lead follow-ups) and **R&D** (AI search, automation, emerging tech).",
    url: "/our-team",
    k: "departments teams specialties skills expertise roles functions",
  },

  // ------------------------------------------------------ How we work
  {
    q: "How does BizzBuzz Creations work? What is your process?",
    a: "Every project follows the same five-step roadmap:\n1. **Discover & Audit** — we analyse your brand, audience, competitors and current digital presence\n2. **Strategize** — a custom roadmap across SEO, paid media, content and social\n3. **Create & Execute** — we design, write and launch everything\n4. **Optimize & Scale** — live tracking, A/B tests and refinement to improve ROI\n5. **Report & Grow** — transparent monthly reporting and regular strategy calls\n\nSee [How We Work](/how-we-work).",
    url: "/how-we-work",
    k: "process how do you work steps roadmap methodology approach workflow framework procedure kaise kaam karte",
  },
  {
    q: "How long does the process take? What is the timeline?",
    a: "A typical timeline: **Discover & Audit** 1–2 weeks, **Strategize** about 1 week, then **Create & Execute** runs ongoing in phases, **Optimize & Scale** is continuous, and **Reporting** is monthly with strategy calls. Every business is different, so this is a realistic guide, not a fixed promise.",
    url: "/how-we-work",
    k: "timeline how long onboarding duration weeks start time expect when kitna time",
  },
  {
    q: "How long does it take to see results?",
    a: "It depends on the service. Paid campaigns can show results within days, while SEO typically takes around 3–6 months for measurable ranking growth. We create a strategy based on your goals and track performance along the way.",
    url: "/how-we-work",
    k: "results how soon how long timeframe roi when will i see seo results fast kitne din",
  },
  {
    q: "What are the principles behind how BizzBuzz works with clients?",
    a: "Six principles: **Transparency**, **Collaboration**, **Speed**, **Ownership** (your website, ad accounts, analytics and data stay yours), **Security** (controlled access and responsible data practices, NDAs available) and **Innovation** (SEO, AI search, automation and emerging trends).",
    url: "/how-we-work",
    k: "principles values client partnership transparency ownership security nda confidentiality",
  },
  {
    q: "Will I own my website, ad accounts and data?",
    a: "Yes. Your website, advertising accounts, analytics, data and digital assets remain fully under your ownership and control at every stage.",
    url: "/how-we-work",
    k: "own ownership website ad accounts data access control belong mine",
  },
  {
    q: "Do I get reports on how my campaigns are performing?",
    a: "Yes. Every client gets transparent monthly reporting plus regular strategy calls to review progress and next steps — in plain language, without confusing jargon.",
    url: "/how-we-work",
    k: "reports reporting dashboard performance updates monthly analytics tracking",
  },
  {
    q: "What tools does BizzBuzz Creations use?",
    a: "For research and analytics: Google Analytics, Google Search Console, SEMrush and Ahrefs. For advertising: Google Ads, Meta Ads Manager and conversion-tracking tools. We also build and use our own CRM and workflow-automation systems, and work with AI-powered content, chatbot and search-optimisation tools.",
    url: "/how-we-work",
    k: "tools software platforms technology stack semrush ahrefs analytics search console crm",
  },
  {
    q: "Is my data safe? Can you sign an NDA?",
    a: "We use controlled access and responsible data practices to protect sensitive information, and NDAs are available when extra confidentiality is required. See our [Privacy Policy](/privacy-policy).",
    url: "/how-we-work",
    k: "nda confidentiality data safe security privacy protect confidential sign",
  },
  {
    q: "What if my business needs change halfway through a project?",
    a: "The process is built to adapt — strategy, priorities and services can be adjusted at any stage as your goals or market conditions change.",
    url: "/how-we-work",
    k: "change scope flexible adjust pivot lock-in contract cancel",
  },
  {
    q: "Is there a long-term contract or lock-in?",
    a: "Our Contact page states we offer \"no long-term lock-in, just a team focused on measurable results\", and every engagement starts with a free consultation with no fixed package — just what your business actually needs. For specifics, the team can walk you through it.",
    url: "/contact",
    k: "contract lock in lock-in commitment long term agreement minimum period cancel",
  },

  // --------------------------------------------------------------- Careers
  {
    q: "Does BizzBuzz Creations have job openings? How can I apply for a job?",
    a: "Yes, we're always looking for great talent.\n\n- **See current roles:** [Open Positions](/career#open-positions)\n- **Apply:** use the application link shown on each role\n- **Or email us:** [info@bizzbuzzcreations.com](mailto:info@bizzbuzzcreations.com)",
    url: "/career#open-positions",
    k: "job jobs career careers hiring vacancy vacancies openings apply recruitment join work naukri internship employment resume cv roles open positions",
  },
  {
    q: "What is it like to work at BizzBuzz Creations?",
    a: "We have a flat structure — fewer layers, faster decisions and more room for your ideas. You'll learn by doing on real campaigns across digital marketing, technology, design and strategy, take ownership of your work, and keep growing: your role is a starting point, not a ceiling. See the [Career page](/career).",
    url: "/career",
    k: "work culture employees life working here benefits growth learning ownership flat",
  },
  {
    q: "Does BizzBuzz offer internships or freshers jobs?",
    a: "Open roles change over time, so please check the [Career page](/career) for what's currently listed, or email [info@bizzbuzzcreations.com](mailto:info@bizzbuzzcreations.com) with your details. I can't confirm specific internship availability from here.",
    url: "/career",
    k: "internship intern fresher freshers trainee entry level student",
  },

  // -------------------------------------------------------- Services (overview)
  {
    q: "What services does BizzBuzz Creations offer? Give me the full list.",
    a: "We offer **8 core services**:\n\n1. [Search Engine Optimization (SEO)](/search-engine-optimization) — visibility, local SEO and AI search\n2. [Social Media Marketing](/social-media-marketing) — content, management and paid social\n3. [Google Ads & Paid Marketing](/paid-marketing) — targeted campaigns for leads and ROI\n4. [Website Design & Development](/web-development) — fast, responsive, SEO-friendly sites\n5. [BPO & Customer Support](/bpo-services) — support, call center and back-office\n6. [AI Solutions](/ai-solutions) — chatbots, voice agents, workflow automation\n7. [Marketing Automation](/marketing-automation) — CRM, email and WhatsApp journeys\n8. [Business Consultancy](/business-consultancy) — strategy, growth and operations\n\nYou can pick one or combine several. Ask me about any of them for details.",
    url: "/services",
    k: "services list all offer full list what do you provide offerings solutions portfolio kya kya services",
  },
  // Sub-service lists per service are generated in knowledge.js from the live content modules.
  {
    q: "Does BizzBuzz build its own products and technology?",
    a: "Yes. Besides client work, BizzBuzz builds its own tools: a custom CRM for call centers (BizzBuzz CRM), the Clio AI voice calling system, Praxistence CRM, and runs self-hosted cloud infrastructure with a production-grade DevOps pipeline. Even this website was designed and built in-house.",
    url: "/",
    k: "own products in-house technology crm infrastructure devops proxmox self hosted built website",
  },
  {
    q: "Do you work with businesses in the UK?",
    a: "Yes — we have a London office and support UK businesses with digital marketing. See our [UK page](/en-uk/digital-marketing-services-in-uk) or call +44 07862 608652.",
    url: "/en-uk/digital-marketing-services-in-uk",
    k: "uk united kingdom london england britain british digital marketing services in uk",
  },

  // ----------------------------------------------------------- Industries
  {
    q: "Do you work with my industry or niche?",
    a: "The same structured process — discover, strategize, execute, optimize, report — is applied across every industry we work with, adapted to each industry's audience and goals. We have dedicated pages for 15 sectors on the [Industries page](/industries); if yours isn't listed, tell me about your business and I can suggest the best fit, or the team can advise.",
    url: "/industries",
    k: "my industry niche business type do you work with other sector not listed",
  },

  // ------------------------------------------------------------- Contact/Pricing
  {
    q: "How can I contact BizzBuzz Creations?",
    a: "Phone (India): +91 8115585285 · Phone (UK): +44 07862 608652 · Email: info@bizzbuzzcreations.com · WhatsApp: https://wa.me/918115585285 · Hours: Mon–Sat, 12:00 PM – 8:00 PM. You can also use the [Contact page](/contact).",
    url: "/contact",
    k: "contact phone number email whatsapp call reach hours timing support",
  },
  {
    q: "How do I get started with BizzBuzz Creations?",
    a: "Fill out the form on the [Contact page](/contact) and book a free consultation. We'll discuss your business goals, challenges and requirements, and recommend the right digital marketing or technology solution. It works in three steps: tell us your challenge → get a free consultation → get a clear growth roadmap.",
    url: "/contact",
    k: "get started start begin onboard sign up hire how to work with you first step free consultation",
  },
  {
    q: "Is the first consultation free?",
    a: "Yes — every engagement starts with a free consultation and business audit. There is no fixed package; the plan is built around what your business actually needs.",
    url: "/contact",
    k: "free consultation audit free trial first call no cost",
  },
  {
    q: "What are your working hours?",
    a: "Our working hours are Monday to Saturday, 12:00 PM – 8:00 PM.",
    url: "/contact",
    k: "working hours timing open time schedule days availability",
  },

  // ------------------------------------------------------------ Legal / policies
  {
    q: "What personal data does BizzBuzz Creations collect? What information do you collect from visitors?",
    a: "According to our [Privacy Policy](/privacy-policy), we collect:\n\n- Name, email address and phone number\n- Business or company details\n- Information you submit through contact or inquiry forms\n- Technical data such as IP address, browser type and pages visited",
    url: "/privacy-policy",
    k: "personal data information collect collected privacy what data stored details gather ip address name email form",
  },
  {
    q: "How does BizzBuzz Creations use my information and data?",
    a: "Per our [Privacy Policy](/privacy-policy), we use your information to:\n\n- Respond to inquiries and provide services\n- Improve our website and user experience\n- Send updates, offers or service-related communications\n- Maintain security and prevent fraud",
    url: "/privacy-policy",
    k: "use my data information how used purpose privacy marketing emails updates offers",
  },
  {
    q: "Do you sell or share my personal information with third parties?",
    a: "No — we do not sell or rent your personal information. We may share data only with trusted service providers who help us operate our website and business, under strict confidentiality. Details are in our [Privacy Policy](/privacy-policy).",
    url: "/privacy-policy",
    k: "sell share third parties personal information data privacy rent disclose",
  },
  {
    q: "What are my privacy rights? Can I delete my data?",
    a: "Under our [Privacy Policy](/privacy-policy) you can:\n\n- Access, update or delete your personal data\n- Withdraw consent for communications\n- Request information about how your data is used\n\nTo make a request, email [info@bizzbuzzcreations.com](mailto:info@bizzbuzzcreations.com).",
    url: "/privacy-policy",
    k: "privacy rights delete data remove unsubscribe withdraw consent access update gdpr",
  },
  {
    q: "What cookies does the BizzBuzz Creations website use?",
    a: "Our [Cookie Policy](/cookie-policy) explains that we may use these types of cookies:\n\n- **Strictly necessary** — navigation, security, sessions and forms\n- **Functional & preference** — remembering your choices\n- **Analytics & performance** — understanding how visitors use the site\n- **Advertising & marketing** — measuring campaign performance (with consent where the law requires it)\n\nYou can control cookies through your browser settings or any cookie-preference option on the site.",
    url: "/cookie-policy",
    k: "cookies cookie policy tracking types analytics advertising consent browser settings trackers",
  },
  {
    q: "What are the payment terms and fees? Are there refunds or cancellations?",
    a: "Per our [Terms & Conditions](/terms-and-conditions):\n\n- **Fees** are communicated in the applicable quotation, proposal, invoice or service agreement\n- **Payment** follows the agreed schedule; third-party costs may be charged separately, and taxes may apply\n- **Late payments** may affect continuation of services\n- **Refund, cancellation and billing terms** may be set out separately in your service agreement\n\nFor a quote, [contact our team](/contact).",
    url: "/terms-and-conditions",
    k: "payment payments terms fees refund refunds cancellation cancel billing invoice late payment pay charges",
  },
  {
    q: "Does BizzBuzz Creations guarantee results? What does the disclaimer say?",
    a: "No specific results are guaranteed unless expressly agreed in writing. Our [Disclaimer](/disclaimer) and [Terms](/terms-and-conditions) explain that results depend on market conditions, competition, budget, audience, website quality and platform algorithms.\n\n- Rankings, traffic, leads, sales, revenue and ROI are **not guaranteed**\n- Testimonials and case studies are examples, **not promises** of the same outcome\n- Website content is general information, not legal, financial or medical advice",
    url: "/disclaimer",
    k: "guarantee guaranteed results disclaimer liability promise warranty advice testimonials case studies",
  },
  {
    q: "What do the Terms & Conditions cover?",
    a: "Our [Terms & Conditions](/terms-and-conditions) cover, among other things:\n\n- Use of the website and our services\n- Service agreements and scope of work\n- Client responsibilities\n- Payments and fees\n- Digital marketing results, SEO, paid advertising, social media and web development terms\n- Intellectual property, client-provided content and confidentiality\n- Liability, suspension or termination, and changes to the terms",
    url: "/terms-and-conditions",
    k: "terms conditions t&c legal agreement what covered rules policy contract",
  },

  // ------------------------------------------------------------ How we help
  {
    q: "How will you help me grow my business? How are you going to help me?",
    a: "Here's how we'd help you grow:\n\n1. **We start by understanding you** — our team first learns about your business, goals, audience and current challenges, through a free consultation.\n2. **We audit and plan** — we study your competitors and current online presence, then build a custom roadmap matched to your goals and budget.\n3. **We execute** — we bring in only the services that fit your needs and launch them in phases.\n4. **We optimise and report** — we keep testing and improving, with transparent monthly reports and regular strategy calls.\n\nThere's no fixed package — the plan is shaped around what your business actually needs. [Book a free consultation](/contact) and our team will take it from there.",
    url: "/how-we-work",
    k: "how help me grow business how will you help how can you help support improve boost increase scale growth what will you do for me approach plan kaise madad",
  },

  // ------------------------------------------------------------ Our products
  {
    q: "What is Clio AI? Tell me about Clio AI.",
    a: "**Clio AI — our AI voice agent**\n\nClio AI answers and makes sales calls for your business. It qualifies leads, books meetings and hands over to your team when a human is needed, all in natural conversation.\n\n**What it does**\n- **AI Voice Agents** — handle inbound and outbound calls end to end, from greeting the caller to qualifying the lead\n- **Meetings Booked Automatically** — book meetings straight into Google Calendar and send follow-up emails through Gmail\n- **Smart Human Handoff** — escalate to your team the moment a conversation needs a human touch\n- **Live Cost & Team Control** — see what every call costs in real time and manage your team with role-based access\n\n[Explore Clio AI](https://clio.praxistence.com/) · [AI Solutions](/ai-solutions)",
    url: "/ai-solutions",
    k: "clio ai voice agent calling bot sales calls ai caller what is clio",
  },
  {
    q: "What is Praxistence? Tell me about Praxistence CRM.",
    a: "**Praxistence: All-in-One CRM for Calling & Follow-Up Teams**\n\nPraxistence is a CRM platform built for calling and follow-up teams. Manage every lead and conversation in one place, stay on top of follow-ups, and pair it with Clio AI to handle calls automatically.\n\n**Key features**\n- **All-in-One CRM** — leads, customers and conversations together in a single platform instead of scattered tools\n- **Built for Calling Teams** — designed around the way calling teams actually work, from the first call to the last follow-up\n- **Never Miss a Follow-Up** — every lead stays on track so no conversation is forgotten\n- **Works with Clio AI** — pair it with our AI voice agent to handle calls and follow-ups together\n\n[Explore Praxistence](https://praxistence.com/) · [AI Solutions](/ai-solutions)",
    url: "/ai-solutions",
    k: "praxistence crm product platform calling team software follow up what is praxistence",
  },

  // ------------------------------------------------------------ Website map
  {
    q: "What pages and sections does the BizzBuzz Creations website have? How do I navigate the site?",
    a: "The main menu has five parts:\n\n- **About** — [About Us](/about), [Our Core Team](/our-team), [How We Work and Function](/how-we-work), [Start Your Career with Us](/career) and [FAQ](/faq)\n- **Services** — [SEO](/search-engine-optimization), [Social Media Marketing](/social-media-marketing), [Google Ads & Paid Marketing](/paid-marketing), [Website Development](/web-development), [BPO Service](/bpo-services), [AI Solutions](/ai-solutions), [Marketing Automation](/marketing-automation) and [Business Consultancy](/business-consultancy), each with its own sub-service pages\n- **Industries** — [15 industry pages](/industries), from healthcare to gaming\n- **Resources** — [Blogs](/blog) and [Guides](/guides)\n- **Contact Us** — [book a free consultation](/contact)\n\nThe footer links to the [Privacy Policy](/privacy-policy), [Cookie Policy](/cookie-policy), [Disclaimer](/disclaimer) and [Terms & Conditions](/terms-and-conditions), plus the [UK services page](/en-uk/digital-marketing-services-in-uk).",
    url: "/",
    k: "website pages sections menu navigation sitemap site map navbar footer where find pages list all pages structure explore",
  },
  // ------------------------------------------------------------ Resources
  {
    q: "Does BizzBuzz Creations have a blog? How many blogs are published?",
    a: "Yes. Our [blog](/blog) has **187 published articles** so far on SEO, digital marketing, social media, web development, AI and business growth, and new posts are added regularly. Ask me about any topic and I'll point you to the relevant article.",
    url: "/blog",
    k: "blog blogs articles posts how many total count published number news insights read latest content",
  },
  {
    q: "What guides and resources does BizzBuzz Creations offer?",
    a: "Our [Guides page](/guides) has practical, no-fluff guides on Digital Marketing, SEO, AI Marketing, Social Media Marketing, Website Development, Business Development, Google Ads, Backlink Strategy, Content Marketing & SEO, and modern search (SEO, AEO & GEO).",
    url: "/guides",
    k: "guides resources learn tutorials ebooks library education how to guide",
  },
  {
    q: "Where can I read your privacy policy, terms and conditions, cookie policy and disclaimer?",
    a: "Our legal pages are: [Privacy Policy](/privacy-policy), [Terms & Conditions](/terms-and-conditions), [Cookie Policy](/cookie-policy) and [Disclaimer](/disclaimer).",
    url: "/privacy-policy",
    k: "privacy policy terms conditions cookie disclaimer legal gdpr data protection",
  },
  {
    q: "What is the BizzBuzz FAQ page?",
    a: "Our [FAQ page](/faq) answers common questions on SEO, Google Ads, social media, web development, AI automation and working with BizzBuzz Creations. If you don't find what you need, the team is one message away on the [Contact page](/contact).",
    url: "/faq",
    k: "faq frequently asked questions help support questions answers",
  },
];
