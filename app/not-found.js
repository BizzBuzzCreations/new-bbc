import Link from "next/link";
import Button from "@/components/brand/button";
import { SERVICE_LINES } from "@/lib/siteNav";

export const metadata = {
  title: "Page Not Found | BizzBuzz Creations",
  robots: { index: false, follow: false },
};

// 404: outside the site layout, so it carries its own .site base.
export default function NotFound() {
  return (
    <div className="site on-paper flex min-h-screen flex-col">
      <div className="wrap flex flex-1 flex-col justify-center py-24">
        <Link href="/" className="kicker text-(--mut) hover:text-(--fg)">
          BizzBuzz Creations
        </Link>
        <p className="font-display mt-10 text-[clamp(8rem,28vw,26rem)] leading-[0.78] tracking-[-0.07em]">404</p>
        <h1 className="font-display mt-10 max-w-2xl text-[clamp(2rem,4.4vw,4rem)] leading-[1] tracking-[-0.045em]">
          This page isn’t here <span className="text-current/55">any more.</span>
        </h1>
        <p className="mt-5 max-w-lg text-lg text-(--mut)">The link may be old or mistyped. These are good places to start:</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/" variant="solid" size="lg">Back to the homepage</Button>
          <Button href="/contact" variant="outline" size="lg">Talk to us</Button>
        </div>
        <ul className="mt-8 flex max-w-3xl flex-wrap gap-x-6 gap-y-3 border-t border-(--line) pt-6">
          {SERVICE_LINES.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="text-sm text-(--mut) transition-colors hover:text-(--fg)">{s.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
