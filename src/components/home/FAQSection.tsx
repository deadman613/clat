"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which batch is right for me — Foundation or Power Batch?",
    a: "If you are in Class 11, the Foundation batch gives you 24 months to build a strong base alongside your boards. If you are in Class 12 or a dropper, the Power Batch is structured for focused, intensive preparation over 12 months.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "All classes are conducted live via our online platform and are recorded. You get lifetime access to all recordings so you can revisit any topic at your own pace.",
  },
  {
    q: "How many mock tests are included?",
    a: "Our flagship Power Batch includes 500+ full-length and sectional mock tests, calibrated to the latest CLAT pattern. Each test has detailed analytics and comparative rank reports.",
  },
  {
    q: "Do you offer offline / classroom coaching?",
    a: "Our primary delivery is online-live. Classroom batches in Delhi run for selected courses. Contact us to check current availability near you.",
  },
  {
    q: "What is the refund policy if I change my mind?",
    a: "We offer a 7-day full refund from the date of enrolment if you have attended fewer than 3 classes. Partial refunds are available up to 30 days as per our Refund Policy.",
  },
  {
    q: "Does LexAscent also prepare students for AILET?",
    a: "Yes. We run a dedicated AILET Preparation course and our faculty includes alumni from NLU Delhi. AILET students can also access the CLAT Power Batch since the syllabi overlap significantly.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0); // first one open by default

  return (
    <section className="section-padding band-surface">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
            FAQ
          </p>
          <h2 className="heading-display text-2xl sm:text-3xl mb-1">Common Questions</h2>
          <div className="rule mx-auto" />
        </div>

        <div className="rounded-[var(--radius)] overflow-hidden"
          style={{ border: "1px solid var(--color-border)" }}>
          {faqs.map(({ q, a }, i) => (
            <div key={q}
              style={{ borderBottom: i < faqs.length - 1 ? "1px solid var(--color-border)" : "none" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 text-left transition-colors hover:bg-white"
                style={{
                  minHeight: 48,
                  background: open === i ? "#fff" : "transparent",
                  fontFamily: "var(--font-inter)",
                }}>
                <span className="text-sm font-semibold pr-4 py-3.5" style={{ color: "var(--color-ink)" }}>
                  {q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  style={{ color: "var(--color-primary)" }}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-4" style={{ background: "#fff" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
