"use client";

import { Search, PenTool, Palette, Code2, Terminal, Settings } from "lucide-react";
import { RoleCard } from "@/components/sections/teamGrids";

// Icon components live here (inside a "use client" file) rather than
// being passed in as props from the page.js Server Component — see
// bpoTeamGrid.js for why.
const RND_TEAM = [
  { icon: Search, name: "Md. Shaquib", role: "SEO Specialist" },
  { icon: PenTool, name: "Khushi Gupta", role: "Content Writer & SEO Executive" },
  { icon: Palette, name: "Mudit Srivastava", role: "Graphic Designer & Video Editor" },
  { icon: Code2, name: "Kushmal Arora", role: "Full Stack Developer" },
  { icon: Terminal, name: "Shashwat Upadhayay", role: "DevOps Engineer" },
  { icon: Settings, name: "Tejash Yadav", role: "DevOps Engineer" },
];

export default function RndTeamGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {RND_TEAM.map(({ icon: Icon, name, role }, i) => (
        <RoleCard
          key={i}
          icon={Icon}
          name={name}
          role={role}
          index={i}
          size="xl"
          showInstagram={false}
          flip
        />
      ))}
    </div>
  );
}
