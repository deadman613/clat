"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Users, FileCheck, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 30,
    suffix: "+",
    label: "Years of Educational Excellence",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Students Guided",
    color: "text-blue-600",
    bg: "bg-blue-50",
    format: "k",
  },
  {
    icon: GraduationCap,
    value: 1000,
    suffix: "+",
    label: "Top NLU Selections",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    format: "k",
  },
  {
    icon: FileCheck,
    value: 500,
    suffix: "+",
    label: "Mock Tests & Practice Sets",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

function CountUp({
  target,
  format,
  suffix,
  started,
}: {
  target: number;
  format?: string;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, started]);

  const display =
    format === "k"
      ? count >= 1000
        ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K`
        : count
      : count;

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container-custom">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Our Achievement
          </span>
          <h2 className="font-playfair text-3xl font-bold text-slate-900">
            Trusted by India's Best Law Aspirants
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group text-center p-6 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 card-hover bg-white"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>

                {/* Number */}
                <div className={`text-4xl font-bold ${stat.color} mb-2 font-playfair`}>
                  <CountUp
                    target={stat.value}
                    format={stat.format}
                    suffix={stat.suffix}
                    started={isInView}
                  />
                </div>

                {/* Label */}
                <p className="text-sm text-slate-600 font-medium leading-snug">{stat.label}</p>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${stat.color}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* NLU logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-4 font-medium">
            Our Students Have Secured Seats in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "NLU Delhi",
              "NALSAR",
              "NUJS Kolkata",
              "NLU Bangalore",
              "NLU Jodhpur",
              "GNLU",
              "RMLNLU",
              "NLU Bhopal",
            ].map((nlu) => (
              <span
                key={nlu}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200"
              >
                {nlu}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
