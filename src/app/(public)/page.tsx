import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CurrentAffairsSection from "@/components/home/CurrentAffairsSection";
import ResultsSection from "@/components/home/ResultsSection";
import FacultySection from "@/components/home/FacultySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CounsellingSection from "@/components/home/CounsellingSection";

export const metadata: Metadata = {
  title: "LexAscent — India's Premier CLAT & Law Entrance Preparation Platform",
  description:
    "Crack CLAT, AILET and other law entrance exams with LexAscent. Expert faculty, 1000+ mock tests, daily current affairs, and personalized mentorship for aspiring law students.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CoursesSection />
      <WhyUsSection />
      <CurrentAffairsSection />
      <ResultsSection />
      <FacultySection />
      <TestimonialsSection />
      <FAQSection />
      <CounsellingSection />
    </>
  );
}
