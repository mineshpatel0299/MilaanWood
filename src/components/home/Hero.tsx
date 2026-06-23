"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar';

const CAROUSEL_IMAGES = [
  "/hero-bg.png",
  "/hero-bg-2.png",
  "/hero-bg-3.png"
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000); // slightly slower to enjoy the animation
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => setCurrentIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const goToPrev = () => setCurrentIdx((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const goToSlide = (idx: number) => setCurrentIdx(idx);

  return (
    <div className="bg-white p-2 md:p-5 w-full min-h-screen">
      <div className="relative h-[calc(100vh-1rem)] md:h-[calc(100vh-2.5rem)] w-full overflow-hidden bg-neutral-900 font-sans rounded-[1.5rem] md:rounded-[2rem]">

        {/* Background Images with AnimatePresence */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={CAROUSEL_IMAGES[currentIdx]}
              alt={`Modern wooden interior ${currentIdx + 1}`}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>

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
          className="absolute inset-x-6 md:inset-y-0 md:left-0 bottom-12 md:bottom-auto flex flex-col justify-end md:justify-center md:px-16 z-10 text-white max-w-3xl md:ml-8 md:pt-24"
        >

          {/* Label */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4 md:mb-6"
          >
            Handcrafted wooden furniture
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
            }}
            className="text-5xl md:text-[5rem] font-medium leading-[1.1] mb-8 md:mb-12 tracking-tight"
          >
            Raw Wood.<br />
            <span className="font-light text-neutral-100">Human Touch.</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
            }}
            style={{ originX: 0 }}
            className="h-px bg-white/30 mb-8 w-full md:w-[80%]"
          />

          {/* Stats */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex flex-row items-start gap-8 md:gap-16 mb-10 md:mb-12"
          >
            <div>
              <div className="text-xl md:text-2xl font-bold mb-1 md:mb-2">133.</div>
              <p className="text-xs md:text-sm text-neutral-300 max-w-[140px] md:max-w-[220px] leading-relaxed">
                Hours to craft a single Wood. From raw wood to final polish.
              </p>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-neutral-300">53</div>
              <p className="text-xs md:text-sm text-neutral-300 max-w-[140px] md:max-w-[220px] leading-relaxed">
                Unique handmade Wood designs in our collection.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <button className="flex items-center gap-4 bg-[#8b3d30] hover:bg-[#7a3428] text-white px-6 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
              Explore
              <div className="bg-white text-neutral-900 rounded-full p-1.5 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={14} strokeWidth={3} />
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Navigation Arrows (Hidden on mobile for cleaner look) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-10"
        >
          <button
            onClick={goToPrev}
            className="w-10 h-10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-black/40 transition-all duration-300 hover:scale-110 cursor-pointer rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-10"
        >
          <button
            onClick={goToNext}
            className="w-10 h-10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-black/40 transition-all duration-300 hover:scale-110 cursor-pointer rounded-full"
          >
            <ChevronRight size={20} />
          </button>
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
            href="#"
            className="flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors tracking-wide group relative z-10"
          >
            Explore Woods
            <ArrowUpRight size={16} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Pagination dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 md:gap-3"
        >
          {CAROUSEL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full shadow-sm transition-all duration-500 cursor-pointer ${idx === currentIdx
                  ? 'bg-white w-5 md:w-6 h-2 md:h-2.5'
                  : 'bg-white/40 hover:bg-white/60 w-2 md:w-2.5 h-2 md:h-2.5'
                }`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
