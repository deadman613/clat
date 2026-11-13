"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teachingAreas = [
  {
    label: "English",
    description: "Reading comprehension and language practice.",
  },
  {
    label: "Current Affairs & GK",
    description: "Reading the news and understanding key developments.",
  },
  {
    label: "Legal Reasoning",
    description: "Applying legal principles to facts and passages.",
  },
  {
    label: "Logical Reasoning",
    description: "Building structured approaches to arguments and questions.",
  },
  {
    label: "Quantitative Techniques",
    description: "Practising the quantitative questions in the CLAT paper.",
  },
];

export default function FacultySection() {
  return (
    <section className="section-padding band-surface" id="mentorship">
      <div className="container-custom">
        <div className="home-faculty__heading mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
            Faculty and teaching
          </p>
          <h2 className="heading-display text-2xl sm:text-3xl mb-1">Guidance Across CLAT Subjects</h2>
          <p className="text-sm text-muted max-w-xl mx-auto">
            Explore the areas covered in law-entrance preparation. Ask an advisor for current faculty profiles and credentials.
          </p>
          <div className="rule mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teachingAreas.map(({ label, description }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}>
              <article className="card card-hover p-5 text-center">
                <h3 className="text-base font-semibold mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                  {label}
                </h3>
                <p className="text-sm text-muted">{description}</p>
              </article>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/enquiry"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: "var(--color-primary)" }}>
            Ask about faculty profiles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
