import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CurrentAffairsClient from "./CurrentAffairsClient";

export const metadata: Metadata = {
  title: "Daily Current Affairs for CLAT 2025 — LexAscent",
  description:
    "Daily, weekly, and monthly current affairs for CLAT preparation. Legal news, national, international, economy, and more — with CLAT relevance analysis.",
};

export default function CurrentAffairsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CurrentAffairsClient />
      </main>
      <Footer />
    </>
  );
}
