"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Tag, Clock, ArrowRight, Newspaper, BookOpen, Filter, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

const articles = [
  { id: "1", slug: "supreme-court-article-21-digital-privacy", title: "Supreme Court Expands Article 21 to Include Digital Privacy Rights", category: "Legal News", date: new Date("2024-11-15"), summary: "The Supreme Court ruled that surveillance without adequate oversight violates the fundamental right to life and liberty under Article 21 of the Constitution.", clatRelevance: "Very High", readTime: 5, tags: ["Supreme Court", "Article 21", "Privacy", "Digital Rights"] },
  { id: "2", slug: "india-eu-trade-agreement", title: "India-EU Free Trade Agreement Signed — Key Provisions Explained", category: "International", date: new Date("2024-11-14"), summary: "India and EU sign comprehensive free trade deal covering goods, services, and intellectual property rights after 10 years of negotiations.", clatRelevance: "High", readTime: 6, tags: ["India", "EU", "Trade", "Economy"] },
  { id: "3", slug: "new-criminal-laws-india", title: "New Criminal Laws Replace IPC, CrPC, Evidence Act — CLAT Perspective", category: "Legal News", date: new Date("2024-11-13"), summary: "BNS, BNSS and BSA officially come into force, replacing colonial-era IPC, CrPC, and Evidence Act. Critical for CLAT Legal Reasoning.", clatRelevance: "Very High", readTime: 8, tags: ["BNS", "BNSS", "BSA", "Criminal Law"] },
  { id: "4", slug: "g20-new-delhi-outcomes", title: "G20 New Delhi Summit — Key Outcomes for CLAT 2025", category: "International", date: new Date("2024-11-12"), summary: "India's G20 Presidency concludes with landmark New Delhi Declaration. Important outcomes on climate, debt, digital infrastructure and SDGs.", clatRelevance: "High", readTime: 5, tags: ["G20", "India", "International Affairs"] },
  { id: "5", slug: "chandrayaan-3-legal-implications", title: "Chandrayaan-3 Success: Space Law and India's Obligations", category: "Science & Tech", date: new Date("2024-11-11"), summary: "India's successful moon landing raises questions about space law, the Outer Space Treaty 1967, and India's legal obligations in space exploration.", clatRelevance: "Medium", readTime: 4, tags: ["Chandrayaan", "Space Law", "ISRO"] },
  { id: "6", slug: "right-to-education-amendments", title: "Right to Education Act Amendments 2024 — What Changed?", category: "National", date: new Date("2024-11-10"), summary: "Parliament passes key amendments to the RTE Act, including extended age limits, stronger inclusion provisions, and enhanced teacher training requirements.", clatRelevance: "High", readTime: 5, tags: ["RTE", "Education", "Parliament"] },
  { id: "7", slug: "supreme-court-electoral-bonds", title: "Electoral Bonds Scheme Struck Down — Constitutional Analysis", category: "Legal News", date: new Date("2024-11-09"), summary: "A 5-judge constitution bench unanimously struck down the Electoral Bonds Scheme, ruling it violated the right to information under Article 19(1)(a).", clatRelevance: "Very High", readTime: 7, tags: ["Electoral Bonds", "Supreme Court", "Article 19"] },
  { id: "8", slug: "india-gdp-growth-q2", title: "India's GDP Growth — Q2 2024-25 Analysis", category: "Economy", date: new Date("2024-11-08"), summary: "India's GDP grew at 7.2% in Q2 FY25, driven by manufacturing and services. Analysis of what this means for CLAT current affairs.", clatRelevance: "Medium", readTime: 4, tags: ["GDP", "Economy", "Growth"] },
];

const categories = ["All", "Legal News", "National", "International", "Economy", "Science & Tech", "Awards", "Sports"];
const periods = ["All Time", "Today", "This Week", "This Month"];

const categoryColors: Record<string, string> = {
  "Legal News": "bg-blue-100 text-blue-700",
  "National": "bg-violet-100 text-violet-700",
  "International": "bg-emerald-100 text-emerald-700",
  "Economy": "bg-amber-100 text-amber-700",
  "Science & Tech": "bg-rose-100 text-rose-700",
  "Awards": "bg-orange-100 text-orange-700",
  "Sports": "bg-teal-100 text-teal-700",
};

const relevanceColors: Record<string, string> = {
  "Very High": "text-rose-600 bg-rose-50",
  "High": "text-amber-600 bg-amber-50",
  "Medium": "text-blue-600 bg-blue-50",
};

export default function CurrentAffairsClient() {
  const [category, setCategory] = useState("All");
  const [period, setPeriod] = useState("All Time");
  const [search, setSearch] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat = category === "All" || a.category === category;
    const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <div className="gradient-hero py-14">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Current Affairs
            </span>
            <h1 className="font-playfair text-4xl font-bold text-white mb-3">
              Daily Current Affairs for CLAT
            </h1>
            <p className="text-blue-200/70 max-w-lg mx-auto mb-6">
              Curated daily news with CLAT relevance analysis, important facts, and practice questions.
            </p>
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search current affairs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-slate-800 placeholder-slate-400 outline-none text-sm shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-500">Category:</span>
          </div>
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${category === c ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
              {c}
            </button>
          ))}
          <div className="ml-auto flex gap-2">
            {periods.map((p) => (
              <button key={p} onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${period === p ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Daily Articles", value: "5-8", icon: Newspaper, color: "from-blue-500 to-blue-700" },
            { label: "CLAT Quizzes", value: "1/day", icon: BookOpen, color: "from-amber-500 to-orange-600" },
            { label: "Total Articles", value: "500+", icon: Calendar, color: "from-emerald-500 to-teal-600" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg font-playfair">{s.value}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">No articles found. Try a different search.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((article, i) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="group p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category] || "bg-slate-100 text-slate-600"}`}>
                    <Tag className="w-2.5 h-2.5 inline mr-1" />{article.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${relevanceColors[article.clatRelevance]}`}>
                    CLAT: {article.clatRelevance}
                  </span>
                  <span className="text-xs text-slate-400 ml-auto flex items-center gap-1">
                    <Clock className="w-3 h-3" />{article.readTime} min
                  </span>
                </div>
                <h2 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 mb-3 line-clamp-2 leading-relaxed">{article.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-medium">#{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs text-slate-400">{formatDate(article.date)}</span>
                  <div className="flex gap-2">
                    <Link href={`/current-affairs/${article.slug}`}
                      className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:text-blue-800">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link href="/current-affairs/quiz"
                      className="px-3 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-semibold hover:bg-amber-100 transition-colors">
                      Quiz
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Daily Quiz CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-1">📝 Today's Current Affairs Quiz</h3>
            <p className="text-blue-200 text-sm">10 questions based on today's top news — takes just 5 minutes.</p>
          </div>
          <Link href="/current-affairs/quiz"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-colors whitespace-nowrap">
            Start Today's Quiz <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
