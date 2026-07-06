"use client";

import { motion } from "framer-motion";
import Navbar from "../Navbar";

export default function ProductHero() {
  return (
    <div className="bg-white w-full">
      <div className="relative h-screen w-full overflow-hidden bg-neutral-900 font-sans">
        <video
          src="/kk.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <Navbar />

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
            Our Collection
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } },
            }}
            className="text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.1] mb-6 tracking-tight"
          >
            Doors that Define <span className="font-light text-neutral-200">Spaces</span>
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
            Each door is meticulously crafted from the finest wood, blending timeless elegance with modern engineering.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
