"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const dos = [
 "Use a soft, dry or slightly damp microfiber cloth for cleaning",
 "Wipe spills immediately before they seep into the surface",
 "Lubricate hinges and locks with silicone-based dry lubricant",
 "Apply touch-up lacquer to minor surface scratches promptly",
 "Use door stoppers to prevent slamming and edge chipping",
 "Maintain indoor humidity between 40–60% for dimensional stability",
 "Clean hardware separately with appropriate metal-specific cleaners",
 "Contact our service team for deep scratches or delamination",
];

const donts = [
 "Never use abrasive cleaners, steel wool, or scouring pads",
 "Do not apply WD-40 or petroleum-based oils to wood surfaces",
 "Avoid pressure washing or soaking wood in water",
 "Do not place wet or hot objects directly against the door surface",
 "Never force a stiff door — check and adjust the frame instead",
 "Avoid harsh chemical solvents like acetone, bleach, or turpentine",
 "Do not ignore persistent swelling — address humidity sources immediately",
 "Never sand or refinish without consulting our service team first",
];

export default function DosDonts() {
 return (
 <section className="bg-[#0a0a0a] py-24 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(193,160,119,0.05),transparent_60%)] pointer-events-none" />

 <div className="max-w-[1400px] mx-auto relative z-10">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="text-center mb-16 md:mb-24 max-w-2xl mx-auto"
 >
 <p className="text-[#c9a568] text-[10px] md:text-xs tracking-widest uppercase mb-6 font-medium">
 The Golden Rules
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
 Do&apos;s &{" "}
 <span className=" text-white/50">Don&apos;ts</span>
 </h2>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
 {/* Do's */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
 className="bg-[#0a0a0a] p-10 md:p-14"
 >
 <div className="flex items-center gap-3 mb-10">
 <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
 <Check size={16} className="text-emerald-400" />
 </div>
 <h3 className="text-white text-xl font-light tracking-tight">Do&apos;s</h3>
 </div>

 <div className="flex flex-col gap-5">
 {dos.map((item, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, x: -10 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.06 }}
 className="flex items-start gap-4"
 >
 <div className="w-5 h-5 flex-shrink-0 mt-0.5 border border-emerald-500/30 flex items-center justify-center">
 <Check size={11} className="text-emerald-400" />
 </div>
 <p className="text-white/60 text-sm leading-[1.8]">{item}</p>
 </motion.div>
 ))}
 </div>
 </motion.div>

 {/* Don'ts */}
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
 className="bg-[#0d0b0a] p-10 md:p-14"
 >
 <div className="flex items-center gap-3 mb-10">
 <div className="w-8 h-8 bg-red-500/20 border border-red-500/40 flex items-center justify-center">
 <X size={16} className="text-red-400" />
 </div>
 <h3 className="text-white text-xl font-light tracking-tight">Don&apos;ts</h3>
 </div>

 <div className="flex flex-col gap-5">
 {donts.map((item, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, x: 10 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.06 }}
 className="flex items-start gap-4"
 >
 <div className="w-5 h-5 flex-shrink-0 mt-0.5 border border-red-500/30 flex items-center justify-center">
 <X size={11} className="text-red-400" />
 </div>
 <p className="text-white/60 text-sm leading-[1.8]">{item}</p>
 </motion.div>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
