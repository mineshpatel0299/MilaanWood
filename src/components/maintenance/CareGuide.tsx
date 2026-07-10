"use client";

import { motion } from "framer-motion";
import { Droplets, Wind, Wrench, Sun, Bug, Brush, Thermometer, Shield } from "lucide-react";

const tips = [
 {
 icon: Brush,
 title: "Regular Dusting",
 description: "Wipe surfaces weekly with a soft, dry microfiber cloth. Dust accumulation is the primary cause of surface dullness over time.",
 frequency: "Weekly",
 },
 {
 icon: Droplets,
 title: "Damp Cleaning",
 description: "Use a slightly damp cloth with mild soap for marks. Always wipe dry immediately — never let water sit on the surface.",
 frequency: "As needed",
 },
 {
 icon: Wind,
 title: "Ventilation",
 description: "Ensure good airflow around door frames, particularly in humid climates. Stagnant humid air accelerates weathering.",
 frequency: "Daily",
 },
 {
 icon: Thermometer,
 title: "Temperature Balance",
 description: "Avoid prolonged exposure to direct HVAC vents or extreme temperature changes — rapid cycling causes micro-expansion.",
 frequency: "Ongoing",
 },
 {
 icon: Wrench,
 title: "Hardware Checks",
 description: "Lubricate hinges and locks with a dry lubricant (not WD-40) every six months. Check all screws for tightness annually.",
 frequency: "Bi-annually",
 },
 {
 icon: Sun,
 title: "UV Protection",
 description: "Install UV-filtering window film near glazed doors. Direct UV exposure can fade veneer and lacquer finishes over time.",
 frequency: "As needed",
 },
 {
 icon: Bug,
 title: "Termite Prevention",
 description: "All our doors are factory-treated, but maintain general pest control in the home environment as an additional safeguard.",
 frequency: "Annually",
 },
 {
 icon: Shield,
 title: "Touch-Up Finishing",
 description: "Minor surface scratches can be addressed with our touch-up kits. Deep scratches should be referred to our service team.",
 frequency: "As required",
 },
];

export default function CareGuide() {
 return (
 <section className="bg-white py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-neutral-100">
 <div className="max-w-[1400px] mx-auto">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="mb-16 md:mb-24"
 >
 <p className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-6">
 Care Essentials
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
 Eight Rules of{" "}
 <span className=" text-neutral-400">Care</span>
 </h2>
 </motion.div>

 {/* Tips Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100">
 {tips.map((tip, index) => {
 const Icon = tip.icon;
 return (
 <motion.div
 key={tip.title}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.8, ease: "easeOut", delay: (index % 4) * 0.08 }}
 className="bg-white p-8 md:p-10 group hover:bg-[#faf9f7] transition-colors duration-500"
 >
 <div className="flex items-start justify-between mb-6">
 <div className="w-11 h-11 border border-neutral-200 flex items-center justify-center group-hover:border-[#c9a568] transition-colors duration-500">
 <Icon size={18} className="text-neutral-600 group-hover:text-[#c9a568] transition-colors duration-500" strokeWidth={1.5} />
 </div>
 <span className="text-[9px] tracking-wider uppercase text-[#c9a568] border border-[#c9a568]/30 px-2 py-1">
 {tip.frequency}
 </span>
 </div>

 <h3 className="text-base md:text-lg font-light text-neutral-900 mb-3 tracking-tight">{tip.title}</h3>
 <div className="h-px w-6 bg-neutral-200 mb-4 group-hover:w-10 group-hover:bg-[#c9a568] transition-all duration-500" />
 <p className="text-sm text-neutral-500 leading-[1.8]">{tip.description}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
