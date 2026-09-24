import { Quote } from "lucide-react";
import RichText from "@/components/ui/richText";

// Client video testimonial — video on the left, the client's words and
// details on the right (stacked on mobile). Used only on the UK landing
// page, right below Customer Reviews; everything comes from the
// dashboard's "Video Client Testimonial" section. Renders nothing until a
// video is uploaded.
export default function VideoTestimonial({ content }) {
  const video = content?.videoTestimonialVideo;
  if (!video) return null;

  const poster = content?.videoTestimonialPoster || undefined;
  const eyebrow = content?.videoTestimonialEyebrow || "Client Testimonial";
  const heading = content?.videoTestimonialHeading || "Hear It From Our Client";
  const quote = content?.videoTestimonialQuote;
  const name = content?.videoTestimonialClientName;
  const role = content?.videoTestimonialClientRole;
  const highlights = (content?.videoTestimonialHighlights || []).filter(
    (h) => h?.value || h?.label,
  );

  return (
    <section className="bg-black px-5 pb-20">
      <div
        className="container mx-auto grid overflow-hidden rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl md:grid-cols-[auto_1fr] md:items-center lg:max-w-5xl xl:max-w-6xl"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
        }}
      >
        {/* Fixed height so a portrait (phone-recorded) client video
            doesn't stretch the whole card tall; the column shrinks to the
            video's own width and the text takes the rest. */}
        <div className="flex justify-center p-4 md:p-6 md:pr-0">
          <video
            src={video}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="h-[360px] w-auto max-w-full rounded-2xl bg-black object-contain md:h-[340px] md:max-w-[480px]"
          />
        </div>

        <div className="flex flex-col justify-center px-6 pb-8 pt-2 text-white md:px-10 md:py-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#40A2D8]">
            {eyebrow}
          </p>
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">{heading}</h2>

          {quote && (
            <div className="relative mb-6">
              <Quote className="mb-2 h-7 w-7 text-[#40A2D8]" aria-hidden="true" />
              <RichText as="p" text={quote} className="leading-relaxed text-white" />
            </div>
          )}

          {highlights.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-6">
              {highlights.map((h, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-[#40A2D8]">{h.value}</p>
                  <p className="text-sm text-white">{h.label}</p>
                </div>
              ))}
            </div>
          )}

          {(name || role) && (
            <div className="border-t border-white/15 pt-4">
              {name && <p className="font-semibold text-white">{name}</p>}
              {role && <p className="text-sm text-white">{role}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
