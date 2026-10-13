"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const classOptions = ["Class 11", "Class 12", "Dropper / Repeater", "Other"];
const examOptions  = ["CLAT 2025", "CLAT 2026", "AILET 2025", "Both CLAT & AILET"];

export default function CounsellingSection() {
  const [form, setForm] = useState({ name: "", phone: "", cls: "", exam: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.cls || !form.exam) {
      toast.error("Please fill all fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setSent(true);
    setLoading(false);
    toast.success("We'll call you within 24 hours!");
  };

  return (
    <section className="section-padding" style={{ background: "var(--color-primary)" }}>
      <div className="container-custom">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-inter)" }}>
              Free Counselling
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2"
              style={{ fontFamily: "var(--font-serif)", color: "#fff" }}>
              Book a Free Demo Class
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Our counsellor will call you within 24 hours.
            </p>
          </div>

          {/* White form card */}
          <div className="rounded-[var(--radius)] p-6 sm:p-8" style={{ background: "#fff" }}>
            {sent ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--color-success)" }} />
                <h3 className="font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                  We've received your request!
                </h3>
                <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                  Our counsellor will call you within 24 hours. Check your phone for a message from us.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 btn btn-secondary text-sm">
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                    Full Name
                  </label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={{ display: "block", width: "100%" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                    Phone Number
                  </label>
                  <input
                    name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    style={{ display: "block", width: "100%" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                    I am currently in
                  </label>
                  <select name="cls" value={form.cls} onChange={handleChange} required
                    style={{ display: "block", width: "100%" }}>
                    <option value="">Select class</option>
                    {classOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                    Target Exam
                  </label>
                  <select name="exam" value={form.exam} onChange={handleChange} required
                    style={{ display: "block", width: "100%" }}>
                    <option value="">Select exam</option>
                    {examOptions.map((x) => <option key={x} value={x}>{x}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={loading}
                  className="btn btn-primary w-full mt-2 disabled:opacity-60">
                  {loading ? "Sending…" : "Book My Free Demo"}
                </button>
                <p className="text-center text-xs" style={{ color: "var(--color-muted)" }}>
                  No spam. We call once to schedule your demo.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
