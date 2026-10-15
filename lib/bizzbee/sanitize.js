import { BIZZBEE } from "./config";

// Strips control characters and collapses runaway whitespace.
export function cleanText(value, max) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[ \t]{3,}/g, "  ")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim()
    .slice(0, max);
}

// Contact details typed into the chat are masked before the text is sent
// to the AI provider — the model never needs them (the enquiry form posts
// to our own backend instead).
export function redactPersonalData(text) {
  return text
    .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g, "[email removed]")
    .replace(/(?<![\w/])\+?\d[\d\s().-]{8,}\d(?![\w/])/g, "[number removed]");
}

// Validates the chat payload: returns { messages, page } or { error }.
// Messages are { role: "user" | "assistant", content }, normalised so the
// first turn is a user turn and consecutive same-role turns are merged.
export function validateChatPayload(body) {
  if (!body || typeof body !== "object" || !Array.isArray(body.messages)) {
    return { error: "Invalid request." };
  }
  if (body.messages.length === 0) return { error: "Send a message first." };

  const recent = body.messages.slice(-BIZZBEE.maxHistoryMessages);
  const messages = [];
  for (const m of recent) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") {
      return { error: "Invalid message." };
    }
    const content = cleanText(m.content, m.role === "user" ? BIZZBEE.maxMessageChars : 4000);
    if (!content) continue;
    const text = m.role === "user" ? redactPersonalData(content) : content;
    const last = messages[messages.length - 1];
    if (last && last.role === m.role) last.content += `\n${text}`;
    else messages.push({ role: m.role, content: text });
  }
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return { error: "Send a message first." };
  }
  const lastUser = body.messages[body.messages.length - 1];
  if (typeof lastUser?.content === "string" && lastUser.content.length > BIZZBEE.maxMessageChars) {
    return { error: `Please keep messages under ${BIZZBEE.maxMessageChars} characters.` };
  }

  // Only a plain site path is accepted as page context.
  let page = "";
  if (typeof body.page === "string" && body.page.startsWith("/")) {
    // Unusual characters mean the visitor is on an address that doesn't exist (a 404).
    page = /^\/[a-z0-9\-/]{0,150}$/i.test(body.page) ? body.page : "/invalid-page";
  }

  return { messages, page };
}
