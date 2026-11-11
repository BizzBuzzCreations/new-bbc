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

*(Revised 2026-11-10 — the single "Menu" button hid everything behind a
click; on a 1350 px laptop the full-screen menu also ran under the logo.)*

Desktop (≥ 1024 px): the logo, four links in the bar — **Services,
Industries, Company, Insights** — the live time (≥ 1280 px) and **Start a
project**. Services, Industries and Company hang a full-width ink panel from
the bar: Services shows the 8 lines with their 44 services in four columns,
Industries the 15 sectors as large type, Company the company pages with the
contact details and clocks. Opens on hover after a short delay (a mouse
passing through does nothing), on click (which pins it) and on Enter / ↓
(which moves focus into it); Esc closes it and returns focus to its button; a
veil dims the page behind. The current section carries an underline.
Phones and tablets (< 1024 px): **Menu** opens a full-screen sheet beneath the
solid bar (no collisions): the same links as accordions (Services → 8 lines →
their services), "Start a project", contacts and clocks. The header hides on
the way down and returns on the way up; it turns ink-coloured and solid while
a panel or the sheet is open.

## 6. Motion (purposeful, never required to read)

Hero lines rise from a mask on load (transform only); statement words fill on
scroll; numbers count up when they arrive; service cells invert on hover with
a cursor-following label; the hero's last line types through the industries
we serve; the phone menu opens as a curtain; the home hero sits on a **dot
field** (`components/brand/heroField.js`): a grid of small dots over which a
warm yellow light follows the pointer — the dots near it swell, darken and
part, a click sends a ring across — and, with nobody touching it, drifts on
its own path (so phones see it too). One 2D canvas, started when the browser
is idle, paused off-screen, a still frame under reduced motion / Data Saver. No auto-playing carousels, no
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

## 10. Revision 2026-11-10 (owner feedback: "so many bugs", navbar, hero)

- **Menu overlap fixed** — the full-screen menu started under the fixed logo
  and its rows collided with the header. Replaced by the inline nav + panels
  (desktop) and a sheet that starts below a solid bar (phones).
- **Hero** — type size follows the viewport height as well as its width
  (`min(9.6vw, 18.5svh)`), so "Get a Free Consultation" is above the fold on
  1350 × 655 / 1366 × 768 laptops; location pages put the framed video
  *after* the CTA row (it pushed the CTA 1,300 px down); the second clock
  that duplicated the header's is gone from the hero and detail heroes.
- **BizzBee never sits on a CTA** — hero buttons and the form fields carry
  `data-bizzbee-avoid`, so the launcher steps aside while one is under it
  (the hero buttons used to sit right under it on laptops).
- **Dev gotcha** — Tailwind reads every word in every project file, this
  one included, as a possible class, and a word with a "not" sign in front
  as that class with the old important prefix. The negated form of the word
  d-a-r-k, written with a space before it (as in a conditional), matched
  flowbite's dark-mode apexcharts rules, which carry a doubled important flag
  and break the CSS build ("Parsing CSS source code failed", every page 500
  in dev). The stylesheet now excludes `*.md` from scanning, and the
  navbar's variable is called `onInk`.

## 11. Liquid glass (2026-11-10)

Clear, bright-rimmed glass that *bends* what is behind it — not frosted
translucency. Where the browser allows it (Chromium: `backdrop-filter` accepts
an SVG filter) every `.glass` surface gets its own refraction filter:
`lib/liquidGlass.js` draws a displacement map for the surface's exact size and
corner radius (flat in the middle, pushing the backdrop outward along the
curved rim; a lens also magnifies its centre), `components/brand/liquidGlass.js`
builds an SVG `feDisplacementMap` filter from it (red/green/blue displaced by
slightly different amounts on small surfaces = colour fringing at the rim) and
hands it over via `--lg-url` + `data-liquid`. Elsewhere (Safari, Firefox) the
same surfaces are frosted glass.

On top of the refraction, in CSS: a specular rim whose bright arc turns toward
the pointer (`--ang`), an inner sheen and a yellow edge light under it
(`--mx/--my/--yl`, set by `components/brand/glassPointer.js`), springy
hover / press on small controls (`.glass-pop`), and `[data-tilt]` surfaces that
lean toward the pointer. Used on: the **header, now a floating glass pill**
(its menu panels are siblings under it — a backdrop-filter ancestor would stop
them blurring the page), the desktop menu panels (dark liquid cards), the hero
(a **glass lens that follows the pointer**, bending and magnifying the headline;
the info card stays frosted), the glass button, video play buttons, review
list and arrows.

