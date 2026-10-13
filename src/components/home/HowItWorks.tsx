"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnose Your Baseline",
    desc: "Take a free diagnostic test. Our system identifies your strong sections and gaps before day one.",
  },
  {
    num: "02",
    title: "Learn with Expert Faculty",
    desc: "Live classes + recordings. Every topic taught conceptually — not just pattern-matching shortcuts.",
  },
  {
    num: "03",
    title: "Practice with Real Mocks",
    desc: "500+ mock tests calibrated to actual CLAT difficulty. Detailed analytics after each attempt.",
  },
  {
    num: "04",
    title: "Revise & Crack the Exam",
    desc: "Personal mentorship in the final 60 days. Speed, accuracy, and strategy — all three locked in.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
            How It Works
          </p>
          <h2 className="heading-display text-2xl sm:text-3xl mb-1">Your Preparation in 4 Steps</h2>
          <div className="rule mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc }, i) => (
            <motion.div key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>
              <div className="relative p-6 rounded-[var(--radius)] h-full"
                style={{ border: "1px solid var(--color-border)", background: "var(--color-paper)" }}>
                {/* Connector line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-px z-10"
                    style={{ background: "var(--color-gold)" }} />
                )}
                <span className="text-5xl font-bold block mb-4"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-border)", lineHeight: 1 }}>
                  {num}
                </span>
                <h3 className="text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
