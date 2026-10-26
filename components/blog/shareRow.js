"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Facebook, Linkedin, Link2, MessageCircle, Share2, Twitter } from "lucide-react";

// Share a post: LinkedIn, X, Facebook, WhatsApp, copy the link, and the
// phone's own share sheet where the browser has one. `url`: the post's full
// address; `title`: its title. The links are plain anchors (they work
// before any script has loaded).
export default function ShareRow({ url, title, label = "Share" }) {
  const [canShare, setCanShare] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setCanShare(typeof navigator !== "undefined" && !!navigator.share), 0);
    return () => clearTimeout(t);
  }, []);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, Linkedin],
    ["X", `https://twitter.com/intent/tweet?url=${u}&text=${t}`, Twitter],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${u}`, Facebook],
    ["WhatsApp", `https://wa.me/?text=${t}%20${u}`, MessageCircle],
  ];
  const btn = "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#40A2D8] hover:bg-[#40A2D8] hover:text-black focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]";
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied", { position: "bottom-center", autoClose: 1800, theme: "dark", hideProgressBar: true });
    } catch {
      toast.error("Couldn't copy the link", { position: "bottom-center", autoClose: 2500, theme: "dark" });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="mr-1 text-sm text-white/60">{label}</span>
      {links.map(([name, href, Icon]) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${name} (opens in a new tab)`} className={btn}>
          <Icon size={16} aria-hidden="true" />
        </a>
      ))}
      <button type="button" onClick={copyLink} aria-label="Copy link" className={btn}>
        <Link2 size={16} aria-hidden="true" />
      </button>
      {canShare && (
        <button type="button" onClick={() => navigator.share({ title, url }).catch(() => {})} aria-label="Share with another app" className={btn}>
          <Share2 size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
