"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Newspaper, Tag, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

const articles = [
  {
    id: "1",
    title: "Supreme Court Rules on Article 21 Right to Privacy in Digital Age",
    category: "Legal News",
    date: new Date("2024-11-15"),
    summary:
      "The Supreme Court of India has expanded the interpretation of Article 21 to include digital privacy rights, ruling that surveillance without oversight violates the right to life and liberty.",
    clatRelevance: "High — Legal Reasoning, GK",
    readTime: 4,
    slug: "supreme-court-article-21-digital-privacy",
  },
  {
    id: "2",
    title: "India Signs Historic Trade Agreement with EU — Key Provisions Explained",
    category: "International",
    date: new Date("2024-11-14"),
    summary:
      "India and the European Union have signed a comprehensive free trade agreement covering goods, services, and intellectual property. Key highlights for CLAT current affairs preparation.",
    clatRelevance: "High — Current Affairs, Economy",
    readTime: 5,
    slug: "india-eu-trade-agreement-explained",
  },
  {
    id: "3",
    title: "New Criminal Laws Replace IPC, CrPC, Evidence Act — Everything You Need to Know",
    category: "Legal News",
    date: new Date("2024-11-13"),
    summary:
      "The Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) come into effect, replacing colonial-era laws.",
    clatRelevance: "Very High — Legal Reasoning",
    readTime: 7,
    slug: "new-criminal-laws-bns-bnss-bsa",
  },
  {
    id: "4",
    title: "National Education Policy 2024 Amendments — Implications for Law Entrance",
    category: "National",
    date: new Date("2024-11-12"),
    summary:
      "The government announces key amendments to NEP 2020, including changes to law school admission criteria and integrated law programs at central universities.",
    clatRelevance: "Medium — Current Affairs",
    readTime: 4,
    slug: "nep-2024-amendments-law-entrance",
  },
];

const categoryColors: Record<string, string> = {
  "Legal News": "bg-blue-50 text-blue-700",
  International: "bg-emerald-50 text-emerald-700",
  National: "bg-violet-50 text-violet-700",
  Economy: "bg-amber-50 text-amber-700",
};

export default function CurrentAffairsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-2">
              Current Affairs
            </span>
            <h2 className="font-playfair text-3xl font-bold text-slate-900">
              Daily Legal & Current Affairs
            </h2>
            <p className="text-slate-500 mt-1 text-sm">
              Curated news & analysis — updated every day for CLAT success.
            </p>
          </div>
          <Link
            href="/current-affairs"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[article.category] || "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Tag className="w-2.5 h-2.5 inline mr-1" />
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime} min read
                </span>
                <span className="text-xs text-slate-400 ml-auto">
                  {formatDate(article.date)}
                </span>
              </div>

              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-2">
                {article.summary}
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium">
                  <Newspaper className="w-3 h-3" />
                  CLAT Relevance: {article.clatRelevance}
                </span>
                <Link
                  href={`/current-affairs/${article.slug}`}
                  className="text-blue-600 text-xs font-semibold hover:text-blue-800 flex items-center gap-1"
                >
                  Read Article
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Take daily quiz CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              📝 Daily Current Affairs Quiz
            </h3>
            <p className="text-slate-600 text-sm">
              Test your knowledge with today's current affairs quiz — 10 questions, 5 minutes.
            </p>
          </div>
          <Link
            href="/current-affairs/quiz"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap shadow-md"
          >
            Take Today's Quiz
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
