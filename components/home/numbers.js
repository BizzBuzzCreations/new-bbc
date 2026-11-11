import Image from "next/image";
import CountUp from "@/components/brand/countUp";
import { SERVICE_LINES, SUB_SERVICE_COUNT } from "@/lib/siteNav";

const BADGES = [
  { src: "/clutch.png", title: "Clutch", sub: "Verified partner" },
  { src: "/CDL.png", title: "Google Partner", sub: "Certified" },
  { src: "/GA.png", title: "Google Analytics", sub: "Certified" },
  { src: "/iso.png", title: "ISO", sub: "Certified" },
];

// The numbers (Zirka, Tenity): up to four figures set enormous on ink, each
// counting up as it arrives, with the real certifications underneath. The
// figures are the dashboard's (zoomStats on the homepage) — nothing here is
// invented. `stats`: { value, label }.
export default function Numbers({ stats }) {
  const list = (stats || []).filter((s) => s?.value).slice(0, 4);
  if (!list.length) return null;
  // facts about the business itself fill the row when the dashboard has fewer than four figures
  const facts = [
    { value: "3", label: "Offices — Prayagraj, Kanpur, London" },
    {
      value: String(SUB_SERVICE_COUNT),
      label: `Services in ${SERVICE_LINES.length} lines of work`,
    },
  ];
  for (const f of facts) if (list.length < 4) list.push(f);
  return (
    <section
      aria-label="BizzBuzz Creations in numbers"
      className="band-open on-ink"
    >
      <div className="wrap py-7 md:py-10">
        <dl className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {list.map(({ value, label }, i) => (
            <div
              key={`${label}-${i}`}
              style={{ "--k": i }}
              data-lg-bezel="30"
              data-lg-scale="1.3"
              className="row-in glass glass-calm relative rounded-[28px] p-6 md:p-8"
            >
              <dd className="font-display text-[clamp(3.4rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.06em]">
                <CountUp value={value} />
              </dd>
              <dt className="kicker mt-5 text-(--fg)/80">{label}</dt>
            </div>
          ))}
        </dl>
        <ul aria-label="Certifications" className="mt-6 flex flex-wrap gap-3">
          {BADGES.map((b) => (
            <li
              key={b.title}
              className="glass glass-calm relative flex items-center gap-3 rounded-full py-2 pl-2 pr-5"
              data-lg-bezel="14"
              data-lg-scale="1"
            >
              <Image
                src={b.src}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full bg-white object-contain p-0.5"
              />
              <span className="text-sm leading-tight">
                <span className="block font-medium">{b.title}</span>
                <span className="text-(--fg)/75">{b.sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
