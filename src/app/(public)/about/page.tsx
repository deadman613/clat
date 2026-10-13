import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LexAscent — 30 Years of Creating India's Best Lawyers",
  description:
    "Learn about LexAscent's history, mission, and values. 30+ years, 50,000+ students, 1,000+ NLU selections.",
};

const milestones = [
  { year: "1994", event: "Founded as a classroom coaching centre in New Delhi with 30 students." },
  { year: "2005", event: "Expanded to 5 cities; first batch achieved 100+ top-100 CLAT selections." },
  { year: "2012", event: "Launched online learning — pioneering digital CLAT prep in India." },
  { year: "2018", event: "Surpassed 20,000 students milestone; centres in 12 states." },
  { year: "2021", event: "Launched AI-powered performance analytics and adaptive mock tests." },
  { year: "2024", event: "50,000+ students trained; 1,000+ NLU selections; India's #1 CLAT platform." },
];

const values = [
  { icon: "Excellence",    desc: "We relentlessly pursue the highest standards in teaching and student outcomes." },
  { icon: "Accessibility", desc: "Quality CLAT preparation must be accessible to every deserving student." },
  { icon: "Innovation",    desc: "We continuously evolve — from AI analytics to adaptive learning." },
  { icon: "Student-First", desc: "Every decision is guided by one question: how does this help our students?" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="section-padding gradient-hero">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-inter)" }}>
            About Us
          </p>
          <h1 className="heading-display text-3xl sm:text-4xl mb-3" style={{ color: "#fff" }}>
            30 Years of Creating India's Best Lawyers
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            From a small classroom in New Delhi to India's most trusted law entrance platform.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
                Our Mission
              </p>
              <h2 className="heading-display text-2xl sm:text-3xl mb-2">Why We Exist</h2>
              <div className="rule" />
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
                At LexAscent, we believe the law profession needs the brightest minds — and those minds need the best preparation. Our mission is to democratise access to world-class CLAT coaching and help every deserving student unlock the doors of India's top National Law Universities.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                We don't just teach — we mentor, motivate, and walk alongside our students throughout their entire law entrance journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "30+",    label: "Years of Excellence" },
                { value: "50,000+",label: "Students Trained" },
                { value: "1,000+", label: "NLU Selections" },
                { value: "24/24",  label: "NLUs Covered" },
              ].map((s) => (
                <div key={s.label} className="rounded-[var(--radius)] p-5 text-center"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                  <div className="text-3xl font-semibold mb-1"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                    {s.value}
                  </div>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding band-surface">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="heading-display text-2xl sm:text-3xl mb-1">Our Values</h2>
            <div className="rule mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map(({ icon, desc }) => (
              <div key={icon} className="card p-5 text-center">
                <h3 className="text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}>
                  {icon}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="heading-display text-2xl sm:text-3xl mb-1">Our Journey</h2>
            <div className="rule mx-auto" />
          </div>
          <div className="relative pl-8 space-y-6"
            style={{ borderLeft: "2px solid var(--color-border)" }}>
            {milestones.map(({ year, event }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[2.4rem] w-4 h-4 rounded-full"
                  style={{ background: "var(--color-primary)", border: "3px solid #fff", boxShadow: "0 0 0 1px var(--color-primary)" }} />
                <div className="rounded-[var(--radius)] p-4"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                  <div className="text-xs font-bold mb-1"
                    style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
                    {year}
                  </div>
                  <p className="text-sm" style={{ color: "var(--color-ink)" }}>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "var(--color-primary)" }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3" style={{ fontFamily: "var(--font-serif)", color: "#fff" }}>
            Ready to Write Your Success Story?
          </h2>
          <p className="text-sm mb-7" style={{ color: "rgba(255,255,255,0.6)" }}>
            Join 50,000+ students who chose LexAscent for their CLAT journey.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/courses" className="btn btn-outline-white">Explore Courses</a>
            <a href="/enquiry" className="btn" style={{ background: "var(--color-gold)", color: "#fff" }}>
              Book Free Counselling
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
