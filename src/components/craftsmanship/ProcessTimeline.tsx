"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const processSteps = [
 {
 number: "01",
 title: "Timber Selection",
 description:
 "Our master selectors travel to origin forests to hand-pick timber with ideal grain, density, and moisture content — the non-negotiable foundation.",
 image: "/door_our_story.png",
 },
 {
 number: "02",
 title: "Controlled Seasoning",
 description:
 "Kiln-dried to exacting moisture levels, then rested in climate-controlled chambers. This ensures zero warping — ever — across decades of use.",
 image: "/door_philosophy.png",
 },
 {
 number: "03",
 title: "CNC Precision Cutting",
 description:
 "5-axis CNC machinery executes designs with sub-millimeter accuracy, producing geometric precision that hand tools alone cannot achieve.",
 image: "/sun_door_cnc.png",
 },
 {
 number: "04",
 title: "Master Joinery",
 description:
 "Skilled artisans hand-fit mortise-and-tenon joints, reinforced with structural adhesives formulated for tropical climates.",
 image: "/door_cat_4.png",
 },
 {
 number: "05",
 title: "Multi-Coat Finishing",
 description:
 "Seven coats of premium PU lacquer, hand-sanded between each application. The result is a surface of incomparable depth and resilience.",
 image: "/door_cat_5.png",
 },
 {
 number: "06",
 title: "Quality Assurance",
 description:
 "A 40-point inspection protocol — structural, dimensional, and aesthetic — before any door leaves our facility. Perfection is non-negotiable.",
 image: "/contemporary_door.png",
 },
];

export default function ProcessTimeline() {
 return (
 <section className="bg-white py-24 md:py-40 px-6 md:px-16 lg:px-24">
 <div className="max-w-[1400px] mx-auto">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="mb-20 md:mb-32"
 >
 <p className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-6">
 Our Six-Stage Process
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900 max-w-2xl">
 Crafted with{" "}
 <span className=" text-neutral-400">Intention</span>
 </h2>
 </motion.div>

 {/* Steps */}
 <div className="flex flex-col gap-0">
 {processSteps.map((step, index) => (
 <ProcessStep key={step.number} step={step} index={index} isEven={index % 2 === 1} />
 ))}
 </div>
 </div>
 </section>
 );
}

function ProcessStep({
 step,
 index,
 isEven,
}: {
 step: (typeof processSteps)[number];
 index: number;
 isEven: boolean;
}) {
 const ref = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({
 target: ref,
 offset: ["start end", "end start"],
 });
 const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

 return (
 <motion.div
 ref={ref}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
 className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} border-t border-neutral-100`}
 >
 {/* Image */}
 <div className="w-full lg:w-1/2 relative aspect-[16/10] overflow-hidden bg-neutral-100">
 <motion.div style={{ y: imgY }} className="absolute inset-0 h-[120%] w-full top-[-10%]">
 <Image
 src={step.image}
 alt={step.title}
 fill
 className="object-cover"
 />
 </motion.div>
 </div>

 {/* Text */}
 <div className={`w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center ${isEven ? "lg:pr-24" : "lg:pl-24"}`}>
 <span className="text-7xl md:text-8xl font-light text-neutral-100 mb-6 leading-none select-none">
 {step.number}
 </span>
 <h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 mb-5">
 {step.title}
 </h3>
 <div className="h-px w-10 bg-[#c9a568] mb-6" />
 <p className="text-neutral-500 leading-[1.9] text-[15px]">{step.description}</p>
 </div>
 </motion.div>
 );
}
