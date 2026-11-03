"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import FacultySection from "@/components/home/FacultySection";
import ExamOverview from "@/components/home/ExamOverview";

const studentSuccessStories = [
  { initials: "AS", name: "Ananya Sharma", rank: "AIR 3", nlu: "NLSIU Bangalore", exam: "CLAT 2024" },
  { initials: "RG", name: "Rishi Gupta", rank: "AIR 7", nlu: "NALSAR Hyderabad", exam: "CLAT 2024" },
  { initials: "PN", name: "Priya Nair", rank: "AIR 12", nlu: "NLU Delhi", exam: "CLAT 2024" },
];

const pathways = [
  {
    number: "01",
    label: "For early starters",
    title: "CLAT Foundation",
    description:
      "For early starters who want time to read, explore, and build strong foundations.",
    points: ["Reading and reasoning foundations", "Current affairs habits", "A steady introduction to law"],
    link: "Explore this program",
    href: "/courses/clat-foundation",
  },
  {
    number: "02",
    label: "Prepare with purpose",
    title: "CLAT + AILET Comprehensive",
    description:
      "For aspirants seeking a connected path from core concepts to exam-focused practice.",
    points: ["Learn core subject preparation", "Practice, track, and reflect", "A personal preparation roadmap"],
    link: "Explore this program",
    href: "/courses/clat-power-batch",
    featured: true,
  },
  {
    number: "03",
    label: "Strengthen your focus",
    title: "AILET Focus",
    description:
      "For learners looking for a more targeted approach to their preparation.",
    points: ["Targeted and regular practice", "Current affairs and general knowledge", "Timed practice and exam strategy"],
    link: "Explore this program",
    href: "/courses/ailet-preparation",
  },
];

const habits = [
  {
    number: "01",
    title: "Understand deeply",
    description: "Build the concepts. Ask why an argument works, not simply which option is correct.",
  },
  {
    number: "02",
    title: "Practise deliberately",
    description: "Bring ideas into passages, questions, and timed exercises with a clear purpose.",
  },
  {
    number: "03",
    title: "Review honestly",
    description: "Look beyond a score. Notice your patterns, revisit errors, and refine your approach.",
  },
  {
    number: "04",
    title: "Move with clarity",
    description: "Turn reflection into your next study plan, with room for progress and perspective.",
  },
];

const readingRoom = [
  {
    category: "Exam perspective",
    title: "CLAT and AILET: understand the difference",
    excerpt: "A starting point for thinking about two distinct routes into legal education.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85",
    href: "/exam/clat",
  },
  {
    category: "Better study habits",
    title: "Your mock is over. The learning is not.",
    excerpt: "Move beyond the score with a calmer, more useful approach to review.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=85",
    href: "/mock-tests",
  },
  {
    category: "The reading practice",
    title: "Read the news like an aspiring lawyer.",
    excerpt: "Look for the issue, the argument and the questions a headline leaves open.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=85",
    href: "/current-affairs",
  },
];

