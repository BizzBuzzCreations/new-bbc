// Counts a successful enquiry in Google Analytics as a "generate_lead" event,
// with which form it came from and which page the visitor was on — so
// Analytics can show which pages and posts actually bring enquiries. Nothing
// personal is sent: no name, email, phone or message text, only the form's id
// and the page path.
//
// Analytics itself loads after the visitor's first interaction (see
// components/sections/allScripts.js); an event sent before it is ready would
// be queued ahead of its setup, so this waits for it (a few seconds at most,
// then gives up — a lost event never affects the enquiry).
// In Analytics, mark `generate_lead` as a key event to see it in the reports.
export function trackLead(formId) {
  try {
    if (typeof window === "undefined") return;
    const send = (tries) => {
      if (!window.google_tag_manager && tries < 10) {
        window.setTimeout(() => send(tries + 1), 1500);
        return;
      }
      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function () {
          window.dataLayer.push(arguments);
        };
      window.gtag("event", "generate_lead", {
        form_id: formId || "unknown",
        page_path: window.location.pathname,
      });
    };
    send(0);
  } catch {}
}
