"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import FacultySection from "@/components/home/FacultySection";
import ExamOverview from "@/components/home/ExamOverview";
import { BUSINESS_CONTACT } from "@/lib/site-details";

const pathways = [
  {
    number: "01",
    label: "For early starters",
    title: "CLAT Foundation",
    description:
      "A structured starting point for Class 11 and 12 students building core law-entrance skills.",
    points: ["English and reading comprehension", "Current affairs and reasoning", "For Class 11 and 12 aspirants"],
    link: "Explore this program",
    href: "/courses/clat-foundation",
  },
  {
    number: "02",
    label: "Prepare with purpose",
    title: "CLAT + AILET Comprehensive",
    description:
      "A combined preparation path for students targeting CLAT and AILET.",
    points: ["Shared subject foundations", "CLAT and AILET pattern practice", "For Class 12 students and droppers"],
    link: "Explore this program",
    href: "/courses/clat-ailet-combo",
    featured: true,
  },
  {
    number: "03",
    label: "Strengthen your focus",
    title: "AILET Focus",
    description:
      "Focused preparation for aspirants targeting NLU Delhi through AILET.",
    points: ["AILET-pattern practice", "Legal reasoning drills", "For Class 12 students and droppers"],
    link: "Explore this program",
    href: "/courses/ailet-preparation",
  },
];

const habits = [
  {
    number: "01",
    title: "Counselling and demo",
    description: "Discuss your goals, current preparation, and course options before enrolling.",
  },
  {
    number: "02",
    title: "Attend classes",
    description: "Choose an available live online or classroom batch that fits your schedule.",
  },
  {
    number: "03",
    title: "Practise by section",
    description: "Build familiarity with reading, reasoning, current affairs, and quantitative questions.",
  },
  {
    number: "04",
    title: "Analyse your attempts",
    description: "Use practice attempts to identify patterns and areas that need attention.",
  },
  {
    number: "05",
    title: "Revise before the exam",
    description: "Return to key concepts and current affairs as you prepare for exam day.",
  },
  {
    number: "06",
    title: "Plan your next step",
    description: "Explore exam updates, admissions counselling, and guidance for what follows.",
  },
];

const readingRoom = [
  {
    category: "Free CLAT mock tests",
    title: "Practise with a CLAT mock test",
    excerpt: "Try a mock paper and use your review to decide what to practise next.",
    alt: "University campus courtyard",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85",
    href: "/mock-tests",
  },
  {
    category: "CLAT exam guide",
    title: "Understand the CLAT exam pattern",
    excerpt: "Review current exam information and use it to structure your preparation.",
    alt: "Books and reading material arranged on a study table",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=85",
    href: "/exam/clat",
  },
  {
    category: "Current affairs",
    title: "Build a current-affairs reading habit",
    excerpt: "Follow important developments and practise identifying the issues behind a headline.",
    alt: "Newspaper pages showing current-affairs coverage",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=85",
    href: "/current-affairs",
  },
];

