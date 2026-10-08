"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

const faculty = [
  {
    name: "Dr. Anjali Sharma",
    subject: "Legal Reasoning & Constitutional Law",
    qualification: "LLM, NLU Delhi | PhD (Constitutional Law)",
    experience: 12,
    bio: "Former Research Fellow at the Supreme Court of India. Ex-faculty at NLSIU Bangalore. Dr. Sharma has trained over 2,000 CLAT aspirants and is widely regarded as India's leading expert on Legal Reasoning for competitive law examinations.",
    initials: "AS",
    color: "from-blue-500 to-blue-700",
    nlu: "NLU Delhi Alumni",
    achievements: ["Ex-Research Fellow, Supreme Court of India", "Author of 'Legal Reasoning Simplified'", "2000+ students trained", "AIR 1 mentor (2022, 2024)"],
    specialization: "Constitutional Law, Torts, Contracts",
  },
  {
    name: "Prof. Rohan Khanna",
    subject: "Logical Reasoning",
    qualification: "BA LLB (Hons), NALSAR | MA Philosophy, JNU",
    experience: 9,
    bio: "Known for his exceptional ability to break down complex logical reasoning patterns into simple, memorable frameworks. Prof. Khanna's students consistently score 90%+ in the Logical Reasoning section. His 'NALSAR Method' for Logical Reasoning is widely used.",
    initials: "RK",
    color: "from-emerald-500 to-teal-700",
    nlu: "NALSAR Alumni",
    achievements: ["Creator of the NALSAR Reasoning Method", "3,000+ students trained", "Featured in India Today Education", "Highest pass rate in LR section"],
    specialization: "Critical Reasoning, Assumption-Conclusion, Syllogisms",
  },
  {
    name: "Ms. Preethi Rajan",
    subject: "English Language & Reading Comprehension",
    qualification: "MA English, Delhi University | CELTA Cambridge",
    experience: 11,
    bio: "Specialist in teaching English comprehension for competitive examinations. Author of 'Legal English for Law Aspirants,' a bestselling prep book. Ms. Rajan has helped thousands of students overcome their fear of lengthy RC passages through her unique annotation technique.",
    initials: "PR",
    color: "from-violet-500 to-purple-700",
    nlu: "Delhi University",
    achievements: ["Author of 'Legal English for Law Aspirants'", "CELTA Certified Educator", "4,500+ students trained", "Toastmasters International Champion"],
    specialization: "Reading Comprehension, Grammar, Vocabulary",
  },
  {
    name: "Mr. Siddharth Rao",
    subject: "Current Affairs & GK",
    qualification: "BA LLB (Hons), NUJS | MA Political Science",
    experience: 8,
    bio: "Ex-journalist who brings real-world current affairs expertise to CLAT preparation. Siddharth's daily news analysis and his ability to predict which news items will appear in CLAT have made him indispensable. His structured approach to CA has helped students score 28+ in this section.",
    initials: "SR",
    color: "from-amber-500 to-orange-600",
    nlu: "NUJS Alumni",
    achievements: ["Ex-Journalist, The Hindu", "5,000+ students mentored", "Predicted 85% of CLAT 2024 CA questions", "Daily CA newsletter with 20K+ subscribers"],
    specialization: "Legal News, Economy, International Affairs, Awards",
  },
  {
    name: "Ms. Deepika Nair",
    subject: "Quantitative Techniques",
    qualification: "B.Sc. Mathematics, IIT Bombay | MBA Finance",
    experience: 7,
    bio: "IIT Bombay graduate who specializes in making Quantitative Techniques accessible to law students with no Math background. Her step-by-step approach ensures even students who fear numbers can achieve 12+ in this section.",
    initials: "DN",
    color: "from-rose-500 to-pink-600",
    nlu: "IIT Bombay",
    achievements: ["IIT Bombay Gold Medalist", "1,800+ students trained", "QT section average improved by 40%", "Workshop facilitator at 15+ colleges"],
    specialization: "Basic Maths, Percentages, Data Interpretation, Statistics",
  },
  {
    name: "Mr. Aditya Verma",
    subject: "Legal Aptitude & AILET",
    qualification: "BA LLB (Hons), NLU Delhi | Practicing Advocate",
    experience: 6,
    bio: "Practicing advocate at Delhi High Court and AILET specialist. Aditya secured AIR 3 in AILET himself and now helps students crack India's toughest law entrance. His deep practical knowledge of law makes his legal aptitude classes unmatched.",
    initials: "AV",
    color: "from-indigo-500 to-indigo-700",
    nlu: "NLU Delhi Alumni",
    achievements: ["AIR 3 AILET", "Practicing Advocate, Delhi HC", "100% AILET conversion rate (Top Batch)", "Guest lecturer at NLU Delhi"],
    specialization: "AILET Pattern, Legal Aptitude, Constitutional Law",
  },
  {
    name: "Dr. Meera Krishnan",
    subject: "General Knowledge & Static GK",
    qualification: "MA History, JNU | PhD Modern Indian History",
    experience: 10,
    bio: "Expert in static General Knowledge including History, Geography, Polity, and Science. Dr. Krishnan's comprehensive GK notes have become the gold standard for CLAT aspirants across India.",
    initials: "MK",
    color: "from-sky-500 to-blue-600",
    nlu: "JNU",
    achievements: ["Author of 'Complete GK for CLAT'", "PhD from JNU", "2,500+ students trained", "Empanelled as UPSC mentor"],
    specialization: "History, Polity, Geography, Science & Technology",
  },
  {
    name: "Mr. Rahul Gupta",
    subject: "Test Strategy & Exam Psychology",
    qualification: "BA Psychology, Delhi University | CLAT Coach",
    experience: 8,
    bio: "Specializes in exam psychology, test-taking strategy, and performance optimization. Rahul has helped hundreds of students overcome exam anxiety and develop the mental toughness needed to perform consistently in high-stakes examinations.",
    initials: "RG",
    color: "from-teal-500 to-emerald-600",
    nlu: "Delhi University",
    achievements: ["Certified NLP Practitioner", "Performance Coach for 500+ students", "Author of 'The CLAT Mindset'", "Featured in Education Times"],
    specialization: "Exam Strategy, Time Management, Anxiety Management",
  },
];

export default function FacultyClient() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="gradient-hero py-16">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Expert Faculty
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              Learn From the Best
            </h1>
            <p className="text-blue-200/70 max-w-xl mx-auto">
              Our faculty combines NLU alumni, practicing lawyers, and subject matter experts — all united by a single mission: your CLAT success.
            </p>
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8">
              {[
                { value: "8+", label: "Expert Faculty" },
                { value: "50+", label: "Years Combined Experience" },
                { value: "50K+", label: "Students Mentored" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-amber-400 font-playfair">{s.value}</div>
                  <div className="text-blue-200/60 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {faculty.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.07 }}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${member.color}`} />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg`}>
                    {member.initials}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-playfair text-lg font-bold text-slate-900">{member.name}</h2>
                    <p className="text-blue-600 text-sm font-semibold">{member.subject}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                        {member.nlu}
                      </span>
                      <span className="text-xs text-slate-400">{member.experience}+ years exp.</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mb-1 text-xs">{member.qualification}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.bio}</p>

                {/* Achievements */}
                <div className="space-y-1.5 mb-4">
                  {member.achievements.slice(0, 3).map((ach) => (
                    <div key={ach} className="flex items-center gap-2 text-xs text-slate-600">
                      <Award className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      {ach}
                    </div>
                  ))}
                </div>

                {/* Specialization */}
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Specialization</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialization.split(", ").map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
