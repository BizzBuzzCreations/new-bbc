import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { ToastContainer, Bounce } from "react-toastify";
import BizzBeeWidget from "@/components/bizzbee/BizzBeeWidget";
import AllScripts from "@/components/sections/allScripts";
import MotionPreferences from "@/components/ui/motionPreferences";
import ScrollReveal from "@/components/sections/scrollReveal";

// Self-hosted (public/fonts) instead of next/font/google: the Google loader
// fetches fonts at build time, and the build server can't always reach
// fonts.googleapis.com — which fails the whole build.
const firaSans = localFont({
  src: [
    { path: "../public/fonts/fira-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/fira-sans-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/fira-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-fira",
  display: "swap",
});

// IBM Plex Sans is a variable font — one file covers weights 300–600.
const ibmPlexSans = localFont({
  src: [
    { path: "../public/fonts/ibm-plex-sans-var.woff2", weight: "300 600", style: "normal" },
  ],
  variable: "--font-ibm",
  display: "swap",
});

// The rebuild's type (DESIGN_DIRECTION.md §4), self-hosted from
// public/fonts (SIL Open Font License). Display + body are preloaded (they
// paint the first screen); the accent serif and the mono labels are not.
const bricolage = localFont({
  src: [{ path: "../public/fonts/bricolage-grotesque-var.woff2", weight: "200 800", style: "normal" }],
  variable: "--font-bricolage",
  display: "swap",
});
const instrumentSans = localFont({
  src: [{ path: "../public/fonts/instrument-sans-var.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-instrument",
  display: "swap",
});
const newsreader = localFont({
  src: [{ path: "../public/fonts/newsreader-400-italic.woff2", weight: "400", style: "italic" }],
  variable: "--font-newsreader",
  display: "swap",
  preload: false,
});
const dmMono = localFont({
  src: [
    { path: "../public/fonts/dm-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/dm-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-dm-mono",
  display: "swap",
  preload: false,
});

export const metadata = {
  metadataBase: new URL("https://bizzbuzzcreations.com"),
  title: "Best Digital Marketing Agency in India | BizzBuzz Creations",
  description:
    "Grow your business with BizzBuzz Creations – India’s top digital marketing and BPO company. We offer SEO, SMM, and lead generation services.",
  // Site-wide default for the small "site name" Google shows next to the
  // favicon in search results (og:site_name) — every page inherits this
  // unless its own generateMetadata sets its own `openGraph.siteName`.
  openGraph: {
    siteName: "Digital Marketing Agency",
  },
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "_yhFukoN21T2rvlGknRLEvX5T3XsCjcLC0ZdzHZjoFI",
    other: {
      "p:domain_verify": "1c0c103eb8cb2c0957033cb67af15017",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Dashboard uploads (hero images, blog covers, CTA images) are
            served from Cloudinary — on several pages the mobile LCP image.
            Opening that connection (DNS + TCP + TLS) while the HTML is still
            arriving, instead of after the <img> is found, takes it off the
            LCP. A plain tag, not ReactDOM.preconnect(): that becomes an HTTP
            Link header, which is dropped on cached (ISR) pages. */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <AllScripts />
      </head>
      <body
        className={`${firaSans.variable} ${ibmPlexSans.variable} ${bricolage.variable} ${instrumentSans.variable} ${newsreader.variable} ${dmMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* No Flowbite JS (was FlowbiteInit, running initFlowbite() on
            every page): nothing on the site uses a Flowbite JS component
            (no data-modal-toggle/data-dropdown-toggle etc.), so it was
            ~30KB of parse/execute per page for nothing. Flowbite's CSS
            (globals.css) is still used and stays. */}
        <MotionPreferences>
          <BizzBeeWidget />
          <ScrollReveal />
          <main id="main">{children}</main>
        </MotionPreferences>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
