"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SignatureIntro() {
 return (
 <section className="bg-white py-24 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden">
 <div className="max-w-[1400px] mx-auto">
 <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">

 {/* Left: Editorial Image */}
 <motion.div
 initial={{ opacity: 0, x: -40 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
 className="w-full lg:w-1/2 flex-shrink-0"
 >
 <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
 <Image
 src="/door_featured.png"
 alt="Signature Series — The Pinnacle of Craftsmanship"
 fill
 className="object-cover"
 />
 {/* Gold badge overlay */}
 <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-[#c9a568]/40 px-5 py-3">
 <p className="text-[9px] tracking-widest uppercase text-[#c9a568] mb-1">Collection</p>
 <p className="text-white text-sm font-light tracking-wide">Signature Series</p>
 </div>
 </div>
 </motion.div>

 {/* Right: Text */}
 <motion.div
 initial={{ opacity: 0, x: 40 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
 className="w-full lg:w-1/2 flex flex-col gap-8"
 >
 <p className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase">
 The Pinnacle of Craftsmanship
 </p>

 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
 Designed to{" "}
 <span className=" text-neutral-400">Last a Lifetime</span>
 </h2>

 <div className="h-px w-16 bg-[#c9a568]/60" />

 <p className="text-neutral-600 leading-[1.9] text-[15px] md:text-base">
 The Signature Series represents Milan Wood&apos;s most uncompromising vision of what a door can be. Every piece is handcrafted from hand-selected, sustainably sourced timber — chosen for grain character, density, and longevity.
 </p>

 <p className="text-neutral-500 leading-[1.9] text-[14px] md:text-[15px]">
 From the initial concept sketch to the final polished surface, each door undergoes over 40 individual quality checks. The result is not merely functional — it is an heirloom, built to define spaces for generations.
 </p>

 <div className="grid grid-cols-3 gap-6 pt-4 border-t border-neutral-100">
 {[
 { value: "40+", label: "Quality checks" },
 { value: "10yr", label: "Warranty" },
 { value: "100%", label: "Custom sizing" },
 ].map((stat) => (
 <div key={stat.label}>
 <p className="text-2xl md:text-3xl font-light text-neutral-900 mb-1">{stat.value}</p>
 <p className="text-[10px] tracking-wider uppercase text-neutral-400">{stat.label}</p>
 </div>
 ))}
 </div>

 <Link
 href="/collections"
 className="inline-flex items-center gap-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 px-8 py-4 text-[11px] font-medium tracking-wider uppercase transition-all duration-300 w-fit"
 >
 Explore Collections
 <ArrowRight size={14} />
 </Link>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
