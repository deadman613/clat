"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Clock, Users, FileText, ArrowRight, SlidersHorizontal } from "lucide-react";

const allCourses = [
  {
    tag: "Class 11",
    name: "CLAT Foundation",
    slug: "clat-foundation",
    audience: "class11",
    mode: "online",
    category: "individual",
    classes: ["class11"],
    onDemand: false,
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
    classes: ["class12"],
    onDemand: false,
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
    classes: [],
    onDemand: false,
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
    classes: ["class12"],
    onDemand: false,
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
    classes: [],
    onDemand: false,
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
    classes: ["class12"],
    onDemand: false,
    desc: "Covers both CLAT and AILET in one plan — maximum flexibility, one fee.",
    facts: [
      { icon: Clock,    text: "12 months" },
      { icon: Users,    text: "2 expert faculty teams" },
      { icon: FileText, text: "700+ combined mocks" },
    ],
    price: 89999,
  },
];

const filterGroups = [
  {
    id: "price",
    label: "Price",
    options: [
      { value: "free", label: "Free" },
      { value: "paid", label: "Paid" },
      { value: "on-demand", label: "On-Demand" },
    ],
  },
  {
    id: "mode",
    label: "CLAT",
    options: [
      { value: "offline", label: "Offline Program" },
      { value: "online", label: "Online Program" },
      { value: "test-series", label: "Test Series" },
    ],
  },
  {
    id: "class",
    label: "Class",
    options: [
      { value: "class9", label: "Class 9" },
      { value: "class10", label: "Class 10" },
      { value: "class11", label: "Class 11" },
      { value: "class12", label: "Class 12" },
    ],
  },
  {
    id: "audience",
    label: "Audience",
    options: [
      { value: "dropper", label: "Dropper" },
      { value: "ailet", label: "AILET" },
    ],
  },
  {
    id: "category",
    label: "Course Type",
    options: [
      { value: "individual", label: "Individual" },
      { value: "combo", label: "Combo" },
    ],
  },
];

function FilterOptions({
  groupId,
  options,
  values,
  onChange,
}: {
  groupId: string;
  options: { value: string; label: string }[];
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="courses-filter__options">
      {options.map(({ value, label }) => (
        <label key={value} className="courses-filter__option" htmlFor={`${groupId}-${value}`}>
          <input
            id={`${groupId}-${value}`}
            type="checkbox"
            checked={values.includes(value)}
            onChange={() => onChange(value)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}

export default function CoursesClientPage() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleFilter = (groupId: string, value: string) => {
    setSelectedFilters((current) => {
      const selected = current[groupId] ?? [];
      const next = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];

      return { ...current, [groupId]: next };
    });
  };

  const filtered = allCourses.filter((c) => {
    return filterGroups.every(({ id }) => {
      const selected = selectedFilters[id] ?? [];
      if (selected.length === 0) return true;

      if (id === "price") {
        return selected.some((value) => {
          if (value === "free") return c.price === 0;
          if (value === "paid") return c.price > 0;
          return value === "on-demand" && c.onDemand;
        });
      }

      if (id === "class") {
        return selected.some((value) => c.classes.includes(value));
      }
      if (id === "audience") {
        return selected.includes(c.audience);
      }
      if (id === "category") {
        return selected.includes(c.category);
      }

      return selected.includes(c.mode);
    });
  });

  const clearFilters = () => setSelectedFilters({});

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
            Filter by price, program format, class, and course type.
          </p>
        </div>
      </div>

      <section className="courses-catalog">
        <div className="container-custom courses-catalog__layout">
          <aside className="courses-filter" aria-label="Filter courses">
            <div className="courses-filter__heading">
              <h2><SlidersHorizontal className="w-4 h-4" /> Filters</h2>
              <button type="button" onClick={clearFilters}>Clear all</button>
            </div>
            {filterGroups.map(({ id, label, options }) => (
              <details className="courses-filter__group" key={id} open>
                <summary>
                  {label}
                  <ChevronDown aria-hidden="true" />
                </summary>
                <FilterOptions
                  groupId={id}
                  options={options}
                  values={selectedFilters[id] ?? []}
                  onChange={(value) => toggleFilter(id, value)}
                />
              </details>
            ))}
          </aside>

          <div className="courses-catalog__results" aria-live="polite">
            <h2 className="sr-only">Available courses</h2>
            <p className="courses-catalog__count">
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? "program" : "programs"}
            </p>
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-serif)" }}>
                  No courses match your filters
                </p>
                <p className="text-sm mb-4" style={{ color: "var(--color-muted)" }}>Try adjusting or clearing the filters.</p>
                <button type="button" className="btn btn-secondary" onClick={clearFilters}>Clear filters</button>
              </div>
            ) : (
              <div className="courses-catalog__grid">
                {filtered.map(({ tag, name, slug, desc, facts, price }, i) => (
                  <motion.div key={slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}>
                    <article className="card card-hover flex flex-col h-full p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full self-start mb-4"
                        style={{ background: "rgba(0,0,0,0.08)", color: "var(--color-primary)" }}>
                        {tag}
                      </span>
                      <h3 className="text-lg font-semibold mb-2"
                        style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                        {name}
                      </h3>
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
      </section>
    </>
  );
}
