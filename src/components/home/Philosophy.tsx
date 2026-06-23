'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="bg-[#111] text-white py-24 md:py-32 px-4 md:px-16 font-sans overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

        {/* Image — Parallax + Mask reveal */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="md:w-1/2 relative h-[450px] md:h-[800px] w-full overflow-hidden rounded-[2rem] rounded-t-[3rem] md:rounded-t-[3rem] md:rounded-b-lg"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="/philosophy_main.png"
              alt="Woodworker hands"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          {/* subtle shimmer overlay on hover */}
          <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-700 pointer-events-none" />
        </motion.div>

        {/* Text block — staggered fade up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
          }}
          className="md:w-1/2 flex flex-col justify-center px-2 md:px-0"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-[10px] md:text-xs tracking-[0.4em] text-neutral-500 uppercase mb-6 md:mb-8"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
            }}
            className="text-4xl md:text-7xl font-light leading-[1.1] mb-8 md:mb-12 tracking-tight"
          >
            Perfection in <br />
            <span className="italic font-serif text-neutral-400">imperfection.</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-lg mb-10 md:mb-12"
          >
            We embrace the wabi-sabi philosophy, finding true beauty in the natural flaws, cracks, and unique grain patterns of raw wood. Each piece is not just furniture, but a living testament to time, nature, and human touch.
          </motion.p>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="self-start border-b border-white/30 pb-2 hover:text-neutral-400 hover:border-neutral-400 transition-all duration-300 uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold hover:pb-3"
          >
            Read our story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
