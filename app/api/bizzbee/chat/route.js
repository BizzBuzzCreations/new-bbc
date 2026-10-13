import Anthropic from "@anthropic-ai/sdk";
import { BIZZBEE } from "@/lib/bizzbee/config";
import { validateChatPayload } from "@/lib/bizzbee/sanitize";
import { checkRateLimit, clientIp, isSameOrigin } from "@/lib/bizzbee/rateLimit";
import { retrieve, pageContext } from "@/lib/bizzbee/knowledge";
import { STABLE_SYSTEM_PROMPT, buildDynamicContext } from "@/lib/bizzbee/systemPrompt";
import { localAnswer } from "@/lib/bizzbee/localAnswer";
import { SUGGESTED_QUESTIONS } from "@/lib/bizzbee/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Marker appended to the streamed text when generation fails part-way, so
// the client can show a retry state instead of a half-finished answer.
const STREAM_ERROR = "\n[[BIZZBEE_ERROR]]";

const json = (body, status, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  });

let client = null;
function getClient() {
  // The key is read here, server-side only, and never sent to the browser.
  if (!process.env.ANTHROPIC_API_KEY) return null;
  client ||= new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, maxRetries: 1 });
  return client;
}

// Streams a ready-made answer in small pieces so it appears like typing.
function textStream(text, headers = {}) {
  const encoder = new TextEncoder();
  return new Response(
    new ReadableStream({
      async start(controller) {
        for (let i = 0; i < text.length; i += 4) {
          controller.enqueue(encoder.encode(text.slice(i, i + 4)));
          await new Promise((r) => setTimeout(r, 12));
        }
        controller.close();
      },
    }),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Accel-Buffering": "no",
        ...headers,
      },
    },
  );
}

// Tells the widget which mode it is in: "ai" (API key configured) or
// "stored" (answers come from the site's own content). In stored mode the
// widget shows the ready-made question buttons.
export async function GET() {
  const ai = Boolean(process.env.ANTHROPIC_API_KEY);
  return json({ mode: ai ? "ai" : "stored", suggestions: ai ? [] : SUGGESTED_QUESTIONS }, 200);
}

export async function POST(request) {
  if (!isSameOrigin(request)) return json({ error: "forbidden" }, 403);

  const ip = clientIp(request);
  const limit = checkRateLimit(`chat:${ip}`, [
    { windowMs: 60_000, max: BIZZBEE.chatPerMinute },
    { windowMs: 3_600_000, max: BIZZBEE.chatPerHour },
  ]);
  if (!limit.ok) {
    return json({ error: "rate_limited", retryAfter: limit.retryAfterSec }, 429, {
      "Retry-After": String(limit.retryAfterSec),
    });
  }

  // Read the body with a hard size cap.
  const raw = await request.text();
  if (raw.length > BIZZBEE.maxBodyBytes) return json({ error: "too_large" }, 413);
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "bad_request", message: "Invalid request." }, 400);
  }
  const parsed = validateChatPayload(body);
  if (parsed.error) return json({ error: "bad_request", message: parsed.error }, 400);
  const { messages, page } = parsed;

  // No API key: answer from the site's stored content instead.
  const anthropic = getClient();
  if (!anthropic) {
    return textStream(localAnswer(messages, page), { "X-BizzBee-Mode": "stored" });
  }

  // Retrieval: the latest question, plus the one before it (for follow-ups
  // like "how much does it cost?").
  const userTurns = messages.filter((m) => m.role === "user");
  const query = [userTurns.at(-1)?.content, userTurns.at(-2)?.content].filter(Boolean).join(" ");
  const chunks = retrieve(query, { page });
  const system = [
    { type: "text", text: STABLE_SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
    { type: "text", text: buildDynamicContext({ chunks, current: pageContext(page) }) },
  ];

  const model = process.env.BIZZBEE_MODEL || BIZZBEE.defaultModel;
  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), BIZZBEE.requestTimeoutMs);
  request.signal?.addEventListener("abort", () => abort.abort());

  const params = {
    model,
    max_tokens: BIZZBEE.maxOutputTokens,
    system,
    messages,
  };
  // Effort applies to the Claude 5 family; chat answers don't need deep reasoning.
  if (/-5(-|$)/.test(model)) params.output_config = { effort: "low" };

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      let sentAny = false;
      const send = (text) => {
        sentAny = true;
        controller.enqueue(encoder.encode(text));
      };
      try {
        const response = anthropic.messages.stream(params, { signal: abort.signal });
        for await (const event of response) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            send(event.delta.text);
          }
        }
        const final = await response.finalMessage();
        if (final.stop_reason === "refusal") {
          send(
            "\n\nI can't help with that one here. If you have a question about our services, I'm happy to help, or you can reach the team directly through the Contact page.",
          );
        } else if (final.stop_reason === "max_tokens") {
          send("…");
        }
      } catch (error) {
        if (error instanceof Anthropic.AuthenticationError) {
          console.error("BizzBee: Anthropic authentication failed — check ANTHROPIC_API_KEY.");
        } else if (error instanceof Anthropic.RateLimitError) {
          console.error("BizzBee: Anthropic rate limit hit.");
        } else if (!abort.signal.aborted) {
          console.error("BizzBee chat failed:", error?.status || "", error?.message || error);
        }
        if (!sentAny && !abort.signal.aborted) {
          // The AI call failed before producing anything — answer from the
          // stored site content instead of showing an error.
          send(localAnswer(messages, page));
        } else {
          send(STREAM_ERROR);
        }
      } finally {
        clearTimeout(timer);
        try {
          controller.close();
        } catch {}
      }
    },
    cancel() {
      abort.abort();
      clearTimeout(timer);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
