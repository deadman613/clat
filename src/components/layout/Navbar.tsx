"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Programs", href: "/courses" },
  { label: "Our approach", href: "/#approach" },
  { label: "Mentorship", href: "/#mentorship" },
  { label: "The reading room", href: "/#reading-room" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="bg-[var(--color-paper)] border-b border-[var(--color-border)] sticky top-0 z-50 editorial-navbar">
      <div className="container-custom flex items-center h-16 gap-6 editorial-navbar__inner">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 mr-4">
          <div className="editorial-logo-mark"
            style={{ background: "var(--color-primary)" }}>
            <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-serif)" }}>L</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
            LexAscent
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 editorial-navbar__links">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap editorial-navbar__link
                ${isActive(href)
                  ? "text-[var(--color-primary)] bg-[var(--color-surface)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
                }`}>
              {label}
            </Link>
          ))}

        </nav>

        {/* Single CTA */}
        <div className="hidden md:block ml-auto flex-shrink-0">
          <Link href="/#consultation" className="btn btn-primary text-sm editorial-navbar__cta">
            Speak to an advisor <span aria-hidden="true">↗</span>
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
            <div className="pt-2">
              <Link href="/#consultation" onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full">
                Speak to an advisor
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