Cost control: liquid drops to plain frosted glass while the page scrolls; a
frame-rate governor (`liquidGlass.js`, re-checked on each page change) steps a
struggling machine down liquid → frost → flat (`html[data-glass]`) and never
back up. Fallbacks: solid surfaces without `backdrop-filter` and under "reduce
transparency"; no tilt / lens with reduced motion; no pointer effects on touch.
Rules: no `position` in `.glass` (an unlayered rule beats the utilities — give
each surface relative/absolute/fixed in its markup); a header-like ancestor with
its own `backdrop-filter` becomes the "backdrop root" and its descendants can no
longer blur the page.

**Header blob (2026-11-10, later).** The pill refracts across its whole height
(bezel 30 px, little blur) and swells a touch under the pointer. Under the nav
links lives a liquid-glass **blob**: a small lens of glass that slides to the
link you point at / focus / whose panel is open, stretches while it travels and
settles with an overshoot (a fixed-size box moved by transform, so its
refraction filter is built once; the squash is a Web Animation), and magnifies
the label under it. Fades away when the pointer leaves; still under reduced
motion.

## 12. Homepage interaction round (2026-11-10)

- **Services is a selector, not a grid** (`components/home/servicesExplorer.js`,
  `servicesV2.js`): the 8 lines as large rows; a liquid-glass highlight slides
  to the one you point at / focus / (phones) tap, stretching on the way, and the
  right-hand panel shows that line's name, dashboard text, its services and an
  "Explore" button. All panels stay in the page (inactive ones `inert`), so all
  44 sub-service links remain crawlable; rows still link to their hub pages;
  keyboard: focus or ↑ ↓ selects. Phones: the rows become a scrolling strip of
  chips above the panel (the strip scrolls itself, never the page).
- **Numbers** are four liquid-glass tiles (tilt toward the pointer) and glass
  certification chips on the dark band.
- **Tried and removed on request:** a pointer-following liquid cursor lens (with
  "Play" / "View" bubbles) and a yellow metaball field behind the numbers. Lesson
  kept: an SVG refraction filter is drawn for an element's exact size and does
  **not** scale with a CSS transform — use real sizes (one element per size),
  never `scale()`, for a lens.
- Layout fix found on the way: a flex strip with `overflow-x: auto` inside a CSS
  grid item needs `min-w-0` on the item, and a stack of `grid-area: 1/1` panels
  needs `grid-cols-[minmax(0,1fr)]`, or the grid grows to the widest content and
  the whole page widens on phones.

### 12b. Premium pass (2026-11-10, later)

Owner brief: "make it look premium; the image under the home hero can go or move;
and no black-and-white images."
- **The photo under the hero is gone.** The built-in team picture
  (`/about-home.png`) is a generic stock-style photo, which contradicts "real
  photographs only", and a full-width picture right under the headline competed
  with it. The About section is now pure type (statement, service-line chips,
  copy). A photo the owner uploads in the dashboard (`aboutBackgroundImage`) still
  shows, as a band that opens from a framed window as it scrolls in.
- **No black-and-white anywhere:** every `grayscale` on images (team mosaic,
  portraits, culture rows, photo features, journey years, CTAs) is removed — photos
  are shown in colour.
- **Scroll choreography** (compositor-driven CSS scroll animations, Chromium;
  transform / clip-path only, never with reduced motion): the hero headline lines
  slide apart as you scroll away; section headings rise into place as they enter.
- **Kinetic type band** between Services and What we build
  (`components/home/kineticMarquee.js`): the service-line names, one solid row, one
  outlined, drifting in opposite directions; scrolling speeds it up and reverses
  it, and it leans with the speed; pauses under the pointer.
- **Section rail** (`components/home/sectionRail.js`, xl+): a hairline of dots down
  the left edge, one per section, the current one a bar, labels on hover, click to
  scroll; inverts itself over dark bands.
- **Client videos** drag with the mouse and glide on release. (Magnetic buttons —
  buttons leaning toward a nearby pointer — were tried and removed on request:
  buttons must stay where they are.)

### 12c. 3D hero stack, uncropped covers (2026-11-10, later)

