"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Trophy } from "lucide-react";

const years = ["All Years", "2024", "2023", "2022"];
const exams  = ["All Exams", "CLAT", "AILET"];

const toppers = [
  { initials: "AS", name: "Ananya Sharma",  rank: "AIR 3",  nlu: "NLSIU Bangalore", year: 2024, exam: "CLAT" },
  { initials: "RG", name: "Rishi Gupta",    rank: "AIR 7",  nlu: "NALSAR Hyderabad",year: 2024, exam: "CLAT" },
  { initials: "PN", name: "Priya Nair",     rank: "AIR 12", nlu: "NLU Delhi",        year: 2024, exam: "CLAT" },
  { initials: "AM", name: "Arjun Mehta",    rank: "AIR 19", nlu: "NUJS Kolkata",     year: 2024, exam: "CLAT" },
  { initials: "DK", name: "Divya Kapoor",   rank: "AIR 2",  nlu: "NLU Delhi",        year: 2024, exam: "AILET" },
  { initials: "SS", name: "Siddharth Singh",rank: "AIR 45", nlu: "NLU Jodhpur",      year: 2024, exam: "CLAT" },
];

const allResults = [
  ...toppers,
  { initials: "MK", name: "Meera Krishnan", rank: "AIR 58",  nlu: "GNLU Gandhinagar",  year: 2024, exam: "CLAT" },
  { initials: "VP", name: "Varun Patel",    rank: "AIR 72",  nlu: "RMLNLU Lucknow",    year: 2024, exam: "CLAT" },
  { initials: "KR", name: "Kiran Rao",      rank: "AIR 14",  nlu: "NALSAR Hyderabad",  year: 2023, exam: "CLAT" },
  { initials: "TS", name: "Tanvi Shah",     rank: "AIR 28",  nlu: "NLSIU Bangalore",   year: 2023, exam: "CLAT" },
  { initials: "AN", name: "Aditya Nair",    rank: "AIR 4",   nlu: "NLU Delhi",         year: 2023, exam: "AILET" },
  { initials: "PG", name: "Pooja Gupta",    rank: "AIR 91",  nlu: "HNLU Raipur",       year: 2023, exam: "CLAT" },
];

export default function ResultsClient() {
  const [year, setYear]   = useState("All Years");
  const [exam, setExam]   = useState("All Exams");
  const [search, setSearch] = useState("");

  const filtered = allResults.filter((r) => {
    const byYear = year === "All Years" || r.year === parseInt(year);
    const byExam = exam === "All Exams" || r.exam === exam;
    const byQ    = search === "" || r.name.toLowerCase().includes(search.toLowerCase()) ||
                   r.nlu.toLowerCase().includes(search.toLowerCase());
    return byYear && byExam && byQ;
  });

  const top6 = toppers.filter((r) => {
    const byYear = year === "All Years" || r.year === parseInt(year);
    const byExam = exam === "All Exams" || r.exam === exam;
    return byYear && byExam;
  });

  return (
    <>
      {/* Header */}
      <div className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-inter)" }}>
            Student Results
          </p>
          <h1 className="heading-display text-3xl sm:text-4xl mb-2" style={{ color: "#fff" }}>
            Our Students. Top NLUs.
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Verified selections from CLAT 2024, 2023 and 2022.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="band-surface py-5 border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="container-custom flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-muted)" }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or NLU…"
              style={{ paddingLeft: "2.25rem", width: 220 }} />
          </div>

          {/* Year chips */}
          <div className="flex flex-wrap gap-2">
            {years.map((y) => (
              <button key={y} onClick={() => setYear(y)}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={{
                  background: year === y ? "var(--color-primary)" : "var(--color-paper)",
                  color: year === y ? "#fff" : "var(--color-muted)",
                  border: `1px solid ${year === y ? "var(--color-primary)" : "var(--color-border)"}`,
                }}>
                {y}
              </button>
            ))}
          </div>

          {/* Exam chips */}
          <div className="flex flex-wrap gap-2">
            {exams.map((e) => (
              <button key={e} onClick={() => setExam(e)}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={{
                  background: exam === e ? "var(--color-ink)" : "var(--color-paper)",
                  color: exam === e ? "#fff" : "var(--color-muted)",
                  border: `1px solid ${exam === e ? "var(--color-ink)" : "var(--color-border)"}`,
                }}>
                {e}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top achievers */}
      {top6.length > 0 && (
        <section className="section-padding band-surface">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5" style={{ color: "var(--color-gold)" }} />
              <h2 className="heading-display text-xl">Top Achievers</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {top6.map(({ initials, name, rank, nlu, year: y, exam: e }, i) => (
                <motion.div key={name + y}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}>
                  <div className="card p-4 text-center">
                    <div className="rounded-[var(--radius)] mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg"
                      style={{
                        width: "100%",
                        aspectRatio: "4/5",
                        maxHeight: 120,
                        background: "linear-gradient(160deg, var(--color-primary-dark), var(--color-primary))",
                        fontFamily: "var(--font-serif)",
                      }}>
                      {initials}
                    </div>
                    <p className="text-sm font-semibold mb-0.5" style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}>
                      {name}
                    </p>
                    <p className="text-base font-bold mb-0.5" style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                      {rank}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-muted)" }}>{nlu}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                      style={{ background: "var(--color-surface)", color: "var(--color-muted)", border: "1px solid var(--color-border)" }}>
                      {e} {y}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full table */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          <h2 className="heading-display text-xl mb-6">All Selections ({filtered.length})</h2>
          <div className="rounded-[var(--radius)] overflow-hidden"
            style={{ border: "1px solid var(--color-border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--color-ink)", color: "#fff" }}>
                  {["Student", "Rank", "NLU", "Exam", "Year"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(({ initials, name, rank, nlu, exam: e, year: y }, i) => (
                  <tr key={name + y}
                    style={{
                      background: i % 2 === 0 ? "#fff" : "var(--color-paper)",
                      borderBottom: "1px solid var(--color-border)",
                    }}>
                    <td className="px-4 py-3 font-semibold" style={{ color: "var(--color-ink)" }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ background: "var(--color-primary)", fontFamily: "var(--font-serif)" }}>
                          {initials}
                        </div>
                        {name}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-bold" style={{ color: "var(--color-primary)", fontFamily: "var(--font-serif)" }}>
                      {rank}
                    </td>
                    <td className="px-4 py-3" style={{ color: "var(--color-muted)" }}>{nlu}</td>
                    <td className="px-4 py-3">
                      <span className="pill"
                        style={{ background: "rgba(107,30,46,0.08)", color: "var(--color-primary)" }}>
                        {e}
                      </span>
                    </td>
                    <td className="px-4 py-3" style={{ color: "var(--color-muted)" }}>{y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
