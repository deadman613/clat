"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Clock, ChevronLeft, ChevronRight, Flag, CheckCircle2,
  XCircle, AlertCircle, BarChart3, ArrowRight, Home
} from "lucide-react";

// Sample test data
const sampleTest = {
  id: "clat-mock-1",
  title: "CLAT Full Mock Test #1",
  duration: 120, // minutes
  totalMarks: 120,
  sections: [
    {
      name: "English Language",
      questions: [
        {
          id: 1,
          text: "Read the passage and answer: 'The Indian judiciary has often been described as the guardian of the Constitution. This assertion finds basis in the power of judicial review, which enables courts to strike down legislation that contravenes fundamental rights.' What does 'judicial review' primarily enable courts to do?",
          options: [
            { id: "A", text: "Review all executive decisions" },
            { id: "B", text: "Strike down unconstitutional legislation" },
            { id: "C", text: "Revise parliamentary procedures" },
            { id: "D", text: "Appoint new judges" },
          ],
          correct: "B",
          explanation: "The passage clearly states that judicial review 'enables courts to strike down legislation that contravenes fundamental rights,' making option B correct.",
          section: "English Language",
          marks: 1,
          negMarks: 0.25,
        },
        {
          id: 2,
          text: "Choose the word that best fills the blank: 'The legislation was passed _____ significant opposition from the minority party.'",
          options: [
            { id: "A", text: "despite" },
            { id: "B", text: "because of" },
            { id: "C", text: "due to" },
            { id: "D", text: "in spite" },
          ],
          correct: "A",
          explanation: "'Despite' is correct — it shows contrast between the legislation passing and the opposition faced. 'In spite' alone is incomplete (needs 'of').",
          section: "English Language",
          marks: 1,
          negMarks: 0.25,
        },
      ],
    },
    {
      name: "Current Affairs & GK",
      questions: [
        {
          id: 3,
          text: "Which of the following is NOT a National Law University (NLU) under the CLAT Consortium?",
          options: [
            { id: "A", text: "NALSAR University of Law, Hyderabad" },
            { id: "B", text: "National Law Institute University, Bhopal" },
            { id: "C", text: "Faculty of Law, Delhi University" },
            { id: "D", text: "GNLU, Gandhinagar" },
          ],
          correct: "C",
          explanation: "Faculty of Law, Delhi University is a constituent college of Delhi University and is NOT part of the NLU Consortium. The others are all member NLUs.",
          section: "Current Affairs & GK",
          marks: 1,
          negMarks: 0.25,
        },
        {
          id: 4,
          text: "The term 'Doctrine of Basic Structure' in Indian Constitutional law was established in which landmark case?",
          options: [
            { id: "A", text: "Golak Nath v. State of Punjab (1967)" },
            { id: "B", text: "Kesavananda Bharati v. State of Kerala (1973)" },
            { id: "C", text: "Minerva Mills v. Union of India (1980)" },
            { id: "D", text: "Maneka Gandhi v. Union of India (1978)" },
          ],
          correct: "B",
          explanation: "The Doctrine of Basic Structure was established in Kesavananda Bharati v. State of Kerala (1973) — a 13-judge constitutional bench ruled 7:6 that Parliament cannot amend the Constitution's basic structure.",
          section: "Current Affairs & GK",
          marks: 1,
          negMarks: 0.25,
        },
      ],
    },
    {
      name: "Legal Reasoning",
      questions: [
        {
          id: 5,
          text: "Principle: A person is liable for trespass if they enter another's property without permission. Facts: Rohan entered his neighbour Priya's garden to retrieve his ball that had rolled there. Priya had not given permission. Which of the following is correct?",
          options: [
            { id: "A", text: "Rohan is not liable because his intention was not to trespass" },
            { id: "B", text: "Rohan is liable for trespass regardless of his intention" },
            { id: "C", text: "Rohan is not liable because necessity justifies the entry" },
            { id: "D", text: "Rohan is liable only if Priya suffered damages" },
          ],
          correct: "B",
          explanation: "Trespass to land is a strict liability tort — intention is irrelevant. Rohan entered without permission, making him liable for trespass regardless of his innocent purpose.",
          section: "Legal Reasoning",
          marks: 1,
          negMarks: 0.25,
        },
      ],
    },
  ],
};

// Flatten all questions
const allQuestions = sampleTest.sections.flatMap((s) =>
  s.questions.map((q) => ({ ...q, section: s.name }))
);

type Answer = { selected: string | null; flagged: boolean; visited: boolean };

