"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ArtisanSpotlight() {
 return (
 <section className="bg-[#0d0d0d] py-24 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden">
 <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#c1a077]/4 blur-[140px] pointer-events-none -translate-y-1/2" />

 <div className="max-w-[1400px] mx-auto relative z-10">
 <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">

 {/* Text */}
 <motion.div
 initial={{ opacity: 0, x: -40 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
 className="w-full lg:w-1/2 flex flex-col gap-8"
 >
 <p className="text-[#c9a568] text-[10px] md:text-xs tracking-widest uppercase font-medium">
 The Artisan Philosophy
 </p>

 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
 Craft Passed{" "}
 <span className=" text-white/50">Down by Hand</span>
 </h2>

 <div className="h-px w-16 bg-[#c9a568]/50" />

 <blockquote className="text-white/60 text-lg md:text-xl font-light leading-[1.7] border-l-2 border-[#c9a568]/40 pl-8">
 &ldquo;A door is not a product — it is a threshold. Every grain of wood I touch has a story older than any of us. My job is to honour it.&rdquo;
 </blockquote>

 <div>
 <p className="text-white text-sm font-medium tracking-wide">Ramesh K., Head Artisan</p>
 <p className="text-white/40 text-xs tracking-wider uppercase mt-1">28 Years with Milan Wood</p>
 </div>

 <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
 {[
 { value: "28+", label: "Craftsmen" },
 { value: "3", label: "Generations" },
 { value: "15yr", label: "Avg. experience" },
 ].map((stat) => (
 <div key={stat.label}>
 <p className="text-2xl md:text-3xl font-light text-white mb-1">{stat.value}</p>
 <p className="text-[10px] tracking-wider uppercase text-white/40">{stat.label}</p>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Image */}
 <motion.div
 initial={{ opacity: 0, x: 40 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
 className="w-full lg:w-1/2 flex-shrink-0"
 >
 <div className="relative aspect-[4/5] overflow-hidden border border-white/5">
 <Image
 src="/door_cat_3.png"
 alt="Master artisan at work"
 fill
 className="object-cover brightness-75 contrast-110"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
