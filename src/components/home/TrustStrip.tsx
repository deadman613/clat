"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 50000, suffix: "+", label: "Students Trained" },
  { value: 30,    suffix: "+", label: "Years of Excellence" },
  { value: 1000,  suffix: "+", label: "NLU Selections" },
  { value: 95,    suffix: "%", label: "Selection Rate" },
];

const nlus = [
  "NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "NUJS Kolkata",
  "NLU Jodhpur", "GNLU Gandhinagar", "RMLNLU Lucknow", "HNLU Raipur",
];

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding" style={{ background: "#fff" }}>
      <div className="container-custom">
        {/* Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl sm:text-5xl font-semibold mb-1"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                {inView ? <CountUp end={value} suffix={suffix} /> : `0${suffix}`}
              </div>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Gold rule */}
        <div className="flex justify-center mb-6">
          <div className="rule mx-auto" />
        </div>

        {/* NLU names */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
          Our students are at
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {nlus.map((nlu) => (
            <span key={nlu}
              className="text-sm px-3 py-1 rounded-full border"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-muted)",
                background: "var(--color-surface)",
              }}>
              {nlu}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
