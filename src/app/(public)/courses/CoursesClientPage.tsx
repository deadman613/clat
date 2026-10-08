"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  Monitor,
  FileText,
  BookOpen,
  ArrowRight,
  SlidersHorizontal,
  Star,
  Zap,
  Flame,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

const allCourses = [
  {
    id: "clat-foundation",
    slug: "clat-foundation",
    badge: "Most Popular",
    badgeIcon: Star,
    name: "CLAT Foundation",
    tagline: "For Students Starting Early",
    description:
      "Comprehensive 2-year program for Class 11 & 12 students. Build a solid foundation across all CLAT subjects with our structured curriculum.",
    duration: "24 Months",
    classes: 350,
    recorded: 500,
    mocks: 150,
    type: "CLAT",
    category: "Foundation",
    mode: "Online",
    price: 89999,
    discountPrice: 64999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "Mentorship"],
    color: "from-blue-600 to-blue-800",
    badgeColor: "bg-blue-600",
    accentText: "text-blue-600",
  },
  {
    id: "clat-dropper",
    slug: "clat-dropper",
    badge: "High Success Rate",
    badgeIcon: Flame,
    name: "CLAT Dropper",
    tagline: "For Repeat Aspirants",
    description:
      "Intensive 1-year program designed specifically for students who have previously attempted CLAT. Focus on weak areas and proven exam strategy.",
    duration: "12 Months",
    classes: 280,
    recorded: 400,
    mocks: 120,
    type: "CLAT",
    category: "Dropper",
    mode: "Online",
    price: 74999,
    discountPrice: 54999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "Mentorship"],
    color: "from-emerald-600 to-teal-700",
    badgeColor: "bg-emerald-600",
    accentText: "text-emerald-600",
  },
  {
    id: "clat-crash-course",
    slug: "clat-crash-course",
    badge: "Fast Track",
    badgeIcon: Zap,
    name: "CLAT Crash Course",
    tagline: "Intensive Pre-Exam Preparation",
    description:
      "3-month intensive program ideal for final revision and strengthening preparation right before the CLAT examination.",
    duration: "3 Months",
    classes: 90,
    recorded: 150,
    mocks: 60,
    type: "CLAT",
    category: "Crash Course",
    mode: "Online",
    price: 29999,
    discountPrice: 19999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material"],
    color: "from-orange-500 to-red-600",
    badgeColor: "bg-orange-500",
    accentText: "text-orange-600",
  },
  {
    id: "clat-power-batch",
    slug: "clat-power-batch",
    badge: "Premium",
    badgeIcon: Star,
    name: "CLAT Power Batch",
    tagline: "Advanced Preparation Program",
    description:
      "Our flagship premium program with small batch sizes, personalized attention, and unlimited doubt clearing sessions with senior faculty.",
    duration: "15 Months",
    classes: 400,
    recorded: 600,
    mocks: 200,
    type: "CLAT",
    category: "Power Batch",
    mode: "Online",
    price: 119999,
    discountPrice: 89999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "1-on-1 Mentorship", "Doubt Clearing"],
    color: "from-violet-600 to-purple-800",
    badgeColor: "bg-violet-600",
    accentText: "text-violet-600",
  },
  {
    id: "ailet-preparation",
    slug: "ailet-preparation",
    badge: "Specialized",
    badgeIcon: Star,
    name: "AILET Preparation",
    tagline: "Dedicated AILET Coaching",
    description:
      "Specialized program focused entirely on AILET (All India Law Entrance Test) for National Law University Delhi admission.",
    duration: "10 Months",
    classes: 200,
    recorded: 250,
    mocks: 80,
    type: "AILET",
    category: "AILET",
    mode: "Online",
    price: 59999,
    discountPrice: 44999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "Mentorship"],
    color: "from-rose-600 to-pink-700",
    badgeColor: "bg-rose-600",
    accentText: "text-rose-600",
  },
  {
    id: "clat-ailet-combo",
    slug: "clat-ailet-combo",
    badge: "Best Value",
    badgeIcon: Star,
    name: "CLAT + AILET Combo",
    tagline: "Complete Law Entrance Preparation",
    description:
      "Comprehensive combined program covering both CLAT and AILET. Maximum coverage, personalized mentorship, and best value.",
    duration: "18 Months",
    classes: 450,
    recorded: 700,
    mocks: 250,
    type: "Both",
    category: "Combo",
    mode: "Online",
    price: 149999,
    discountPrice: 109999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "Mentorship", "Doubt Clearing"],
    color: "from-amber-600 to-orange-700",
    badgeColor: "bg-amber-600",
    accentText: "text-amber-600",
  },
];

