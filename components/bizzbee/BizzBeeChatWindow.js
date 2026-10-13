"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Minus,
  RotateCcw,
  SendHorizontal,
  X,
  ClipboardList,
  WifiOff,
  Phone,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import BizzBeeMessage, { splitLeadToken } from "./BizzBeeMessage";
import BizzBeeLeadForm from "./BizzBeeLeadForm";
import { BIZZBEE, CONTACT, LEAD_FORM_TOKEN } from "@/lib/bizzbee/config";

const STORAGE_KEY = "bizzbee-chat-v1";
const STREAM_ERROR = "[[BIZZBEE_ERROR]]";

const WELCOME =
  "Hey there! 👋 I'm BizzBee, your AI assistant at BizzBuzz Creations.";

let nextId = 1;
const newId = () => `m${Date.now()}-${nextId++}`;

function loadSaved() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    if (Array.isArray(saved?.messages)) return saved;
  } catch {}
  return null;
}

export default function BizzBeeChatWindow({ onClose, visible = true }) {
  const pathname = usePathname();
  const [messages, setMessages] = useState(() => loadSaved()?.messages || []);
  const [leadOpen, setLeadOpen] = useState(
    () => loadSaved()?.leadOpen || false,
  );
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [suggestions, setSuggestions] = useState([]); // filled only in stored-answer mode
  const [failure, setFailure] = useState(null); // null | "network" | "unavailable" | "rate" | "failed"
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);
  const panelRef = useRef(null);

  // Keep the conversation for this tab only (cleared when the tab closes).
  useEffect(() => {
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ messages: messages.slice(-30), leadOpen }),
      );
    } catch {}
  }, [messages, leadOpen]);

  useEffect(() => () => abortRef.current?.abort(), []);

  // Ask the server which mode it is in. With no AI key configured it answers
  // from the site's stored content and returns ready-made questions to show.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/bizzbee/chat")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && Array.isArray(d?.suggestions)) setSuggestions(d.suggestions);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // The welcome message "types itself" every time the chat is opened.
  // Visitors who prefer reduced motion get the full text immediately.
  const [typed, setTyped] = useState("");
  const [typing, setTyping] = useState(true);
  // Ready-made question buttons then appear one by one, after the welcome
  // has finished typing.
  const [chipsShown, setChipsShown] = useState(0);
  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(WELCOME);
      setTyping(false);
      return;
    }
    let i = 0;
    setTyped("");
    setTyping(true);
    const timer = window.setInterval(() => {
      i += 1;
      setTyped(WELCOME.slice(0, i));
      if (i >= WELCOME.length) {
        window.clearInterval(timer);
        setTyping(false);
      }
    }, 28);
    return () => window.clearInterval(timer);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    if (typing) {
      setChipsShown(0);
      return;
    }
    const total = suggestions.length;
    if (!total) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setChipsShown(total);
      return;
    }
    let n = 0;
    setChipsShown(0);
    const timer = window.setInterval(() => {
      n += 1;
      setChipsShown(n);
      if (n >= total) window.clearInterval(timer);
    }, 450);
    return () => window.clearInterval(timer);
  }, [visible, typing, suggestions.length]);

  // Focus the message box whenever the panel is (re)opened.
  useEffect(() => {
    if (visible) inputRef.current?.focus();
  }, [visible]);

  // Auto-scroll to the newest content.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy, leadOpen, failure]);

  // Esc closes; Tab stays inside the panel on small screens where it
  // covers the page.
  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
    }
  };

  const request = useCallback(
    async (history) => {
      setBusy(true);
      setFailure(null);
      const controller = new AbortController();
      abortRef.current = controller;
      const assistantId = newId();
      let started = false;

      const payload = history
        .filter((m) => m.content && !m.error)
        .slice(-BIZZBEE.maxHistoryMessages)
        .map((m) => ({
          role: m.role,
          content:
            m.role === "assistant" ? splitLeadToken(m.content).text : m.content,
        }));

      try {
        const res = await fetch("/api/bizzbee/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payload, page: pathname || "/" }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          const data = await res.json().catch(() => ({}));
          if (res.status === 429) setFailure("rate");
          else if (res.status === 503) setFailure("unavailable");
          else if (res.status === 400 && data.message)
            setFailure({ message: data.message });
          else setFailure("failed");
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let text = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          text += decoder.decode(value, { stream: true });
          const errored = text.includes(STREAM_ERROR);
          const shown = errored ? text.split(STREAM_ERROR)[0] : text;
          if (shown && !started) {
            started = true;
            setMessages((prev) => [
              ...prev,
              { id: assistantId, role: "assistant", content: shown },
            ]);
          } else if (started) {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, content: shown } : m,
              ),
            );
          }
          if (errored) {
            setFailure("failed");
            return;
          }
        }
        text += decoder.decode();
        if (!text.trim()) setFailure("failed");
        else if (text.includes(LEAD_FORM_TOKEN)) setLeadOpen(true);
      } catch (error) {
        if (error?.name === "AbortError") return;
        setFailure(navigator.onLine ? "failed" : "network");
      } finally {
        setBusy(false);
        abortRef.current = null;
      }
    },
    [pathname],
  );

  const send = useCallback(
    (raw) => {
      const text = String(raw ?? "")
        .trim()
        .slice(0, BIZZBEE.maxMessageChars);
      if (!text || busy) return;
      const history = [
        ...messages,
        { id: newId(), role: "user", content: text },
      ];
      setMessages(history);
      setInput("");
      request(history);
    },
    [busy, messages, request],
  );

  const retry = () => {
    if (busy) return;
    // Drop any partial assistant reply, then re-ask the last user message.
    const trimmed = [...messages];
    while (trimmed.length && trimmed[trimmed.length - 1].role === "assistant")
      trimmed.pop();
    if (!trimmed.length) return;
    setMessages(trimmed);
    request(trimmed);
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setLeadOpen(false);
    setFailure(null);
    setBusy(false);
    setInput("");
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
    inputRef.current?.focus();
  };

  const onInputKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send(input);
    }
  };

  // Grow the textarea with its content (up to a few lines).
  const onInput = (e) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
  };
  useEffect(() => {
    if (!input && inputRef.current) inputRef.current.style.height = "auto";
  }, [input]);

  const failureText = {
    network: "You appear to be offline. Check your connection, then retry.",
    rate: "You're sending messages quickly. Please wait a moment and try again.",
    failed: "Sorry, I couldn't get a response. Please try again.",
    unavailable:
      "BizzBee isn't available right now. You can still reach the team directly using the options below.",
  };
  const failureMessage =
    typeof failure === "object" && failure
      ? failure.message
      : failureText[failure];

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="BizzBee AI website assistant"
      onKeyDown={onKeyDown}
      className={`bizzbee-panel fixed inset-x-2 bottom-[7.5rem] mb-[env(safe-area-inset-bottom)] z-[10000] ${visible ? "flex" : "hidden"} h-[min(640px,calc(100dvh-9.5rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] text-white shadow-2xl shadow-black/60 sm:inset-x-auto sm:right-5 sm:bottom-[9.5rem] sm:h-[min(640px,calc(100dvh-12rem))] sm:w-[390px]`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-linear-to-r from-[#0B60B0] to-[#40A2D8] px-4 py-3">
        <Image src="/bizzbee-logo.png" alt="" width={88} height={88} sizes="44px" className="h-11 w-11 shrink-0 rounded-full object-cover" />
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-base font-bold">BizzBee AI</p>
          <p className="text-xs text-white/90">AI Assistant</p>
        </div>
        <button
          type="button"
          onClick={reset}
          aria-label="Start a new conversation"
          title="New chat"
          className="rounded-full p-2 text-white/90 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <RotateCcw size={16} />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Minimize chat"
          title="Minimize"
          className="rounded-full p-2 text-white/90 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Minus size={16} />
        </button>
        <button
          type="button"
          onClick={() => {
            reset();
            onClose();
          }}
          aria-label="Close chat and clear conversation"
          title="Close"
          className="rounded-full p-2 text-white/90 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={16} />
        </button>
      </div>

      {/* Conversation */}
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-relevant="additions text"
        className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4 text-sm leading-relaxed"
      >
        <Bubble role="assistant">
          {/* Full text is rendered invisibly to reserve the final height, so
              the bubble doesn't grow while the visible copy types in. */}
          <div className="relative">
            <span className="sr-only">{WELCOME}</span>
            <div className="invisible" aria-hidden="true">
              <BizzBeeMessage role="assistant" content={WELCOME} />
            </div>
            <div className="absolute inset-0" aria-hidden="true">
              <BizzBeeMessage role="assistant" content={typing ? `${typed}▍` : typed} />
            </div>
          </div>
        </Bubble>

        {messages.length === 0 && suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1" aria-label="Suggested questions">
            {suggestions.slice(0, chipsShown).map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                disabled={busy}
                className="bizzbee-enter rounded-full border border-[#40A2D8]/50 bg-[#40A2D8]/10 px-3 py-1.5 text-left text-xs font-medium text-[#bfe6fa] transition hover:bg-[#40A2D8]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8] disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {messages.map((m) => (
          <Bubble key={m.id} role={m.role}>
            <BizzBeeMessage role={m.role} content={m.content} />
          </Bubble>
        ))}

        {busy &&
          !messages.some(
            (m, i) =>
              i === messages.length - 1 && m.role === "assistant" && m.content,
          ) && (
            <Bubble role="assistant">
              <span
                className="inline-flex items-center gap-1"
                role="status"
                aria-label="BizzBee is typing"
              >
                <span className="bizzbee-dot" />
                <span
                  className="bizzbee-dot"
                  style={{ animationDelay: "0.15s" }}
                />
                <span
                  className="bizzbee-dot"
                  style={{ animationDelay: "0.3s" }}
                />
              </span>
            </Bubble>
          )}

        {leadOpen && (
          <BizzBeeLeadForm
            onCancel={() => setLeadOpen(false)}
            onDone={(message) => {
              setLeadOpen(false);
              setMessages((prev) => [
                ...prev,
                {
                  id: newId(),
                  role: "assistant",
                  content: message || "Thanks! Your enquiry has been sent.",
                },
              ]);
            }}
          />
        )}

        {failure && (
          <div
            role="alert"
            className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-xs text-white"
          >
            <p className="flex items-start gap-2">
              {failure === "network" && (
                <WifiOff
                  size={14}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
              )}
              <span>{failureMessage}</span>
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {failure !== "unavailable" && (
                <button
                  type="button"
                  onClick={retry}
                  className="rounded-full bg-white/15 px-3 py-1 font-semibold hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Retry
                </button>
              )}
              {(failure === "unavailable" || failure === "failed") && (
                <>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#25D366]/90 px-3 py-1 font-semibold text-black hover:bg-[#25D366] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    WhatsApp us
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneIndiaTel}`}
                    className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 font-semibold hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Phone size={12} aria-hidden="true" /> Call
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="border-t border-white/10 bg-[#0f0f0f] px-3 pb-3 pt-2">
        {/* Quick ways to reach the team — always visible */}
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {!leadOpen && (
            <button
              type="button"
              onClick={() => setLeadOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 transition hover:border-[#40A2D8] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8]"
            >
              <ClipboardList size={12} aria-hidden="true" /> Talk to the team
            </button>
          )}
          <a
            href={`tel:${CONTACT.phoneIndiaTel}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 transition hover:border-[#40A2D8] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8]"
          >
            <Phone size={12} aria-hidden="true" /> Call
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/50 px-3 py-1 text-xs text-[#7ff0a8] transition hover:bg-[#25D366]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <MessageCircle size={12} aria-hidden="true" /> WhatsApp
          </a>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-end gap-2"
        >
          <label htmlFor="bizzbee-input" className="sr-only">
            Message BizzBee
          </label>
          <textarea
            id="bizzbee-input"
            ref={inputRef}
            value={input}
            onChange={onInput}
            onKeyDown={onInputKey}
            rows={1}
            maxLength={BIZZBEE.maxMessageChars}
            placeholder="Type your question…"
            className="max-h-28 min-h-[40px] flex-1 resize-none rounded-2xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder:text-white/40 focus:border-[#40A2D8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8]/60"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B60B0] text-white transition hover:bg-[#0d70cf] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <SendHorizontal size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

function Bubble({ role, children }) {
  const mine = role === "user";
  return (
    <div className={`bizzbee-enter flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 ${
          mine
            ? "rounded-br-md bg-[#0B60B0] text-white"
            : "rounded-bl-md bg-white/10 text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
