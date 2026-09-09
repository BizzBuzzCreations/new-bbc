"use client";

import {
  Headset,
  Users,
  Award,
  ShieldCheck,
  Target,
} from "lucide-react";
import { RoleCard } from "@/components/sections/teamGrids";

// Icon components live here (inside a "use client" file) rather than
// being passed in as props from the page.js Server Component — a
// component/function reference can't cross the server-to-client boundary
// as a prop (React can't serialize it), which is what broke this the
// first time around with a "Functions cannot be passed directly to
// Client Components" error.
//
// The real 18-person BPO roster, each with their actual role (not a
// cycled generic title) — replaces the previous 24-name placeholder list.
const ROLE_ICONS = {
  "Customer Support Executive": Headset,
  Advisor: Users,
  "Senior Advisor": Award,
  "Compliance Manager": ShieldCheck,
  "Strategy Manager": Target,
};

const BPO_TEAM = [
  { name: "Abhishek Awasthi", role: "Customer Support Executive" },
  { name: "Akanksha Pandey", role: "Senior Advisor" },
  { name: "Akash Singh", role: "Advisor" },
  { name: "Anurag Singh Bisht", role: "Advisor" },
  { name: "Aryan Prakash Srivastava", role: "Senior Advisor" },
  { name: "Digvijay Singh", role: "Advisor" },
  { name: "Harsh Singh", role: "Advisor" },
  { name: "Harshvardhan Tripathi", role: "Advisor" },
  { name: "Hritik Kesarwani", role: "Advisor" },
  { name: "Ishika Kesarwani", role: "Compliance Manager" },
  { name: "Karan Agarhari", role: "Advisor" },
  { name: "Kanchi Singh", role: "Advisor" },
  { name: "Kushal Singh", role: "Senior Advisor" },
  { name: "Kartikae Ojha", role: "Strategy Manager" },
  { name: "Manasvi Gupta", role: "Advisor" },
  { name: "Monika Sharma", role: "Advisor" },
  { name: "Shreya Dubey", role: "Advisor" },
  { name: "Ziauddin Khan", role: "Advisor" },
].map((person) => ({ ...person, icon: ROLE_ICONS[person.role] }));

export default function BpoTeamGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {BPO_TEAM.map(({ icon: Icon, name, role }, i) => (
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