const faqs = [
  {
    question: "When should I start preparing for CLAT or AILET?",
    answer:
      "You can begin in Class 11 by building reading and reasoning habits, or start later with a focused plan. The right starting point depends on your current skills, study time, and target exam.",
  },
  {
    question: "Which program is right for a Class 11 student?",
    answer:
      "The CLAT Foundation program is designed for early starters who want time to develop strong reading, reasoning, and current-affairs habits. Compare its schedule and course details with an advisor to see if it fits your plans.",
  },
  {
    question: "What if I am currently in Class 12?",
    answer:
      "A comprehensive, exam-focused plan can help you balance school with CLAT and AILET preparation. Your plan should make room for learning concepts, timed practice, and reviewing your attempts.",
  },
  {
    question: "Can repeaters or droppers join a program?",
    answer:
      "Yes. If you are preparing again, start by identifying which subjects and question types need more attention. An advisor can help you compare available programs and choose a plan for your next attempt.",
  },
  {
    question: "How are CLAT and AILET preparation different?",
    answer:
      "Both exams reward strong reading and reasoning, but they have different formats and areas of emphasis. Preparation should cover shared skills as well as practice tailored to each exam.",
  },
  {
    question: "Can I prepare for both CLAT and AILET together?",
    answer:
      "Yes. You can build shared foundations in reading, reasoning, and current affairs, then add practice for the question types and format of each exam.",
  },
  {
    question: "What subjects are covered in law entrance preparation?",
    answer:
      "Preparation generally includes English and reading comprehension, current affairs and general knowledge, legal reasoning, logical reasoning, and quantitative techniques. The time spent on each area can depend on the exam and your needs.",
  },
  {
    question: "How does the CLAT Foundation program help early starters?",
    answer:
      "It gives early aspirants time to strengthen reading and reasoning, build a current-affairs routine, and become familiar with law entrance preparation before the final exam year.",
  },
  {
    question: "What is included in the CLAT + AILET Comprehensive program?",
    answer:
      "The comprehensive program brings together subject learning and exam-focused practice. Review the current course details or speak with an advisor for the latest schedule, format, and support information.",
  },
  {
    question: "Who should consider the AILET Focus program?",
    answer:
      "It may suit students who want targeted AILET preparation alongside their broader law-entrance study. Consider your target exam, current preparation, and available study time when choosing.",
  },
  {
    question: "How important are mock tests?",
    answer:
      "Mock tests help you practise under timed conditions, understand how you manage the paper, and identify areas to work on. Reviewing each attempt is just as important as taking the test.",
  },
  {
    question: "How should I review a mock test?",
    answer:
      "Look at questions you got wrong, questions you guessed, and questions that took too long. Note why each answer was difficult, revisit the relevant concept, and use that reflection to plan your next practice.",
  },
  {
    question: "How can I build a daily current-affairs habit?",
    answer:
      "Choose a regular time to read, note the main issue and arguments, and revisit important developments. Consistent, thoughtful reading is more useful than trying to memorise everything at once.",
  },
  {
    question: "What if I find legal reasoning difficult?",
    answer:
      "Start by reading the facts and principle carefully, then identify how the principle applies to each option. Practise explaining why an answer follows from the passage, and review the reasoning when you make a mistake.",
  },
  {
    question: "How much time should I study each day?",
    answer:
      "There is no single number that works for everyone. Build a realistic weekly routine around school or other responsibilities, and make time for learning, practice, and review.",
  },
  {
    question: "Can I explore programs before enrolling?",
    answer:
      "Yes. Review the program information and speak with an advisor before deciding. Ask about the learning plan, schedule, format, and the support available for your stage.",
  },
  {
    question: "Where can I find free CLAT and AILET learning resources?",
    answer:
      "Explore the free guides and reading materials in the Learning Resources section above. You can also visit the Current Affairs and Mock Tests pages for additional preparation resources.",
  },
  {
    question: "How can parents support a law entrance aspirant?",
    answer:
      "Help your student create a sustainable routine, encourage them to discuss questions and challenges, and recognise steady progress as well as results. A conversation with an advisor can help families understand program options.",
  },
  {
    question: "How can I find out about course fees and schedules?",
    answer:
      "Course schedules and fees can vary. Share your contact details through the enquiry form and an advisor can provide the latest information for the programs you are considering.",
  },
  {
    question: "How do I speak with an advisor?",
    answer:
      "Use the enquiry form below to share your name, contact details, study stage, and target exam. An advisor can then help you understand the available next steps.",
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
      <section className="editorial-hero">
        <div className="editorial-container editorial-hero__grid">
          <div className="editorial-hero__copy">
            <p className="editorial-eyebrow">CLAT and AILET preparation for every starting point</p>
            <h1 className="editorial-title">
              Your ambition.
              <br />
              <em>A higher calling.</em>
            </h1>
            <p>
              Preparing for CLAT or AILET from Class 11, Class 12, or a fresh
              start? Build the reading, reasoning, and confidence to take your
              next step toward law school.
            </p>
            <div className="editorial-hero__actions">
              <Link href="/courses" className="editorial-link editorial-link--filled">
                Find your program <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/#consultation" className="editorial-link">
                Let&apos;s talk about your goals
              </Link>
            </div>
            <p className="editorial-hero__footnote">
              <Check size={13} aria-hidden="true" />
              Support for students, repeaters, and the families backing them.
            </p>
          </div>

          <div className="editorial-hero__image">
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85"
              alt="A university courtyard framed by historic architecture"
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

      <section className="editorial-approach" id="approach">
        <div className="editorial-container editorial-approach__grid">
          <div>
            <p className="editorial-eyebrow">Why choose Delhi Law School?</p>
            <h2>Preparation that meets you where you are.</h2>
          </div>
          <div className="editorial-approach__copy">
            <p>
              Whether you are beginning early, balancing school with exam prep,
              or returning as a repeater, you deserve a clear plan—not more
              pressure or a one-size-fits-all timetable.
            </p>
            <p>
              We focus on close reading, reasoned practice, and honest review
              so students and families can make informed decisions at every step.
            </p>
            <Link href="/about" className="editorial-text-link">
              See how we support aspirants <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="editorial-container editorial-promise__grid">
          <div><span>⌕</span><div><strong>Build real understanding</strong><small>Learn the reasoning behind each answer.</small></div></div>
          <div><span>◎</span><div><strong>Find a clear direction</strong><small>Make a study plan for your stage and goals.</small></div></div>
          <div><span>▧</span><div><strong>Get thoughtful guidance</strong><small>Make progress without losing perspective.</small></div></div>
        </div>
      </section>

      <section className="editorial-programs" id="programs">
        <div className="editorial-container">
          <div className="editorial-programs__intro">
            <div>
              <p className="editorial-eyebrow">Our Programs · Choose your preparation stage</p>
              <h2>
                Different starting points.
                <br />
                <em>One clear ambition.</em>
              </h2>
              <p className="editorial-programs__summary">
                Choose a foundation for an early start, comprehensive support
                alongside school or a targeted plan for focused exam practice.
              </p>
              <Link href="/courses" className="editorial-link editorial-link--small">
                Help me choose a program <ArrowUpRight size={14} aria-hidden="true" />
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
            Not sure where to begin? An advisor can help you choose your own
            path, reading plan and rhythm.
          </p>
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
              <p className="editorial-eyebrow">Student Success Stories</p>
              <h2 id="student-success-heading">Every result represents a journey.</h2>
            </div>
            <p>Celebrate the students who earned a place at leading law universities.</p>
          </div>
          <div className="editorial-success__grid">
            {studentSuccessStories.map((student) => (
              <article className="editorial-success__card" key={student.name}>
                <span className="editorial-success__initials" aria-hidden="true">{student.initials}</span>
                <div>
                  <p className="editorial-success__exam">{student.exam}</p>
                  <h3>{student.name}</h3>
                  <p>{student.nlu}</p>
                </div>
                <strong>{student.rank}</strong>
              </article>
            ))}
          </div>
          <p className="editorial-success__note">
            Past results are individual outcomes and do not guarantee future performance.
          </p>
          <Link href="/results" className="editorial-text-link">
            Explore all results <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="editorial-reading" id="reading-room">
        <div className="editorial-container">
          <div className="editorial-section-heading">
            <div>
              <p className="editorial-eyebrow">Free Learning Resources</p>
              <h2>Explore, practise, and keep learning.</h2>
            </div>
            <Link href="/current-affairs" className="editorial-text-link">
              Browse all resources <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="editorial-reading-grid">
            {readingRoom.map((article) => (
              <article className="editorial-article" key={article.title}>
                <Link href={article.href} className="editorial-article__image">
                  <Image src={article.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
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
            <h2>20 answers for students and families.</h2>
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
              <h3>Let&apos;s find your starting point.</h3>
              <p>Leave your details to request a conversation with an advisor.</p>
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
