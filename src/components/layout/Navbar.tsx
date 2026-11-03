"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import BrandLogo from "@/components/layout/BrandLogo";

const pageMenus = [
  {
    label: "All Programs",
    links: [
      { label: "CLAT Classroom Coaching", href: "/courses" },
      { label: "CLAT Online Coaching", href: "/courses" },
      { label: "CLAT Crash Course", href: "/courses/clat-crash-course" },
      { label: "LAW Test Series", href: "/mock-tests" },
      { label: "NLU Guarantee Program", href: "/courses" },
      { label: "Books & Materials", href: "/courses" },
      { label: "CLAT Rank Booster", href: "/courses/clat-dropper" },
      { label: "Self Paced Program", href: "/courses" },
      { label: "LR Nuggets", href: "/courses" },
    ],
  },
  {
    label: "Exams",
    links: [
      { label: "CLAT", href: "/exam/clat" },
      { label: "AILET", href: "/exam/ailet" },
      { label: "LNAT", href: "/exam/lnat" },
      { label: "SLAT", href: "/exam/slat" },
      { label: "MAH-CET Law (5 Yr. LL.B.)", href: "/exam/mah-cet-law" },
      { label: "NMIMS-LAT", href: "/exam/nmims-lat" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Current affairs", href: "/current-affairs" },
      { label: "Mock tests", href: "/mock-tests" },
      { label: "Faculty", href: "/faculty" },
      { label: "About us", href: "/about" },
    ],
  },
];

const directLinks = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/results" },
  { label: "Webinar", href: "/#consultation" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    const route = href.split("#")[0];
    return pathname === route || (route !== "/" && pathname.startsWith(`${route}/`));
  };

  const linkClass = (href: string) =>
    `editorial-navbar__link${isActive(href) ? " is-active" : ""}`;

  const menuClass = (links: { href: string }[]) =>
    `editorial-navbar__link${links.some(({ href }) => isActive(href)) ? " is-active" : ""}`;

  return (
    <header className="bg-[var(--color-paper)] border-b border-[var(--color-border)] sticky top-0 z-50 editorial-navbar">
      <div className="container-custom flex items-center h-16 gap-6 editorial-navbar__inner">
        <Link href="/" className="flex items-center flex-shrink-0 mr-4 editorial-navbar__brand" aria-label="Delhi Law School home">
          <BrandLogo className="brand-logo--navbar" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 flex-1 editorial-navbar__links" aria-label="Main navigation">
          {directLinks.slice(0, 1).map(({ label, href }) => (
            <Link key={label} href={href} className={linkClass(href)} aria-current={isActive(href) ? "page" : undefined}>
              {label}
            </Link>
          ))}
          {pageMenus.slice(0, 2).map((menu) => (
            <details className="editorial-navbar__dropdown" key={menu.label}>
              <summary className={menuClass(menu.links)}>
                {menu.label}
                <ChevronDown size={12} aria-hidden="true" />
              </summary>
              <div className="editorial-navbar__menu">
                {menu.links.map(({ label, href }) => (
                  <Link key={label} href={href} aria-current={isActive(href) ? "page" : undefined}>
                    {label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
          <Link href="/results" className={linkClass("/results")} aria-current={isActive("/results") ? "page" : undefined}>
            Results
          </Link>
          <details className="editorial-navbar__dropdown">
            <summary className={menuClass(pageMenus[2].links)}>
              Resources
              <ChevronDown size={12} aria-hidden="true" />
            </summary>
            <div className="editorial-navbar__menu">
              {pageMenus[2].links.map(({ label, href }) => (
                <Link key={label} href={href} aria-current={isActive(href) ? "page" : undefined}>
                  {label}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/#consultation" className={linkClass("/#consultation")}>
            Webinar
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2 ml-auto flex-shrink-0 editorial-navbar__actions">
          <Link href="/login" className="editorial-navbar__login">Student login</Link>
          <Link href="/#consultation" className="btn btn-primary text-sm editorial-navbar__cta">
            Enroll now
          </Link>
        </div>

        <button
          className="lg:hidden ml-auto p-2 rounded text-[var(--color-muted)] hover:text-[var(--color-primary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-paper)]">
          <nav className="container-custom py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {directLinks.slice(0, 1).map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`editorial-navbar__mobile-link${isActive(href) ? " is-active" : ""}`}
              >
                {label}
              </Link>
            ))}
            {pageMenus.map((menu) => (
              <details className="editorial-navbar__mobile-dropdown" key={menu.label}>
                <summary className={menuClass(menu.links)}>
                  {menu.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </summary>
                <div>
                  {menu.links.map(({ label, href }) => (
                    <Link key={label} href={href} onClick={() => setMobileOpen(false)}>
                      {label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            {directLinks.slice(1).map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`editorial-navbar__mobile-link${isActive(href) ? " is-active" : ""}`}
              >
                {label}
              </Link>
            ))}
            <div className="editorial-navbar__mobile-actions">
              <Link href="/login" onClick={() => setMobileOpen(false)} className="editorial-navbar__mobile-link">
                Student login
              </Link>
              <Link href="/#consultation" onClick={() => setMobileOpen(false)} className="btn btn-primary w-full">
                Enroll now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
