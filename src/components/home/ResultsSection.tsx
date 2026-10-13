"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const results = [
  {
    name: "Ananya Sharma",
    rank: "AIR 3",
    nlu: "NLSIU Bangalore",
    year: "CLAT 2024",
    initials: "AS",
    quote: "LexAscent's mock tests were harder than the actual CLAT. By exam day I was completely calm.",
  },
  {
    name: "Rishi Gupta",
    rank: "AIR 7",
    nlu: "NALSAR Hyderabad",
    year: "CLAT 2024",
    initials: "RG",
    quote: "The daily current affairs summaries saved me hours every week and kept me ahead of the paper.",
  },
  {
    name: "Priya Nair",
    rank: "AIR 12",
    nlu: "NLU Delhi",
    year: "CLAT 2024",
    initials: "PN",
    quote: "My mentor at LexAscent knew exactly when I needed to push harder and when to ease off. That balance made all the difference.",
  },
  {
    name: "Arjun Mehta",
    rank: "AIR 19",
    nlu: "NUJS Kolkata",
    year: "CLAT 2024",
    initials: "AM",
    quote: "I went from 78 percentile to AIR 19 in four months. The analytics showed me exactly what to fix.",
  },
];

export default function ResultsSection() {
  const [quoteIdx, setQuoteIdx] = useState(0);

  const prev = () => setQuoteIdx((i) => (i - 1 + results.length) % results.length);
  const next = () => setQuoteIdx((i) => (i + 1) % results.length);

  const active = results[quoteIdx];

  return (
    <section className="section-padding band-ink">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
            Results 2024
          </p>
          <h2 className="heading-display text-2xl sm:text-3xl" style={{ color: "#fff" }}>
            Our Students. Top NLUs.
          </h2>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {results.map(({ name, rank, nlu, year, initials }, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}>
              <div className="rounded-[var(--radius)] p-4 text-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                {/* Initials avatar (4:5 aspect placeholder) */}
                <div className="mx-auto mb-3 flex items-center justify-center rounded-[var(--radius)] text-white font-bold text-xl"
                  style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    background: "var(--color-primary)",
                    fontFamily: "var(--font-serif)",
                    maxWidth: 100,
                  }}>
                  {initials}
                </div>
                <p className="font-semibold text-white text-sm mb-0.5"
                  style={{ fontFamily: "var(--font-serif)" }}>
                  {name}
                </p>
                <p className="text-lg font-bold mb-0.5"
                  style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-serif)" }}>
                  {rank}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{nlu}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote — manual arrows, no auto-rotate */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-[var(--radius)] p-8 relative"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Quote className="w-8 h-8 mb-4 opacity-30" style={{ color: "var(--color-gold)" }} />
            <p className="text-base italic leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
              "{active.quote}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                  {active.name}
                </p>
                <p className="text-xs" style={{ color: "var(--color-gold-light)" }}>
                  {active.rank} · {active.nlu}
                </p>
              </div>
              <div className="flex gap-2">
                <button onClick={prev} aria-label="Previous"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} aria-label="Next"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "var(--color-primary)", color: "#fff" }}>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
