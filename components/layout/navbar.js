"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Mail, MessageCircle, Phone, X } from "lucide-react";
import Button from "@/components/brand/button";
import { ClockLine } from "@/components/brand/clock";
import { SERVICE_LINES, SUB_SERVICE_COUNT, INDUSTRIES, COMPANY_LINKS, INSIGHT_LINKS, CONTACT } from "@/lib/siteNav";

// The site header (rebuild, DESIGN_DIRECTION.md §6).
//  - Fixed; transparent over the page's hero, ink + blur once scrolled.
//    Hides while scrolling down past the first screen, back on scroll up
//    (and whenever something in it has focus).
//  - Desktop (lg+): Services / Industries / Company mega panels — open on
//    hover (short intent delay) or click, Esc / outside click / route change
//    close them; arrow keys move between the 8 service lines.
//  - Phone: a full-screen sheet with big numbered links, Services and
//    Industries as accordions, and call / WhatsApp / email at the bottom.
//    Body scroll is locked while it is open; Esc closes; focus returns to
//    the menu button.
const PANELS = ["services", "industries", "company"];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(null); // which desktop panel
  const [sheet, setSheet] = useState(false); // phone menu
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [line, setLine] = useState(0); // the service line shown in the Services panel
  const headerRef = useRef(null);
  const timer = useRef(null);
  const menuBtn = useRef(null);

  // close everything on navigation (adjusting state while rendering, the
  // React-recommended way to reset on a prop change)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setSheet(false);
  }

  // scrolled look + hide on scroll down
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      const down = y > lastY + 4;
      const up = y < lastY - 4;
      if (down && y > window.innerHeight * 0.8) setHidden(true);
      else if (up || y < 80) setHidden(false);
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

  // Esc and outside clicks close the desktop panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    const onDown = (e) => headerRef.current && !headerRef.current.contains(e.target) && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  // phone sheet: lock scroll, Esc closes, focus back to the button
  useEffect(() => {
    if (!sheet) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setSheet(false);
    document.addEventListener("keydown", onKey);
    const btn = menuBtn.current;
    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      btn?.focus();
    };
  }, [sheet]);

  const hoverOpen = useCallback((key) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(key), 90);
  }, []);
  const hoverClose = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 180);
  }, []);
  useEffect(() => () => clearTimeout(timer.current), []);

  const solid = scrolled || open || sheet;
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname === href || pathname?.startsWith(`${href}/`));

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-buzz focus:px-4 focus:py-2 focus:text-buzz-ink">
        Skip to content
      </a>
      <header
        ref={headerRef}
        onFocusCapture={() => setHidden(false)}
        onMouseLeave={hoverClose}
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-out-soft ${
          hidden && !open && !sheet ? "-translate-y-full" : "translate-y-0"
        } ${solid ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}
      >
        <div className="wrap flex h-16 items-center gap-6 md:h-[76px]">
          <Link href="/" className="relative z-10 shrink-0" aria-label="BizzBuzz Creations — home">
            <Image src="/bbc logo white.png" alt="BizzBuzz Creations" width={447} height={143} priority className="h-8 w-auto md:h-9" />
          </Link>

          {/* desktop navigation */}
          <nav aria-label="Main" className="hidden flex-1 items-center gap-1 lg:flex">
            {PANELS.map((key) => (
              <button
                key={key}
                type="button"
                aria-expanded={open === key}
                aria-controls={`panel-${key}`}
                onClick={() => setOpen(open === key ? null : key)}
                onMouseEnter={() => hoverOpen(key)}
                className={`group inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-[0.9375rem] capitalize transition-colors ${
                  open === key ? "bg-white/10 text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {key}
                <ChevronDown aria-hidden="true" size={15} className={`transition-transform duration-300 ${open === key ? "rotate-180" : ""}`} />
              </button>
            ))}
            <Link
              href="/blog"
              onMouseEnter={hoverClose}
              aria-current={isActive("/blog") ? "page" : undefined}
              className="inline-flex h-10 items-center rounded-full px-4 text-[0.9375rem] text-white/80 transition-colors hover:text-white aria-[current=page]:text-buzz"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              onMouseEnter={hoverClose}
              aria-current={isActive("/contact") ? "page" : undefined}
              className="inline-flex h-10 items-center rounded-full px-4 text-[0.9375rem] text-white/80 transition-colors hover:text-white aria-[current=page]:text-buzz"
            >
              Contact
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <ClockLine className="hidden text-fog 2xl:inline-flex" />
            <div className="hidden lg:block">
              <Button href="/contact" variant="solid">
                Start a project
              </Button>
            </div>
            <button
              ref={menuBtn}
              type="button"
              onClick={() => setSheet(true)}
              aria-expanded={sheet}
              aria-controls="phone-menu"
              className="flex h-11 items-center gap-2.5 rounded-full border border-white/20 pl-4 pr-3 text-sm text-white lg:hidden"
            >
              Menu
              <span aria-hidden="true" className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>

        {/* desktop panels */}
        <div className="hidden lg:block" onMouseEnter={() => clearTimeout(timer.current)}>
          <ServicesPanel open={open === "services"} line={line} setLine={setLine} />
          <IndustriesPanel open={open === "industries"} />
          <CompanyPanel open={open === "company"} />
        </div>
      </header>

      <PhoneSheet open={sheet} onClose={() => setSheet(false)} />
    </>
  );
}

function Panel({ id, open, children, label }) {
  return (
    <div
      id={`panel-${id}`}
      role="region"
      aria-label={label}
      hidden={!open}
      className="border-t border-white/10 bg-ink-2/95 backdrop-blur-xl motion-safe:animate-[panel-in_0.35s_var(--ease-out-soft)]"
    >
      <div className="wrap py-10">{children}</div>
    </div>
  );
}

function ServicesPanel({ open, line, setLine }) {
  const current = SERVICE_LINES[line];
  const onKey = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = (line + (e.key === "ArrowDown" ? 1 : -1) + SERVICE_LINES.length) % SERVICE_LINES.length;
      setLine(next);
      e.currentTarget.querySelectorAll("[data-line]")[next]?.focus();
    }
  };
  return (
    <Panel id="services" open={open} label="Services">
      <div className="grid grid-cols-12 gap-10">
        <ul className="col-span-4 border-l border-white/10" onKeyDown={onKey}>
          {SERVICE_LINES.map((s, i) => (
            <li key={s.href}>
              <Link
                href={s.href}
                data-line
                onMouseEnter={() => setLine(i)}
                onFocus={() => setLine(i)}
                aria-current={i === line ? "true" : undefined}
                className={`-ml-px flex items-baseline gap-4 border-l py-2.5 pl-5 text-lg transition-colors duration-200 ${
                  i === line ? "border-buzz text-white" : "border-transparent text-white/55 hover:text-white"
                }`}
              >
                <span className="kicker text-[0.7rem] text-buzz">{s.no}</span>
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="col-span-8 col-start-5" key={current.href}>
          <div className="flex items-end justify-between gap-8 border-b border-white/10 pb-6 motion-safe:animate-[panel-in_0.35s_var(--ease-out-soft)]">
            <div>
              <p className="kicker text-fog">
                <span className="text-buzz">[{current.no}]</span> {current.subs.length} services
              </p>
              <p className="font-display mt-3 text-4xl">{current.name}</p>
              <p className="mt-3 max-w-xl text-fog">{current.line}</p>
            </div>
            <Link href={current.href} className="group inline-flex shrink-0 items-center gap-1.5 text-sm text-white underline decoration-white/30 underline-offset-[6px] hover:decoration-buzz">
              Overview <ArrowUpRight aria-hidden="true" size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-x-10">
            {current.subs.map((sub) => (
              <li key={sub.href}>
                <Link href={sub.href} className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 text-white/85 transition-colors hover:text-white">
                  {sub.label}
                  <ArrowUpRight aria-hidden="true" size={16} className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-buzz" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-fog">
            {SERVICE_LINES.length} lines · {SUB_SERVICE_COUNT} services —{" "}
            <Link href="/services" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-buzz">
              see them all
            </Link>
          </p>
        </div>
      </div>
    </Panel>
  );
}

function IndustriesPanel({ open }) {
  return (
    <Panel id="industries" open={open} label="Industries">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4">
          <p className="kicker text-fog">
            <span className="text-buzz">[{String(INDUSTRIES.length).padStart(2, "0")}]</span> Industries
          </p>
          <p className="font-display mt-3 text-4xl leading-tight">
            Marketing that speaks your <span className="font-accent">customers&rsquo;</span> language.
          </p>
          <Link href="/industries" className="group mt-6 inline-flex items-center gap-1.5 text-sm text-white underline decoration-white/30 underline-offset-[6px] hover:decoration-buzz">
            All industries <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </div>
        <ul className="col-span-8 col-start-5 grid grid-cols-3 gap-x-10">
          {INDUSTRIES.map((ind, i) => (
            <li key={ind.href}>
              <Link href={ind.href} className="group flex items-baseline gap-3 border-b border-white/10 py-3.5 text-white/85 transition-colors hover:text-white">
                <span className="kicker text-[0.7rem] text-white/55 transition-colors group-hover:text-buzz">{String(i + 1).padStart(2, "0")}</span>
                {ind.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}

function CompanyPanel({ open }) {
  const col = (title, items) => (
    <div>
      <p className="kicker mb-3 text-fog">{title}</p>
      <ul>
        {items.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group flex items-baseline justify-between gap-6 border-b border-white/10 py-4">
              <span className="text-lg text-white">{l.label}</span>
              <span className="text-sm text-fog transition-colors group-hover:text-white">{l.line}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <Panel id="company" open={open} label="Company">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-6">{col("Company", COMPANY_LINKS)}</div>
        <div className="col-span-5 col-start-8">
          {col("Insights", INSIGHT_LINKS)}
          <div className="mt-10 rounded-2xl border border-white/10 p-6">
            <p className="kicker text-fog">Talk to us</p>
            <p className="mt-3 text-white">
              <a href={`mailto:${CONTACT.email}`} className="underline decoration-white/30 underline-offset-4 hover:decoration-buzz">
                {CONTACT.email}
              </a>
            </p>
            <p className="mt-1 text-fog">
              <a href={CONTACT.phoneIndia.href} className="hover:text-white">
                {CONTACT.phoneIndia.display}
              </a>{" "}
              ·{" "}
              <a href={CONTACT.phoneUk.href} className="hover:text-white">
                {CONTACT.phoneUk.display}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function PhoneSheet({ open, onClose }) {
  const [section, setSection] = useState(null);
  const closeBtn = useRef(null);
  useEffect(() => {
    if (open) closeBtn.current?.focus();
  }, [open]);

  const big = "font-display flex w-full items-baseline gap-4 py-4 text-left text-[2rem] leading-none";
  const acc = (key, no, title, body) => (
    <li className="border-b border-white/10">
      <button type="button" aria-expanded={section === key} onClick={() => setSection(section === key ? null : key)} className={`${big} justify-between`}>
        <span className="flex items-baseline gap-4">
          <span className="kicker text-buzz">{no}</span>
          {title}
        </span>
        <ChevronDown aria-hidden="true" size={22} className={`shrink-0 self-center transition-transform duration-300 ${section === key ? "rotate-180" : ""}`} />
      </button>
      {section === key && <div className="pb-5">{body}</div>}
    </li>
  );
  const link = (no, title, href) => (
    <li className="border-b border-white/10">
      <Link href={href} onClick={onClose} className={big}>
        <span className="kicker text-buzz">{no}</span>
        {title}
      </Link>
    </li>
  );

  return (
    <div
      id="phone-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      className="fixed inset-0 z-[60] overflow-y-auto bg-ink text-white motion-safe:animate-[sheet-in_0.4s_var(--ease-out-soft)] lg:hidden"
    >
      <div className="wrap flex min-h-full flex-col">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={onClose} aria-label="BizzBuzz Creations — home">
            <Image src="/bbc logo white.png" alt="BizzBuzz Creations" width={447} height={143} className="h-8 w-auto" />
          </Link>
          <button ref={closeBtn} type="button" onClick={onClose} className="flex h-11 items-center gap-2 rounded-full border border-white/20 pl-4 pr-3 text-sm">
            Close <X aria-hidden="true" size={18} />
          </button>
        </div>
        <ul className="mt-6">
          {acc(
            "services",
            "01",
            "Services",
            <ul className="grid gap-1">
              {SERVICE_LINES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} onClick={onClose} className="flex items-baseline gap-3 py-2 text-lg text-white/85">
                    <span className="kicker text-[0.7rem] text-white/40">{s.no}</span>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" onClick={onClose} className="mt-2 inline-flex items-center gap-1.5 py-2 text-buzz">
                  All {SUB_SERVICE_COUNT} services <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </li>
            </ul>,
          )}
          {acc(
            "industries",
            "02",
            "Industries",
            <ul className="grid grid-cols-2 gap-x-4">
              {INDUSTRIES.map((ind) => (
                <li key={ind.href}>
                  <Link href={ind.href} onClick={onClose} className="block py-2 text-white/85">
                    {ind.label}
                  </Link>
                </li>
              ))}
              <li className="col-span-2">
                <Link href="/industries" onClick={onClose} className="mt-2 inline-flex items-center gap-1.5 py-2 text-buzz">
                  All industries <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </li>
            </ul>,
          )}
          {acc(
            "company",
            "03",
            "Company",
            <ul>
              {COMPANY_LINKS.concat(INSIGHT_LINKS.slice(1)).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={onClose} className="block py-2 text-lg text-white/85">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>,
          )}
          {link("04", "Insights", "/blog")}
          {link("05", "Contact", "/contact")}
        </ul>
        <div className="mt-auto pb-8 pt-10">
          <Button href="/contact" variant="solid" className="w-full" onClick={onClose}>
            Start a project
          </Button>
          <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
            <a href={CONTACT.phoneIndia.href} className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15">
              <Phone aria-hidden="true" size={16} /> Call
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15">
              <MessageCircle aria-hidden="true" size={16} /> WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15">
              <Mail aria-hidden="true" size={16} /> Email
            </a>
          </div>
          <ClockLine className="mt-6 text-fog" />
        </div>
      </div>
    </div>
  );
}
