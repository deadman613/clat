"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    rank: "AIR 12",
    nlu: "NLU Delhi (2024)",
    photo: null,
    initials: "PS",
    color: "from-blue-500 to-blue-700",
    rating: 5,
    text: "LexAscent completely transformed my CLAT preparation. The faculty here are exceptional — they don't just teach; they mentor. Their daily current affairs module saved me at least 20 marks in the exam. Highly recommend!",
    course: "CLAT Power Batch",
  },
  {
    name: "Arjun Mehta",
    rank: "AIR 34",
    nlu: "NALSAR Hyderabad (2024)",
    photo: null,
    initials: "AM",
    color: "from-emerald-500 to-teal-600",
    rating: 5,
    text: "As a dropper, I was quite demotivated. But LexAscent's structured approach and the support from mentors completely turned things around. The mock test series is incredibly close to the actual CLAT paper.",
    course: "CLAT Dropper Batch",
  },
  {
    name: "Ananya Gupta",
    rank: "AIR 8",
    nlu: "NUJS Kolkata (2024)",
    photo: null,
    initials: "AG",
    color: "from-violet-500 to-purple-700",
    rating: 5,
    text: "The legal reasoning classes at LexAscent are on another level. The faculty breaks down complex passages into simple patterns. The mock tests are tough — tougher than the actual exam — which is exactly what you need.",
    course: "CLAT Power Batch",
  },
  {
    name: "Rahul Verma",
    rank: "AIR 56",
    nlu: "NLU Bangalore (2024)",
    photo: null,
    initials: "RV",
    color: "from-amber-500 to-orange-600",
    rating: 5,
    text: "I joined the crash course just 3 months before CLAT and it worked wonders. The focused approach, intensive mock tests, and the sheer dedication of the faculty made all the difference. Got into my dream NLU!",
    course: "CLAT Crash Course",
  },
  {
    name: "Neha Joshi",
    rank: "AIR 21",
    nlu: "GNLU Ahmedabad (2024)",
    photo: null,
    initials: "NJ",
    color: "from-rose-500 to-pink-600",
    rating: 5,
    text: "The student dashboard at LexAscent is incredible. I could track my progress, see exactly where I was losing marks, and focus my preparation. The analytics helped me go from AIR 200+ to AIR 21 in 6 months.",
    course: "CLAT Foundation",
  },
  {
    name: "Vikram Singh",
    rank: "AIR 3",
    nlu: "NLU Delhi (2023)",
    photo: null,
    initials: "VS",
    color: "from-indigo-500 to-indigo-700",
    rating: 5,
    text: "Secured AIR 3 in CLAT. LexAscent's systematic approach to legal reasoning and their comprehensive current affairs program were the keys to my success. The faculty genuinely cares about each student's performance.",
    course: "CLAT Power Batch",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-slate-950">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-900/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Success Stories
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Words From Our NLU Selections
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Hear from students who cracked CLAT and secured their dream NLU with LexAscent.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="relative bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-slate-700 group-hover:text-slate-600 transition-colors" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.text}"</p>

              {/* Course badge */}
              <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-400 mb-4 font-medium">
                📚 {t.course}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-400">{t.rank}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400">{t.nlu}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4 text-sm">
            Join 1000+ students who secured their dream NLU through LexAscent
          </p>
          <a
            href="/results"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-200"
          >
            View All Results →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
