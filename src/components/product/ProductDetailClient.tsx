"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Minus, Download, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductDetails } from "@/data/productDetails";
import { useState } from "react";

export default function ProductDetailClient({ product }: { product: ProductDetails }) {
 return (
 <div className="bg-[#faf9f8] text-neutral-900 selection:bg-[#c1a077] selection:text-white">
 {/* Minimal Navigation */}
 <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex items-center justify-between pointer-events-none">
 <Link href="/collections" className="pointer-events-auto flex items-center gap-3 text-neutral-500 hover:text-neutral-900 transition-colors text-xs tracking-wide uppercase font-medium">
 <ArrowLeft size={16} /> Collection
 </Link>
 </nav>

 {/* Intro Header Section - Now at the very top */}
 <section className="pt-32 pb-16 px-6 md:px-16 lg:px-32 max-w-[1600px] mx-auto text-center">
 <p className="text-[#c1a077] text-[10px] md:text-xs tracking-widest uppercase font-bold mb-6">{product.category}</p>
 <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tight leading-[1.05] text-neutral-900 mb-8">
 {product.name}
 </h1>
 <p className="text-xl md:text-2xl font-light text-neutral-400 max-w-3xl mx-auto leading-relaxed">
 &quot;{product.shortTagline}&quot;
 </p>
 </section>

 {/* Editorial Asymmetric Image Gallery */}
 <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
 <div className="flex flex-col lg:flex-row gap-6 md:gap-8 h-auto lg:h-[80vh]">
 {/* Main Tall Image (Left) */}
 <div className="w-full lg:w-[65%] h-[70vh] lg:h-full relative bg-neutral-100 overflow-hidden group">
 <Image 
 src={product.gallery[0]} 
 alt={product.name} 
 fill 
 className="object-cover transition-transform duration-[3s] group-hover:scale-[1.03]"
 priority
 />
 <div className="absolute bottom-8 left-8 text-white text-[10px] tracking-wider uppercase mix-blend-difference font-medium">
 Figure 01 — Full Profile
 </div>
 </div>
 
 {/* Detail Shots (Right) */}
 <div className="w-full lg:w-[35%] flex flex-col gap-6 md:gap-8 h-auto lg:h-full">
 <div className="relative h-[50vh] lg:h-[60%] w-full bg-neutral-100 overflow-hidden group">
 <Image 
 src={product.gallery[1] || product.gallery[0]} 
 alt={`${product.name} Detail`} 
 fill 
 className="object-cover transition-transform duration-[3s] group-hover:scale-[1.03]"
 />
 <div className="absolute bottom-6 left-6 text-white text-[10px] tracking-wider uppercase mix-blend-difference font-medium">
 Figure 02 — Detail
 </div>
 </div>
 <div className="relative h-[40vh] lg:h-[40%] w-full bg-neutral-100 overflow-hidden group">
 <Image 
 src={product.gallery[2] || product.gallery[0]} 
 alt={`${product.name} Material`} 
 fill 
 className="object-cover transition-transform duration-[3s] group-hover:scale-[1.03]"
 />
 <div className="absolute bottom-6 left-6 text-white text-[10px] tracking-wider uppercase mix-blend-difference font-medium">
 Figure 03 — Material
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Split Details Section */}
 <section className="px-6 md:px-16 lg:px-32 pb-32 max-w-[1600px] mx-auto">
 <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
 
 {/* Left Column: Specs & Accordions */}
 <div className="lg:w-7/12 flex flex-col gap-12">
 
 {/* Description */}
 <div className="border-t border-neutral-200 pt-8">
 <h3 className="text-xs tracking-wider uppercase font-medium text-neutral-400 mb-6">Overview</h3>
 <p className="text-neutral-600 font-light leading-relaxed text-lg mb-8">{product.description}</p>
 
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {product.features.map((feature, i) => (
 <li key={i} className="flex items-center gap-3 text-sm text-neutral-700 font-light">
 <Check size={16} className="text-[#c1a077]" />
 {feature}
 </li>
 ))}
 </ul>
 </div>

 {/* Ultra-Minimal Accordions */}
 <div className="border-t border-neutral-200">
 <Accordion title="Quick Specifications" defaultOpen={true}>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-[15px] font-light">
 <div className="flex flex-col gap-1"><span className="text-neutral-400 text-xs uppercase tracking-widest">Material</span><span className="text-neutral-900">{product.material}</span></div>
 <div className="flex flex-col gap-1"><span className="text-neutral-400 text-xs uppercase tracking-widest">Core Construction</span><span className="text-neutral-900">{product.coreConstruction}</span></div>
 <div className="flex flex-col gap-1"><span className="text-neutral-400 text-xs uppercase tracking-widest">Thickness</span><span className="text-neutral-900">{product.thickness}</span></div>
 <div className="flex flex-col gap-1"><span className="text-neutral-400 text-xs uppercase tracking-widest">Warranty</span><span className="text-neutral-900">{product.warranty}</span></div>
 </div>
 </Accordion>

 <Accordion title="Technical Data">
 <div className="flex flex-col gap-4 text-[15px] font-light">
 <div className="flex justify-between border-b border-neutral-100 pb-3"><span className="text-neutral-500">Weight</span><span className="text-neutral-900">{product.technicalData.weight}</span></div>
 <div className="flex justify-between border-b border-neutral-100 pb-3"><span className="text-neutral-500">Density</span><span className="text-neutral-900">{product.technicalData.density}</span></div>
 <div className="flex justify-between border-b border-neutral-100 pb-3"><span className="text-neutral-500">Fire Rating</span><span className="text-neutral-900">{product.technicalData.fireRating}</span></div>
 <div className="flex justify-between border-b border-neutral-100 pb-3"><span className="text-neutral-500">STC Rating</span><span className="text-neutral-900">{product.technicalData.stc}</span></div>
 </div>
 </Accordion>
 
 <Accordion title="Hardware Compatibility">
 <p className="text-neutral-600 font-light leading-relaxed text-[15px]">{product.hardware.join(" • ")}</p>
 </Accordion>
 
 <Accordion title="Downloads">
 <div className="flex flex-col gap-2">
 {product.downloads.map((dl, i) => (
 <a key={i} href={dl.url} className="flex items-center justify-between py-4 border-b border-neutral-100 group hover:border-neutral-300 transition-colors cursor-pointer">
 <span className="text-[15px] text-neutral-600 font-light group-hover:text-neutral-900 transition-colors">{dl.name}</span>
 <Download size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
 </a>
 ))}
 </div>
 </Accordion>
 </div>
 </div>

 {/* Right Column: Sticky Purchasing Panel */}
 <div className="lg:w-5/12">
 <div className="sticky top-32 bg-white border border-neutral-200 p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
 <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">SKU: {product.sku}</p>
 
 <div className="flex items-baseline gap-4 mb-10">
 <span className="text-4xl md:text-5xl font-light text-neutral-900">{product.price}</span>
 </div>

 {/* Swatches */}
 <div className="mb-10">
 <h3 className="text-[10px] tracking-wide uppercase font-bold text-neutral-900 mb-4">Available Colours</h3>
 <div className="flex flex-wrap gap-4">
 {product.availableColors.map((color, i) => (
 <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
 <div className="w-12 h-12 rounded-full bg-[#f4f3f0] border border-neutral-200 group-hover:border-[#c1a077] transition-all relative overflow-hidden" title={color}>
 <div className="absolute inset-0 opacity-10 bg-black mix-blend-overlay" />
 </div>
 <span className="text-[9px] text-neutral-400 group-hover:text-neutral-900 tracking-widest uppercase transition-colors">{color}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Finishes */}
 <div className="mb-12">
 <h3 className="text-[10px] tracking-wide uppercase font-bold text-neutral-900 mb-4">Finishes</h3>
 <div className="flex flex-wrap gap-2">
 {product.finishes.map((finish, i) => (
 <span key={i} className="px-5 py-2.5 bg-[#faf9f8] border border-neutral-200 text-xs font-medium text-neutral-600">{finish}</span>
 ))}
 </div>
 </div>

 {/* CTA */}
 <div className="flex flex-col gap-4">
 <button className="w-full bg-neutral-900 text-white py-5 text-xs font-bold tracking-wider uppercase hover:bg-[#c1a077] transition-colors duration-500">
 Request Quote
 </button>
 <button className="w-full border border-neutral-200 text-neutral-900 py-5 text-xs font-bold tracking-wider uppercase hover:border-neutral-900 transition-colors duration-500">
 WhatsApp Inquiry
 </button>
 </div>
 </div>
 </div>

 </div>
 </section>

 {/* Clean Core Construction */}
 <section className="py-24 px-6 md:px-16 lg:px-32 bg-white border-t border-neutral-200">
 <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
 <div className="w-full lg:w-1/2">
 <p className="text-[#c1a077] text-xs tracking-wider uppercase font-bold mb-6">Engineering</p>
 <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-8">Crafted for <br/><span className="text-neutral-400 ">Longevity</span></h2>
 <p className="text-neutral-500 font-light leading-relaxed text-lg mb-10 max-w-lg">
 Our {product.coreConstruction.toLowerCase()} provides absolute dimensional stability. 
 By merging traditional artisanal woodworking with modern acoustic engineering, we ensure uncompromising quality.
 </p>
 <div className="flex flex-col gap-8">
 <div className="flex gap-6">
 <span className="text-[#c1a077] font-light text-xl">01</span>
 <div>
 <h4 className="text-neutral-900 text-sm tracking-widest uppercase font-medium mb-2">Face Veneer</h4>
 <p className="text-neutral-500 text-sm font-light">Premium 4mm architectural grade wood.</p>
 </div>
 </div>
 <div className="flex gap-6">
 <span className="text-[#c1a077] font-light text-xl">02</span>
 <div>
 <h4 className="text-neutral-900 text-sm tracking-widest uppercase font-medium mb-2">Solid Lipping</h4>
 <p className="text-neutral-500 text-sm font-light">{product.technicalData.edgeConstruction}</p>
 </div>
 </div>
 </div>
 </div>
 <div className="w-full lg:w-1/2 aspect-square relative bg-[#faf9f8] flex items-center justify-center p-12">
 <div className="w-full h-full border border-neutral-200 flex items-center justify-center relative bg-white shadow-sm">
 <span className="text-neutral-300 tracking-wider uppercase text-xs font-medium">Exploded Diagram Schema</span>
 </div>
 </div>
 </div>
 </section>

 {/* Stark Minimal Related Products */}
 <section className="py-32 px-6 md:px-16 lg:px-32 max-w-[1600px] mx-auto">
 <div className="flex justify-between items-end border-b border-neutral-200 pb-8 mb-16">
 <h2 className="text-2xl font-light tracking-tight text-neutral-900">Discover More</h2>
 <Link href="/collections" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 transition-colors text-[10px] tracking-widest uppercase font-bold">
 View Collection <ArrowRight size={14} />
 </Link>
 </div>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
 {product.relatedProducts.map((relProduct, i) => (
 <Link key={i} href={`/product/${relProduct.id}`} className="group flex flex-col">
 <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100 mb-6">
 <Image src={relProduct.image} alt={relProduct.name} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
 </div>
 <p className="text-[10px] tracking-wider uppercase text-neutral-400 mb-2">{relProduct.material}</p>
 <h3 className="text-neutral-900 group-hover:text-[#c1a077] transition-colors text-xl font-light">{relProduct.name}</h3>
 </Link>
 ))}
 </div>
 </section>

 </div>
 );
}

// Ultra Minimal Accordion
function Accordion({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
 const [isOpen, setIsOpen] = useState(defaultOpen);

 return (
 <div className="border-b border-neutral-200">
 <button 
 onClick={() => setIsOpen(!isOpen)} 
 className="w-full py-8 flex items-center justify-between text-left group outline-none"
 >
 <span className="text-sm tracking-wide uppercase font-medium text-neutral-900 group-hover:text-[#c1a077] transition-colors">{title}</span>
 {isOpen ? <Minus size={16} className="text-[#c1a077]" /> : <Plus size={16} className="text-neutral-400 group-hover:text-[#c1a077] transition-colors" />}
 </button>
 <motion.div 
 initial={false}
 animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
 className="overflow-hidden"
 >
 <div className="pb-8">
 {children}
 </div>
 </motion.div>
 </div>
 );
}
