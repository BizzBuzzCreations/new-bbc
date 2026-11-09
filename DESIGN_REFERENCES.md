# Design references — BizzBuzz Creations rebuild

A running library of the inspiration sites for the rebuild. Each entry was
studied in a real browser (Playwright, Chromium) at desktop 1440 × 900 and
phone 390 × 844: scrolled top to bottom, every interactive part tried
(hover, menu, filters, forms, cursor), fonts / colours / libraries read from
the live page, and reduced-motion checked.

Nothing here is a spec to copy. Each entry ends with what is worth adapting
and what is not; the cross-reference synthesis comes after the last
reference.

---

## Reference 1 — Velmax

**URL:** https://www.velmax.llc/
**What it is:** a small US studio selling bespoke, hand-built websites. One
long page (≈ 15,000 px on desktop, ≈ 23 phone screens), plus case pages
(`/work/seve/`).
**Built with:** hand-written HTML / CSS / vanilla JS, Lenis smooth scroll,
three `<canvas>` elements (hero grid, a scrolling "tape", footer
wordmark), CSS View Transitions between pages. No GSAP, no framework.
0 console errors.

### Creative direction
- **One metaphor, carried all the way through: tailoring.** "Websites, made
  to measure", "The fitting", "Four kinds of fit", "Let's cut yours."; the
  process steps are Measure → Cut → Fit → Finish. Every heading, label and
  visual (rulers, pixel measurements, a live "VIEWPORT 1440 × 900" readout)
  serves the same idea. That consistency is what makes it feel premium,
  more than any single effect.
- **A technical drawing / blueprint mood.** Rulers with pixel ticks along the
  hero, a mono-type caption "FIG. 01 — MEASURING YOUR SCREEN", live cursor
  coordinates ("X 1151 Y 0345"), a local clock ("PA, USA 5:37 AM") in the
  header. It reads as precise and engineered, not decorative.
- **The work is the visual.** There are no stock photos or illustrations at
  all: every image is a screenshot of something they built, shown in a thin
  browser frame with its URL in the address bar.

### Visual identity
- **Colour:** near-black ink `#0B0D12` / `#07080B` with layered greys
  (`#12151C`, `#14171E`), off-white text `#ECEEF2`, three greys for
  hierarchy (`#BCC2CD`, `#8A909C`, `#5A606C`), hairlines as white at 5–16 %
  opacity. **One** accent, electric cyan `#2DE2FF`, used in perhaps five
  places (active ruler, CTA hover, footer light-up). Two light "paper"
  sections (`#EEEDE9`-ish warm off-white) break up the dark page — the
  Studio statement and the Services list.
- **Typography — three families with strict jobs:**
  - *Inter Tight* (400/500) — headings and body. Very large, very tight:
    H1 150 px with −8 px letter spacing and 0.86 line height; section H2s
    52–158 px, always negative tracking.
  - *Instrument Serif* italic — **one or two words per heading only**
    ("made to *measure*", "*tailored* to every screen", "The *archive*",
    "*fit*", "*yours*"). Gives the grotesk headlines warmth and rhythm.
  - *JetBrains Mono* (400) — every label, caption, tag, number and form
    label, in small uppercase with wide tracking ("01 THE STUDIO",
    "GSAP · LENIS · CANVAS", "NO.1"). It is the most used font on the page
    (191 elements) and carries the "engineered" feel.
- **Numbering system:** sections numbered in small circled mono labels
  (`(01) THE STUDIO`, `(02) THE FITTING` …), items "NO.1 / NO.2",
  projects 01–15. Gives a document-like order to a long page.

### Header & navigation
- Fixed, thin bar: logo + wordmark left; Work / Process / Services / Studio
  as small text centred; local clock in mono; one white pill CTA
  "Start a project" right. The header turns from dark to light text when a
  light section passes under it, and the **current section's nav item gets
  a soft pill highlight** (scroll-spy).
- Phone: logo + a round outlined menu button. The menu is a full-screen dark
  sheet with five huge links (≈ 40 px), each numbered 01–05 in mono and
  separated by hairlines; email at the bottom. Very calm, very readable.

