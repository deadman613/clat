"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const exams = ["CLAT", "AILET", "SLAT", "LSAT India", "MH CET Law", "Not sure yet"];
const classes = ["Class 10", "Class 11", "Class 12", "Dropper (1st Attempt)", "Dropper (2nd Attempt+)"];
const courses = [
  "CLAT Foundation",
  "CLAT Dropper",
  "CLAT Crash Course",
  "CLAT Power Batch",
  "AILET Preparation",
  "CLAT + AILET Combo",
  "Not sure — need guidance",
];

export default function CounsellingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    exam: "",
    preferredCourse: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Your enquiry has been received! We'll call you within 24 hours.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-blue-950 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050d1a, #0f2040, #152a55)" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Free Counselling
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Course
              <br />
              Is Right for You?
            </h2>
            <p className="text-blue-200/70 mb-8 leading-relaxed">
              Book a free 30-minute counselling session with our CLAT experts. We'll analyze your current 
              preparation level and recommend the perfect course for you.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Personalized course recommendation",
                "Preparation strategy based on your profile",
                "Detailed CLAT syllabus walkthrough",
                "Study plan & timeline",
                "Scholarship assessment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-blue-100/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919876543210"
                className="glass border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-white font-semibold text-sm">Call Us</div>
                <div className="text-blue-200/60 text-xs">+91 98765 43210</div>
              </a>
              <a
                href="mailto:hello@lexascent.in"
                className="glass border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400 mb-2" />
                <div className="text-white font-semibold text-sm">Email Us</div>
                <div className="text-blue-200/60 text-xs">hello@lexascent.in</div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-600 text-sm mb-6">
                    Your enquiry has been received. One of our counsellors will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", class: "", exam: "", preferredCourse: "", message: "" }); }}
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <h3 className="font-playfair text-xl font-bold text-slate-900">
                      Book Free Counselling
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Rahul Sharma"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Current Class
                        </label>
                        <select
                          value={form.class}
                          onChange={(e) => setForm({ ...form, class: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                        >
                          <option value="">Select class</option>
                          {classes.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Target Exam
                        </label>
                        <select
                          value={form.exam}
                          onChange={(e) => setForm({ ...form, exam: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                        >
                          <option value="">Select exam</option>
                          {exams.map((ex) => (
                            <option key={ex} value={ex}>{ex}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Preferred Course
                      </label>
                      <select
                        value={form.preferredCourse}
                        onChange={(e) => setForm({ ...form, preferredCourse: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                      >
                        <option value="">Select a course</option>
                        {courses.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your current preparation level or any specific concerns..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        <>
                          Book Free Counselling Session
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      By submitting, you agree to our{" "}
                      <a href="/privacy-policy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
