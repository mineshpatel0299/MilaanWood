"use client";

import { motion } from "framer-motion";
import Navbar from "../Navbar";

export default function MaterialsHero() {
 return (
 <div className="w-full">
 <div className="relative bg-[#faf9f7] overflow-hidden">
 <Navbar />

 {/* Decorative lines */}
 <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden">
 <div className="absolute right-0 top-0 w-px h-full bg-neutral-200" />
 <div className="absolute right-[33%] top-0 w-px h-full bg-neutral-100" />
 <div className="absolute right-[66%] top-0 w-px h-full bg-neutral-100" />
 </div>

 <motion.div
 initial="hidden"
 animate="visible"
 variants={{
 visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
 hidden: {},
 }}
 className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pt-44 md:pt-56 pb-24 md:pb-40 relative z-10"
 >
 <motion.p
 variants={{
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 }}
 className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-8"
 >
 The Foundation of Excellence
 </motion.p>

 <motion.h1
 variants={{
 hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
 visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } },
 }}
 className="text-5xl sm:text-6xl md:text-8xl font-light leading-[1.05] tracking-tight text-neutral-900 mb-8 max-w-4xl"
 >
 Materials &{" "}
 <span className=" text-neutral-400">Finishes</span>
 </motion.h1>

 <motion.div
 variants={{
 hidden: { scaleX: 0, opacity: 0 },
 visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
 }}
 style={{ originX: 0 }}
 className="h-px bg-[#c9a568]/50 w-24 mb-8"
 />

 <motion.p
 variants={{
 hidden: { opacity: 0, y: 15 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 }}
 className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl"
 >
 Excellence begins with material. From hand-selected hardwoods to precision-engineered composite cores — understand what goes into every Milan Wood door.
 </motion.p>
 </motion.div>
 </div>
 </div>
 );
}
