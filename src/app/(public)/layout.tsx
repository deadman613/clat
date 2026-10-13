import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementStrip from "@/components/home/AnnouncementStrip";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnnouncementStrip />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
