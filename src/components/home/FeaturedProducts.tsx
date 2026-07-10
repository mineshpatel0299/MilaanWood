'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
 { id: 1, name: 'Contemporary Door', image: '/contemporary_door.png' },
 { id: 2, name: 'Modern Sun Door CNC Carved', image: '/sun_door_cnc.png' },
 { id: 3, name: 'MW-CD-217', image: '/mw_cd_217.png' },
];

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.2,
 delayChildren: 0.1
 }
 }
};

const itemVariants = {
 hidden: { opacity: 0, y: 50 },
 visible: { 
 opacity: 1, 
 y: 0,
 transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }
 }
};

function ProductCard({ product }: { product: typeof products[0] }) {
 return (
 <motion.div
 variants={itemVariants}
 className="group cursor-pointer"
 >
 {/* Image container */}
 <div className="relative h-[400px] md:h-[550px] w-full mb-6 overflow-hidden bg-[#f7f7f7]">
 <Image
 src={product.image}
 alt={product.name}
 fill
 className="object-cover mix-blend-multiply group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
 />
 {/* Hover overlay */}
 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

 {/* Top-Left Cutout */}
 <div className="absolute top-0 left-0 bg-white px-4 py-2 md:px-5 md:py-3 z-10">
 <span className="text-[9px] font-bold uppercase tracking-wide text-neutral-500">
 Featured
 </span>
 {/* Inverted curves */}
 <svg className="absolute top-0 -right-[1.5rem] w-[1.5rem] h-[1.5rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
 <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
 </svg>
 <svg className="absolute left-0 -bottom-[1.5rem] w-[1.5rem] h-[1.5rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
 <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
 </svg>
 </div>

 {/* Bottom-Right Cutout */}
 <div className="absolute bottom-0 right-0 bg-white pl-4 pt-3 pr-3 pb-3 md:pl-5 md:pt-4 md:pr-3 md:pb-3 z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
 <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-neutral-900">
 Explore <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
 </span>
 {/* Inverted curves */}
 <svg className="absolute bottom-0 -left-[1.5rem] w-[1.5rem] h-[1.5rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
 <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
 </svg>
 <svg className="absolute -top-[1.5rem] right-0 w-[1.5rem] h-[1.5rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
 <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
 </svg>
 </div>
 </div>

 {/* Info */}
 <div className="px-2">
 <h3 className="text-base md:text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors duration-300">
 {product.name}
 </h3>
 </div>

 {/* Bottom underline — expands on hover */}
 <div className="mt-3 px-2">
 <div className="h-px bg-neutral-200 w-0 group-hover:w-full transition-all duration-500 ease-out" />
 </div>
 </motion.div>
 );
}

export default function FeaturedProducts() {
 return (
 <section className="bg-white text-black py-20 md:py-40 px-4 md:px-16 font-sans">
 <div className="max-w-[1400px] mx-auto">

 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-12 md:mb-20 border-b border-neutral-200 pb-8"
 >
 <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Featured Projects</h2>
 <button className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wide hover:text-neutral-500 transition-colors duration-300 group">
 View Collection
 <ArrowUpRight
 size={14}
 className="md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
 />
 </button>
 </motion.div>

 {/* Products grid */}
 <motion.div 
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12"
 >
 {products.map((product) => (
 <ProductCard key={product.id} product={product} />
 ))}
 </motion.div>
 </div>
 </section>
 );
}