const filters = {
  exam: ["All", "CLAT", "AILET", "Both"],
  category: ["All", "Foundation", "Dropper", "Crash Course", "Power Batch", "Combo"],
  mode: ["All", "Online", "Offline"],
};

export default function CoursesClientPage() {
  const [examFilter, setExamFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [modeFilter, setModeFilter] = useState("All");

  const filtered = allCourses.filter((c) => {
    return (
      (examFilter === "All" || c.type === examFilter || (examFilter === "Both" && c.type === "Both")) &&
      (categoryFilter === "All" || c.category === categoryFilter) &&
      (modeFilter === "All" || c.mode === modeFilter)
    );
  });

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="gradient-hero py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Programs
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              Choose Your Path to Success
            </h1>
            <p className="text-blue-200/70 max-w-xl mx-auto">
              From foundation to crash courses — we have the right program for every stage of your CLAT journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-medium">Filter:</span>
            </div>

            {/* Exam filter */}
            <div className="flex items-center gap-1">
              {filters.exam.map((f) => (
                <button
                  key={f}
                  onClick={() => setExamFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    examFilter === f
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="w-px h-5 bg-slate-200" />

            {/* Category filter */}
            <div className="flex items-center gap-1 flex-wrap">
              {filters.category.map((f) => (
                <button
                  key={f}
                  onClick={() => setCategoryFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    categoryFilter === f
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="ml-auto text-xs text-slate-400">
              Showing {filtered.length} of {allCourses.length} courses
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container-custom py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No courses match your filters.</p>
            <button
              onClick={() => { setExamFilter("All"); setCategoryFilter("All"); setModeFilter("All"); }}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => {
              const BadgeIcon = course.badgeIcon;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${course.badgeColor}`}
                      >
                        <BadgeIcon className="w-3 h-3" />
                        {course.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                        {course.type}
                      </span>
                    </div>

                    <h2 className="font-playfair text-xl font-bold text-slate-900 mb-1">
                      {course.name}
                    </h2>
                    <p className={`text-xs font-semibold ${course.accentText} mb-3`}>{course.tagline}</p>
                    <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-1">{course.description}</p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { icon: Clock, label: "Duration", value: course.duration },
                        { icon: Monitor, label: "Live Classes", value: `${course.classes}+` },
                        { icon: FileText, label: "Mocks", value: `${course.mocks}+` },
                      ].map((stat) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={stat.label} className="text-center p-2 rounded-lg bg-slate-50">
                            <StatIcon className="w-3.5 h-3.5 text-slate-400 mx-auto mb-1" />
                            <div className="text-xs font-bold text-slate-700">{stat.value}</div>
                            <div className="text-[10px] text-slate-400">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.features.map((f) => (
                        <span key={f} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-medium text-slate-600">
                          <BookOpen className="w-2.5 h-2.5" />
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-bold text-slate-900">{formatPrice(course.discountPrice)}</span>
                          <span className="text-sm text-slate-400 line-through">{formatPrice(course.price)}</span>
                        </div>
                        <span className="text-xs text-emerald-600 font-semibold">
                          Save {formatPrice(course.price - course.discountPrice)}
                        </span>
                      </div>
                      <Link
                        href={`/courses/${course.slug}`}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${course.color} hover:opacity-90 transition-all shadow-md hover:-translate-y-0.5`}
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
