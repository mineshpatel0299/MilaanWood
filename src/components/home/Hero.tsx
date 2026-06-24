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
          src="/kk.mp4"
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
          className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 text-white px-6 md:px-16 pb-2 md:pb-3"
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
            Crafted to Welcome. <span className="font-light text-neutral-100">Built to Last.</span>
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

        </motion.div>




      </div>
    </div>
  );
}
