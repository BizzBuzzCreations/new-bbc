"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Button from "@/components/brand/button";
import { ClockLine } from "@/components/brand/clock";
import {
  SERVICE_LINES,
  SUB_SERVICE_COUNT,
  INDUSTRIES,
  COMPANY_LINKS,
  INSIGHT_LINKS,
  CONTACT,
} from "@/lib/siteNav";

// The header (DESIGN_DIRECTION.md §5). Desktop (lg and up): the logo, four
// links in the bar — Services, Industries, Company, Insights — and "Start a
// project". Services / Industries / Company open a full-width panel under the
// bar (on hover, with a short delay so a passing mouse does not trigger it; on
// click or Enter; ↓ moves into it; Esc closes it and returns to its button).
// Below lg: "Menu" opens a full-screen sheet with the same links as
// accordions. The header hides while reading down the page and comes back on
// scroll up; while a panel or the sheet is open it is frosted, so
// nothing scrolls underneath the logo.
const NAV = [
  { key: "services", label: "Services", href: "/services", panel: true },
  { key: "industries", label: "Industries", href: "/industries", panel: true },
  { key: "company", label: "Company", href: "/about", panel: true },
  { key: "insights", label: "Insights", href: "/blog", panel: false },
];
const SHEET = [
  ...NAV,
  { key: "contact", label: "Contact", href: "/contact", panel: false },
];

const COMPANY_PATHS = [
  "/about",
  "/our-team",
  "/how-we-work",
  "/career",
  "/faq",
];
const within = (path, base) => path === base || path.startsWith(`${base}/`);
function sectionOf(path) {
  if (path === "/services" || SERVICE_LINES.some((s) => within(path, s.href)))
    return "services";
  if (within(path, "/industries")) return "industries";
  if (COMPANY_PATHS.some((p) => within(path, p))) return "company";
  if (
    within(path, "/blog") ||
    within(path, "/guides") ||
    within(path, "/author")
  )
    return "insights";
  if (within(path, "/contact")) return "contact";
  return "";
}

