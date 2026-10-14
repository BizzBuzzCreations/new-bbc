"use client";

import Link from "next/link";
import { resolveLink } from "@/lib/bizzbee/links";
import { LEAD_FORM_TOKEN } from "@/lib/bizzbee/config";

// Renders a chat message as React elements — never as raw HTML — so model
// output (or a visitor's own text) can't inject markup or scripts. Supports
// just: **bold**, "- " bullet lists, "1." numbered lists, and [text](href) links, where a link is
// only clickable if resolveLink() accepts it (verified site routes + the
// official contact channels); anything else is shown as plain text.

const INLINE = /(\*\*[^*\n]+\*\*|\[[^\]\n]+\]\([^)\s]+\))/g;

function Inline({ text }) {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const target = resolveLink(link[2]);
      if (!target) return <span key={i}>{link[1]}</span>;
      const cls =
        "font-semibold text-[#6cc3ee] underline underline-offset-2 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40A2D8] rounded-sm";
      if (target.type === "internal") {
        return (
          <Link key={i} href={target.href} className={cls}>
            {link[1]}
          </Link>
        );
      }
      const opensTab = target.href.startsWith("https:");
      return (
        <a
          key={i}
          href={target.href}
          className={cls}
          {...(opensTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Removes the lead-form token and reports whether it was present.
export function splitLeadToken(content) {
  const has = content.includes(LEAD_FORM_TOKEN);
  return { text: content.split(LEAD_FORM_TOKEN).join("").trim(), wantsLeadForm: has };
}

export default function BizzBeeMessage({ role, content }) {
  const { text } = role === "assistant" ? splitLeadToken(content) : { text: content };
  const lines = text.split("\n");
  const blocks = [];
  let list = null;
  let listKind = null;

  lines.forEach((line, i) => {
    const bullet = line.match(/^\s*[-*•]\s+(.*)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
    const item = bullet || numbered;
    if (item) {
      const kind = bullet ? "ul" : "ol";
      if (!list || listKind !== kind) {
        list = [];
        listKind = kind;
        blocks.push({ type: kind, items: list, key: i });
      }
      list.push(item[1]);
    } else {
      list = null;
      if (line.trim()) blocks.push({ type: "p", text: line, key: i });
    }
  });

  return (
    <div className="space-y-2 break-words [overflow-wrap:anywhere]">
      {blocks.map((b) =>
        b.type === "ul" || b.type === "ol" ? (
          (() => {
            const Tag = b.type;
            return (
              <Tag
                key={b.key}
                className={`${b.type === "ul" ? "list-disc" : "list-decimal"} space-y-1.5 pl-5 marker:text-[#40A2D8]`}
              >
                {b.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </Tag>
            );
          })()
        ) : (
          <p key={b.key}>
            <Inline text={b.text} />
          </p>
        ),
      )}
    </div>
  );
}
