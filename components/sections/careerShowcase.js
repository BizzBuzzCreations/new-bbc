import Image from "next/image";
import { GraduationCap, Target, TrendingUp } from "lucide-react";

// "Why Work With Us" + "Join The Team" — real BizzBuzz office/team photos
// throughout (same assets already used in the homepage's shuffle grid and
// the About page), not stock photography or another company's people.
// Split into two exports so the page can place them on either side of
// the Open Positions section.
export function CareerWhyUs() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Roots in Prayagraj, India. An International Outlook.
          </h2>
          <p className="text-white/60 leading-relaxed">
            We&rsquo;re a growing agency with roots in Prayagraj, India, and
            clients across the world. From day one, you&rsquo;ll work on
            real challenges across digital marketing, technology, design,
            and strategy — building practical skills instead of simply
            following a checklist. We value people who stay curious, take
            initiative, share ideas, and want to keep getting better. Your
            growth matters here, because when our people grow, BizzBuzz
            Creations grows too.
          </p>
        </div>

        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/image-2.jpg"
            alt="Inside the BizzBuzz Creations office"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const JOIN_TEAM_POINTS = [
  {
    icon: GraduationCap,
    title: "Learn by Doing",
    desc: "Work on real campaigns and business challenges.",
  },
  {
    icon: Target,
    title: "Take Ownership",
    desc: "Bring ideas forward and take responsibility for your work.",
  },
  {
    icon: TrendingUp,
    title: "Keep Growing",
    desc: "Develop skills through hands-on experience and collaboration.",
  },
];

export function CareerJoinTeam() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Grow Beyond Your Job Description
          </h2>
          <p className="text-[#40A2D8] font-semibold mb-4">
            Your role here is a starting point, not a ceiling.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            At BizzBuzz Creations, growth isn&rsquo;t limited to a job
            title. You&rsquo;ll have opportunities to explore new skills,
            work across disciplines, take on responsibility, and discover
            where your strengths can take you.
          </p>

          <div className="space-y-5 mb-8">
            {JOIN_TEAM_POINTS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B60B0]/15 text-[#40A2D8] transition-all duration-300 group-hover:bg-[#0B60B0] group-hover:text-white group-hover:scale-110">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#open-positions"
            className="inline-flex items-center bg-[#0B60B0] hover:bg-black text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-300 w-fit"
          >
            Apply Now
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
            <Image
              src="/image-5.webp"
              alt="The BizzBuzz Creations team celebrating together"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
            <Image
              src="/image-4.webp"
              alt="The BizzBuzz Creations team at an office event"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
            <Image
              src="/teamPic.webp"
              alt="The BizzBuzz Creations team"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
