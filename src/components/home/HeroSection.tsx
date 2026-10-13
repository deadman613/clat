"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section-padding gradient-hero overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-inter)" }}>
              India's Most Trusted CLAT Platform
            </p>

            <h1 className="heading-display text-4xl sm:text-5xl lg:text-[3.25rem] mb-5"
              style={{ color: "#fff" }}>
              Rise Above.{" "}
              <span style={{ color: "var(--color-gold-light)" }}>Lead</span>{" "}
              with Law.
            </h1>

            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "38rem" }}>
              Expert faculty, 1,000+ mock tests, daily current affairs — everything you need to crack CLAT and step into India's top NLUs.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/courses" className="btn btn-primary">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/mock-tests" className="btn btn-outline-white">
                <Play className="w-4 h-4" /> Free Mock Test
              </Link>
            </div>
          </motion.div>

          {/* Right — 4:5 photo with gold border */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80"
              style={{
                aspectRatio: "4/5",
                border: "2px solid var(--color-gold)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
              }}>
              <Image
                src="/images/hero-student.jpg"
                alt="LexAscent student studying law"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 288px, 320px"
                onError={() => {}} // handled by Next.js fallback
              />
              {/* fallback gradient if image missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                style={{ background: "linear-gradient(180deg, #7D2438 0%, #4A1220 100%)" }}>
                <span className="text-5xl font-bold font-serif mb-2" style={{ color: "var(--color-gold-light)" }}>6+</span>
                <p className="text-white text-sm font-semibold">Top 10 Ranks in CLAT 2024</p>
                <hr className="my-3 w-12 border-t border-white/20" />
                <p className="text-white/60 text-xs">50,000+ students trained since 1994</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
