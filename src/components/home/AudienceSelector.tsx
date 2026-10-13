"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tiles = [
  { label: "Class 11",  sub: "Start early — 2-year Foundation", href: "/courses?audience=class11" },
  { label: "Class 12",  sub: "Intensive — target CLAT 2025",   href: "/courses?audience=class12" },
  { label: "Dropper",   sub: "Restrategise & crack it this year",href: "/courses?audience=dropper" },
  { label: "AILET",     sub: "NLU Delhi — India's #1 law school",href: "/courses/ailet-preparation" },
];

export default function AudienceSelector() {
  return (
    <section className="band-surface section-padding">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
            Where are you right now?
          </p>
          <h2 className="heading-display text-2xl sm:text-3xl">Find Your Course</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tiles.map(({ label, sub, href }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}>
              <Link href={href}
                className="card card-hover flex flex-col items-center text-center p-6 h-full group">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: "var(--color-primary)" }}>
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold mb-1 group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                  {label}
                </h3>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>{sub}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