- **A real 3D object beside the headline** (`components/home/heroDeck.js`, CSS 3D
  only — no library, no WebGL): eight cards, one per service line, stacked in
  depth and seen from above at an angle; the top card carries the logo and the
  three offices. Smooth by construction: the stack leans toward the pointer with
  an eased follow (rAF lerp, 7 % per frame), each card floats on its own rhythm,
  and scrolling away fans the layers apart (a scroll-driven CSS animation).
  Wide screens only (lg+), decorative (`aria-hidden`), still under reduced
  motion. Sized and placed from the viewport (`--dw`, `top`) so its rim sits under
  the header pill and its base above the hero card at 1024–1920 px; the
  headline is capped at 8.25 rem on wide screens so the two never touch.
  Measured in Playwright at eight sizes (`deckfit.mjs`).
- **Blog covers are shown whole** on the home Insights rows (`h-auto`, no
  `object-cover` / fixed aspect) — a 16:9 cover with text on the left was being
  cut to 4:3.

### 13. Landing animation, calmer buttons (2026-11-10, later)

- **Buttons never move.** Removed on request: the magnetic lean toward the
  pointer, the header pill's hover swell (it moved the nav buttons inside it),
  the hero card's tilt (it moved the two hero buttons), and the hover swell on
  glass buttons (a small press remains). Rule: a button is a fixed target —
  feedback is colour / label roll / press, never position.
- **Landing animation** (`components/home/intro.js`, `introGate.js`, globals.css
  ".intro"): first hard load of the homepage in a tab, ~2.8 s, pure HTML + CSS —
  a dark screen, the wordmark split across a seam ("BizzBuzz" rises from the seam,
  "Creations" falls from it), a yellow hairline fills along the seam while a
  counter runs 00 → 100 (a registered integer custom property, `@property
  --intro-n`, which must be `inherits: true` because the digits live on a
  pseudo-element), then the halves slide apart and the hero's headline replays as
  they part, the hero settles, the 3D stack arrives last. Gate: an inline script
  in `<head>` sets `html[data-intro]` before first paint — homepage only,
  once per tab session (`sessionStorage["bbc-intro"]`), never with reduced motion
  or Data Saver, never replayed by client-side navigation; the scroll lock is
  released by a timer inside the same script. Without that attribute the loader
  does not exist (`display: none`), so JS-off and every other page are unaffected.
  Costs nothing: no images (the wordmark is type), no client JS, no layout;
  measured phone LCP (4× CPU, Slow 4G, median of 5): 780 ms without, 840 ms with —
  the LCP element is unchanged (the hero text underneath is painted from the first
  frame; the first headline animation is untouched, the second one only replays
  the rise after the halves part).

### 13b. Hero fit, with the owner's real text (2026-11-11)

