"use client";

import {
  Headset,
  Wrench,
  MessageCircle,
  Mail,
  PhoneIncoming,
  PhoneOutgoing,
  Keyboard,
  FileText,
  UserCheck,
  CheckCircle2,
  Users,
  Settings,
} from "lucide-react";
import { RoleCard } from "@/components/sections/teamGrids";

// Icon components live here (inside a "use client" file) rather than
// being passed in as props from the page.js Server Component — a
// component/function reference can't cross the server-to-client boundary
// as a prop (React can't serialize it), which is what broke this the
// first time around with a "Functions cannot be passed directly to
// Client Components" error.
//
// The 12 role titles/icons below are the real roles on the BPO team;
// with 24 named people and no individual role assigned to each by name,
// each role is used for two people (cycled twice) rather than inventing
// new titles.
const BPO_ROLES = [
  { icon: Headset, role: "Customer Support Executive" },
  { icon: Wrench, role: "Technical Support Specialist" },
  { icon: MessageCircle, role: "Live Chat Support Agent" },
  { icon: Mail, role: "Email Support Executive" },
  { icon: PhoneIncoming, role: "Inbound Call Executive" },
  { icon: PhoneOutgoing, role: "Outbound Call Executive" },
  { icon: Keyboard, role: "Data Entry Specialist" },
  { icon: FileText, role: "Back Office Executive" },
  { icon: UserCheck, role: "Virtual Assistant" },
  { icon: CheckCircle2, role: "Quality Analyst" },
  { icon: Users, role: "Team Lead — Customer Support" },
  { icon: Settings, role: "Operations Coordinator" },
];

const BPO_NAMES = [
  "Abhishek Awasthi",
  "Akanksha Pandey",
  "Akash Singh",
  "Aswad Abbas",
  "Ardeen Khan",
  "Ashish Singh",
  "Anurag Singh Bisht",
  "Aryan Prakash Srivatava",
  "Digvijay Singh",
  "Harsh Singh",
  "Harshvardhan Tripathi",
  "Hritik Kesarwani",
  "Ishika Kesarwani",
  "Karan Agarhari",
  "Kanchi Singh",
  "Kushal Singh",
  "Karamjeet Kaur",
  "Kartikae Ojha",
  "Manasvi Gupta",
  "Monika Sharma",
  "Preet Yadav",
  "Shreya Dubey",
  "Sudhanshu Kumar Rai",
  "Ziauddin Khan",
];

const BPO_TEAM = BPO_NAMES.map((name, i) => ({
  name,
  ...BPO_ROLES[i % BPO_ROLES.length],
}));

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
