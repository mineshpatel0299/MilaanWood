"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const LEADERS = [
  {
    eyebrow: "Our Founder",
    initials: "J",
    name: "Jyoti",
    image: "/team/jyoti.jpg",
    title: "A Legacy of Precision and Design",
    quote: "Every detail matters—from material selection to final execution.",
    paragraphs: [
      "Founded by Jyoti, Milan Wood was envisioned as more than a manufacturing company—it was built to become a benchmark in premium wooden craftsmanship.",
      "Driven by a commitment to quality and an eye for design, Jyoti established a system where every detail matters—from material selection to final execution. Her leadership has shaped Milan Wood into a brand trusted by architects and interior professionals for delivering consistency, customization, and refined aesthetics.",
      "With a focus on innovation and craftsmanship, the brand continues to push boundaries, creating products that are not only functional but architecturally significant.",
    ],
  },
  {
    eyebrow: "Director",
    initials: "AD",
    name: "Abhinav Dhingra",
    image: "/team/abhinav-dhingra.jpg",
    title: "Strong Leadership",
    quote: "Detail matters, execution is flawless, every outcome aligns with modern luxury.",
    paragraphs: [
      "Abhinav Dhingra brings a strategic vision rooted in precision, quality, and long-term value creation. With a deep understanding of manufacturing excellence and market dynamics, his leadership has been instrumental in shaping Milan Wood into a refined, design-driven brand.",
      "Under his direction, the company has focused on elevating craftsmanship standards, optimizing production systems, and delivering consistent excellence across every project. His approach combines operational discipline with a forward-thinking mindset—ensuring that every product reflects both structural integrity and aesthetic sophistication.",
      "Committed to innovation and continuous improvement, Abhinav drives a culture where detail matters, execution is flawless, and every outcome aligns with the expectations of modern architecture and luxury living.",
    ],
  },
];

/** Circular portrait with graceful fallback to initials if the image hasn't been uploaded yet. */
function Avatar({ src, initials, active }: { src: string; initials: string; active: boolean }) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border shrink-0 transition-colors duration-500 ${
        active ? "border-[#c1a077]" : "border-white/15"
      }`}
    >
      {!errored ? (
        <Image
          src={src}
          alt={initials}
          fill
          sizes="64px"
          className={`object-cover transition-all duration-500 ${active ? "grayscale-0" : "grayscale opacity-60"}`}
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-white/5">
          <span className={`text-sm font-light ${active ? "text-[#c1a077]" : "text-white/30"}`}>{initials}</span>
        </div>
      )}
    </div>
  );
}

export default function Leadership() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = LEADERS[activeIdx];

  return (
    <section className="bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-24 md:py-40 relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#c1a077]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c1a077]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c1a077] text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium"
          >
            Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight"
          >
            The People Behind <br />
            <span className="italic text-white/50">The Vision</span>
          </motion.h2>
        </div>

        {/* Interactive Split */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 border-t border-white/10">
          {/* Left: Name selector */}
          <div className="w-full lg:w-2/5 lg:border-r border-white/10 lg:pr-12">
            {LEADERS.map((leader, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={leader.name}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className="relative w-full text-left py-8 md:py-10 border-b border-white/10 cursor-pointer group focus-visible:outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="leader-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c1a077]"
                    />
                  )}
                  <div className="flex items-center gap-5 md:gap-6 pl-6">
                    <Avatar src={leader.image} initials={leader.initials} active={isActive} />
                    <div>
                      <h3
                        className={`text-2xl md:text-4xl font-light tracking-tight transition-colors duration-500 ${
                          isActive ? "text-white" : "text-white/30 group-hover:text-white/60"
                        }`}
                      >
                        {leader.name}
                      </h3>
                      <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 ${isActive ? "text-[#c1a077]" : "text-white/20"}`}>
                        {leader.eyebrow}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Bio panel */}
          <div className="w-full lg:w-3/5 lg:pl-16 relative py-4 lg:py-0 min-h-[520px]">
            {/* Giant watermark initials */}
            <span
              key={`watermark-${active.initials}`}
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-8 md:-top-16 right-0 text-[8rem] md:text-[14rem] font-bold text-white/[0.03] leading-none tracking-tighter"
            >
              {active.initials}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="relative pt-10 lg:pt-0"
              >
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#c1a077]/40 mb-6" strokeWidth={1.5} />

                <p className="text-xl md:text-2xl text-white font-light leading-snug mb-3 italic">
                  &ldquo;{active.quote}&rdquo;
                </p>

                <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-10">
                  {active.title}
                </p>

                <div className="h-px w-16 bg-[#c1a077] mb-10" />

                <div className="flex flex-col gap-5">
                  {active.paragraphs.map((p, pIdx) => (
                    <motion.p
                      key={pIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 + pIdx * 0.08 }}
                      className="text-white/60 leading-relaxed font-light text-sm md:text-base"
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
