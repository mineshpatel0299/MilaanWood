"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { collections } from "@/data/collections";

const signatureProducts = [
 {
 id: "sig-1",
 name: "MW Signature Flush",
 code: "MW-SF-001",
 price: "₹68,000",
 image: "/door_featured.png",
 material: "Teak Veneer",
 tag: "Bestseller",
 },
 {
 id: "sig-2",
 name: "Grand Pivot",
 code: "MW-GP-002",
 price: "₹95,000",
 image: "/door_cat_4.png",
 material: "Solid Walnut",
 tag: "Exclusive",
 },
 {
 id: "sig-3",
 name: "Parametric Relief",
 code: "MW-PR-003",
 price: "₹1,20,000",
 image: "/sun_door_cnc.png",
 material: "CNC Mahogany",
 tag: "New",
 },
 {
 id: "sig-4",
 name: "Art Deco Panel",
 code: "MW-AD-004",
 price: "₹82,000",
 image: "/door_featured_2.png",
 material: "Rosewood",
 tag: null,
 },
 {
 id: "sig-5",
 name: "French Carved",
 code: "MW-FC-005",
 price: "₹78,000",
 image: "/door_featured_3.png",
 material: "Oak & Glass",
 tag: "Premium",
 },
 {
 id: "sig-6",
 name: "Zen Minimal",
 code: "MW-ZM-006",
 price: "₹55,000",
 image: "/contemporary_door.png",
 material: "Engineered Oak",
 tag: null,
 },
];

export default function SignatureProducts() {
 return (
 <section className="bg-[#faf9f8] py-24 md:py-40 px-6 md:px-16 lg:px-24">
 <div className="max-w-[1400px] mx-auto">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24"
 >
 <div>
 <p className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-6">
 Signature Collection
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
 Flagship{" "}
 <span className=" text-neutral-400">Pieces</span>
 </h2>
 </div>

 <Link
 href="/collections"
 className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-wider font-medium uppercase text-neutral-900 hover:text-[#c1a077] transition-colors duration-300 group"
 >
 View All Collections
 <ArrowRight
 size={14}
 className="text-neutral-400 group-hover:text-[#c1a077] group-hover:translate-x-1 transition-all duration-300"
 />
 </Link>
 </motion.div>

 {/* Products Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
 {signatureProducts.map((product, index) => (
 <motion.div
 key={product.id}
 initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: (index % 3) * 0.12 }}
 className="group cursor-pointer"
 >
 <Link href={`/product/${product.id}`} className="block h-full">
 <div className="bg-white border border-neutral-100 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1">
 {/* Image */}
 <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
 <Image
 src={product.image}
 alt={product.name}
 fill
 className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.07]"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

 {product.tag && (
 <div className="absolute top-4 left-4 bg-[#c9a568] px-3 py-1">
 <span className="text-[9px] tracking-wider uppercase text-black font-semibold">{product.tag}</span>
 </div>
 )}
 </div>

 {/* Info */}
 <div className="px-6 py-7 bg-white">
 <div className="flex items-center justify-between mb-3">
 <p className="text-[9px] md:text-[10px] tracking-widest font-medium uppercase text-[#c1a077]">
 {product.material}
 </p>
 <p className="text-[9px] md:text-[10px] tracking-wide uppercase text-neutral-400">
 {product.code}
 </p>
 </div>

 <div className="flex items-end justify-between gap-4">
 <div>
 <h3 className="text-lg md:text-xl font-light tracking-tight text-neutral-900 group-hover:text-[#c1a077] transition-colors duration-500 mb-1">
 {product.name}
 </h3>
 <p className="text-sm text-neutral-500">{product.price}</p>
 </div>
 <div className="flex-shrink-0 w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center group-hover:bg-[#c1a077] group-hover:border-[#c1a077] transition-all duration-500">
 <ArrowRight
 size={15}
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
 </div>
 </section>
 );
}
