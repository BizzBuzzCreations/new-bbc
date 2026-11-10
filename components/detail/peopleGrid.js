import Image from "next/image";
import { Linkedin } from "lucide-react";

// People (our team, BPO and R&D team pages): real portraits as squares (in colour; they ease in on hover), name and role under
// each, a LinkedIn link when there is one. `cards` (default): 5 across on
// wide screens, 2 on phones. `profiles` (the founders): two large portraits
// side by side. Without a photo — or on the dashboard's grey placeholder —
// the initials are set in a plain block. `headingLevel`: the names' heading
// level. `people`: { name, role, photo, linkedin }.
const PLACEHOLDER = "/person-image.jpg";
const initials = (text) =>
  String(text || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

function Portrait({ name, role, photo, sizes, ratio = "aspect-[4/5]" }) {
  const real = photo && photo !== PLACEHOLDER;
  if (!real) return null; // no photograph yet: just the name and role, no empty block
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden bg-paper-2 ${ratio}`}
    >
      <Image
        src={photo}
        alt=""
        fill
        sizes={sizes}
        quality={90}
        className="object-cover object-top transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
      />
    </div>
  );
}

function LinkedIn({ href, who }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${who} on LinkedIn`}
      className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--fg)/30 transition-colors hover:border-(--fg) hover:bg-(--fg) hover:text-(--bg)"
    >
      <Linkedin size={15} aria-hidden="true" />
    </a>
  );
}

export default function PeopleGrid({
  people,
  variant = "cards",
  headingLevel = "h3",
}) {
  const Name = headingLevel;
  const list = (people || []).filter((p) => p?.name || p?.role);
  if (!list.length) return null;
  const profiles = variant === "profiles";
  return (
    <ul
      className={`grid gap-x-4 gap-y-10 ${profiles ? "sm:grid-cols-2 lg:gap-x-10" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}`}
    >
      {list.map(({ name, role, photo, linkedin }, i) => (
        <li key={`${name || role}-${i}`} className="group">
          <Portrait
            name={name}
            role={role}
            photo={photo}
            ratio={profiles ? "aspect-[4/3]" : "aspect-[4/5]"}
            sizes={
              profiles
                ? "(min-width: 1024px) 660px, 100vw"
                : "(min-width: 1280px) 260px, 45vw"
            }
          />
          <div
            className={`flex items-start justify-between gap-3 border-t border-(--fg) pt-3 ${photo && photo !== PLACEHOLDER ? "mt-4" : ""}`}
          >
            <div className="min-w-0">
              {name && (
                <Name
                  className={`font-display leading-tight tracking-[-0.03em] ${profiles ? "text-2xl md:text-3xl" : "text-lg"}`}
                >
                  {name}
                </Name>
              )}
              {role && <p className="kicker mt-1.5 text-(--mut)">{role}</p>}
            </div>
            {linkedin && <LinkedIn href={linkedin} who={name || role} />}
          </div>
        </li>
      ))}
    </ul>
  );
}
