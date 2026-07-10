"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Layers, Palette, Ruler, Leaf, Award } from "lucide-react";

const features = [
 {
 icon: Layers,
 title: "Engineered Solid Core",
 description: "A multi-layer core construction eliminates warping, ensures structural rigidity, and delivers consistent dimensional stability across all climates.",
 },
 {
 icon: Leaf,
 title: "Sustainably Sourced Timber",
 description: "Every piece of timber in the Signature Series is traced to verified, responsibly managed forests — beautiful without compromise.",
 },
 {
 icon: Palette,
 title: "Heirloom-Grade Finishes",
 description: "Multiple coats of premium PU lacquer, hand-sanded between each layer, deliver a surface so refined it rewards close inspection.",
 },
 {
 icon: Ruler,
 title: "Fully Custom Dimensions",
 description: "No standard size limitations. Every Signature door is precision-engineered to your exact specifications, down to the millimeter.",
 },
 {
 icon: ShieldCheck,
 title: "10-Year Structural Warranty",
 description: "Our confidence in the craftsmanship is backed by an industry-leading decade-long warranty covering structural integrity.",
 },
 {
 icon: Award,
 title: "Master-Craft Joinery",
 description: "Mortise-and-tenon, dovetail, and concealed dowel joints — traditional techniques executed with modern precision tooling.",
 },
];

export default function SignatureFeatures() {
 return (
 <section className="bg-[#0a0a0a] py-24 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden">
 {/* Ambient glow */}
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#c1a077]/4 blur-[120px] pointer-events-none" />

 <div className="max-w-[1400px] mx-auto relative z-10">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="text-center mb-20 md:mb-32 max-w-2xl mx-auto"
 >
 <p className="text-[#c9a568] text-[10px] md:text-xs tracking-widest uppercase mb-6 font-medium">
 Why Signature
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
 Built Without{" "}
 <span className=" text-white/50">Compromise</span>
 </h2>
 </motion.div>

 {/* Features Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
 {features.map((feature, index) => {
 const Icon = feature.icon;
 return (
 <motion.div
 key={feature.title}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.1 }}
 className="bg-[#0a0a0a] p-10 md:p-12 group hover:bg-[#111] transition-colors duration-500"
 >
 <div className="w-12 h-12 border border-[#c9a568]/30 flex items-center justify-center mb-8 group-hover:border-[#c9a568] transition-colors duration-500">
 <Icon size={20} className="text-[#c9a568]" strokeWidth={1.5} />
 </div>
 <h3 className="text-lg font-light text-white mb-4 tracking-tight">{feature.title}</h3>
 <div className="h-px w-8 bg-[#c9a568]/40 mb-5 group-hover:w-14 group-hover:bg-[#c9a568] transition-all duration-500" />
 <p className="text-white/50 leading-[1.8] text-sm font-light">{feature.description}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
