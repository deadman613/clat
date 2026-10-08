"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Calendar, Users, FileText, ArrowRight, AlertCircle } from "lucide-react";

const examSections = [
  {
    section: "English Language",
    questions: "22-26",
    marks: "22-26",
    topics: ["Reading Comprehension", "Grammar & Usage", "Vocabulary", "Para-jumbles", "Sentence Correction"],
    color: "from-blue-500 to-blue-700",
  },
  {
    section: "Current Affairs & GK",
    questions: "28-32",
    marks: "28-32",
    topics: ["National Events", "International Affairs", "Legal News", "Economy", "Awards & Appointments", "Sports"],
    color: "from-amber-500 to-orange-600",
  },
  {
    section: "Legal Reasoning",
    questions: "28-32",
    marks: "28-32",
    topics: ["Legal Principles", "Case Studies", "Applying Law to Facts", "Constitutional Provisions", "Legal Definitions"],
    color: "from-violet-500 to-purple-700",
  },
  {
    section: "Logical Reasoning",
    questions: "22-26",
    marks: "22-26",
    topics: ["Critical Reasoning", "Assumption-Conclusion", "Syllogisms", "Pattern Recognition", "Analogies"],
    color: "from-emerald-500 to-teal-700",
  },
  {
    section: "Quantitative Techniques",
    questions: "10-14",
    marks: "10-14",
    topics: ["Basic Arithmetic", "Percentage & Ratio", "Data Interpretation", "Statistics (Basic)", "Graphs & Tables"],
    color: "from-rose-500 to-pink-600",
  },
];

const importantDates = [
  { event: "CLAT 2025 Notification", date: "July 2024 (Expected)" },
  { event: "Registration Opens", date: "August 2024 (Expected)" },
  { event: "Last Date to Apply", date: "October 2024 (Expected)" },
  { event: "Admit Card Release", date: "November 2024 (Expected)" },
  { event: "CLAT 2025 Exam Date", date: "December 1, 2024 (Expected)" },
  { event: "Result Declaration", date: "December 2024 (Expected)" },
  { event: "Counselling Begins", date: "January 2025 (Expected)" },
];

export default function CLATInfoClient() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <div className="gradient-hero py-16">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Exam Information
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              CLAT 2025 — Complete Guide
            </h1>
            <p className="text-blue-200/70 max-w-xl mx-auto">
              Everything you need to know about the Common Law Admission Test — eligibility, pattern, syllabus, and strategy.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: FileText, label: "Total Questions", value: "120", color: "text-blue-600 bg-blue-50" },
            { icon: Calendar, label: "Duration", value: "120 mins", color: "text-amber-600 bg-amber-50" },
            { icon: Users, label: "Participating NLUs", value: "24", color: "text-emerald-600 bg-emerald-50" },
            { icon: AlertCircle, label: "Negative Marking", value: "0.25", color: "text-rose-600 bg-rose-50" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="p-5 rounded-2xl border border-slate-100 text-center bg-white shadow-sm">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900 font-playfair">{item.value}</div>
                <div className="text-xs text-slate-500 mt-1">{item.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* What is CLAT */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">What is CLAT?</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  CLAT (Common Law Admission Test) is a centralized national-level entrance examination conducted by the 
                  <strong> Consortium of National Law Universities</strong> for admission to undergraduate (BA LLB) and 
                  postgraduate (LLM) law programs at 24 top National Law Universities across India.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  CLAT is one of the most competitive law entrance examinations in India, with over 90,000 candidates 
                  competing for approximately 3,500 UG seats across all NLUs. The examination tests candidates on 
                  comprehension-based questions across five subjects.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">Eligibility Criteria</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-semibold text-blue-700 mb-3">UG Program (BA LLB)</h3>
                  <div className="space-y-2">
                    {[
                      "Passed 10+2 or equivalent",
                      "Minimum 45% marks (Gen/OBC)",
                      "Minimum 40% marks (SC/ST)",
                      "Students appearing in 12th are eligible",
                      "No upper age limit",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-semibold text-blue-700 mb-3">PG Program (LLM)</h3>
                  <div className="space-y-2">
                    {[
                      "LLB degree or equivalent",
                      "Minimum 50% marks (Gen/OBC)",
                      "Minimum 45% marks (SC/ST)",
                      "Final year LLB students eligible",
                      "No upper age limit",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Exam Pattern */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">Exam Pattern</h2>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left px-4 py-3">Section</th>
                      <th className="text-center px-4 py-3">Questions</th>
                      <th className="text-center px-4 py-3">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examSections.map((section, i) => (
                      <tr key={section.section} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 font-medium text-slate-700">{section.section}</td>
                        <td className="px-4 py-3 text-center text-slate-600">{section.questions}</td>
                        <td className="px-4 py-3 text-center text-slate-600">{section.marks}</td>
                      </tr>
                    ))}
                    <tr className="bg-blue-50 font-bold">
                      <td className="px-4 py-3 text-blue-800">Total</td>
                      <td className="px-4 py-3 text-center text-blue-800">120</td>
                      <td className="px-4 py-3 text-center text-blue-800">120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                * Marking Scheme: +1 for correct answer; -0.25 for incorrect. No marks for unattempted questions.
              </p>
            </section>

            {/* Syllabus */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">CLAT Syllabus</h2>

              {/* Section Tabs */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {examSections.map((s, i) => (
                  <button
                    key={s.section}
                    onClick={() => setActiveSection(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      activeSection === i
                        ? `bg-gradient-to-r ${s.color} text-white`
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {s.section}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-xl border border-slate-200 bg-white"
              >
                <h3 className="font-semibold text-slate-900 mb-3">
                  {examSections[activeSection].section} Topics
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {examSections[activeSection].topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${examSections[activeSection].color} flex-shrink-0`} />
                      {topic}
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Important Dates */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-playfair text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Important Dates
              </h3>
              <div className="space-y-3">
                {importantDates.map((item) => (
                  <div key={item.event} className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-500">{item.event}</span>
                    <span className="text-sm font-bold text-slate-800">{item.date}</span>
                    <div className="h-px bg-slate-100 mt-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <h3 className="font-semibold mb-2">Start Your CLAT Preparation</h3>
              <p className="text-blue-100 text-sm mb-4">Join LexAscent and crack CLAT with expert guidance.</p>
              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Free Mock */}
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50">
              <h3 className="font-semibold text-amber-800 mb-2">📝 Take a Free Mock Test</h3>
              <p className="text-amber-700 text-sm mb-4">Assess your current CLAT preparation level.</p>
              <Link
                href="/mock-tests"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 transition-colors"
              >
                Start Free Test
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
