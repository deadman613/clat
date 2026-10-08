"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen, BarChart3, Clock, Target, Flame,
  TrendingUp, ChevronRight, Award, Bell, LogOut,
  LayoutDashboard, FileText, Newspaper, User,
  CheckCircle2, Calendar, Play, Lock, ArrowRight
} from "lucide-react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, AreaChart, Area, XAxis,
  YAxis, CartesianGrid, Tooltip, BarChart, Bar
} from "recharts";

// ─── Demo data ─────────────────────────────────────────────
const mockScores = [
  { subject: "English", score: 18, total: 22, pct: 82 },
  { subject: "GK/CA", score: 16, total: 28, pct: 57 },
  { subject: "Legal Reasoning", score: 22, total: 35, pct: 63 },
  { subject: "Logical Reasoning", score: 14, total: 20, pct: 70 },
  { subject: "Quant", score: 11, total: 15, pct: 73 },
];

const radarData = mockScores.map(s => ({ subject: s.subject.split(" ")[0], score: s.pct }));

const testHistory = [
  { name: "Full Mock #8", date: "Oct 5", score: 87.5, rank: 142, total: 1240, pct: 88.5 },
  { name: "Full Mock #7", date: "Sep 28", score: 83.0, rank: 198, total: 1180, pct: 83.2 },
  { name: "Full Mock #6", date: "Sep 21", score: 79.5, rank: 247, total: 1150, pct: 78.5 },
  { name: "Sectional: Legal", date: "Sep 15", score: 28.0, rank: 89, total: 930, pct: 90.4 },
  { name: "Full Mock #5", date: "Sep 8", score: 74.0, rank: 312, total: 1100, pct: 71.6 },
];

const trendData = [
  { test: "M5", score: 74 }, { test: "M6", score: 79.5 },
  { test: "M7", score: 83 }, { test: "M8", score: 87.5 },
];

const courseModules = [
  { title: "English Language", lessons: 24, completed: 20, locked: false },
  { title: "Legal Reasoning", lessons: 32, completed: 28, locked: false },
  { title: "Current Affairs — Oct", lessons: 16, completed: 8, locked: false },
  { title: "Logical Reasoning", lessons: 20, completed: 15, locked: false },
  { title: "Quantitative Techniques", lessons: 12, completed: 12, locked: false },
  { title: "Previous Year Papers", lessons: 10, completed: 0, locked: true },
];

const upcomingTests = [
  { name: "Full Mock #9", date: "Oct 10, 2024", time: "10:00 AM", duration: "120 min" },
  { name: "Current Affairs Quiz — Oct Week 1", date: "Oct 8, 2024", time: "6:00 PM", duration: "15 min" },
  { name: "Sectional: GK / CA", date: "Oct 14, 2024", time: "10:00 AM", duration: "60 min" },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "My Course" },
  { icon: FileText, label: "Tests" },
  { icon: Newspaper, label: "Current Affairs" },
  { icon: BarChart3, label: "Analytics" },
  { icon: User, label: "Profile" },
];

