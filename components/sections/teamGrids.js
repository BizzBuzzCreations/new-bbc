"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Crown,
  Users,
  Search,
  Megaphone,
  Palette,
  Code2,
  Bot,
  Briefcase,
  Target,
  Headset,
  FlaskConical,
} from "lucide-react";

// Role-based structure rather than invented individual profiles with
// stock photos — the real people behind each role can be swapped in as
// the roster is finalized, without presenting placeholder faces as if
// they were real employees.
const FOUNDERS = [
  { icon: Crown, name: "Abheuday Mishra", role: "Founder & CEO" },
  { icon: Users, name: "Utkarsh Mishra", role: "Co-Founder & Director" },
];

const LEADERS = [
  { icon: Search, role: "Head of SEO & Growth", dept: "SEO" },
  { icon: Megaphone, role: "Paid Media Lead", dept: "Paid Ads" },
  { icon: Palette, role: "Creative & Brand Director", dept: "Creative" },
  { icon: Code2, role: "Web Development Lead", dept: "Engineering" },
  { icon: Bot, role: "AI & Automation Lead", dept: "AI & Automation" },
  { icon: Briefcase, role: "Business Consultancy Lead", dept: "Consultancy" },
];

// Real BizzBuzz team photos (same assets already used elsewhere on the
// site — the hero and the About page's "Our Story" section), not
// fabricated department photos.
const TEAM_GROUPS = [
  {
    title: "Meet Our BPO Team",
    tagline: "The People Keeping Every Customer Interaction Moving",
    desc: "Our BPO team handles customer support, lead follow-ups, communication, and day-to-day customer interactions, helping businesses stay responsive while creating smoother experiences for their customers.",
    image: "/teamPic.webp",
    imageAlt: "The BizzBuzz Creations BPO team",
  },
  {
    title: "Meet Our R&D Team",
    tagline: "Exploring What’s Next in Digital",
    desc: "Our R&D team researches and tests emerging technologies across AI search, SEO, automation, digital tools, and evolving search behaviour. Their work helps us turn new developments into practical strategies and smarter solutions for the businesses we serve.",
    image: "/banner.png",
    imageAlt: "The BizzBuzz Creations R&D team",
  },
];

const TEAM_SPECIALTIES = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Our marketing specialists combine SEO, paid advertising, social media, content, and campaign strategy to help businesses reach the right audiences and create measurable digital growth.",
  },
  {
    icon: Palette,
    title: "Creative",
    desc: "Our creative team brings together branding, graphic design, visual content, and creative campaigns to help businesses communicate clearly, build recognition, and create memorable digital experiences.",
  },
  {
    icon: Code2,
    title: "Technology",
    desc: "Our technology specialists work across web development, website optimisation, integrations, and digital solutions, creating reliable digital experiences designed around business and customer needs.",
  },
  {
    icon: Target,
    title: "Strategy",
    desc: "Our strategists connect research, analytics, positioning, planning, and business goals to create focused digital roadmaps that give every campaign and digital initiative a clear direction.",
  },
  {
    icon: Headset,
    title: "BPO & Support",
    desc: "Our BPO and support specialists manage customer communication, lead follow-ups, support operations, and day-to-day interactions, helping businesses deliver responsive and consistent customer experiences.",
  },
  {
    icon: FlaskConical,
    title: "R&D",
    desc: "Our R&D specialists explore AI search, automation, emerging technologies, and evolving digital trends to help our teams discover smarter approaches and prepare businesses for what's next.",
  },
];

const WHY_IT_WORKS = [
  {
    title: "No Handoffs",
    desc: "Every project moves through one connected team, not separate vendors passing work between each other — so nothing gets lost in translation.",
  },
  {
    title: "Decisions Backed by Data",
    desc: "Every recommendation — creative, technical, or strategic — is grounded in real performance data, not opinion or trend-chasing.",
  },
  {
    title: "Built to Last, Not Just Launch",
    desc: "We design systems and strategies meant to keep working long after launch — not quick wins that fade once the campaign ends.",
  },
  {
    title: "Full Accountability",
    desc: "Because the work stays in-house, one team owns the outcome end to end — no outsourced pieces to point fingers at when something needs fixing.",
  },
];

const fadeUp = (i) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
});

