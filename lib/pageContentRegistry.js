// Single source of truth for which page sections/fields are editable from
// the admin dashboard's "Website Content" tab. Each field's `default` is
// the real copy the site already ships with — pages fall back to this
// when no override has been saved yet, so nothing breaks/blanks out
// before an admin edits anything.
//
// Field types: "text" (single line), "textarea" (multi-line), "image"
// (upload, stores a URL), "video" (upload, stores a URL), "list"
// (repeatable items — each item is an object whose own shape is given by
// `itemFields`, same type options).
//
// Deliberately NOT editable here: icons, hrefs/links, and anything that
// drives layout (which visual variant a card renders, column counts,
// etc.) — those are design/structure, not content, and stay in code.
//
// Adding a new editable page: add an entry here, then in that page's
// component read `content?.someKey || DEFAULT` instead of the hardcoded
// string. No schema changes needed — PageContent.fields is schemaless.
export const PAGE_CONTENT_REGISTRY = [
  {
    key: "home",
    label: "Homepage",
    sections: [
      {
        key: "hero",
        label: "Hero Section",
        fields: [
          { key: "heroHeading", label: "Heading", type: "text", default: "India’s Trusted Digital Marketing Agency" },
          { key: "heroSubheading", label: "Sub-heading", type: "text", default: "Turn Clicks Into Customers With Data-Driven Digital Marketing" },
          { key: "heroSubtext", label: "Subtext", type: "textarea", default: "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations." },
          { key: "heroCtaText", label: "Button Text", type: "text", default: "Get Free Consultation" },
          { key: "heroPosterImage", label: "Background Poster Image (shown before the video loads)", type: "image", default: "/hero (1).webp" },
          { key: "heroVideo", label: "Background Video", type: "video", default: "/Sequence 01 1.mp4" },
        ],
      },
      {
        key: "about",
        label: "About Us",
        fields: [
          { key: "aboutEyebrow", label: "Eyebrow Label", type: "text", default: "About Us" },
          { key: "aboutHeading", label: "Heading", type: "text", default: "We Are BizzBuzz Creations" },
          {
            key: "aboutParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "We're not just another agency running the same playbook for every client. BizzBuzz Creations is built on the idea that real growth comes from understanding a business first and marketing it second. That's why local businesses trust us as one of the best digital marketing companies in Prayagraj and why brands from Allahabad to Lucknow to Delhi rely on us as they expand their digital footprint across India. Our team blends SEO expertise, AI-assisted campaign optimization, paid advertising know-how, and sharp creative work to deliver digital marketing solutions that actually move the needle — more visibility, more leads, and more revenue, no matter which city or state your customers are searching from.",
          },
          { key: "aboutButtonText", label: "Button Text", type: "text", default: "Learn More" },
          { key: "aboutBackgroundImage", label: "Background Image", type: "image", default: "/building.jpg" },
        ],
      },
      {
        key: "services",
        label: "Our Digital Marketing Services",
        fields: [
          { key: "servicesHeading", label: "Heading", type: "text", default: "Our Digital Marketing Services" },
          { key: "servicesSubtext", label: "Subtext", type: "textarea", default: "We don't believe in one-size-fits-all marketing. Our customized digital strategies help businesses attract qualified customers, increase conversions, and grow sustainably." },
          {
            key: "serviceCards",
            label: "Service Cards",
            type: "list",
            itemFields: [
              { key: "heading", label: "Title", type: "text" },
              { key: "subheading", label: "Subheading", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "buttonText", label: "Button Text", type: "text" },
            ],
            default: [
              { heading: "BPO Service", subheading: "Reliable Support Teams Without the Overhead", description: "Skip the cost and hassle of hiring in-house. Our trained BPO teams handle customer support, back-office operations, and order processing around the clock, so you get dependable service without the overhead of building a full internal team.", buttonText: "Explore BPO Services" },
              { heading: "Website Design & Development", subheading: "Build a Website That Converts Visitors Into Customers", description: "A slow website kills conversions. We build fast, responsive, and clean websites—from local business pages to custom platforms—designed to deliver a smooth user experience that turns visitors into buyers.", buttonText: "Build Your Website" },
              { heading: "Search Engine Optimization (SEO)", subheading: "Increase Your Google Rankings & Drive Organic Traffic", description: "Rank higher on Google and AI-driven search engines. We combine technical SEO, local relevance, and quality content to ensure your business in Allahabad, and across India gets found however customers search.", buttonText: "Explore SEO Services" },
              { heading: "Social Media Marketing", subheading: "Build a Strong Brand That People Trust", description: "Stop the scroll and build a brand that sells. We create high-impact Instagram, Facebook, and YouTube Shorts campaigns, leveraging short-form video and social commerce to drive real customer engagement.", buttonText: "Grow Your Social Presence" },
              { heading: "Google Ads & Paid Marketing", subheading: "Reach Customers Ready to Buy", description: "Stop wasting ad spend. We launch targeted, AI-optimized campaigns with smart audience segmentation and high-converting landing pages designed to turn clicks into genuine, scalable leads.", buttonText: "Start Google Ads" },
              { heading: "AI Automation", subheading: "Automate the Busywork, Scale Without Hiring", description: "Free your team from repetitive tasks. We build AI chatbots, lead qualification flows, and workflow automations that respond to customers instantly and route the right leads to your team, 24/7.", buttonText: "Automate With AI" },
              { heading: "Marketing Automation", subheading: "Nurture Leads Automatically, Convert While You Sleep", description: "Stop letting leads go cold. We set up automated email and follow-up sequences that nurture prospects, qualify interest, and guide them through the buyer's journey without manual chasing.", buttonText: "Automate Your Marketing" },
              { heading: "Business Consulting", subheading: "Strategic Guidance for Sustainable Growth", description: "Streamline operations and plan for sustainable growth. We bridge the gap between business fundamentals and digital strategy, giving Prayagraj businesses and scaling Indian brands a clear roadmap to success.", buttonText: "Speak With a Consultant" },
            ],
          },
        ],
      },
      {
        key: "caseStudies",
        label: "Powered by What We Build",
        fields: [
          { key: "caseStudiesHeading", label: "Heading", type: "text", default: "Powered by What We Build" },
          { key: "caseStudiesSubtext", label: "Subtext", type: "textarea", default: "A closer look at the CRM systems, AI tools, and infrastructure driving real business operations, day in and day out." },
          {
            key: "caseStudyClients",
            label: "Cards (leave Logo empty to use the built-in icon)",
            type: "list",
            itemFields: [
              { key: "name", label: "Title", type: "text" },
              { key: "logo", label: "Logo", type: "image" },
              { key: "tagline", label: "Description", type: "textarea" },
            ],
            default: [
              { name: "BizzBuzz CRM — Built for Call Centers", logo: "", tagline: "A custom CRM & customer management portal built for BPO and call center teams — lead tracking, agent workflows, and reporting, all in one platform." },
              { name: "AI Voice Calling System", logo: "", tagline: "An in-house AI voice agent that qualifies leads, answers FAQs, and transfers calls to humans — built for real outbound call volume, not a demo." },
              { name: "WhatsApp & n8n Sales Automation", logo: "", tagline: "A self-hosted automation engine that runs our own cold-calling and lead pipeline — WhatsApp, workflows, and outreach, fully connected." },
              { name: "Self-Hosted Cloud Infrastructure", logo: "", tagline: "Our own servers, our own rules, and a self-managed Proxmox infrastructure powering every product we build, with zero third-party hosting dependency." },
              { name: "This Website Built In-House", logo: "", tagline: "Designed, developed, and deployed end-to-end by our own team — proof of the same web development we offer clients." },
              { name: "Production-Grade DevOps Pipeline", logo: "", tagline: "Automated CI/CD deployment, monitoring, and uptime management running our own products in production — the same discipline we bring to client projects." },
              { name: "Custom Analytics & Reporting Dashboard", logo: "", tagline: "An in-house dashboard that pulls campaign, CRM, and infrastructure data into one place — real numbers our team acts on, not scattered spreadsheets." },
            ],
          },
        ],
      },
      {
        key: "stats",
        label: "By the Numbers (scrolling stat cards)",
        fields: [
          {
            key: "statCards",
            label: "Stat Cards",
            type: "list",
            itemFields: [
              { key: "tag", label: "Tag", type: "text" },
              { key: "value", label: "Number", type: "text" },
              { key: "label", label: "Label", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              { tag: "Our Work", value: "50+", label: "Projects Delivered", description: "Website builds, SEO campaigns, and full-funnel marketing programs delivered for businesses across Prayagraj and India." },
              { tag: "Real Results", value: "10,000+", label: "Leads Generated", description: "Qualified leads generated for our clients through targeted SEO, paid ads, and social media campaigns." },
              { tag: "Client Trust", value: "4.9", label: "Google Rating", description: "Average client rating on Google, built on transparent reporting and consistent, measurable results." },
              { tag: "Our Journey", value: "3+", label: "Years of Experience", description: "Years spent helping Indian businesses grow online across digital marketing, web development, and BPO services." },
            ],
          },
        ],
      },
      {
        key: "aiShowcase",
        label: "BizzBuzzAI",
        fields: [
          { key: "aiHeadingTop", label: "Heading (top line)", type: "text", default: "Building AI Systems" },
          { key: "aiHeadingMain", label: "Heading (main line)", type: "text", default: "That Actually Grow Your Business" },
          {
            key: "aiParagraph",
            label: "Paragraph",
            type: "textarea",
            default: "BizzBuzzAI is our dedicated AI practice, helping businesses move beyond the hype into practical, revenue-generating AI implementation — from custom chatbots to automated workflows and generative content engines.",
          },
          { key: "aiPosterImage", label: "Video Poster Image", type: "image", default: "/aiservice.webp" },
          { key: "aiVideo", label: "Video", type: "video", default: "/Sequence 01 1.mp4" },
          {
            key: "aiFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "points", label: "Points (one per line)", type: "textarea" },
            ],
            default: [
              { title: "AI Agents & Chatbots", points: "Lead qualification\n24/7 customer support" },
              { title: "Content & Automation", points: "Generative content engines\nWorkflow automation" },
              { title: "GEO Optimization", points: "AI search visibility\nChatGPT & Perplexity citations" },
            ],
          },
        ],
      },
      {
        key: "process",
        label: "Our Process",
        fields: [
          { key: "processHeading", label: "Heading", type: "text", default: "Our Process" },
          { key: "processSubtext", label: "Subtext", type: "text", default: "A Proven Framework for Measurable Digital Growth." },
          {
            key: "processSteps",
            label: "Process Steps",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Free Consultation & Business Audit", description: "We study your business, competitors, and current online presence to spot quick wins and growth gaps." },
              { title: "Custom Strategy Design", description: "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget." },
              { title: "Campaign Execution", description: "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics." },
              { title: "Reporting & Continuous Optimization", description: "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding." },
            ],
          },
        ],
      },
      {
        key: "whyChooseUs",
        label: "Why Businesses Continue Working With Us",
        fields: [
          { key: "whyChooseHeading", label: "Heading", type: "text", default: "Why Businesses Continue Working With Us" },
          { key: "whyChooseImage", label: "Image", type: "image", default: "/why-choose-image.png" },
          {
            key: "whyChooseFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Transparent Reporting", description: "Know exactly where your marketing budget is invested with detailed reports and actionable insights." },
              { title: "Dedicated Marketing Experts", description: "Our team continuously monitors industry trends, and emerging technologies to keep your business ahead of competitors." },
              { title: "Data-Driven Decision Making", description: "Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions." },
              { title: "Long-Term Partnership", description: "We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth." },
            ],
          },
        ],
      },
      {
        key: "recognitions",
        label: "Certifications & Trust",
        fields: [
          { key: "recognitionsEyebrow", label: "Eyebrow Label", type: "text", default: "Certifications & Trust" },
          { key: "recognitionsHeading", label: "Heading", type: "text", default: "Proven Expertise. Real Recognition." },
          { key: "clutchBadgeImage", label: "Clutch Badge Image", type: "image", default: "/clutch.png" },
          { key: "clutchTitle", label: "Clutch Description", type: "text", default: "Listed among trusted digital marketing agencies on Clutch" },
          { key: "googleAdsBadgeImage", label: "Google Ads Partner Badge Image", type: "image", default: "/CDL.png" },
          { key: "googleAdsTitle", label: "Google Ads Partner Description", type: "text", default: "Certified Google Ads & Marketing Partner" },
          { key: "googleAnalyticsBadgeImage", label: "Google Analytics Badge Image", type: "image", default: "/GA.png" },
          { key: "googleAnalyticsTitle", label: "Google Analytics Description", type: "text", default: "Certified Google Analytics Partner" },
          { key: "isoBadgeImage", label: "ISO Badge Image", type: "image", default: "/ISO.png" },
          { key: "isoTitle", label: "ISO Description", type: "text", default: "Quality-certified business processes" },
        ],
      },
      {
        key: "industries",
        label: "Industries We Serve",
        fields: [
          { key: "industriesEyebrow", label: "Eyebrow Label", type: "text", default: "Industries We Serve" },
          { key: "industriesHeading", label: "Heading", type: "text", default: "Solving Real Challenges Across Every Major Industry" },
        ],
      },
      {
        key: "reviews",
        label: "Customer Reviews",
        fields: [
          { key: "reviewsHeading", label: "Heading", type: "text", default: "Customer Reviews" },
          { key: "reviewsSubtext", label: "Subtext", type: "text", default: "See what our customers have to say about us." },
          {
            key: "testimonials",
            label: "Reviews",
            type: "list",
            itemFields: [
              { key: "name", label: "Name", type: "text" },
              { key: "role", label: "Role / Source", type: "text" },
              { key: "text", label: "Review Text", type: "textarea" },
            ],
            default: [
              { name: "Sunayana Srivastava", role: "Verified Google Review", text: "Great Digital Marketing agency! Professional, creative & result oriented. Our campaigns have performed better than ever since partnering with BizzBuzz creations. Highly recommend their services." },
              { name: "Raunak Tripathi", role: "Verified Google Review", text: "Great experience with Bizzbuzz Creations. Professional, responsive, and delivered quality work on time. Highly recommended for growing your business." },
              { name: "Subhash Srivastava", role: "Verified Google Review", text: "Highly professional and competent team. Very cooperative and prompt their services. The city needs such a service providers. I would recommend this organisation highly to everyone." },
              { name: "Sarthak Mishra", role: "Verified Google Review", text: "Awesome experience with bizz buzz creations. Great for people and companies looking out for digital marketing agency." },
              { name: "Tariq Khan", role: "Verified Google Review", text: "Best digital marketing agency in prayagraj. They are very professional and cooperative. I am very happy with their services. I would recommend this organisation highly to everyone." },
              { name: "Rudra Pratap Singh", role: "Verified Google Review", text: "One of the best digital marketing service providers in Prayagraj. The team is highly trustworthy and delivers outstanding SEO results. Great experience overall!" },
            ],
          },
        ],
      },
      {
        key: "faq",
        label: "FAQs",
        fields: [
          { key: "faqHeading", label: "Heading", type: "text", default: "FAQs" },
          {
            key: "faqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              { question: "How much does digital marketing cost in India?", answer: "Depends on your goals and city. Get a free custom quote." },
              { question: "What does a digital marketing agency do?", answer: "Handles your SEO, ads, social media, and website — so you get found online." },
              { question: "Can a Prayagraj business rank across India?", answer: "Yes. Local SEO plus a wider keyword strategy makes it possible." },
              { question: "How long does SEO take to show results?", answer: "Usually 2–3 months for visible movement. Ads work faster." },
              { question: "Is SEO still relevant with AI tools like ChatGPT?", answer: "Yes — you now need to rank on Google and show up in AI answers." },
            ],
          },
        ],
      },
      {
        key: "popup",
        label: "Consultation Popup",
        fields: [
          { key: "popupHeaderTitle", label: "Header Bar Title", type: "text", default: "Book Your Consultation Now" },
          { key: "popupTitle", label: "Left Panel Title", type: "text", default: "BizzBuzz Creations" },
          { key: "popupTagline", label: "Left Panel Tagline", type: "text", default: "Innovate and Integrate Everyday" },
        ],
      },
    ],
  },
  {
    key: "about",
    label: "About Us",
    sections: [
      {
        key: "aboutHero",
        label: "Hero Section",
        fields: [
          { key: "aboutHeroHeading", label: "Heading", type: "text", default: "Digital Marketing Agency in India — Bizzbuzz Creations" },
          { key: "aboutHeroSubheading", label: "Sub-heading", type: "text", default: "Turning Bold Ideas Into Digital Success Stories" },
          { key: "aboutHeroParagraph", label: "Paragraph", type: "textarea", default: "We don't just run campaigns — we build brands that people remember, trust, and search for. From strategy to execution, Bizzbuzz Creations helps Indian businesses grow online with data-driven digital marketing solutions designed for real results in 2026 and beyond." },
          { key: "aboutHeroStat1", label: "Stat 1", type: "text", default: "90+ Projects Delivered" },
          { key: "aboutHeroStat2", label: "Stat 2", type: "text", default: "50+ Happy Clients Across India" },
          { key: "aboutHeroButtonText", label: "Button Text", type: "text", default: "Free Audit" },
          {
            key: "aboutHeroImages",
            label: "Photo Grid Images",
            type: "list",
            itemFields: [{ key: "src", label: "Image", type: "image" }],
            default: [
              { src: "/image-1.jpg" },
              { src: "/image-2.jpg" },
              { src: "/image-3.jpg" },
              { src: "/image-4.webp" },
              { src: "/image-5.webp" },
              { src: "/image-6.jpg" },
              { src: "/image-7.jpg" },
              { src: "/image-8.jpg" },
              { src: "/image-9.jpg" },
            ],
          },
        ],
      },
      {
        key: "story",
        label: "Our Story",
        fields: [
          { key: "storyHeading", label: "Heading", type: "text", default: "Our Story" },
          { key: "storySubheading", label: "Sub-heading", type: "text", default: "How Bizzbuzz Creations Began" },
          { key: "storyImage", label: "Image", type: "image", default: "/banner.png" },
          {
            key: "storyParagraphOne",
            label: "Paragraph 1",
            type: "textarea",
            default: "Every big brand starts with a small idea — ours was simple: marketing shouldn't feel like guesswork.\n\nBizzbuzz Creations was founded by a small team of marketers, designers, and strategists who were tired of watching businesses waste money on campaigns that looked good but didn't perform. We wanted to build a digital marketing agency that actually cared about outcomes — not vanity metrics.\n\nWhat started as a handful of local projects in India quickly grew into something bigger. Word spread. Clients returned. Referrals came in from the UK and the US. Today, we've delivered 90+ successful projects for 50+ clients spanning multiple industries — from D2C startups to established enterprises — and our footprint continues to grow across India, the UK, and the United States.",
          },
          {
            key: "storyParagraphTwo",
            label: "Paragraph 2",
            type: "textarea",
            default: "We're still the same team at heart: hands-on, curious, and obsessed with results. The only thing that's changed is scale.",
          },
        ],
      },
      {
        key: "missionVision",
        label: "Mission, Vision & Core Values",
        fields: [
          { key: "missionVisionHeading", label: "Heading", type: "text", default: "Our Mission, Vision & Core Values" },
          { key: "missionTitle", label: "Mission Title", type: "text", default: "Our Mission" },
          { key: "missionText", label: "Mission Text", type: "textarea", default: "To help every business unlock measurable growth through smart, ethical, and future-ready digital marketing — no fluff, no shortcuts, only strategy that works." },
          { key: "visionTitle", label: "Vision Title", type: "text", default: "Our Vision" },
          { key: "visionText", label: "Vision Text", type: "textarea", default: "To become India's most trusted digital marketing partner, known for turning ambitious brands into industry leaders through innovation and consistency." },
          { key: "coreValuesHeading", label: "Core Values Heading", type: "text", default: "Our Core Values" },
          {
            key: "coreValues",
            label: "Core Value Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Results Over Reports", description: "We measure success in real growth, not just polished monthly PDFs." },
              { title: "Transparency First", description: "Clear communication, honest timelines, and zero hidden agendas, always." },
              { title: "Innovation-Led Thinking", description: "We track algorithm shifts and AI search trends before they trend." },
              { title: "Client-Centric Culture", description: "Every strategy is built around your business, never a generic template." },
              { title: "Integrity in Execution", description: "Ethical, white-hat practices that protect your brand's reputation long-term." },
            ],
          },
        ],
      },
      {
        key: "journey",
        label: "Our Journey So Far",
        fields: [
          { key: "journeyHeading", label: "Heading", type: "text", default: "Our Journey So Far" },
          {
            key: "journeyYears",
            label: "Year Cards",
            type: "list",
            itemFields: [
              { key: "year", label: "Year", type: "text" },
              { key: "title", label: "Title", type: "text" },
              { key: "body", label: "Description", type: "textarea" },
              { key: "img", label: "Image", type: "image" },
            ],
            default: [
              { year: "2022", title: "Our Beginning", body: "BizzBuzz Creations started in Prayagraj as a small team of marketers, designers, and strategists, taking on our first local projects with one rule: build for outcomes, not vanity metrics.", img: "/image-7.jpg" },
              { year: "2023", title: "Building the Core Team", body: "We built out dedicated SEO, paid media, web development, and BPO capabilities, training every new hire on the same standards we held ourselves to from day one.", img: "/image-2.jpg" },
              { year: "2024", title: "Growing Beyond Prayagraj", body: "Referrals started coming in from across India, and our client roster grew to span multiple industries — from D2C startups to established enterprises.", img: "/image-5.webp" },
              { year: "2025", title: "A Wider Reach", body: "Our footprint expanded to include clients across the UK and US, alongside continued growth of our team and services here in India.", img: "/image-4.webp" },
              { year: "2026", title: "Where We Are Today", body: "With 90+ projects delivered for 50+ clients across 20+ industries, and real certifications from Clutch and Google, we keep building the same way we started: hands-on, transparent, and outcome-focused.", img: "/teamPic.webp" },
            ],
          },
        ],
      },
      {
        key: "differentiators",
        label: "Built Different, Built to Perform",
        fields: [
          { key: "differentiatorsHeading", label: "Heading", type: "text", default: "Built Different, Built to Perform" },
          { key: "differentiatorsSubtext", label: "Subtext", type: "textarea", default: "In a market flooded with agencies promising \"guaranteed rankings,\" we chose a different path — building sustainable digital growth systems instead of chasing quick wins." },
          {
            key: "differentiatorItems",
            label: "Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Data Over Guesswork", desc: "Every decision is backed by real performance data, not assumptions or industry \"best guesses.\"" },
              { title: "AI & Search-Ready Strategy", desc: "We optimize for how India searches today — voice assistants, AI tools, and answer engines, not just Google." },
              { title: "Full-Funnel Marketing", desc: "From brand awareness to final conversion, we manage the entire customer journey under one roof." },
              { title: "Custom Roadmaps, Not Templates", desc: "Every client gets a strategy built around their industry, competitors, and specific business goals." },
              { title: "Radical Transparency", desc: "Live performance dashboards, not vague monthly summaries — you see exactly where your budget goes." },
              { title: "Proven Delivery", desc: "90+ projects and 50+ clients trust us to turn strategy into measurable, repeatable growth." },
            ],
          },
        ],
      },
      {
        key: "culture",
        label: "Culture",
        fields: [
          {
            key: "cultureRows",
            label: "Culture Rows",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "body", label: "Description", type: "textarea" },
              { key: "img", label: "Image", type: "image" },
            ],
            default: [
              { title: "We Build With Real Ownership", body: "BizzBuzz Creations runs on flat hierarchies, clear communication, and real ownership — you're not waiting on five layers of sign-off to get things done. Good ideas win regardless of title, and every account runs like an extension of the client's own team.", img: "/image-2.jpg" },
              { title: "We Work As One Team", body: "We're a growing agency working out of Prayagraj, India and London, UK — and it shows in how we work. No walled-off departments, no siloed specialists; strategy, design, and execution happen together, in the same room.", img: "/image-4.webp" },
              { title: "We Grow Together", body: "Everyone works on real client campaigns from day one, learns from a hands-on team, and takes on as much responsibility as they're ready for. We're always looking for people who want to level up their own skills, not just tick boxes on someone else's roadmap.", img: "/teamPic.webp" },
            ],
          },
        ],
      },
      {
        key: "roadmap",
        label: "The Roadmap Behind Every Digital Success",
        fields: [
          { key: "roadmapHeading", label: "Heading", type: "text", default: "The Roadmap Behind Every Digital Success" },
          { key: "roadmapSubheading", label: "Sub-heading", type: "text", default: "The Bizzbuzz Growth Blueprint" },
          { key: "roadmapIntro", label: "Intro Paragraph", type: "textarea", default: "We follow a structured, repeatable process that has helped us deliver consistent results across 90+ projects." },
          {
            key: "roadmapSteps",
            label: "Roadmap Steps",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Discover & Audit", desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities." },
              { title: "Strategize", desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals." },
              { title: "Create & Execute", desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content." },
              { title: "Optimize & Scale", desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI." },
              { title: "Report & Grow", desc: "Transparent reporting and regular strategy calls keep growth compounding long after launch day." },
            ],
          },
          { key: "roadmapClosing", label: "Closing Paragraph", type: "textarea", default: "This roadmap is the reason our clients don't just get short-term spikes — they get compounding, long-term digital growth." },
        ],
      },
      {
        key: "trust",
        label: "Why Businesses Across India Trust Us",
        fields: [
          { key: "trustHeading", label: "Heading", type: "text", default: "Why Businesses Across India Trust Us" },
          { key: "trustIntro", label: "Intro Paragraph", type: "textarea", default: "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that." },
          {
            key: "trustItems",
            label: "Trust Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Proven Track Record", desc: "90+ projects delivered across India with real, measurable business outcomes." },
              { title: "Future-Focused SEO", desc: "We optimize for traditional search, AI search, and voice assistants — all at once." },
              { title: "End-to-End Services", desc: "SEO, paid ads, content, social, and web design — everything under one roof." },
              { title: "Honest Partnerships", desc: "No inflated promises, just clear strategy, consistent effort, and steady growth." },
              { title: "Dedicated Account Support", desc: "You get a real team that knows your brand, not a ticket number." },
              { title: "Growing Client Base", desc: "50+ businesses across India already trust us with their growth." },
            ],
          },
          { key: "trustClosing", label: "Closing Paragraph", type: "textarea", default: "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that." },
        ],
      },
      {
        key: "aboutFaq",
        label: "FAQs",
        fields: [
          { key: "aboutFaqHeading", label: "Heading", type: "text", default: "FAQs" },
          {
            key: "aboutFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              { question: "What does Bizzbuzz Creations do?", answer: "We're a digital marketing agency in India offering SEO, paid ads, social media, content, and web design — all under one roof." },
              { question: "How is Bizzbuzz Creations different from other agencies?", answer: "We build for both traditional search and AI-driven search — not just Google rankings, but how AI tools and voice assistants recommend brands too." },
              { question: "How many clients has Bizzbuzz Creations worked with?", answer: "We've delivered 90+ projects for 50+ clients across India." },
              { question: "How long does it take to see results?", answer: "Paid ads show results in weeks; SEO and content typically build momentum in 3–6 months." },
              { question: "How do I get started with Bizzbuzz Creations?", answer: "Book a free strategy call — we'll audit your digital presence and share a custom growth plan." },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "services",
    label: "Services",
    sections: [
      {
        key: "servicesHero",
        label: "Hero Section",
        fields: [
          { key: "servicesHeroHeading", label: "Heading", type: "text", default: "Everything You Need to Grow, Under One Roof" },
          { key: "servicesHeroParagraph", label: "Paragraph", type: "textarea", default: "From getting found in search to handling the calls that come from it — BizzBuzz Creations covers the full stack of digital growth, so you're not juggling five different vendors." },
          { key: "servicesHeroButtonText", label: "Button Text", type: "text", default: "Get Started" },
        ],
      },
      {
        key: "servicesGrid",
        label: "Services Grid",
        fields: [
          { key: "servicesGridHeading", label: "Heading", type: "text", default: "See Our All Services" },
          { key: "servicesGridSubtext", label: "Subtext", type: "textarea", default: "Pick a service below to see how we approach it — or combine a few for a full-funnel engagement." },
          {
            key: "serviceDescriptions",
            label: "Service Card Descriptions (same order as: SEO, Social Media, Paid Ads, Web Development, BPO, AI Automation, Marketing Automation, Business Consultancy)",
            type: "list",
            itemFields: [{ key: "description", label: "Description", type: "textarea" }],
            default: [
              { description: "On-page fixes, technical audits, content, and link building focused on rankings that actually convert — not just traffic for the sake of it." },
              { description: "Content calendars, community management, and paid social campaigns across Instagram, Facebook, and LinkedIn built around your brand voice." },
              { description: "Google Ads and paid social campaigns built for ROAS, with transparent budgets and reporting — never a black box." },
              { description: "Fast, responsive websites and web apps built on modern stacks, handed over with full ownership — no vendor lock-in." },
              { description: "Trained support teams handling customer queries, order support, and back-office work so your core team can focus on growth." },
              { description: "AI chatbots, workflow copilots, and custom automations that cut manual work without replacing the judgment calls that need a human." },
              { description: "Email sequences, CRM workflows, and lifecycle automations that keep leads warm and follow-ups consistent, on autopilot." },
              { description: "Workshops, audits, and roadmaps for teams that need a clear strategic direction before committing budget to execution." },
            ],
          },
        ],
      },
      {
        key: "engagement",
        label: "What Every Engagement Includes",
        fields: [
          { key: "engagementEyebrow", label: "Eyebrow Label", type: "text", default: "How We Work" },
          { key: "engagementHeading", label: "Heading", type: "text", default: "What Every Engagement Includes" },
          { key: "engagementSubtext", label: "Subtext", type: "textarea", default: "The same standards we hold ourselves to, no matter which service or combination of services you pick." },
          {
            key: "engagementFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Free Consultation First", desc: "Every engagement starts with a free consultation — no fixed package, just what your business actually needs." },
              { title: "No Vendor Lock-In", desc: "Your Google Ads, Analytics, and website accounts stay owned by you, always." },
              { title: "NDA Available", desc: "An NDA is available before any project details or account access are shared." },
              { title: "Transparent Reporting", desc: "Clear, regular reporting — you always know what's happening and why." },
              { title: "Scoped, Careful Access", desc: "Access to your accounts is scoped to only what's needed for the work, nothing more." },
              { title: "Combined or Standalone", desc: "Take one service or several — every engagement is built around your actual goals, not a fixed bundle." },
            ],
          },
        ],
      },
      {
        key: "scenarios",
        label: "Find the Right Service for Your Problem",
        fields: [
          { key: "scenariosEyebrow", label: "Eyebrow Label", type: "text", default: "Not Sure Where to Start?" },
          { key: "scenariosHeading", label: "Heading", type: "text", default: "Find the Right Service for Your Problem" },
          { key: "scenariosSubtext", label: "Subtext", type: "textarea", default: "Most businesses don't walk in asking for \"SEO\" or \"marketing automation\" — they walk in with a problem. Skip the guesswork: pick whichever sounds like you, and we'll point you to the service actually built for it." },
          {
            key: "scenarioQuestions",
            label: "Questions (same order as: SEO, Paid Ads, Web Development, BPO, Marketing Automation, Business Consultancy)",
            type: "list",
            itemFields: [{ key: "question", label: "Question", type: "text" }],
            default: [
              { question: "Not showing up when people search for you?" },
              { question: "Getting traffic, but not enough leads or sales?" },
              { question: "Need a website that actually converts visitors?" },
              { question: "Drowning in customer calls and queries?" },
              { question: "Repeating the same manual work every week?" },
              { question: "Need a clear strategy before spending on execution?" },
            ],
          },
        ],
      },
      {
        key: "servicesProcess",
        label: "Proven Process for Smarter Growth",
        fields: [
          { key: "servicesProcessHeading", label: "Heading", type: "text", default: "Proven Process for Smarter Growth" },
          { key: "servicesProcessSubtext", label: "Subtext", type: "text", default: "We simplify your growth journey, so you can focus on your business, not the process." },
          {
            key: "servicesProcessSteps",
            label: "Process Steps",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Free Consultation & Business Audit", description: "We study your business, competitors, and current online presence to spot quick wins and growth gaps." },
              { title: "Custom Strategy Design", description: "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget." },
              { title: "Campaign Execution", description: "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics." },
              { title: "Reporting & Continuous Optimization", description: "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding." },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "industries",
    label: "Industries",
    sections: [
      {
        key: "industriesHero",
        label: "Hero Section",
        fields: [
          { key: "industriesHeroEyebrow", label: "Eyebrow Label", type: "text", default: "Industries" },
          { key: "industriesHeroHeading", label: "Heading", type: "text", default: "Digital Growth Solutions for Every Industry" },
          { key: "industriesHeroParagraph", label: "Paragraph", type: "textarea", default: "Every industry has different goals, audiences, and challenges. We create tailored digital marketing, BPO, and web solutions that fit the way your business works." },
          { key: "industriesHeroButtonText", label: "Button Text", type: "text", default: "Explore Our Solutions" },
        ],
      },
      {
        key: "industriesGrid",
        label: "Industries Grid",
        fields: [
          { key: "industriesGridEyebrow", label: "Eyebrow Label", type: "text", default: "Industries We Serve" },
          { key: "industriesGridHeading", label: "Heading", type: "text", default: "Built Around Your Industry" },
          { key: "industriesGridSubtext", label: "Subtext", type: "textarea", default: "Every industry is different. We create digital strategies built around your business, audience, and goals." },
          {
            key: "industriesCardImages",
            label: "Card Background Images (cycled across the industry cards, in order)",
            type: "list",
            itemFields: [{ key: "src", label: "Image", type: "image" }],
            default: [
              { src: "/image-1.jpg" },
              { src: "/image-2.jpg" },
              { src: "/banner.png" },
              { src: "/image-3.jpg" },
              { src: "/image-4.webp" },
              { src: "/image-5.webp" },
              { src: "/image-6.jpg" },
              { src: "/image-7.jpg" },
              { src: "/image-8.jpg" },
              { src: "/image-9.jpg" },
              { src: "/teamPic.webp" },
            ],
          },
          {
            key: "industryCards",
            label: "Industry Cards (title, description, and which service page each links to)",
            type: "list",
            itemFields: [
              { key: "title", label: "Industry", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "linkText", label: "Link Text", type: "text" },
              { key: "linkHref", label: "Link URL", type: "text" },
            ],
            default: [
              { title: "Healthcare", description: "Build a stronger healthcare presence with digital marketing, SEO, and websites designed to connect with patients.", linkText: "Learn More", linkHref: "/industries/healthcare" },
              { title: "Finance", description: "Strengthen your finance brand with digital strategies that build visibility, trust, engagement, and qualified customer opportunities.", linkText: "Learn More", linkHref: "/industries/finance" },
              { title: "Restaurant", description: "Attract more diners with local SEO, social media, and digital marketing strategies built for restaurant growth.", linkText: "Learn More", linkHref: "/industries/restaurant" },
              { title: "Wearables", description: "Grow your wearable technology brand with digital strategies that improve visibility, engagement, and online customer discovery.", linkText: "Learn More", linkHref: "/industries/wearables" },
              { title: "Entertainment", description: "Reach wider audiences with creative digital marketing, social media, and content strategies built for entertainment brands.", linkText: "Learn More", linkHref: "/industries/entertainment" },
              { title: "Travel", description: "Increase bookings and brand visibility with SEO, digital marketing, and engaging online experiences for travel businesses.", linkText: "Learn More", linkHref: "/industries/travel" },
              { title: "Fitness", description: "Build a stronger fitness brand with digital marketing strategies that attract members, increase visibility, and drive growth.", linkText: "Learn More", linkHref: "/industries/fitness" },
              { title: "Education", description: "Connect with students and learners through SEO, digital marketing, and websites designed for educational businesses.", linkText: "Learn More", linkHref: "/industries/education" },
              { title: "Real Estate", description: "Generate more property leads with SEO, digital marketing, and conversion-focused websites built for real estate businesses.", linkText: "Learn More", linkHref: "/industries/real-estate" },
              { title: "E-commerce", description: "Grow your online store with SEO, digital marketing, and conversion-focused strategies designed for e-commerce success.", linkText: "Learn More", linkHref: "/industries/ecommerce" },
              { title: "Events", description: "Build event awareness and increase registrations with social media, digital marketing, and engaging online campaigns.", linkText: "Learn More", linkHref: "/industries/events" },
              { title: "Manufacturing", description: "Strengthen your manufacturing business with digital strategies that improve visibility, reach buyers, and generate qualified leads.", linkText: "Learn More", linkHref: "/industries/manufacturing" },
              { title: "Fashion & Apparel", description: "Build a stronger fashion brand with social media, digital marketing, and e-commerce strategies that turn attention into growth.", linkText: "Learn More", linkHref: "/industries/fashion-apparel" },
              { title: "Gaming", description: "Reach gaming audiences with engaging digital marketing, social media, and content strategies built around player communities.", linkText: "Learn More", linkHref: "/industries/gaming" },
              { title: "Construction", description: "Generate qualified leads and strengthen your online presence with SEO, digital marketing, and conversion-focused web solutions.", linkText: "Learn More", linkHref: "/industries/construction" },
            ],
          },
        ],
      },
      {
        key: "industriesCertifications",
        label: "Certified & Recognized By",
        fields: [
          { key: "industriesCertHeading", label: "Heading", type: "text", default: "Certified & Recognized By" },
          { key: "industriesCertSubtext", label: "Subtext", type: "textarea", default: "Real credentials that back up how we work, not just what we say." },
        ],
      },
    ],
  },
  {
    key: "contact",
    label: "Contact Us",
    sections: [
      {
        key: "contactHero",
        label: "Hero / Contact Form Section",
        fields: [
          { key: "contactHeroHeading", label: "Heading", type: "text", default: "Let’s Turn Your Digital Goals Into a Growth Plan" },
          { key: "contactHeroParagraph", label: "Paragraph", type: "textarea", default: "You bring the goals. We bring the strategy, execution, and ongoing support. From the first idea to measurable results, our team handles the heavy lifting, so you can focus on growing your business." },
          { key: "contactFormHeading", label: "Form Heading", type: "text", default: "Send Us a Message" },
          { key: "contactFormButtonText", label: "Form Submit Button Text", type: "text", default: "Send Message" },
          {
            key: "contactSteps",
            label: "Step Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Tell Us Your Challenge", description: "Share your goals, challenges, and what you want to achieve. We'll take the time to understand your business." },
              { title: "Get a Free Consultation", description: "Talk to our team about your goals, requirements, and priorities. We'll explore the right opportunities for your business." },
              { title: "Get a Clear Growth Roadmap", description: "Get a practical direction for your next steps, priorities, and opportunities. We'll help you move forward with confidence." },
            ],
          },
        ],
      },
      {
        key: "globeTrust",
        label: "Trusted by Growing Businesses",
        fields: [
          { key: "globeEyebrow", label: "Eyebrow Label", type: "text", default: "Trusted by Growing Businesses" },
          { key: "globeHeading", label: "Heading", type: "text", default: "In Prayagraj, Across India & Worldwide" },
          { key: "globeParagraph", label: "Paragraph", type: "textarea", default: "From local businesses to growing enterprises, we help brands across Prayagraj, India, and global markets build a digital presence that drives leads and sales — real results, not vanity metrics. Whether you're a small business just getting started online or an established company looking to expand into new markets, our team combines local market understanding with strategies that work across borders, so your growth never stays confined to one city or one country." },
        ],
      },
      {
        key: "marketingCTA",
        label: "Let's Put Your Brand on the Map",
        fields: [
          { key: "marketingCtaEyebrow", label: "Eyebrow Label", type: "text", default: "BizzBuzz Creations" },
          { key: "marketingCtaHeading", label: "Heading", type: "text", default: "Let’s Put Your Brand on the Map" },
          { key: "marketingCtaParagraph", label: "Paragraph", type: "textarea", default: "Whether you're launching, scaling, or ready for a fresh marketing direction, tell us what you're working on. We'll show you the smartest way forward." },
          { key: "marketingCtaButtonText", label: "Button Text", type: "text", default: "Get Free Consultation Now" },
          { key: "marketingCtaBackgroundImage", label: "Background Image", type: "image", default: "/building.jpg" },
          { key: "stagesEyebrow", label: "Cards Eyebrow Label", type: "text", default: "Wherever You Are, We Have a Path" },
          {
            key: "stages",
            label: "Path Cards (same order as: SEO, Digital Marketing, Social Media, Web Development, Branding, Case Studies)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "ctaText", label: "Link Text", type: "text" },
            ],
            default: [
              { title: "Get Found on Google", description: "Boost visibility and attract the right audience with smarter SEO.", ctaText: "Explore SEO Services" },
              { title: "Own Your Digital Space", description: "Build a stronger online presence with strategies made for growth.", ctaText: "Explore Digital Marketing Services" },
              { title: "Make Social Work Harder", description: "Turn attention and engagement into meaningful business growth.", ctaText: "Explore Social Media Marketing" },
              { title: "Build a Website That Sells", description: "Create a website that engages visitors and drives conversions.", ctaText: "Explore Web Development Services" },
              { title: "Make Your Brand Stand Out", description: "Build a memorable identity that makes your business impossible to ignore.", ctaText: "Explore Branding Services" },
              { title: "See Growth in Action", description: "Explore our work, strategies, and results for growing businesses.", ctaText: "View Our Case Studies" },
            ],
          },
        ],
      },
      {
        key: "contactFaq",
        label: "FAQs",
        fields: [
          { key: "contactFaqEyebrow", label: "Eyebrow Label", type: "text", default: "Got Questions?" },
          { key: "contactFaqHeading", label: "Heading", type: "text", default: "Frequently Asked Questions" },
          {
            key: "contactFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              { question: "How can I get started with BizzBuzz Creations?", answer: "You can get started by filling out our contact form and booking a free consultation. We'll discuss your business goals, challenges, requirements, and the right digital marketing or technology solution for you." },
              { question: "Does BizzBuzz Creations provide digital marketing services in Prayagraj?", answer: "Yes. BizzBuzz Creations is a digital marketing agency serving businesses in Prayagraj, across India, and worldwide, with services including SEO, social media marketing, Google Ads, web design, and web development." },
              { question: "What digital marketing services does BizzBuzz Creations offer?", answer: "We provide SEO, social media marketing, Google Ads, web design, web development, content marketing, and other digital solutions designed to improve online visibility, generate leads, and support business growth." },
              { question: "Can BizzBuzz Creations work with businesses outside India?", answer: "Yes. We work with businesses beyond India and can provide digital marketing, website development, and other digital solutions for brands targeting international markets." },
              { question: "How much do digital marketing and web development services cost?", answer: "The cost depends on your goals, project scope, services required, and target market. Contact us for a free consultation and a customized proposal based on your specific requirements." },
              { question: "How quickly can I expect results from digital marketing?", answer: "The timeline depends on the service and your goals. SEO generally requires consistent effort over time, while paid advertising can generate visibility and leads faster. We create a strategy based on your business objectives and track performance along the way." },
            ],
          },
        ],
      },
      {
        key: "joinTeam",
        label: "Join Our Team!",
        fields: [
          { key: "joinTeamEyebrow", label: "Eyebrow Label", type: "text", default: "We’re Always Looking for Great Talent" },
          { key: "joinTeamHeading", label: "Heading", type: "text", default: "Join Our Team!" },
          { key: "joinTeamParagraph", label: "Paragraph", type: "textarea", default: "Bring your ideas. Build your skills. Create work you're proud of." },
          { key: "joinTeamEmailButtonText", label: "Email Button Text", type: "text", default: "Drop An Email" },
          { key: "joinTeamCareersButtonText", label: "Careers Button Text", type: "text", default: "See All Careers" },
          { key: "joinTeamImage", label: "Image", type: "image", default: "/teamPic.webp" },
        ],
      },
    ],
  },
];

export function getPageMeta(pageKey) {
  return PAGE_CONTENT_REGISTRY.find((p) => p.key === pageKey);
}

// Flat { fieldKey: default } map for a page — used to fall back to real
// site copy when no saved override exists yet. List fields default to
// their `default` array as-is.
export function getPageDefaults(pageKey) {
  const page = getPageMeta(pageKey);
  if (!page) return {};
  const defaults = {};
  for (const section of page.sections) {
    for (const field of section.fields) {
      defaults[field.key] = field.default;
    }
  }
  return defaults;
}
