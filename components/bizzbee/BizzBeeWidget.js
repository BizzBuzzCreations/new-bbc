"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import BizzBeeLauncher from "./BizzBeeLauncher";

// The chat window (and everything it pulls in) is only downloaded the
// first time the visitor opens BizzBee, keeping it out of the initial bundle.
const BizzBeeChatWindow = dynamic(() => import("./BizzBeeChatWindow"), { ssr: false });

const TIP_KEY = "bizzbee-tip-seen";

// Mounted once from the root layout. Like the WhatsApp button, it appears
// after the page is idle and never renders on the admin dashboard.
export default function BizzBeeWidget() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  // The window stays mounted once opened, so minimizing mid-reply doesn't cancel it.
  const [loaded, setLoaded] = useState(false);
  const [tip, setTip] = useState(false);
  const launcherRef = useRef(null);

  useEffect(() => {
    const show = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(show, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(show, 2000);
    return () => window.clearTimeout(t);
  }, []);

  // One-time "first visit" tooltip (per browser tab session).
  useEffect(() => {
    if (!ready) return;
    let seen = true;
    try {
      seen = sessionStorage.getItem(TIP_KEY) === "1";
    } catch {}
    if (seen) return;
    const show = window.setTimeout(() => setTip(true), 5000);
    const hide = window.setTimeout(() => setTip(false), 16000);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, [ready]);

  const dismissTip = useCallback(() => {
    setTip(false);
    try {
      sessionStorage.setItem(TIP_KEY, "1");
    } catch {}
  }, []);

  const openChat = () => {
    dismissTip();
    setLoaded(true);
    setOpen(true);
  };

  // The logo stays on screen while the chat is open (like the WhatsApp
  // button); clicking it again minimizes the chat.
  const toggleChat = () => (open ? closeChat() : openChat());

  const closeChat = useCallback(() => {
    setOpen(false);
    // Return focus to the launcher for keyboard users.
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  }, []);

  if (!ready || pathname?.startsWith("/admin")) return null;

  return (
    <>
      {loaded && <BizzBeeChatWindow onClose={closeChat} visible={open} />}
      <BizzBeeLauncher
        ref={launcherRef}
        onOpen={toggleChat}
        expanded={open}
        showTip={tip && !open}
        onDismissTip={dismissTip}
      />
    </>
  );
}
