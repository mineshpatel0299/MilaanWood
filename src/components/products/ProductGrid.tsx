"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProductFilter from "./ProductFilter";

const products = [
 {
 id: 1,
 name: "Royale Heritage",
 category: "Luxury",
 price: "₹45,000",
 image: "/door_featured.png",
 tag: "Bestseller",
 material: "Burmese Teak",
 },
 {
 id: 2,
 name: "Milano Classic",
 category: "Interior",
 price: "₹28,000",
 image: "/door_featured_2.png",
 tag: null,
 material: "Indian Teak",
 },
 {
 id: 3,
 name: "Contemporary Edge",
 category: "Contemporary",
 price: "₹35,000",
 image: "/mw_cd_217.png",
 tag: "New",
 material: "Walnut Oak",
 },
 {
 id: 4,
 name: "Tuscan Villa",
 category: "Exterior",
 price: "₹52,000",
 image: "/mw_cd_217.png",
 tag: null,
 material: "Mahogany",
 },
 {
 id: 5,
 name: "Artisan Panel",
 category: "Interior",
 price: "₹22,000",
 image: "/mw_cd_217.png",
 tag: null,
 material: "Pine Wood",
 },
 {
 id: 6,
 name: "Grand Monarch",
 category: "Luxury",
 price: "₹68,000",
 image: "/mw_cd_217.png",
 tag: "Premium",
 material: "Burmese Teak",
 },
 {
 id: 7,
 name: "Urban Minimal",
 category: "Contemporary",
 price: "₹30,000",
 image: "/mw_cd_217.png",
 tag: null,
 material: "Engineered Oak",
 },
 {
 id: 8,
 name: "Cedar Fortress",
 category: "Exterior",
 price: "₹48,000",
 image: "/door_cat_2.png",
 tag: null,
 material: "Cedar Wood",
 },
 {
 id: 9,
 name: "Velvet Arch",
 category: "Luxury",
 price: "₹58,000",
 image: "/door_cat_3.png",
 tag: "Exclusive",
 material: "Rosewood",
 },
 {
 id: 10,
 name: "Zen Slide",
 category: "Contemporary",
 price: "₹26,000",
 image: "/door_cat_4.png",
 tag: null,
 material: "Bamboo Veneer",
 },
 {
 id: 11,
 name: "Oakwood Manor",
 category: "Interior",
 price: "₹32,000",
 image: "/door_cat_5.png",
 tag: null,
 material: "White Oak",
 },
 {
 id: 12,
 name: "Sentinel Gate",
 category: "Exterior",
 price: "₹55,000",
 image: "/sun_door_cnc.png",
 tag: "New",
 material: "Sal Wood",
 },
];

export default function ProductGrid() {
 const [activeCategory, setActiveCategory] = useState("All");

 const filtered =
 activeCategory === "All"
 ? products
 : products.filter((p) => p.category === activeCategory);

 return (
 <section className="bg-neutral-50 px-4 md:px-12 lg:px-20 py-20 md:py-32">
 <div className="max-w-7xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="text-center mb-16 md:mb-20"
 >
 <div className="flex items-center justify-center gap-4 mb-4">
 <span className="h-px w-12 bg-[#8b3d30]/40" />
 <p className="text-[10px] md:text-xs tracking-widest uppercase text-[#8b3d30] font-semibold">
 Handcrafted Excellence
 </p>
 <span className="h-px w-12 bg-[#8b3d30]/40" />
 </div>
 <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-neutral-900 mb-4">
 The Collection
 </h2>
 <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto">
 Every piece tells a story of master craftsmanship and refined taste
 </p>
 </motion.div>

 {/* <div className="mb-14 md:mb-16">
 <ProductFilter active={activeCategory} onChange={setActiveCategory} />
 </div> */}

 <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
 <AnimatePresence mode="popLayout">
 {filtered.map((product, idx) => (
 <motion.div
 key={product.id}
 layout
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95 }}
 transition={{ duration: 0.6, delay: idx * 0.06 }}
 className="group cursor-pointer"
 >
 <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200 mb-5 shadow-sm hover:shadow-xl transition-shadow duration-700">
 <Image
 src={product.image}
 alt={product.name}
 fill
 className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 />

 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600" />

 {product.tag && (
 <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-neutral-900 text-[9px] tracking-wider uppercase font-bold px-4 py-2 border border-white/50">
 {product.tag}
 </span>
 )}

 <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
 <div className="flex items-end justify-between">
 <p className="text-white/80 text-xs tracking-wide uppercase">
 {product.material}
 </p>
 <div className="bg-white p-3 shadow-lg hover:scale-110 transition-transform duration-300">
 <ArrowUpRight size={16} className="text-neutral-900" />
 </div>
 </div>
 </div>
 </div>

 <div className="px-2">
 <div className="flex items-start justify-between gap-4">
 <div>
 <h3 className="text-lg md:text-xl font-medium text-neutral-900 group-hover:text-[#8b3d30] transition-colors duration-300">
 {product.name}
 </h3>
 <p className="text-[10px] tracking-wider uppercase text-neutral-400 mt-1.5">
 {product.category}
 </p>
 </div>
 <p className="text-base md:text-lg font-medium text-neutral-900 whitespace-nowrap mt-0.5">
 {product.price}
 </p>
 </div>
 <div className="h-px bg-neutral-200 mt-5 w-0 group-hover:w-full transition-all duration-700 ease-out" />
 </div>
 </motion.div>
 ))}
 </AnimatePresence>
 </motion.div>
 </div>
 </section>
 );
}
