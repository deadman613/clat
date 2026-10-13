"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, BookOpen, FlaskConical, Newspaper } from "lucide-react";

const resourcesLinks = [
  { label: "Study Material", href: "/study-material", icon: BookOpen },
  { label: "Test Series",    href: "/mock-tests",     icon: FlaskConical },
  { label: "Current Affairs",href: "/current-affairs",icon: Newspaper },
];

const navLinks = [
  { label: "Courses",  href: "/courses" },
  { label: "Faculty",  href: "/faculty" },
  { label: "Results",  href: "/results" },
  { label: "CLAT Guide", href: "/exam/clat" },
  { label: "About",    href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const dropRef = useRef<HTMLDivElement>(null);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="bg-[var(--color-paper)] border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="container-custom flex items-center h-16 gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 mr-4">
          <div className="w-8 h-8 rounded-[var(--radius)] flex items-center justify-center"
            style={{ background: "var(--color-primary)" }}>
            <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-serif)" }}>L</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
            LexAscent
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap
                ${isActive(href)
                  ? "text-[var(--color-primary)] bg-[var(--color-surface)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
                }`}>
              {label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors
                ${resourcesOpen
                  ? "text-[var(--color-primary)] bg-[var(--color-surface)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
                }`}>
              Resources
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 card shadow-lg py-1 z-50">
                {resourcesLinks.map(({ label, href, icon: Icon }) => (
                  <Link key={label} href={href}
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition-colors">
                    <Icon className="w-4 h-4 text-[var(--color-gold)]" />
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Single CTA */}
        <div className="hidden md:block ml-auto flex-shrink-0">
          <Link href="/enquiry" className="btn btn-primary text-sm">
            Book Free Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2 rounded text-[var(--color-muted)] hover:text-[var(--color-primary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-paper)]">
          <nav className="container-custom py-3 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-3 rounded text-sm font-medium
                  ${isActive(href) ? "text-[var(--color-primary)] bg-[var(--color-surface)]" : "text-[var(--color-ink)]"}`}>
                {label}
              </Link>
            ))}
            <div className="mt-1 border-t border-[var(--color-border)] pt-2">
              <p className="px-3 py-1 text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">Resources</p>
              {resourcesLinks.map(({ label, href }) => (
                <Link key={label} href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-3 py-3 text-sm text-[var(--color-ink)]">
                  {label}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link href="/enquiry" onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full">
                Book Free Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
