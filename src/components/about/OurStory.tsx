"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const CHAPTERS = [
  {
    index: "01",
    tag: "The Beginning",
    heading: "Crafting Premium Spaces With Timeless Woodwork",
    lead: "Milan Wood is a trusted name in the world of premium wooden doors and interior solutions, delivering exceptional craftsmanship across residential and commercial projects.",
    body: "Every door we create is more than a product—it is a statement of detail, durability, and refined aesthetics. From CNC-engineered designs to fully customized door systems, we bring together advanced manufacturing and skilled craftsmanship to elevate modern spaces.",
    image: "/door_cat_3.png",
  },
  {
    index: "02",
    tag: "The Present",
    heading: "Setting New Benchmarks In Wood Design",
    lead: "With a growing portfolio of projects across India, Milan Wood partners with architects, interior designers, and discerning clients.",
    body: "Our growing presence reflects a strong foundation built on quality, precision, and consistency. We collaborate with architects, designers, and developers to bring distinctive concepts to life—every project reflects our commitment to durability, detailing, and timeless aesthetics.",
    image: "/mw_cd_217.png",
  },
];

function Chapter({ chapter, reverse }: { chapter: (typeof CHAPTERS)[number]; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-center relative`}
    >
      {/* Image with offset gold frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        className="w-full md:w-1/2 relative"
      >
        <div
          className={`absolute -z-10 border border-[#c1a077]/50 w-full h-full ${
            reverse ? "-bottom-4 -left-4 md:-bottom-6 md:-left-6" : "-bottom-4 -right-4 md:-bottom-6 md:-right-6"
          }`}
        />
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
          <motion.div style={{ y: imgY }} className="absolute inset-0 h-[120%] -top-[10%]">
            <Image src={chapter.image} alt={chapter.heading} fill className="object-cover" />
          </motion.div>
        </div>
        {/* Numeral badge */}
        <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-16 h-16 md:w-20 md:h-20 bg-neutral-50 border border-[#c1a077]/40 rounded-full flex items-center justify-center">
          <span className="text-lg md:text-xl font-light text-[#c1a077] tracking-tight">{chapter.index}</span>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        className="w-full md:w-1/2"
      >
        <span className="text-[11px] tracking-[0.35em] uppercase text-[#c1a077] font-medium mb-4 block">
          {chapter.tag}
        </span>
        <h3 className="text-2xl md:text-3xl text-neutral-900 font-light tracking-tight leading-tight mb-6">
          {chapter.heading}
        </h3>
        <p className="text-lg md:text-xl text-neutral-800 font-light leading-relaxed mb-5">
          {chapter.lead}
        </p>
        <p className="text-neutral-500 leading-relaxed">{chapter.body}</p>
      </motion.div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-neutral-50 px-6 md:px-16 lg:px-24 py-24 md:py-40 relative overflow-hidden">
      {/* Ambient gold glow for luxury depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#c1a077]/[0.06] blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c1a077] text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-neutral-900 tracking-tight leading-[1.15]"
          >
            A Heritage of <span className="italic text-neutral-400">Mastery</span>
          </motion.h2>
        </div>

        {/* Chapters */}
        <div className="flex flex-col gap-28 md:gap-40">
          <Chapter chapter={CHAPTERS[0]} reverse={false} />

          {/* Pull quote divider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto px-4"
          >
            <Quote className="w-8 h-8 text-[#c1a077]/50 mb-4" strokeWidth={1.5} />
            <p className="text-xl md:text-2xl text-neutral-800 font-light italic leading-relaxed">
              A door is more than a boundary—it is the handshake of a home, the first impression of a sanctuary.
            </p>
          </motion.div>

          <Chapter chapter={CHAPTERS[1]} reverse={true} />
        </div>
      </div>
    </section>
  );
}
