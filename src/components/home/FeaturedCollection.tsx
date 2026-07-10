"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { collections } from "@/data/collections";

export default function FeaturedProducts() {
 // Grab a different product index from the first 3 collections so the images are varied
 const featuredProducts = collections.slice(0, 3).map((col, idx) => ({
 ...col.products[idx % col.products.length],
 collectionName: col.name,
 collectionSlug: col.slug,
 }));
 return (
 <section className="bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 variants={{
 hidden: {},
 visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
 }}
 className="max-w-[1400px] mx-auto px-6 md:px-16"
 >
 {/* Header */}
 <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
 <div>
 <motion.p
 variants={{
 hidden: { opacity: 0, y: 15 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 }}
 className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-6 md:mb-8"
 >
 Curated Selection
 </motion.p>
 <motion.h2
 variants={{
 hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
 visible: {
 opacity: 1,
 y: 0,
 filter: "blur(0px)",
 transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
 },
 }}
 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900"
 >
 Signature{" "}
 <span className=" text-neutral-400">Masterpieces</span>
 </motion.h2>
 </div>

 <motion.div
 variants={{
 hidden: { opacity: 0, y: 10 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 }}
 >
 <Link
 href="/collections"
 className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-wider font-medium uppercase text-neutral-900 hover:text-[#c1a077] transition-colors duration-300 group"
 >
 View Gallery
 <ArrowUpRight
 size={14}
 className="text-neutral-400 group-hover:text-[#c1a077] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
 />
 </Link>
 </motion.div>
 </div>

 {/* Products grid */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
 {featuredProducts.map((product, index) => (
 <motion.div
 key={product.id}
 variants={{
 hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
 visible: {
 opacity: 1,
 y: 0,
 filter: "blur(0px)",
 transition: {
 duration: 1,
 ease: [0.25, 1, 0.5, 1],
 delay: index * 0.15,
 },
 },
 }}
 className="group cursor-pointer"
 >
 <Link href={`/product/${product.id}`} className="block h-full">
 <div className="bg-[#faf9f8] border border-neutral-100 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1">
 {/* Image */}
 <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
 <Image
 src={product.image}
 alt={product.name}
 fill
 className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.08]"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
 </div>

 {/* Info panel */}
 <div className="px-6 py-8 md:px-8 md:py-8 bg-white">
 <div className="flex items-center justify-between mb-4">
 <p className="text-[9px] md:text-[10px] tracking-widest font-medium uppercase text-[#c1a077] max-w-[60%] truncate">
 {product.collectionName}
 </p>
 <p className="text-[9px] md:text-[10px] tracking-wide uppercase text-neutral-400 text-right">
 {product.material}
 </p>
 </div>

 <div className="flex items-end justify-between gap-4">
 <h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 group-hover:text-[#c1a077] transition-colors duration-500">
 {product.name}
 </h3>
 <div className="flex-shrink-0 w-11 h-11 border border-neutral-200 rounded-full flex items-center justify-center group-hover:bg-[#c1a077] group-hover:border-[#c1a077] transition-all duration-500">
 <ArrowRight
 size={16}
 className="text-neutral-400 group-hover:text-white transition-colors duration-500"
 />
 </div>
 </div>
 </div>
 </div>
 </Link>
 </motion.div>
 ))}
 </div>
 </motion.div>
 </section>
 );
}
