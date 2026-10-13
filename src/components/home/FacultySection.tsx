"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faculty = [
  {
    initials: "VK",
    name: "Vikram Kapoor",
    qualification: "BA LLB, NLU Delhi · 14 yrs exp.",
    subject: "Legal Reasoning",
  },
  {
    initials: "SM",
    name: "Sneha Mishra",
    qualification: "MA English, JNU · 11 yrs exp.",
    subject: "English & Comprehension",
  },
  {
    initials: "RB",
    name: "Rohit Bansal",
    qualification: "MA Political Science · 9 yrs exp.",
    subject: "Current Affairs & GK",
  },
  {
    initials: "AP",
    name: "Aditi Pandey",
    qualification: "BA LLB, NALSAR · 8 yrs exp.",
    subject: "Logical Reasoning",
  },
];

export default function FacultySection() {
  return (
    <section className="section-padding band-surface">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
            Faculty
          </p>
          <h2 className="heading-display text-2xl sm:text-3xl mb-1">Meet Your Mentors</h2>
          <div className="rule mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {faculty.map(({ initials, name, qualification, subject }, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}>
              <article className="card card-hover p-5 text-center">
                {/* 4:5 photo — initials avatar */}
                <div className="rounded-[var(--radius)] mb-4 mx-auto flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))",
                    fontFamily: "var(--font-serif)",
                  }}>
                  {initials}
                </div>
                <h3 className="text-base font-semibold mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                  {name}
                </h3>
                {/* Qualification chip */}
                <span className="inline-block text-xs px-2.5 py-0.5 rounded-full mb-2"
                  style={{
                    background: "var(--color-surface)",
                    color: "var(--color-muted)",
                    border: "1px solid var(--color-border)",
                  }}>
                  {qualification}
                </span>
                <p className="text-xs font-semibold mt-1"
                  style={{ color: "var(--color-primary)" }}>
                  {subject}
                </p>
              </article>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/faculty"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: "var(--color-primary)" }}>
            Meet all faculty <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
