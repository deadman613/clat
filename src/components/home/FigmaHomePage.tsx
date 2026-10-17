"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { toast } from "sonner";

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

const mentors = [
  {
    icon: "◎",
    title: "The academic mentor",
    subtitle: "Your preparation, in perspective",
    body: "A mentor who knows your strengths, study priorities and the questions that sit beyond the syllabus.",
    note: "Direction · Practice · Reflection",
  },
  {
    icon: "□",
    title: "The subject guide",
    subtitle: "The clarity behind each concept",
    body: "The right subject teacher helps connect ideas, find a reason in a confusing detail, and move forward.",
    note: "Concepts · Skills · Focus",
  },
  {
    icon: "↗",
    title: "The practice coach",
    subtitle: "The next step after every attempt",
    body: "Thoughtful feedback, strategy and regular practice that turn a result into an action.",
    note: "Review · Strategy · Progress",
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
    question: "Which program is right for me?",
    answer:
      "Begin with where you are today: your current learning stage, the time you can dedicate, and the exam you are preparing for. Our counsellors can help you compare Foundation, Comprehensive and AILET Focus programs.",
  },
  {
    question: "Can I explore programs before joining?",
    answer:
      "Yes. You can review each program and speak with an advisor before deciding. We will help you understand the learning plan, practice schedule and support available.",
  },
  {
    question: "How do CLAT and AILET preparation differ?",
    answer:
      "There is useful overlap in reading, reasoning and current affairs, but the exams differ in structure and emphasis. Your preparation should make space for both shared foundations and exam-specific practice.",
  },
  {
    question: "What does a guided preparation plan include?",
    answer:
      "A guided plan brings together classes, focused practice, mock tests, review and mentor check-ins. The exact rhythm depends on your program and preparation stage.",
  },
  {
    question: "Where can I find program schedules and fees?",
    answer:
      "Send us your details using the form below and an advisor will share current program options, schedules and fees with you.",
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
            <p className="editorial-eyebrow">For the next generation of legal minds</p>
            <h1 className="editorial-title">
              Your ambition.
              <br />
              <em>A higher calling.</em>
            </h1>
            <p>
              Thoughtful preparation for CLAT, AILET and a future in law. Build
              the knowledge, judgement and confidence to take your next step.
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
              For first-time aspirants, focused learners and fresh starts.
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

      <section className="editorial-promise" aria-label="Our promise">
        <div className="editorial-container editorial-promise__grid">
          <div><span>⌕</span><div><strong>Depth over shortcuts</strong><small>Understand the reasoning, not just the answer.</small></div></div>
          <div><span>◎</span><div><strong>Direction, not overwhelm</strong><small>A clear path through your preparation.</small></div></div>
          <div><span>▧</span><div><strong>Guidance with perspective</strong><small>Make space for questions and better thinking.</small></div></div>
        </div>
      </section>

      <section className="editorial-approach" id="approach">
        <div className="editorial-container editorial-approach__grid">
          <div>
            <p className="editorial-eyebrow">The LexAscent difference</p>
            <h2>A legal mind is built, not memorised.</h2>
          </div>
          <div className="editorial-approach__copy">
            <p>
              Law entrance preparation is more than a syllabus to finish. It is
              a practice of reading closely, questioning assumptions and making
              reasoned choices.
            </p>
            <p>
              That is where we begin.
            </p>
            <Link href="/about" className="editorial-text-link">
              Discover our approach <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-programs" id="programs">
        <div className="editorial-container">
          <div className="editorial-programs__intro">
            <div>
              <p className="editorial-eyebrow">Your route into law school</p>
              <h2>
                Different starting points.
                <br />
                <em>One clear ambition.</em>
              </h2>
              <p className="editorial-programs__summary">
                Start early, build a complete foundation, or sharpen your focus.
                Find preparation that meets you where you are—and gives you a
                considered way forward.
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
            <span>Explore your options</span>
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

      <section className="editorial-method" id="method">
        <div className="editorial-container">
          <div className="editorial-method__heading">
            <div>
              <p className="editorial-eyebrow">The LexAscent approach</p>
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

      <section className="editorial-story">
        <div className="editorial-story__image">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85"
            alt="Students learning and sharing ideas around a table"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="editorial-story__caption">
            <strong>A question worth asking</strong>
            <span>“What made this answer convincing?”</span>
          </div>
        </div>
        <div className="editorial-story__copy">
          <p className="editorial-eyebrow">Preparation is personal</p>
          <h2>
            Big ambitions.
            <br />
            Better questions.
            <br />
            <em>A guide beside you.</em>
          </h2>
          <p>
            A thoughtful mentor does more than explain a solution. They help you
            see how you learn, make sense of setbacks and approach the next
            challenge with perspective.
          </p>
          <div className="editorial-story__links">
            <a href="#mentorship">Speak to us</a>
            <a href="#method">This is what we do</a>
            <a href="#reading-room">A closer look inside</a>
          </div>
          <Link href="/faculty" className="editorial-link editorial-link--light">
            Explore guided learning <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="editorial-mentorship" id="mentorship">
        <div className="editorial-container">
          <div className="editorial-section-heading">
            <div>
              <p className="editorial-eyebrow">The people in your corner</p>
              <h2>Guidance, in all the ways it matters.</h2>
            </div>
            <p>A view of the mentoring roles that make purposeful preparation feel more human.</p>
          </div>
          <div className="editorial-mentor-grid">
            {mentors.map((mentor) => (
              <article className="editorial-mentor" key={mentor.title}>
                <span className="editorial-mentor__icon" aria-hidden="true">{mentor.icon}</span>
                <h3>{mentor.title}</h3>
                <strong>{mentor.subtitle}</strong>
                <p>{mentor.body}</p>
                <span className="editorial-mentor__note">{mentor.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-student">
        <div className="editorial-container editorial-student__grid">
          <div className="editorial-student__image">
            <Image
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85"
              alt="A student reading and making notes beside a window"
              fill
              sizes="(max-width: 800px) 100vw, 34vw"
            />
            <span>Your journey, with room to grow.</span>
          </div>
          <div className="editorial-student__copy">
            <p className="editorial-eyebrow">From the aspirant&apos;s side</p>
            <h2>There is a person behind every preparation plan.</h2>
            <blockquote>
              <span>“Where do I even begin?”</span>
              Start with your learning stage, not someone else&apos;s timetable.
            </blockquote>
            <blockquote>
              <span>“I practise, but what should I change?”</span>
              Make room for review. Your mistakes can point the way forward.
            </blockquote>
            <blockquote>
              <span>“How do I keep my balance?”</span>
              Build a realistic rhythm, with space to pause and begin again.
            </blockquote>
            <p className="editorial-student__footnote">
              A better plan starts with a real conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-reading" id="reading-room">
        <div className="editorial-container">
          <div className="editorial-section-heading">
            <div>
              <p className="editorial-eyebrow">A little perspective. A better next step.</p>
              <h2>Ideas for the way ahead.</h2>
            </div>
            <Link href="/current-affairs" className="editorial-text-link">
              Visit the reading room <ArrowRight size={14} aria-hidden="true" />
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
        <div className="editorial-container editorial-faq__grid">
          <div className="editorial-faq__heading">
            <p className="editorial-eyebrow">A little more clarity</p>
            <h2>Good questions. Considered answers.</h2>
            <p>
              Choosing how to prepare is a decision worth thinking through.
              Here are a few places to begin.
            </p>
            <Link href="/enquiry" className="editorial-text-link">
              Ask an advisor <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="editorial-faq__list">
            {faqs.map((faq, index) => {
              const isOpen = openQuestion === index;
              return (
                <article className="editorial-faq__item" key={faq.question}>
                  <h3>
                    <button
                      aria-expanded={isOpen}
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                    >
                      {faq.question}
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </button>
                  </h3>
                  {isOpen && <p>{faq.answer}</p>}
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
                  I agree to be contacted by LexAscent about this request and
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
