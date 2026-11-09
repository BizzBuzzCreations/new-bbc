# Design direction — BizzBuzz Creations rebuild

Synthesised from the six references in `DESIGN_REFERENCES.md` and the
business facts in the codebase. This is the system every page is built
from. Approved by the owner on 2026-11-09 ("I approve the creative
direction … do what is best for the website").

---

## 1. What the references taught us (synthesis)

| Lesson | From | How we use it |
|---|---|---|
| One brand idea carried through copy, labels and visuals | Velmax, Axiom | **"Signal from noise"** (below) |
| Grotesk headline + one serif-italic word + mono labels | Velmax, Visuvate | Bricolage Grotesque + *Newsreader italic* + DM Mono |
| One rare accent colour on black / white | all six | **Buzz yellow** on ink and paper |
| Show, don't claim — let the visitor see the work | Velmax, Visuvate, Shape of Intelligence | A pinned "signal path" scene with our real systems; live, interactive pieces |
| Rows and numbered lists instead of card grids | Bitnomial, Velmax | Services as rows, advantages as numbered lists |
| A big catalogue needs a mega menu and an index | BD Emerson, Velmax | Services mega menu (8 lines → 44 pages), searchable index on /services |
| Cheap, convincing "3D" | Axiom (2D canvas), Shape of Intelligence (renders) | A generative **Signal Field** on one 2D canvas — no WebGL |
| Visible honesty | Shape of Intelligence, Bitnomial | "Illustration" notes on demos; only verifiable numbers |
| Motion respects the reader | Visuvate, Axiom | Everything still under reduced motion; nothing auto-moves except the hero field |

**Rejected:** generic centred-label card grids (BD Emerson's template
feel), auto-moving marquees and testimonial columns, hidden system cursor,
`mailto:` forms, heavy WebGL, unverifiable stats, the current site's blue.

---

## 2. Brand idea — "Signal from noise"

The name is a buzz. The market around a small or growing business is
noise: ads, algorithms, platforms, tools that don't talk to each other.
BizzBuzz Creations turns that noise into a **signal** — a clear message,
a site that converts, systems that follow up, people who answer.

- **Motif:** the *Signal Field* — a field of fine horizontal lines that is
  noisy at rest and resolves into a clean waveform where the visitor's
  cursor (or the scroll) passes. Used in the hero, the footer and as quiet
  section texture. One 2D canvas, paused off-screen, still under reduced
  motion.
- **Voice:** short, specific, confident. Plain English. Concrete nouns
  (leads, calls, pages, rankings, invoices). No "unlock", "empower",
  "transform tomorrow", "trusted partner".
- **Labels** read like an instrument: `[01] SERVICES`, `IST 14:32 ·
  GMT 09:02`, `08 LINES · 44 SERVICES`.

---

## 3. Colour

| Token | Value | Use |
|---|---|---|
| `ink` | `#0A0A0B` | default page background |
| `ink-2` | `#111113` | raised surfaces |
| `ink-3` | `#1A1A1D` | hover / inputs |
| `line` | `rgb(255 255 255 / 0.12)` | hairlines on ink |
| `fog` | `#A6A59F` | secondary text on ink (≥ 7:1) |
| `paper` | `#F1EFE9` | light sections |
| `paper-2` | `#E6E3DA` | light raised / hover |
| `line-dark` | `rgb(10 10 11 / 0.14)` | hairlines on paper |
| `stone` | `#57554F` | secondary text on paper (≥ 7:1) |
| `buzz` | `#FFD43B` | the accent: primary buttons, index numbers, the signal, focus |
| `buzz-ink` | `#1C1700` | text on buzz |

Rules: buzz is never text on paper (contrast); on ink it may be text. One
accent only — no gradients except the signal's glow.

## 4. Typography

| Role | Family | Settings |
|---|---|---|
| Display | **Bricolage Grotesque** (var 200–800) | 500–600, tracking −0.035 to −0.05 em, line-height 0.9–1.0 |
| Accent word | **Newsreader** italic 400 | one or two words per heading, never a whole line |
| Body / UI | **Instrument Sans** (var 400–700) | 16–18 px body, 1.6 line-height |
| Labels | **DM Mono** 400/500 | uppercase, 11–13 px, tracking 0.08 em; never body text |

Scale (fluid, clamp): display-xl 64→176 px, display-l 48→112, display-m
36→72, h3 24→36, body-l 18–20, body 16, small 14, label 12.

## 5. Layout

- 12-column grid, max width 1440 px, gutters 20 px (phone) / 40 px (desktop).
- Asymmetric: headings left, supporting text right on the same baseline.
- Hairlines instead of boxes; cards only where something is a *thing*
  (a project, a person, a video). Radius 4 px on UI, 20 px on media.
- Section rhythm: 96–176 px between sections; tight inside.
- Ink is the default; paper sections switch the mood (the statement,
  the services index on hubs, the FAQ, legal text).

## 6. Navigation

- **Header:** fixed; transparent over the hero, ink + blur once scrolled.
  Logo · Services ▾ · Industries ▾ · Company ▾ · Insights · Contact, and a
  buzz "Start a project" button. Live clocks (IST · GMT) on wide screens.
- **Services mega menu:** 8 lines on the left (hover/focus selects), that
  line's sub-services on the right with a one-line description and a link
  to the hub; keyboard operable (arrows, Esc).
- **Industries:** 15 industries in a numbered 3-column index (no photos).
- **Phone:** full-screen sheet, huge numbered links, Services and
  Industries as accordions, contact buttons (call, WhatsApp, email) and
  both clocks at the bottom.
- **Footer:** big closing line + the Signal Field, office cards (Prayagraj
  HQ, Kanpur, London) with live local time, link columns, socials.

## 7. Components (one language)

`Button` (buzz solid / outline / text; letter-roll on hover, magnetic on
desktop) · `Label` (mono index `[01]`) · `SectionHead` (label + display
heading with accent word + side text) · `Rows` (numbered list rows with
hover reveal) · `Statement` (words fill in on scroll) · `SignalField`
(canvas) · `SignalPath` (pinned, scroll-driven scene) · `Accordion` (FAQ)
· `MediaFrame` (rounded image with mono caption) · `Specimen` (project /
system card with tag `BBC-01`) · `ClockLine` · `Breadcrumb` · `Chips`
· forms (underline fields, chip choices, inline validation, success state).

## 8. Motion system

- Easing `cubic-bezier(0.22, 1, 0.36, 1)` for everything; 0.2 s hovers,
  0.6–1.0 s reveals; stagger 60 ms.
- Reveals: CSS scroll-driven (`animation-timeline: view()`) where
  supported, otherwise shown immediately — never hidden content.
- Interaction-led: hovers, the cursor pulse in the Signal Field, the
  pinned Signal Path, statement fill, magnetic buttons, mega-menu
  transitions, accordion height.
- `prefers-reduced-motion`: no transforms, no canvas animation (a single
  static frame), no pinning; content identical.

## 9. Page structures

- **Home:** hero (headline + Signal Field + clocks) → statement → the 8
  service lines as rows → Signal Path (how the pieces connect) → what we
  build (Clio AI, Praxistence + in-house systems as specimens) → industries
  index → client video stage + reviews → process → insights → FAQ → CTA.
- **Service hub (×8):** hero (line number, name, accent, CTA) → overview
  (thesis left, text right) → sub-services as numbered rows → how it works
  → who we are → FAQ → trust → CTA.
- **Sub-service (×44):** hero with breadcrumb → who it's for → what's
  included (tabbed groups) → why us (numbered list) → roadmap (timeline)
  → where we work → FAQ → CTA.
- **Industry (×15):** same as sub-service, **no photos** — a generated
  typographic/signal visual per industry instead.
- **Location (UK + Outside Location pages):** home structure, local hero
  line, UK office section.
- **About, Team, Careers, How we work, FAQ, Guides, Contact, Blog, Post,
  Author, Legal:** each in the same language; listed in the build log.

## 10. Content rules

- Every dashboard field and "Remove section" switch keeps working — the
  new components read the same fields; saved text wins over defaults.
- No invented clients, metrics, awards or team sizes. Only shown: real
  reviews, the six client videos, real certifications, real products.
- New copy is written for the defaults; where the dashboard has saved
  text it takes over.

## 11. Technical

- Next.js 16 App Router (existing), Tailwind v4, framer-motion (already
  installed) only where CSS can't do it; no new runtime dependencies.
- Self-hosted fonts (`public/fonts`), `next/font/local`, `display: swap`.
- All URLs, metadata, canonicals, JSON-LD, sitemap and robots unchanged.
- Performance budget: hero LCP is text (no video), the Signal Field starts
  after first paint and pauses off-screen; JS per page kept small.
- Accessibility: WCAG 2.1 AA contrast, focus visible (buzz outline),
  keyboard for every interaction, one H1 per page, 24 px+ targets.

---

## 12. Build log (2026-11-09, branch `rebuild`)

**What was rebuilt** — every public page, through the shared templates:
home; the 8 service hubs; 44 sub-services; 15 industries; /services,
/industries; about, our team (+ BPO, R&D), careers, how we work, FAQ,
guides; contact; blog index, posts, authors; the 4 legal pages; the UK page
and every Outside Location page; 404; header, footer, consultation popup,
BizzBee chat. The admin dashboard is unchanged.

**New pieces** (`components/brand/`): Button, Kicker, AccentText,
SectionHead, Breadcrumb, SignalField, Clock / ClockLine, Statement,
IndustrySignature. Site map in `lib/siteNav.js`. Signature section on the
homepage: `components/home/signalPath.js`.

**For editors (dashboard)**
- Every field and "Remove section" switch works as before; saved text wins.
- Headings: the **last word** is set in the italic accent serif. To choose
  a different word, wrap it in stars: `Websites that *sell*`.
- Industry pages no longer show a photo (a generated signature instead), so
  their image fields are hidden. Service pages still show their hero /
  overview images — replacing the old blue illustrations there with real
  photos or simpler art will suit the new look better.

**Checked** (local production build, desktop 1440 + phone 390, all 89
routes): 0 script errors, 0 sideways scroll, one H1 per page, 0 broken
images, axe WCAG 2.1 AA clean; 36/36 interaction checks (menus + keyboard,
phone menu, Signal Path pinning, industries index, reviews, FAQ, tabs,
closing CTA and contact form sending, reduced motion fully still);
dashboard edit → live page verified. Lighthouse mobile (median of 3):
home 86, sub-service 92, industry 91, UK 88, contact 93; accessibility,
best practices and SEO 100.

**Not built (needs real material):** a Work / case-study section — there
are no verified client case studies in the codebase. Creative services
(UI/UX, branding) were not added — not in the current service list.
