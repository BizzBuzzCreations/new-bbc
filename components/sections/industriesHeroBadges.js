"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Gamepad2,
  UtensilsCrossed,
  PiggyBank,
  GraduationCap,
  Home as HomeIcon,
  Plane,
  Dumbbell,
} from "lucide-react";

// A scattered cluster of real industries we serve (not fabricated client
// logos) — each badge floats gently and independently, staggered by
// index, so the whole cluster feels alive rather than static.
const BADGES = [
  { icon: Stethoscope, label: "Healthcare", bg: "#0B60B0", top: "2%", left: "8%", size: 112 },
  { icon: Gamepad2, label: "Gaming", bg: "#4c2f91", top: "6%", left: "68%", size: 100 },
  { icon: UtensilsCrossed, label: "Restaurant", bg: "#b0490b", top: "38%", left: "34%", size: 108 },
  { icon: PiggyBank, label: "Finance", bg: "#0f766e", top: "44%", left: "80%", size: 92 },
  { icon: GraduationCap, label: "Education", bg: "#a21caf", top: "68%", left: "6%", size: 96 },
  { icon: HomeIcon, label: "Real Estate", bg: "#15803d", top: "76%", left: "58%", size: 104 },
  { icon: Plane, label: "Travel", bg: "#4338ca", top: "20%", left: "42%", size: 84 },
  { icon: Dumbbell, label: "Fitness", bg: "#b45309", top: "62%", left: "82%", size: 84 },
];

export default function IndustriesHeroBadges() {
  return (
    <div className="relative hidden lg:block h-[420px] w-full">
      {BADGES.map((b, i) => {
        const Icon = b.icon;
        return (
          <motion.div
            key={b.label}
            className="absolute flex flex-col items-center justify-center gap-1.5 rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-300"
            style={{
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              background: b.bg,
            }}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            <Icon size={b.size * 0.28} className="text-white" />
            <span
              className="font-bold text-white text-center px-1"
              style={{ fontSize: b.size * 0.115 }}
            >
              {b.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
