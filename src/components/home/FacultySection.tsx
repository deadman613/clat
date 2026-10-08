"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";


const faculty = [
  {
    name: "Dr. Anjali Sharma",
    subject: "Legal Reasoning & Constitutional Law",
    qualification: "LLM, NLU Delhi | PhD (Law)",
    experience: 12,
    bio: "Former Research Fellow at Supreme Court of India. Ex-faculty at NLSIU Bangalore. Expert in Constitutional Law and Legal Reasoning for competitive exams.",
    initials: "AS",
    color: "from-blue-500 to-blue-700",
    nlu: "NLU Delhi Alumni",
  },
  {
    name: "Prof. Rohan Khanna",
    subject: "Logical Reasoning",
    qualification: "BA LLB (Hons), NALSAR | MA Philosophy",
    experience: 9,
    bio: "Trained over 3,000 students in Logical Reasoning. Known for simplifying complex reasoning patterns into easy-to-remember frameworks.",
    initials: "RK",
    color: "from-emerald-500 to-teal-700",
    nlu: "NALSAR Alumni",
  },
  {
    name: "Ms. Preethi Rajan",
    subject: "English Language & Reading Comprehension",
    qualification: "MA English, Delhi University | CELTA Certified",
    experience: 11,
    bio: "Specialist in teaching English comprehension for competitive exams. Author of 'Legal English for Law Aspirants' — widely used by CLAT students.",
    initials: "PR",
    color: "from-violet-500 to-purple-700",
    nlu: "IIM Calcutta Certified",
  },
  {
    name: "Mr. Siddharth Rao",
    subject: "Current Affairs & General Knowledge",
    qualification: "BA LLB (Hons), NUJS | MA Political Science",
    experience: 8,
    bio: "Ex-journalist turned educator. Brings real-world current affairs analysis to CLAT preparation. Over 5,000 students mentored.",
    initials: "SR",
    color: "from-amber-500 to-orange-600",
    nlu: "NUJS Alumni",
  },
];

export default function FacultySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Expert Faculty
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Learn From the Best
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Our faculty brings together NLU alumni, practicing lawyers, and subject matter experts 
            with decades of combined CLAT coaching experience.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              {/* Photo placeholder */}
              <div className="relative mb-4">
                <div
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  {member.initials}
                </div>
                {/* NLU badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-bold">
                    {member.nlu}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-slate-900 text-base">{member.name}</h3>
                <p className="text-xs font-semibold text-blue-600 mt-0.5 mb-1">{member.subject}</p>
                <p className="text-xs text-slate-400 mb-2">{member.qualification}</p>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">
                  {member.experience}+ years experience
                </div>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed line-clamp-3">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            Meet All Faculty Members
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
