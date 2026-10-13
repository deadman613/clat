"use client";

import Link from "next/link";
import { Scale, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const cols = [
  {
    title: "Courses",
    links: [
      { label: "CLAT Foundation",  href: "/courses/clat-foundation" },
      { label: "CLAT Dropper",     href: "/courses/clat-dropper" },
      { label: "CLAT Crash Course",href: "/courses/clat-crash-course" },
      { label: "CLAT Power Batch", href: "/courses/clat-power-batch" },
      { label: "AILET Preparation",href: "/courses/ailet-preparation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Current Affairs",  href: "/current-affairs" },
      { label: "Study Material",   href: "/study-material" },
      { label: "Test Series",      href: "/mock-tests" },
      { label: "CLAT Guide",       href: "/exam/clat" },
      { label: "AILET Guide",      href: "/exam/ailet" },
      { label: "Blog",             href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",   href: "/about" },
      { label: "Faculty",    href: "/faculty" },
      { label: "Results",    href: "/results" },
      { label: "Contact",    href: "/enquiry" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",   href: "/privacy-policy" },
      { label: "Terms & Conditions",href: "/terms" },
      { label: "Refund Policy",    href: "/refund-policy" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Subscribed! Daily current affairs arriving soon.");
    setEmail("");
    setLoading(false);
  };

  return (
    <footer className="band-ink">
      <div className="container-custom pt-14 pb-10">
        {/* Top row — brand + newsletter */}
        <div className="flex flex-col lg:flex-row gap-10 mb-12 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          {/* Brand */}
          <div className="lg:w-80">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[var(--radius)] flex items-center justify-center"
                style={{ background: "var(--color-primary)" }}>
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-lg font-serif">LexAscent</span>
            </Link>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              India's premier CLAT & law entrance preparation platform. Trusted by 50,000+ aspiring lawyers.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail,  text: "hello@lexascent.in", href: "mailto:hello@lexascent.in" },
                { icon: MapPin,text: "304, Law Tower, Janpath, New Delhi — 110001", href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--color-gold)" }} />
                  {href
                    ? <a href={href} className="hover:text-white transition-colors">{text}</a>
                    : <span>{text}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}>
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: "rgba(255,255,255,0.5)" }}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div>
            <p className="text-white text-sm font-semibold mb-0.5">Daily Current Affairs Newsletter</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              CLAT-focused news digest in your inbox every morning.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
              }}
              className="flex-1 sm:w-56 px-3 py-2.5 rounded-[var(--radius)] text-sm placeholder:text-white/30 focus:outline-none focus:border-white/40"
            />
            <button type="submit" disabled={loading}
              className="btn btn-primary flex-shrink-0 px-4 text-sm disabled:opacity-60">
              <Send className="w-3.5 h-3.5" />
              {loading ? "..." : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.35)" }}>
          <p>© {new Date().getFullYear()} LexAscent. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
