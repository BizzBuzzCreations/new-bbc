"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Cloudflare Turnstile for the enquiry forms. Invisible to visitors in almost
// every case ("interaction-only": a box only appears if Cloudflare is unsure).
//
// Nothing loads until it is needed, so pages stay fast: the Cloudflare script
// is fetched the first time someone focuses a field in the form (or at submit
// at the latest), and the check runs when they press Send.
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
  const waiting = useRef(null);

  const ensureWidget = async () => {
    const ts = await loadScript();
    if (widget.current == null && box.current) {
      widget.current = ts.render(box.current, {
        sitekey: SITE_KEY,
        action,
        appearance: "interaction-only",
        execution: "execute",
        callback: (token) => waiting.current?.(token),
        "error-callback": () => waiting.current?.(""),
        "timeout-callback": () => waiting.current?.(""),
      });
    }
    return ts;
  };

  useImperativeHandle(ref, () => ({
    getToken: async () => {
      if (!SITE_KEY) return "";
      try {
        const ts = await ensureWidget();
        return await new Promise((resolve) => {
          const timer = setTimeout(() => { waiting.current = null; resolve(""); }, 20000);
          waiting.current = (token) => { clearTimeout(timer); waiting.current = null; resolve(token); };
          ts.reset(widget.current); // a token works once, so start fresh each time
          ts.execute(widget.current);
        });
      } catch {
        return "";
      }
    },
  }));

  // Start loading the script the first time someone touches the form.
  useEffect(() => {
    if (!SITE_KEY) return undefined;
    const area = box.current?.parentElement;
    if (!area) return undefined;
    const warm = () => ensureWidget().catch(() => {});
    area.addEventListener("focusin", warm, { once: true });
    return () => {
      area.removeEventListener("focusin", warm);
      if (widget.current != null && window.turnstile) {
        try { window.turnstile.remove(widget.current); } catch {}
        widget.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={box} className="flex justify-center" />;
});

export default Turnstile;
