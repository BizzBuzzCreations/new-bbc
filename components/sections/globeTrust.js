import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";
import Clock from "@/components/brand/clock";
import { OFFICES } from "@/lib/siteNav";

// "Trusted by growing businesses" on the contact page: the dashboard's
// heading and paragraph, and the three offices with their local time — no
// globe, no graphic (the old globe loaded Three.js and a map file for a
// decoration). Fields: globeEyebrow, globeHeading, globeParagraph.
export default function GlobeTrust({ content }) {
  const eyebrow = content?.globeEyebrow || "Trusted by Growing Businesses";
  const heading = content?.globeHeading || "In Prayagraj, Across India & Worldwide";
  const paragraph =
    content?.globeParagraph ||
    "From local businesses to growing enterprises, we help brands across Prayagraj, India, and global markets build a digital presence that drives leads and sales — real results, not vanity metrics. Whether you're a small business just getting started online or an established company looking to expand into new markets, our team combines local market understanding with strategies that work across borders, so your growth never stays confined to one city or one country.";
  return (
    <section className="on-paper border-t border-(--line)">
      <div className="wrap grid gap-12 py-7 md:py-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Kicker>{eyebrow}</Kicker>
          <h2 className="font-display mt-8 text-balance text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[0.98] tracking-[-0.05em]">
            <AccentText text={heading} />
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-14">
          <RichText as="p" text={paragraph} className="text-lg leading-relaxed text-(--mut)" />
          <ul className="mt-10 border-t border-(--fg)">
            {OFFICES.map((o) => (
              <li key={o.city} className="flex items-baseline justify-between gap-4 border-b border-(--line) py-4">
                <span className="font-display text-2xl tracking-[-0.03em]">{o.city}</span>
                <span className="kicker text-(--mut)">
                  {o.country} · <Clock tz={o.tz} zone={o.zone} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
