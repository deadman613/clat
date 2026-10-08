"use client";

import Link from "next/link";
import { Scale, Mail, Phone, MapPin, ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const footerLinks = {
  courses: {
    title: "Courses",
    links: [
      { label: "CLAT Foundation", href: "/courses/clat-foundation" },
      { label: "CLAT Dropper", href: "/courses/clat-dropper" },
      { label: "CLAT Crash Course", href: "/courses/clat-crash-course" },
      { label: "CLAT Power Batch", href: "/courses/clat-power-batch" },
      { label: "AILET Preparation", href: "/courses/ailet-preparation" },
      { label: "Test Series", href: "/test-series" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Current Affairs", href: "/current-affairs" },
      { label: "Study Material", href: "/study-material" },
      { label: "Mock Tests", href: "/mock-tests" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
      { label: "CLAT Exam Info", href: "/exam/clat" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Faculty", href: "/faculty" },
      { label: "Results", href: "/results" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
};

// Social icons as inline SVG to avoid lucide version incompatibilities
const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Subscribed! You'll receive our daily current affairs.");
    setEmail("");
    setLoading(false);
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="container-custom pt-14 pb-8">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 mt-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="font-playfair font-bold text-xl text-white">
                Lex<span className="text-amber-400">Ascent</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              India  premier law entrance preparation platform. Trusted by 50,000+ aspiring law students across India for CLAT, AILET, and all NLU admissions.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:hello@lexascent.in" className="hover:text-white transition-colors">
                  hello@lexascent.in
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>304, Law Tower, Janpath, New Delhi — 110001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-slate-400 hover:text-white"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mt-10 text-sm mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-slate-900 rounded-2xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">
                📰 Daily Current Affairs Newsletter
              </h4>
              <p className="text-slate-400 text-sm">
                Get daily CLAT-focused current affairs, legal updates, and exam tips in your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:border-blue-500 text-sm outline-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center gap-2 text-sm font-semibold disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} LexAscent. All rights reserved. | GST: 07ABCDE1234F1Z5
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/refund-policy" className="text-xs text-slate-500 hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
