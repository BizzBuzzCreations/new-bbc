import Image from "next/image";

// Zig-zag culture section — real BizzBuzz facts and real office/team
// photos already used elsewhere on the site (career page, homepage
// shuffle grid), not stock photography or another company's people/awards.
const DEFAULT_ROWS = [
  {
    title: "We Build With Real Ownership",
    body: "At BizzBuzz Creations, clear communication and accountability drive everything we do. Our digital marketing team in Prayagraj takes ownership from strategy to execution, turning ideas into marketing that creates real business impact.",
    img: "/image-2.jpg",
    imageSide: "right",
    imageSize: "large",
  },
  {
    title: "We Work As One Team",
    body: "Our teams work together across strategy, design, technology, SEO, and digital marketing. Based in Prayagraj, India, with an international outlook, we bring different skills together to build smarter digital solutions for businesses.",
    img: "/image-4.webp",
    imageSide: "left",
    imageSize: "small",
  },
  {
    title: "We Grow Together",
    body: "We believe great work comes from continuous learning and shared growth. Our team works on real campaigns, explores new digital strategies, and keeps developing the skills needed to deliver better marketing results for businesses in India and worldwide.",
    img: "/teamPic.webp",
    imageSide: "right",
    imageSize: "small",
  },
];

function TextPanel({ title, body }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0]/10 hover:shadow-xl hover:shadow-black/40">
      <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#40A2D8]">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed">{body}</p>
    </div>
  );
}

function Photo({ img, alt, size }) {
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-xl ${
        size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
      }`}
    >
      <Image src={img} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

export default function AboutCulture({ content }) {
  // imageSide/imageSize control layout, not content — kept in code and
  // matched positionally to whichever rows are saved.
  const LAYOUT = [
    { imageSide: "right", imageSize: "large" },
    { imageSide: "left", imageSize: "small" },
    { imageSide: "right", imageSize: "small" },
  ];
  const savedRows = content?.cultureRows?.length > 0 ? content.cultureRows : DEFAULT_ROWS;
  const ROWS = savedRows.map((row, i) => ({ ...row, ...LAYOUT[i % LAYOUT.length] }));

  return (
    <section className="bg-black py-20 px-5">
      <div className="max-w-6xl mx-auto space-y-10">
        {ROWS.map((row, i) => (
          <div key={i} className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {row.imageSide === "left" ? (
              <>
                <Photo img={row.img} alt={row.title} size={row.imageSize} />
                <TextPanel title={row.title} body={row.body} />
              </>
            ) : (
              <>
                <TextPanel title={row.title} body={row.body} />
                <Photo img={row.img} alt={row.title} size={row.imageSize} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
