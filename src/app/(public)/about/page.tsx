import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LexAscent — India's Premier CLAT Coaching Platform",
  description:
    "Learn about LexAscent — our mission, history, and the team behind India's most trusted CLAT and law entrance preparation platform.",
};

const milestones = [
  { year: "1994", event: "Founded as a small CLAT coaching centre in New Delhi with 30 students" },
  { year: "2005", event: "Expanded to 5 cities across India; first batch of 100+ top-100 selections" },
  { year: "2012", event: "Launched online learning platform — pioneering digital CLAT prep in India" },
  { year: "2018", event: "Surpassed 20,000 students milestone; opened centers in 12 states" },
  { year: "2021", event: "Launched AI-powered performance analytics and personalized mock tests" },
  { year: "2024", event: "50,000+ students trained; 1000+ NLU selections; India's #1 CLAT platform" },
];

const values = [
  { icon: "🎯", title: "Excellence", desc: "We relentlessly pursue the highest standards in teaching, content, and student outcomes." },
  { icon: "🤝", title: "Accessibility", desc: "Quality CLAT preparation should be accessible to every deserving student, regardless of geography or background." },
  { icon: "💡", title: "Innovation", desc: "We continuously innovate — from AI analytics to adaptive learning — to give our students every edge." },
  { icon: "❤️", title: "Student-First", desc: "Every decision we make is guided by one question: how does this help our students succeed?" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="gradient-hero py-16">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              30 Years of Creating India's Best Lawyers
            </h1>
            <p className="text-blue-200/70 text-lg">
              From a small classroom in New Delhi to India's most trusted law entrance preparation platform — this is our story.
            </p>
          </div>
        </div>

        {/* Mission */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  At LexAscent, we believe that the law profession needs the brightest minds — and those minds need the best preparation. Our mission is simple: democratize access to world-class CLAT coaching and help every deserving student unlock the doors of India's top National Law Universities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We don't just teach — we mentor, motivate, and walk alongside our students throughout their law entrance journey. Because a student's success is not just their achievement; it's ours too.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "30+", label: "Years of Excellence" },
                  { value: "50K+", label: "Students Trained" },
                  { value: "1000+", label: "NLU Selections" },
                  { value: "24/24", label: "NLUs Covered" },
                ].map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-3xl font-bold text-blue-700 font-playfair mb-1">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-10 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-10 text-center">Our Journey</h2>
            <div className="relative pl-8 border-l-2 border-blue-100 space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-[2.55rem] w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow" />
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="text-amber-600 font-bold text-sm mb-1">{m.year}</div>
                    <p className="text-slate-700 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900">
          <div className="container-custom text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-blue-200/70 mb-8">Join 50,000+ students who chose LexAscent for their CLAT journey.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/courses" className="px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors">
                Explore Courses
              </a>
              <a href="/enquiry" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors">
                Book Free Counselling
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
