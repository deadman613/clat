"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  Monitor,
  Video,
  FileText,
  Users,
  BookOpen,
  ArrowRight,
  Flame,
  Star,
  Zap,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

const courses = [
  {
    id: "clat-foundation",
    slug: "clat-foundation",
    badge: { text: "Most Popular", color: "bg-blue-600", icon: Star },
    name: "CLAT Foundation",
    tagline: "For Students Starting Early",
    description:
      "Comprehensive 2-year program for Class 11 & 12 students. Build a solid foundation across all CLAT subjects with our structured curriculum.",
    duration: "24 Months",
    classes: 350,
    recorded: 500,
    mocks: 150,
    type: ["CLAT"],
    price: 89999,
    discountPrice: 64999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "Mentorship"],
    category: "Foundation",
    color: "from-blue-600 to-blue-800",
    accent: "blue",
  },
  {
    id: "clat-dropper",
    slug: "clat-dropper",
    badge: { text: "High Success Rate", color: "bg-emerald-600", icon: Flame },
    name: "CLAT Dropper",
    tagline: "For Repeat Aspirants",
    description:
      "Intensive 1-year program designed specifically for students who have previously attempted CLAT. Focus on weak areas and exam strategy.",
    duration: "12 Months",
    classes: 280,
    recorded: 400,
    mocks: 120,
    type: ["CLAT"],
    price: 74999,
    discountPrice: 54999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "Mentorship"],
    category: "Dropper",
    color: "from-emerald-600 to-teal-700",
    accent: "emerald",
  },
  {
    id: "clat-crash-course",
    slug: "clat-crash-course",
    badge: { text: "Fast Track", color: "bg-orange-500", icon: Zap },
    name: "CLAT Crash Course",
    tagline: "Intensive Pre-Exam Preparation",
    description:
      "3-month intensive program ideal for students who want to revise and strengthen their CLAT preparation right before the examination.",
    duration: "3 Months",
    classes: 90,
    recorded: 150,
    mocks: 60,
    type: ["CLAT"],
    price: 29999,
    discountPrice: 19999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material"],
    category: "Crash Course",
    color: "from-orange-500 to-red-600",
    accent: "orange",
  },
  {
    id: "clat-power-batch",
    slug: "clat-power-batch",
    badge: { text: "Premium", color: "bg-violet-600", icon: Star },
    name: "CLAT Power Batch",
    tagline: "Advanced Preparation Program",
    description:
      "Our flagship premium program with small batch sizes, personalized attention, and unlimited doubt clearing sessions with senior faculty.",
    duration: "15 Months",
    classes: 400,
    recorded: 600,
    mocks: 200,
    type: ["CLAT"],
    price: 119999,
    discountPrice: 89999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "1-on-1 Mentorship", "Doubt Clearing"],
    category: "Power Batch",
    color: "from-violet-600 to-purple-800",
    accent: "violet",
  },
  {
    id: "ailet-preparation",
    slug: "ailet-preparation",
    badge: { text: "Specialized", color: "bg-rose-600", icon: Star },
    name: "AILET Preparation",
    tagline: "Dedicated AILET Coaching",
    description:
      "Specialized program focused entirely on AILET (All India Law Entrance Test) for National Law University Delhi admission.",
    duration: "10 Months",
    classes: 200,
    recorded: 250,
    mocks: 80,
    type: ["AILET"],
    price: 59999,
    discountPrice: 44999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "Mentorship"],
    category: "AILET",
    color: "from-rose-600 to-pink-700",
    accent: "rose",
  },
  {
    id: "clat-ailet-combo",
    slug: "clat-ailet-combo",
    badge: { text: "Best Value", color: "bg-amber-600", icon: Star },
    name: "CLAT + AILET Combo",
    tagline: "Complete Law Entrance Preparation",
    description:
      "Comprehensive combined program covering both CLAT and AILET examinations. Maximum coverage, maximum value.",
    duration: "18 Months",
    classes: 450,
    recorded: 700,
    mocks: 250,
    type: ["CLAT", "AILET"],
    price: 149999,
    discountPrice: 109999,
    features: ["Live Classes", "Recorded Lectures", "Mock Tests", "Study Material", "Mentorship", "Doubt Clearing"],
    category: "Combo",
    color: "from-amber-600 to-orange-700",
    accent: "amber",
  },
];

const accentColors: Record<string, string> = {
  blue: "text-blue-600 bg-blue-50 border-blue-100",
  emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
  orange: "text-orange-600 bg-orange-50 border-orange-100",
  violet: "text-violet-600 bg-violet-50 border-violet-100",
  rose: "text-rose-600 bg-rose-50 border-rose-100",
  amber: "text-amber-600 bg-amber-50 border-amber-100",
};

export default function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Our Programs
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            From foundation to crash courses — we have the right program for every stage of your CLAT journey.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => {
            const BadgeIcon = course.badge.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge + Type */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${course.badge.color}`}
                    >
                      <BadgeIcon className="w-3 h-3" />
                      {course.badge.text}
                    </span>
                    <div className="flex gap-1">
                      {course.type.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-playfair text-xl font-bold text-slate-900 mb-1">
                    {course.name}
                  </h3>
                  <p className={`text-xs font-semibold ${accentColors[course.accent].split(" ")[0]} mb-3`}>
                    {course.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-1">
                    {course.description}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { icon: Clock, label: "Duration", value: course.duration },
                      { icon: Monitor, label: "Live Classes", value: `${course.classes}+` },
                      { icon: FileText, label: "Mock Tests", value: `${course.mocks}+` },
                    ].map((stat) => {
                      const StatIcon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="text-center p-2 rounded-lg bg-slate-50 border border-slate-100"
                        >
                          <StatIcon className="w-3.5 h-3.5 text-slate-400 mx-auto mb-1" />
                          <div className="text-xs font-bold text-slate-700">{stat.value}</div>
                          <div className="text-[10px] text-slate-400">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.features.map((f) => (
                      <span
                        key={f}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-medium text-slate-600"
                      >
                        <BookOpen className="w-2.5 h-2.5" />
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-bold text-slate-900">
                          {formatPrice(course.discountPrice!)}
                        </span>
                        <span className="text-sm text-slate-400 line-through">
                          {formatPrice(course.price)}
                        </span>
                      </div>
                      <span className="text-xs text-emerald-600 font-semibold">
                        Save {formatPrice(course.price - course.discountPrice!)}
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className={`group/btn flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${course.color} hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5`}
                    >
                      Enroll Now
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            View All Courses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
