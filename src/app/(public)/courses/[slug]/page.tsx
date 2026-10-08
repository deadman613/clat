import { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailClient from "./CourseDetailClient";

// Static course data for SSG
const courseData: Record<string, any> = {
  "clat-foundation": {
    slug: "clat-foundation",
    name: "CLAT Foundation",
    tagline: "For Students Starting Early — Class 11 & 12",
    description:
      "Our CLAT Foundation course is a comprehensive 24-month program designed for Class 11 and 12 students who want to start their CLAT preparation early and build a rock-solid foundation across all subjects.",
    duration: "24 Months",
    classes: 350,
    recorded: 500,
    mocks: 150,
    studyMaterial: true,
    mentorship: true,
    price: 89999,
    discountPrice: 64999,
    type: "CLAT",
    color: "from-blue-600 to-blue-800",
    overview: [
      "Comprehensive coverage of all CLAT sections: Legal Reasoning, Logical Reasoning, English, Quantitative Techniques, and Current Affairs",
      "Regular doubt clearing sessions with expert faculty",
      "Weekly assessment tests and performance tracking",
      "Parent-teacher meets to track student progress",
      "Scholarship opportunities for meritorious students",
    ],
    curriculum: [
      {
        phase: "Phase 1 — Foundation (Months 1-8)",
        topics: [
          "English Language — Grammar, Vocabulary, Reading Comprehension Basics",
          "Logical Reasoning — Basic reasoning patterns, Syllogisms, Series",
          "Quantitative Techniques — Basic Maths, Percentage, Ratio",
          "Legal Reasoning — Introduction to Law, Constitution basics",
          "Current Affairs — Building reading habit, newspaper analysis",
        ],
      },
      {
        phase: "Phase 2 — Development (Months 9-16)",
        topics: [
          "English — Advanced RC passages, Critical Reasoning",
          "Logical Reasoning — Complex patterns, Assumption-Premise-Conclusion",
          "Quantitative — Data Interpretation, Advanced Arithmetic",
          "Legal Reasoning — Legal principles, Case studies",
          "Current Affairs — Monthly compilations, Legal news",
        ],
      },
      {
        phase: "Phase 3 — Mastery & Tests (Months 17-24)",
        topics: [
          "Full-length mock tests — 1 per week",
          "Sectional tests and analysis",
          "Previous year paper discussions",
          "Speed improvement techniques",
          "Final revision and strategy sessions",
        ],
      },
    ],
    whoShouldJoin: [
      "Class 11 students who want a head start on CLAT preparation",
      "Class 12 students targeting CLAT 2025/2026",
      "Students aiming for top 50 NLU ranks",
      "Students who prefer a systematic, structured approach",
    ],
    faculty: [
      { name: "Dr. Anjali Sharma", subject: "Legal Reasoning", initials: "AS", color: "from-blue-500 to-blue-700" },
      { name: "Prof. Rohan Khanna", subject: "Logical Reasoning", initials: "RK", color: "from-emerald-500 to-teal-600" },
      { name: "Ms. Preethi Rajan", subject: "English Language", initials: "PR", color: "from-violet-500 to-purple-700" },
    ],
    faqs: [
      { q: "When should I start the Foundation course?", a: "Ideally at the beginning of Class 11 (June-July). This gives you the maximum time to build a strong foundation and attempt 2 CLAT cycles." },
      { q: "Are the classes live or recorded?", a: "Both! All classes are conducted live and automatically recorded for revision. You get access to both live sessions and recorded library." },
      { q: "Is there a trial class available?", a: "Yes, we offer a free demo class. Contact us or visit your nearest center to attend a demo." },
    ],
    nextBatch: "January 2025",
    batchTimings: "Monday to Friday — 6:00 PM to 8:00 PM IST",
  },
  "clat-dropper": {
    slug: "clat-dropper",
    name: "CLAT Dropper",
    tagline: "For Repeat Aspirants — Bounce Back Stronger",
    description:
      "Specifically designed for students who have previously attempted CLAT and are targeting a better rank. We analyze your previous performance and create a personalized strategy.",
    duration: "12 Months",
    classes: 280,
    recorded: 400,
    mocks: 120,
    studyMaterial: true,
    mentorship: true,
    price: 74999,
    discountPrice: 54999,
    type: "CLAT",
    color: "from-emerald-600 to-teal-700",
    overview: [
      "Personalized weakness analysis based on previous CLAT attempt",
      "Targeted practice on weak areas",
      "Advanced test-taking strategy for dropper students",
      "Mental strength and consistency coaching",
      "Regular performance benchmarking",
    ],
    curriculum: [
      { phase: "Phase 1 — Analysis & Strategy (Months 1-2)", topics: ["Previous attempt analysis", "Personalized study plan", "Target setting", "Baseline assessment tests"] },
      { phase: "Phase 2 — Intensive Practice (Months 3-9)", topics: ["Focused subject improvement", "500+ practice questions per subject", "Weekly full-length mocks", "Concept revision classes"] },
      { phase: "Phase 3 — Mock Test Marathon (Months 10-12)", topics: ["2 full-length mocks per week", "Paper analysis sessions", "Speed and accuracy improvement", "Final strategy sessions"] },
    ],
    whoShouldJoin: ["Students who appeared in CLAT but want a better rank", "Students targeting top 50 NLUs", "Students who need a structured study environment"],
    faculty: [
      { name: "Dr. Anjali Sharma", subject: "Legal Reasoning", initials: "AS", color: "from-blue-500 to-blue-700" },
      { name: "Prof. Rohan Khanna", subject: "Logical Reasoning", initials: "RK", color: "from-emerald-500 to-teal-600" },
    ],
    faqs: [
      { q: "What if I've already appeared in CLAT twice?", a: "No problem! We welcome all repeat aspirants. Our dropper batch is designed for up to 3rd attempt aspirants as well." },
      { q: "How is this different from the Foundation course?", a: "The Dropper batch assumes you already know the basics. We focus on refinement, exam strategy, and advanced level practice." },
    ],
    nextBatch: "February 2025",
    batchTimings: "Monday to Saturday — 7:00 AM to 9:00 AM IST",
  },
  "clat-crash-course": {
    slug: "clat-crash-course",
    name: "CLAT Crash Course",
    tagline: "Intensive Last-Mile CLAT Preparation",
    description: "3-month intensive course for students who want to revise and strengthen their preparation right before CLAT.",
    duration: "3 Months",
    classes: 90,
    recorded: 150,
    mocks: 60,
    studyMaterial: true,
    mentorship: false,
    price: 29999,
    discountPrice: 19999,
    type: "CLAT",
    color: "from-orange-500 to-red-600",
    overview: ["Rapid revision of all CLAT topics", "Daily mock tests", "Expert exam strategy sessions", "Current affairs speed revision"],
    curriculum: [
      { phase: "Month 1 — Rapid Revision", topics: ["All 5 subjects — rapid revision", "Short notes and formula sheets", "Baseline mock test"] },
      { phase: "Month 2 — Intensive Practice", topics: ["Daily sectional tests", "Current affairs marathon", "Legal reasoning intensive"] },
      { phase: "Month 3 — Mock Test Marathon", topics: ["Daily full-length mocks", "Paper analysis", "Final strategy session"] },
    ],
    whoShouldJoin: ["Students with 3 months remaining for CLAT", "Students who have completed basic preparation", "Students needing intensive practice"],
    faculty: [
      { name: "Dr. Anjali Sharma", subject: "Legal Reasoning", initials: "AS", color: "from-blue-500 to-blue-700" },
      { name: "Mr. Siddharth Rao", subject: "Current Affairs", initials: "SR", color: "from-amber-500 to-orange-600" },
    ],
    faqs: [
      { q: "Is this course enough if I haven't prepared at all?", a: "The Crash Course is designed for students who have basic preparation. If you're starting from scratch, we recommend the Foundation or Dropper batch." },
    ],
    nextBatch: "November 2024",
    batchTimings: "Monday to Sunday — 8:00 AM to 12:00 PM IST (Intensive)",
  },
  "clat-power-batch": {
    slug: "clat-power-batch",
    name: "CLAT Power Batch",
    tagline: "Premium Preparation — Top 25 Rank Guaranteed Strategy",
    description: "Our most premium program with small batch size (max 30 students), personalized attention, and a track record of producing top 50 rankers every year.",
    duration: "15 Months",
    classes: 400,
    recorded: 600,
    mocks: 200,
    studyMaterial: true,
    mentorship: true,
    price: 119999,
    discountPrice: 89999,
    type: "CLAT",
    color: "from-violet-600 to-purple-800",
    overview: ["Small batch size — maximum 30 students", "Weekly 1-on-1 mentorship sessions", "Unlimited doubt clearing", "Advanced legal reasoning workshops", "NLU alumni interaction sessions"],
    curriculum: [
      { phase: "Phase 1 — Elite Foundation (Months 1-5)", topics: ["Deep-dive into all CLAT subjects", "Building analytical skills", "Legal case study workshops", "Weekly assessments"] },
      { phase: "Phase 2 — Advanced Practice (Months 6-12)", topics: ["Advanced reasoning patterns", "Paragraph-based questions mastery", "Current affairs analysis", "Bi-weekly full-length mocks"] },
      { phase: "Phase 3 — Mastery Sprint (Months 13-15)", topics: ["Daily mock tests", "Paper discussion sessions", "Rank prediction", "Final strategy"] },
    ],
    whoShouldJoin: ["Students targeting top 25 ranks in CLAT", "Students wanting personalized attention", "Students with high aspirations and dedication"],
    faculty: [
      { name: "Dr. Anjali Sharma", subject: "Legal Reasoning", initials: "AS", color: "from-blue-500 to-blue-700" },
      { name: "Prof. Rohan Khanna", subject: "Logical Reasoning", initials: "RK", color: "from-emerald-500 to-teal-600" },
      { name: "Ms. Preethi Rajan", subject: "English Language", initials: "PR", color: "from-violet-500 to-purple-700" },
      { name: "Mr. Siddharth Rao", subject: "Current Affairs", initials: "SR", color: "from-amber-500 to-orange-600" },
    ],
    faqs: [
      { q: "What makes Power Batch different from Foundation?", a: "Power Batch has smaller class sizes (max 30), weekly 1-on-1 mentor sessions, more advanced content, and a higher mock test frequency." },
    ],
    nextBatch: "January 2025",
    batchTimings: "Monday to Saturday — 5:00 PM to 8:00 PM IST",
  },
  "ailet-preparation": {
    slug: "ailet-preparation",
    name: "AILET Preparation",
    tagline: "Dedicated Coaching for NLU Delhi Admission",
    description: "Specialized program focused entirely on AILET — one of the most prestigious law entrance examinations in India for admission to National Law University, Delhi.",
    duration: "10 Months",
    classes: 200,
    recorded: 250,
    mocks: 80,
    studyMaterial: true,
    mentorship: true,
    price: 59999,
    discountPrice: 44999,
    type: "AILET",
    color: "from-rose-600 to-pink-700",
    overview: ["AILET-specific exam pattern and strategy", "Focus on AILET's unique question types", "Previous year AILET paper analysis", "NLU Delhi specific preparation tips"],
    curriculum: [
      { phase: "Phase 1 — AILET Pattern Mastery (Months 1-4)", topics: ["AILET vs CLAT differences", "English proficiency (AILET style)", "Legal Aptitude (AILET style)", "GK — NLU Delhi specifics"] },
      { phase: "Phase 2 — Intensive Practice (Months 5-9)", topics: ["Weekly AILET mock tests", "Previous year analysis", "Speed improvement"] },
      { phase: "Phase 3 — Final Sprint (Month 10)", topics: ["Daily mocks", "AILET strategy", "Final revision"] },
    ],
    whoShouldJoin: ["Students targeting NLU Delhi specifically", "Students already preparing for CLAT who want AILET advantage", "Students targeting India's #1 law school"],
    faculty: [
      { name: "Dr. Anjali Sharma", subject: "Legal Aptitude", initials: "AS", color: "from-blue-500 to-blue-700" },
      { name: "Ms. Preethi Rajan", subject: "English Language", initials: "PR", color: "from-violet-500 to-purple-700" },
    ],
    faqs: [
      { q: "Do I need to separately prepare for CLAT if I take AILET course?", a: "Yes, AILET preparation alone won't fully prepare you for CLAT. We recommend the CLAT + AILET Combo if targeting both." },
    ],
    nextBatch: "January 2025",
    batchTimings: "Tuesday, Thursday, Saturday — 6:00 PM to 9:00 PM IST",
  },
  "clat-ailet-combo": {
    slug: "clat-ailet-combo",
    name: "CLAT + AILET Combo",
    tagline: "Comprehensive Coverage for Both Exams",
    description: "The ultimate law entrance preparation package covering both CLAT and AILET comprehensively. Best value for students targeting multiple top NLUs.",
    duration: "18 Months",
    classes: 450,
    recorded: 700,
    mocks: 250,
    studyMaterial: true,
    mentorship: true,
    price: 149999,
    discountPrice: 109999,
    type: "Both",
    color: "from-amber-600 to-orange-700",
    overview: ["Complete CLAT + AILET coverage", "Exam-specific mock tests for both", "Combined current affairs preparation", "AILET-specific modules integrated into CLAT prep"],
    curriculum: [
      { phase: "Phase 1 — Foundation (Months 1-6)", topics: ["Common foundation for both exams", "Baseline tests for CLAT & AILET"] },
      { phase: "Phase 2 — Development (Months 7-14)", topics: ["CLAT advanced preparation", "AILET-specific modules", "Combined mock tests"] },
      { phase: "Phase 3 — Final Sprint (Months 15-18)", topics: ["AILET mocks (Nov-Dec)", "CLAT mocks (Dec-Jan)", "Dual exam strategy"] },
    ],
    whoShouldJoin: ["Students targeting both NLU Delhi and other NLUs", "Students wanting maximum options", "Students who believe in comprehensive preparation"],
    faculty: [
      { name: "Dr. Anjali Sharma", subject: "Legal Reasoning", initials: "AS", color: "from-blue-500 to-blue-700" },
      { name: "Prof. Rohan Khanna", subject: "Logical Reasoning", initials: "RK", color: "from-emerald-500 to-teal-600" },
      { name: "Ms. Preethi Rajan", subject: "English Language", initials: "PR", color: "from-violet-500 to-purple-700" },
      { name: "Mr. Siddharth Rao", subject: "Current Affairs", initials: "SR", color: "from-amber-500 to-orange-600" },
    ],
    faqs: [
      { q: "Is it better to take Combo or separate courses?", a: "The Combo is always better value — you save ₹40,000 compared to buying separately, and the curriculum is integrated for efficiency." },
    ],
    nextBatch: "January 2025",
    batchTimings: "Monday to Saturday — 5:00 PM to 8:30 PM IST",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courseData[slug];
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.name} — LexAscent`,
    description: course.description,
  };
}

export function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({ slug }));
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courseData[slug];

  if (!course) notFound();

  return <CourseDetailClient course={course} />;
}