export default function Navbar() {
  const pathname = usePathname();
  const section = sectionOf(pathname);
  const [sheet, setSheet] = useState(false);
  const [panel, setPanel] = useState("");
  const [hidden, setHidden] = useState(false);
  const [pick, setPick] = useState("services"); // which accordion is open in the sheet
  const header = useRef(null);
  const root = useRef(null);
  const sheetBtn = useRef(null);
  const sheetEl = useRef(null);
  const timer = useRef(0);
  const openedBy = useRef(""); // "hover" | "click" | "key" — a hover-opened panel closes when the pointer leaves
  const triggers = useRef({});
  const navEl = useRef(null);
  const blob = useRef(null);
  const blobAt = useRef(null); // centre x of the item the glass blob is on, or null while it is hidden

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setSheet(false);
    setPanel("");
  }

  const panelRef = useRef("");
  useEffect(() => {
    panelRef.current = panel;
  }, [panel]);
  const closePanel = useCallback((returnFocus = false) => {
    clearTimeout(timer.current);
    if (returnFocus) triggers.current[panelRef.current]?.focus();
    setPanel("");
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  // header: solid after a little scroll; hides on the way down, returns on the way up
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y > lastY + 4 && y > window.innerHeight * 0.6) {
        setHidden(true);
        setPanel("");
      } else if (y < lastY - 4 || y < 80) setHidden(false);
      lastY = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // growing past the phone layout closes the sheet (and gives the scroll back)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setSheet(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // a panel is open: Esc closes it, so does a click anywhere outside the header
  useEffect(() => {
    if (!panel) return;
    const onKey = (e) =>
      e.key === "Escape" &&
      closePanel(root.current?.contains(document.activeElement));
    const onDown = (e) => !root.current?.contains(e.target) && closePanel();
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [panel, closePanel]);

  // the sheet is open: lock scroll, Esc closes, Tab stays inside, focus returns
  useEffect(() => {
    if (!sheet) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const root = sheetEl.current;
    const focusables = () =>
      [...root.querySelectorAll("a[href], button:not([disabled])")].filter(
        (e) => e.offsetParent !== null,
      );
    const header0 = header.current;
    const all = () =>
      [
        ...(header0?.querySelectorAll("a[href], button:not([disabled])") || []),
      ].filter((e) => e.offsetParent !== null);
    focusables()[0]?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setSheet(false);
      if (e.key !== "Tab") return;
      const f = [...all(), ...focusables()];
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const trigger = sheetBtn.current;
    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [sheet]);

  const hoverOpen = (key) => (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    clearTimeout(timer.current);
    if (panel === key) return;
    timer.current = setTimeout(
      () => {
        openedBy.current = "hover";
        setPanel(key);
      },
      panel ? 40 : 110,
    );
  };
  const hoverLeave = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    clearTimeout(timer.current);
    if (openedBy.current === "hover")
      timer.current = setTimeout(() => setPanel(""), 200);
  };
  // The liquid blob under the nav links: a small lens of glass that slides to
  // the link you point at (or focus, or whose panel is open), stretching along
  // the way and settling with a little overshoot, and magnifying the label it
  // sits on. Position and width come from transform (the box is a fixed size, so
  // its refraction filter is built once); squash-and-stretch is a Web Animation.
  const moveBlob = (el) => {
    const b = blob.current;
    const nav = navEl.current;
    if (!b || !nav || !el) return;
    const BASE = 124;
    const nr = nav.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const cx = r.left - nr.left + r.width / 2;
    const place = `translate3d(${(cx - BASE / 2).toFixed(1)}px, 0, 0) scale(${((r.width + 12) / BASE).toFixed(3)}, 1)`;
    const prev = blobAt.current;
    blobAt.current = cx;
    if (prev == null) {
      b.style.transition = "none";
      b.style.transform = place;
      void b.offsetWidth; // apply it in place, then let it fade in
      b.style.transition = "";
      b.style.opacity = "1";
      b.style.scale = "1";
      return;
    }
    b.style.opacity = "1";
    b.style.transform = place;
    if (
      Math.abs(cx - prev) > 4 &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      b.animate
    ) {
      const d = Math.min(Math.abs(cx - prev) / 240, 0.6);
      b.animate(
        [
          { scale: "1 1" },
          { scale: `${1 + d} ${1 - d * 0.32}`, offset: 0.38 },
          { scale: "1 1" },
        ],
        { duration: 620, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
      );
    }
  };
  const hideBlob = () => {
    const b = blob.current;
    if (!b) return;
    blobAt.current = null;
    b.style.opacity = "0";
    b.style.scale = "0.7";
  };
  // a panel opening or closing changes what the BizzBee launcher sits on top of; it re-checks on resize, so tell it
  useEffect(() => {
    const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 420);
    return () => clearTimeout(t);
  }, [panel]);
  // a panel stays "held" by the blob while it is open
  useEffect(() => {
    if (panel) moveBlob(triggers.current[panel]);
    else if (
      !navEl.current?.matches(":hover") &&
      !navEl.current?.contains(document.activeElement)
    )
      hideBlob();
  }, [panel]);

  const click = (key) => (e) => {
    clearTimeout(timer.current);
    const byKey = e.detail === 0;
    if (panel === key) {
      if (openedBy.current === "hover" && !byKey) {
        openedBy.current = "click"; // the mouse already opened it: a click pins it open
        return;
      }
      setPanel("");
      return;
    }
    openedBy.current = byKey ? "key" : "click";
    setPanel(key);
    if (byKey) focusPanel(key);
  };
  const focusPanel = (key) =>
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        document
          .getElementById(`mega-${key}`)
          ?.querySelector("a[href]")
          ?.focus(),
      ),
    );
  const triggerKey = (key) => (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      openedBy.current = "key";
      setPanel(key);
      focusPanel(key);
    }
  };

  const onInk = sheet; // the phone sheet is dark; the desktop panels float below a paper bar
  const goHome = () => {
    setSheet(false);
    setPanel("");
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      {/* a quiet veil over the page while a panel is open */}
      {panel && (
        <div
          aria-hidden="true"
          onClick={() => closePanel()}
          className="fixed inset-0 z-[65] bg-black/35 motion-safe:animate-[fade-in_0.3s_ease-out]"
        />
      )}

      <div ref={root} className="contents">
        <header
          ref={header}
          onFocusCapture={() => setHidden(false)}
          onBlur={(e) => {
            if (
              panel &&
              openedBy.current === "key" &&
              !root.current?.contains(e.relatedTarget)
            )
              setPanel("");
          }}
          onPointerLeave={hoverLeave}
          onPointerEnter={() => clearTimeout(timer.current)}
          data-lg-bezel="30"
          data-lg-scale="1.5"
          style={{ "--lq-blur": "4px" }}
          className={`glass glass-bar glass-calm fixed inset-x-3 top-3 z-[70] mx-auto max-w-[1440px] rounded-full md:inset-x-6 md:top-4 ${
            hidden && !onInk && !panel
              ? "-translate-y-[calc(100%+1.5rem)]"
              : "translate-y-0"
          } text-(--fg) ${onInk ? "v-ink" : "v-paper"}`}
        >
          <div className="flex h-14 items-center gap-4 px-4 md:h-[4.25rem] md:gap-6 md:px-6">
            <Link
              href="/"
              onClick={goHome}
              className="shrink-0"
              aria-label="BizzBuzz Creations — home"
            >
              <Image
                src={onInk ? "/bbc logo white.png" : "/bbc-logo-ink.png"}
                alt="BizzBuzz Creations"
                width={447}
                height={143}
                priority
                className="h-8 w-auto md:h-9"
              />
            </Link>

            <nav
              ref={navEl}
              aria-label="Primary"
              onPointerLeave={() => !panel && hideBlob()}
              onBlur={(e) =>
                !panel &&
                !e.currentTarget.contains(e.relatedTarget) &&
                hideBlob()
              }
              className="group/nav relative ml-4 hidden items-center gap-1 lg:flex"
            >
              {NAV.map((n) => {
                const here = section === n.key;
                const mark = `pointer-events-none absolute inset-x-4 bottom-1.5 h-px origin-left bg-(--fg) transition-transform duration-300 ease-out-soft ${here && !panel ? "scale-x-100 group-hover/nav:opacity-0 group-focus-within/nav:opacity-0" : "scale-x-0"}`;
                const cls =
                  "group relative flex h-11 items-center gap-1.5 rounded-full px-4 text-[0.9375rem] font-medium";
                if (!n.panel) {
                  return (
                    <Link
                      key={n.key}
                      href={n.href}
                      onClick={goHome}
                      onPointerEnter={(e) => {
                        hoverOpen("")(e);
                        moveBlob(e.currentTarget);
                      }}
                      onFocus={(e) => moveBlob(e.currentTarget)}
                      aria-current={here ? "true" : undefined}
                      className={cls}
                    >
                      {n.label}
                      <span aria-hidden="true" className={mark} />
                    </Link>
                  );
                }
                return (
                  <button
                    key={n.key}
                    ref={(el) => (triggers.current[n.key] = el)}
                    type="button"
                    id={`nav-${n.key}`}
                    aria-expanded={panel === n.key}
                    aria-controls={`mega-${n.key}`}
                    aria-current={here ? "true" : undefined}
                    onPointerEnter={(e) => {
                      hoverOpen(n.key)(e);
                      moveBlob(e.currentTarget);
                    }}
                    onFocus={(e) => moveBlob(e.currentTarget)}
                    onClick={click(n.key)}
                    onKeyDown={triggerKey(n.key)}
                    className={cls}
                  >
                    {n.label}
                    <ChevronDown
                      aria-hidden="true"
                      size={15}
                      strokeWidth={2}
                      className={`-mr-1 transition-transform duration-300 ease-out-soft ${panel === n.key ? "rotate-180" : ""}`}
                    />
                    <span aria-hidden="true" className={mark} />
                  </button>
                );
              })}
              <span
                ref={blob}
                aria-hidden="true"
                data-lg-blob=""
                data-lg-bezel="12"
                data-lg-scale="1.1"
                data-lg-chroma="off"
                className="glass pointer-events-none absolute left-0 top-1/2 z-10 h-[46px] w-[124px] -translate-y-1/2 rounded-full opacity-0 [scale:0.7]"
                style={{
                  "--lq-blur": "0px",
                  "--lq-sat": "1.35",
                  "--q-a": "0.1",
                  "--q-a2": "0.03",
                  transition:
                    "opacity .35s ease, scale .6s cubic-bezier(.34,1.56,.64,1), transform .62s cubic-bezier(.22,1.3,.36,1)",
                  willChange: "transform",
                }}
              />
            </nav>

            <div className="ml-auto flex items-center gap-3 md:gap-5">
              <ClockLine className="hidden text-(--mut) 2xl:inline-flex" />
              <div className="hidden sm:block">
                <Button
                  href="/contact"
                  variant={onInk ? "buzz" : "solid"}
                  size="md"
                  onClick={goHome}
                >
                  Start a project
                </Button>
              </div>
              <button
                ref={sheetBtn}
                type="button"
                onClick={() => setSheet((o) => !o)}
                aria-expanded={sheet}
                aria-controls="site-menu"
                className="group flex h-12 items-center gap-3 rounded-full border border-(--fg)/30 pl-5 pr-4 text-[0.9375rem] font-medium transition-colors duration-300 hover:border-(--fg) lg:hidden"
              >
                <span className="roll">
                  <span>{sheet ? "Close" : "Menu"}</span>
                  <span aria-hidden="true">{sheet ? "Close" : "Menu"}</span>
                </span>
                <span aria-hidden="true" className="relative block h-3 w-5">
                  <span
                    className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${sheet ? "top-1.5 rotate-45" : "top-0"}`}
                  />
                  <span
                    className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${sheet ? "top-1.5 -rotate-45" : "top-3"}`}
                  />
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* the desktop panels: floating liquid-glass cards under the pill (siblings of it, not children) */}
        {NAV.filter((n) => n.panel).map((n) => (
          <div
            key={n.key}
            id={`mega-${n.key}`}
            role="region"
            aria-labelledby={`nav-${n.key}`}
            hidden={panel !== n.key}
            onPointerEnter={() => clearTimeout(timer.current)}
            onPointerLeave={hoverLeave}
            className="fixed inset-x-6 top-24 z-[70] mx-auto hidden max-w-[1440px] lg:block [&[hidden]]:hidden"
          >
            <div
              data-bizzbee-avoid
              data-lg-bezel="30"
              data-lg-scale="1.1"
              className="on-ink glass glass-calm glass-dense relative overflow-hidden rounded-[28px] motion-safe:animate-[panel-in_0.35s_var(--ease-out-soft)]"
            >
              <div className="max-h-[calc(100svh-7rem)] overflow-y-auto overscroll-contain">
                {panel === n.key &&
                  (n.key === "services" ? (
                    <MegaServices go={goHome} />
                  ) : n.key === "industries" ? (
                    <MegaIndustries go={goHome} />
                  ) : (
                    <MegaCompany go={goHome} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* below lg: the full-screen sheet */}
      <div
        id="site-menu"
        ref={sheetEl}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!sheet}
        data-bizzbee-avoid
        className="on-ink glass-sheet fixed inset-0 z-[60] overflow-y-auto overscroll-contain pt-[5.5rem] motion-safe:animate-[curtain_0.6s_var(--ease-out-soft)] md:pt-[6rem] lg:hidden"
      >
        <div className="wrap flex min-h-full flex-col pb-8 pt-3">
          <ul>
            {SHEET.map((p, i) => {
              const hasPanel = p.panel;
              const on = pick === p.key;
              return (
                <li key={p.key} className="border-b border-(--line)">
                  <div className="flex items-center">
                    <Link
                      href={p.href}
                      onClick={goHome}
                      className="font-display flex flex-1 items-baseline gap-4 py-4 text-[clamp(2.2rem,9vw,4.4rem)] leading-none"
                    >
                      <span className="kicker w-6 text-(--mut)">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.label}
                    </Link>
                    {hasPanel && (
                      <button
                        type="button"
                        aria-label={`${on ? "Hide" : "Show"} ${p.label} links`}
                        aria-expanded={on}
                        onClick={() => setPick(on ? "" : p.key)}
                        className="flex h-12 w-12 items-center justify-center"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          size={22}
                          className={`transition-transform duration-300 ${on ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {hasPanel && on && (
                    <div className="pb-6 motion-safe:animate-[fade-in_0.3s_ease-out]">
                      <SheetPanel which={p.key} go={goHome} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-auto pt-8">
            <Button
              href="/contact"
              variant="buzz"
              size="lg"
              onClick={goHome}
              className="w-full"
            >
              Start a project
            </Button>
            <p className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-(--mut)">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-(--fg) underline decoration-(--fg)/30 underline-offset-4"
              >
                {CONTACT.email}
              </a>
              <a href={CONTACT.phoneIndia.href}>{CONTACT.phoneIndia.display}</a>
              <a href={CONTACT.phoneUk.href}>{CONTACT.phoneUk.display}</a>
            </p>
            <ClockLine className="mt-4 text-(--mut)" />
          </div>
        </div>
      </div>
    </>
  );
}

const sub =
  "group/l flex items-center gap-2 py-[3px] text-[0.78rem] leading-5 xl:text-[0.84rem] text-(--mut) transition-[color,transform] duration-200 hover:translate-x-1 hover:text-(--fg) focus-visible:text-(--fg)";

function MegaServices({ go }) {
  return (
    <div className="px-6 py-4 md:px-8">
      <div className="mb-3.5 flex items-end justify-between gap-6 border-b border-(--line) pb-2.5">
        <p className="kicker text-(--mut)">
          {SERVICE_LINES.length} lines · {SUB_SERVICE_COUNT} services
        </p>
        <Link
          href="/services"
          onClick={go}
          className="group inline-flex items-center gap-1.5 text-sm font-medium underline decoration-(--fg)/30 underline-offset-[6px] hover:decoration-(--fg)"
        >
          All services{" "}
          <ArrowUpRight
            aria-hidden="true"
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
      <ul className="grid grid-cols-4 gap-x-5 gap-y-3.5 xl:gap-x-8">
        {SERVICE_LINES.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              onClick={go}
              className="font-display flex items-baseline gap-2.5 border-b border-(--line) pb-1.5 text-base leading-tight transition-opacity hover:opacity-70"
            >
              <span className="kicker text-(--mut)">{s.no}</span>
              {s.name}
            </Link>
            <ul className="mt-1">
              {s.subs.map((x) => (
                <li key={x.href}>
                  <Link href={x.href} onClick={go} className={sub}>
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaIndustries({ go }) {
  return (
    <div className="grid gap-10 px-6 py-7 md:px-9 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <p className="kicker text-(--mut)">{INDUSTRIES.length} industries</p>
        <p className="font-display mt-4 text-[1.75rem] leading-[1.05] tracking-[-0.035em]">
          Built around how{" "}
          <span className="text-(--mut)">your sector buys.</span>
        </p>
        <div className="mt-6">
          <Link
            href="/industries"
            onClick={go}
            className="group inline-flex items-center gap-1.5 text-sm font-medium underline decoration-(--fg)/30 underline-offset-[6px] hover:decoration-(--fg)"
          >
            All industries{" "}
            <ArrowUpRight
              aria-hidden="true"
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-x-8 lg:col-span-9">
        {INDUSTRIES.map((ind, i) => (
          <li key={ind.href}>
            <Link
              href={ind.href}
              onClick={go}
              className="group flex items-baseline gap-3 border-b border-(--line) py-3.5 transition-colors hover:border-(--fg)"
            >
              <span className="kicker w-5 text-(--mut)">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[1.375rem] leading-none tracking-[-0.03em] transition-transform duration-300 ease-out-soft group-hover:translate-x-1">
                {ind.label}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                size={16}
                className="ml-auto self-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaCompany({ go }) {
  const links = COMPANY_LINKS.concat(INSIGHT_LINKS.slice(1));
  return (
    <div className="grid gap-10 px-6 py-7 md:px-9 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="kicker text-(--mut)">Say hello</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="font-display mt-4 block text-[1.5rem] leading-tight tracking-[-0.03em] underline decoration-(--fg)/30 underline-offset-[6px] hover:decoration-(--fg)"
        >
          {CONTACT.email}
        </a>
        <p className="mt-4 flex flex-col gap-1 text-[0.9375rem] text-(--mut)">
          <a href={CONTACT.phoneIndia.href} className="hover:text-(--fg)">
            {CONTACT.phoneIndia.display}
          </a>
          <a href={CONTACT.phoneUk.href} className="hover:text-(--fg)">
            {CONTACT.phoneUk.display}
          </a>
        </p>
        <ClockLine className="mt-5 text-(--mut)" />
      </div>
      <ul className="grid grid-cols-2 gap-x-8 lg:col-span-8">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              onClick={go}
              className="group flex items-baseline justify-between gap-4 border-b border-(--line) py-4 transition-colors hover:border-(--fg)"
            >
              <span>
                <span className="font-display block text-[1.5rem] leading-none tracking-[-0.03em] transition-transform duration-300 ease-out-soft group-hover:translate-x-1">
                  {l.label}
                </span>
                <span className="mt-2 block text-sm text-(--mut)">
                  {l.line}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                size={16}
                className="shrink-0 self-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// inside the phone sheet
function SheetPanel({ which, go }) {
  const [line, setLine] = useState("");
  const row =
    "flex items-center justify-between gap-3 py-2.5 text-[0.9375rem] text-(--mut) hover:text-(--fg)";
  if (which === "services") {
    return (
      <ul>
        {SERVICE_LINES.map((s) => {
          const on = line === s.href;
          return (
            <li
              key={s.href}
              className="border-t border-(--line) first:border-t-0"
            >
              <div className="flex items-center">
                <Link
                  href={s.href}
                  onClick={go}
                  className="font-display flex flex-1 items-baseline gap-3 py-3 text-xl leading-tight"
                >
                  <span className="kicker text-(--mut)">{s.no}</span>
                  {s.name}
                </Link>
                <button
                  type="button"
                  aria-label={`${on ? "Hide" : "Show"} ${s.name} services`}
                  aria-expanded={on}
                  onClick={() => setLine(on ? "" : s.href)}
                  className="flex h-11 w-11 items-center justify-center text-(--mut)"
                >
                  <ChevronDown
                    aria-hidden="true"
                    size={18}
                    className={`transition-transform duration-300 ${on ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {on && (
                <ul className="mb-2 border-l border-(--line) pl-4 motion-safe:animate-[fade-in_0.25s_ease-out]">
                  {s.subs.map((x) => (
                    <li key={x.href}>
                      <Link href={x.href} onClick={go} className={row}>
                        {x.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
  if (which === "industries") {
    return (
      <ul className="grid grid-cols-2 gap-x-4">
        {INDUSTRIES.map((ind, i) => (
          <li key={ind.href}>
            <Link
              href={ind.href}
              onClick={go}
              className="flex items-baseline gap-2.5 border-b border-(--line) py-3"
            >
              <span className="kicker text-(--mut)">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base">{ind.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul>
      {COMPANY_LINKS.concat(INSIGHT_LINKS.slice(1)).map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            onClick={go}
            className="flex items-baseline justify-between gap-4 border-b border-(--line) py-3.5"
          >
            <span className="font-display text-xl">{l.label}</span>
            <span className="text-sm text-(--mut)">{l.line}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
