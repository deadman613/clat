"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Users, FileText, ArrowRight } from "lucide-react";

const courses = [
  {
    tag: "Most Popular",
    name: "CLAT Power Batch",
    audience: "Class 12 & Droppers",
    facts: [
      { icon: Clock,    text: "12 months" },
      { icon: Users,    text: "Small batches — 30 max" },
      { icon: FileText, text: "500+ mock tests included" },
    ],
    price: 74999,
    href: "/courses/clat-power-batch",
  },
  {
    tag: "Early Start",
    name: "CLAT Foundation",
    audience: "Class 11 students",
    facts: [
      { icon: Clock,    text: "24 months" },
      { icon: Users,    text: "Live online + recordings" },
      { icon: FileText, text: "Board + CLAT integrated" },
    ],
    price: 54999,
    href: "/courses/clat-foundation",
  },
  {
    tag: "Quick Revision",
    name: "CLAT Crash Course",
    audience: "Class 12 / Droppers",
    facts: [
      { icon: Clock,    text: "3 months intensive" },
      { icon: Users,    text: "Weekend + weekday batches" },
      { icon: FileText, text: "100+ targeted mocks" },
    ],
    price: 24999,
    href: "/courses/clat-crash-course",
  },
];

export default function CoursesSection() {
  return (
    <section className="band-surface section-padding">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
            Courses
          </p>
          <h2 className="heading-display text-2xl sm:text-3xl mb-1">Choose Your Path</h2>
          <div className="rule mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {courses.map(({ tag, name, audience, facts, price, href }, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>
              <article className="card card-hover flex flex-col h-full p-6">
                {/* Tag */}
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full self-start mb-4"
                  style={{
                    background: "rgba(107,30,46,0.08)",
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-inter)",
                  }}>
                  {tag}
                </span>

                <h3 className="text-lg font-semibold mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                  {name}
                </h3>
                <p className="text-sm mb-5" style={{ color: "var(--color-muted)" }}>{audience}</p>

                {/* Three facts */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {facts.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5 text-sm"
                      style={{ color: "var(--color-ink)" }}>
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                      {text}
                    </li>
                  ))}
                </ul>

                {/* Price — NO strikethrough, NO save badge */}
                <div className="border-t pt-4 flex items-center justify-between"
                  style={{ borderColor: "var(--color-border)" }}>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "var(--color-muted)" }}>Starting from</p>
                    <p className="text-xl font-semibold"
                      style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                      ₹{price.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <Link href={href} className="btn btn-primary text-sm px-4">
                    Enrol Now
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: "var(--color-primary)" }}>
            View all courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
