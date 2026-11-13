"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, ExternalLink } from "lucide-react";
import { currentAffairsArticles } from "@/lib/current-affairs-articles";

const categories = ["All", "Polity", "Economy", "International", "Legal", "Science & Tech", "Environment"];
const periods    = ["All Time", "This Week", "This Month"];

const relevanceStyle: Record<string, { bg: string; color: string }> = {
  High:   { bg: "rgba(0,0,0,0.08)", color: "var(--color-primary)" },
  Medium: { bg: "rgba(0,0,0,0.05)", color: "var(--color-muted)" },
};

export default function CurrentAffairsClient() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("All");
  const [period, setPeriod]     = useState("All Time");

  const filtered = currentAffairsArticles.filter((a) => {
    const matchCat = category === "All" || a.category === category;
    const matchQ   = search === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      {/* Header */}
      <div className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-inter)" }}>
            Free Resource
          </p>
          <h1 className="heading-display text-3xl sm:text-4xl mb-2" style={{ color: "#fff" }}>
            Daily Current Affairs for CLAT
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "36rem", margin: "0 auto" }}>
            CLAT-relevant news, curated and explained every day. Sorted by relevance to the actual exam.
          </p>
        </div>
      </div>

      {/* Search + filters */}
      <div className="band-surface py-5 border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="container-custom space-y-4">
          {/* Search */}
          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-muted)" }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles…"
              style={{ paddingLeft: "2.25rem" }}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCategory(c)}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={{
                  background: category === c ? "var(--color-primary)" : "var(--color-paper)",
                  color: category === c ? "#fff" : "var(--color-muted)",
                  border: `1px solid ${category === c ? "var(--color-primary)" : "var(--color-border)"}`,
                }}>
                {c}
              </button>
            ))}
          </div>

          {/* Period */}
          <div className="flex gap-2">
            {periods.map((p) => (
              <button key={p} onClick={() => setPeriod(p)}
                className="px-3 py-1 text-xs rounded-full font-medium transition-colors"
                style={{
                  background: period === p ? "var(--color-ink)" : "transparent",
                  color: period === p ? "#fff" : "var(--color-muted)",
                  border: `1px solid ${period === p ? "var(--color-ink)" : "var(--color-border)"}`,
                }}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          <h2 className="sr-only">Latest current affairs articles</h2>
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                No articles match your search
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a, i) => (
                <motion.article key={a.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="card card-hover flex flex-col h-full p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
                      {a.category}
                    </span>
                    <span className="pill"
                      style={{
                        background: relevanceStyle[a.relevance].bg,
                        color: relevanceStyle[a.relevance].color,
                      }}>
                      {a.relevance} Relevance
                    </span>
                  </div>

                  <h3 className="text-base font-semibold mb-2 leading-snug flex-1"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                    {a.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {a.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {a.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "var(--color-surface)", color: "var(--color-muted)", border: "1px solid var(--color-border)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs mt-auto pt-3"
                    style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-muted)" }}>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      {a.mins} min read · {a.date}
                    </div>
                    <button className="flex items-center gap-1 font-semibold hover:underline"
                      style={{ color: "var(--color-primary)" }}>
                      Read <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
