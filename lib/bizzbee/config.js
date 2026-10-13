// Shared BizzBee settings. Safe to import from client or server code — no
// secrets live here (the API key is only ever read in the chat route).

export const BIZZBEE = {
  // Override with BIZZBEE_MODEL on the server. claude-haiku-5-5 is a much
  // cheaper option for a public website bot.
  defaultModel: "claude-opus-5-5",
  maxOutputTokens: 2000, // includes the model's reasoning tokens
  requestTimeoutMs: 45_000,

  // Request limits
  maxBodyBytes: 16 * 1024,
  maxMessageChars: 1000,
  maxHistoryMessages: 10,

  // Per-IP rate limits (in-memory; see rateLimit.js)
  chatPerMinute: 8,
  chatPerHour: 60,
  leadPerHour: 4,
};

// Verified contact details — copied from the site footer / contact page.
export const CONTACT = {
  phoneIndia: "+91 8115585285",
  phoneIndiaTel: "+918115585285",
  phoneUk: "+44 07862 608652",
  phoneUkTel: "+4407862608652",
  email: "info@bizzbuzzcreations.com",
  hours: "Mon - Sat: 12:00 PM - 8:00 PM",
  whatsappUrl: "https://wa.me/918115585285",
  site: "https://bizzbuzzcreations.com",
};

export const SERVICES_FOR_LEAD_FORM = [
  "Search Engine Optimization (SEO)",
  "Social Media Marketing",
  "Google Ads & Paid Marketing",
  "Website Design & Development",
  "BPO & Customer Support",
  "AI Solutions & Chatbots",
  "Marketing Automation",
  "Business Consultancy",
  "Not sure yet",
];

// Token the model can emit to ask the UI to show the enquiry form. The UI
// strips it from the visible text; it triggers nothing but a form.
export const LEAD_FORM_TOKEN = "[[LEAD_FORM]]";

// Quick-question buttons. Only shown when no AI key is configured (the
// stored-answer mode, where ready-made questions work best). Edit freely.
export const SUGGESTED_QUESTIONS = [
  "Which service is right for my business?",
  "I want to improve my website's Google ranking.",
  "I need more leads for my business.",
  "I want to run Google Ads.",
  "I need a new business website.",
  "Tell me about your AI and automation solutions.",
  "How can I get a consultation?",
];
