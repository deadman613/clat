"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, BarChart3, Headphones, Trophy, BookOpen, Cpu, Globe } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "1000+ top NLU selections across India. Our students consistently achieve top ranks in CLAT and AILET.",
    color: "from-amber-500 to-orange-500",
    stat: "AIR 1 in 2024",
  },
  {
    icon: Shield,
    title: "Expert Faculty",
    description:
      "Learn from NLU alumni and subject matter experts with decades of combined CLAT coaching experience.",
    color: "from-blue-600 to-blue-800",
    stat: "8+ Expert Faculty",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Learning",
    description:
      "AI-powered performance analytics identify your weak areas and personalize your preparation strategy.",
    color: "from-violet-600 to-purple-700",
    stat: "Real-time Analytics",
  },
  {
    icon: Clock,
    title: "Comprehensive Test Series",
    description:
      "1000+ mock tests including full-length, sectional, and subject-wise tests modeled on actual CLAT pattern.",
    color: "from-emerald-500 to-teal-700",
    stat: "1000+ Mock Tests",
  },
  {
    icon: BookOpen,
    title: "Updated Study Material",
    description:
      "Meticulously curated study material updated annually to reflect the latest CLAT syllabus and exam pattern.",
    color: "from-rose-500 to-pink-700",
    stat: "500+ Study Resources",
  },
  {
    icon: Globe,
    title: "Daily Current Affairs",
    description:
      "Comprehensive daily, weekly, and monthly current affairs coverage with CLAT-focused analysis and quizzes.",
    color: "from-sky-500 to-blue-600",
    stat: "Daily Updates",
  },
  {
    icon: Headphones,
    title: "Personalized Mentorship",
    description:
      "One-on-one doubt clearing sessions and dedicated mentors to guide you through every step of your journey.",
    color: "from-indigo-500 to-indigo-700",
    stat: "1-on-1 Sessions",
  },
  {
    icon: Cpu,
    title: "Advanced Tech Platform",
    description:
      "State-of-the-art learning management system with mobile app, offline access, and seamless experience.",
    color: "from-slate-600 to-slate-800",
    stat: "AI-Powered",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Why LexAscent
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            India's Most Trusted CLAT Coaching
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We combine academic rigour, experienced faculty, and cutting-edge technology to give you the 
            competitive edge you need to crack CLAT and secure your seat at a top NLU.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group relative p-6 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white"
              >
                {/* Hover background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Stat pill */}
                <div className="mb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {reason.stat}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-slate-900 mb-2 text-base">{reason.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
