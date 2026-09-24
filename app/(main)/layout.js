import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Every public page reads its text/images/videos from the dashboard's
// database content. Render on each request so a dashboard save shows up
// on the live site immediately, instead of depending on a cached static
// copy being revalidated (which kept serving stale content in production).
export const dynamic = "force-dynamic";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
