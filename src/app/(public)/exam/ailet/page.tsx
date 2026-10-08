import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AILET 2025 — Exam Pattern, Eligibility & Preparation | LexAscent",
  description:
    "Complete guide to AILET — All India Law Entrance Test for NLU Delhi. Exam pattern, syllabus, eligibility, important dates, and preparation tips.",
};

export default function AILETPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="gradient-hero py-14">
          <div className="container-custom text-center">
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Exam Guide
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-3">
              AILET 2025 — Complete Guide
            </h1>
            <p className="text-blue-200/70 max-w-xl mx-auto">
              All India Law Entrance Test for admission to National Law University Delhi — India's #1 law school.
            </p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">What is AILET?</h2>
                <p className="text-slate-600 leading-relaxed">
                  AILET (All India Law Entrance Test) is conducted by <strong>National Law University, Delhi</strong> for admission to its prestigious BA LLB (Hons) and LLM programs. NLU Delhi consistently ranks #1 among law schools in India in the NIRF rankings.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  AILET is considered more competitive than CLAT due to NLU Delhi's reputation, high demand, and limited seats. Only around 100 seats are available for the BA LLB program, with 50,000+ applicants vying for them.
                </p>
              </section>

              {/* Exam Pattern */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">AILET 2025 Exam Pattern</h2>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-4 py-3">Section</th>
                        <th className="text-center px-4 py-3">Questions</th>
                        <th className="text-center px-4 py-3">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["English", "25", "25"],
                        ["Current Affairs & GK", "25", "25"],
                        ["Legal Aptitude", "35", "35"],
                        ["Reasoning", "15", "15"],
                        ["Total", "100", "100"],
                      ].map(([sec, q, m], i) => (
                        <tr key={sec} className={i === 4 ? "bg-blue-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-4 py-3 text-slate-700">{sec}</td>
                          <td className="px-4 py-3 text-center text-slate-600">{q}</td>
                          <td className="px-4 py-3 text-center text-slate-600">{m}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">Duration: 90 minutes | Negative marking: -0.25 per wrong answer</p>
              </section>

              {/* CLAT vs AILET */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">CLAT vs AILET — Key Differences</h2>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left px-4 py-3 text-slate-700">Parameter</th>
                        <th className="text-center px-4 py-3 text-blue-700">CLAT</th>
                        <th className="text-center px-4 py-3 text-rose-700">AILET</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Conducting Body", "Consortium of NLUs", "NLU Delhi"],
                        ["Questions", "120", "100"],
                        ["Duration", "120 mins", "90 mins"],
                        ["NLUs", "24 NLUs", "Only NLU Delhi"],
                        ["Seats (UG)", "~3,500+", "~100"],
                        ["Difficulty", "High", "Very High"],
                        ["Focus", "Comprehension-based", "Direct factual"],
                      ].map(([param, clat, ailet], i) => (
                        <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-4 py-3 font-medium text-slate-700">{param}</td>
                          <td className="px-4 py-3 text-center text-slate-600">{clat}</td>
                          <td className="px-4 py-3 text-center text-slate-600">{ailet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-playfair font-bold text-slate-900 mb-3">Important Dates</h3>
                {[
                  ["Notification", "October 2024"],
                  ["Registration", "October–November 2024"],
                  ["Admit Card", "November 2024"],
                  ["Exam Date", "December 2024"],
                  ["Result", "December 2024"],
                ].map(([e, d]) => (
                  <div key={e} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                    <span className="text-xs text-slate-500">{e}</span>
                    <span className="text-xs font-semibold text-slate-700">{d}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-rose-50 border border-rose-100">
                <h3 className="font-semibold text-rose-800 mb-2">🎯 AILET Specialised Course</h3>
                <p className="text-rose-700 text-sm mb-3">10-month dedicated AILET program with NLU Delhi alumni faculty.</p>
                <a href="/courses/ailet-preparation"
                  className="block w-full text-center py-2.5 rounded-lg bg-rose-600 text-white font-semibold text-sm hover:bg-rose-700 transition-colors">
                  View AILET Course →
                </a>
              </div>

              <div className="p-5 rounded-xl bg-blue-600 text-white">
                <h3 className="font-semibold mb-2">💡 LexAscent Recommends</h3>
                <p className="text-blue-100 text-sm mb-3">Target CLAT + AILET together for maximum options and best shot at NLU Delhi.</p>
                <a href="/courses/clat-ailet-combo"
                  className="block w-full text-center py-2.5 rounded-lg bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-colors">
                  View Combo Course →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