const faqs = [
  {
    question: "Which is the best CLAT coaching in Delhi?",
    answer:
      "The right CLAT coaching depends on your class, preferred mode, and budget. Compare faculty, schedules, mock-test analysis, and results you can verify. Delhi Law School offers online and classroom CLAT preparation, free resources, and a demo class so you can understand the approach before deciding.",
  },
  {
    question: "When is CLAT 2027?",
    answer:
      "CLAT 2027 is scheduled for 6 December 2026, from 2 pm to 4 pm, in offline mode. Applications closed on 7 November 2026, with corrections available until 10 November. Check the official Consortium website for any updates and admit-card information.",
  },
  {
    question: "What is the CLAT exam pattern?",
    answer:
      "CLAT UG is a two-hour paper with 120 multiple-choice questions and 0.25 negative marking for each incorrect answer. Its five sections are English, Current Affairs and GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques. Always check the latest official notification for changes.",
  },
  {
    question: "When should I start CLAT preparation?",
    answer:
      "Starting in Class 11 or early in Class 12 gives you more time to build reading speed, legal reasoning, and a current-affairs routine. Droppers and later starters can still prepare with a focused plan based on their target exam, available study time, and areas that need attention.",
  },
  {
    question: "Can I do CLAT coaching online?",
    answer:
      "Yes. Online CLAT coaching can include live classes, recordings, doubt sessions, and online mock tests, making it possible to study from across North India. Delhi Law School also offers classroom batches in Delhi; contact an advisor to confirm current availability and format.",
  },
  {
    question: "Do you offer a free demo class?",
    answer:
      "Yes. You can request a free demo class and speak with an advisor before enrolling. Use the enquiry form on this page or call 9266500227 to ask about available online or classroom sessions and choose a time that works for you.",
  },
  {
    question: "What is the CLAT coaching fee at Delhi Law School?",
    answer:
      "Fees depend on the course, mode, and batch. Contact an advisor for current prices, schedules, and installment options before enrolling. This page does not publish fee amounts because they can change; ask for the latest fee details for CLAT Foundation, the CLAT + AILET Comprehensive course, or AILET Focus.",
  },
  {
    question: "Can I prepare for CLAT and AILET together?",
    answer:
      "Yes. CLAT and AILET share several subject areas, but each exam has its own format and emphasis. Prepare common foundations alongside practice designed for each paper. The CLAT + AILET Comprehensive course is intended for students who want to work toward both exams.",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  exam: "",
  class: "",
  message: "",
  consent: false,
};

export default function FigmaHomePage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          class: form.class || undefined,
          exam: form.exam || undefined,
          preferredCourse: form.exam || undefined,
          message: form.message || "Website consultation request",
        }),
      });

      if (!response.ok) {
        const result = (await response.json()) as { message?: string };
        throw new Error(result.message || "We couldn't send your request. Please try again.");
      }

      toast.success("Thank you. An advisor will be in touch soon.");
      setForm(initialForm);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "We couldn't send your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function updateForm(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = event.currentTarget;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? (event.currentTarget as HTMLInputElement).checked : value,
    }));
  }

  return (
    <div className="editorial-home" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Delhi Law School",
                url: "https://delhilawschool.com/",
                telephone: BUSINESS_CONTACT.phone.href.replace("tel:", ""),
                sameAs: [BUSINESS_CONTACT.instagram.href],
              },
              ...pathways.map((program) => ({
                "@type": "Course",
                name: program.title,
                description: program.description,
                url: `https://delhilawschool.com${program.href}`,
                provider: {
                  "@type": "Organization",
                  name: "Delhi Law School",
                  url: "https://delhilawschool.com/",
                },
              })),
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://delhilawschool.com/",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <section className="editorial-hero">
        <div className="editorial-container editorial-hero__grid">
          <div className="editorial-hero__copy">
            <p className="editorial-eyebrow">Delhi Law School · Free demo classes · Free resources</p>
            <h1 className="editorial-title">
              CLAT Coaching in Delhi:
              <br />
              <em>Online &amp; Offline</em>
            </h1>
            <p>
              Delhi Law School is a CLAT coaching institute in Delhi for
              students across North India. We teach CLAT, AILET, and other law
              entrance exams through live online and classroom batches, with
              study material, mock tests, free resources, and a free demo class.
              CLAT 2027 is scheduled for 6 December 2026.
            </p>
            <div className="editorial-hero__actions">
              <Link href="/courses" className="editorial-link editorial-link--filled">
                Explore CLAT Courses <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/enquiry" className="editorial-link">
                Book a Free Demo Class
              </Link>
            </div>
            <div className="editorial-hero__highlights">
              <p><Check size={13} aria-hidden="true" />Law faculty teaching CLAT and AILET subjects</p>
              <p><Check size={13} aria-hidden="true" />Online and classroom options for students across North India</p>
              <p><Check size={13} aria-hidden="true" />Free demo class and resources before you enrol</p>
            </div>
          </div>

          <div className="editorial-hero__image">
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85"
              alt="University courtyard framed by historic architecture, illustrating a path toward law school"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 52vw"
            />
            <div className="editorial-image-note">
              Learn to think.
              <br />
              Prepare to lead.
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-programs" id="programs">
        <div className="editorial-container">
          <div className="editorial-programs__intro">
            <div>
              <p className="editorial-eyebrow">Our Programs · Choose your target exam</p>
              <h2>CLAT and AILET Coaching Courses in Delhi</h2>
              <p className="editorial-programs__summary">
                Choose a course for your target exam and preparation stage.
                Ask an advisor about available online and classroom batches.
              </p>
              <Link href="/courses" className="editorial-link editorial-link--small">
                Talk to a Counsellor <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="editorial-programs__image">
              <Image
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85"
                alt="Books and reading materials arranged on a study table"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
              />
              <span>A little intentional beginning.</span>
            </div>
          </div>

          <div className="editorial-programs__bar">
            <span>Find your starting point</span>
            <span>CLAT · AILET · Law entrance preparation</span>
          </div>
          <div className="editorial-paths">
            {pathways.map((pathway) => (
              <article
                className={`editorial-path${pathway.featured ? " editorial-path--featured" : ""}`}
                key={pathway.number}
              >
                <span className="editorial-path__label">{pathway.label}</span>
                <h3>{pathway.title}</h3>
                <p>{pathway.description}</p>
                <ul>
                  {pathway.points.map((point) => (
                    <li key={point}><Check size={13} aria-hidden="true" />{point}</li>
                  ))}
                </ul>
                <Link className="editorial-path__link" href={pathway.href}>
                  {pathway.link} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p className="editorial-programs__note">
            Not sure which course fits? Speak with a counsellor about your
            target exam, preferred mode, and current preparation.
            {" "}
            <Link href="/enquiry">Book a free demo class</Link>
          </p>
        </div>
      </section>

      <section className="editorial-approach" id="approach">
        <div className="editorial-container editorial-approach__grid">
          <div>
            <p className="editorial-eyebrow">Why Delhi Law School</p>
            <h2>Why Students Choose Delhi Law School for CLAT</h2>
          </div>
          <div className="editorial-approach__copy">
            <p>
              CLAT preparation can become difficult to manage when resources
              are scattered and there is no clear plan. A structured schedule,
              focused practice, and faculty feedback can help you stay on track.
            </p>
            <Link href="/about" className="editorial-text-link">
              Learn about our approach <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="editorial-container editorial-promise__grid">
          <div><span>01</span><div><strong>Plan by preparation stage</strong><small>Build a routine around your class, exam goal, and available time.</small></div></div>
          <div><span>02</span><div><strong>Practise all five CLAT areas</strong><small>Work on English, current affairs, legal and logical reasoning, and quantitative techniques.</small></div></div>
          <div><span>03</span><div><strong>Review your practice</strong><small>Use mock attempts to spot patterns and decide what to revisit.</small></div></div>
          <div><span>04</span><div><strong>Explore before enrolling</strong><small>Ask about a demo class, course format, and current batch details.</small></div></div>
        </div>
      </section>

      <ExamOverview />

      <section className="editorial-method" id="method">
        <div className="editorial-container">
          <div className="editorial-method__heading">
            <div>
              <p className="editorial-eyebrow">Teaching Methodology</p>
              <h2>A rhythm for meaningful progress.</h2>
            </div>
            <p>
              Less scattered effort. More purposeful learning. A simple cycle
              to return to, whenever you are in your preparation.
            </p>
          </div>
          <div className="editorial-habits">
            {habits.map((habit) => (
              <article className="editorial-habit" key={habit.number}>
                <span className="editorial-habit__number">{habit.number}</span>
                <h3>{habit.title}</h3>
                <p>{habit.description}</p>
              </article>
            ))}
          </div>
          <div className="editorial-skills">
            <span>The skills that stay with you</span>
            <span>Close reading</span>
            <span>Legal reasoning</span>
            <span>Logical thinking</span>
            <span>Questions with purpose</span>
            <span>Awareness of the world</span>
          </div>
        </div>
      </section>

      <FacultySection />

      <section className="editorial-success" aria-labelledby="student-success-heading">
        <div className="editorial-container">
          <div className="editorial-section-heading">
            <div>
              <p className="editorial-eyebrow">Results and student reviews</p>
              <h2 id="student-success-heading">Results should be easy to verify.</h2>
            </div>
            <p>
              Rank claims and student reviews belong with verifiable records,
              exam-year details, and the student&apos;s permission.
            </p>
          </div>
          <div className="editorial-success__grid">
            <article className="editorial-success__card">
              <div>
                <h3>CLAT and AILET results</h3>
                <p>Ask an advisor whether verified result records are available.</p>
              </div>
            </article>
            <article className="editorial-success__card">
              <div>
                <h3>Student reviews</h3>
                <p>Check that any review includes its exam year and was shared with permission.</p>
              </div>
            </article>
          </div>
          <p className="editorial-success__note">
            Individual outcomes vary and do not guarantee future performance.
          </p>
          <Link href="/enquiry" className="editorial-text-link">
            Ask about results and reviews <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="editorial-reading" id="reading-room">
        <div className="editorial-container">
          <div className="editorial-section-heading">
            <div>
              <p className="editorial-eyebrow">Free resources and study material</p>
              <h2>Explore CLAT resources and keep learning.</h2>
              <p>Start with mock tests, exam information, and current affairs. Enrolled students can review course study-material details with an advisor.</p>
              <Link href="/courses" className="editorial-text-link">
                Course study-material details <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <Link href="/current-affairs" className="editorial-text-link">
              View current affairs <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="editorial-reading-grid">
            {readingRoom.map((article) => (
              <article className="editorial-article" key={article.title}>
                <Link href={article.href} className="editorial-article__image">
                  <Image src={article.image} alt={article.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
                </Link>
                <p className="editorial-eyebrow">{article.category}</p>
                <h3><Link href={article.href}>{article.title}</Link></h3>
                <p>{article.excerpt}</p>
                <Link href={article.href} className="editorial-text-link">
                  Read the guide <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-faq">
        <div className="editorial-container">
          <div className="editorial-faq__heading">
            <p className="editorial-eyebrow">FAQs</p>
            <h2>Common CLAT and AILET questions, answered.</h2>
            <p>
              Explore common questions about CLAT and AILET preparation,
              programs, practice, and finding the right starting point.
            </p>
            <Link href="/enquiry" className="editorial-text-link">
              Ask an advisor <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="editorial-faq__list">
            {faqs.map((faq, index) => {
              const isOpen = openQuestion === index;
              const answerId = `faq-answer-${index + 1}`;
              return (
                <article className="editorial-faq__item" key={faq.question}>
                  <h3>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                    >
                      {faq.question}
                      {isOpen ? (
                        <Minus size={15} aria-hidden="true" />
                      ) : (
                        <Plus size={15} aria-hidden="true" />
                      )}
                    </button>
                  </h3>
                  <p id={answerId} hidden={!isOpen}>{faq.answer}</p>
                </article>
              );
            })}
          </div>
          <p className="editorial-faq__updated">
            Exam information last updated: 11 November 2026.
          </p>
        </div>
      </section>

      <section className="editorial-consultation" id="consultation">
        <div className="editorial-container editorial-consultation__grid">
          <div className="editorial-consultation__copy">
            <p className="editorial-eyebrow">The next step is yours</p>
            <h2>
              Your next chapter starts with a conversation.
            </h2>
            <p>
              Tell us about your ambitions. Let&apos;s explore your exam goals,
              your preparation needs and a path that feels right for you.
            </p>
            <div className="editorial-consultation__links">
              <a href="#programs">Programs</a>
              <a href="#method">Our approach</a>
              <a href="#mentorship">Your questions</a>
            </div>
          </div>
          <div className="editorial-form-card">
            <div className="editorial-form-card__heading">
              <h3>Book a free demo class.</h3>
              <p>Leave your details and an advisor can help you explore available courses and batches.</p>
            </div>
            <form className="editorial-form" onSubmit={handleSubmit}>
              <label>
                Full name <span>*</span>
                <input
                  autoComplete="name"
                  name="name"
                  onChange={updateForm}
                  placeholder="Your name"
                  required
                  value={form.name}
                />
              </label>
              <label>
                Email address <span>*</span>
                <input
                  autoComplete="email"
                  name="email"
                  onChange={updateForm}
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={form.email}
                />
              </label>
              <label>
                Phone number <span>*</span>
                <input
                  autoComplete="tel"
                  name="phone"
                  onChange={updateForm}
                  placeholder="+91"
                  required
                  type="tel"
                  value={form.phone}
                />
              </label>
              <label>
                Target exam <span>*</span>
                <select name="exam" onChange={updateForm} required value={form.exam}>
                  <option value="">Select an exam</option>
                  <option value="CLAT">CLAT</option>
                  <option value="AILET">AILET</option>
                  <option value="CLAT and AILET">CLAT + AILET</option>
                  <option value="Undecided">Still exploring</option>
                </select>
              </label>
              <label>
                Current study stage
                <select name="class" onChange={updateForm} value={form.class}>
                  <option value="">Choose an option</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                  <option value="Dropper / Repeater">Dropper / Repeater</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>
                What would you like us to know?
                <textarea
                  name="message"
                  onChange={updateForm}
                  placeholder="Share a little about your goals (optional)"
                  rows={2}
                  value={form.message}
                />
              </label>
              <label className="editorial-form__consent">
                <input
                  checked={form.consent}
                  name="consent"
                  onChange={updateForm}
                  required
                  type="checkbox"
                />
                <span>
                  I agree to be contacted by Delhi Law School about this request and
                  have read the <Link href="/privacy-policy">Privacy Policy</Link>.
                </span>
              </label>
              <button
                className="editorial-link editorial-link--filled editorial-form__submit"
                disabled={submitting}
                type="submit"
              >
                {submitting ? "Sending request…" : "Request a conversation"}
                <ArrowRight size={15} aria-hidden="true" />
              </button>
              <p className="editorial-form__fineprint">
                No spam. Just a thoughtful first conversation.
              </p>
              <div className="editorial-form__contact">
                <a href={BUSINESS_CONTACT.phone.href}>{BUSINESS_CONTACT.phone.display}</a>
                <a href={BUSINESS_CONTACT.email.href}>{BUSINESS_CONTACT.email.display}</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
