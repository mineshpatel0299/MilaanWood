'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function AnimatedCounter({ end, duration = 2500, suffix = "", prefix = "", inView }: { end: number, duration?: number, suffix?: string, prefix?: string, inView: boolean }) {
 const [count, setCount] = useState(0);
 const prefersReducedMotion = useRef(
 typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
 );

 useEffect(() => {
 if (!inView) return;
 if (prefersReducedMotion.current) {
 setCount(end);
 return;
 }

 let startTime: number | null = null;
 let animationFrame: number;

 const animate = (timestamp: number) => {
 if (!startTime) startTime = timestamp;
 const progress = timestamp - startTime;
 const percentage = Math.min(progress / duration, 1);

 const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
 setCount(Math.floor(end * easeOutQuart));

 if (percentage < 1) {
 animationFrame = requestAnimationFrame(animate);
 }
 };

 animationFrame = requestAnimationFrame(animate);

 return () => cancelAnimationFrame(animationFrame);
 }, [end, duration, inView]);

 return <span className="tabular-nums">{prefix}{count.toLocaleString()}{suffix}</span>;
}

const containerVariants = {
 hidden: {},
 visible: {
 transition: { staggerChildren: 0.15, delayChildren: 0.3 }
 }
};

const itemVariants = {
 hidden: { opacity: 0, y: 30 },
 visible: { 
 opacity: 1, 
 y: 0,
 transition: { duration: 0.8, ease: "easeOut" as const }
 }
};

export default function Stats() {
 const [hasInView, setHasInView] = useState(false);

 return (
 <section className="bg-black py-24 md:py-32 lg:py-40 px-4 md:px-8 font-sans border-y border-white/10 overflow-hidden">
 <motion.div 
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 onViewportEnter={() => setHasInView(true)}
 className="max-w-[1400px] mx-auto flex flex-col items-center text-center"
 >
 <motion.h2 
 variants={{
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
 }}
 className="text-sm md:text-xl tracking-wide md:tracking-wider uppercase font-medium text-white mb-6 md:mb-8"
 >
 Crafting Premium Spaces with Timeless Woodwork
 </motion.h2>
 
 <motion.p 
 variants={{
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
 }}
 className="max-w-4xl text-white/60 leading-relaxed text-sm md:text-base mb-16 md:mb-32"
 >
 With a growing portfolio of projects across India, Milan Wood partners with architects, interior designers, and discerning clients to deliver solutions that are both functional and visually distinctive.
 </motion.p>

 {/* Stats Container - Desktop (Pyramid layout) */}
 <motion.div variants={containerVariants} className="hidden md:flex w-full justify-between items-center relative h-[280px]">

 {/* Column 1 */}
 <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-end h-full pb-4">
 <h4 className="text-4xl font-light text-white mb-4 tracking-tight">
 <AnimatedCounter inView={hasInView} end={500} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[120px] leading-relaxed">
 Door Systems Delivered
 </p>
 </motion.div>

 <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1 } } }} style={{ originY: 1 }} className="w-px bg-white/20 h-24 self-end mb-12" />

 {/* Column 2 */}
 <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center h-full">
 <h4 className="text-4xl font-light text-white mb-4 tracking-tight">
 <AnimatedCounter inView={hasInView} end={15} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[120px] leading-relaxed">
 Years of Excellence
 </p>
 </motion.div>

 <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1 } } }} style={{ originY: 0.5 }} className="w-px bg-white/20 h-40 self-center" />

 {/* Column 3 (Center - Double Stat) */}
 <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-between h-full">
 <div className="flex flex-col items-center">
 <h4 className="text-5xl font-light text-white mb-4 tracking-tight">
 <AnimatedCounter inView={hasInView} end={100} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[120px] leading-relaxed">
 Unique Door Designs
 </p>
 </div>
 <div className="flex flex-col items-center pb-4">
 <h4 className="text-4xl font-light text-white mb-4 tracking-tight">
 <AnimatedCounter inView={hasInView} end={25} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[120px] leading-relaxed">
 Cities Served Across India
 </p>
 </div>
 </motion.div>

 <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1 } } }} style={{ originY: 0.5 }} className="w-px bg-white/20 h-40 self-center" />

 {/* Column 4 */}
 <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center h-full">
 <h4 className="text-4xl font-light text-white mb-4 tracking-tight">
 <AnimatedCounter inView={hasInView} end={50} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[120px] leading-relaxed">
 Partner Architects
 </p>
 </motion.div>

 <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1 } } }} style={{ originY: 1 }} className="w-px bg-white/20 h-24 self-end mb-12" />

 {/* Column 5 */}
 <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-end h-full pb-4">
 <h4 className="text-4xl font-light text-white mb-4 tracking-tight">
 <AnimatedCounter inView={hasInView} end={30} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[120px] leading-relaxed">
 Premium Wood Species
 </p>
 </motion.div>

 </motion.div>

 {/* Stats Container - Mobile (Grid) */}
 <motion.div variants={containerVariants} className="grid md:hidden grid-cols-2 gap-y-12 gap-x-2 w-full">
 <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
 <h4 className="text-[2rem] font-light text-white mb-2">
 <AnimatedCounter inView={hasInView} end={500} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[110px]">Door Systems Delivered</p>
 </motion.div>
 
 <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
 <h4 className="text-[2rem] font-light text-white mb-2">
 <AnimatedCounter inView={hasInView} end={15} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[110px]">Years of Excellence</p>
 </motion.div>
 
 <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
 <h4 className="text-[2.5rem] font-light text-white mb-2">
 <AnimatedCounter inView={hasInView} end={100} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[110px]">Unique Door Designs</p>
 </motion.div>
 
 <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
 <h4 className="text-[2.5rem] font-light text-white mb-2">
 <AnimatedCounter inView={hasInView} end={25} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[110px]">Cities Served</p>
 </motion.div>

 <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
 <h4 className="text-[2rem] font-light text-white mb-2">
 <AnimatedCounter inView={hasInView} end={50} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[110px]">Partner Architects</p>
 </motion.div>
 
 <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
 <h4 className="text-[2rem] font-light text-white mb-2">
 <AnimatedCounter inView={hasInView} end={30} suffix="+" />
 </h4>
 <p className="text-[11px] uppercase tracking-wide text-white/50 max-w-[110px]">Premium Wood Species</p>
 </motion.div>
 </motion.div>

 </motion.div>
 </section>
 );
}
