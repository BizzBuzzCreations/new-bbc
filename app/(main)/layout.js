import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Every public page reads its text/images/videos from the dashboard's
// database content. Pages are cached (ISR) so visitors get a fast response
// instead of a DB hit on every request. Dashboard saves call
// revalidatePath("/", "layout"), so edits still show up right away; the
// 60s revalidate is just a safety net.
export const revalidate = 60;

// .site / .on-paper: the paper surface and Geist (globals.css). The header is
// fixed and transparent over each page's first section, which leaves room for
// it at the top (pt-32 / md:pt-44).
export default function MainLayout({ children }) {
  return (
    <div className="site on-paper min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
