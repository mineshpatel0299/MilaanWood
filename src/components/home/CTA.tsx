'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="bg-[#0d0d0d] text-white border-b border-white/10">
      <div className="max-w-[1536px] mx-auto px-6 md:px-16 py-16 md:py-20 flex flex-col md:flex-row md:items-center gap-12 md:gap-16">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:pr-16 md:border-r border-white/10 flex-shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/de4pazo51/image/upload/v1782107736/WhatsApp_Image_2026-06-13_at_18.41.25-removebg-preview_1_e9eayw.png"
            alt="Milan Wood"
            width={150}
            height={50}
            className="h-11 md:h-12 w-auto object-contain brightness-0 invert mb-5"
            unoptimized
          />
          <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#c9a568] leading-relaxed">
            Crafted Entrances.<br />Defining Spaces.
          </p>
        </motion.div>

        {/* Newsletter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-xl"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#c9a568] mb-4 block">
              Let&apos;s Keep In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight mb-4">
              Request our newsletter
            </h2>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              Be the first to discover new collections, projects and design insights.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
            className="flex-shrink-0"
          >
            <label htmlFor="cta-email" className="sr-only">Email address</label>
            <div className="flex items-center border border-[#c9a568]/60 hover:border-[#c9a568] transition-colors duration-300 focus-within:border-[#c9a568]">
              <input
                id="cta-email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                required
                className="bg-transparent outline-none w-32 md:w-44 pl-5 pr-2 py-4 text-sm text-white placeholder:text-neutral-500"
              />
              <button
                type="submit"
                className="flex items-center gap-3 border-l border-[#c9a568]/60 px-6 py-4 text-[11px] font-medium tracking-[0.2em] uppercase text-[#c9a568] hover:bg-[#c9a568] hover:text-black transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a568] whitespace-nowrap"
              >
                Request Newsletter
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
