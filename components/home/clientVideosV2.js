import ClientVideoWall from "@/components/home/clientVideoWall";
import SectionHead from "@/components/brand/sectionHead";
import { resolveClientVideos } from "@/lib/clientVideos";

// "Client stories" (homepage and the UK / location pages): the real client
// video testimonials as a sideways row (see clientVideoWall.js). Dashboard
// fields: "Client Video Testimonials" (label, heading, subtext, the list of
// videos); renders nothing when the list is empty.
export default function ClientVideosV2({ content }) {
  const items = resolveClientVideos(content);
  if (!items.length) return null;
  const eyebrow = content?.clientVideosEyebrow || "Client stories";
  const heading = content?.clientVideosHeading || "Hear It Straight From Our Clients";
  const subtext = content?.clientVideosSubtext ?? "Short, honest videos from the businesses we work with. Press a card to watch it here.";
  return (
    <section id="client-stories" aria-labelledby="client-stories-heading" className="on-paper scroll-mt-10 overflow-x-clip">
      <div className="wrap pb-7 md:pb-10">
        <SectionHead id="client-stories-heading" no="05" of="08" kicker={eyebrow} heading={heading} text={subtext} size="m" />
        <ClientVideoWall items={items} />
      </div>
    </section>
  );
}
