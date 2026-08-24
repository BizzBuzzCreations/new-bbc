import {
  Award,
  Search,
  Layers,
  HeartHandshake,
  Headset,
  TrendingUp,
} from "lucide-react";

// icon/color stay code-driven (design), matched positionally to whichever
// items are saved — title/desc are the editable content.
const LAYOUT = [
  { icon: Award, color: "#334155" }, // slate-700
  { icon: Search, color: "#1e40af" }, // blue-800
  { icon: Layers, color: "#2563eb" }, // blue-600
  { icon: HeartHandshake, color: "#0284c7" }, // sky-600
  { icon: Headset, color: "#0ea5e9" }, // sky-500
  { icon: TrendingUp, color: "#06b6d4" }, // cyan-500
];

const DEFAULT_ITEMS = [
  { title: "Proven Track Record", desc: "90+ projects delivered across India with real, measurable business outcomes." },
  { title: "Future-Focused SEO", desc: "We optimize for traditional search, AI search, and voice assistants — all at once." },
  { title: "End-to-End Services", desc: "SEO, paid ads, content, social, and web design — everything under one roof." },
  { title: "Honest Partnerships", desc: "No inflated promises, just clear strategy, consistent effort, and steady growth." },
  { title: "Dedicated Account Support", desc: "You get a real team that knows your brand, not a ticket number." },
  { title: "Growing Client Base", desc: "50+ businesses across India already trust us with their growth." },
];

export default function TrustAdvantage({ content }) {
  const savedItems = content?.trustItems?.length > 0 ? content.trustItems : DEFAULT_ITEMS;
  const items = savedItems.map((item, i) => ({ ...item, ...LAYOUT[i % LAYOUT.length] }));

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-14">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="h-full flex flex-col items-center">
            <div
              className="z-10 -mb-12 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[6px] bg-white shadow-md"
              style={{ borderColor: item.color }}
            >
              <Icon size={30} style={{ color: item.color }} />
            </div>
            <div
              className="w-full flex-1 rounded-2xl pt-16 pb-6 px-4 text-center shadow-md"
              style={{ backgroundColor: item.color }}
            >
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
