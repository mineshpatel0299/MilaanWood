"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const woods = [
 {
 name: "Teak",
 origin: "Myanmar / India",
 hardness: "Janka 1070 lbf",
 grain: "Straight, coarse",
 durability: "Exceptional",
 highlight: "Our most-used premium species — renowned for its natural oils that resist moisture, termites, and the test of time.",
 image: "/door_featured.png",
 color: "#8B6914",
 },
 {
 name: "Walnut",
 origin: "USA / Europe",
 hardness: "Janka 1010 lbf",
 grain: "Fine, wavy",
 durability: "Excellent",
 highlight: "The connoisseur's choice — deep, chocolate-brown tones with a fine grain that takes finishes with unmatched elegance.",
 image: "/door_cat_4.png",
 color: "#5C3D1E",
 },
 {
 name: "Oak",
 origin: "Europe / USA",
 hardness: "Janka 1290 lbf",
 grain: "Open, pronounced",
 durability: "Exceptional",
 highlight: "A timeless classic — oak's prominent grain character gives every door a bold, natural identity.",
 image: "/door_featured_2.png",
 color: "#A0784A",
 },
 {
 name: "Rosewood",
 origin: "India / Brazil",
 hardness: "Janka 1780 lbf",
 grain: "Interlocked, lustrous",
 durability: "Superior",
 highlight: "One of the world's most coveted timbers — deep reddish-brown with lustrous figuring for truly bespoke doors.",
 image: "/door_featured_3.png",
 color: "#6B2737",
 },
 {
 name: "Mahogany",
 origin: "Africa / Americas",
 hardness: "Janka 900 lbf",
 grain: "Straight, silky",
 durability: "Very Good",
 highlight: "A classic luxury timber with excellent workability — beloved by craftsmen for its silky surface and warm reddish hue.",
 image: "/sun_door_cnc.png",
 color: "#8B3A2A",
 },
];

export default function WoodTypes() {
 const [activeIndex, setActiveIndex] = useState(0);
 const active = woods[activeIndex];

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
 Primary Species
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
 Premium{" "}
 <span className=" text-neutral-400">Wood Types</span>
 </h2>
 </motion.div>

 <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
 {/* Species Tabs */}
 <div className="w-full lg:w-[220px] flex-shrink-0 flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
 {woods.map((wood, i) => (
 <button
 key={wood.name}
 onClick={() => setActiveIndex(i)}
 className={`flex-shrink-0 text-left px-5 py-4 border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a568] ${
 activeIndex === i
 ? "border-[#c9a568] bg-[#c9a568]/5"
 : "border-neutral-100 hover:border-neutral-300"
 }`}
 >
 <div className="flex items-center gap-3">
 <div
 className="w-3 h-3 rounded-full flex-shrink-0"
 style={{ backgroundColor: wood.color }}
 />
 <span
 className={`text-sm tracking-wide transition-colors duration-300 ${
 activeIndex === i ? "text-neutral-900 font-medium" : "text-neutral-500"
 }`}
 >
 {wood.name}
 </span>
 </div>
 </button>
 ))}
 </div>

 {/* Active Wood Detail */}
 <motion.div
 key={activeIndex}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
 className="flex-1 flex flex-col lg:flex-row gap-10 lg:gap-14"
 >
 {/* Image */}
 <div className="w-full lg:w-[380px] flex-shrink-0">
 <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
 <Image
 src={active.image}
 alt={active.name}
 fill
 className="object-cover"
 />
 <div
 className="absolute bottom-0 left-0 right-0 h-1"
 style={{ backgroundColor: active.color }}
 />
 </div>
 </div>

 {/* Info */}
 <div className="flex-1 flex flex-col justify-center">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-4 h-4 rounded-full" style={{ backgroundColor: active.color }} />
 <p className="text-[10px] tracking-widest uppercase text-neutral-400">{active.origin}</p>
 </div>

 <h3 className="text-4xl md:text-5xl font-light text-neutral-900 mb-2">{active.name}</h3>
 <div className="h-px w-12 bg-[#c9a568] mb-8" />

 <p className="text-neutral-600 leading-[1.9] text-[15px] mb-10">{active.highlight}</p>

 <div className="grid grid-cols-3 gap-6 border-t border-neutral-100 pt-8">
 {[
 { label: "Hardness", value: active.hardness },
 { label: "Grain", value: active.grain },
 { label: "Durability", value: active.durability },
 ].map((spec) => (
 <div key={spec.label}>
 <p className="text-[10px] tracking-wider uppercase text-neutral-400 mb-2">{spec.label}</p>
 <p className="text-sm text-neutral-700 font-medium">{spec.value}</p>
 </div>
 ))}
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
