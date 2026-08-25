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
          {
            key: "heroHeading",
            label: "Heading",
            type: "text",
            default: "India’s Trusted Digital Marketing Agency",
          },
          {
            key: "heroSubheading",
            label: "Sub-heading",
            type: "text",
            default:
              "Turn Clicks Into Customers With Data-Driven Digital Marketing",
          },
          {
            key: "heroSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.",
          },
          {
            key: "heroCtaText",
            label: "Button Text",
            type: "text",
            default: "Get Free Consultation",
          },
          {
            key: "heroPosterImage",
            label: "Background Poster Image (shown before the video loads)",
            type: "image",
            default: "/hero (1).webp",
          },
          {
            key: "heroVideo",
            label: "Background Video",
            type: "video",
            default: "/Sequence 01 1.mp4",
          },
        ],
      },
      {
        key: "about",
        label: "About Us",
        fields: [
          {
            key: "aboutEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "About Us",
          },
          {
            key: "aboutHeading",
            label: "Heading",
            type: "text",
            default: "We Are BizzBuzz Creations",
          },
          {
            key: "aboutParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "BizzBuzz Creations is a digital marketing and business solutions agency helping businesses in Prayagraj (Allahabad), across India, and international markets build a stronger digital presence. We understand that every business has different goals, audiences, and challenges, so we focus on practical solutions rather than one-size-fits-all marketing. Our expertise covers SEO, local SEO, Google Ads, social media marketing, website development, content marketing, AI solutions, and marketing automation. From improving search visibility and generating qualified leads to building better websites and streamlining business processes, we bring multiple digital capabilities under one team. Our goal is simple: help businesses reach the right audience, create meaningful opportunities, and build a digital presence that supports long-term growth.",
          },
          {
            key: "aboutButtonText",
            label: "Button Text",
            type: "text",
            default: "Learn More",
          },
          {
            key: "aboutBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "/building.jpg",
          },
        ],
      },
      {
        key: "services",
        label: "Digital Marketing & Business Solutions",
        fields: [
          {
            key: "servicesHeading",
            label: "Heading",
            type: "text",
            default: "Digital Marketing & Business Solutions",
          },
          {
            key: "servicesSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "We don't believe in one-size-fits-all marketing. Our customized digital strategies help businesses attract qualified customers, increase conversions, and grow sustainably.",
          },
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
              {
                heading: "BPO Service",
                subheading: "Reliable Support Teams Without the Overhead",
                description:
                  "Skip the cost and hassle of hiring in-house. Our trained BPO teams handle customer support, back-office operations, and order processing around the clock, so you get dependable service without the overhead of building a full internal team.",
                buttonText: "Explore BPO Services",
              },
              {
                heading: "Website Design & Development",
                subheading:
                  "Build a Website That Converts Visitors Into Customers",
                description:
                  "A slow website kills conversions. We build fast, responsive, and clean websites—from local business pages to custom platforms—designed to deliver a smooth user experience that turns visitors into buyers.",
                buttonText: "Build Your Website",
              },
              {
                heading: "Search Engine Optimization (SEO)",
                subheading:
                  "Increase Your Google Rankings & Drive Organic Traffic",
                description:
                  "Rank higher on Google and AI-driven search engines. We combine technical SEO, local relevance, and quality content to ensure your business in Allahabad, and across India gets found however customers search.",
                buttonText: "Explore SEO Services",
              },
              {
                heading: "Social Media Marketing",
                subheading: "Build a Strong Brand That People Trust",
                description:
                  "Stop the scroll and build a brand that sells. We create high-impact Instagram, Facebook, and YouTube Shorts campaigns, leveraging short-form video and social commerce to drive real customer engagement.",
                buttonText: "Grow Your Social Presence",
              },
              {
                heading: "Google Ads & Paid Marketing",
                subheading: "Reach Customers Ready to Buy",
                description:
                  "Stop wasting ad spend. We launch targeted, AI-optimized campaigns with smart audience segmentation and high-converting landing pages designed to turn clicks into genuine, scalable leads.",
                buttonText: "Start Google Ads",
              },
              {
                heading: "AI Automation",
                subheading: "Automate the Busywork, Scale Without Hiring",
                description:
                  "Free your team from repetitive tasks. We build AI chatbots, lead qualification flows, and workflow automations that respond to customers instantly and route the right leads to your team, 24/7.",
                buttonText: "Automate With AI",
              },
              {
                heading: "Marketing Automation",
                subheading:
                  "Nurture Leads Automatically, Convert While You Sleep",
                description:
                  "Stop letting leads go cold. We set up automated email and follow-up sequences that nurture prospects, qualify interest, and guide them through the buyer's journey without manual chasing.",
                buttonText: "Automate Your Marketing",
              },
              {
                heading: "Business Consulting",
                subheading: "Strategic Guidance for Sustainable Growth",
                description:
                  "Streamline operations and plan for sustainable growth. We bridge the gap between business fundamentals and digital strategy, giving Prayagraj businesses and scaling Indian brands a clear roadmap to success.",
                buttonText: "Speak With a Consultant",
              },
            ],
          },
        ],
      },
      {
        key: "caseStudies",
        label: "Powered by What We Build",
        fields: [
          {
            key: "caseStudiesHeading",
            label: "Heading",
            type: "text",
            default: "Powered by What We Build",
          },
          {
            key: "caseStudiesSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "A closer look at the CRM systems, AI tools, and infrastructure driving real business operations, day in and day out.",
          },
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
              {
                name: "BizzBuzz CRM — Built for Call Centers",
                logo: "",
                tagline:
                  "A custom CRM & customer management portal built for BPO and call center teams — lead tracking, agent workflows, and reporting, all in one platform.",
              },
              {
                name: "AI Voice Calling System",
                logo: "",
                tagline:
                  "An in-house AI voice agent that qualifies leads, answers FAQs, and transfers calls to humans — built for real outbound call volume, not a demo.",
              },
              {
                name: "WhatsApp & n8n Sales Automation",
                logo: "",
                tagline:
                  "A self-hosted automation engine that runs our own cold-calling and lead pipeline — WhatsApp, workflows, and outreach, fully connected.",
              },
              {
                name: "Self-Hosted Cloud Infrastructure",
                logo: "",
                tagline:
                  "Our own servers, our own rules, and a self-managed Proxmox infrastructure powering every product we build, with zero third-party hosting dependency.",
              },
              {
                name: "This Website Built In-House",
                logo: "",
                tagline:
                  "Designed, developed, and deployed end-to-end by our own team — proof of the same web development we offer clients.",
              },
              {
                name: "Production-Grade DevOps Pipeline",
                logo: "",
                tagline:
                  "Automated CI/CD deployment, monitoring, and uptime management running our own products in production — the same discipline we bring to client projects.",
              },
              {
                name: "Custom Analytics & Reporting Dashboard",
                logo: "",
                tagline:
                  "An in-house dashboard that pulls campaign, CRM, and infrastructure data into one place — real numbers our team acts on, not scattered spreadsheets.",
              },
            ],
          },
        ],
      },
      {
        key: "stats",
        label: "Why Our Way of Working Is Different (scrolling cards)",
        fields: [
          {
            key: "statsHeading",
            label: "Heading",
            type: "text",
            default: "Here’s Why Our Way of Working Is Different",
          },
          {
            key: "statCards",
            label: "Cards",
            type: "list",
            itemFields: [
              { key: "tag", label: "Tag", type: "text" },
              { key: "value", label: 'Number (e.g. "01.")', type: "text" },
              { key: "label", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                tag: "Why It's Different",
                value: "01.",
                label: "One Team, Multiple Capabilities",
                description:
                  "Get SEO, Google Ads, social media marketing, web development, AI, automation, and BPO support from one connected digital team.",
              },
              {
                tag: "Why It's Different",
                value: "02.",
                label: "Solutions Built Around You",
                description:
                  "We consider your industry, audience, market, and business needs to recommend digital solutions that fit your objectives.",
              },
              {
                tag: "Why It's Different",
                value: "03.",
                label: "Clear From Day One",
                description:
                  "Know what's included, what we're working on, and what to expect through straightforward communication and practical recommendations.",
              },
              {
                tag: "Why It's Different",
                value: "04.",
                label: "Built to Adapt With You",
                description:
                  "Start with the services you need today and expand into SEO, advertising, technology, automation, or business support as your needs evolve.",
              },
            ],
          },
        ],
      },
      {
        key: "aiShowcase",
        label: "",
        fields: [
          {
            key: "aiHeadingMain",
            label: "Heading",
            type: "text",
            default: "Make AI Work for Your Business",
          },
          {
            key: "aiParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "From AI chatbots and intelligent agents to workflow automation, AI-powered content, and AI search optimization, we help businesses in Prayagraj, across India, and worldwide put practical AI solutions to work.",
          },
          {
            key: "aiPosterImage",
            label: "Video Poster Image",
            type: "image",
            default: "/aiservice.webp",
          },
          {
            key: "aiVideo",
            label: "Video",
            type: "video",
            default: "/Sequence 01 1.mp4",
          },
          {
            key: "aiButtonText",
            label: "Button Text (links to AI Solutions page)",
            type: "text",
            default: "Explore AI Solutions",
          },
          {
            key: "aiFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "AI Agents & Chatbots",
                description:
                  "Automate conversations, qualify leads, answer questions, and support customers 24/7.",
              },
              {
                title: "Smart Business Automation",
                description:
                  "Reduce repetitive work with AI-powered workflows, integrations, and process automation.",
              },
              {
                title: "AI-Powered Content",
                description:
                  "Create and manage content faster with intelligent systems built around your brand and marketing needs.",
              },
              {
                title: "AI Search Optimization",
                description:
                  "Improve your visibility across AI-powered search and emerging discovery platforms.",
              },
            ],
          },
        ],
      },
      {
        key: "process",
        label: "Our Process",
        fields: [
          {
            key: "processHeading",
            label: "Heading",
            type: "text",
            default: "Our Process",
          },
          {
            key: "processSubtext",
            label: "Subtext",
            type: "text",
            default: "A Proven Framework for Measurable Digital Growth.",
          },
          {
            key: "processSteps",
            label: "Process Steps",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Free Consultation & Business Audit",
                description:
                  "We study your business, competitors, and current online presence to spot quick wins and growth gaps.",
              },
              {
                title: "Custom Strategy Design",
                description:
                  "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget.",
              },
              {
                title: "Campaign Execution",
                description:
                  "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics.",
              },
              {
                title: "Reporting & Continuous Optimization",
                description:
                  "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding.",
              },
            ],
          },
        ],
      },
      {
        key: "whyChooseUs",
        label: "Why Businesses Continue Working With Us",
        fields: [
          {
            key: "whyChooseHeading",
            label: "Heading",
            type: "text",
            default: "Why Businesses Continue Working With Us",
          },
          {
            key: "whyChooseImage",
            label: "Image",
            type: "image",
            default: "/why-choose-image.png",
          },
          {
            key: "whyChooseFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Transparent Reporting",
                description:
                  "Know exactly where your marketing budget is invested with detailed reports and actionable insights.",
              },
              {
                title: "Dedicated Marketing Experts",
                description:
                  "Our team continuously monitors industry trends, and emerging technologies to keep your business ahead of competitors.",
              },
              {
                title: "Data-Driven Decision Making",
                description:
                  "Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions.",
              },
              {
                title: "Long-Term Partnership",
                description:
                  "We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth.",
              },
            ],
          },
        ],
      },
      {
        key: "recognitions",
        label: "Certifications & Trust",
        fields: [
          {
            key: "recognitionsEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Certifications & Trust",
          },
          {
            key: "recognitionsHeading",
            label: "Heading",
            type: "text",
            default: "Proven Expertise. Real Recognition.",
          },
          {
            key: "clutchBadgeImage",
            label: "Clutch Badge Image",
            type: "image",
            default: "/clutch.png",
          },
          {
            key: "clutchTitle",
            label: "Clutch Description",
            type: "text",
            default:
              "Listed among trusted digital marketing agencies on Clutch",
          },
          {
            key: "googleAdsBadgeImage",
            label: "Google Ads Partner Badge Image",
            type: "image",
            default: "/CDL.png",
          },
          {
            key: "googleAdsTitle",
            label: "Google Ads Partner Description",
            type: "text",
            default: "Certified Google Ads & Marketing Partner",
          },
          {
            key: "googleAnalyticsBadgeImage",
            label: "Google Analytics Badge Image",
            type: "image",
            default: "/GA.png",
          },
          {
            key: "googleAnalyticsTitle",
            label: "Google Analytics Description",
            type: "text",
            default: "Certified Google Analytics Partner",
          },
          {
            key: "isoBadgeImage",
            label: "ISO Badge Image",
            type: "image",
            default: "/ISO.png",
          },
          {
            key: "isoTitle",
            label: "ISO Description",
            type: "text",
            default: "Quality-certified business processes",
          },
        ],
      },
      {
        key: "industries",
        label: "Industries We Serve",
        fields: [
          {
            key: "industriesEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Industries We Serve",
          },
          {
            key: "industriesHeading",
            label: "Heading",
            type: "text",
            default: "Digital Solutions for Businesses Across Industries",
          },
          {
            key: "industriesSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "From healthcare and finance to e-commerce, travel, education, and manufacturing, we deliver digital marketing, SEO, web development, and technology solutions tailored to how your industry works.",
          },
        ],
      },
      {
        key: "reviews",
        label: "Customer Reviews",
        fields: [
          {
            key: "reviewsHeading",
            label: "Heading",
            type: "text",
            default: "Customer Reviews",
          },
          {
            key: "reviewsSubtext",
            label: "Subtext",
            type: "text",
            default: "See what our customers have to say about us.",
          },
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
              {
                name: "Sunayana Srivastava",
                role: "Verified Google Review",
                text: "Great Digital Marketing agency! Professional, creative & result oriented. Our campaigns have performed better than ever since partnering with BizzBuzz creations. Highly recommend their services.",
              },
              {
                name: "Raunak Tripathi",
                role: "Verified Google Review",
                text: "Great experience with Bizzbuzz Creations. Professional, responsive, and delivered quality work on time. Highly recommended for growing your business.",
              },
              {
                name: "Subhash Srivastava",
                role: "Verified Google Review",
                text: "Highly professional and competent team. Very cooperative and prompt their services. The city needs such a service providers. I would recommend this organisation highly to everyone.",
              },
              {
                name: "Sarthak Mishra",
                role: "Verified Google Review",
                text: "Awesome experience with bizz buzz creations. Great for people and companies looking out for digital marketing agency.",
              },
              {
                name: "Tariq Khan",
                role: "Verified Google Review",
                text: "Best digital marketing agency in prayagraj. They are very professional and cooperative. I am very happy with their services. I would recommend this organisation highly to everyone.",
              },
              {
                name: "Rudra Pratap Singh",
                role: "Verified Google Review",
                text: "One of the best digital marketing service providers in Prayagraj. The team is highly trustworthy and delivers outstanding SEO results. Great experience overall!",
              },
            ],
          },
        ],
      },
      {
        key: "faq",
        label: "FAQs",
        fields: [
          {
            key: "faqHeading",
            label: "Heading",
            type: "text",
            default: "FAQs",
          },
          {
            key: "faqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              {
                question: "What does BizzBuzz Creations do?",
                answer:
                  "We're a full-stack digital marketing and business solutions agency offering SEO, social media marketing, Google Ads, website development, AI automation, marketing automation, BPO support, and business consultancy under one team.",
              },
              {
                question: "Do you only work with businesses in Prayagraj?",
                answer:
                  "No. We work with businesses in Prayagraj, across India, and internationally with the same team and process, wherever you're based.",
              },
              {
                question:
                  "Do I have to hire you for everything, or can I pick one service?",
                answer:
                  "You can start with a single service — SEO, ads, or a website, for example — and add more later as your needs grow. Nothing is bundled or forced.",
              },
              {
                question:
                  "How much does it cost to work with BizzBuzz Creations?",
                answer:
                  "There's no fixed package pricing; it depends on the services and scope you need. Every engagement starts with a free consultation, so you get a clear quote before committing to anything.",
              },
              {
                question: "How do I get started?",
                answer:
                  "Book a free consultation. We'll look at your business, current online presence, and goals, then recommend the right starting point — no pressure, no obligation.",
              },
              {
                question:
                  "What makes BizzBuzz Creations different from other agencies?",
                answer:
                  "One team, one point of contact, and full ownership of your accounts and data — no vendor lock-in, no juggling five different agencies for one growth strategy.",
              },
            ],
          },
        ],
      },
      {
        key: "popup",
        label: "Consultation Popup",
        fields: [
          {
            key: "popupHeaderTitle",
            label: "Header Bar Title",
            type: "text",
            default: "Book Your Consultation Now",
          },
          {
            key: "popupTitle",
            label: "Left Panel Title",
            type: "text",
            default: "BizzBuzz Creations",
          },
          {
            key: "popupTagline",
            label: "Left Panel Tagline",
            type: "text",
            default: "Innovate and Integrate Everyday",
          },
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
          {
            key: "aboutHeroHeading",
            label: "Heading",
            type: "text",
            default: "India’s Digital Marketing Agency, Trusted Worldwide",
          },
          {
            key: "aboutHeroSubheading",
            label: "Tagline",
            type: "text",
            default: "Systems first. Campaigns second.",
          },
          {
            key: "aboutHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Built and based in India, BizzBuzz Creations helps businesses across India and worldwide grow through data-driven strategy, design, and technology, not just ads.",
          },
          {
            key: "aboutHeroStat1",
            label: "Highlight 1",
            type: "text",
            default: "Data-Driven Strategy, Not Guesswork",
          },
          {
            key: "aboutHeroStat2",
            label: "Highlight 2",
            type: "text",
            default: "Serving Businesses Across India & Worldwide",
          },
          {
            key: "aboutHeroButtonText",
            label: "Button Text (links to Services page)",
            type: "text",
            default: "Build Your Digital Growth Strategy",
          },
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
          {
            key: "storyHeading",
            label: "Heading",
            type: "text",
            default: "Our Story",
          },
          {
            key: "storySubheading",
            label: "Sub-heading",
            type: "text",
            default: "From Local Projects to Global Ambition",
          },
          {
            key: "storyImage",
            label: "Image",
            type: "image",
            default: "/banner.png",
          },
          {
            key: "storyParagraphOne",
            label: "Paragraph 1",
            type: "textarea",
            default:
              "Every big journey starts somewhere. Ours began in Prayagraj (Allahabad), India, with a simple belief: marketing shouldn't feel like guesswork.",
          },
          {
            key: "storyParagraphTwo",
            label:
              "Paragraph 2 (default text includes a link to the Services page — editing this replaces it with plain text)",
            type: "textarea",
            default:
              "BizzBuzz Creations started with a small team of marketers, designers, and strategists determined to help businesses get more from their digital presence. What began locally in Prayagraj has grown into a digital marketing agency serving businesses across India, the UK, the US, and beyond.",
          },
          {
            key: "storyParagraphThree",
            label:
              "Paragraph 3 (default text includes links to SEO and Paid Marketing pages — editing this replaces it with plain text)",
            type: "textarea",
            default:
              "Today, we bring together strategy, creativity, technology, SEO, and performance marketing to help businesses build stronger brands, reach the right audiences, and achieve meaningful digital growth.",
          },
          {
            key: "storyParagraphFour",
            label: "Paragraph 4",
            type: "textarea",
            default:
              "Our ambition is global, but our approach remains personal: understand the business, build the right strategy, and focus on results that actually matter.",
          },
        ],
      },
      {
        key: "missionVision",
        label: "Mission, Vision & Core Values",
        fields: [
          {
            key: "missionVisionHeading",
            label: "Heading",
            type: "text",
            default: "Our Mission, Vision & Core Values",
          },
          {
            key: "missionTitle",
            label: "Mission Title",
            type: "text",
            default: "Our Mission",
          },
          {
            key: "missionText",
            label: "Mission Text",
            type: "textarea",
            default:
              "To help every business unlock measurable growth through smart, ethical, and future-ready digital marketing — no fluff, no shortcuts, only strategy that works.",
          },
          {
            key: "visionTitle",
            label: "Vision Title",
            type: "text",
            default: "Our Vision",
          },
          {
            key: "visionText",
            label: "Vision Text",
            type: "textarea",
            default:
              "To become India's most trusted digital marketing partner, known for turning ambitious brands into industry leaders through innovation and consistency.",
          },
          {
            key: "coreValuesHeading",
            label: "Core Values Heading",
            type: "text",
            default: "Our Core Values",
          },
          {
            key: "coreValues",
            label: "Core Value Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Results Over Reports",
                description:
                  "We measure success in real growth, not just polished monthly PDFs.",
              },
              {
                title: "Transparency First",
                description:
                  "Clear communication, honest timelines, and zero hidden agendas, always.",
              },
              {
                title: "Innovation-Led Thinking",
                description:
                  "We track algorithm shifts and AI search trends before they trend.",
              },
              {
                title: "Client-Centric Culture",
                description:
                  "Every strategy is built around your business, never a generic template.",
              },
              {
                title: "Integrity in Execution",
                description:
                  "Ethical, white-hat practices that protect your brand's reputation long-term.",
              },
            ],
          },
        ],
      },
      {
        key: "journey",
        label: "Our Journey So Far",
        fields: [
          {
            key: "journeyHeading",
            label: "Heading",
            type: "text",
            default: "Our Journey So Far",
          },
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
              {
                year: "2022",
                title: "Building the Foundation",
                body: "We began our journey with a focus on digital marketing, creative branding, and online business growth, helping brands establish a stronger and more meaningful digital presence.",
                img: "/image-7.jpg",
              },
              {
                year: "2023",
                title: "Expanding Digital Expertise",
                body: "We continued developing our expertise in SEO, social media marketing, content marketing, website solutions, and digital branding to create stronger online experiences for growing businesses.",
                img: "/image-2.jpg",
              },
              {
                year: "2024",
                title: "Strengthening Our Approach",
                body: "Our focus evolved toward result-driven digital marketing strategies, combining SEO, content, social media, branding, and web solutions to help businesses build visibility and connect with their audiences.",
                img: "/image-5.webp",
              },
              {
                year: "2025",
                title: "Growing Digital Possibilities",
                body: "We continued refining our digital marketing and SEO strategies, focusing on stronger brand visibility, engaging content, effective online campaigns, and sustainable digital growth across different business needs.",
                img: "/image-4.webp",
              },
              {
                year: "2026",
                title: "Where We Are Today",
                body: "Today, we continue building smarter digital marketing, SEO, branding, content, social media, and web strategies, helping businesses strengthen their online presence and grow with confidence.",
                img: "/teamPic.webp",
              },
            ],
          },
        ],
      },
      {
        key: "differentiators",
        label: "Built Different, Built to Perform",
        fields: [
          {
            key: "differentiatorsHeading",
            label: "Heading",
            type: "text",
            default: "Built Different, Built to Perform",
          },
          {
            key: "differentiatorsSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              'In a market flooded with agencies promising "guaranteed rankings," we chose a different path — building sustainable digital growth systems instead of chasing quick wins.',
          },
          {
            key: "differentiatorItems",
            label: "Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Data Over Guesswork",
                desc: 'Every decision is backed by real performance data, not assumptions or industry "best guesses."',
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
              {
                title: "We Build With Real Ownership",
                body: "At BizzBuzz Creations, clear communication and accountability drive everything we do. Our digital marketing team in Prayagraj takes ownership from strategy to execution, turning ideas into marketing that creates real business impact.",
                img: "/image-2.jpg",
              },
              {
                title: "We Work As One Team",
                body: "Our teams work together across strategy, design, technology, SEO, and digital marketing. Based in Prayagraj, India, with an international outlook, we bring different skills together to build smarter digital solutions for businesses.",
                img: "/image-4.webp",
              },
              {
                title: "We Grow Together",
                body: "We believe great work comes from continuous learning and shared growth. Our team works on real campaigns, explores new digital strategies, and keeps developing the skills needed to deliver better marketing results for businesses in India and worldwide.",
                img: "/teamPic.webp",
              },
            ],
          },
        ],
      },
      {
        key: "roadmap",
        label: "How Our Digital Marketing Process Works",
        fields: [
          {
            key: "roadmapHeading",
            label: "Heading",
            type: "text",
            default: "How Our Digital Marketing Process Works",
          },
          {
            key: "roadmapSubheading",
            label: "Sub-heading",
            type: "text",
            default: "The Bizzbuzz Growth Blueprint",
          },
          {
            key: "roadmapIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "We follow a structured, repeatable process that has helped us deliver consistent results across 90+ projects.",
          },
          {
            key: "roadmapSteps",
            label: "Roadmap Steps",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Discover & Audit",
                desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities.",
              },
              {
                title: "Strategize",
                desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals.",
              },
              {
                title: "Create & Execute",
                desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content.",
              },
              {
                title: "Optimize & Scale",
                desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI.",
              },
              {
                title: "Report & Grow",
                desc: "Transparent reporting and regular strategy calls keep growth compounding long after launch day.",
              },
            ],
          },
          {
            key: "roadmapClosing",
            label: "Closing Paragraph",
            type: "textarea",
            default:
              "This roadmap is the reason our clients don't just get short-term spikes — they get compounding, long-term digital growth.",
          },
        ],
      },
      {
        key: "trust",
        label: "Why Businesses Choose BizzBuzz Creations",
        fields: [
          {
            key: "trustHeading",
            label: "Heading",
            type: "text",
            default: "Why Businesses Choose BizzBuzz Creations",
          },
          {
            key: "trustIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that.",
          },
          {
            key: "trustItems",
            label: "Trust Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Proven Track Record",
                desc: "90+ projects delivered across India with real, measurable business outcomes.",
              },
              {
                title: "Future-Focused SEO",
                desc: "We optimize for traditional search, AI search, and voice assistants — all at once.",
              },
              {
                title: "End-to-End Services",
                desc: "SEO, paid ads, content, social, and web design — everything under one roof.",
              },
              {
                title: "Honest Partnerships",
                desc: "No inflated promises, just clear strategy, consistent effort, and steady growth.",
              },
              {
                title: "Dedicated Account Support",
                desc: "You get a real team that knows your brand, not a ticket number.",
              },
              {
                title: "Growing Client Base",
                desc: "50+ businesses across India already trust us with their growth.",
              },
            ],
          },
          {
            key: "trustClosing",
            label: "Closing Paragraph",
            type: "textarea",
            default:
              "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that.",
          },
        ],
      },
      {
        key: "aboutFaq",
        label: "FAQs",
        fields: [
          {
            key: "aboutFaqHeading",
            label: "Heading",
            type: "text",
            default: "FAQs",
          },
          {
            key: "aboutFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
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
                question:
                  "What digital marketing services does BizzBuzz Creations offer?",
                answer:
                  "BizzBuzz Creations provides SEO, digital marketing, social media marketing, paid advertising, content marketing, web design and development, and digital strategy. Services can be combined based on your business goals.",
              },
              {
                question:
                  "Does BizzBuzz Creations work with businesses outside Prayagraj?",
                answer:
                  "Yes. While we work with businesses in Prayagraj and across India, we also help businesses in international markets build their online presence, generate leads, and achieve sustainable digital growth.",
              },
              {
                question:
                  "Why choose BizzBuzz Creations as your digital marketing agency?",
                answer:
                  "We focus on strategy before campaigns, measurable growth over vanity metrics, and long-term digital performance. Every strategy is tailored to the business, audience, competition, and goals rather than using a one-size-fits-all approach.",
              },
              {
                question: "How can I get started with BizzBuzz Creations?",
                answer:
                  "Contact our team to discuss your business, current digital presence, and growth goals. We'll identify the right opportunities and help you build a practical digital marketing strategy designed around your business.",
              },
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
          {
            key: "servicesHeroHeading",
            label: "Heading",
            type: "text",
            default: "Stop Juggling Agencies. Start Growing.",
          },
          {
            key: "servicesHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "SEO, ads, web development and automation — one roof, one team, wherever your customers are.",
          },
          {
            key: "servicesHeroButtonText",
            label: "Primary Button Text (scrolls to the services grid)",
            type: "text",
            default: "Explore Our Services",
          },
          {
            key: "servicesHeroSecondaryButtonText",
            label: "Secondary Button Text (links to Contact page)",
            type: "text",
            default: "Get a Free Consultation",
          },
        ],
      },
      {
        key: "servicesGrid",
        label: "Services Grid",
        fields: [
          {
            key: "servicesGridHeading",
            label: "Heading",
            type: "text",
            default: "Explore Our Digital Growth Services",
          },
          {
            key: "servicesGridSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Choose the services that match your goals, or combine multiple solutions to support different areas of your business.",
          },
          {
            key: "serviceDescriptions",
            label:
              "Service Cards (same order as: SEO, Social Media, Paid Ads, Web Development, BPO, AI Solutions, Marketing Automation, Business Consultancy)",
            type: "list",
            itemFields: [
              { key: "description", label: "Description", type: "textarea" },
              { key: "buttonText", label: "Link Text", type: "text" },
            ],
            default: [
              {
                description:
                  "Improve search visibility, attract qualified organic traffic, and build sustainable growth with technical SEO, content, on-page optimization, and link-building strategies.",
                buttonText: "Explore SEO Services",
              },
              {
                description:
                  "Build your brand presence and engage the right audience with strategic content, social media management, paid campaigns, and platform-specific marketing strategies.",
                buttonText: "Explore Social Media Marketing",
              },
              {
                description:
                  "Reach high-intent customers faster with targeted Google Ads and paid campaigns designed to increase qualified traffic, generate leads, and maximize marketing performance.",
                buttonText: "Explore Paid Marketing",
              },
              {
                description:
                  "Build fast, responsive, SEO-friendly websites that strengthen your online presence, deliver better user experiences, and turn visitors into meaningful business opportunities.",
                buttonText: "Explore Website Development",
              },
              {
                description:
                  "Improve operational efficiency with reliable BPO and customer support solutions covering customer queries, order support, back-office operations, and business processes.",
                buttonText: "Explore BPO Services",
              },
              {
                description:
                  "Use AI-powered solutions, intelligent chatbots, workflow automation, and custom systems to reduce repetitive work, improve efficiency, and support smarter business operations.",
                buttonText: "Explore AI Solutions",
              },
              {
                description:
                  "Streamline lead nurturing and follow-ups with CRM workflows, email automation, customer journeys, and marketing systems that keep your sales process moving consistently.",
                buttonText: "Explore Marketing Automation",
              },
              {
                description:
                  "Get practical business guidance through strategic audits, workshops, market insights, and growth roadmaps designed to help you make better decisions with confidence.",
                buttonText: "Explore Business Consultancy",
              },
            ],
          },
        ],
      },
      {
        key: "engagement",
        label: "What Every Engagement Includes",
        fields: [
          {
            key: "engagementEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "How We Work",
          },
          {
            key: "engagementHeading",
            label: "Heading",
            type: "text",
            default: "A Better Experience From Start to Finish",
          },
          {
            key: "engagementSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Simple communication, clear ownership, and a straightforward experience without the usual agency complications.",
          },
          {
            key: "engagementFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "One Point of Contact",
                desc: "Keep communication simple with a dedicated team that understands your business and ongoing requirements.",
              },
              {
                title: "You Own Your Accounts",
                desc: "Your website, advertising accounts, analytics, data, and digital assets remain under your ownership.",
              },
              {
                title: "Clear Scope & Pricing",
                desc: "Know what's included, what's being delivered, and where your budget is going before work begins.",
              },
              {
                title: "No Long-Term Lock-In",
                desc: "Choose the services you need without being pushed into unnecessary packages or complicated commitments.",
              },
              {
                title: "Secure Information Handling",
                desc: "Your business information, account access, and project details are handled with appropriate confidentiality and care.",
              },
              {
                title: "Support When You Need It",
                desc: "Get help when questions, changes, or new requirements come up instead of being left to figure them out alone.",
              },
            ],
          },
        ],
      },
      {
        key: "scenarios",
        label: "Find the Right Service for Your Problem",
        fields: [
          {
            key: "scenariosEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Not Sure Where to Start?",
          },
          {
            key: "scenariosHeading",
            label: "Heading",
            type: "text",
            default: "What Are You Trying to Fix?",
          },
          {
            key: "scenariosSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Start with the challenge, not the service. We'll help you find the right digital solution.",
          },
          {
            key: "scenarioQuestions",
            label:
              "Problem Cards (same order as: SEO, Web Development, Paid Ads, Social Media, AI Solutions, BPO, Business Consultancy, Web Development)",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "detail", label: "Description", type: "textarea" },
            ],
            default: [
              {
                question: "Not Getting Enough Traffic?",
                detail:
                  "Improve your online visibility and attract more qualified visitors through SEO and search-focused content.",
              },
              {
                question: "Getting Traffic but Few Enquiries?",
                detail:
                  "Strengthen your website experience, messaging, and conversion paths to turn more visitors into potential customers.",
              },
              {
                question: "Need More Leads Quickly?",
                detail:
                  "Reach customers with high purchase intent through targeted Google Ads and paid digital campaigns.",
              },
              {
                question: "Struggling to Stay Consistent on Social Media?",
                detail:
                  "Build a stronger presence with content planning, social media management, and audience-focused campaigns.",
              },
              {
                question: "Too Many Repetitive Tasks?",
                detail:
                  "Reduce manual work with AI-powered tools, automated workflows, and connected marketing systems.",
              },
              {
                question: "Customer Support Taking Too Much Time?",
                detail:
                  "Delegate customer queries and routine business operations to reliable BPO and support teams.",
              },
              {
                question: "Not Sure What Your Business Needs Next?",
                detail:
                  "Get an outside perspective on your digital presence, opportunities, and priorities before investing further.",
              },
              {
                question: "Need a Better Online Foundation?",
                detail:
                  "Create a fast, responsive website that gives your brand a stronger digital presence and supports customer acquisition.",
              },
            ],
          },
        ],
      },
      {
        key: "servicesProcess",
        label: "Why Choose Us",
        fields: [
          {
            key: "servicesProcessEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Why Choose Us?",
          },
          {
            key: "servicesProcessHeading",
            label: "Heading",
            type: "text",
            default: "Why Businesses Choose BizzBuzz Creations",
          },
          {
            key: "servicesProcessSubtext",
            label: "Subtext",
            type: "text",
            default:
              "More than individual services, you get one team that understands the bigger picture of your digital presence.",
          },
          {
            key: "servicesProcessSteps",
            label: "Why Choose Us Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Everything Under One Roof",
                description:
                  "SEO, paid advertising, social media, websites, AI, automation, BPO, and consultancy without coordinating multiple agencies.",
              },
              {
                title: "Built Around Your Business",
                description:
                  "We consider your industry, audience, market, and requirements instead of forcing your business into a standard package.",
              },
              {
                title: "Flexible as You Grow",
                description:
                  "Start with what you need today and add services as new opportunities, challenges, and business requirements emerge.",
              },
              {
                title: "Focused on Business Outcomes",
                description:
                  "Our work is designed to support meaningful outcomes such as visibility, enquiries, customers, efficiency, and stronger digital operations.",
              },
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
          {
            key: "industriesHeroEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Industries",
          },
          {
            key: "industriesHeroHeading",
            label: "Heading",
            type: "text",
            default: "Digital Growth Solutions for Every Industry",
          },
          {
            key: "industriesHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Every industry has different goals, audiences, and challenges. We create tailored digital marketing, BPO, and web solutions that fit the way your business works.",
          },
          {
            key: "industriesHeroButtonText",
            label: "Button Text",
            type: "text",
            default: "Explore Our Solutions",
          },
        ],
      },
      {
        key: "industriesGrid",
        label: "Industries Grid",
        fields: [
          {
            key: "industriesGridEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Industries We Serve",
          },
          {
            key: "industriesGridHeading",
            label: "Heading",
            type: "text",
            default: "Built Around Your Industry",
          },
          {
            key: "industriesGridSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Every industry is different. We create digital strategies built around your business, audience, and goals.",
          },
          {
            key: "industriesCardImages",
            label:
              "Card Background Images (cycled across the industry cards, in order)",
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
            label:
              "Industry Cards (title, description, and which service page each links to)",
            type: "list",
            itemFields: [
              { key: "title", label: "Industry", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "linkText", label: "Link Text", type: "text" },
              { key: "linkHref", label: "Link URL", type: "text" },
            ],
            default: [
              {
                title: "Healthcare",
                description:
                  "Build a stronger healthcare presence with digital marketing, SEO, and websites designed to connect with patients.",
                linkText: "Learn More",
                linkHref: "/industries/healthcare",
              },
              {
                title: "Finance",
                description:
                  "Strengthen your finance brand with digital strategies that build visibility, trust, engagement, and qualified customer opportunities.",
                linkText: "Learn More",
                linkHref: "/industries/finance",
              },
              {
                title: "Restaurant",
                description:
                  "Attract more diners with local SEO, social media, and digital marketing strategies built for restaurant growth.",
                linkText: "Learn More",
                linkHref: "/industries/restaurant",
              },
              {
                title: "Wearables",
                description:
                  "Grow your wearable technology brand with digital strategies that improve visibility, engagement, and online customer discovery.",
                linkText: "Learn More",
                linkHref: "/industries/wearables",
              },
              {
                title: "Entertainment",
                description:
                  "Reach wider audiences with creative digital marketing, social media, and content strategies built for entertainment brands.",
                linkText: "Learn More",
                linkHref: "/industries/entertainment",
              },
              {
                title: "Travel",
                description:
                  "Increase bookings and brand visibility with SEO, digital marketing, and engaging online experiences for travel businesses.",
                linkText: "Learn More",
                linkHref: "/industries/travel",
              },
              {
                title: "Fitness",
                description:
                  "Build a stronger fitness brand with digital marketing strategies that attract members, increase visibility, and drive growth.",
                linkText: "Learn More",
                linkHref: "/industries/fitness",
              },
              {
                title: "Education",
                description:
                  "Connect with students and learners through SEO, digital marketing, and websites designed for educational businesses.",
                linkText: "Learn More",
                linkHref: "/industries/education",
              },
              {
                title: "Real Estate",
                description:
                  "Generate more property leads with SEO, digital marketing, and conversion-focused websites built for real estate businesses.",
                linkText: "Learn More",
                linkHref: "/industries/real-estate",
              },
              {
                title: "E-commerce",
                description:
                  "Grow your online store with SEO, digital marketing, and conversion-focused strategies designed for e-commerce success.",
                linkText: "Learn More",
                linkHref: "/industries/ecommerce",
              },
              {
                title: "Events",
                description:
                  "Build event awareness and increase registrations with social media, digital marketing, and engaging online campaigns.",
                linkText: "Learn More",
                linkHref: "/industries/events",
              },
              {
                title: "Manufacturing",
                description:
                  "Strengthen your manufacturing business with digital strategies that improve visibility, reach buyers, and generate qualified leads.",
                linkText: "Learn More",
                linkHref: "/industries/manufacturing",
              },
              {
                title: "Fashion & Apparel",
                description:
                  "Build a stronger fashion brand with social media, digital marketing, and e-commerce strategies that turn attention into growth.",
                linkText: "Learn More",
                linkHref: "/industries/fashion-apparel",
              },
              {
                title: "Gaming",
                description:
                  "Reach gaming audiences with engaging digital marketing, social media, and content strategies built around player communities.",
                linkText: "Learn More",
                linkHref: "/industries/gaming",
              },
              {
                title: "Construction",
                description:
                  "Generate qualified leads and strengthen your online presence with SEO, digital marketing, and conversion-focused web solutions.",
                linkText: "Learn More",
                linkHref: "/industries/construction",
              },
            ],
          },
        ],
      },
      {
        key: "industriesCertifications",
        label: "Certified & Recognized By",
        fields: [
          {
            key: "industriesCertHeading",
            label: "Heading",
            type: "text",
            default: "Certified & Recognized By",
          },
          {
            key: "industriesCertSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Real credentials that back up how we work, not just what we say.",
          },
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
          {
            key: "contactHeroHeading",
            label: "Heading",
            type: "text",
            default: "Let’s Turn Your Digital Goals Into a Growth Plan",
          },
          {
            key: "contactHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "You bring the goals. We bring the strategy, execution, and ongoing support. From the first idea to measurable results, our team handles the heavy lifting, so you can focus on growing your business.",
          },
          {
            key: "contactFormHeading",
            label: "Form Heading",
            type: "text",
            default: "Send Us a Message",
          },
          {
            key: "contactFormButtonText",
            label: "Form Submit Button Text",
            type: "text",
            default: "Send Message",
          },
          {
            key: "contactSteps",
            label: "Step Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Tell Us Your Challenge",
                description:
                  "Share your goals, challenges, and what you want to achieve. We'll take the time to understand your business.",
              },
              {
                title: "Get a Free Consultation",
                description:
                  "Talk to our team about your goals, requirements, and priorities. We'll explore the right opportunities for your business.",
              },
              {
                title: "Get a Clear Growth Roadmap",
                description:
                  "Get a practical direction for your next steps, priorities, and opportunities. We'll help you move forward with confidence.",
              },
            ],
          },
        ],
      },
      {
        key: "globeTrust",
        label: "Trusted by Growing Businesses",
        fields: [
          {
            key: "globeEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Trusted by Growing Businesses",
          },
          {
            key: "globeHeading",
            label: "Heading",
            type: "text",
            default: "In Prayagraj, Across India & Worldwide",
          },
          {
            key: "globeParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "From local businesses to growing enterprises, we help brands across Prayagraj, India, and global markets build a digital presence that drives leads and sales — real results, not vanity metrics. Whether you're a small business just getting started online or an established company looking to expand into new markets, our team combines local market understanding with strategies that work across borders, so your growth never stays confined to one city or one country.",
          },
        ],
      },
      {
        key: "marketingCTA",
        label: "Let's Put Your Brand on the Map",
        fields: [
          {
            key: "marketingCtaEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "BizzBuzz Creations",
          },
          {
            key: "marketingCtaHeading",
            label: "Heading",
            type: "text",
            default: "Let’s Put Your Brand on the Map",
          },
          {
            key: "marketingCtaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Whether you're launching, scaling, or ready for a fresh marketing direction, tell us what you're working on. We'll show you the smartest way forward.",
          },
          {
            key: "marketingCtaButtonText",
            label: "Button Text",
            type: "text",
            default: "Get Free Consultation Now",
          },
          {
            key: "marketingCtaTrustLines",
            label: "Trust Lines (below the button)",
            type: "list",
            itemFields: [{ key: "text", label: "Text", type: "textarea" }],
            default: [
              {
                text: "Trusted by growing businesses across Prayagraj, India, and the UK — no long-term lock-in, just a team focused on measurable results.",
              },
              {
                text: "Every engagement starts with a free consultation — no fixed package, just what your business actually needs.",
              },
              {
                text: "Transparent reporting and clear communication, so you always know exactly what's happening and why.",
              },
            ],
          },
          {
            key: "marketingCtaBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "/building.jpg",
          },
          {
            key: "stagesEyebrow",
            label: "Cards Eyebrow Label",
            type: "text",
            default: "Wherever You Are, We Have a Path",
          },
          {
            key: "stages",
            label:
              "Path Cards (same order as: SEO, Digital Marketing, Social Media, Web Development, Branding, Case Studies)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "ctaText", label: "Link Text", type: "text" },
            ],
            default: [
              {
                title: "Get Found on Google",
                description:
                  "Boost visibility and attract the right audience with smarter SEO.",
                ctaText: "Explore SEO Services",
              },
              {
                title: "Own Your Digital Space",
                description:
                  "Build a stronger online presence with strategies made for growth.",
                ctaText: "Explore Digital Marketing Services",
              },
              {
                title: "Make Social Work Harder",
                description:
                  "Turn attention and engagement into meaningful business growth.",
                ctaText: "Explore Social Media Marketing",
              },
              {
                title: "Build a Website That Sells",
                description:
                  "Create a website that engages visitors and drives conversions.",
                ctaText: "Explore Web Development Services",
              },
              {
                title: "Make Your Brand Stand Out",
                description:
                  "Build a memorable identity that makes your business impossible to ignore.",
                ctaText: "Explore Branding Services",
              },
              {
                title: "See Growth in Action",
                description:
                  "Explore our work, strategies, and results for growing businesses.",
                ctaText: "View Our Case Studies",
              },
            ],
          },
        ],
      },
      {
        key: "contactFaq",
        label: "FAQs",
        fields: [
          {
            key: "contactFaqEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Got Questions?",
          },
          {
            key: "contactFaqHeading",
            label: "Heading",
            type: "text",
            default: "Frequently Asked Questions",
          },
          {
            key: "contactFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              {
                question: "How can I get started with BizzBuzz Creations?",
                answer:
                  "You can get started by filling out our contact form and booking a free consultation. We'll discuss your business goals, challenges, requirements, and the right digital marketing or technology solution for you.",
              },
              {
                question:
                  "Does BizzBuzz Creations provide digital marketing services in Prayagraj?",
                answer:
                  "Yes. BizzBuzz Creations is a digital marketing agency serving businesses in Prayagraj, across India, and worldwide, with services including SEO, social media marketing, Google Ads, web design, and web development.",
              },
              {
                question:
                  "What digital marketing services does BizzBuzz Creations offer?",
                answer:
                  "We provide SEO, social media marketing, Google Ads, web design, web development, content marketing, and other digital solutions designed to improve online visibility, generate leads, and support business growth.",
              },
              {
                question:
                  "Can BizzBuzz Creations work with businesses outside India?",
                answer:
                  "Yes. We work with businesses beyond India and can provide digital marketing, website development, and other digital solutions for brands targeting international markets.",
              },
              {
                question:
                  "How much do digital marketing and web development services cost?",
                answer:
                  "The cost depends on your goals, project scope, services required, and target market. Contact us for a free consultation and a customized proposal based on your specific requirements.",
              },
              {
                question:
                  "How quickly can I expect results from digital marketing?",
                answer:
                  "The timeline depends on the service and your goals. SEO generally requires consistent effort over time, while paid advertising can generate visibility and leads faster. We create a strategy based on your business objectives and track performance along the way.",
              },
            ],
          },
        ],
      },
      {
        key: "joinTeam",
        label: "Join Our Team!",
        fields: [
          {
            key: "joinTeamEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "We’re Always Looking for Great Talent",
          },
          {
            key: "joinTeamHeading",
            label: "Heading",
            type: "text",
            default: "Join Our Team!",
          },
          {
            key: "joinTeamParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Bring your ideas. Build your skills. Create work you're proud of.",
          },
          {
            key: "joinTeamEmailButtonText",
            label: "Email Button Text",
            type: "text",
            default: "Drop An Email",
          },
          {
            key: "joinTeamCareersButtonText",
            label: "Careers Button Text",
            type: "text",
            default: "See All Careers",
          },
          {
            key: "joinTeamImage",
            label: "Image",
            type: "image",
            default: "/teamPic.webp",
          },
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
