"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Users, FileText, ArrowRight, SlidersHorizontal } from "lucide-react";

const allCourses = [
  {
    tag: "Class 11",
    name: "CLAT Foundation",
    slug: "clat-foundation",
    audience: "class11",
    mode: "online",
    category: "individual",
    desc: "2-year integrated program balancing board preparation and CLAT readiness from the ground up.",
    facts: [
      { icon: Clock,    text: "24 months" },
      { icon: Users,    text: "Live online + recordings" },
      { icon: FileText, text: "Board + CLAT integrated" },
    ],
    price: 54999,
  },
  {
    tag: "Class 12 & Dropper",
    name: "CLAT Power Batch",
    slug: "clat-power-batch",
    audience: "class12",
    mode: "online",
    category: "individual",
    desc: "Our flagship 12-month intensive batch for serious CLAT aspirants aiming for top-10 NLUs.",
    facts: [
      { icon: Clock,    text: "12 months" },
      { icon: Users,    text: "Batch size max 30" },
      { icon: FileText, text: "500+ mock tests" },
    ],
    price: 74999,
  },
  {
    tag: "Dropper",
    name: "CLAT Dropper Batch",
    slug: "clat-dropper",
    audience: "dropper",
    mode: "online",
    category: "individual",
    desc: "Structured re-attempt strategy with advanced mock analytics and one-on-one mentoring.",
    facts: [
      { icon: Clock,    text: "10 months" },
      { icon: Users,    text: "Weekly 1-on-1 sessions" },
      { icon: FileText, text: "300+ mocks + PYQs" },
    ],
    price: 64999,
  },
  {
    tag: "Quick Revision",
    name: "CLAT Crash Course",
    slug: "clat-crash-course",
    audience: "class12",
    mode: "online",
    category: "individual",
    desc: "3-month sprint for students who need structured revision and test practice before the exam.",
    facts: [
      { icon: Clock,    text: "3 months" },
      { icon: Users,    text: "Weekend + weekday" },
      { icon: FileText, text: "100+ targeted mocks" },
    ],
    price: 24999,
  },
  {
    tag: "AILET",
    name: "AILET Preparation",
    slug: "ailet-preparation",
    audience: "ailet",
    mode: "online",
    category: "individual",
    desc: "Dedicated NLU Delhi prep with faculty who are NALSAR and NLU Delhi alumni.",
    facts: [
      { icon: Clock,    text: "8 months" },
      { icon: Users,    text: "Specialised AILET faculty" },
      { icon: FileText, text: "200+ AILET-pattern mocks" },
    ],
    price: 49999,
  },
  {
    tag: "Best Value",
    name: "CLAT + AILET Combo",
    slug: "clat-ailet-combo",
    audience: "class12",
    mode: "online",
    category: "combo",
    desc: "Covers both CLAT and AILET in one plan — maximum flexibility, one fee.",
    facts: [
      { icon: Clock,    text: "12 months" },
      { icon: Users,    text: "2 expert faculty teams" },
      { icon: FileText, text: "700+ combined mocks" },
    ],
    price: 89999,
  },
];

const modeFilters     = ["All Modes", "online", "offline", "test-series"];
const categoryFilters = ["All Categories", "individual", "combo"];
const audienceFilters = ["All Students", "class11", "class12", "dropper", "ailet"];

const labelMap: Record<string, string> = {
  online: "Online / Live", offline: "Face to Face",
  "test-series": "Test Series",
  individual: "Individual", combo: "Combo",
  class11: "Class 11", class12: "Class 12", dropper: "Dropper", ailet: "AILET",
};

export default function CoursesClientPage() {
  const [audience, setAudience] = useState("All Students");
  const [mode,     setMode]     = useState("All Modes");
  const [category, setCategory] = useState("All Categories");

  const filtered = allCourses.filter((c) => {
    const byAud = audience === "All Students" || c.audience === audience;
    const byMode = mode === "All Modes" || c.mode === mode;
    const byCat  = category === "All Categories" || c.category === category;
    return byAud && byMode && byCat;
  });

  const FilterBar = ({ options, value, set }: { options: string[]; value: string; set: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button key={opt} onClick={() => set(opt)}
          className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
          style={{
            background: value === opt ? "var(--color-primary)" : "var(--color-surface)",
            color: value === opt ? "#fff" : "var(--color-muted)",
            border: `1px solid ${value === opt ? "var(--color-primary)" : "var(--color-border)"}`,
          }}>
          {labelMap[opt] || opt}
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* Page header */}
      <div className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-inter)" }}>
            Courses
          </p>
          <h1 className="heading-display text-3xl sm:text-4xl mb-3" style={{ color: "#fff" }}>
            Find Your Course
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "36rem", margin: "0 auto" }}>
            Filter by your current class, preferred mode, and course type.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="band-surface py-6 border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="container-custom space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--color-muted)" }}>
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>
                I am in
              </p>
              <FilterBar options={audienceFilters} value={audience} set={setAudience} />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>
                  Mode
                </p>
                <FilterBar options={modeFilters} value={mode} set={setMode} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>
                  Category
                </p>
                <FilterBar options={categoryFilters} value={category} set={setCategory} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course cards */}
      <div className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-serif)" }}>
                No courses match your filters
              </p>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>Try adjusting or clearing the filters above.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(({ tag, name, slug, desc, facts, price }, i) => (
                <motion.div key={slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}>
                  <article className="card card-hover flex flex-col h-full p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full self-start mb-4"
                      style={{ background: "rgba(107,30,46,0.08)", color: "var(--color-primary)" }}>
                      {tag}
                    </span>
                    <h2 className="text-lg font-semibold mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                      {name}
                    </h2>
                    <p className="text-sm mb-5 flex-1" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>{desc}</p>
                    <ul className="space-y-2 mb-6">
                      {facts.map(({ icon: Icon, text }) => (
                        <li key={text} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--color-ink)" }}>
                          <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                          {text}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4 flex items-center justify-between"
                      style={{ borderColor: "var(--color-border)" }}>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: "var(--color-muted)" }}>Starting from</p>
                        <p className="text-xl font-semibold"
                          style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                          ₹{price.toLocaleString("en-IN")}
                        </p>
                      </div>
                      <Link href={`/courses/${slug}`}
                        className="btn btn-primary text-sm px-4 flex items-center gap-1.5">
                        View Course <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
