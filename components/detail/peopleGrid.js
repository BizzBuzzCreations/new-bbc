import Image from "next/image";
import { Linkedin } from "lucide-react";

// People as plain photo cards (/our-team and the BPO / R&D team pages,
// redesign; replaces the flip cards): the photo (3:4, faces kept in view),
// then the name and role, and a LinkedIn link when there is one. Nothing
// flips or moves. `cols`: the grid's columns (Tailwind classes);
// `headingLevel`: the names' heading level (h2 on the team pages, where the
// grid sits right under the h1). Photos lazy-load. `people`: { name, role,
// photo, linkedin }.
export default function PeopleGrid({ people, cols = "grid-cols-2 lg:grid-cols-3", headingLevel = "h3" }) {
  const Name = headingLevel;
  const list = (people || []).filter((p) => p?.name || p?.role);
  if (!list.length) return null;
  return (
    <ul className={`reveal-stagger grid gap-x-4 gap-y-8 sm:gap-x-5 ${cols}`}>
      {list.map(({ name, role, photo, linkedin }, i) => (
        <li key={`${name || role}-${i}`}>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0b0e16]">
            {photo ? (
              <Image src={photo} alt={name || role} fill sizes="(min-width: 1280px) 300px, (min-width: 1024px) 30vw, 50vw" className="object-cover object-top" />
            ) : (
              <span aria-hidden="true" className="font-display absolute inset-0 flex items-center justify-center text-5xl text-[#40A2D8]">
                {(name || role).charAt(0)}
              </span>
            )}
          </div>
          <div className="mt-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              {name && <Name className="font-display text-lg leading-snug text-white md:text-xl">{name}</Name>}
              {role && <p className="mt-1 text-sm leading-snug text-white/65">{role}</p>}
            </div>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name || role} on LinkedIn`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#40A2D8] hover:bg-[#40A2D8] hover:text-black"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
