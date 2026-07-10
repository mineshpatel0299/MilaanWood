"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
 { src: "/door_cat_4.png", alt: "Artisan hand-finishing a panel", caption: "Hand Finishing" },
 { src: "/door_cat_2.png", alt: "CNC precision cutting in factory", caption: "CNC Machining" },
 { src: "/door_cat_3.png", alt: "Timber seasoning chamber", caption: "Timber Seasoning" },
 { src: "/mw_cd_217.png", alt: "Master joinery work", caption: "Master Joinery" },
 { src: "/door_cat_5.png", alt: "Quality inspection", caption: "Quality Check" },
 { src: "/door_philosophy.png", alt: "Wood selection process", caption: "Wood Selection" },
 { src: "/door_our_story.png", alt: "Workshop floor", caption: "The Workshop" },
 { src: "/product_1.png", alt: "Finishing coat application", caption: "PU Finishing" },
];

export default function FactoryGallery() {
 return (
 <section className="bg-[#0a0a0a] py-24 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(193,160,119,0.05),transparent_60%)] pointer-events-none" />

 <div className="max-w-[1400px] mx-auto relative z-10">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="mb-16 md:mb-24"
 >
 <p className="text-[#c9a568] text-[10px] md:text-xs tracking-widest uppercase mb-6 font-medium">
 Inside Our Factory
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
 A Glimpse Behind{" "}
 <span className=" text-white/50">the Door</span>
 </h2>
 </motion.div>

 {/* Masonry Grid */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
 {galleryImages.map((img, index) => {
 // Create visual variety with different aspect ratios
 const isTall = index === 0 || index === 5;
 const isWide = index === 3;

 return (
 <motion.div
 key={img.src}
 initial={{ opacity: 0, scale: 0.97 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: (index % 4) * 0.08 }}
 className={`relative overflow-hidden group bg-neutral-900 ${
 isTall ? "row-span-2" : ""
 } ${isWide ? "col-span-2" : ""}`}
 >
 <div className={`relative w-full ${isTall ? "aspect-[3/5]" : isWide ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
 <Image
 src={img.src}
 alt={img.alt}
 fill
 className="object-cover transition-all duration-700 group-hover:scale-[1.06] brightness-75 group-hover:brightness-90"
 />

 {/* Overlay */}
 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
 <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
 <p className="text-[9px] tracking-wider uppercase text-[#c9a568]">{img.caption}</p>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
