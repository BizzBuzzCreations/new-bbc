"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Cloudflare Turnstile for the enquiry forms. The "I'm human" box is always
// visible in the form, and it finishes by itself in most cases (a tick appears
// without the visitor doing anything).
//
// To keep pages fast the Cloudflare script is only fetched when the form is
// about to come into view (or is focused / submitted, whichever is first).
//
//   const turnstile = useRef(null);
//   <Turnstile ref={turnstile} action="contact" />
//   const token = await turnstile.current?.getToken();   // before sending
//
// Without NEXT_PUBLIC_TURNSTILE_SITE_KEY it renders nothing and getToken()
// returns "" straight away (the server then skips the check too). The
// matching secret is TURNSTILE_SECRET_KEY (lib/turnstile.js).
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
const SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let scriptPromise = null;
function loadScript() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = SCRIPT;
      s.async = true;
      s.defer = true;
      s.onload = () => resolve(window.turnstile);
      s.onerror = () => {
        scriptPromise = null;
        reject(new Error("Turnstile script failed to load"));
      };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

const Turnstile = forwardRef(function Turnstile({ action }, ref) {
  const box = useRef(null);
  const widget = useRef(null);
  const token = useRef("");
  const waiting = useRef(null);

  const ensureWidget = async () => {
    const ts = await loadScript();
    if (widget.current == null && box.current) {
      widget.current = ts.render(box.current, {
        sitekey: SITE_KEY,
        action,
        theme: "auto",
        appearance: "always",
        callback: (t) => {
          token.current = t;
          waiting.current?.(t);
        },
        "expired-callback": () => {
          token.current = "";
        },
        "error-callback": (code) => {
          // Cloudflare's reason (e.g. 110200 = this domain isn't in the widget's
          // Hostnames list), so a misconfiguration is visible in the console.
          console.warn(`[turnstile] check failed, error code ${code} on ${window.location.hostname}`);
          token.current = "";
          waiting.current?.("");
        },
        "timeout-callback": () => {
          token.current = "";
        },
      });
    }
    return ts;
  };

  useImperativeHandle(ref, () => ({
    getToken: async () => {
      if (!SITE_KEY) return "";
      try {
        const ts = await ensureWidget();
        // A token works once: take it, then ask for a fresh one for any retry.
        const consume = (t) => {
          token.current = "";
          setTimeout(() => { try { ts.reset(widget.current); } catch {} }, 0);
          return t;
        };
        if (token.current) return consume(token.current);
        // Not finished yet (slow connection, or the visitor still has to tick the box).
        return await new Promise((resolve) => {
          const timer = setTimeout(() => { waiting.current = null; resolve(""); }, 30000);
          waiting.current = (t) => {
            clearTimeout(timer);
            waiting.current = null;
            resolve(t ? consume(t) : "");
          };
        });
      } catch {
        return "";
      }
    },
  }));

  // Load and show the box when the form is about to scroll into view (or is
  // focused, if the browser has no IntersectionObserver).
  useEffect(() => {
    if (!SITE_KEY) return undefined;
    const el = box.current;
    if (!el) return undefined;
    const start = () => ensureWidget().catch(() => {});
    let observer = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          start();
        }
      }, { rootMargin: "300px" });
      observer.observe(el);
    } else {
      el.parentElement?.addEventListener("focusin", start, { once: true });
    }
    return () => {
      observer?.disconnect();
      el.parentElement?.removeEventListener("focusin", start);
      if (widget.current != null && window.turnstile) {
        try { window.turnstile.remove(widget.current); } catch {}
        widget.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!SITE_KEY) return null;
  // min-h keeps the form from jumping when the box appears (the widget is 65px tall).
  return <div ref={box} className="flex min-h-[65px] justify-center" />;
});

export default Turnstile;
