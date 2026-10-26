import Image from "next/image";
import { Linkedin } from "lucide-react";

// People on /our-team and the BPO / R&D team pages. Round photos (faces kept
// in view) in a brand-gradient ring, sized to be a calm part of the page
// rather than big white rectangles:
//  - "cards" (default): compact cards, about 5 across on wide screens, 4 on
//    tablets, 2 on phones; a short last row is centred, never left-aligned
//    beside empty space. Hover lights the ring and the border.
//  - "profiles" (the founders): wide cards, photo beside the name, role and
//    LinkedIn link, two across — filling the row.
// A person with no photo — or still on the dashboard's grey placeholder
// silhouette — gets their initials instead. `headingLevel`: the names'
// heading level (h2 on the team pages, where the grid sits right under the
// h1). Photos lazy-load. `people`: { name, role, photo, linkedin }.
const PLACEHOLDER = "/person-image.jpg";
const initials = (text) =>
  String(text || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

function Portrait({ name, role, photo, className = "", sizes }) {
  const real = photo && photo !== PLACEHOLDER;
  return (
    <span aria-hidden="true" className={`relative block aspect-square shrink-0 rounded-full bg-linear-to-br from-[#0B60B0] via-[#7b74f7] to-[#b57cff] p-[3px] opacity-90 transition-opacity duration-300 group-hover:opacity-100 ${className}`}>
      <span className="relative block h-full w-full overflow-hidden rounded-full bg-[#0b0e16]">
        {real ? (
          <Image src={photo} alt="" fill sizes={sizes} className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]" />
        ) : (
          <span className="font-display absolute inset-0 flex items-center justify-center text-3xl text-white md:text-4xl">{initials(name || role)}</span>
        )}
      </span>
    </span>
  );
}

function LinkedIn({ href, who, label = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${who} on LinkedIn`}
      className={`relative z-10 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#40A2D8] hover:bg-[#40A2D8] hover:text-black focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] ${label ? "px-4 py-2 text-sm" : "h-9 w-9"}`}
    >
      <Linkedin size={15} aria-hidden="true" />
      {label && "LinkedIn"}
    </a>
  );
}

export default function PeopleGrid({ people, variant = "cards", headingLevel = "h3" }) {
  const Name = headingLevel;
  const list = (people || []).filter((p) => p?.name || p?.role);
  if (!list.length) return null;
  const card = "group relative rounded-3xl border border-white/10 bg-[#0b0e16] transition-colors duration-300 hover:border-[#40A2D8]/50";

  if (variant === "profiles") {
    return (
      <ul className="reveal-stagger grid gap-4 md:grid-cols-2">
        {list.map(({ name, role, photo, linkedin }, i) => (
          <li key={`${name || role}-${i}`} className={`${card} flex items-center gap-5 p-5 md:gap-7 md:p-7`}>
            <Portrait name={name} role={role} photo={photo} sizes="(min-width: 768px) 144px, 104px" className="w-26 md:w-36" />
            <div className="min-w-0">
              {name && <Name className="font-display text-xl leading-snug text-white md:text-2xl">{name}</Name>}
              {role && <p className="mt-1 text-sm leading-snug text-[#40A2D8] md:text-base">{role}</p>}
              {linkedin && (
                <div className="mt-4">
                  <LinkedIn href={linkedin} who={name || role} label />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="reveal-stagger flex flex-wrap justify-center gap-3 sm:gap-4">
      {list.map(({ name, role, photo, linkedin }, i) => (
        <li key={`${name || role}-${i}`} className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.7rem)] md:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]">
          <div className={`${card} flex h-full flex-col items-center p-4 text-center sm:p-5`}>
            <Portrait name={name} role={role} photo={photo} sizes="(min-width: 1280px) 136px, 120px" className="w-full max-w-[8.5rem]" />
            {name && <Name className="font-display mt-4 text-base leading-snug text-white transition-colors duration-200 group-hover:text-[#40A2D8] md:text-lg">{name}</Name>}
            {role && <p className="mt-1 text-sm leading-snug text-white/60">{role}</p>}
            {linkedin && (
              <div className="mt-auto pt-4">
                <LinkedIn href={linkedin} who={name || role} />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
