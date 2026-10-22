"use client";

import { MotionConfig } from "framer-motion";

// Site-wide framer-motion setting: visitors who ask their device for
// reduced motion get every motion.* animation without the movement
// (transforms/layout jump straight to the end; opacity fades still run).
export default function MotionPreferences({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
