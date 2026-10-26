"use client";
import { useState } from "react";
import { Briefcase, MapPin, Clock, ChevronDown } from "lucide-react";
import Pill from "@/components/home/pill";

const PREVIEW_LENGTH = 180;

// The full job description (often several paragraphs plus bullet lists)
// used to be dumped in full into every card, making each listing a very
// long, unwieldy block — especially on mobile, where a handful of open
// roles could mean endless scrolling before reaching "Apply Now" on later
// ones. Collapsed to a short preview by default with a "Read more" toggle,
// so the list reads as a clean, scannable stack of roles. Redesign: a thin
// line between roles instead of boxes, the Apply pill (opens the role's
// form in a new tab).
export default function JobCard({ job, days }) {
  const [expanded, setExpanded] = useState(false);
  const description = job.description || "";
  const isLong = description.length > PREVIEW_LENGTH;
  const preview = isLong ? `${description.slice(0, PREVIEW_LENGTH).trimEnd()}…` : description;

  return (
    <div className="border-b border-white/10 py-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
        <div>
          <h3 className="font-display text-2xl leading-snug text-white mb-1">{job.title}</h3>
          <span className="text-sm text-white/60">
            Posted {days === 0 ? "today" : `${days} day${days === 1 ? "" : "s"} ago`}
          </span>
        </div>
        <div className="shrink-0 w-full sm:w-fit">
          <Pill href={job.applyForm} variant="solid" srText={`for ${job.title} (opens in a new tab)`}>
            Apply Now
          </Pill>
        </div>
      </div>

      <p className="max-w-3xl text-sm text-white/70 leading-relaxed whitespace-pre-line mb-2 md:text-base">
        {expanded ? description : preview}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="inline-flex items-center gap-1 py-1.5 -my-1.5 text-xs font-semibold text-[#40A2D8] hover:text-white mb-3 transition-colors duration-300"
        >
          {expanded ? "Read less" : "Read more"}
          <ChevronDown size={13} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 text-white/80 px-3 py-1.5 text-xs">
          <Briefcase size={13} />
          {job.department}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 text-white/80 px-3 py-1.5 text-xs">
          <MapPin size={13} />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 text-white/80 px-3 py-1.5 text-xs">
          <Clock size={13} />
          {job.experience}
        </span>
      </div>
    </div>
  );
}
