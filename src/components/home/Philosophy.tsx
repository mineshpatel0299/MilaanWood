'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftImgY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const rightImgY = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);
  const leftImgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const rightImgScale = useTransform(scrollYProgress, [0.2, 0.7], [1.1, 1]);

  return (
    <section ref={sectionRef} className="bg-white text-black py-28 md:py-40 font-sans overflow-hidden relative">
      {/* Left Image — parallax + clip reveal */}
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
        className="hidden md:block absolute top-12 left-0 w-[13%] h-[220px] overflow-hidden"
      >
        <motion.div style={{ y: leftImgY, scale: leftImgScale }} className="absolute inset-0">
          <Image
            src="/sun_door_cnc.png"
            alt="Premium woodwork details"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Right Image — parallax + clip reveal */}
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
        className="hidden md:block absolute bottom-28 right-0 w-[15%] h-[260px] overflow-hidden"
      >
        <motion.div style={{ y: rightImgY, scale: rightImgScale }} className="absolute inset-0">
          <Image
            src="/door_philosophy.png"
            alt="Crafted interior space"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Center content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.15 } },
        }}
        className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Label — letter-by-letter fade */}
        <motion.p
          variants={{
            hidden: { opacity: 0, letterSpacing: "0.8em" },
            visible: {
              opacity: 1,
              letterSpacing: "0.5em",
              transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
            },
          }}
          className="text-[10px] md:text-[11px] tracking-[0.5em] text-neutral-400 uppercase mb-10 md:mb-14"
        >
          Our Philosophy
        </motion.p>

        {/* Heading — smooth rise with blur */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
            },
          }}
          className="text-2xl sm:text-3xl md:text-[2.5rem] font-light leading-[1.25] tracking-tight mb-12 md:mb-16"
        >
          Precision meets crafting <span className="italic text-neutral-400">interiors</span><br />
          for living &amp; business. We bring dreams to reality.
        </motion.h2>

        {/* Divider — expand from center */}
        <motion.div
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
            },
          }}
          style={{ originX: 0.5 }}
          className="w-16 h-px bg-neutral-300 mb-12 md:mb-16"
        />

        {/* Body text — fade up with blur */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
            },
          }}
          className="text-sm md:text-base text-neutral-700 leading-[1.9] md:leading-[2.1] tracking-wide max-w-2xl"
        >
          Our unique designs and architectural approach impresses our clients — after all, this is our craft. The uniqueness of every project is created from scratch, combining ideas and solutions that meet the highest standards. We believe that behind every great interior lies a story, a mood, and most importantly — the person.
        </motion.p>
      </motion.div>

      {/* Mobile Images */}
      <div className="flex md:hidden gap-4 mt-14 px-4">
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-1/2 h-[200px] overflow-hidden"
        >
          <Image src="/sun_door_cnc.png" alt="Premium woodwork details" fill className="object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          className="relative w-1/2 h-[200px] overflow-hidden"
        >
          <Image src="/door_philosophy.png" alt="Crafted interior space" fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
