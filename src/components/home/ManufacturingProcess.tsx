"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const steps = [
 {
 number: "01",
 title: "Wood Selection",
 description:
 "Hand-picked premium timber sourced for grain, strength, and character — the foundation of every door.",
 },
 {
 number: "02",
 title: "Seasoning",
 description:
 "Controlled drying to precise moisture levels, ensuring dimensional stability and long-lasting performance.",
 },
 {
 number: "03",
 title: "Precision Cutting",
 description:
 "CNC-engineered cuts with sub-millimeter accuracy, translating design intent into flawless geometry.",
 },
 {
 number: "04",
 title: "Design Crafting",
 description:
 "Where artistry meets engineering — intricate patterns, profiles, and joinery brought to life by skilled hands.",
 },
 {
 number: "05",
 title: "Finishing",
 description:
 "Multi-coat finishing process for a flawless surface — sanded, sealed, and polished to a luxurious touch.",
 },
 {
 number: "06",
 title: "Quality Check",
 description:
 "Rigorous multi-point inspection ensuring every door meets our uncompromising standards before delivery.",
 },
];

export default function ManufacturingProcess() {
 const containerRef = useRef<HTMLDivElement>(null);
 const trackRef = useRef<HTMLDivElement>(null);
 const [scrollRange, setScrollRange] = useState(1);

 const measure = useCallback(() => {
 if (trackRef.current) {
 const trackWidth = trackRef.current.scrollWidth;
 const viewWidth = window.innerWidth;
 setScrollRange(Math.max(trackWidth - viewWidth, 1));
 }
 }, []);

 useEffect(() => {
 measure();
 window.addEventListener("resize", measure);
 return () => window.removeEventListener("resize", measure);
 }, [measure]);

 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start start", "end end"],
 });

 const x = useTransform(scrollYProgress, [0, 0.85], [0, -scrollRange]);
 const progressWidth = useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"]);

 return (
 <section ref={containerRef} className="relative h-[250vh] bg-white">
 <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
 {/* Header */}
 <div className="px-8 md:px-16 lg:px-24 mb-14 md:mb-20">
 <motion.p
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="text-[10px] md:text-[11px] tracking-widest text-neutral-400 uppercase mb-6 md:mb-8"
 >
 Manufacturing Process
 </motion.p>

 <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
 <motion.h2
 initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
 viewport={{ once: true }}
 transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight"
 >
 How We Create{" "}
 <span className=" text-neutral-400">Excellence</span>
 </motion.h2>

 <StepCounter scrollYProgress={scrollYProgress} total={steps.length} />
 </div>
 </div>

 {/* Progress line */}
 <div className="px-8 md:px-16 lg:px-24 mb-10 md:mb-14">
 <div className="relative h-px w-full bg-neutral-200">
 <motion.div
 style={{ width: progressWidth }}
 className="absolute top-0 left-0 h-full bg-neutral-900"
 />
 </div>
 </div>

 {/* Horizontal scroll cards */}
 <motion.div
 ref={trackRef}
 style={{ x }}
 className="flex gap-10 md:gap-14 pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-16 lg:pr-24"
 >
 {steps.map((step, index) => (
 <StepCard
 key={step.number}
 step={step}
 index={index}
 total={steps.length}
 scrollYProgress={scrollYProgress}
 />
 ))}
 </motion.div>
 </div>
 </section>
 );
}

function StepCounter({
 scrollYProgress,
 total,
}: {
 scrollYProgress: MotionValue<number>;
 total: number;
}) {
 const currentStep = useTransform(scrollYProgress, [0, 0.85], [1, total]);
 const displayStep = useTransform(currentStep, (v) =>
 String(Math.min(Math.ceil(v), total)).padStart(2, "0")
 );

 return (
 <div className="flex items-baseline gap-2 tabular-nums">
 <motion.span className="text-3xl md:text-4xl font-light text-neutral-900">
 {displayStep}
 </motion.span>
 <span className="text-sm text-neutral-300 font-light">
 / {String(total).padStart(2, "0")}
 </span>
 </div>
 );
}

function StepCard({
 step,
 index,
 total,
 scrollYProgress,
}: {
 step: (typeof steps)[number];
 index: number;
 total: number;
 scrollYProgress: MotionValue<number>;
}) {
 const segmentSize = 0.85 / total;
 const start = index * segmentSize;
 const end = start + segmentSize * 0.6;

 const cardOpacity = useTransform(
 scrollYProgress,
 index === 0 ? [0, 0] : [start, end],
 index === 0 ? [1, 1] : [0.2, 1]
 );
 const cardY = useTransform(
 scrollYProgress,
 index === 0 ? [0, 0] : [start, end],
 index === 0 ? [0, 0] : [25, 0]
 );

 return (
 <motion.div
 style={{ opacity: cardOpacity, y: cardY }}
 className="flex-shrink-0 w-[260px] md:w-[300px] group cursor-default"
 >
 <span className="block text-6xl md:text-7xl font-light text-neutral-200 mb-5 transition-colors duration-500 group-hover:text-neutral-900">
 {step.number}
 </span>

 <h3 className="text-base md:text-lg font-normal tracking-tight text-neutral-900 mb-3">
 {step.title}
 </h3>

 <div className="w-8 h-px bg-neutral-300 mb-4 transition-all duration-500 group-hover:w-12 group-hover:bg-neutral-900" />

 <p className="text-sm text-neutral-500 leading-[1.8]">
 {step.description}
 </p>
 </motion.div>
 );
}
