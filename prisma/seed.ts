import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ── Site Stats ──────────────────────────────────────────────
  await prisma.siteStat.upsert({ where: { key: "years_experience" }, update: {}, create: { key: "years_experience", value: "30+", label: "Years of Excellence", icon: "trophy", sortOrder: 1 } });
  await prisma.siteStat.upsert({ where: { key: "students_trained" }, update: {}, create: { key: "students_trained", value: "50000+", label: "Students Trained", icon: "users", sortOrder: 2 } });
  await prisma.siteStat.upsert({ where: { key: "selection_rate" }, update: {}, create: { key: "selection_rate", value: "95%", label: "Selection Rate", icon: "target", sortOrder: 3 } });
  await prisma.siteStat.upsert({ where: { key: "top_10_ranks" }, update: {}, create: { key: "top_10_ranks", value: "6+", label: "Top 10 Ranks (2024)", icon: "medal", sortOrder: 4 } });

  console.log("✅ Site stats seeded");

  // ── Faculty ──────────────────────────────────────────────────
  const faculty1 = await prisma.faculty.upsert({
    where: { id: "faculty-anjali-sharma" },
    update: {},
    create: {
      id: "faculty-anjali-sharma",
      name: "Dr. Anjali Sharma",
      subject: "Legal Reasoning & Constitutional Law",
      qualification: "LLM, NLU Delhi | PhD (Constitutional Law)",
      experience: 12,
      bio: "Former Research Fellow at the Supreme Court of India. Ex-faculty at NLSIU Bangalore. Expert in Constitutional Law and Legal Reasoning for competitive examinations.",
      nluBackground: "NLU Delhi Alumni",
      sortOrder: 1,
    },
  });

  const faculty2 = await prisma.faculty.upsert({
    where: { id: "faculty-rohan-khanna" },
    update: {},
    create: {
      id: "faculty-rohan-khanna",
      name: "Prof. Rohan Khanna",
      subject: "Logical Reasoning",
      qualification: "BA LLB (Hons), NALSAR | MA Philosophy, JNU",
      experience: 9,
      bio: "Known for simplifying complex reasoning patterns. Creator of the NALSAR Reasoning Method. 3,000+ students trained.",
      nluBackground: "NALSAR Alumni",
      sortOrder: 2,
    },
  });

  const faculty3 = await prisma.faculty.upsert({
    where: { id: "faculty-preethi-rajan" },
    update: {},
    create: {
      id: "faculty-preethi-rajan",
      name: "Ms. Preethi Rajan",
      subject: "English Language & Reading Comprehension",
      qualification: "MA English, Delhi University | CELTA Cambridge",
      experience: 11,
      bio: "Author of 'Legal English for Law Aspirants'. Specialist in teaching English comprehension for competitive examinations.",
      nluBackground: "Delhi University",
      sortOrder: 3,
    },
  });

  const faculty4 = await prisma.faculty.upsert({
    where: { id: "faculty-siddharth-rao" },
    update: {},
    create: {
      id: "faculty-siddharth-rao",
      name: "Mr. Siddharth Rao",
      subject: "Current Affairs & GK",
      qualification: "BA LLB (Hons), NUJS | MA Political Science",
      experience: 8,
      bio: "Ex-journalist who brings real-world current affairs expertise. Predicted 85% of CLAT 2024 CA questions.",
      nluBackground: "NUJS Alumni",
      sortOrder: 4,
    },
  });

  console.log("✅ Faculty seeded");

  // ── Courses ──────────────────────────────────────────────────
  const foundationCourse = await prisma.course.upsert({
    where: { slug: "clat-foundation" },
    update: {},
    create: {
      slug: "clat-foundation",
      name: "CLAT Foundation",
      shortDescription: "Comprehensive 2-year program for Class 11 & 12 students",
      description: "Our flagship Foundation course covers all CLAT subjects systematically over 24 months, building a rock-solid preparation base for Class 11 and 12 students.",
      category: "FOUNDATION",
      type: "CLAT",
      mode: "ONLINE",
      duration: "24 Months",
      totalClasses: 350,
      recordedLectures: 500,
      mockTests: 150,
      studyMaterial: true,
      mentorship: false,
      price: 89999,
      discountPrice: 64999,
      isActive: true,
      isFeatured: true,
    },
  });

  const dropperCourse = await prisma.course.upsert({
    where: { slug: "clat-dropper" },
    update: {},
    create: {
      slug: "clat-dropper",
      name: "CLAT Dropper",
      shortDescription: "Intensive 1-year program for repeat aspirants",
      description: "Designed specifically for students who have previously attempted CLAT. Focus on weak areas, advanced strategy, and consistent mock practice.",
      category: "DROPPER",
      type: "CLAT",
      mode: "ONLINE",
      duration: "12 Months",
      totalClasses: 280,
      recordedLectures: 400,
      mockTests: 120,
      studyMaterial: true,
      mentorship: false,
      price: 74999,
      discountPrice: 54999,
      isActive: true,
      isFeatured: true,
    },
  });

  const crashCourse = await prisma.course.upsert({
    where: { slug: "clat-crash-course" },
    update: {},
    create: {
      slug: "clat-crash-course",
      name: "CLAT Crash Course",
      shortDescription: "3-month intensive pre-exam preparation",
      description: "Fast-track program for students with 3 months to go. Rapid revision, daily mocks, and focused current affairs.",
      category: "CRASH_COURSE",
      type: "CLAT",
      mode: "ONLINE",
      duration: "3 Months",
      totalClasses: 90,
      recordedLectures: 150,
      mockTests: 60,
      studyMaterial: true,
      mentorship: false,
      price: 29999,
      discountPrice: 19999,
      isActive: true,
      isFeatured: false,
    },
  });

  const powerBatch = await prisma.course.upsert({
    where: { slug: "clat-power-batch" },
    update: {},
    create: {
      slug: "clat-power-batch",
      name: "CLAT Power Batch",
      shortDescription: "Premium small-batch program with personalized mentorship",
      description: "Our most premium program with small batch sizes (max 30), weekly 1-on-1 mentorship, unlimited doubt clearing, and a proven track record of top 50 ranks.",
      category: "POWER_BATCH",
      type: "CLAT",
      mode: "ONLINE",
      duration: "15 Months",
      totalClasses: 400,
      recordedLectures: 600,
      mockTests: 200,
      studyMaterial: true,
      mentorship: true,
      price: 119999,
      discountPrice: 89999,
      isActive: true,
      isFeatured: true,
    },
  });

  const ailetCourse = await prisma.course.upsert({
    where: { slug: "ailet-preparation" },
    update: {},
    create: {
      slug: "ailet-preparation",
      name: "AILET Preparation",
      shortDescription: "Specialized coaching for NLU Delhi admission",
      description: "Dedicated AILET program covering the unique exam pattern of All India Law Entrance Test for admission to NLU Delhi.",
      category: "FOUNDATION",
      type: "AILET",
      mode: "ONLINE",
      duration: "10 Months",
      totalClasses: 200,
      recordedLectures: 250,
      mockTests: 80,
      studyMaterial: true,
      mentorship: false,
      price: 59999,
      discountPrice: 44999,
      isActive: true,
      isFeatured: false,
    },
  });

  const comboCourse = await prisma.course.upsert({
    where: { slug: "clat-ailet-combo" },
    update: {},
    create: {
      slug: "clat-ailet-combo",
      name: "CLAT + AILET Combo",
      shortDescription: "Comprehensive preparation for both CLAT and AILET",
      description: "The ultimate law entrance prep package covering both CLAT and AILET. Maximum coverage, best value, and integrated curriculum.",
      category: "COMBO",
      type: "BOTH",
      mode: "ONLINE",
      duration: "18 Months",
      totalClasses: 450,
      recordedLectures: 700,
      mockTests: 250,
      studyMaterial: true,
      mentorship: true,
      price: 149999,
      discountPrice: 109999,
      isActive: true,
      isFeatured: true,
    },
  });

  console.log("✅ Courses seeded");

  // ── Link faculty to courses ──────────────────────────────────
  await prisma.courseFaculty.upsert({ where: { courseId_facultyId: { courseId: foundationCourse.id, facultyId: faculty1.id } }, update: {}, create: { courseId: foundationCourse.id, facultyId: faculty1.id } });
  await prisma.courseFaculty.upsert({ where: { courseId_facultyId: { courseId: foundationCourse.id, facultyId: faculty2.id } }, update: {}, create: { courseId: foundationCourse.id, facultyId: faculty2.id } });
  await prisma.courseFaculty.upsert({ where: { courseId_facultyId: { courseId: powerBatch.id, facultyId: faculty1.id } }, update: {}, create: { courseId: powerBatch.id, facultyId: faculty1.id } });
  await prisma.courseFaculty.upsert({ where: { courseId_facultyId: { courseId: powerBatch.id, facultyId: faculty2.id } }, update: {}, create: { courseId: powerBatch.id, facultyId: faculty2.id } });
  await prisma.courseFaculty.upsert({ where: { courseId_facultyId: { courseId: powerBatch.id, facultyId: faculty3.id } }, update: {}, create: { courseId: powerBatch.id, facultyId: faculty3.id } });
  await prisma.courseFaculty.upsert({ where: { courseId_facultyId: { courseId: powerBatch.id, facultyId: faculty4.id } }, update: {}, create: { courseId: powerBatch.id, facultyId: faculty4.id } });

  console.log("✅ Course-faculty links seeded");

  // ── Testimonials ─────────────────────────────────────────────
  const testimonialData = [
    { studentName: "Vikram Singh", text: "LexAscent's Power Batch is unmatched. I secured AIR 3 in CLAT 2024 thanks to the incredible faculty and structured curriculum.", nlu: "NLU Delhi", year: 2024, rating: 5, sortOrder: 1 },
    { studentName: "Priya Sharma", text: "The daily current affairs module alone saved me at least 20 marks in CLAT. Best coaching platform I have used.", nlu: "NLU Delhi", year: 2024, rating: 5, sortOrder: 2 },
    { studentName: "Aryan Kapoor", text: "Mock tests are tougher than the actual exam — which is exactly what serious CLAT preparation needs.", nlu: "NALSAR", year: 2024, rating: 5, sortOrder: 3 },
    { studentName: "Sneha Reddy", text: "Went from AIR 200+ to AIR 27 in 6 months using the Dropper Batch. The personalized strategy was the game-changer.", nlu: "NLSIU Bangalore", year: 2024, rating: 5, sortOrder: 4 },
  ];

  for (const t of testimonialData) {
    await prisma.testimonial.create({ data: t }).catch(() => {});
  }

  console.log("✅ Testimonials seeded");

  // ── Results ──────────────────────────────────────────────────
  const resultData = [
    { studentName: "Vikram Singh", rank: 3, nlu: "NLU Delhi", year: 2024, exam: "CLAT", testimonial: "LexAscent's Power Batch is unmatched.", sortOrder: 1 },
    { studentName: "Priya Sharma", rank: 12, nlu: "NLU Delhi", year: 2024, exam: "CLAT", testimonial: "Daily current affairs module saved me.", sortOrder: 2 },
    { studentName: "Aryan Kapoor", rank: 18, nlu: "NALSAR", year: 2024, exam: "CLAT", testimonial: "Mock tests tougher than actual CLAT.", sortOrder: 3 },
    { studentName: "Aditya Mishra", rank: 1, nlu: "NLU Delhi", year: 2023, exam: "AILET", testimonial: "Secured AIR 1 in AILET!", sortOrder: 4 },
  ];

  for (const r of resultData) {
    await prisma.result.create({ data: r }).catch(() => {});
  }

  console.log("✅ Results seeded");

  // ── Current Affairs ──────────────────────────────────────────
  await prisma.currentAffair.upsert({
    where: { slug: "supreme-court-article-21-digital-privacy" },
    update: {},
    create: {
      slug: "supreme-court-article-21-digital-privacy",
      title: "Supreme Court Expands Article 21 to Include Digital Privacy Rights",
      summary: "The Supreme Court ruled that surveillance without adequate oversight violates Article 21.",
      content: "In a landmark judgment, the Supreme Court of India expanded the scope of Article 21 to include digital privacy as a fundamental right...",
      category: "LEGAL_NEWS",
      importantFacts: ["Article 21 now includes digital privacy", "Surveillance requires judicial oversight", "5-judge constitutional bench"],
      clatRelevance: "Very High",
    },
  });

  await prisma.currentAffair.upsert({
    where: { slug: "new-criminal-laws-bns-bnss-bsa" },
    update: {},
    create: {
      slug: "new-criminal-laws-bns-bnss-bsa",
      title: "New Criminal Laws Replace IPC, CrPC, Evidence Act",
      summary: "BNS, BNSS and BSA officially come into force, replacing colonial-era laws.",
      content: "India's new criminal laws — Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam — come into effect...",
      category: "LEGAL_NEWS",
      importantFacts: ["BNS replaces IPC (1860)", "BNSS replaces CrPC (1973)", "BSA replaces Indian Evidence Act (1872)", "0-day crime timeline under BNSS"],
      clatRelevance: "Very High",
    },
  });

  console.log("✅ Current affairs seeded");

  // ── FAQs ─────────────────────────────────────────────────────
  const faqs = [
    { question: "What is CLAT and who conducts it?", answer: "CLAT is the Common Law Admission Test conducted by the Consortium of NLUs for admission to 24 National Law Universities across India.", category: "About CLAT", sortOrder: 1 },
    { question: "What is the eligibility for CLAT?", answer: "Class 12 passed or appearing with 45% marks (40% for SC/ST). No upper age limit.", category: "Eligibility", sortOrder: 2 },
    { question: "How many mock tests should I attempt?", answer: "We recommend at least 30-40 full-length mocks along with thorough analysis of each test.", category: "Preparation", sortOrder: 3 },
    { question: "What courses does LexAscent offer?", answer: "Foundation, Dropper, Crash Course, Power Batch, AILET, and CLAT+AILET Combo programs.", category: "Courses", sortOrder: 4 },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq }).catch(() => {});
  }

  console.log("✅ FAQs seeded");
  console.log("\n🎉 Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
