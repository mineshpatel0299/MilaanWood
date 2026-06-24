"use client";

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

export default function Hero() {

  return (
    <div className="bg-white p-2 md:p-5 w-full min-h-screen">
      <div className="relative h-[calc(100vh-1rem)] md:h-[calc(100vh-2.5rem)] w-full overflow-hidden bg-neutral-900 font-sans rounded-[1.5rem] md:rounded-[2rem]">

        {/* Background Video */}
        <video
          src="/door.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 md:bg-gradient-to-r md:from-black/80 md:via-black/30 md:to-transparent" />

        <Navbar />

        {/* Main Content — staggered entrance */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            hidden: {}
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 text-white px-6 md:px-16"
        >

          {/* Label */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4 md:mb-6"
          >
            Crafting Premium Spaces with Timeless Woodwork
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
            }}
            className="text-4xl sm:text-5xl md:text-[5rem] font-medium leading-[1.1] mb-8 md:mb-12 tracking-tight"
          >
            Crafted to Welcome.<br />
            <span className="font-light text-neutral-100">Built to Last.</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
            }}
            style={{ originX: 0.5 }}
            className="h-px bg-white/30 mb-8 md:mb-12 w-[60%] md:w-[40%]"
          />

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-4 bg-[#8b3d30] hover:bg-[#7a3428] text-white px-6 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 group cursor-pointer"
            >
              Explore Doors
              <div className="bg-white text-neutral-900 rounded-full p-1.5 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={14} strokeWidth={3} />
              </div>
            </Link>
          </motion.div>
        </motion.div>



        {/* Bottom Right CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="hidden md:block absolute bottom-0 right-0 z-10 bg-white rounded-tl-[2rem] px-8 py-6"
        >
          {/* Inverted curve for bottom-left of CTA */}
          <svg className="absolute bottom-0 -left-[2rem] w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
            <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
          </svg>

          {/* Inverted curve for top-right of CTA */}
          <svg className="absolute -top-[2rem] right-0 w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
            <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
          </svg>

          <Link
            href="/products"
            className="flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded group relative z-10"
          >
            Explore Collection
            <ArrowUpRight size={16} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>


      </div>
    </div>
  );
}
