import { mentionsService, servicesOverviewReply } from "./serviceLookup";

// SERVER ONLY. The small-talk layer of BizzBee: greetings, thank-yous / goodbyes,
// "who are you?" and a plain "what services do you offer?" — answered the same
// way in AI mode and stored-answer mode. Anything longer or more specific falls
// through to the other handlers.

const clean = (t) =>
  String(t)
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// --- greeting ----------------------------------------------------------------
const GREETING =
  /\b(hi+|hello+|hey+|hy|hlo+|helo+|namaste|namaskar|hola|yo|sup|gm|assalamualaikum|salaam|good (morning|afternoon|evening|night))\b/;
const GREETING_FILLER =
  /^(hi+|hello+|hey+|hy|hlo+|helo+|namaste|namaskar|hola|yo|sup|gm|assalamualaikum|salaam|good|morning|afternoon|evening|night|there|bizzbee|bizz|bee|bhai|sir|madam|team|everyone|dear|friend|ji|bro|buddy|all|bizzbuzz)$/;

const HELP_LINE =
  "How can I help you today? I can tell you about our services, the industries we serve, our team and how we work.";

function greetingAnswer(q) {
  const words = q.split(" ");
  if (words.length > 6 || !GREETING.test(q) || !words.every((w) => GREETING_FILLER.test(w))) return null;
  const time = q.match(/good (morning|afternoon|evening|night)/);
  const hello = time
    ? `Good ${time[1]}! 😊`
    : /\bnamaste|namaskar\b/.test(q)
      ? "Namaste! 🙏"
      : /\bassalamualaikum|salaam\b/.test(q)
        ? "Wa alaikum assalam! 😊"
        : "Hello! 👋";
  return `${hello} I'm BizzBee, the AI assistant of BizzBuzz Creations.\n\n${HELP_LINE}`;
}

// --- thanks / goodbye ----------------------------------------------------------
const THANKS = /\b(thank|thanks|thanku|thx|tysm|tq|dhanyavad|dhanyawad|dhanyvad|shukriya|shukria|bye|goodbye)\b/;
const THANKS_FILLER =
  /^(thank|thanks|thanku|thx|ty|tysm|tq|dhanyavad|dhanyawad|dhanyvad|shukriya|shukria|you|u|yu|so|much|very|a|lot|many|bizzbee|bizz|bee|for|your|the|help|helping|info|information|answers?|that|was|is|it|helpful|great|awesome|perfect|nice|good|really|appreciate|appreciated|bye|goodbye|ok|okay|alright|then|sir|bhai|ji|again|all|have|day|dear|team|bro|here|well|done|got|cool|see|take|care)$/;

function thanksAnswer(q, raw) {
  const words = q.split(" ");
  if (words.length > 9 || /\?/.test(raw) || !THANKS.test(q) || !words.every((w) => THANKS_FILLER.test(w))) return null;
  return "You're most welcome! 😊 It was a pleasure helping you. Have a wonderful day — whenever you need us again, BizzBee and the BizzBuzz Creations team are just a message away.";
}

// --- who are you ---------------------------------------------------------------
const IDENTITY =
  /\bwho (are|r) (you|u)\b|\bwho is bizz ?bee\b|\bwhat (are|r) (you|u)\b|\bwhat is bizz ?bee\b|\b(your|ur) name\b|\bwhat (should|can) i call you\b|\bintroduce yourself\b|\btell me about (yourself|you)$|\bare you (a |an )?(bot|human|robot|real|ai|person)\b|\b(tum|aap|tu) (kaun|kon)\b|\b(apka|aapka|tumhara) naam\b|\bwho (made|created|built|developed) you\b/;

function identityAnswer(q) {
  if (q.split(" ").length > 10 || !IDENTITY.test(q)) return null;
  return `I'm **BizzBee** 🐝 — an AI assistant, here to help you with this website.\n\nI can walk you through BizzBuzz Creations' services, the industries we serve, our team and how we work, answer your questions, and connect you with the team when you're ready.\n\n${HELP_LINE}`;
}

// --- services --------------------------------------------------------------------
// Any short message that mentions "services" without naming one, asking a price,
// or about industries / people / jobs gets the overview of what we offer.
const SERVICES_SKIP =
  /\b(price|prices|pricing|cost|costs|quote|quotation|fees?|charges?|industr(y|ies)|sub ?services?|job|jobs|career|careers|hiring|team|who|uk|london|digital marketing|how long|why|compare|difference|vs)\b/;

function servicesAnswer(q) {
  const words = q.split(" ");
  if (words.length > 14 || !/\bservices?\b/.test(q) || SERVICES_SKIP.test(q) || mentionsService(q)) return null;
  return servicesOverviewReply();
}

export function conversationAnswer(messages) {
  const raw = [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const q = clean(raw);
  if (!q) return null;
  return greetingAnswer(q) || thanksAnswer(q, raw) || identityAnswer(q) || servicesAnswer(q);
}
