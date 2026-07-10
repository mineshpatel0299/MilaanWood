"use client";

import { motion } from "framer-motion";

const layers = [
 { label: "Premium Veneer / Laminate", color: "bg-[#c9a568]", thickness: "h-6", description: "Outer aesthetic layer — veneer, laminate, or lacquer finish" },
 { label: "Decorative Face Layer", color: "bg-[#e8c878]", thickness: "h-4", description: "Balancing sheet that prevents warping" },
 { label: "Engineered Composite Core", color: "bg-neutral-700", thickness: "h-16", description: "High-density core — LVL, solid wood block, or foam-core" },
 { label: "Moisture Barrier", color: "bg-neutral-500", thickness: "h-3", description: "Waterproof membrane for tropical climate resistance" },
 { label: "Structural Back Layer", color: "bg-[#e8c878]", thickness: "h-4", description: "Mirror layer for dimensional stability" },
 { label: "Back Veneer / Finish", color: "bg-[#c9a568]", thickness: "h-6", description: "Rear face finish — matching or plain" },
];

const coreTypes = [
 {
 name: "Solid Wood Core",
 tag: "Premium",
 description: "Blocks of kiln-dried solid timber joined edge-to-edge. Maximum density, acoustic performance and longevity. Used in all Signature Series doors.",
 properties: ["Exceptional rigidity", "Superior acoustics", "Maximum density", "Heirloom durability"],
 },
 {
 name: "Engineered LVL Core",
 tag: "Recommended",
 description: "Laminated Veneer Lumber — thin wood veneers bonded under pressure. Dimensionally stable across all climates, ideal for wide doors.",
 properties: ["Climate stable", "No warping", "Wide format capable", "Cost-effective"],
 },
 {
 name: "Composite Block Core",
 tag: "Standard",
 description: "Recycled wood fibre compressed into high-density boards. Excellent uniformity and termite resistance at accessible price points.",
 properties: ["Termite resistant", "Uniform density", "Budget-friendly", "Eco-conscious"],
 },
];

export default function CoreConstruction() {
 return (
 <section className="bg-[#0a0a0a] py-24 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(193,160,119,0.06),transparent_55%)] pointer-events-none" />

 <div className="max-w-[1400px] mx-auto relative z-10">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="mb-20 md:mb-32"
 >
 <p className="text-[#c9a568] text-[10px] md:text-xs tracking-widest uppercase mb-6 font-medium">
 What&apos;s Inside
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
 Core{" "}
 <span className=" text-white/50">Construction</span>
 </h2>
 </motion.div>

 <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
 {/* Exploded View */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
 className="w-full lg:w-1/2"
 >
 <p className="text-white/40 text-xs tracking-wider uppercase mb-8">Exploded Cross-Section</p>
 <div className="flex flex-col gap-1 relative">
 {/* Vertical indicator line */}
 <div className="absolute -left-6 top-0 bottom-0 w-px bg-white/10" />

 {layers.map((layer, i) => (
 <motion.div
 key={layer.label}
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: i * 0.08 }}
 className="group flex items-center gap-4"
 >
 <div className={`w-full ${layer.thickness} ${layer.color} transition-all duration-500 group-hover:opacity-90`} />
 <div className="flex-shrink-0 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
 <p className="text-white text-[11px] font-medium mb-0.5">{layer.label}</p>
 <p className="text-white/40 text-[10px] leading-relaxed">{layer.description}</p>
 </div>
 </motion.div>
 ))}

 {/* Labels (always visible) */}
 <div className="mt-4 flex flex-col gap-2">
 {layers.map((layer, i) => (
 <div key={i} className="flex items-center gap-2">
 <div className={`w-3 h-3 ${layer.color} flex-shrink-0`} />
 <p className="text-white/50 text-[10px] tracking-wide">{layer.label}</p>
 </div>
 ))}
 </div>
 </div>
 </motion.div>

 {/* Core Type Cards */}
 <div className="w-full lg:w-1/2 flex flex-col gap-6">
 {coreTypes.map((core, i) => (
 <motion.div
 key={core.name}
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: i * 0.1 }}
 className="border border-white/10 p-8 hover:border-[#c9a568]/30 transition-all duration-500 group"
 >
 <div className="flex items-center justify-between mb-4">
 <h3 className="text-white text-lg font-light tracking-tight">{core.name}</h3>
 <span className="text-[9px] tracking-wider uppercase text-[#c9a568] border border-[#c9a568]/40 px-3 py-1">
 {core.tag}
 </span>
 </div>
 <p className="text-white/50 text-sm leading-[1.8] mb-6">{core.description}</p>
 <div className="flex flex-wrap gap-2">
 {core.properties.map((prop) => (
 <span key={prop} className="text-[10px] tracking-wide uppercase text-white/40 border border-white/10 px-3 py-1.5">
 {prop}
 </span>
 ))}
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
