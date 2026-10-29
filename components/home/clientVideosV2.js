import RichText from "@/components/ui/richText";
import ClientVideoWall from "@/components/home/clientVideoWall";
import { resolveClientVideos } from "@/lib/clientVideos";

// "Client Stories" (homepage and the UK / location pages): the client video
// testimonials as a "phone stage": the videos are phone-recorded, so they sit
// in phone frames on an arc and play inside the centre phone (see
// clientVideoWall.js). The heading block is the site's
// usual one — small blue label, big light heading, a line of text. Dashboard
// fields: "Client Video Testimonials" (label, heading, subtext, the list of
// videos); renders nothing when the list is empty. No background of its own
// (it sits on the beams block with Customer Reviews).
export default function ClientVideosV2({ content }) {
  const items = resolveClientVideos(content);
  if (!items.length) return null;
  const eyebrow = content?.clientVideosEyebrow || "Client Stories";
  const heading = content?.clientVideosHeading || "Hear It Straight From Our Clients";
  const subtext = content?.clientVideosSubtext ?? "Short, honest videos from the businesses we work with. Tap the phone in the middle to watch, or swipe to meet the others.";

  return (
    <section id="client-stories" className="scroll-mt-20 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="reveal grid gap-6 md:grid-cols-[2fr_3fr] md:items-end md:gap-16">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          {subtext && <RichText as="p" text={subtext} className="text-base leading-relaxed text-white/70 md:text-lg" />}
        </div>
        <ClientVideoWall items={items} />
      </div>
    </section>
  );
}
