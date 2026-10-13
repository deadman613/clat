"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const subjects = ["All Subjects", "Legal Reasoning", "English", "Current Affairs & GK", "Logical Reasoning", "Quantitative Techniques"];

const facultyData = [
  {
    initials: "VK",
    name: "Vikram Kapoor",
    qualification: "BA LLB (Hons), NLU Delhi",
    experience: "14 years",
    subject: "Legal Reasoning",
    bio: "Former CLAT AIR 8. Has mentored 6 students who achieved top-10 ranks in the last 3 years.",
  },
  {
    initials: "SM",
    name: "Sneha Mishra",
    qualification: "MA English Literature, JNU",
    experience: "11 years",
    subject: "English",
    bio: "Specialist in reading comprehension strategy and vocabulary building for CLAT Paper A.",
  },
  {
    initials: "RB",
    name: "Rohit Bansal",
    qualification: "MA Political Science, DU",
    experience: "9 years",
    subject: "Current Affairs & GK",
    bio: "Former journalist. Writes our daily CLAT current affairs digest read by 15,000+ students.",
  },
  {
    initials: "AP",
    name: "Aditi Pandey",
    qualification: "BA LLB (Hons), NALSAR",
    experience: "8 years",
    subject: "Legal Reasoning",
    bio: "Specialist in legal principles and the new comprehension-based CLAT pattern since 2020.",
  },
  {
    initials: "KS",
    name: "Karan Sharma",
    qualification: "MBA, IIM Ahmedabad",
    experience: "7 years",
    subject: "Quantitative Techniques",
    bio: "Makes Quant accessible — from fractions to data interpretation, in the simplest way possible.",
  },
  {
    initials: "NR",
    name: "Nandita Rao",
    qualification: "MA Philosophy, BHU",
    experience: "10 years",
    subject: "Logical Reasoning",
    bio: "Critical thinking specialist. Her Logical Reasoning shortcuts are legendary among LexAscent alumni.",
  },
];

export default function FacultyClient() {
  const [subject, setSubject] = useState("All Subjects");
  const [search, setSearch]   = useState("");

  const filtered = facultyData.filter((f) => {
    const bySub = subject === "All Subjects" || f.subject === subject;
    const byQ   = search === "" || f.name.toLowerCase().includes(search.toLowerCase());
    return bySub && byQ;
  });

  return (
    <>
      {/* Header */}
      <div className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-inter)" }}>
            Faculty
          </p>
          <h1 className="heading-display text-3xl sm:text-4xl mb-2" style={{ color: "#fff" }}>
            Meet Your Mentors
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Experts who've been there — most are CLAT and NLU alumni themselves.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="band-surface py-5 border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="container-custom space-y-4">
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-muted)" }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name…"
              style={{ paddingLeft: "2.25rem" }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <button key={s} onClick={() => setSubject(s)}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={{
                  background: subject === s ? "var(--color-primary)" : "var(--color-paper)",
                  color: subject === s ? "#fff" : "var(--color-muted)",
                  border: `1px solid ${subject === s ? "var(--color-primary)" : "var(--color-border)"}`,
                }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ initials, name, qualification, experience, subject: sub, bio }, i) => (
              <motion.article key={name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="card card-hover flex flex-col">
                {/* 4:5 photo area */}
                <div className="rounded-t-[var(--radius)] flex items-center justify-center text-white font-bold text-3xl"
                  style={{
                    aspectRatio: "4/5",
                    maxHeight: 240,
                    background: "linear-gradient(160deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
                    fontFamily: "var(--font-serif)",
                  }}>
                  {initials}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-base font-semibold mb-1"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                    {name}
                  </h2>

                  {/* Qualification chip */}
                  <span className="inline-block text-xs px-2.5 py-0.5 rounded-full self-start mb-1"
                    style={{
                      background: "var(--color-surface)",
                      color: "var(--color-muted)",
                      border: "1px solid var(--color-border)",
                    }}>
                    {qualification} · {experience}
                  </span>

                  <p className="text-xs font-semibold mb-3" style={{ color: "var(--color-gold)" }}>
                    {sub}
                  </p>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-muted)" }}>
                    {bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
