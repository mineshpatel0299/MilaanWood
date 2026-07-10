"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

export default function ProjectsHero() {
 return (
 <div className="w-full">
 <div className="relative h-screen w-full overflow-hidden bg-neutral-900">
 <Image
 src="/door_featured_3.png"
 alt="Milan Wood Completed Projects"
 fill
 className="object-cover object-center"
 priority
 />

 <div className="absolute inset-0 bg-black/40" />

 <Navbar />

 <motion.div
 initial="hidden"
 animate="visible"
 variants={{
 visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
 hidden: {},
 }}
 className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 text-white px-6 md:px-16 pb-16 md:pb-20"
 >
 <motion.p
 variants={{
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 }}
 className="text-[10px] md:text-xs tracking-widest uppercase text-[#c9a568] mb-5"
 >
 Our Portfolio
 </motion.p>

 <motion.h1
 variants={{
 hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
 visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } },
 }}
 className="text-5xl sm:text-6xl md:text-8xl font-light leading-[1.05] tracking-tight mb-6"
 >
 Spaces We&apos;ve{" "}
 <span className=" text-white/60">Defined</span>
 </motion.h1>

 <motion.div
 variants={{
 hidden: { scaleX: 0, opacity: 0 },
 visible: { scaleX: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
 }}
 style={{ originX: 0.5 }}
 className="h-px bg-[#c9a568]/50 mb-7 w-[40%] md:w-[20%]"
 />

 <motion.p
 variants={{
 hidden: { opacity: 0, y: 15 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 }}
 className="text-sm md:text-base text-neutral-400 max-w-lg leading-relaxed"
 >
 A curated showcase of completed projects across residences, hospitality, and commercial interiors — each one a testament to the craft.
 </motion.p>
 </motion.div>
 </div>
 </div>
 );
}