### Hero composition
- Left-aligned giant two-line headline sitting low on the screen; a short,
  concrete paragraph under it ("No templates and no page builders: every
  layout, interaction and breakpoint is cut to fit what you sell and who
  buys it."); two pills — solid "Start a project →", outline
  "See the work (15)" with the project count.
- Behind the text on the right: **a stack of tilted browser windows**
  showing their own projects, cycling every few seconds (perfume → watch →
  hotel → finance), in perspective, with a faint dot grid behind.
- A ruler across the top with the live viewport width ("1440 PX") and a
  caption strip along the bottom with live cursor coordinates.
- Then a horizontal **marquee of industries** in large type, alternating
  plain and serif italic ("Watchmaking · Finance SaaS · *Developer tools* ·
  Commerce …").

### Section layouts (in page order)
1. **Hero** (above).
2. **Studio statement** (light section): one long sentence as a giant
   heading, whose words **fill in from grey to black as you scroll**
   (each word is a `<span>` with its own opacity). Below, three principles
   in a simple 3-column row with "NO.1" labels — no cards, no icons.
3. **Process — "The fitting"** (dark): a sticky, pinned scene. On the left
   the four steps (Measure, Cut, Fit, Finish); the active one is bright with
   its description, the others dimmed. On the right a browser window
   showing one of their sites **physically narrows as you scroll** —
   1280 px desktop → 842 tablet → 795 → 390 phone — with a ruler above
   showing the width live, and the page inside re-laying out. Tabs to switch
   project (Sève / Halvø / Tessel / Quire) and device (Desktop / Tablet /
   Phone). **The best section on the site: it demonstrates the claim
   ("we design every breakpoint") instead of stating it.**
4. **Work — "The archive (15)"**: huge heading with a count; a sticky toolbar
   with search ("try 'hotel', 'WebGL' or 'Shopify'"), filter chips with
   counts (All 15, Live sites 2, Studio concepts 4, Products 5 …) and a
   Grid / Index switch. Grid = 2-column browser-framed screenshots with
   name, status tag (LIVE / CONCEPT / OWN PRODUCT), year, sector and the
   tech stack in mono. Index = a dense table (No., Project, Sector, Type,
   Built with, Year). Filtering and search are instant, with a live line
   "SHOWING 4 OF 15 · STUDIO CONCEPTS · MATCHING 'HOTEL'".
5. **Services — "Four kinds of fit."** (light): a numbered accordion of
   four big rows; opening one shows a paragraph, mono capability tags
   (ART DIRECTION · COPY STRUCTURE · RESPONSIVE BUILD · CMS OR STATIC) and
   a real project screenshot on the right.
6. **Contact — "Let's cut yours."**: the 3-step "what happens next" in mono
   on the left (Tell us → a short call → a written proposal: scope,
   timeline, price); a minimal form on the right with underline-only
   fields, mono labels and **chip choices** for "What are we making?"
   (Marketing site / Product launch / Web app / Online store / Not sure yet).
7. **Footer:** small columns, then a **giant dot-matrix wordmark** drawn on a
   canvas that lights up in cyan around the cursor; "BACK TO TOP ↑".

### Grid & spacing
- Generous outer margins (~40 px desktop, 16 px phone), a 12-column feel
  with lots of asymmetry: headings hug the left, supporting text sits far
  right on the same baseline ("The archive" ↔ its intro paragraph).
- Large vertical rhythm between sections (≈ 160–240 px), tight spacing
  inside them. Hairline dividers instead of boxes; almost no cards or
  rounded containers except the browser frames and pills.

### Images & video
- Only product screenshots, always inside a minimal browser chrome (three
  dots + URL bar), dark-mode thumbnails mixed with a few bright ones
  (yellow Pawnook, white Quire) for rhythm. No video files at all — the
  motion comes from live code and canvas.

### Motion design
- One easing everywhere: `cubic-bezier(0.16, 1, 0.3, 1)` (a soft
  expo-out), long durations (0.8–1.6 s) for reveals, 0.3 s for hovers.
- Headline lines rise in from a mask (`.line > span`); statement words
  fill by scroll; sections fade/rise once on entry.
- Lenis smooth scroll; the pinned process scene and the hero mockup cycle
  are the two "big" motions; the rest is subtle.
- Keyframes are few: `pulse` (status dots), `tick` (ruler), `dotfill`
  (footer), `caseIn` (case page entry).
- `prefers-reduced-motion` is respected (one media rule); with it on, the
  hero still shows its content statically.

### Interactions & micro-interactions
- **Custom cursor:** a small dot that becomes a large white circle labelled
  "VIEW" over project screenshots (`.cursor` + `.cursor-label`). On
  touch, it simply isn't there.
- CTA pill turns cyan on hover; nav links get a pill highlight; filter chips
  and the Grid/Index toggle are instant.
- In Index view, hovering a row shows a floating **"peek" preview** of that
  project's screenshot near the cursor (`.peek`, fixed).
- Footer dot wordmark reacts to the cursor.
- The contact form doesn't submit to a server: "Send the brief" opens the
  visitor's email app pre-filled (`mailto:`). Simple, but it loses leads
  and tracking — not something to adopt.

### Responsive behaviour
- Phone keeps the identity intact: giant tight headlines (≈ 45 px), the
  hero mockup above the text, the statement still fills word by word, the
  process becomes a normal list with the device frame under it, the work
  grid becomes one column, services stay an accordion, the form stacks.
- Sticky search/filter toolbar stays usable on phone (chips scroll
  sideways).

### Strongest visual elements
1. The single, coherent metaphor (tailoring / measurement) in copy *and*
   visuals.
2. The pinned "fitting" scene that proves responsiveness by resizing a real
   site as you scroll.
3. Grotesk + one serif-italic word + mono labels — instantly recognisable
   type system.
4. The work archive with search, filters, counts and a Grid / Index switch.
5. Restraint: near-black + off-white + one rare accent; no gradients, no
   blobs, no stock imagery.

### Elements worth adapting for BizzBuzz Creations
- **A single brand metaphor** that runs through headings, labels and visuals
  (ours would be our own — e.g. "build / buzz / signal", not tailoring).
- **The three-font type system idea:** a tight display grotesk, an
  occasional italic accent word, and a mono for labels, numbers and tech
  tags — perfect for a company that is part creative, part engineering.
- **"Show, don't claim" scenes:** a pinned section where something real
  changes as you scroll — for us e.g. a lead travelling through our
  CRM / WhatsApp / AI voice-agent automation, or a search result climbing
  as SEO work is applied (using real, verified examples only).
- **Searchable, filterable index** for our ~44 services / 15 industries /
  blog (filter by service line, Grid ↔ Index).
- **Live mono details** (UK and India local times for our two offices,
  viewport, counts) as quiet proof of craft.
- **Big, numbered full-screen phone menu.**
- **Chip-based "What do you need?"** on the enquiry form — but submitting to
  our real backend, not `mailto:`.
- One easing curve and long, soft durations for the whole site.

### Elements not to copy
- The tailoring metaphor, its wording ("made to measure", "the fitting",
  "let's cut yours"), the ruler/measurement graphics and the dot-matrix
  wordmark — they are Velmax's identity.
- Their exact palette (ink + off-white + cyan) and the Inter Tight /
  Instrument Serif / JetBrains Mono trio as a set.
- A single very long page: we have ~100 indexed pages and need real routes.
- Studio "concept" projects presented beside real work — we would only show
  verified client and in-house work.
- `mailto:` form submission.
- Smooth-scroll hijacking for its own sake (Lenis is fine only if it stays
  light and is off under reduced motion).

### Potential application to BizzBuzz Creations
Our offer is broader than Velmax's (marketing, SEO, development, AI,
automation, BPO, consultancy), so the lesson is less "one long page" and
more **one strong idea, applied with discipline**: a precise, engineered
type system with a human accent; proof shown through real systems we built
(the CRM, AI voice calling, WhatsApp/n8n automation, Clio AI, Praxistence);
and an index-style way to explore a large catalogue of services and
industries without drowning the visitor.

---

## Reference 2 — BD Emerson (now Andersen Consulting)

**URL:** https://www.bdemerson.com/
**What it is:** a US consultancy (cybersecurity, compliance, technology, M&A,
AI governance) — a multi-service B2B firm, so structurally the closest of the
references so far to BizzBuzz Creations. Homepage ≈ 11,200 px desktop
(≈ 25 phone screens), with real service, industry, case and blog pages.
**Built with:** Webflow (+ Webflow interactions, 16 animated elements),
Lenis smooth scroll, Swiper, Finsweet attributes, Lottie for the hero
animation, HubSpot chat, Termly consent banner, GTM, Ahrefs and Apollo
trackers. 0 page errors.

### Creative direction
- **"Serious, technical, trustworthy."** A dark navy-black canvas with
  glowing blue, glassy **isometric 3D illustrations** (a row of translucent
  cubes labelled Assurance / Cybersecurity / Technology; on industry pages an
  isometric factory on a chip). It signals "high-tech security" in one look.
- The direction is conventional corporate SaaS done neatly, not
  experimental: centred section headings with a small pill label above, card
  grids, a quote form at the end. Its value as a reference is **structure
  and the 3D illustration system**, not layout originality.

### Visual identity
- **Colour:** ink `#030712` / pure black for dark bands, white and
  `#F9F9FB` for light bands, a cool grey scale (`#9CA3AF`, `#374151`,
  `#111827`), **one brand blue `#1266DF`** with a light blue `#86BFF2`
  for glows, tints at 8–16 % for fills. The page alternates dark and light
  bands; dark sections are large **rounded panels inset from the page edge**
  rather than full-bleed.
- **Typography:** *Degular Display* (600) for headings — a friendly, slightly
  rounded grotesk at 64 px with small positive tracking; *Manrope* (400/600)
  for everything else. Two fonts, clear jobs, very readable, but no
  typographic drama (no oversized or mixed-style headings).
- **Section labels:** every section starts with a small rounded pill
  containing an icon + word ("About Us", "Why Us", "Certificates",
  "Services", "Reviews", "Blog") above a centred H2.
- **Signature button:** blue pill with a **white square "icon tile"**
  holding the logo-arrow mark on its left ("Request a quote", "Book a
  Call", "More", "Read"). Used for every action — instantly recognisable.

### Header & navigation
- An announcement bar on top (blue, one line + link).
- A **floating, rounded, translucent header bar** inset from the edges
  (dark glass), with the logo + partner wordmark, Services ▾ / Industries ▾ /
  Cases / About / Blog, a search button and the "Book a Call" button.
- **Mega menus:** *Services* opens a wide dark panel with a left column of
  categories (Audit, Business, Cybersecurity, Compliance, Privacy,
  Technology) and the chosen category's services on the right, each with a
  small icon. *Industries* opens a 5-column grid of 12 industries with
  icons. Clean way to expose a large catalogue — directly relevant to our
  ~44 services and 15 industries.
- Phone: compact bar with logo, search and a menu button; the menu expands
  the same categories as accordions.

### Hero composition
- Split hero on a black field: left — H1, a factual paragraph, the
  icon-tile button + a text link; right — the isometric glass-cube
  animation.
- Under the hero a **client-logo marquee** (auto-scrolling, greyscale) with
  "We collaborate closely with our clients…".

### The 3D effect (hero and industry pages)
- **It is not real-time 3D.** The hero is a **Lottie animation**
  (`TCP 6_opt_3.json`, rendered to three stacked `<canvas>` layers) over a
  static AVIF background (`BGhero.avif`) — i.e. a 3D scene rendered in a 3D
  tool, then exported as a vector/raster animation. Over a few seconds the
  cubes pulse light, data "particles" stream across them and binary text
  scrolls on their faces; it does not react to the mouse or scroll.
- Industry pages use the same isometric language as static renders (an
  isometric factory on a glowing chip for Manufacturing).
- Why it works: consistent **isometric camera, one light colour (electric
  blue), glass + glow materials, labelled objects** that name the services
  — so the illustration explains the business rather than decorating it.
- Cost: very light at runtime (no WebGL), but each scene must be made in a
  3D/motion tool — a production asset, not code.

### Section layouts (in page order)
1. Hero + logo marquee (dark).
2. **About — "Proven leadership across technology, cybersecurity,
   compliance & M&A"** (light): a 2 × 2 bento of large white cards, each with
   a soft **UI-style illustration** on top (a padlock with GDPR / SOC 2 / SSO
   badges, a chart dashboard, a pipeline → lakehouse → data-platform
   diagram, a grid of team photos around the logo), then title + paragraph.
3. **Why Us** (dark rounded panel with a photographic background): headline
   over the image, then 4 short columns of reasons.
4. **Accreditations** (light): a grid of certification badges on white
   tiles (SBA, AWS, CIPP, CIPM, CISSP, PMP…) — real, verifiable proof.
5. **Our services** (dark panel): cards with a mono-ish uppercase category
   label (CYBERSECURITY, COMPLIANCE, TECHNOLOGY…), an icon tile, title, one
   line and a "More" button.
6. **Industries** (light): a sticky left index of all 12 industries and, on
   the right, a horizontal row of industry cards with a faint line
   illustration (heart-rate + cross for Healthcare); the index highlights
   as you go.
7. **Testimonials — "Our customers love us"** (dark panel): a masonry wall
   of quote cards with client logos and named people, **columns slowly
   auto-scrolling up/down** (`rr-scroll-up` / `rr-scroll-down` keyframes).
8. **FAQ** (dark card on light): simple accordion.
9. **Blog**: 3 cards with dark UI-style thumbnails, category + date, title,
   "Read".
10. **Contact — "Tell us about your challenge."**: a white rounded card on
    black with a short promise ("We'll get back to you within one business
    day"), "Book a Call", and a proper form (name, company, business email,
    phone, message).
11. **Footer** on black with a faint circuit-trace line drawing, contact
    chips (phone, email, LinkedIn) and link columns.

### Grid & spacing
- Centred 1200-ish container, symmetric layouts, 2- and 4-column grids,
  rounded 16–24 px cards everywhere, generous padding inside cards. Dark
  panels are inset with big radii, which gives the page a "stack of sheets"
  look.

### Motion design & interactions
- Restrained: Lottie hero loop, logo marquee, auto-scrolling testimonial
  columns, Webflow fade/rise on scroll, colour/background transitions
  0.3–0.4 s on hover, mega-menu fade. No custom cursor, no scroll-pinned
  scenes, no page transitions.
- A reduced-motion rule exists (1), but the marquee and testimonial columns
  are CSS animations that keep moving by default.
- HubSpot chat bubble with a proactive "Do you have any questions about our
  services?" prompt that sits over content on phones.

### Responsive behaviour
- Straight single-column stacking; the 3D hero moves under the text; mega
  menus become accordions; the chat prompt covers part of the content on
  390 px — a reminder to keep our BizzBee quiet on phones.

### Strongest visual elements
1. The **isometric glass-and-glow 3D illustration system** that labels the
   service areas.
2. **Mega menus** organising a large catalogue by category with icons.
3. **UI-style illustrations** inside service cards (badges, dashboards,
   pipelines) instead of stock photos.
4. The recognisable **icon-tile button**.
5. Proof sections: accreditation badges, named testimonials with logos,
   client logo marquee.

### Elements worth adapting for BizzBuzz Creations
- **A bespoke 3D illustration language** for our service lines (marketing,
  development, AI, automation, BPO, consultancy) — same camera, same light,
  same materials — produced as optimised assets (video/Lottie/WebP), not
  heavy live WebGL on every page.
- **Category mega menu** for Services (8 lines → 44 sub-services) and an
  icon grid for 15 Industries.
- **UI-style illustrations** built from our real products (CRM screens, AI
  voice-agent call flow, WhatsApp automation, dashboards).
- A strong, **single recognisable button style**.
- A contact block that promises a response time and offers "Book a call"
  next to the form.
- Real proof only: our Google reviews, client videos, certifications /
  partner badges we actually hold.

### Elements not to copy
- The generic corporate-SaaS structure (centred pill label + centred H2 +
  card grid, repeated for every section) — exactly the "template" feel our
  brief wants to avoid.
- Their blue-on-black palette and cube scene (also close to our current
  site's blue; we want a new identity).
- Auto-moving testimonial columns and marquees (we removed auto-motion on
  purpose for readability and accessibility).
- A proactive chat prompt covering content on phones.
- Heavy third-party tracking stack.

### Potential application to BizzBuzz Creations
BD Emerson shows how a **multi-service firm** can feel premium and technical:
organise the catalogue clearly (mega menus, category labels), explain each
service with a purpose-made illustration, and back claims with verifiable
proof. We should borrow that **clarity and illustration discipline**, and
get the boldness and originality from the more experimental references.

---

## Reference 3 — Visuvate

**URL:** https://visuvate.com/
**What it is:** an Indian web-design studio (phone +91, prices in ₹,
"Serving the US, UK & worldwide") — the closest to BizzBuzz Creations in
market and geography. Homepage ≈ 13,300 px desktop, with Works, Services,
Blogs and Templates pages.
**Built with:** Next.js + Tailwind, Lenis smooth scroll, raw WebGL (no
Three.js global, no 3D model files — the scenes are built from images
in code), ~30 named CSS animations (`vv-hero-rise`, `vv-svc-*` …), a
background starfield video (`platform-starfield.mp4`), a custom SVG
arrow cursor, a light/dark theme switch, a cookie-consent box. 0 errors.
**16 reduced-motion rules — with reduced motion on, the page is fully
still** (0 % pixel change while idle, against ~10 % normally).

### Creative direction
- **"Design in Details" — the studio's own design tool as the stage.** The
  hero shows a full imitation of a website-builder editor (Framer/Webflow
  style): left panel with Pages / Layers / Assets and the homepage's real
  section list (Hero, Tech Stack, Introduction, Featured Works…), a
  centre canvas with a project, a right properties panel (Position, Size
  1fr / Fill, Max width 1200, Layout, Effects), a top bar with device
  toggle and "1440px | 100%", and a floating toolbar (select, zoom, hand,
  1×, theme, language). Visitors can "Press & Hold" shots to preview them,
  click to open the project, drag the strip, change marquee speed and
  canvas theme. **It shows the craft by putting the visitor inside the
  workflow.**
- A cinematic, dark, product-launch mood: deep black, electric-blue light
  streaks, glossy screenshots, then a 3D "galaxy" of projects.

### Visual identity
- **Colour:** black `#000` and white dominate; greys `#7D7D7D`, `#9A9A9A`,
  `#D8D8D8`, `#1F1F1F`; translucent whites for borders (13–19 %). Accents:
  **electric blue** light (`#0099FF`, `#0068AD`) for glows and streaks,
  and **amber `#FFB840`** for small highlights (stars, ticks). A full light
  theme exists via the toggle.
- **Typography:**
  - *GT Walsheim* (500) — all headings, tight tracking (H1 92 px / −5.5 px;
    section titles 130–144 px: "Our Works", "Pricing", "Testimonials").
  - *Fraunces* (300, italic) — **one accent word per heading**: "Crafted
    *Websites*", "*Lasting* Impressions", "Frequently Asked *Questions*",
    "*View all*".
  - *Geist* (400/500) — UI text, body, labels, footer.
  - Buttons letter-animate: each label is duplicated letter by letter so
    the text **rolls up** on hover (that's why the page text reads
    "LLeett’’ss CCoonnnneecctt").

### Header & navigation
- A **floating, centred, rounded capsule header** on a dark translucent
  background: logo, Home / About Us / Works / Services / Blogs /
  Templates, a theme toggle and a white pill "Let's Connect". Phone: logo,
  theme toggle, "Connect" pill and a round menu button opening a
  full-screen menu numbered 01–06 with a project list.

### Hero composition
- Centred headline with the mixed sans/serif-italic treatment, one line of
  copy, two pills ("Get in touch", "See our work"), and the **editor
  mock-up rising from the bottom** of the screen inside a glowing blue
  frame — a "screen within the screen". Then a row of tool logos (Wix
  Studio, Notion, Figma, Adobe, Claude, Framer, Blender, Analytics) as
  "Tech stack".

### The 3D effect (analysed)
- **Where:** the "Our Works" section — a sticky, full-screen (`h-screen`)
  WebGL canvas 1440 × 900 — and a 980 × 980 draggable canvas in
  Testimonials (a dotted globe, `cursor-grab`).
- **What it is:** a **scroll-driven 3D gallery**. Project screenshots are
  mapped onto **curved, bent planes** (like pages of a flexed book or
  posters in a cylinder) floating in a dark space with thin blue light
  arcs. As you scroll, the cards fly towards and past the camera, rotate
  and change depth; the big "Our Works" title sits behind them and the
  sequence ends on a serif-italic "*View all*". Some cards show mirrored
  text because you see them from behind — a deliberate depth cue.
- **How it's made:** plain WebGL with the screenshots as image textures
  (no 3D models are downloaded); the scene is pinned while the scroll
  position drives the camera path. It does not follow the mouse — scroll
  is the only input (mouse movement changed 0 % of pixels).
- **Performance / access:** it is heavy to render (in software rendering it
  slowed the browser to a crawl; on phones it runs too — 21 canvases
  counted on mobile, including small 2D "shimmer" canvases on service
  icons). Under reduced motion it stays still.
- **Why it works:** the 3D is used **once**, for the one thing that
  deserves spectacle (the portfolio), and the content is real work, not
  decorative shapes.

### Section layouts (in page order)
1. Hero with the editor mock-up; tool-logo strip.
2. **Intro — "Design that speaks. Delivery that converts."**: text left,
   a tilted mosaic of project screenshots right (laptop, phones, posters).
3. **Our Works — 3D gallery** (above).
4. **Services — "Elevate your digital footprint."**: a 5 × 2 grid of dark
   tiles with an icon and a two-line name (Crafted Websites, Website
   Redesign, eCommerce, CMS & Dynamic, Landing Pages, Consistent Identity,
   Motion & Interaction, UX Strategy, Performance, Maintenance); icons get
   a shimmer.
5. **"Platform flexibility. Design consistency."** — platform logos grid
   (Webflow, WordPress, Wix, Framer, Shopify, Squarespace, Figma…) over a
   starfield.
6. A slow **text marquee** of capabilities.
7. **Pricing** in ₹ — three cards ("from ₹40,000 / ₹75,000 / ₹1,50,000")
   with what's included and "Start a project". Transparent, rare among
   agencies.
8. **Our Approach** — six large dark cards with real UI imagery (Discovery
   First, Mobile-First, Conversion-Driven with a dashboard, Pixel-Perfect
   with an editor, Seamless CMS with a content table, Future-Ready with a
   clock).
9. **Testimonials** — stats (30+ projects, 98 % satisfaction, 12+ years)
   beside a quote slider (03 / 03), over the draggable dotted globe.
10. **FAQ** — numbered accordion, centred.
11. **Closing CTA "Create Bold. Deliver Better."** with a giant blurred
    "V" logo rising behind, then a footer with four social rows
    (Instagram, LinkedIn, Twitter, WhatsApp →) and link columns.

### Motion design & interactions
- Easing `cubic-bezier(0.22, 0.61, 0.36, 1)`, 0.2–0.5 s for UI, 0.9 s for
  rings; letter-roll buttons; staggered translate reveals; hero rise/lift/
  glow; services icon micro-animations (float, drift, pop, dash-march,
  beam, ticking clock, blinking cursor); aurora fade-ins.
- Interactive hero tools (press & hold previews, drag strip, speed and
  theme controls), draggable globe, custom arrow cursor.

### Responsive behaviour
- Phone keeps the 3D gallery and the editor mock-up (simplified), services
  become a 2-column tile grid, pricing stacks. The cookie box covers a
  third of the phone screen until answered.

### Strongest visual elements
1. The **editor mock-up hero** — the visitor sees how the studio works.
2. The **scroll-driven 3D gallery** of real projects on curved planes.
3. Sans + one serif-italic word headings; letter-roll buttons.
4. Transparent **pricing** and a concrete approach section with real UI.
5. Excellent reduced-motion handling for a motion-heavy site.

### Elements worth adapting for BizzBuzz Creations
- **"Inside our workshop" hero idea:** show the tools of our trade as the
  hero — e.g. a live-looking dashboard where a campaign, a CRM pipeline
  and an AI voice-call transcript run side by side (using our own
  products, not fake data).
- **One spectacular 3D moment** for proof — a scroll-driven gallery of our
  real web projects / case studies, with a static fallback and full
  reduced-motion support.
- **Pricing "from"** for packaged services if the business wants it
  (Indian and UK prices).
- **Approach cards with real UI imagery.**
- Floating capsule header, letter-roll button hover, a theme toggle.
- WhatsApp as a first-class contact channel in the footer (relevant for
  our India + UK audience).

### Elements not to copy
- The editor-UI hero itself and its section list / toolbar — Visuvate's
  signature.
- Their black + electric-blue look (also close to our current site).
- Stats like "98 % client satisfaction" without a source — we only show
  verifiable numbers.
- Heavy WebGL on every device without a lighter phone version.
- A cookie box that covers a third of the phone screen.

### Potential application to BizzBuzz Creations
Visuvate proves that an Indian studio can present itself at an
international level by **showing the work and the workflow** instead of
talking about them. For us: one hero that demonstrates our real systems,
one 3D proof moment, transparent packages, and the craft details (type
accents, button motion, theming) — while keeping a performance budget and
a phone-specific version.

---

## Reference 4 — The Shape of Intelligence

**URL:** https://shapeofintelligence.com/
**What it is:** an interactive editorial "exhibition" — a history of AI in
eight chapters (1936 → now) by Jamie McKaye. Not an agency site; it is a
reference for **storytelling, editorial typography and teaching through
interaction**. One very long page (≈ 18,600 px desktop, ≈ 34 phone
screens) plus Timeline, Sources and About.
**Built with:** Next.js (CSS modules), Lenis smooth scroll, no GSAP / no
Three.js / no WebGL; one 2D canvas (the "examples" classifier). 0 errors.
11 reduced-motion rules, plus its own "Motion on/off" and "Sound off"
switches.

### Creative direction
- **A museum exhibition, not a website.** "An exhibition by Jamie McKaye",
  chapters numbered "01 / 08", each with a date range ("1956 — 1974"), a
  big title ("The rules.", "The examples.", "The scale."), a question
  ("How far could explicitly programmed reasoning take us?"), an
  interactive "installation", then the essay and "Inside the archive" —
  dated source links.
- **The narrative is the structure.** The opening reads like a poem across
  three screens: "First, we tried to *write the rules.* / Then, we let the
  *examples speak.* / And the question *changed shape.*" Then the chapters
  follow that arc. Every section answers one question.
- **Honesty built into the design:** under each demo a small note ("An
  educational illustration: a small rule system written for this
  exhibition, not a reconstruction of any historical program"); a footer
  with data cut-off and review dates, `events.json · CC BY 4.0`,
  `llms.txt`, MCP. This is how to sound credible without claims.

### Visual identity
- **Colour:** a pale grey-green paper `#F2F4F1`, ink `#202623`, mid grey
  `#5A625E`, a near-black night `#090E13` for "dark" chapters, and **one
  saturated cobalt blue `#234AE8`** used for emphasis words, the slider,
  the "examples" plot and two full-bleed blue chapters ("The context",
  "Keep questioning."). Three moods (paper, night, blue) alternate by
  chapter.
- **Typography:** **one family** — *ABC Diatype* (400/500) for everything,
  with *ABC Diatype Mono* for small labels and years. Hierarchy comes from
  **scale alone**: chapter titles 106–127 px with tight tracking and a
  full stop ("The rules."), statements 60 px, essay text a comfortable
  17–18 px in a narrow right column, labels 11–12 px. Blue colour replaces
  italics as the accent.
- Layout grammar is **editorial**: a left column with the chapter's thesis
  sentence ("Explicit instructions achieve impressive results and stay
  brittle."), a right column with the long text, hairline-ruled lists.

### Header & navigation
- Minimal fixed header: logo + title left; Read / Timeline / Sources / About
  right. A **fixed footer bar** that acts as a reading HUD: a chapter
  progress mark and "Chapters 02 / 08" (opens the chapter list), plus
  "Sound off" and "Motion on" toggles. Phone keeps the same two bars; links
  sit under the title (no hamburger needed — only four links).

### Hero composition
- Giant two-line title "The Shape *of* Intelligence" with a small "of"
  tucked into the line; **a chrome 3D ribbon sits between the lines**,
  overlapping the letters. Under it a slider "Change the shape of an idea"
  with three stops (01 Rules · 02 Learning · 03 Context): dragging it
  changes the object's shape. "Begin the story ↘" as the only action.

### The 3D effect (analysed)
- **All the 3D is pre-rendered still images, not real-time 3D.** The page
  loads WebP renders (`continuum/pose-1.webp` 223 KB, `anamorph/
  aligned.webp` 60 KB, `language/pose-0.webp` 193 KB, `decision/
  pose-0.webp` 301 KB, `cinema/scene-3/5/7.webp`), each with a separate
  `-mobile.webp`. Interactions swap or cross-fade between rendered "poses"
  (pose-0, pose-1 …) as you drag a slider — the illusion of manipulating a
  3D object, at the cost of a few images.
- The renders share one material language — **brushed chrome / silver with
  cobalt-blue accents**, studio-lit on paper or deep black — so the hero
  ribbon, the "THINK?" anamorphic sculpture, the chrome "bank" letters on
  blue waves, the "scale" type filled with server-rack imagery and the final
  blue/silver knot all feel like one collection.
- Typography and 3D are composed together: objects pass behind/through
  letters ("bank" emerging from waves, the ribbon through "Shape"), and the
  "THINK?" sculpture only reads as a word at the right angle ("Same object.
  A different reading." — drag to change your point of view).
- Result: a gallery-quality 3D feel with **zero WebGL, tiny JS, and
  mobile-specific images** — the cheapest convincing 3D of the references.

### Section / chapter pattern
1. Intro screen → three-line narrative prologue (one statement per screen).
2. Each chapter: a **cover** (full screen, paper / night / blue, big title +
   one rendered object + a question) → an **installation** (an interactive
   demo) → the **essay** (thesis left, text right, "Read this chapter ↗",
   "Listen to this chapter", 0:58 narration) → **Inside the archive**
   (year · source · ↗).
3. Installations that teach by doing: *The rules* — pick a shape and run it
   through a visible rule tree; add rules and watch them break. *The
   examples* — a blue scatter plot; "Run 50 steps →" trains a small
   classifier in the browser, with live accuracy and steps. *The
   interface* — "You. | The machine." split by a draggable seam. *The
   choices* — three paths (Purpose / Evidence / Consequences).
4. Closing: a full blue screen "Keep questioning." with three links
   (timeline, exhibition, evidence), then a dark footer with metadata.

### Grid & spacing
- Wide margins, a 12-column editorial grid used asymmetrically (thesis in
  columns 1–4, text in 6–12), huge vertical spacing between chapters,
  hairline rules everywhere instead of boxes. No cards, no shadows, no
  rounded containers.

### Motion design & interactions
- Motion is **driven by the reader**: drags, sliders, buttons, hover
  underlines (0.15–0.2 s, `cubic-bezier(0.22, 1, 0.36, 1)`). Idle page:
  0 % of pixels change in 2.5 s; moving the mouse changes ~0.2 %. Very few
  CSS animations (an answer fading in, a pulse, shapes appearing).
- A "Motion on/off" switch in the HUD as well as reduced-motion support.
- Optional synthesised narration per chapter, with the text as transcript.

### Responsive behaviour
- Phone keeps the full experience: titles scale down but stay huge
  (≈ 48 px), renders swap to `-mobile.webp` crops, every installation still
  works (shape grid 4 × 2, slider full width), essay text stays readable.

### Strongest visual elements
1. Editorial storytelling: one question per chapter, cover → demo →
   essay → sources.
2. Pre-rendered chrome/blue 3D objects composed with giant type.
3. Teaching through small interactive "installations".
4. One typeface + one accent colour, hierarchy by scale only.
5. Visible honesty: disclaimers under demos, dated sources, data notes.

### Elements worth adapting for BizzBuzz Creations
- **"Show how it works" installations** for our services, small and real:
  e.g. drag a slider to see how answer-engine optimisation changes what an
  AI assistant says about a business; run a lead through an automation
  flow; compare a slow vs. optimised page. Clearly labelled as
  illustrations.
- **Pre-rendered 3D poses** (WebP / short video) swapped by a slider or
  scroll — a premium 3D look with near-zero performance cost, with
  separate phone crops.
- **Chapter structure for long service pages**: cover (title + question) →
  demo → explanation (thesis left, detail right) → proof / sources → next.
- **A reading HUD** (section x / y, progress) for long guides and blog
  posts.
- **Credibility through transparency**: notes on what's illustrative,
  dates on facts, sources linked.
- Full-bleed **colour chapters** to change mood between sections.

### Elements not to copy
- Its exact identity: ABC Diatype, the paper-green + cobalt palette, the
  chrome-ribbon renders, the exhibition framing and chapter names.
- The very long essay format on commercial pages — our pages must convert,
  so text must be shorter and CTAs clearer.
- No primary CTA anywhere — fine for an essay, wrong for us.

### Potential application to BizzBuzz Creations
This is the reference for **how to explain complex things (AI, automation,
SEO for AI search) so that a business owner understands them** — by letting
them try a small, honest demo — and for getting a 3D look from rendered
images instead of WebGL. Best suited to our AI Solutions, Marketing
Automation and Insights/blog sections.

---

## Reference 5 — Bitnomial

**URL:** https://bitnomial.com/
**What it is:** a US-regulated crypto derivatives exchange and clearinghouse
(perpetuals, futures, options, spot, prediction markets). A short, focused
homepage (≈ 6,900 px desktop, ≈ 18 phone screens) whose job is to make a
complex, regulated financial product feel **precise, trustworthy and
engineered**.
**Built with:** a lightweight custom site (no framework detected, no
smooth-scroll library, Splide for sliders), one autoplaying hero video
(`hero-waves.mp4`, 1500 × 1500, 10 s loop, muted). 0 errors. **No
reduced-motion rules** — the hero video keeps playing.

### Creative direction
- **Swiss / technical-document minimalism with one warm signal colour.**
  White and light-grey bands, black bands, thin vertical column lines
  running through every section, mono uppercase labels in corner
  brackets, square buttons. It reads like an engineering spec sheet or a
  trading terminal — calm, exact, "nothing hidden".
- The only expressive element is the hero: **a ribbon of fine coral lines
  twisting in a slow loop**, like a price curve or a sound wave — abstract,
  on-topic and quiet.
- Copy is short, factual and specific: "Perpetuals. Futures. Options.
  Spot. Predictions.", "First-ever CFTC-regulated perpetual futures.",
  "Blended 60% long term, 40% short term US capital gains tax treatment" —
  every claim is concrete and carries its footnote / disclosure.

### Visual identity
- **Colour:** white `#FFFFFF`, light greys `#F7F7F7` / `#EFEFEF` /
  `#EAEAEA` for alternating bands, charcoal `#212121` / `#141414` for dark
  bands, grey text `#626262`, and **one accent — coral / signal orange
  `#FF7756` (hover `#FE5F38`)** used only for buttons, numbers, label
  brackets and the hero lines.
- **Typography — three families:**
  - *PP Neue Machina Inktrap* (400) — headlines; a geometric, slightly
    technical display face with ink-trap details, used at a light weight
    (H1 74 px, H2 63 px, normal tracking, generous 1.2–1.3 line height).
    Feature names in the dark band are set in **uppercase** Neue Machina
    ("REGULATED", "CRYPTO SETTLEMENT").
  - *IBM Plex Sans* (400/700) — body text and FAQ.
  - *PP Neue Montreal Mono* (500) — labels, buttons, dates, footer — all
    uppercase with wide tracking ("START TRADING", "LEARN MORE",
    "JULY 27, 2026").
- **Graphic devices:** labels framed by **orange corner brackets**
  `[ US-REGULATED EXCHANGE & CLEARINGHOUSE ]`; small orange index numbers
  `01`–`07`; publication names as small boxed tags (COINTELEGRAPH,
  WEDBUSH); **visible vertical grid lines** across the whole page, so the
  layout grid itself is part of the look.
- **Buttons:** square (no radius), filled coral with dark mono label, or
  outlined; no icons, no shadows.

### Header & navigation
- Plain header on white: hexagon logo + wordmark, Trade / Markets /
  Services / Docs / About (text links that turn grey on hover, no
  dropdowns), a square coral "SIGN IN" on the right.
- Phone: a square coral menu button (animated three-line → ✕ via
  `menuTop/menuMiddle/menuBottom` keyframes) opening a white full-screen
  sheet with the five links and "SIGN IN".

### Hero composition
- Left: bracketed mono label → a four-word headline as a list of products
  with full stops → one sentence → "START TRADING" → the regulatory
  disclaimer in tiny text directly under the button.
- Right / behind: the coral line-ribbon video bleeding off the top-right
  edge; it overlaps the grid lines.

### Section layouts (in page order)
1. Hero (white).
2. **Products as full-width rows** on stepped greys (white → `#F7F7F7` →
   `#EFEFEF`): product name large on the left, one-line description in the
   middle, "LEARN MORE" on the right. A simple, scannable "menu" of
   offers — no cards.
3. **"One Platform. Every Product."** (black): a numbered list of seven
   advantages — orange number, uppercase name, description on the right,
   footnotes in tiny type, hairline separators.
4. **FAQ** (white): heading left with "Can't find what you're looking
   for? CONTACT US"; three questions as a +/− accordion on the right;
   "SEE ALL FAQS".
5. **Press** (grey): source tag, large headline, date, hairline between
   items; "SEE ALL PRESS".
6. **Blog** (black): three columns with category tag, title, excerpt,
   date in mono.
7. **Closing CTA "Start Trading"** (white→grey gradient): headline, one
   line, button, disclaimer.
8. **Footer** (grey): mono link columns grouped by legal entity, social
   icons in square outlines, a legal paragraph.

### Grid & spacing
- A strict column grid (visible as 1 px lines), left-aligned content,
  hairlines between every item, consistent 32–40 px gutters, big but not
  extreme section padding. Everything aligns to the lines — the precision
  is the aesthetic.

### Motion design & interactions
- Almost none: the looping hero video, hover colour changes (0.3 s),
  accordion open/close, the menu icon animation, reveal fades
  (`transform/opacity ease-out`, 0.4 s with staggered delays). No custom
  cursor, no scroll scenes, no smooth scroll.
- Idle page still changes ~6 % of pixels (the video) even with reduced
  motion — the one accessibility miss.

### Responsive behaviour
- Clean single column; the hero headline stacks one product per line
  (very effective on phone); product rows become stacked blocks with the
  button under the text; the numbered list keeps its orange numbers; grid
  lines remain.

### Strongest visual elements
1. **Restraint and precision** — grid lines, hairlines, mono labels,
   square buttons — the design itself says "regulated, exact".
2. One **warm signal colour** against black/white/greys.
3. The **abstract line-ribbon hero** — on-topic motion without
   illustration.
4. **Products as rows** and **advantages as a numbered list** — scannable,
   no cards.
5. Concrete, specific copy with footnotes.

### Elements worth adapting for BizzBuzz Creations
- **Services as full-width rows** (name · one line · action) on stepped
  tones, instead of yet another card grid — perfect for listing our eight
  service lines on the homepage.
- **A numbered "why us" list** with uppercase names and short, concrete
  descriptions (only claims we can prove).
- **Visible grid / hairline system** and **bracketed mono labels** as part
  of an engineered identity.
- **One signal accent colour** used sparingly for actions and numbers.
- **An abstract generative motif** for the hero (lines / signal / waves)
  tied to our brand idea — but as a lightweight animation that stops under
  reduced motion, with a static poster.
- Short, specific copy: product names as the headline, one fact per line.

### Elements not to copy
- Their coral accent with the PP Neue Machina / Plex / Neue Montreal Mono
  trio and the hexagon logo style.
- The near-total absence of imagery and personality — fine for an
  exchange, too cold for a creative + marketing agency on its own.
- No reduced-motion handling for the hero video.
- No dropdown navigation — we have too many services for flat links.

### Potential application to BizzBuzz Creations
Bitnomial shows how to make **a broad, technical offer feel controlled and
trustworthy with very few elements**. It is the counterweight to the more
expressive references: use its grid discipline, rows and numbered lists for
the information-heavy parts of our site (services, process, FAQs, pricing,
footers), and let the creative references carry the hero moments and
storytelling.

---

## Reference 6 — Axiom Research (Peppermint)

**URL:** https://axiom.peppermint.id/
**What it is:** a **fictional / conceptual brand site** made by the
Peppermint studio — "Axiom Research, an institute for the study of
intelligence as a physical phenomenon". A short single page (≈ 7,400 px
desktop, ≈ 13 phone screens) with almost no functional content; it is a
reference for **atmosphere, generative visuals and typographic tone**,
not structure.
**Built with:** Next.js (Turbopack), Tailwind, Lenis smooth scroll, **one
fixed full-screen 2D canvas** for the generative background, a custom
cursor, `next/image` for the plates. Only two keyframes (`ax-fade`,
`ax-zoom-fade`). 0 errors. 1 reduced-motion rule — with it on, the canvas
is still (0 % idle change, against ~4 % normally).

### Creative direction
- **A scientific laboratory as a mood.** Everything is framed as
  observation: the header shows a live clock ("CEST 12:16 PM") and a
  status readout ("AX-FIELD / STATE: ACTIVE · OBSERVATION MODE: PASSIVE ·
  SYSTEM DRIFT: DETECTED"); research plates are numbered AX-01…AX-03;
  sections are "OBSERVED SYSTEMS", "SIGNAL CONDITIONS".
- **Manifesto copy in short, confident lines:** "We stopped designing
  interfaces that explain. We started creating environments that can be
  observed." / "We do not build systems. We observe them." / "Intelligence
  is not something we build. It is something we encounter." A clear
  voice — calm, absolute, slightly mysterious.
- **Science imagery instead of stock:** a strange-attractor field, black
  & white research plates (a branching network, an interference pattern,
  a bifurcation diagram), Joy-Division-style ruled line fields.

### Visual identity
- **Colour:** near-black `#0C0C0D` / `#000`, white, a light grey paper
  `#F2F2F2` for one light section, and **one accent: amber gold
  `#DA840A`** — the attractor lines and the cursor dot. Images are pure
  black and white.
- **Typography — two families:**
  - *Funnel Display* (400/500) — headings and statements; a wide, soft
    grotesk. H1 164 px with −6.5 px tracking and 0.79 line height;
    statements 40–48 px.
  - *Space Mono* (400/700) — every label, status line, list and body
    paragraph, **in uppercase, very small** (≈ 10–11 px) — the "instrument
    readout" voice.
- **Graphic devices:** thin vertical rules beside lists, mono index
  labels in card corners ("01 … DENSITY"), white "plates" with a tag
  ("AX-01") like specimen cards.

### Header & navigation
- No bar, no background: logo + wordmark left, the clock, the status
  readout, and three tiny mono links stacked on the right (Archive /
  Conditions / Contact). The same on phone (no menu button — only three
  links). Navigation is clearly secondary to atmosphere.

### Hero composition
- The giant two-line "Axiom Research" sits right of centre over the gold
  attractor; a small mono tagline under it; "SCROLL DOWN TO DISCOVER MORE"
  in the bottom-left corner behind a thin vertical rule.

### The generative / "3D" effect (analysed)
- **Not WebGL — a 2D canvas** (`getContext('2d')`, fixed, full screen,
  behind everything) drawing **a Lorenz-style strange attractor**: thousands
  of thin gold trajectories that look three-dimensional because of their
  density and perspective.
- **Scroll changes the form:** the "butterfly" of the hero unwinds into a
  spiral, then a flat orbit, then sweeping arcs in the footer — the same
  system seen in different "states", matching the copy.
- **The cursor bends it:** the amber dot cursor creates a circular lens in
  the field — lines curve around it as you move (≈ 8 % of the screen
  changes when the mouse crosses it).
- Very cheap: no textures, no 3D library, one canvas; and it respects
  reduced motion.
- The ruled "Field Density / Signal Latency / Critical Threshold" drawings
  and the AX plates are **static images** (PNG/JPG via `next/image`).

### Section layouts (in page order)
1. Hero (above).
2. **About** — statements appear one block at a time on the right while
   the attractor turns; then "We do not build systems. We observe them."
   with a mono paragraph and a bracketed mono list (WE DO NOT BUILD TOOLS ·
   WE OBSERVE SYSTEMS · WE MAP BEHAVIOR · WE STUDY EMERGENCE).
3. **Observed systems** — three white specimen cards (AX-01..03: image,
   title, two short mono columns) that **slide in from the right and
   stack/overlap** as you scroll — a horizontal reveal.
4. **Signal conditions** (light grey section): a statement right, then
   three columns (01 Density / 02 Latency / 03 Threshold) each with a
   title, a ruled line-field drawing and two mono sentences.
5. **Closing statement** over the attractor ("Not an object. Not a
   function. A condition of reality…").
6. **Footer** — the giant name again with a 3D logo mark, "Axiom Research
   is not publicly active. Observations are released selectively.", an
   email field and "REQUEST ACCESS →".

### Grid & spacing
- Strong asymmetry: statements in the right half, labels far left, lots of
  empty black. Tight inside each block, very generous between blocks.

### Motion design & interactions
- Fades and zoom-fades on entry, the scroll-morphing attractor, the
  cursor lens, Lenis smoothing; hovers are simple colour changes
  (0.15–0.3 s, `cubic-bezier(0.4, 0, 0.2, 1)`). The custom cursor replaces
  the system cursor everywhere (`cursor: none`), which also hides the
  pointer over links — a usability cost.

### Responsive behaviour
- Phone keeps the attractor (one canvas), stacks the specimen cards
  vertically, keeps the mono readouts (tiny but legible), drops the status
  block from the header.

### Strongest visual elements
1. A **generative background that tells the story** (one system in many
   states) — cheap, distinctive, interactive.
2. **Manifesto copy** in short lines + tiny uppercase mono for everything
   else.
3. **Black, white and one warm metal accent** (gold).
4. **Scientific plates and line fields** instead of stock imagery.
5. Live "instrument" details (clock, status readout).

### Elements worth adapting for BizzBuzz Creations
- **A signature generative motif on a single 2D canvas** that changes state
  as you scroll — for us something meaning *signal / buzz / network*
  (e.g. many fine lines forming a "signal" that organises itself as the
  story moves from problem to solution), reacting gently to the cursor,
  still under reduced motion. A strong, light alternative to WebGL.
- **A voice with short, declarative lines** for the brand story — but
  about real things we do (not mystery).
- **Specimen-style cards** for case studies / systems we built
  (tag "BBC-01", image, title, two facts).
- **One warm accent against black and white.**
- **Live status / time details** — e.g. both office clocks (India, UK).

### Elements not to copy
- The fictional-institute concept, its names (AX-01, "observed systems"),
  the attractor itself and the gold-on-black palette.
- Hiding the system cursor everywhere.
- Navigation as tiny text only; no clear services, proof or contact path —
  a business site cannot work like this.
- Uppercase 10 px mono for body paragraphs (too small to read at length).

### Potential application to BizzBuzz Creations
Axiom shows how **one generative idea, a strict two-font system and a
confident voice** can create a premium, memorable identity with very little
content and very little code. For us it is the model for the brand's
**atmosphere layer** (hero background, section transitions, footer), on top
of the clearer, conversion-focused structures from BD Emerson, Bitnomial
and Velmax.

---

---

# Second round (2026-11-09) — the owner's final eight

The owner rejected the first rebuild as "not clean" (it kept the old site's
section structure and used generated line-art) and supplied these eight sites
instead: *"forget the current site, take inspiration from these, use your
mind and brainstorm."* Each was opened in Chromium at 1440 × 900 and
390 × 844, scrolled top to bottom; fonts, colours and libraries read from the
live pages. **Common thread: huge, tightly-set type; a great deal of white
space; real photographs, real products and real numbers; no illustration.**

## Reference 7 — Mira (trymira.com)
AI smart glasses & ring. **Built with:** custom site, Geist, 8 `<video>`
elements, one canvas. **Look:** a full-screen product film as the hero with
one centred line ("Welcome to Your Second Brain"); a dark panel where a
headline *types itself* ("The Glasses That…") and the next words ("Capture",
"Act", "Translate", "Answer") sit in tiles — the selected tile gets green
corner brackets; a bright orange "Order" button as the only accent; a minimal
header (menu icon · logo centre · Order · bag). A discount pop-up appears
immediately and covers everything — a reminder that **an early pop-up hurts**.
**Take:** one real hero visual; a rotating/typed word as the interactive
idea; corner-bracket "focus" detail; a single warm accent button.

## Reference 8 — Tresmares Capital (tresmarescapital.com/en)
Private-equity / SME financing. **Built with:** WordPress, Lenis,
PP Neue Montreal. **Look:** the cleanest of the set — white page, a huge
tightly-tracked grotesk headline broken into **three staggered lines**
("Drive / to / grow", each indented further), a faint grayscale landscape
behind, a tiny paragraph and an underlined link at the bottom right. Sections:
a centred statement ("Our four strategies are…") → four strategies as a
sticky list switching grayscale photographs → a **statement whose words fill
from grey to ink (one name in red)** → a fan of rotating photos of the
countries served → team portraits in a row of grayscale squares → one centred
closing line with a single underlined "Contact us". Red `#E41613` is the only
colour. **Take:** staggered hero lines, centred statements with word-fill,
grayscale photography, links as plain underlines, extreme restraint.

## Reference 9 — Kerna (kerna.studio)
Brand studio for onchain startups. **Built with:** Astro, Lenis, Instrument
Sans + a pixel font (OffBit). **Look:** cream and warm-black with one electric
blue; a **giant wordmark** cropped by the screen edge; content in bordered
grid cells where each benefit has a pattern of blue/cream dots; a 4-step
process drawn as numbered tiles on a vertical line that fills; a manifesto
whose lines light up as you read; a **booking calendar in the footer**.
**Take:** visible grid cells with hairline borders, giant cropped wordmark,
numbered steps on a filling line, booking built into the closing section.

## Reference 10 — AIR business center (aircenter.space)
Premium office building. **Look:** white, a huge letter-spaced wordmark
"A  I  R" stretched edge to edge with a white sculptural form winding through
it; tiny uppercase header text; one black pill. The experience is a **pinned,
scroll-driven scene** (the page itself stays 900 px tall; scrolling advances a
sequence). **Take:** one giant word across the whole width as a hero; a
black pill as the only button.

## Reference 11 — Tenity (tenity.com)
Fintech innovation platform. **Built with:** WordPress, Lenis, Diagramm +
IBM Plex. **Look:** alternating black and white bands; headlines with a
**solid pill-shaped bar inline in the sentence** ("Fintech makers ▬ and");
quarter-circle outlines as cards; huge coral numbers beside black-and-white
photos ("250+", "$140M"); a coral/green/orange gradient glow; one coral
button. **Take:** huge stats as the visual, the inline-bar headline device,
black/white banding.

## Reference 12 — Zirka (zrk.technology)
Interceptor drone. **Built with:** Webflow, GSAP + ScrollTrigger, Lenis, Inter
Display + Geist Mono; ≈ 35,000 px of scroll. **Look:** near-black,
cinematic, one orange accent; a mono status bar across the top; the scene is a
**pinned stage where one number counts up as you scroll** ("Max speed
224 → 340 km/h") inside a thin dotted ring while 3D renders of the product
turn behind it. **Take:** a counting number as a scroll-driven stage; mono
status lines; the discipline of one idea per screen.

## Reference 13 — Grail (grail-app.com)
Real-world quests app. **Built with:** custom, Lenis, 4 canvases, PP Pangaia
(a high-contrast serif in capitals) + Switzer. **Look:** a sequence of
**chapters** ("Chapter 01…08"), each a full-bleed colour (black, lilac,
brown, white) with a giant all-caps serif line and the app's real cards and
phone floating through; a fixed pill CTA; a closing "YOUR EMAIL" field as
huge underlined type. **Take:** chapters with a colour per chapter, a fixed
pill CTA, the email field as the closing moment.

## Reference 14 — Pier Gorelli (piergorelli.com)
Freelance web & AI developer. **Built with:** Astro, Lenis, GSAP, Geist +
Geist Mono. **Look:** warm paper `#F4F4F0`, ink `#0E0E0D`, one blue `#2F5BFF`
for details; the hero ("**I do dev.**") draws a **blueprint of its own layout**
(guides, box labels like `H1.HUMAN · 1388×153`) while the second line types
itself; each project is a numbered stage "01 / 04" with an outlined next
number, the case's stack in mono, a Plot / Build / Live tab strip; a 4-step
process on a dotted line; the blog as plain dated rows; theme and colour
switches in the header; a giant "I do dev." closing the footer. **Take:** the
numbered "01 / 04" device, mono for meta, the Plot/Build/Live idea of showing
a result in stages, blog as rows, a giant closing line.

## Synthesis of the eight (what the new design takes)

| Pattern | Seen in | Use |
|---|---|---|
| One huge, tightly-tracked grotesk; lines **staggered** | Tresmares, Air, Kerna | Hero headline in 3 indented lines |
| Pure white / paper, ink text, **one** accent | Tresmares, Pier, Air | Paper default, ink for emphasis, one yellow |
| Statement with words filling in; centred big sentences | Tresmares, Kerna | The about statement |
| Hairline-bordered **grid cells**, hover inverts | Kerna, Tenity | The 8 service lines |
| Numbered "01 / 04" stages, mono meta | Pier, Zirka | Section and service numbering |
| A number as a scroll-driven stage | Zirka, Tenity | Proof numbers that count up |
| Rotating / typed word | Mira, Pier | "Working with: clinics ▮" in the hero |
| Giant cropped wordmark to close | Kerna, Pier | Footer wordmark |
| Chapters with a colour each | Grail | One dark section for contrast, not many |
| Booking in the closing section | Kerna | Contact: form + direct lines |
| **No illustration**; photo only if real | all eight | Real team photo + real client videos only |
| Pop-up that covers the page | Mira (bad) | Never on arrival |