function RoleCard({ icon: Icon, name, role, dept, index, size = "normal" }) {
  const isXl = size === "xl";
  const isLarge = size === "large" || isXl;
  return (
    <motion.div
      {...fadeUp(index)}
      className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
    >
      <div
        className={`${isLarge ? "aspect-[4/3]" : "aspect-square"} flex items-center justify-center bg-white/5`}
      >
        <div
          className={`flex items-center justify-center rounded-full bg-white/10 text-[#40A2D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0B60B0] group-hover:text-white ${
            isXl ? "w-28 h-28" : isLarge ? "w-20 h-20" : "w-16 h-16"
          }`}
        >
          <Icon size={isXl ? 48 : isLarge ? 34 : 28} />
        </div>
      </div>
      <div className={isXl ? "p-6" : "p-4"}>
        {dept && (
          <p className={`font-bold uppercase tracking-wide text-[#40A2D8] mb-1 ${isXl ? "text-sm" : "text-xs"}`}>
            {dept}
          </p>
        )}
        {name && (
          <h3 className={`font-bold text-white leading-snug ${isXl ? "text-xl mb-1" : "text-sm"}`}>
            {name}
          </h3>
        )}
        <p className={`text-white/60 leading-snug ${isXl ? "text-base" : "font-bold text-white text-sm"}`}>
          {role}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamGrids() {
  return (
    <>
      {/* Founders */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Meet the Founders
            </h2>
            <h3 className="text-lg font-semibold text-[#40A2D8] mb-4">
              The Minds Behind BizzBuzz Creations
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              BizzBuzz Creations was built on a simple belief: digital
              marketing should connect creativity with measurable business
              outcomes. Our founders combine entrepreneurial thinking,
              marketing expertise, and a long-term vision to build solutions
              that help businesses grow with clarity and confidence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-8">
            {FOUNDERS.map((f, i) => (
              <RoleCard key={f.role} {...f} index={i} size="xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Our Leaders */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Meet Our Leadership Team
            </h2>
            <h3 className="text-lg font-semibold text-[#40A2D8] mb-4">
              The People Driving Strategy, Growth &amp; Execution
            </h3>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
              Our leadership team brings together expertise across digital
              marketing, technology, business strategy, and operations. They
              stay closely involved in the work, guide our teams, and help
              turn business objectives into focused strategies and effective
              digital solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERS.map((l, i) => (
              <RoleCard key={l.role} {...l} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team — BPO & R&D, alternating photo side */}
      <section id="meet-our-team" className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-white mb-14 text-center"
          >
            Meet Our Team
          </motion.h2>

          <div className="space-y-16">
            {TEAM_GROUPS.map((group, i) => {
              const imageFirst = i % 2 === 1;
              return (
                <div
                  key={group.title}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <motion.div
                    {...fadeUp(i)}
                    className={imageFirst ? "md:order-2" : ""}
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {group.title}
                    </h2>
                    <h3 className="text-base md:text-lg font-semibold text-[#40A2D8] mb-4">
                      {group.tagline}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {group.desc}
                    </p>
                  </motion.div>

                  <motion.div
                    {...fadeUp(i + 1)}
                    className={`relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg ${
                      imageFirst ? "md:order-1" : ""
                    }`}
                  >
                    <Image
                      src={group.image}
                      alt={group.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Each Team Brings — the specialities across all our teams */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What Each Team Brings
            </h2>
            <h3 className="text-lg font-semibold text-[#40A2D8]">
              One Team. Multiple Specialities.
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_SPECIALTIES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i)}
                className="group text-left rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0] group-hover:scale-110">
                  <Icon size={22} />
                </span>
                <h4 className="font-bold text-white mb-2">{title}</h4>
                <p className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Together — auto-scrolling right-to-left marquee,
          paused on hover; the list is duplicated once so the loop is
          seamless at exactly -50%. */}
      <section className="bg-black py-20 overflow-hidden border-t border-white/10">
        <motion.h2
          {...fadeUp(0)}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-14 px-6"
        >
          Why It Works Together
        </motion.h2>

        <div className="overflow-hidden">
          <div
            className="flex w-max gap-6 animate-[marquee-rtl_28s_linear_infinite] hover:[animation-play-state:paused]"
          >
            {[...WHY_IT_WORKS, ...WHY_IT_WORKS].map(({ title, desc }, i) => (
              <div
                key={i}
                className="group shrink-0 w-[320px] rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40"
              >
                <h3 className="font-bold text-white mb-2 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
