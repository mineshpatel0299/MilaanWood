'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutUs() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="bg-white text-black py-16 md:py-32 px-4 md:px-16 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left: Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="md:w-5/12 flex flex-col justify-center order-2 md:order-1 px-2 md:px-0"
        >
          <div className="mb-8 md:mb-12">
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-4"
            >
              Our Story
            </motion.h2>
            <motion.h3 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
              }}
              className="text-4xl md:text-6xl font-light leading-[1.15] text-neutral-900 tracking-tight"
            >
              Rooted in <span className="italic font-serif text-neutral-400">tradition.</span>
            </motion.h3>
          </div>
          
          <div className="relative pl-6 md:pl-8">
            {/* Accent Line */}
            <motion.div 
              variants={{
                hidden: { scaleY: 0 },
                visible: { scaleY: 1, transition: { duration: 1.5, ease: "easeInOut" } }
              }}
              style={{ originY: 0 }}
              className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" 
            />
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6 md:mb-8"
            >
              Founded by a collective of passionate artisans, Milan Wood is a dedication to the slow craft of furniture making. We source our timber responsibly, letting the natural imperfections dictate the final form of every piece.
            </motion.p>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-base md:text-lg text-neutral-600 leading-relaxed mb-10 md:mb-12"
            >
              Our workshop in the quiet hills is where raw, untamed nature meets precise human engineering—resulting in functional art designed to outlast generations.
            </motion.p>
          </div>
        </motion.div>

        {/* Right: Cutout Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="md:w-7/12 relative h-[450px] md:h-[700px] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-neutral-100 group cursor-pointer order-1 md:order-2"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
            <Image
              src="/hero-bg-2.png" // Reusing a beautiful image
              alt="Artisan workshop"
              fill
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]"
            />
          </motion.div>

          {/* Top-Left Cutout (Year) */}
          <div className="absolute top-0 left-0 bg-white px-5 py-3 md:px-8 md:py-5 rounded-br-[1.5rem] md:rounded-br-[2rem] z-10">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-neutral-900">
              EST. 2018
            </span>
            {/* Inverted curves */}
            <svg className="absolute top-0 -right-[1.5rem] md:-right-[2rem] w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
            </svg>
            <svg className="absolute left-0 -bottom-[1.5rem] md:-bottom-[2rem] w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
            </svg>
          </div>

          {/* Bottom-Right Cutout (Action) */}
          <div className="absolute bottom-0 right-0 bg-white pl-5 pt-4 pr-4 pb-4 md:pl-8 md:pt-6 md:pr-6 md:pb-6 rounded-tl-[1.5rem] md:rounded-tl-[2rem] z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
            <span className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
              Meet the Makers <ArrowUpRight size={14} className="md:w-4 md:h-4 text-neutral-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            {/* Inverted curves */}
            <svg className="absolute bottom-0 -left-[1.5rem] md:-left-[2rem] w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
            </svg>
            <svg className="absolute -top-[1.5rem] md:-top-[2rem] right-0 w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
            </svg>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
