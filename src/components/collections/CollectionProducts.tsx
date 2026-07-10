"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Filter, X } from "lucide-react";
import { Collection, Product } from "@/data/collections";
import Link from "next/link";
import { useRef, useState, useMemo } from "react";

export default function CollectionProducts({ collection }: { collection: Collection }) {
 const containerRef = useRef(null);
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start start", "end start"]
 });

 // Parallax for the hero image
 const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
 const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

 // Filter State
 const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
 const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
 const [selectedColors, setSelectedColors] = useState<string[]>([]);
 const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

 // Extract unique materials and colors from the collection
 const allMaterials = useMemo(() => Array.from(new Set(collection.products.map(p => p.material))), [collection.products]);
 const allColors = useMemo(() => Array.from(new Set(collection.products.map(p => p.color))), [collection.products]);
 
 // Define price ranges
 const priceRanges = [
 { label: "Under ₹40,000", match: (price: number) => price < 40000 },
 { label: "₹40,000 - ₹60,000", match: (price: number) => price >= 40000 && price <= 60000 },
 { label: "Above ₹60,000", match: (price: number) => price > 60000 },
 ];

 // Parse price string to number e.g. "₹35,000" -> 35000
 const parsePrice = (priceStr: string) => {
 return parseInt(priceStr.replace(/[^0-9]/g, ''));
 };

 const filteredProducts = useMemo(() => {
 return collection.products.filter(product => {
 const matchMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
 const matchColor = selectedColors.length === 0 || selectedColors.includes(product.color);
 const matchPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(rangeLabel => {
 const range = priceRanges.find(r => r.label === rangeLabel);
 return range ? range.match(parsePrice(product.price)) : true;
 });
 return matchMaterial && matchColor && matchPrice;
 });
 }, [collection.products, selectedMaterials, selectedColors, selectedPriceRanges]);

 const toggleFilter = (setState: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
 setState(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
 };

 const FilterSidebar = () => (
 <div className="w-full bg-[#111]/40 border border-white/5 p-6 lg:p-8 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
 <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
 <h3 className="text-white text-[11px] tracking-wider uppercase font-medium">Refine Selection</h3>
 {(selectedMaterials.length > 0 || selectedColors.length > 0 || selectedPriceRanges.length > 0) && (
 <button 
 onClick={() => { setSelectedMaterials([]); setSelectedColors([]); setSelectedPriceRanges([]); }}
 className="text-white/40 hover:text-[#c1a077] text-[10px] tracking-widest uppercase transition-all duration-300 border-b border-transparent hover:border-[#c1a077] pb-0.5"
 >
 Reset
 </button>
 )}
 </div>

 {/* Filter Section: Material */}
 <div className="mb-10">
 <h4 className="text-[#c1a077] text-[10px] uppercase tracking-wide mb-5 font-semibold">Material</h4>
 <div className="flex flex-col gap-3.5">
 {allMaterials.map(material => (
 <label key={material} className="flex items-center gap-4 cursor-pointer group">
 <input 
 type="checkbox" 
 className="hidden" 
 checked={selectedMaterials.includes(material)}
 onChange={() => toggleFilter(setSelectedMaterials, material)}
 />
 <div className={`w-4 h-4 border flex items-center justify-center transition-all duration-500 ${selectedMaterials.includes(material) ? 'border-[#c1a077] bg-[#c1a077]/10' : 'border-white/10 group-hover:border-white/30'}`}>
 <div className={`w-2 h-2 bg-[#c1a077] transition-all duration-500 ${selectedMaterials.includes(material) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
 </div>
 <span className={`text-[13px] tracking-wide font-light transition-colors duration-300 ${selectedMaterials.includes(material) ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>{material}</span>
 </label>
 ))}
 </div>
 </div>

 {/* Filter Section: Color */}
 <div className="mb-10">
 <h4 className="text-[#c1a077] text-[10px] uppercase tracking-wide mb-5 font-semibold">Color</h4>
 <div className="flex flex-col gap-3.5">
 {allColors.map(color => (
 <label key={color} className="flex items-center gap-4 cursor-pointer group">
 <input 
 type="checkbox" 
 className="hidden" 
 checked={selectedColors.includes(color)}
 onChange={() => toggleFilter(setSelectedColors, color)}
 />
 <div className={`w-4 h-4 border flex items-center justify-center transition-all duration-500 ${selectedColors.includes(color) ? 'border-[#c1a077] bg-[#c1a077]/10' : 'border-white/10 group-hover:border-white/30'}`}>
 <div className={`w-2 h-2 bg-[#c1a077] transition-all duration-500 ${selectedColors.includes(color) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
 </div>
 <span className={`text-[13px] tracking-wide font-light transition-colors duration-300 ${selectedColors.includes(color) ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>{color}</span>
 </label>
 ))}
 </div>
 </div>

 {/* Filter Section: Price Range */}
 <div className="mb-2">
 <h4 className="text-[#c1a077] text-[10px] uppercase tracking-wide mb-5 font-semibold">Price Range</h4>
 <div className="flex flex-col gap-3.5">
 {priceRanges.map(range => (
 <label key={range.label} className="flex items-center gap-4 cursor-pointer group">
 <input 
 type="checkbox" 
 className="hidden" 
 checked={selectedPriceRanges.includes(range.label)}
 onChange={() => toggleFilter(setSelectedPriceRanges, range.label)}
 />
 <div className={`w-4 h-4 border flex items-center justify-center transition-all duration-500 ${selectedPriceRanges.includes(range.label) ? 'border-[#c1a077] bg-[#c1a077]/10' : 'border-white/10 group-hover:border-white/30'}`}>
 <div className={`w-2 h-2 bg-[#c1a077] transition-all duration-500 ${selectedPriceRanges.includes(range.label) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
 </div>
 <span className={`text-[13px] tracking-wide font-light transition-colors duration-300 ${selectedPriceRanges.includes(range.label) ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>{range.label}</span>
 </label>
 ))}
 </div>
 </div>
 </div>
 );

 return (
 <div ref={containerRef} className="bg-[#0a0a0a] relative min-h-screen">
 {/* 1. Full-Bleed Cinematic Hero */}
 <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden">
 <motion.div 
 style={{ y: heroY, opacity: heroOpacity }}
 className="absolute inset-0 w-full h-full origin-bottom"
 >
 <Image
 src={collection.image}
 alt={collection.name}
 fill
 className="object-cover object-center"
 priority
 />
 {/* Darker Gradient Overlay for Dark Mode */}
 <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/60 to-[#0a0a0a]" />
 </motion.div>

 {/* Hero Content */}
 <div className="absolute inset-0 z-10 flex flex-col justify-between px-6 md:px-16 py-12 md:py-24 max-w-[1600px] mx-auto w-full">
 {/* Navigation */}
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="mt-8 md:mt-0"
 >
 <Link 
 href="/collections" 
 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
 >
 <ArrowLeft size={16} />
 Collections
 </Link>
 </motion.div>

 {/* Title & Description */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.4 }}
 className="max-w-3xl"
 >
 <p className="text-[#c1a077] text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 font-medium">
 The Master Series
 </p>
 <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-6">
 {collection.name}
 </h1>
 <p className="text-white/60 text-base md:text-xl font-light leading-relaxed max-w-xl">
 {collection.description}
 </p>
 </motion.div>
 </div>
 </section>

 {/* 2. Premium Grid Layout with Sidebar */}
 <section className="px-4 md:px-12 lg:px-20 py-16 md:py-24 max-w-[1600px] mx-auto bg-[#0a0a0a] z-20 relative">
 
 {/* Soft Ambient Spotlight Effects in the Background */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#c1a077]/5 blur-[120px] -translate-x-1/2" />
 <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#c1a077]/5 blur-[100px] translate-x-1/2" />
 </div>

 {/* Mobile Filter Toggle */}
 <div className="lg:hidden flex items-center justify-between mb-8 relative z-10">
 <p className="text-white/60 text-sm">{filteredProducts.length} Results</p>
 <button 
 onClick={() => setIsMobileFilterOpen(true)}
 className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:border-[#c1a077] hover:text-[#c1a077] transition-colors"
 >
 <Filter size={14} />
 Filters
 </button>
 </div>

 <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 relative z-10">
 
 {/* Desktop Sidebar */}
 <div className="hidden lg:block w-[280px] flex-shrink-0">
 <div className="sticky top-32">
 <FilterSidebar />
 </div>
 </div>

 {/* Product Grid */}
 <div className="flex-1">
 <div className="hidden lg:flex justify-between items-end mb-8 border-b border-white/10 pb-4">
 <h2 className="text-2xl font-light tracking-tight text-white">Products</h2>
 <p className="text-white/40 text-xs tracking-widest uppercase">{filteredProducts.length} Results</p>
 </div>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
 <AnimatePresence mode="popLayout">
 {filteredProducts.map((product, idx) => (
 <ProductGridCard key={product.id} product={product} index={idx} />
 ))}
 </AnimatePresence>
 </div>
 
 {filteredProducts.length === 0 && (
 <div className="py-32 text-center">
 <p className="text-white/40 text-lg font-light">No products match your selected filters.</p>
 <button 
 onClick={() => { setSelectedMaterials([]); setSelectedColors([]); setSelectedPriceRanges([]); }}
 className="mt-6 inline-block border-b border-[#c1a077] text-[#c1a077] uppercase tracking-widest text-xs pb-1 hover:text-white hover:border-white transition-colors"
 >
 Clear all filters
 </button>
 </div>
 )}
 </div>
 </div>
 </section>

 {/* Mobile Offcanvas Drawer */}
 <AnimatePresence>
 {isMobileFilterOpen && (
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 z-[100] lg:hidden bg-black/80 backdrop-blur-sm"
 >
 <motion.div
 initial={{ x: "100%" }}
 animate={{ x: 0 }}
 exit={{ x: "100%" }}
 transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
 className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[360px] bg-[#0a0a0a] border-l border-white/10 p-6 overflow-y-auto"
 >
 <div className="flex items-center justify-between mb-12">
 <h3 className="text-white text-lg font-light tracking-widest uppercase">Filters</h3>
 <button 
 onClick={() => setIsMobileFilterOpen(false)}
 className="text-white/60 hover:text-white transition-colors"
 >
 <X size={24} />
 </button>
 </div>
 <FilterSidebar />
 
 <button 
 onClick={() => setIsMobileFilterOpen(false)}
 className="w-full mt-12 bg-[#c1a077] text-[#0a0a0a] py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(193,160,119,0.2)]"
 >
 Show {filteredProducts.length} Results
 </button>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}

// Sub-component for individual grid cards to enable per-image scroll parallax
function ProductGridCard({ product, index }: { product: Product, index: number }) {
 const cardRef = useRef(null);
 
 // Create an internal parallax effect for the image panning
 const { scrollYProgress } = useScroll({
 target: cardRef,
 offset: ["start end", "end start"]
 });
 const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

 return (
 <motion.div
 ref={cardRef}
 layout
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 exit={{ opacity: 0, scale: 0.95 }}
 transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
 className="group flex flex-col h-full"
 >
 <Link href={`/product/${product.id}`} className="block h-full cursor-pointer flex flex-col">
 <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(193,160,119,0.15)] transition-shadow duration-700 border border-white/5">
 
 {/* Panning Parallax Image */}
 <motion.div 
 style={{ y: imageY }}
 className="absolute inset-0 w-full h-[120%]"
 >
 <Image
 src={product.image}
 alt={product.name}
 fill
 className="object-cover brightness-90 contrast-125"
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 />
 </motion.div>

 {/* Hover Overlay with "View Details" Pill */}
 <div className="absolute inset-0 bg-[#0a0a0a]/20 hover:bg-[#0a0a0a]/60 transition-colors duration-700 flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100 backdrop-blur-[2px]">
 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-[#c1a077] text-[#0a0a0a] px-8 py-4 flex items-center gap-3 shadow-[0_0_30px_rgba(193,160,119,0.3)] rounded-full">
 <span className="text-sm font-medium tracking-widest uppercase">View Details</span>
 <ArrowUpRight size={18} />
 </div>
 </div>

 {/* Edition Tag */}
 {product.tag && (
 <span className="absolute top-5 left-5 bg-[#c1a077] text-[#0a0a0a] text-[9px] tracking-wider uppercase font-bold px-4 py-2 shadow-[0_0_15px_rgba(193,160,119,0.4)] z-10">
 {product.tag}
 </span>
 )}
 </div>

 {/* Text Details */}
 <div className="px-2 flex-grow flex flex-col justify-between">
 <div>
 <div className="flex items-start justify-between gap-4">
 <div>
 <h3 className="text-lg md:text-xl font-light text-white group-hover:text-[#c1a077] transition-colors duration-300">
 {product.name}
 </h3>
 <p className="text-[10px] tracking-wider uppercase text-white/40 mt-1.5">
 {product.material}
 </p>
 </div>
 <p className="text-base md:text-lg font-medium text-white whitespace-nowrap mt-0.5">
 {product.price}
 </p>
 </div>
 </div>
 <div className="h-px bg-white/10 mt-5 w-0 group-hover:w-full transition-all duration-700 ease-out" />
 </div>
 </Link>
 </motion.div>
 );
}
