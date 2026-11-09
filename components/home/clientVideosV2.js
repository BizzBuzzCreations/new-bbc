import ClientVideoWall from "@/components/home/clientVideoWall";
import SectionHead from "@/components/brand/sectionHead";
import { resolveClientVideos } from "@/lib/clientVideos";

// "Client stories" (homepage and the UK / location pages): the client video
// testimonials as a "phone stage" — phone frames on an arc, the video plays
// inside the centre phone (see clientVideoWall.js). Dashboard fields:
// "Client Video Testimonials" (label, heading, subtext, the list of
// videos); renders nothing when the list is empty.
export default function ClientVideosV2({ content }) {
  const items = resolveClientVideos(content);
  if (!items.length) return null;
  const eyebrow = content?.clientVideosEyebrow || "Client stories";
  const heading = content?.clientVideosHeading || "Hear It Straight From Our Clients";
  const subtext = content?.clientVideosSubtext ?? "Short, honest videos from the businesses we work with. Tap the phone in the middle to watch, or swipe to meet the others.";

  return (
    <section id="client-stories" aria-labelledby="client-stories-heading" className="relative scroll-mt-20 overflow-x-clip bg-ink text-white">
      <div className="wrap py-24 md:py-36">
        <SectionHead id="client-stories-heading" no="06" kicker={eyebrow} heading={heading} text={subtext} />
        <ClientVideoWall items={items} />
      </div>
    </section>
  );
}
