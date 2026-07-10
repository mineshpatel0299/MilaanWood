"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedProject() {
 return (
 <section className="bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(193,160,119,0.06),transparent_50%)] pointer-events-none" />

 <div className="max-w-[1400px] mx-auto relative z-10">
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="text-[#c9a568] text-[10px] md:text-xs tracking-widest uppercase mb-6 font-medium"
 >
 Featured Project
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
 className="relative w-full aspect-[16/8] md:aspect-[16/6] overflow-hidden bg-neutral-900 group cursor-pointer"
 >
 <Image
 src="/door_featured_3.png"
 alt="The Oberoi Residences — Featured Project"
 fill
 className="object-cover brightness-60 group-hover:brightness-50 group-hover:scale-[1.03] transition-all duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
 />

 {/* Gradient overlay */}
 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

 {/* Content */}
 <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
 <div className="max-w-xl">
 <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-[#c9a568] mb-4">
 Mumbai, Maharashtra — 2024
 </p>
 <h3 className="text-3xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-4">
 The Oberoi<br />
 <span className=" text-white/70">Residences</span>
 </h3>
 <div className="h-px w-12 bg-[#c9a568]/60 mb-6" />
 <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
 42 bespoke Signature Series doors crafted for one of Mumbai&apos;s most prestigious residential developments. Each door custom-designed to the architect&apos;s specifications.
 </p>

 <div className="flex flex-wrap gap-4 mb-8">
 {[
 { label: "Series", value: "Signature" },
 { label: "Scope", value: "42 Doors" },
 { label: "Type", value: "Hospitality" },
 ].map((spec) => (
 <div key={spec.label} className="border border-white/20 px-4 py-2">
 <p className="text-[9px] tracking-wider uppercase text-white/40 mb-1">{spec.label}</p>
 <p className="text-white text-sm font-light">{spec.value}</p>
 </div>
 ))}
 </div>

 <button className="inline-flex items-center gap-3 border border-[#c9a568]/50 hover:border-[#c9a568] hover:bg-[#c9a568] hover:text-black text-[#c9a568] px-7 py-3.5 text-[11px] font-medium tracking-wider uppercase transition-all duration-300">
 View Project
 <ArrowRight size={14} />
 </button>
 </div>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
