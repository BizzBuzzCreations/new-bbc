import RichText from "@/components/ui/richText";

// Client video testimonial (location pages, redesign) — the video in a
// rounded frame on the left, the client's words on the right, in the
// homepage's type (big light quote, light numbers, thin divider) instead of
// the old glowing bordered card. Renders nothing until a video is uploaded.
// Same dashboard fields as before ("Video Client Testimonial"); the video
// only loads its first frame until played (preload="metadata").
export default function VideoTestimonialV2({ content }) {
  const video = content?.videoTestimonialVideo;
  if (!video) return null;

  const poster = content?.videoTestimonialPoster || undefined;
  const eyebrow = content?.videoTestimonialEyebrow || "Client Testimonial";
  const heading = content?.videoTestimonialHeading || "Hear It From Our Client";
  const quote = content?.videoTestimonialQuote;
  const name = content?.videoTestimonialClientName;
  const role = content?.videoTestimonialClientRole;
  const highlights = (content?.videoTestimonialHighlights || []).filter((h) => h?.value || h?.label);

  return (
    <section className="relative overflow-x-clip text-white">
      <div className="reveal-sides mx-auto grid max-w-7xl gap-10 px-6 md:px-10 py-16 md:grid-cols-[auto_1fr] md:items-center md:gap-16 md:py-20">
        {/* Fixed height so a portrait (phone-recorded) video doesn't stretch
            the section tall; the column shrinks to the video's own width. */}
        <div className="flex justify-center">
          <video
            src={video}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="h-[360px] w-auto max-w-full rounded-3xl border border-white/10 bg-black object-contain md:h-[420px] md:max-w-[520px]"
          />
        </div>
        <div>
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {quote && <RichText as="p" text={`“${quote}”`} className="font-display mt-8 text-2xl leading-snug text-white md:text-3xl" />}
          {highlights.length > 0 && (
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs uppercase tracking-wider text-white/60">{h.label}</dt>
                  <dd className="font-display text-3xl text-white md:text-4xl">{h.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {(name || role) && (
            <p className="mt-8 border-t border-white/10 pt-6">
              {name && <span className="block text-base text-white">{name}</span>}
              {role && <span className="block text-sm text-white/60">{role}</span>}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