export default function MockTestInterface() {
  const [phase, setPhase] = useState<"intro" | "test" | "result">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [timeLeft, setTimeLeft] = useState(sampleTest.duration * 60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (phase === "test") {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current!);
            handleSubmit();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase("result");
  };

  const selectAnswer = (qId: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: { ...prev[qId], selected: option, visited: true },
    }));
  };

  const toggleFlag = (qId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: { ...prev[qId], flagged: !prev[qId]?.flagged, visited: true },
    }));
  };

  const markVisited = (qId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: { ...prev[qId], visited: true },
    }));
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Results computation
  const computeResults = () => {
    let correct = 0, incorrect = 0, attempted = 0;
    let score = 0;
    allQuestions.forEach((q) => {
      const ans = answers[q.id];
      if (ans?.selected) {
        attempted++;
        if (ans.selected === q.correct) {
          correct++;
          score += q.marks;
        } else {
          incorrect++;
          score -= q.negMarks;
        }
      }
    });
    const unattempted = allQuestions.length - attempted;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    return { correct, incorrect, attempted, unattempted, score: Math.max(0, score), accuracy };
  };

  // =================== INTRO SCREEN ===================
  if (phase === "intro") {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl"
        >
          <Link href="/" className="flex items-center gap-2 text-blue-600 text-sm mb-6 hover:text-blue-800">
            <Home className="w-4 h-4" /> Back to Home
          </Link>

          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-7 h-7 text-blue-600" />
            </div>
            <h1 className="font-playfair text-2xl font-bold text-slate-900 mb-2">
              {sampleTest.title}
            </h1>
            <p className="text-slate-500 text-sm">Free Sample Mock Test — LexAscent</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Questions", value: allQuestions.length },
              { label: "Duration", value: `${sampleTest.duration} min` },
              { label: "Total Marks", value: sampleTest.totalMarks },
            ].map((s) => (
              <div key={s.label} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xl font-bold text-slate-900 font-playfair">{s.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-6 p-4 rounded-xl bg-amber-50 border border-amber-100">
            <p className="text-xs font-semibold text-amber-800">📋 Instructions:</p>
            <ul className="text-xs text-amber-700 space-y-1">
              <li>• Each correct answer = +1 mark | Incorrect = -0.25 marks</li>
              <li>• You can flag questions and return to them</li>
              <li>• All questions must be submitted before time runs out</li>
              <li>• This is a sample — full test available with enrollment</li>
            </ul>
          </div>

          <button
            onClick={() => setPhase("test")}
            className="w-full py-3.5 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Start Test <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  // =================== TEST INTERFACE ===================
  if (phase === "test") {
    const q = allQuestions[currentQ];
    const ans = answers[q.id];
    const timerPct = (timeLeft / (sampleTest.duration * 60)) * 100;
    const timerColor = timerPct > 50 ? "from-emerald-500 to-emerald-600" : timerPct > 25 ? "from-amber-500 to-orange-500" : "from-red-500 to-red-600";

    return (
      <div className="min-h-screen bg-slate-100 flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
          <div className="font-semibold text-sm">{sampleTest.title}</div>
          <div className={`flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r ${timerColor}`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
          </div>
          <button
            onClick={handleSubmit}
            className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-sm font-semibold transition-colors"
          >
            Submit Test
          </button>
        </div>

        <div className="flex flex-1">
          {/* Question Area */}
          <div className="flex-1 p-6 max-w-3xl">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold">{q.section}</span>
                  <span className="text-slate-400 text-sm">Question {currentQ + 1} of {allQuestions.length}</span>
                </div>
                <button
                  onClick={() => toggleFlag(q.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    ans?.flagged ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600 hover:bg-amber-50"
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  {ans?.flagged ? "Flagged" : "Flag for Review"}
                </button>
              </div>

              <p className="text-slate-800 leading-relaxed mb-6 text-sm">{q.text}</p>

              <div className="space-y-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => selectAnswer(q.id, opt.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      ans?.selected === opt.id
                        ? "border-blue-500 bg-blue-50 text-blue-800"
                        : "border-slate-200 hover:border-blue-200 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      ans?.selected === opt.id ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}>{opt.id}</span>
                    <span className="text-sm">{opt.text}</span>
                  </button>
                ))}
              </div>

              {ans?.selected && (
                <button
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: { ...prev[q.id], selected: null } }))}
                  className="mt-3 text-xs text-rose-500 hover:text-rose-700 font-medium"
                >
                  Clear Response
                </button>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => { setCurrentQ((p) => Math.max(0, p - 1)); markVisited(allQuestions[Math.max(0, currentQ - 1)].id); }}
                  disabled={currentQ === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={() => { setCurrentQ((p) => Math.min(allQuestions.length - 1, p + 1)); markVisited(allQuestions[Math.min(allQuestions.length - 1, currentQ + 1)].id); }}
                  disabled={currentQ === allQuestions.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:opacity-40"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar — Question Navigator */}
          <div className="w-72 bg-white border-l border-slate-200 p-4 hidden lg:block">
            <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Question Navigator</p>

            {sampleTest.sections.map((section) => (
              <div key={section.name} className="mb-4">
                <p className="text-xs font-semibold text-slate-400 mb-2">{section.name}</p>
                <div className="flex flex-wrap gap-1.5">
                  {section.questions.map((sq) => {
                    const sqAns = answers[sq.id];
                    const globalIdx = allQuestions.findIndex((q) => q.id === sq.id);
                    return (
                      <button
                        key={sq.id}
                        onClick={() => setCurrentQ(globalIdx)}
                        className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                          globalIdx === currentQ
                            ? "bg-blue-600 text-white ring-2 ring-blue-300"
                            : sqAns?.flagged
                            ? "bg-amber-400 text-white"
                            : sqAns?.selected
                            ? "bg-emerald-500 text-white"
                            : sqAns?.visited
                            ? "bg-rose-100 text-rose-600 border border-rose-200"
                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                        }`}
                      >
                        {sq.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="mt-4 space-y-1.5 text-xs">
              {[
                { color: "bg-emerald-500", label: "Answered" },
                { color: "bg-rose-100 border border-rose-200", label: "Visited" },
                { color: "bg-amber-400", label: "Flagged for Review" },
                { color: "bg-slate-100", label: "Not Visited" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${item.color}`} />
                  <span className="text-slate-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =================== RESULTS ===================
  const results = computeResults();

  return (
    <div className="min-h-screen bg-slate-50 p-4 py-10">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          {/* Score Card */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white text-center mb-6">
            <div className="text-5xl font-bold font-playfair mb-2">{results.score.toFixed(1)}</div>
            <div className="text-blue-200 mb-4">out of {sampleTest.totalMarks}</div>
            <div className="text-2xl font-semibold">
              {results.accuracy}% Accuracy
            </div>
            <div className="mt-4 text-blue-200 text-sm">
              {results.correct > 3 ? "🎉 Excellent performance!" : results.correct > 1 ? "👍 Good attempt!" : "💪 Keep practising!"}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { icon: CheckCircle2, label: "Correct", value: results.correct, color: "text-emerald-600 bg-emerald-50" },
              { icon: XCircle, label: "Incorrect", value: results.incorrect, color: "text-rose-600 bg-rose-50" },
              { icon: AlertCircle, label: "Unattempted", value: results.unattempted, color: "text-slate-600 bg-slate-50" },
              { icon: BarChart3, label: "Attempted", value: results.attempted, color: "text-blue-600 bg-blue-50" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 font-playfair">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Answer Review */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-6">
            <h3 className="font-playfair font-bold text-slate-900 mb-4">Answer Review</h3>
            <div className="space-y-4">
              {allQuestions.map((q, i) => {
                const ans = answers[q.id];
                const isCorrect = ans?.selected === q.correct;
                const isWrong = ans?.selected && !isCorrect;
                return (
                  <div key={q.id} className={`p-4 rounded-xl border ${
                    isCorrect ? "border-emerald-200 bg-emerald-50/50" :
                    isWrong ? "border-rose-200 bg-rose-50/50" :
                    "border-slate-100 bg-slate-50/50"
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isCorrect ? "bg-emerald-100 text-emerald-600" :
                        isWrong ? "bg-rose-100 text-rose-600" : "bg-slate-100 text-slate-400"
                      }`}>
                        {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : isWrong ? <XCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 font-medium mb-2 line-clamp-2">Q{i + 1}. {q.text.slice(0, 100)}...</p>
                        <div className="text-xs space-y-1">
                          <span className="text-emerald-600 font-semibold">Correct: {q.correct}</span>
                          {ans?.selected && ans.selected !== q.correct && (
                            <span className="ml-3 text-rose-600 font-semibold">Your answer: {ans.selected}</span>
                          )}
                          {!ans?.selected && <span className="ml-3 text-slate-400">Not attempted</span>}
                          <p className="text-slate-500 mt-1">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <button
              onClick={() => { setPhase("intro"); setAnswers({}); setCurrentQ(0); setTimeLeft(sampleTest.duration * 60); }}
              className="flex-1 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Retake Test
            </button>
            <Link
              href="/courses"
              className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors text-center"
            >
              Enroll for Full Tests
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
