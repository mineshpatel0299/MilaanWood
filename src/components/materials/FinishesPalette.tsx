"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const finishes = [
 {
 name: "Natural Veneer",
 description: "Real wood sliced paper-thin and bonded to the door face. Every piece is unique — no two identical.",
 image: "/door_featured.png",
 swatchColor: "#A0784A",
 tone: "Warm Natural",
 },
 {
 name: "PU Lacquer",
 description: "Polyurethane coating applied in multiple layers for a hard, durable, and richly glossy or matte surface.",
 image: "/door_cat_4.png",
 swatchColor: "#1a1a1a",
 tone: "Deep Gloss",
 },
 {
 name: "Laminate",
 description: "High-pressure laminate in hundreds of patterns — from woodgrains to solid colours — at a compelling price point.",
 image: "/door_cat_5.png",
 swatchColor: "#7C8C6A",
 tone: "Versatile",
 },
 {
 name: "Duco Paint",
 description: "Factory-applied automotive-grade paint in any RAL colour — the choice for bold, precise colour statements.",
 image: "/contemporary_door.png",
 swatchColor: "#C0C0B0",
 tone: "Premium Colour",
 },
];

const colourOptions = [
 { name: "Walnut Brown", hex: "#7B4F2E" },
 { name: "Natural Teak", hex: "#A67C52" },
 { name: "Oak Natural", hex: "#C8A96E" },
 { name: "Ash Grey", hex: "#8E8E80" },
 { name: "Ebony", hex: "#2C1810" },
 { name: "White Oak", hex: "#E8DCC0" },
 { name: "Charcoal", hex: "#3C3C3C" },
 { name: "Champagne", hex: "#D4B896" },
];

export default function FinishesPalette() {
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
 Surface Excellence
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
 Finishes &{" "}
 <span className=" text-neutral-400">Palette</span>
 </h2>
 </motion.div>

 {/* Finish Cards */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-32">
 {finishes.map((finish, index) => (
 <motion.div
 key={finish.name}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
 className="group"
 >
 {/* Image */}
 <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-5">
 <Image
 src={finish.image}
 alt={finish.name}
 fill
 className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06]"
 />
 {/* Colour swatch */}
 <div
 className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-white shadow-md"
 style={{ backgroundColor: finish.swatchColor }}
 />
 </div>

 <p className="text-[9px] tracking-widest uppercase text-[#c1a077] mb-2">{finish.tone}</p>
 <h3 className="text-lg font-light text-neutral-900 mb-2 tracking-tight">{finish.name}</h3>
 <div className="h-px w-8 bg-neutral-200 mb-3 group-hover:w-14 group-hover:bg-[#c9a568] transition-all duration-500" />
 <p className="text-sm text-neutral-500 leading-[1.8]">{finish.description}</p>
 </motion.div>
 ))}
 </div>

 {/* Colour Swatches */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 >
 <p className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-8">
 Available Colours
 </p>
 <div className="flex flex-wrap gap-4 md:gap-6">
 {colourOptions.map((colour, i) => (
 <motion.div
 key={colour.name}
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.05 }}
 className="flex flex-col items-center gap-2 group cursor-default"
 >
 <div
 className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-neutral-200 shadow-sm group-hover:scale-110 transition-transform duration-300"
 style={{ backgroundColor: colour.hex }}
 />
 <span className="text-[9px] tracking-wide uppercase text-neutral-400 text-center leading-tight max-w-[70px]">
 {colour.name}
 </span>
 </motion.div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>
 );
}
