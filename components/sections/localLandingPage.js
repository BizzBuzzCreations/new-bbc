import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import DetailHero from "@/components/detail/detailHero";
import WhoItsFor from "@/components/detail/whoItsFor";
import RoadmapSteps from "@/components/detail/roadmapSteps";
import LocalityBlock from "@/components/detail/localityBlock";
import CertificationsRow from "@/components/detail/certificationsRow";
import LinkChips from "@/components/detail/linkChips";
import DetailCta from "@/components/detail/detailCta";
import FaqV2 from "@/components/home/faqV2";
import BeamsBlock from "@/components/home/band";
import { LOCAL_PAGES, LOCAL_CTA_TEXT } from "@/lib/localPages";
import { SITE_URL } from "@/lib/pagePaths";
import { mapsUrl } from "@/lib/offices";

// One of the four local landing pages (see lib/localPages.js). Built from
// the same detail-page sections every sub-service page uses, plus the two
// India offices (address, call, WhatsApp, directions) and the badges.
const OFFICES = [
  { tag: "Headquarters", city: "Prayagraj", address: ["43/33, Tej Bahadur Sapru Rd,", "Agnipath Colony, Civil Lines,", "Prayagraj, Uttar Pradesh 211001"], maps: "43/33, Tej Bahadur Sapru Rd, Civil Lines, Prayagraj, Uttar Pradesh 211001" },
  { tag: "Office", city: "Kanpur", address: ["Plot no. 218, Harjindar Nagar,", "Lal Bangla, J K Puri,", "Kanpur, Uttar Pradesh 208007"], maps: "Plot no. 218, Harjindar Nagar, Lal Bangla, J K Puri, Kanpur, Uttar Pradesh 208007" },
];

function Offices({ heading }) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-[#40A2D8]">Visit or call</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
        </div>
        <ul className="reveal-stagger mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
          {OFFICES.map((o) => (
            <li key={o.city} className="rounded-2xl border border-white/10 bg-[#0b0e16] p-6 sm:p-8">
              <p className="flex items-center gap-2 text-sm text-[#40A2D8]"><MapPin size={16} aria-hidden="true" /> {o.tag}</p>
              <h3 className="font-display mt-3 text-2xl text-white">{o.city}</h3>
              <address className="mt-3 text-base not-italic leading-relaxed text-white/70">
                {o.address.map((l) => (<span key={l} className="block">{l}</span>))}
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+918115585285" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm transition-colors hover:border-white hover:bg-white hover:text-black"><Phone size={15} aria-hidden="true" /> +91 81155 85285</a>
                <a href="https://wa.me/918115585285" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-black"><MessageCircle size={15} aria-hidden="true" /> WhatsApp</a>
                <a href={mapsUrl(o.maps)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm transition-colors hover:border-[#40A2D8] hover:bg-[#40A2D8] hover:text-black">Get directions <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function LocalLandingPage({ slug }) {
  const p = LOCAL_PAGES[slug];
  const url = `${SITE_URL}/${slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: p.parentLabel, item: `${SITE_URL}${p.parentHref}` },
        { "@type": "ListItem", position: 3, name: p.label, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: p.serviceName,
      serviceType: p.serviceName,
      description: p.description,
      url,
      provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/`, name: "BizzBuzz Creations" },
      areaServed: [{ "@type": "Country", name: "India" }],
    },
  ];

  return (
    <div data-no-reveal>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div aria-hidden="true" className="scroll-progress" />
      <DetailHero
        parentLabel={p.parentLabel}
        parentHref={p.parentHref}
        label={p.label}
        title={p.h1}
        description={p.intro}
        ctaText={LOCAL_CTA_TEXT}
        image={p.heroImage}
        secondaryHref="#included"
      />
      <WhoItsFor id="included" eyebrow="What we do" heading={p.whatHeading} items={p.what} />
      <BeamsBlock>
        <RoadmapSteps heading={p.stepsHeading} steps={p.steps} />
      </BeamsBlock>
      <LocalityBlock heading={p.placeHeading} text={p.place} image={p.placeImage} alt="The BizzBuzz Creations team" eyebrow="Where we are" />
      <Offices heading="Our offices in Prayagraj and Kanpur" />
      <CertificationsRow eyebrow="Credentials" heading="Certified and verified" />
      <LinkChips eyebrow="Related services" heading="Explore the services behind this page" links={p.links} />
      <FaqV2 content={{ faqHeading: "Frequently Asked Questions", faqItems: p.faqs }} />
      <DetailCta heading={p.ctaHeading} text={p.ctaText} primaryText={LOCAL_CTA_TEXT} />
    </div>
  );
}
