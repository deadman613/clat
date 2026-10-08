"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Clock, Monitor, Video, FileText, Users, BookOpen,
  CheckCircle2, ChevronDown, Calendar, ArrowRight,
  Star, Award, MessageSquare, GraduationCap,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

type CourseData = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  classes: number;
  recorded: number;
  mocks: number;
  studyMaterial: boolean;
  mentorship: boolean;
  price: number;
  discountPrice: number;
  type: string;
  color: string;
  overview: string[];
  curriculum: { phase: string; topics: string[] }[];
  whoShouldJoin: string[];
  faculty: { name: string; subject: string; initials: string; color: string }[];
  faqs: { q: string; a: string }[];
  nextBatch: string;
  batchTimings: string;
};

type Props = { course: CourseData };

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "faculty", label: "Faculty" },
  { id: "faqs", label: "FAQs" },
];

export default function CourseDetailClient({ course }: Props) {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [enrolling, setEnrolling] = useState(false);

  const handleEnroll = async () => {
    setEnrolling(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Redirecting to enrollment... Please login to continue.");
    setEnrolling(false);
  };

  const discount = Math.round(((course.price - course.discountPrice) / course.price) * 100);

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Banner */}
      <div
        className={`bg-gradient-to-r ${course.color} py-16`}
        style={{ background: "linear-gradient(135deg, #0f2040, #152a55)" }}
      >
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-200/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white">{course.name}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left — Course Info */}
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
                {course.type} Preparation
              </span>
              <h1 className="font-playfair text-4xl font-bold text-white mb-2">
                {course.name}
              </h1>
              <p className="text-amber-400 font-semibold mb-4">{course.tagline}</p>
              <p className="text-blue-100/70 mb-6 max-w-2xl">{course.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { icon: Clock, label: course.duration, sub: "Duration" },
                  { icon: Monitor, label: `${course.classes}+`, sub: "Live Classes" },
                  { icon: Video, label: `${course.recorded}+`, sub: "Recorded Lectures" },
                  { icon: FileText, label: `${course.mocks}+`, sub: "Mock Tests" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.sub} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                      <Icon className="w-4 h-4 text-amber-400" />
                      <div>
                        <div className="text-white font-bold text-sm">{stat.label}</div>
                        <div className="text-blue-200/60 text-[10px]">{stat.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  course.studyMaterial && "Study Material Included",
                  course.mentorship && "1-on-1 Mentorship",
                  "Doubt Clearing",
                  "Progress Tracking",
                  "Mobile App Access",
                ].filter(Boolean).map((f) => (
                  <span key={f as string} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Enrollment Card (sticky) */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-6 sticky top-24">
                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-slate-900">
                      {formatPrice(course.discountPrice)}
                    </span>
                    <span className="text-lg text-slate-400 line-through">
                      {formatPrice(course.price)}
                    </span>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs font-bold">
                    {discount}% OFF
                  </span>
                </div>

                {/* Batch info */}
                <div className="space-y-2 mb-5 p-3 rounded-xl bg-slate-50">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span><strong>Next Batch:</strong> {course.nextBatch}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-xs">{course.batchTimings}</span>
                  </div>
                </div>

                <button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-200 mb-3 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {enrolling ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enrolling...</>
                  ) : (
                    <>Enroll Now — {formatPrice(course.discountPrice)}</>
                  )}
                </button>

                <Link
                  href="/enquiry"
                  className="w-full py-3 rounded-xl font-semibold text-sm border-2 border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book Free Counselling
                </Link>

                <div className="mt-4 text-center text-xs text-slate-400">
                  EMI available from ₹3,999/month • Scholarship available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-100 bg-white sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-700"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl">
          {/* Overview */}
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">Course Overview</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {course.overview.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-playfair text-xl font-bold text-slate-900 mb-4">Who Should Join?</h3>
              <div className="space-y-3 mb-10">
                {course.whoShouldJoin.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Course Features Table */}
              <h3 className="font-playfair text-xl font-bold text-slate-900 mb-4">Course Features</h3>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Feature</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Duration", course.duration],
                      ["Live Classes", `${course.classes}+ classes`],
                      ["Recorded Lectures", `${course.recorded}+ lectures`],
                      ["Mock Tests", `${course.mocks}+ full-length & sectional`],
                      ["Study Material", course.studyMaterial ? "✅ Comprehensive notes & PDFs" : "Not included"],
                      ["Mentorship", course.mentorship ? "✅ 1-on-1 sessions available" : "Group sessions"],
                      ["Medium", "English & Hindi"],
                      ["Access", "Web + Mobile App (1 year after course end)"],
                    ].map(([feature, detail], i) => (
                      <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <td className="px-4 py-3 font-medium text-slate-700">{feature}</td>
                        <td className="px-4 py-3 text-slate-600">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Curriculum */}
          {activeTab === "curriculum" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((phase, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-3 p-4 bg-slate-50">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <h3 className="font-semibold text-slate-800">{phase.phase}</h3>
                    </div>
                    <div className="p-4 space-y-2">
                      {phase.topics.map((topic, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Faculty */}
          {activeTab === "faculty" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">Course Faculty</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.faculty.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                      {f.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{f.name}</div>
                      <div className="text-blue-600 text-sm font-medium">{f.subject}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/faculty" className="text-blue-600 font-semibold text-sm hover:underline flex items-center justify-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  View full faculty profiles
                </Link>
              </div>
            </motion.div>
          )}

          {/* FAQs */}
          {activeTab === "faqs" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {course.faqs.map((faq, i) => (
                  <div key={i} className={`border rounded-xl overflow-hidden ${openFaq === i ? "border-blue-200" : "border-slate-200"}`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <div className="px-5 pb-5 text-slate-600 text-sm border-t border-slate-100 pt-4 bg-slate-50/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
