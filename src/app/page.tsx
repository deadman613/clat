import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementStrip from "@/components/home/AnnouncementStrip";
import FigmaHomePage from "@/components/home/FigmaHomePage";
import { HOME_METADATA } from "@/lib/home-metadata";

export const metadata: Metadata = HOME_METADATA;

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
