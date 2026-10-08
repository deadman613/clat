"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, GraduationCap } from "lucide-react";

const results = [
  { name: "Vikram Singh", rank: 3, nlu: "NLU Delhi", year: 2024, initials: "VS", color: "from-amber-500 to-orange-600" },
  { name: "Priya Sharma", rank: 12, nlu: "NLU Delhi", year: 2024, initials: "PS", color: "from-blue-500 to-blue-700" },
  { name: "Aryan Kapoor", rank: 18, nlu: "NALSAR", year: 2024, initials: "AK", color: "from-emerald-500 to-teal-600" },
  { name: "Sneha Reddy", rank: 27, nlu: "NUJS Kolkata", year: 2024, initials: "SR", color: "from-violet-500 to-purple-700" },
  { name: "Karan Mehta", rank: 31, nlu: "NLSIU Bangalore", year: 2024, initials: "KM", color: "from-rose-500 to-pink-600" },
  { name: "Divya Nair", rank: 45, nlu: "GNLU", year: 2024, initials: "DN", color: "from-indigo-500 to-indigo-700" },
];

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Our Achievers
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            CLAT 2024 Top Selections
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Our students consistently achieve top ranks in CLAT. Here's a glimpse of our 2024 success story.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {results.map((result, i) => (
            <motion.div
              key={result.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`group relative text-center p-5 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                result.rank <= 5 ? "ring-2 ring-amber-400 ring-offset-2" : ""
              }`}
            >
              {result.rank <= 5 && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <Trophy className="w-2.5 h-2.5" /> TOP 5
                  </span>
                </div>
              )}

              {/* Avatar */}
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${result.color} flex items-center justify-center text-white font-bold text-sm mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform`}
              >
                {result.initials}
              </div>

              {/* Rank */}
              <div className="text-2xl font-bold text-slate-900 font-playfair mb-0.5">
                AIR {result.rank}
              </div>

              {/* Name */}
              <div className="text-sm font-semibold text-slate-700 mb-1">{result.name}</div>

              {/* NLU */}
              <div className="flex items-center justify-center gap-1">
                <GraduationCap className="w-3 h-3 text-blue-500" />
                <span className="text-xs text-slate-500">{result.nlu}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 mb-8"
        >
          {[
            { label: "Top 10 Ranks", value: "6+" },
            { label: "Top 50 Ranks", value: "28+" },
            { label: "Top 100 Ranks", value: "75+" },
            { label: "Total Selections", value: "1000+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white font-playfair">{stat.value}</div>
              <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            View All Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
