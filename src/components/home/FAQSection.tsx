"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is CLAT and who conducts it?",
    answer:
      "CLAT (Common Law Admission Test) is a national-level entrance examination conducted by the Consortium of NLUs (National Law Universities) for admission to undergraduate (BA LLB) and postgraduate (LLM) law programs across 24 top NLUs in India. The exam tests candidates on English Language, Current Affairs & GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques.",
  },
  {
    question: "What is the eligibility criteria for CLAT?",
    answer:
      "For UG programs: You must have passed 10+2 or equivalent with a minimum of 45% marks (40% for SC/ST). Students appearing in Class 12 exams are also eligible. For PG programs: You need an LLB degree with a minimum of 50% marks (45% for SC/ST). There is no upper age limit for CLAT.",
  },
  {
    question: "What is the CLAT exam pattern?",
    answer:
      "CLAT 2025 has 120 questions in 120 minutes. Sections include: English Language (22-26 questions), Current Affairs including GK (28-32 questions), Legal Reasoning (28-32 questions), Logical Reasoning (22-26 questions), and Quantitative Techniques (10-14 questions). Each correct answer = +1 mark; each incorrect = -0.25 marks.",
  },
  {
    question: "How should I start preparing for CLAT?",
    answer:
      "Begin with understanding the syllabus and exam pattern thoroughly. Start reading a quality newspaper daily (The Hindu/Indian Express) for current affairs. Solve CLAT previous year papers to understand the question style. Join a structured coaching program for guided preparation. Practice mock tests regularly and analyze your performance. LexAscent offers a free introductory session to help you create a personalized study plan.",
  },
  {
    question: "What is a good CLAT score to get into a top NLU?",
    answer:
      "For top NLUs like NLU Delhi (AILET), NALSAR, and NUJS, you typically need 100+ out of 120 marks. For mid-tier NLUs, a score of 85-100 is usually sufficient. The cutoffs vary by category — SC/ST categories have relaxed cutoffs. In recent years, AIR 1 has scored around 113-115 marks.",
  },
  {
    question: "How many mock tests should I attempt before CLAT?",
    answer:
      "We recommend attempting at least 30-40 full-length mock tests before the examination. More importantly, thorough analysis after each mock test is crucial — understand why you got questions wrong, identify patterns in your mistakes, and work on improvement. LexAscent provides 150+ full-length mocks plus 500+ sectional tests with detailed analytics.",
  },
  {
    question: "What is AILET and how is it different from CLAT?",
    answer:
      "AILET (All India Law Entrance Test) is conducted by National Law University Delhi for admission to NLU Delhi — India's #1 law school. Unlike CLAT, AILET is only for NLU Delhi. The exam has 100 questions in 90 minutes across English, Current Affairs, GK, Legal Aptitude, and Reasoning. It's considered more competitive than CLAT due to NLU Delhi's prestige.",
  },
  {
    question: "Can I prepare for CLAT online effectively?",
    answer:
      "Absolutely. Online CLAT preparation has become equally effective as offline, provided you choose the right platform. LexAscent offers live interactive classes, recorded lectures, online mock tests with real-time analytics, daily current affairs, and one-on-one doubt clearing sessions — everything you need to crack CLAT from the comfort of your home.",
  },
  {
    question: "What courses does LexAscent offer for CLAT preparation?",
    answer:
      "LexAscent offers CLAT Foundation (24 months for Class 11-12 students), CLAT Dropper Batch (12 months for repeat aspirants), CLAT Crash Course (3 months intensive), CLAT Power Batch (premium 15-month program), AILET Preparation (specialized), and CLAT + AILET Combo (comprehensive 18-month program). We have courses for every budget and timeline.",
  },
  {
    question: "Does LexAscent provide study material?",
    answer:
      "Yes, all LexAscent courses include comprehensive study material covering all CLAT subjects — Legal Reasoning, Logical Reasoning, English Language, Quantitative Techniques, and Current Affairs. The material is updated annually and includes theory notes, practice exercises, previous year papers, and subject-wise revision guides. Students can also access digital PDFs and practice questions through the student dashboard.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
              FAQ
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Everything you need to know about CLAT preparation and LexAscent.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === i
                    ? "border-blue-200 shadow-md shadow-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span
                    className={`font-semibold pr-4 ${
                      openIndex === i ? "text-blue-700" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === i ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-blue-50 pt-4 bg-blue-50/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* More questions CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center mt-10"
          >
            <p className="text-slate-500 mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Talk to a Counsellor →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
