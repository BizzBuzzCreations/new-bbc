// Browser-only flags for the consultation popup (components/sections/popupForm.js):
//   - "enquired": set by every enquiry form on a successful submit (popup,
//     contact page, contact forms, blog form, closing CTA, BizzBee lead form),
//     so the popup never asks someone who has already got in touch.
//   - "dismissed": when the visitor last closed the popup, for its cooldown.
//   - "shown" (per tab session): the popup opens at most once per session.
// Every storage call is wrapped: private windows and blocked storage throw,
// and the site must work the same without them (the popup then simply
// follows its scroll/exit trigger, still at most once per page view).

const ENQUIRED_KEY = "bbc-enquired";
const DISMISSED_KEY = "bbc-popup-dismissed-at";
const SHOWN_KEY = "bbc-popup-shown";
const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;

export function markEnquired() {
  try {
    localStorage.setItem(ENQUIRED_KEY, String(Date.now()));
  } catch {}
}

export function markPopupDismissed() {
  try {
    localStorage.setItem(DISMISSED_KEY, String(Date.now()));
  } catch {}
}

export function markPopupShown() {
  try {
    sessionStorage.setItem(SHOWN_KEY, "1");
  } catch {}
}

// True when the popup may open: no enquiry yet, not shown this session,
// and not dismissed within the last 7 days.
export function popupAllowed() {
  try {
    if (localStorage.getItem(ENQUIRED_KEY)) return false;
    if (sessionStorage.getItem(SHOWN_KEY)) return false;
    const dismissedAt = Number(localStorage.getItem(DISMISSED_KEY) || 0);
    return Date.now() - dismissedAt > COOLDOWN_MS;
  } catch {
    return true;
  }
}
