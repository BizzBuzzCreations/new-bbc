// Kept for the components that still import "Pill": it is the rebuild's
// Button now (components/brand/button.js). "outline" / "solid" map 1:1.
import Button from "@/components/brand/button";

export default function Pill({ variant = "outline", ...props }) {
  return <Button variant={variant} {...props} />;
}
