import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementStrip from "@/components/home/AnnouncementStrip";
import FigmaHomePage from "@/components/home/FigmaHomePage";

export const metadata: Metadata = {
  title: "Your Ambition. A Higher Calling. | LexAscent",
  description:
    "Thoughtful preparation for CLAT, AILET and a future in law. Build knowledge, judgement and confidence with LexAscent.",
};

export default function HomePage() {
  return (
    <>
      <AnnouncementStrip />
      <Navbar />
      <main>
        <FigmaHomePage />
      </main>
      <Footer />
    </>
  );
}
