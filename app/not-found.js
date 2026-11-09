import Link from "next/link";
import Button from "@/components/brand/button";
import SignalField from "@/components/brand/signalField";
import { SERVICE_LINES } from "@/lib/siteNav";

export const metadata = {
  title: "Page Not Found | BizzBuzz Creations",
  robots: { index: false, follow: false },
};

// 404 (rebuild): outside the site layout, so it carries its own .site base —
// the Signal Field behind a big 404, a plain sentence, and the ways back.
export default function NotFound() {
  return (
    <div className="site grain relative isolate flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SignalField />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_30%_50%,rgba(10,10,11,0.9),transparent)]" />
      <div className="wrap flex flex-1 flex-col justify-center py-24">
        <Link href="/" className="kicker text-fog hover:text-white">
          <span className="text-buzz">[BBC]</span> BizzBuzz Creations
        </Link>
        <p className="font-display mt-10 text-[clamp(7rem,24vw,22rem)] leading-[0.8] text-white">404</p>
        <h1 className="font-display mt-8 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] leading-[1] text-white">
          This page is just <span className="font-accent">noise.</span>
        </h1>
        <p className="mt-5 max-w-lg text-lg text-fog">The link may be old or mistyped. Here&rsquo;s where to find the signal:</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/" variant="solid" size="lg">
            Back to the homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Talk to us
          </Button>
        </div>
        <ul className="mt-14 flex max-w-3xl flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
          {SERVICE_LINES.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="text-sm text-fog transition-colors hover:text-buzz">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
