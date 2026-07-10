"use client";

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

export default function Hero() {

 return (
 <div className="bg-white w-full min-h-screen">
 <div className="relative h-screen w-full overflow-hidden bg-neutral-900 font-sans">

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
 <div className="absolute inset-0 bg-black/40" />

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
 className="text-[10px] md:text-xs tracking-widest uppercase text-neutral-400 mb-4 md:mb-6"
 >
 Crafting Premium Spaces with Timeless Woodwork
 </motion.p>

 {/* Heading */}
 <motion.h1
 variants={{
 hidden: { opacity: 0, y: 30 },
 visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
 }}
 className="text-4xl sm:text-5xl md:text-[5rem] font-medium leading-[1.1] mb-5 md:mb-7 tracking-tight"
 >
 Crafted to Welcome. <span className="font-light text-neutral-100">Built to Last.</span>
 </motion.h1>

 {/* Explore Collections Button */}
 <motion.div
 variants={{
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
 }}
 className="mb-8 md:mb-12"
 >
 <Link
 href="/collections"
 className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 text-sm font-medium hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
 >
 Explore Collections
 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
 </Link>
 </motion.div>

 </motion.div>






 </div>
 </div>
 );
}
