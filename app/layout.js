import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { ToastContainer, Bounce } from "react-toastify";
import FlowbiteInit from "@/components/sections/FlowbiteInit";
import BizzBeeWidget from "@/components/bizzbee/BizzBeeWidget";
import AllScripts from "@/components/sections/allScripts";
import ClickSpark from "@/components/ui/ClickSpark";
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

export const metadata = {
  metadataBase: new URL("https://bizzbuzzcreations.com"),
  title: "Best Digital Marketing Agency in India | Bizz Buzz Creations",
  description:
    "Grow your business with Bizz Buzz Creations – India’s top digital marketing and BPO company. We offer SEO, SMM, and lead generation services.",
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
        <AllScripts />
      </head>
      <body
        className={`${firaSans.variable} ${ibmPlexSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <BizzBeeWidget />
        <FlowbiteInit />
        <ScrollReveal />
        <main>{children}</main>
        <ClickSpark
          sparkColor="#40A2D8"
          sparkSize={10}
          sparkRadius={18}
          sparkCount={8}
          duration={450}
        />
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
