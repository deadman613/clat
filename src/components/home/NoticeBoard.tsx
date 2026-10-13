"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, BookOpen, ArrowRight } from "lucide-react";

const dates = [
  {
    event: "CLAT 2025 Notification",
    date: "Oct 2024",
    status: "expected" as const,
    note: "Expected based on previous years",
  },
  {
    event: "CLAT 2025 Registration Opens",
    date: "Nov 2024",
    status: "expected" as const,
    note: "Registration window ~4 weeks",
  },
  {
    event: "CLAT 2025 Exam Date",
    date: "Dec 1, 2024",
    status: "confirmed" as const,
    note: "Confirmed by Consortium",
  },
];

const articles = [
  {
    cat: "CLAT Prep",
    title: "How to Score 100+ in CLAT Legal Reasoning",
    href: "/blog/legal-reasoning-strategy",
    mins: 6,
  },
  {
    cat: "Current Affairs",
    title: "October 2024: Key Events for CLAT Students",
    href: "/blog/oct-2024-current-affairs",
    mins: 4,
  },
  {
    cat: "Exam Update",
    title: "CLAT 2025 Pattern Change: What You Must Know",
    href: "/blog/clat-2025-pattern",
    mins: 5,
  },
];

export default function NoticeBoard() {
  const lastUpdated = "9 Oct 2024";

  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Key Dates */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
              Notice Board
            </p>
            <h2 className="heading-display text-2xl sm:text-3xl mb-1">Key Dates</h2>
            <div className="rule" />
            <p className="text-xs mb-6" style={{ color: "var(--color-muted)" }}>
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-4">
              {dates.map(({ event, date, status, note }) => (
                <div key={event} className="flex items-start gap-4 p-4 rounded-[var(--radius)]"
                  style={{ border: "1px solid var(--color-border)", background: "var(--color-paper)" }}>
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-[var(--radius)]"
                    style={{ background: "var(--color-surface)" }}>
                    <Calendar className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-0.5">
                      <p className="font-semibold text-sm" style={{ color: "var(--color-ink)" }}>{event}</p>
                      <span className={`pill ${status === "confirmed" ? "pill-confirmed" : "pill-expected"}`}>
                        {status === "confirmed" ? "Confirmed" : "Expected"}
                      </span>
                    </div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-primary)" }}>
                      {date}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-muted)" }}>{note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <Link href="/exam/clat"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: "var(--color-primary)" }}>
                Full CLAT calendar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right — Articles */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
              From the Blog
            </p>
            <h2 className="heading-display text-2xl sm:text-3xl mb-1">Read & Prepare</h2>
            <div className="rule" />

            <div className="space-y-4 mb-6">
              {articles.map(({ cat, title, href, mins }) => (
                <Link key={title} href={href}
                  className="flex items-start gap-4 p-4 rounded-[var(--radius)] card card-hover group">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-[var(--radius)]"
                    style={{ background: "var(--color-surface)" }}>
                    <BookOpen className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider mb-1 block"
                      style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
                      {cat} · {mins} min read
                    </span>
                    <p className="text-sm font-semibold leading-snug group-hover:text-[var(--color-primary)] transition-colors"
                      style={{ color: "var(--color-ink)" }}>
                      {title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quiz CTA */}
            <div className="rounded-[var(--radius)] p-5 text-center"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                Daily Current Affairs Quiz
              </p>
              <p className="text-sm mb-4" style={{ color: "var(--color-muted)" }}>
                10 questions · takes 5 minutes · free every day
              </p>
              <Link href="/quiz/daily" className="btn btn-primary text-sm">
                Take Today's Quiz
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
