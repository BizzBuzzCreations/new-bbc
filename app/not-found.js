import Link from "next/link";
import NotFoundAnimation from "@/components/sections/notFoundAnimation";

export const metadata = {
  title: "Page Not Found | BizzBuzz Creations",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        background:
          "radial-gradient(130% 120% at 50% 35%, #ffffff 50%, #eef5ff 78%, #cfe3fb 100%)",
      }}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-6 text-center"
    >
      <NotFoundAnimation />
      <h2 className="mt-2 text-3xl font-bold text-slate-900 mb-2">Page Not Found!</h2>
      <p className="mb-6 text-slate-700">
        Oops! The page you&apos;re looking for doesn&apos;t exist. Don&apos;t
        worry, return to the home page.
      </p>
      <Link href="/" className="inline-block">
        <button className="relative cursor-pointer border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg overflow-hidden group">
          <span className="absolute inset-0 bg-slate-900 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
          <span className="relative z-10 group-hover:text-white">Return Home</span>
        </button>
      </Link>
    </div>
  );
}
