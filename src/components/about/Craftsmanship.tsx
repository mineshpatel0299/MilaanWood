"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Craftsmanship() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-24 md:py-40 relative overflow-hidden">
      
      {/* Ambient lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c1a077]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-32 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c1a077] text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium"
          >
            The Process
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight"
          >
            Where Raw Material <br />
            <span className="italic text-white/50">Meets Precision</span>
          </motion.h2>
        </div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Large Parallax Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[130%]">
                <Image 
                  src="/door_cat_4.png" // Representing craftsmanship
                  alt="Precision Craftsmanship"
                  fill
                  className="object-cover brightness-90 contrast-125"
                />
              </motion.div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl text-white font-light mb-4">01. Selection</h3>
              <div className="h-px w-full bg-white/10 mb-6" />
              <p className="text-white/60 leading-relaxed font-light">
                We source only the finest, sustainably harvested timber. From the rich, dark grains of American Walnut to the unmatched durability of Burma Teak, the foundation of our luxury lies in the raw material itself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-2xl text-white font-light mb-4">02. Precision Engineering</h3>
              <div className="h-px w-full bg-white/10 mb-6" />
              <p className="text-white/60 leading-relaxed font-light">
                Advanced CNC machining allows us to carve intricate geometric patterns, seamless parametric waves, and complex structural joints with millimeter accuracy. Technology ensures our doors are structurally flawless.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl text-white font-light mb-4">03. The Human Touch</h3>
              <div className="h-px w-full bg-white/10 mb-6" />
              <p className="text-white/60 leading-relaxed font-light">
                Machines cannot replicate soul. Every door is hand-sanded, stained, and polished by master artisans. The final product is a perfect synthesis of technological precision and human artistry.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
