"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

export default function AboutHero() {
  return (
    <div className="bg-neutral-50 p-2 md:p-5 w-full">
      <div className="relative h-[calc(100vh-1rem)] md:h-[calc(100vh-2.5rem)] w-full overflow-hidden bg-neutral-900 font-sans rounded-[1.5rem] md:rounded-[2rem]">
        <Image
          src="/door_featured_3.png" // Dark, moody image for the hero
          alt="Milan Wood Craftsmanship"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <Navbar variant="center" />

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            hidden: {},
          }}
          className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 text-white px-6 md:px-16 pb-12 md:pb-16"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4"
          >
            The Milan Wood Legacy
          </motion.p>
          
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } },
            }}
            className="text-4xl sm:text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.1] mb-6"
          >
            Crafting Entrances.<br />
            <span className="italic text-white/70">Defining Spaces.</span>
          </motion.h1>

          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
            }}
            style={{ originX: 0.5 }}
            className="h-px bg-white/30 mb-6 w-[50%] md:w-[30%]"
          />

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="text-sm md:text-base text-neutral-400 max-w-xl"
          >
            For over three decades, we have stood at the intersection of traditional woodworking and modern architectural design.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