export default function StudentDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const overallScore = mockScores.reduce((s, m) => s + m.score, 0);
  const totalMax = mockScores.reduce((s, m) => s + m.total, 0);
  const overallPct = Math.round((overallScore / totalMax) * 100);

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-slate-900 flex flex-col hidden md:flex">
        <div className="flex items-center gap-2.5 px-4 py-4 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">LA</span>
          </div>
          <span className="font-playfair font-bold text-white text-sm">
            Lex<span className="text-amber-400">Ascent</span>
          </span>
        </div>

        {/* Student Card */}
        <div className="px-4 py-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
              RS
            </div>
            <div>
              <div className="text-white text-xs font-semibold">Rahul Sharma</div>
              <div className="text-slate-400 text-[10px]">CLAT 2025 · Power Batch</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-amber-400 text-xs">
            <Flame className="w-3.5 h-3.5" />
            <span className="font-semibold">14-day streak!</span>
          </div>
        </div>

        <nav className="flex-1 py-3">
          {navItems.map(({ icon: Icon, label }) => (
            <button key={label} onClick={() => setActiveNav(label)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                activeNav === label
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}>
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-2 text-slate-400 hover:text-white text-xs transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
          <div>
            <div className="font-semibold text-slate-800 text-sm">Good morning, Rahul! 👋</div>
            <div className="text-xs text-slate-400">CLAT 2025 — 87 days remaining</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-100">
              <Target className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-semibold text-amber-700">AIR Target: Top 50</span>
            </div>
            <button className="relative p-2 text-slate-400 hover:text-slate-700">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Overall Score", value: `${overallPct}%`, sub: `${overallScore}/${totalMax}`, icon: BarChart3, color: "text-blue-600 bg-blue-50" },
              { label: "Tests Taken", value: "8", sub: "2 sectional + 6 full", icon: FileText, color: "text-emerald-600 bg-emerald-50" },
              { label: "Study Hours", value: "247h", sub: "This month: 42h", icon: Clock, color: "text-violet-600 bg-violet-50" },
              { label: "Study Streak", value: "14 days", sub: "Personal best!", icon: Flame, color: "text-amber-600 bg-amber-50" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                  <div className={`w-9 h-9 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 font-playfair">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                  <div className="text-[10px] text-slate-300 mt-0.5">{s.sub}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Middle Row */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Section-wise */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-slate-800 text-sm">Section-wise Performance</h2>
                <span className="text-xs text-slate-400">Last mock test</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <ResponsiveContainer width="100%" height={200}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "#64748b" }} />
                    <Radar name="Score %" dataKey="score" stroke="#1D4ED8" fill="#1D4ED8" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="space-y-2.5">
                  {mockScores.map((s) => (
                    <div key={s.subject}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-600 truncate">{s.subject}</span>
                        <span className={`text-xs font-bold ${s.pct >= 75 ? "text-emerald-600" : s.pct >= 60 ? "text-amber-600" : "text-rose-600"}`}>
                          {s.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full">
                        <div className={`h-1.5 rounded-full ${s.pct >= 75 ? "bg-emerald-500" : s.pct >= 60 ? "bg-amber-500" : "bg-rose-500"}`}
                          style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Score Trend */}
            <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <h2 className="font-semibold text-slate-800 text-sm mb-1">Score Trend</h2>
              <p className="text-xs text-slate-400 mb-3">Last 4 full mocks</p>
              <ResponsiveContainer width="100%" height={140}>
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="test" tick={{ fontSize: 10 }} />
                  <YAxis domain={[60, 100]} tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="score" stroke="#10B981" fill="url(#scoreGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-3 flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                +13.5 points improvement across 4 mocks
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Course Progress */}
            <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-slate-800 text-sm">Course Progress</h2>
                <Link href="/dashboard/course" className="text-xs text-blue-600 hover:text-blue-800">View All</Link>
              </div>
              <div className="space-y-3">
                {courseModules.map((mod) => {
                  const pct = mod.lessons > 0 ? Math.round((mod.completed / mod.lessons) * 100) : 0;
                  return (
                    <div key={mod.title} className={`flex items-center gap-3 ${mod.locked ? "opacity-50" : ""}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        mod.locked ? "bg-slate-100" : pct === 100 ? "bg-emerald-100" : "bg-blue-50"
                      }`}>
                        {mod.locked ? <Lock className="w-3.5 h-3.5 text-slate-400" /> :
                          pct === 100 ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> :
                          <Play className="w-3.5 h-3.5 text-blue-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-700 truncate">{mod.title}</span>
                          <span className="text-[10px] text-slate-400 ml-1">{pct}%</span>
                        </div>
                        <div className="h-1 bg-slate-100 rounded-full mt-1">
                          <div className={`h-1 rounded-full ${pct === 100 ? "bg-emerald-500" : "bg-blue-500"}`}
                            style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Test History */}
            <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-slate-800 text-sm">Test History</h2>
                <Link href="/dashboard/tests" className="text-xs text-blue-600">View All</Link>
              </div>
              <div className="space-y-2">
                {testHistory.slice(0, 4).map((t) => (
                  <div key={t.name} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                    <div>
                      <div className="text-xs font-semibold text-slate-800">{t.name}</div>
                      <div className="text-[10px] text-slate-400">{t.date} · Rank {t.rank}/{t.total}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold font-playfair ${
                        t.score >= 85 ? "text-emerald-600" : t.score >= 75 ? "text-amber-600" : "text-rose-600"
                      }`}>{t.score}</div>
                      <div className="text-[10px] text-slate-400">{t.pct}%ile</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tests */}
            <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-slate-800 text-sm">Upcoming Tests</h2>
                <Calendar className="w-4 h-4 text-slate-400" />
              </div>
              <div className="space-y-3">
                {upcomingTests.map((t, i) => (
                  <div key={t.name} className={`p-3 rounded-xl border ${
                    i === 0 ? "border-blue-200 bg-blue-50" : "border-slate-100"
                  }`}>
                    <div className="font-semibold text-slate-800 text-xs mb-1">{t.name}</div>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400">
                      <span>📅 {t.date}</span>
                      <span>🕐 {t.time}</span>
                      <span>⏱ {t.duration}</span>
                    </div>
                    {i === 0 && (
                      <Link href="/mock-tests"
                        className="mt-2 flex items-center gap-1 text-blue-600 text-xs font-semibold hover:text-blue-800">
                        Take Test <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
