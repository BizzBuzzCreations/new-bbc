import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Every public page reads its text/images/videos from the dashboard's
// database content. Pages are cached (ISR) so visitors get a fast response
// instead of a DB hit on every request. Dashboard saves call
// revalidatePath("/", "layout"), so edits still show up right away; the
// 60s revalidate is just a safety net.
export const revalidate = 60;

// .site — the rebuild's base (fonts, ink background, focus ring; see
// globals.css). The header is fixed and transparent: each page's first
// section leaves room for it (pt-28 / md:pt-36 on the heroes).
export default function MainLayout({ children }) {
  return (
    <div className="site min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
