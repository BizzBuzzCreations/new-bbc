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
const BPO_TEAM = [
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

export default function BpoTeamGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {BPO_TEAM.map(({ icon: Icon, role }, i) => (
        <RoleCard key={i} icon={Icon} role={role} index={i} flip />
      ))}
    </div>
  );
}
