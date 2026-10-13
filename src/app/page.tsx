// Block 1 & 2 are in Navbar (announcement strip is separate)
// This file assembles all 12 homepage blocks

import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementStrip from "@/components/home/AnnouncementStrip";
import HeroSection from "@/components/home/HeroSection";
import AudienceSelector from "@/components/home/AudienceSelector";
import TrustStrip from "@/components/home/TrustStrip";
import CoursesSection from "@/components/home/CoursesSection";
import HowItWorks from "@/components/home/HowItWorks";
import ResultsSection from "@/components/home/ResultsSection";
import FacultySection from "@/components/home/FacultySection";
import NoticeBoard from "@/components/home/NoticeBoard";
import FAQSection from "@/components/home/FAQSection";
import CounsellingSection from "@/components/home/CounsellingSection";

export const metadata: Metadata = {
  title: "LexAscent — India's Premier CLAT & Law Entrance Preparation",
  description:
    "Crack CLAT and AILET with expert faculty, 1000+ mock tests, daily current affairs, and personalised mentorship. Join 50,000+ successful students.",
};

export default function HomePage() {
  return (
    <>
      {/* Block 1 — Announcement strip */}
      <AnnouncementStrip />

      {/* Block 1 — Header */}
      <Navbar />

      <main>
        {/* Block 2 — Hero */}
        <HeroSection />

        {/* Block 3 — Audience selector */}
        <AudienceSelector />

        {/* Block 4 — Trust strip */}
        <TrustStrip />

        {/* Block 5 — Courses */}
        <CoursesSection />

        {/* Block 6 — How preparation works */}
        <HowItWorks />

        {/* Block 7 — Results */}
        <ResultsSection />

        {/* Block 8 — Faculty */}
        <FacultySection />

        {/* Block 9 — Notice board + Articles */}
        <NoticeBoard />

        {/* Block 10 — FAQ */}
        <FAQSection />

        {/* Block 11 — Counselling form */}
        <CounsellingSection />
      </main>

      {/* Block 12 — Footer */}
      <Footer />
    </>
  );
}
