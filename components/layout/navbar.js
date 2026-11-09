"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Button from "@/components/brand/button";
import { ClockLine } from "@/components/brand/clock";
import { SERVICE_LINES, SUB_SERVICE_COUNT, INDUSTRIES, COMPANY_LINKS, INSIGHT_LINKS, CONTACT } from "@/lib/siteNav";

// The header (DESIGN_DIRECTION.md §5): logo · live time · Menu · Start a
// project — nothing else. "Menu" opens a full-screen overlay on every screen
// size: huge links on the left; on the right the links of the one you hover
// (on phones each opens under itself, as an accordion). The header hides
// while reading down the page and returns on scroll up; Esc closes the menu,
// focus is held inside it and goes back to the button.
const PRIMARY = [
  { key: "services", label: "Services", href: "/services" },
  { key: "industries", label: "Industries", href: "/industries" },
  { key: "company", label: "Company", href: "/about" },
  { key: "insights", label: "Insights", href: "/blog" },
  { key: "contact", label: "Contact", href: "/contact" },
];
const HAS_PANEL = new Set(["services", "industries", "company"]);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("services");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const btn = useRef(null);
  const overlay = useRef(null);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > lastY + 4 && y > window.innerHeight * 0.6) setHidden(true);
      else if (y < lastY - 4 || y < 80) setHidden(false);
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

  // menu open: lock scroll, Esc closes, Tab stays inside, focus returns
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const root = overlay.current;
    const focusables = () => [...root.querySelectorAll("a[href], button:not([disabled])")].filter((e) => e.offsetParent !== null);
    focusables()[0]?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const f = focusables();
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
    const trigger = btn.current;
    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  const solid = scrolled && !open;
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <header
        onFocusCapture={() => setHidden(false)}
        className={`fixed inset-x-0 top-0 z-[70] transition-[transform,background-color,border-color,color] duration-500 ease-out-soft ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } text-(--fg) ${open ? "v-ink border-b border-transparent bg-transparent" : solid ? "v-paper border-b border-(--line) bg-paper/95 backdrop-blur-xl" : "v-paper border-b border-transparent bg-transparent"}`}
      >
        <div className="wrap flex h-16 items-center gap-6 md:h-20">
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0" aria-label="BizzBuzz Creations — home">
            <Image src={open ? "/bbc logo white.png" : "/bbc-logo-ink.png"} alt="BizzBuzz Creations" width={447} height={143} priority className="h-8 w-auto md:h-9" />
          </Link>
          <div className="ml-auto flex items-center gap-3 md:gap-6">
            <ClockLine className="hidden text-(--mut) xl:inline-flex" />
            {!open && (
              <div className="hidden sm:block">
                <Button href="/contact" variant="solid" size="md">
                  Start a project
                </Button>
              </div>
            )}
            <button
              ref={btn}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group flex h-12 items-center gap-3 rounded-full border border-(--fg)/30 pl-5 pr-4 text-[0.9375rem] font-medium transition-colors duration-300 hover:border-(--fg)"
            >
              <span className="roll">
                <span>{open ? "Close" : "Menu"}</span>
                <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
              </span>
              <span aria-hidden="true" className="relative block h-3 w-5">
                <span className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        ref={overlay}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="on-ink fixed inset-0 z-[60] overflow-y-auto motion-safe:animate-[curtain_0.6s_var(--ease-out-soft)]"
      >
        <div className="wrap flex min-h-full flex-col pb-10 pt-7 md:pt-10">
          <div className="grid flex-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <ul className="lg:col-span-5">
              {PRIMARY.map((p, i) => {
                const panel = HAS_PANEL.has(p.key);
                const on = active === p.key;
                return (
                  <li key={p.key} className="border-b border-(--line)">
                    <div className="flex items-center">
                      <Link
                        href={p.href}
                        onMouseEnter={() => panel && setActive(p.key)}
                        onFocus={() => panel && setActive(p.key)}
                        onClick={() => setOpen(false)}
                        className={`font-display flex flex-1 items-baseline gap-4 py-4 text-[clamp(2.4rem,5.4vw,5rem)] leading-none transition-opacity duration-300 md:py-5 ${on || !panel ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
                      >
                        <span className="kicker w-6 text-(--mut)">{String(i + 1).padStart(2, "0")}</span>
                        {p.label}
                      </Link>
                      {panel && (
                        <button type="button" aria-label={`${on ? "Hide" : "Show"} ${p.label} links`} aria-expanded={on} onClick={() => setActive(on ? "" : p.key)} className="flex h-12 w-12 items-center justify-center lg:hidden">
                          <ChevronDown aria-hidden="true" size={22} className={`transition-transform duration-300 ${on ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {panel && on && (
                      <div className="pb-6 lg:hidden">
                        <MenuPanel which={p.key} onNavigate={() => setOpen(false)} compact />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="hidden lg:col-span-7 lg:block">
              <div key={active} className="motion-safe:animate-[fade-in_0.4s_ease-out]">
                <MenuPanel which={active || "services"} onNavigate={() => setOpen(false)} />
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-(--line) pt-6 text-sm text-(--mut)">
            <p>
              <a href={`mailto:${CONTACT.email}`} className="text-(--fg) underline decoration-(--fg)/30 underline-offset-4 hover:decoration-(--fg)">
                {CONTACT.email}
              </a>
              <span className="mx-3">·</span>
              <a href={CONTACT.phoneIndia.href} className="hover:text-(--fg)">{CONTACT.phoneIndia.display}</a>
              <span className="mx-3">·</span>
              <a href={CONTACT.phoneUk.href} className="hover:text-(--fg)">{CONTACT.phoneUk.display}</a>
            </p>
            <ClockLine />
          </div>
        </div>
      </div>
    </>
  );
}

function MenuPanel({ which, onNavigate, compact = false }) {
  const link = "group flex items-center justify-between gap-3 py-2 text-(--mut) transition-colors hover:text-(--fg)";
  if (which === "services") {
    return (
      <div>
        <p className="kicker mb-5 hidden text-(--mut) lg:block">
          {SERVICE_LINES.length} lines · {SUB_SERVICE_COUNT} services
        </p>
        <ul className={compact ? "grid gap-6" : "grid gap-x-8 gap-y-9 xl:grid-cols-2"}>
          {SERVICE_LINES.map((s) => (
            <li key={s.href}>
              <Link href={s.href} onClick={onNavigate} className="font-display flex items-baseline gap-3 border-b border-(--line) pb-2 text-xl hover:opacity-70">
                <span className="kicker text-(--mut)">{s.no}</span>
                {s.name}
              </Link>
              <ul className="mt-2">
                {s.subs.map((sub) => (
                  <li key={sub.href}>
                    <Link href={sub.href} onClick={onNavigate} className={`${link} text-[0.9375rem]`}>
                      {sub.label}
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
  if (which === "industries") {
    return (
      <ul className={compact ? "grid grid-cols-2 gap-x-4" : "grid grid-cols-3 gap-x-8"}>
        {INDUSTRIES.map((ind, i) => (
          <li key={ind.href}>
            <Link href={ind.href} onClick={onNavigate} className="group flex items-baseline gap-3 border-b border-(--line) py-3 transition-opacity hover:opacity-70">
              <span className="kicker text-(--mut)">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg">{ind.label}</span>
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
          <Link href={l.href} onClick={onNavigate} className="group flex items-baseline justify-between gap-6 border-b border-(--line) py-4">
            <span className="font-display text-2xl">{l.label}</span>
            <span className="flex items-center gap-1 text-sm text-(--mut) group-hover:text-(--fg)">
              {l.line} <ArrowUpRight aria-hidden="true" size={14} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
