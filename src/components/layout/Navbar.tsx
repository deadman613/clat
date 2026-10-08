"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Scale,
  BookOpen,
  GraduationCap,
  FileText,
  BarChart3,
  Users,
  Newspaper,
  Info,
  LogIn,
  Phone,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "CLAT Foundation", href: "/courses/clat-foundation", icon: BookOpen, desc: "For early starters" },
      { label: "CLAT Dropper", href: "/courses/clat-dropper", icon: GraduationCap, desc: "For repeat aspirants" },
      { label: "CLAT Crash Course", href: "/courses/clat-crash-course", icon: Lightbulb, desc: "Intensive preparation" },
      { label: "CLAT Power Batch", href: "/courses/clat-power-batch", icon: BarChart3, desc: "Advanced program" },
      { label: "AILET Preparation", href: "/courses/ailet-preparation", icon: Scale, desc: "Dedicated AILET prep" },
      { label: "CLAT + AILET Combo", href: "/courses/clat-ailet-combo", icon: FileText, desc: "Combined preparation" },
    ],
  },
  {
    label: "Exam Info",
    href: "#",
    children: [
      { label: "CLAT", href: "/exam/clat", icon: Scale, desc: "Common Law Admission Test" },
      { label: "AILET", href: "/exam/ailet", icon: GraduationCap, desc: "All India Law Entrance Test" },
    ],
  },
  { label: "Study Material", href: "/study-material", icon: BookOpen },
  { label: "Test Series", href: "/test-series", icon: BarChart3 },
  { label: "Results", href: "/results", icon: GraduationCap },
  // { label: "Faculty", href: "/faculty", icon: Users },
  // { label: "Current Affairs", href: "/current-affairs", icon: Newspaper },
  { label: "About Us", href: "/about", icon: Info },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMobileNavigation = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white shadow-sm"
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-playfair text-xl font-bold leading-none text-slate-900">
                  Lex<span className="text-amber-500">Ascent</span>
                </span>
                <span className="hidden text-[9px] font-medium uppercase tracking-widest text-slate-500 xl:block">
                  Rise Above. Lead with Law.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="mx-1 hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:mx-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-md px-0.5 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-700 xl:px-2"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-md px-0.5 py-2 text-[15px] font-medium transition-colors xl:px-2",
                        pathname === item.href
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.children.map((child) => {
                            const Icon = child.icon;
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 group transition-colors"
                              >
                                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                  <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                  <div className="text-[15px] font-semibold text-slate-800 group-hover:text-blue-600">
                                    {child.label}
                                  </div>
                                  {child.desc && (
                                    <div className="text-xs text-slate-500">{child.desc}</div>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
              <Link
                href="/auth/login"
                className="flex items-center gap-1.5 rounded-md px-3 py-2 text-[15px] font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-700"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="/enquiry"
                className="flex items-center gap-1.5 rounded-md bg-amber-500 px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-amber-600"
              >
                <Phone className="w-4 h-4" />
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-80 overflow-y-auto bg-white shadow-2xl lg:hidden"
            >
              <div className="p-5">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/"
                    onClick={closeMobileNavigation}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <Scale className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-playfair font-bold text-lg text-slate-900">
                      Lex<span className="text-amber-500">Ascent</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Nav Items */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === item.label ? null : item.label
                              )
                            }
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[15px] font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {item.label}
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform",
                                activeDropdown === item.label && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden ml-3 mt-1 space-y-1"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={closeMobileNavigation}
                                    className="block px-3 py-2 rounded-lg text-[15px] text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMobileNavigation}
                          className={cn(
                            "block px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors",
                            pathname === item.href
                              ? "bg-blue-50 text-blue-600"
                              : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-6 space-y-2 pt-6 border-t border-slate-100">
                  <Link
                    href="/auth/login"
                    onClick={closeMobileNavigation}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-[15px] font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    Login / Sign Up
                  </Link>
                  <Link
                    href="/enquiry"
                    onClick={closeMobileNavigation}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-[15px] font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Book Free Counselling
                  </Link>
                </div>

                {/* Contact info */}
                <div className="mt-6 p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 font-medium mb-2">Contact Us</p>
                  <p className="text-sm font-semibold text-slate-700">+91 98765 43210</p>
                  <p className="text-sm text-slate-600">hello@lexascent.in</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
