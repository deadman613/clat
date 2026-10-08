"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, GraduationCap, Star, Filter } from "lucide-react";

const results = [
  { name: "Vikram Singh", rank: 3, nlu: "NLU Delhi", year: 2024, exam: "CLAT", initials: "VS", color: "from-amber-500 to-orange-600", testimonial: "LexAscent's Power Batch is unmatched. The faculty's dedication is extraordinary." },
  { name: "Priya Sharma", rank: 12, nlu: "NLU Delhi", year: 2024, exam: "CLAT", initials: "PS", color: "from-blue-500 to-blue-700", testimonial: "Daily current affairs module saved me at least 20 marks in CLAT." },
  { name: "Ananya Gupta", rank: 8, nlu: "NUJS Kolkata", year: 2024, exam: "CLAT", initials: "AG", color: "from-violet-500 to-purple-700", testimonial: "Legal reasoning classes here are on another level." },
  { name: "Aryan Kapoor", rank: 18, nlu: "NALSAR", year: 2024, exam: "CLAT", initials: "AK", color: "from-emerald-500 to-teal-600", testimonial: "The mock tests are tougher than the actual exam — which is exactly what you need." },
  { name: "Sneha Reddy", rank: 27, nlu: "NLSIU Bangalore", year: 2024, exam: "CLAT", initials: "SR", color: "from-rose-500 to-pink-600", testimonial: "From AIR 200+ to AIR 27 in 6 months — all thanks to LexAscent." },
  { name: "Karan Mehta", rank: 31, nlu: "GNLU", year: 2024, exam: "CLAT", initials: "KM", color: "from-indigo-500 to-indigo-700", testimonial: "The analytics dashboard showed me exactly where I was losing marks." },
  { name: "Aditya Mishra", rank: 1, nlu: "NLU Delhi", year: 2023, exam: "AILET", initials: "AM", color: "from-amber-400 to-amber-600", testimonial: "Secured AIR 1 in AILET — LexAscent's AILET-specific preparation was key." },
  { name: "Kavya Nair", rank: 5, nlu: "NALSAR", year: 2023, exam: "CLAT", initials: "KN", color: "from-teal-500 to-cyan-600", testimonial: "The mentorship sessions gave me the confidence I needed." },
  { name: "Rohan Bajaj", rank: 22, nlu: "NLU Jodhpur", year: 2023, exam: "CLAT", initials: "RB", color: "from-sky-500 to-blue-600", testimonial: "Best investment I made for my CLAT preparation." },
  { name: "Divya Sharma", rank: 45, nlu: "RMLNLU", year: 2023, exam: "CLAT", initials: "DS", color: "from-pink-500 to-rose-600", testimonial: "Dropped a year and chose LexAscent — best decision ever." },
];

const years = ["All Years", "2024", "2023", "2022"];
const exams = ["All Exams", "CLAT", "AILET"];

export default function ResultsClient() {
  const [yearFilter, setYearFilter] = useState("All Years");
  const [examFilter, setExamFilter] = useState("All Exams");

  const filtered = results.filter((r) => {
    const matchYear = yearFilter === "All Years" || r.year.toString() === yearFilter;
    const matchExam = examFilter === "All Exams" || r.exam === examFilter;
    return matchYear && matchExam;
  });

  const top3 = filtered.filter((r) => r.rank <= 5);
  const rest = filtered.filter((r) => r.rank > 5);

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="gradient-hero py-16">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Achievers
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              1000+ Top NLU Selections
            </h1>
            <p className="text-blue-200/70 max-w-xl mx-auto mb-8">
              Every year, LexAscent students dominate the CLAT and AILET merit lists. Here are some of our finest achievers.
            </p>
            {/* Aggregate stats */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Top 10 Ranks (2024)", value: "6+" },
                { label: "Top 50 Ranks (2024)", value: "28+" },
                { label: "Total Selections", value: "1000+" },
                { label: "NLUs Covered", value: "24/24" },
              ].map((s) => (
                <div key={s.label} className="text-center glass border border-white/10 rounded-xl px-5 py-3">
                  <div className="text-2xl font-bold text-amber-400 font-playfair">{s.value}</div>
                  <div className="text-blue-200/60 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Filter className="w-4 h-4 text-slate-400" />
          {years.map((y) => (
            <button key={y} onClick={() => setYearFilter(y)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${yearFilter === y ? "bg-blue-600 text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"}`}>
              {y}
            </button>
          ))}
          <div className="w-px h-5 bg-slate-200" />
          {exams.map((e) => (
            <button key={e} onClick={() => setExamFilter(e)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${examFilter === e ? "bg-slate-800 text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400"}`}>
              {e}
            </button>
          ))}
        </div>

        {/* Top 3 — Podium style */}
        {top3.length > 0 && (
          <div className="mb-10">
            <h2 className="font-playfair text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" /> Top Achievers
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {top3.map((r, i) => (
                <motion.div key={r.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                  className={`relative bg-gradient-to-br ${r.color} rounded-2xl p-6 text-white text-center shadow-xl`}>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                      <Trophy className="w-3 h-3" /> AIR {r.rank}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 mt-3">
                    {r.initials}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{r.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-white/80 text-sm mb-3">
                    <GraduationCap className="w-4 h-4" /> {r.nlu} · {r.year}
                  </div>
                  <p className="text-white/70 text-xs italic">"{r.testimonial}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Rest of results */}
        <h2 className="font-playfair text-xl font-bold text-slate-900 mb-4">All Selections</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 p-5 text-center hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-base mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                {r.initials}
              </div>
              <div className="text-2xl font-bold text-slate-900 font-playfair">AIR {r.rank}</div>
              <div className="font-semibold text-slate-700 text-sm mt-0.5">{r.name}</div>
              <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mt-1">
                <GraduationCap className="w-3 h-3" /> {r.nlu}
              </div>
              <div className="mt-1">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${r.exam === "AILET" ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"}`}>
                  {r.exam} {r.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">No results match the selected filters.</div>
        )}
      </div>
    </div>
  );
}
