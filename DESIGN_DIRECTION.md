# Design direction v2 — BizzBuzz Creations

Replaces v1 ("Signal from noise"), which the owner rejected on 2026-11-09:
it kept the old site's section structure, used generated line-art and
diagrams, and was not clean. v2 is designed from the eight references in
`DESIGN_REFERENCES.md` (Mira, Tresmares, Kerna, AIR, Tenity, Zirka, Grail,
Pier Gorelli) and a fresh brainstorm. **Nothing is derived from the previous
site's layout.**

## 1. The idea — "Set in type"

Everything the references do best is *restraint*: one huge, tight grotesk; a
great deal of white space; hairlines; real photographs and real numbers; one
accent. So the site is **typeset, not decorated** — it reads like a well-made
annual report for a company that is easy to work with. No illustration, no
generated art, no stock imagery, no decorative gradients. What is shown is
real: the team's photo, the clients' videos, the products' names, the
numbers, the people.

Brand line (hero): the dashboard's heading, set huge and staggered.
Interactive device: the *words* — staggered lines, words that fill as you
read, a word that types ("Working with: clinics▮"), numbers that count,
cells that invert, a giant wordmark that closes the page.

## 2. Colour (one accent, used sparingly)

| Token | Value | Use |
|---|---|---|
| `paper` | `#F5F4F0` | the page (default surface) |
| `paper-2` | `#ECEBE6` | hover / raised on paper |
| `ink` | `#111110` | text on paper; the dark surface |
| `stone` | `#6A6962` | secondary text on paper (5.1:1) |
| `fog` | `#A3A29A` | secondary text on ink (7.1:1) |
| `buzz` | `#FFD43B` | the only accent: marker dot, focus, one highlight |
| `buzz-ink` | `#1C1700` | text on buzz |

Two surfaces — `.on-paper` and `.on-ink` — set `--bg --fg --mut --line`, and
every component draws with those, so the same component works on both.
Light is the default; **one or two dark bands per page** (stats, closing)
for rhythm, as in Tenity and Kerna.

## 3. Type

**Geist** (variable, 100–900) for everything; **Geist Mono** for labels
and numbers. No serif, no italic accent.
- Display: weight 500, tracking −0.045 em, line-height 0.9, huge
  (`clamp(3.2rem, 9.4vw, 10rem)` for the hero).
- Headlines are **two-tone**: the leading words in ink, the trailing words in
  the same colour at 55 % (Tresmares' grey fill) — hierarchy without a second
  typeface. A dashboard editor can choose the grey part with stars:
  `Websites that *sell*`.
- Body 17–19 px / 1.6; labels 12 px mono, uppercase, +0.06 em.

## 4. Layout and spacing

Max width 1440, 20/40 px gutters, 12 columns. Sections are separated by
hairlines and 128–224 px of air, not by boxes or shadows. Corners are sharp
(0–2 px) except pills (buttons) and the video cards. Section numbers
`01 / 08` in mono.

## 5. Navigation

Header: logo · live time · **Menu** · "Start a project" — nothing else.
**Menu** opens a full-screen overlay on every screen size (Mira / Kerna):
left, huge links (Services, Industries, Company, Insights, Contact); right,
the links of the one you hover (the 8 service lines with their 44
sub-services; the 15 industries; company pages). Phones: the same as
accordions. Esc closes; focus is trapped and returned.

## 6. Motion (purposeful, never required to read)

Hero lines rise from a mask on load (transform only); statement words fill on
scroll; numbers count up when they arrive; service cells invert on hover with
a cursor-following label; the hero's last line types through the industries
we serve; the menu opens as a curtain. No auto-playing carousels, no
scroll-jacking, no pop-up on arrival (Mira's pop-up was the one thing to
avoid); everything is still under `prefers-reduced-motion`.

## 7. Pages (all share the primitives in `components/brand`)

- **Home:** hero → the team (real photo) → statement → services (8 cells) →
  our own products → numbers (ink) → industries → client stories (real
  videos) → reviews → process → insights → FAQ → closing (ink) + footer.
- **Service hub / sub-service / industry:** a big staggered title, one
  paragraph, the structure as numbered hairline rows and plain lists — no
  imagery (the dashboard image fields stay but are not shown).
- **Company pages, blog, authors, legal, contact, 404:** the same type,
  rows and hairlines.

## 8. Content rules

Dashboard fields, "Remove section" switches, every URL, metadata and the
sitemap keep working. No invented clients, numbers or awards. Pop-up: only
after real engagement (scroll depth), once per visitor.

## 9. Build log (2026-11-09)

Built across every public page through the shared primitives in
`components/brand` and the section components in `components/home`,
`components/detail`; the site map is `lib/siteNav.js`.

- **No illustration anywhere:** the old line-art, diagrams, globe and the
  illustrated team / service / industry images are not shown (the dashboard's
  image fields stay but are unused on those pages). Photos used are real:
  the team photograph, office photos, portraits, the client videos.
- **Content-dense by rule:** sections are separated by hairlines and 56–80 px
  of air, not 150+ px; heroes carry a side list (sibling services, the
  service list, quick links); service cells show their sub-services; the
  numbers band fills its row with real facts; FAQs carry a contact card;
  empty states (no open roles, no cover image) are written, not blank.
  `gaps.mjs` (Playwright + pixel scan) measured the blank bands: largest
  ≈ 184 px (desktop), 134 px (phone), most under 130 px.
- **Checked:** 89 routes × desktop/phone: 0 script errors, 0 sideways scroll,
  one H1, no broken images, axe WCAG 2.1 AA clean; 29/29 interaction checks
  (menu with keyboard, header hide/return, typed hero word, service cell
  hover, counting numbers, industries dimming, inline video playback and
  one-at-a-time, reviews, FAQ, CTA and contact forms sending, phone menu,
  reduced motion fully still).
