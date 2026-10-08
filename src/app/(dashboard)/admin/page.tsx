"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard, Users, BookOpen, FileText,
  Newspaper, BarChart3, Settings, LogOut,
  TrendingUp, AlertCircle, CheckCircle2, Clock,
  ChevronRight, Bell, Search, Menu, X
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

// ─── Fake data ───────────────────────────────────────────────
const enrollmentData = [
  { month: "May", count: 45 }, { month: "Jun", count: 62 },
  { month: "Jul", count: 78 }, { month: "Aug", count: 95 },
  { month: "Sep", count: 112 }, { month: "Oct", count: 134 },
];

const courseData = [
  { name: "Foundation", students: 320 },
  { name: "Dropper", students: 210 },
  { name: "Crash", students: 180 },
  { name: "Power Batch", students: 95 },
  { name: "AILET", students: 75 },
  { name: "Combo", students: 60 },
];

const enquiryData = [
  { day: "Mon", count: 12 }, { day: "Tue", count: 19 },
  { day: "Wed", count: 8 }, { day: "Thu", count: 24 },
  { day: "Fri", count: 18 }, { day: "Sat", count: 31 },
  { day: "Sun", count: 7 },
];

const revenuePie = [
  { name: "Foundation", value: 38 },
  { name: "Power Batch", value: 28 },
  { name: "Dropper", value: 18 },
  { name: "Others", value: 16 },
];
const PIE_COLORS = ["#1D4ED8", "#D97706", "#10B981", "#8B5CF6"];

const recentEnquiries = [
  { name: "Rahul Sharma", email: "rahul@gmail.com", phone: "98765 43210", exam: "CLAT 2025", date: "Oct 6", status: "New" },
  { name: "Priya Gupta", email: "priya@gmail.com", phone: "87654 32109", exam: "AILET 2025", date: "Oct 6", status: "Contacted" },
  { name: "Arjun Mehta", email: "arjun@gmail.com", phone: "76543 21098", exam: "CLAT 2025", date: "Oct 5", status: "New" },
  { name: "Sneha Rao", email: "sneha@gmail.com", phone: "65432 10987", exam: "CLAT 2026", date: "Oct 5", status: "Enrolled" },
  { name: "Vikram Singh", email: "vikram@gmail.com", phone: "54321 09876", exam: "CLAT 2025", date: "Oct 4", status: "Contacted" },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Students" },
  { icon: BookOpen, label: "Courses" },
  { icon: FileText, label: "Tests" },
  { icon: Newspaper, label: "Current Affairs" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

const statusColors: Record<string, string> = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-amber-100 text-amber-700",
  Enrolled: "bg-emerald-100 text-emerald-700",
};

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-inter">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-60" : "w-16"} transition-all duration-300 bg-slate-900 flex flex-col`}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">LA</span>
          </div>
          {sidebarOpen && (
            <span className="font-playfair font-bold text-white">
              Lex<span className="text-amber-400">Ascent</span>
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map(({ icon: Icon, label }) => (
            <button key={label} onClick={() => setActiveNav(label)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${activeNav === label
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}>
              <Icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 p-4">
          <button className="w-full flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-400 hover:text-slate-700 transition-colors">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search students, courses..."
                className="pl-9 pr-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm outline-none focus:ring-2 focus:ring-blue-300 w-64" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-slate-400 hover:text-slate-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">AD</div>
              <div className="hidden sm:block">
                <div className="text-xs font-semibold text-slate-800">Admin</div>
                <div className="text-[10px] text-slate-400">admin@lexascent.in</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="font-playfair text-2xl font-bold text-slate-900">Dashboard Overview</h1>
            <p className="text-slate-400 text-sm">Welcome back, Admin · {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Students", value: "50,342", change: "+12%", icon: Users, color: "text-blue-600 bg-blue-50", trend: "up" },
              { label: "Active Courses", value: "6", change: "All live", icon: BookOpen, color: "text-emerald-600 bg-emerald-50", trend: "up" },
              { label: "New Enquiries", value: "134", change: "+28% this week", icon: AlertCircle, color: "text-amber-600 bg-amber-50", trend: "up" },
              { label: "Revenue (Oct)", value: "₹18.4L", change: "+9% vs Sep", icon: TrendingUp, color: "text-violet-600 bg-violet-50", trend: "up" },
            ].map((kpi) => {
              const Icon = kpi.icon;
              return (
                <motion.div key={kpi.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${kpi.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                      {kpi.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 font-playfair">{kpi.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{kpi.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-3 gap-5 mb-6">
            {/* Enrollment Trend */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">Student Enrollment Trend</h3>
                  <p className="text-xs text-slate-400">Monthly new enrollments</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={enrollmentData}>
                  <defs>
                    <linearGradient id="enrollGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1D4ED8" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#1D4ED8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="count" stroke="#1D4ED8" fill="url(#enrollGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Revenue Pie */}
            <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-800 text-sm mb-1">Revenue by Course</h3>
              <p className="text-xs text-slate-400 mb-4">This month</p>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie data={revenuePie} cx="50%" cy="50%" innerRadius={45} outerRadius={65} dataKey="value">
                    {revenuePie.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 mt-2">
                {revenuePie.map((item, i) => (
                  <div key={item.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                      <span className="text-slate-600">{item.name}</span>
                    </div>
                    <span className="font-semibold text-slate-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Enquiries Bar Chart */}
            <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-800 text-sm mb-1">Weekly Enquiries</h3>
              <p className="text-xs text-slate-400 mb-3">This week</p>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={enquiryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#D97706" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Enquiries Table */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800 text-sm">Recent Enquiries</h3>
                <Link href="/admin/enquiries" className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  View All <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-100">
                      <th className="text-left pb-2 font-semibold">Name</th>
                      <th className="text-left pb-2 font-semibold hidden sm:table-cell">Phone</th>
                      <th className="text-left pb-2 font-semibold hidden md:table-cell">Exam</th>
                      <th className="text-left pb-2 font-semibold">Status</th>
                      <th className="text-left pb-2 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentEnquiries.map((e) => (
                      <tr key={e.email} className="border-b border-slate-50 last:border-0">
                        <td className="py-2.5">
                          <div className="font-semibold text-slate-800">{e.name}</div>
                          <div className="text-slate-400">{e.date}</div>
                        </td>
                        <td className="py-2.5 text-slate-600 hidden sm:table-cell">{e.phone}</td>
                        <td className="py-2.5 text-slate-600 hidden md:table-cell">{e.exam}</td>
                        <td className="py-2.5">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColors[e.status]}`}>
                            {e.status}
                          </span>
                        </td>
                        <td className="py-2.5">
                          <button className="text-blue-600 hover:text-blue-800 font-semibold">Call</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}



