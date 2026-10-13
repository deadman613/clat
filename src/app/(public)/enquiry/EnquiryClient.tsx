"use client";

import { useState } from "react";
import { CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const classOptions = ["Class 11", "Class 12", "Dropper / Repeater", "Passed 12th (gap year)", "Other"];
const examOptions  = ["CLAT 2025", "CLAT 2026", "AILET 2025", "Both CLAT & AILET", "Not decided yet"];

export default function EnquiryClient() {
  const [form, setForm] = useState({ name: "", phone: "", cls: "", exam: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          examTarget: form.exam,
          message: `Class: ${form.cls}`,
        }),
      });
      setSent(true);
      toast.success("We'll call you within 24 hours!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-inter)" }}>
            Free Counselling
          </p>
          <h1 className="heading-display text-3xl sm:text-4xl mb-2" style={{ color: "#fff" }}>
            Book a Free Demo Class
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "34rem", margin: "0 auto" }}>
            Fill in your details. Our counsellor will call within 24 hours to understand your goals and recommend the right course.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-7">
                {sent ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="w-14 h-14 mx-auto mb-5" style={{ color: "var(--color-success)" }} />
                    <h2 className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                      Request Received!
                    </h2>
                    <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
                      Our counsellor will call you on the number provided within 24 hours. Keep your phone reachable.
                    </p>
                    <button onClick={() => setSent(false)} className="btn btn-secondary text-sm">
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                        Full Name *
                      </label>
                      <input name="name" value={form.name} onChange={set}
                        placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                        Phone Number *
                      </label>
                      <input name="phone" type="tel" value={form.phone} onChange={set}
                        placeholder="+91 98765 43210" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                        I am currently in *
                      </label>
                      <select name="cls" value={form.cls} onChange={set} required>
                        <option value="">Select your class</option>
                        {classOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                        Target Exam *
                      </label>
                      <select name="exam" value={form.exam} onChange={set} required>
                        <option value="">Select your target exam</option>
                        {examOptions.map((x) => <option key={x} value={x}>{x}</option>)}
                      </select>
                    </div>
                    <button type="submit" disabled={loading}
                      className="btn btn-primary w-full disabled:opacity-60">
                      {loading ? "Submitting…" : "Book My Free Demo"}
                    </button>
                    <p className="text-center text-xs" style={{ color: "var(--color-muted)" }}>
                      No spam. We only call once to schedule your session.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
                  Contact
                </p>
                <h2 className="heading-display text-xl mb-1">Get in Touch</h2>
                <div className="rule" />
              </div>

              {[
                { icon: Phone,  label: "Call Us",  text: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail,   label: "Email",    text: "hello@lexascent.in", href: "mailto:hello@lexascent.in" },
                { icon: MapPin, label: "Address",  text: "304, Law Tower, Janpath, New Delhi — 110001", href: null },
                { icon: Clock,  label: "Office Hours", text: "Mon–Sat, 9 am – 7 pm", href: null },
              ].map(({ icon: Icon, label, text, href }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-[var(--radius)]"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                  <div className="w-10 h-10 rounded-[var(--radius)] flex items-center justify-center flex-shrink-0"
                    style={{ background: "#fff", border: "1px solid var(--color-border)" }}>
                    <Icon className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                      {label}
                    </p>
                    {href
                      ? <a href={href} className="text-sm font-medium hover:underline"
                          style={{ color: "var(--color-primary)" }}>{text}</a>
                      : <p className="text-sm" style={{ color: "var(--color-ink)" }}>{text}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
