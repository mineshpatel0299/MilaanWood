'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="bg-white px-2 md:px-6 pb-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="relative max-w-[1536px] w-full mx-auto bg-[#1a1a1a] text-white rounded-2xl px-8 md:px-24 py-16 md:py-24 flex flex-col items-center text-center overflow-hidden"
      >
        {/* Subtle background texture/gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-[3.5rem] font-light leading-[1.1] tracking-tight mb-6"
          >
            Elevate your space with <span className="italic text-neutral-400">timeless woodwork.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-base md:text-lg text-neutral-400 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Partner with Milan Wood to deliver functional and visually distinctive door systems. Every door we create is a statement of detail, durability, and refined aesthetics.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <button className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-neutral-200 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] group">
              Partner With Us
              <div className="bg-black text-white rounded-full p-2 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