The saved hero copy is longer than the defaults ("Get More ROI with a Marketing
Agency You Can Trust" + a 3-sentence paragraph), which pushed the card's buttons
below the fold on a 1366 × 655 laptop. Always test the hero with the owner's real
text (insert it into the *test* DB; `herofit.mjs` / `btnfit.mjs` do the measuring):
- **Card = one compact row on ≥ 1280 px** (working-with | text | both buttons side
  by side), two rows on tablets (text beside "working with", buttons under), a
  stack on phones (the paragraph clamps to 3 lines so the main button is above
  the fold at 360 × 640). The headline height follows the viewport height
  (`min(7.8vw, 12.8svh)`), so headline + card always fit.
- **The hero sizes to its content on ≥ 768 px** (no `min-height`): a min-height
  left a blank band under the card on tall screens.
- **3D stack, rebuilt to be proportional:** everything inside scales from one
  variable (`--dw`, from the viewport width and height), layer gap `--dz` = 11.5 %
  of it, labels are single-line short names ("SEO", "Web Development", …), the top
  card is the logo only. It now always sits between the header pill and the hero
  card (measured at 11 laptop/desktop sizes, 1024 → 1920).

### 14. BizzBee launcher, calmed (2026-11-11)

The animated blue robot (Lottie, floating icons, a drop shadow, a yellow tip bubble
with an emoji) fought the rest of the site. It is now an **ink pill with a yellow
mark** — `components/bizzbee/BizzBeeLauncher.js`, `BizzBeeMark.js` (inline SVG robot
face on a yellow disc, also used as the chat window's avatar): "Ask BizzBee" on
desktop, just the round mark on phones, 52 px tall, bottom-right. Calm by rule: a
yellow ring breathes out three times then stops (none with reduced motion), hover
only changes colour (nothing moves), no animation library is loaded for it any more
(the old CSS that made it float / scale / tilt is deleted). The one-time tip is a
small paper card with no emoji. It still steps aside over anything marked
`data-bizzbee-avoid` (2 px margin now, and lowered to 16 px from the bottom so it
clears the hero buttons on a 1366 × 655 laptop). The chat window sits above it with a
clear gap under the header at every height (`100dvh − 11.5rem`, phones
`− 10.5rem`); it used to run up under the header pill and cover "Start a project".

### 14b. The header pill is frosted, not refracted (2026-11-11)

Owner: "whatever is behind the navbar glitches". Cause: the pill was *refracting* (an
SVG displacement `backdrop-filter`) a backdrop that is never still — the page scrolls
under a fixed header, the hero's dot field and light animate behind it, the 3D stack
floats — so the warped band along its rim shimmered, and my scroll-time swap
(liquid ↔ frosted, to save work) made the whole look pop at every scroll start and
stop. Rules now: **a fixed element over moving content never refracts** — the header
pill is a denser frost (blur 26 px, 66 % tint) with one rim, in a single look at all
times; the **per-scroll swap is removed** (the frame-rate governor, which steps a
struggling machine down once and never back up, stays); refraction is kept only on
surfaces that scroll *with* their backdrop (number tiles, small glass buttons, the nav
blob — which samples only the header's own content). The cursor lens and the
header-blob tuning notes above still apply.

### 14c. One look for the header pill (2026-11-11, later)

Owner, after 14b: "when I scroll I see the glass, when I don't there's no liquidity —
two different morphisms". A frosted bar over a plain background (page top) just reads
as a white pill, while over scrolled text it reads as glass. So the bar now has the
**same liquid-glass recipe in every state**: a *gentle* SVG refraction (bezel 24 px,
strength 0.5 → a few px of shift at the rim; the original 63 px warp was what
shimmered over moving content) + a light tint (34 %/18 %) + a 7 px blur + soft inner
light pooled along the top and bottom edges and a soft shadow (thickness cues that
work even with nothing behind it) + the single pointer-facing rim. No swap at scroll
start/stop, ever. Fallbacks: browsers without SVG backdrop filters and the governor's
"frost"/"flat" steps give the same bar as a plain 20 px blur — the bar is excluded
from "flat" (one cheap element must never become an opaque slab). If the rim still
shimmers on someone's GPU the one knob is `data-lg-scale` on the `<header>` (0 = no
refraction).

## 15. Hero v3 and the page's scroll choreography (2026-11-11)

Owner: "make the hero more unique, sync the layers with the loader, and I don't see
any effects when I scroll." The page now has one motion language, taken from the
landing: **type rising out of a mask, a hairline that draws itself, a dark band that
opens like the curtain, one yellow accent.** Every effect is a CSS scroll-driven
animation (compositor, no JS, Chromium/Safari 26; elsewhere the page is simply
still), uses transform / clip-path only — **never opacity**, so nothing can be stuck
invisible and contrast never changes mid-scroll — and is off with reduced motion.

**The hero stack, rebuilt** (`components/home/heroDeck.js`): nine layers — a dark
**brand card** on top ("One team · Every layer", white logo) over the eight service
lines, each a **real link** to its hub page (it turns yellow under the pointer;
nothing moves toward you) with its service count; 01 sits just under the brand card.
Placed after the hero content (so it is last in tab order), above the dot field and
below the content (`pointer-events` pass through the content wrapper). Sized from the
viewport (`--dw: min(24vw, 360px, 40svh)`) so all nine labels sit between the header
and the hero card at 1024–1920 px (`herofit.mjs`).
- *Landing sync:* the layers start as ONE card (the brand card) and peel apart as the
  loader's curtain opens (`deck-peel`, delayed 2.2 s only when `html[data-intro="play"]`,
  0.45 s otherwise). The peel is ordered **top card first** (`--n`) — the other way
  round the top card dips under the others mid-peel.
- *Pointer:* the stack leans toward it (unchanged). *Scroll:* three nested layers keep
  the motions apart — `.deck-scroll` (spin −28°, rise 15 vh, scale 1.1), `.deck-stage`
  (pointer lean, from JS), `.deck-card` (peel on `transform`; explode on `translate`,
  ×2.7 gap) > `.deck-face` (idle float).

**Scroll vocabulary** (globals.css "scroll choreography"): `.head-rise` (headings rise
out of a mask) · `.rule-draw` (a hairline above every section's kicker draws across —
the loader's seam; bound to the section head's own named timeline `--sec`, because a
1 px element has no scroll distance of its own) · `.row-in` (rows, product blocks, number
tiles, blog rows and FAQ items rise, staggered by their own position / `--k`) ·
`.band-open` (the dark bands — numbers, reviews, closing CTA — open from a rounded
card to full width) · `.word-drift` (the industries run slides sideways as one block;
per-word alternating directions made neighbours overlap) · `.hero-parallax` (dots and
light lag behind the page) · `.wordmark-rise` (the footer wordmark) · a yellow
progress hairline across the top (`.scroll-progress`).

Lessons: (1) `overflow: hidden` makes an element a *scroll container*, and a `view()`
timeline binds to the nearest one — an ancestor with `overflow-hidden` silently freezes
the effect; use `overflow-clip`. (2) Expo-out easings finish in the first few percent
of a scroll-linked range and look like nothing happens; use a gentle curve
(`cubic-bezier(.25,.6,.35,1)`). (3) Test each effect numerically at "just entering" vs
"arrived" (`scrollfx.mjs`), not only by eye. Measured: scrolling the whole page
median 16.7 ms/frame with the effects on and off.


### 15b. The stack, second pass: slabs, life at rest, and a pointer bug (2026-11-11)

The first stack read as thin white sheets on a near-white page that "just sat
there". Now: each layer is a **slab** — its face, a yellow edge set back in depth
(`::before`, translateZ −0.012 × width, seen along the lower rims; ink on hover),
the shadow of the layer above on its strip (`::after`), a per-layer tone from
`color-mix` (not `filter`), and a soft floor shadow (`.deck-ground`, one more layer
under the stack). The brand card carries the real count — "44 services in 8 lines"
(`SUB_SERVICE_COUNT`) — and a larger logo.

Alive at rest, all compositor-only and off under reduced motion: the stack turns
±7° like a showpiece (`deck-sway`, on the `ul`, because the pointer lean owns the
stage's transform) and every 6.5 s a yellow light runs down the layers — each slides
out along its length and glows in turn (`deck-scan` on `translate`, `deck-glow` on
`opacity`), starting after the loader (+2 s while it plays). Pointer: the lean is
stronger, and the layer under it slides out (`transform`, a different property from
the idle `translate`, so the two never fight) and goes yellow — it slides along its
own length, never toward the pointer. It sits well to the left (`right` grows from 6vw at 1024 to 8.4vw
by ~1280, so the headline clearance holds at every width: ≥27px in every sway pose at
1024–1920, tested by `deckmove.mjs`; the headline's second line is what limits it).

Lessons: (1) **Check that a decorative layer actually receives the pointer.** The
headline's `display:block` lines span the full width of the h1 and sat above the
stack (z-10 vs 5): hover and click never reached the layers — `elementFromPoint` at
each label (`dbghover.mjs`) found the headline. The stack is now above the content
(`z-[12]`), its container still `pointer-events:none`, only the faces `auto`.
(2) `filter` forces `transform-style: flat`, so a face with a back plate can't use
it. (3) `box-shadow` paints only outside the box: a "floor shadow" made that way
shows as a pale plate; use a blurred filled shape. (4) An element that is always
moving is never "stable" for Playwright's actionability — use `force` and a fresh
bounding box, and check the position over time (`deckmove.mjs`).

### 15c. The hero card and a review pass (2026-11-11)

**Industry wheel** (`components/home/industryWheel.js`, replaces the typed word):
"Working with" now shows the 15 industries as a wheel that rolls up every 2.6 s —
the one before and after faded, the current one in full ink and a link to its page
(arrow on hover), a `01 / 15` counter, a hairline divider on wide screens. It holds
while the pointer or focus is on it (the link never changes under the pointer), is
still under reduced motion, and shows one row on phones (first screen is tight). The
list is repeated 3× and snaps back from the third copy to the second, so looping has
no long rewind. Tested: `wheel.mjs` (order, loop, hold, counter, click).

**Review notes applied** (an outside design review of the hero): the muted half of
the headline is darker (65 % ink, was 50 %); the card's sub-heading is smaller so it
stops competing with the h1; the header CTA is an outline pill so "Get Free
Consultation" is the one solid action in the first screen; the stack's "N services"
micro-text is gone (unreadable at that size — the layers are a hook, the names carry
the meaning) and the names are larger; the section-rail dots are bigger and darker;
the wheel's faded rows are lighter-faded; a "Recognised by" strip of the REAL
certifications (`lib/trustBadges.js`, also used by the numbers band) sits under the
buttons as proof for "India's Trusted". Not done, and why: moving the buttons above
the card (adds ~80 px and breaks the first-screen fit with the owner's long text);
client count / rating / years in that strip (no verified figures to hand — add them
from the dashboard's stats when the owner confirms the numbers).
