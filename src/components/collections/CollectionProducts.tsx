"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Collection, Product } from "@/data/collections";
import Link from "next/link";
import { useRef } from "react";

export default function CollectionProducts({ collection }: { collection: Collection }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax for the hero image
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] relative">
      {/* 1. Full-Bleed Cinematic Hero */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
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
        <div className="absolute inset-0 z-10 flex flex-col justify-between px-6 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Link 
              href="/collections" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
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
            <p className="text-[#c1a077] text-xs md:text-sm tracking-[0.4em] uppercase mb-4 md:mb-6 font-medium">
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

      {/* 2. Premium Standard Grid Layout (Dark Mode + Micro-Interactions) */}
      <section className="px-4 md:px-12 lg:px-20 py-24 md:py-32 max-w-7xl mx-auto bg-[#0a0a0a] z-20 relative overflow-hidden">
        
        {/* Soft Ambient Spotlight Effects in the Background */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#c1a077]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#c1a077]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
          <AnimatePresence mode="popLayout">
            {collection.products.map((product, idx) => (
              <ProductGridCard key={product.id} product={product} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </section>
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
      className="group cursor-pointer flex flex-col h-full"
    >
      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-900 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(193,160,119,0.15)] transition-shadow duration-700 border border-white/5">
        
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
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-[#c1a077] text-[#0a0a0a] px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(193,160,119,0.3)]">
            <span className="text-sm font-medium tracking-widest uppercase">View Details</span>
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* Edition Tag */}
        {product.tag && (
          <span className="absolute top-5 left-5 bg-[#c1a077] text-[#0a0a0a] text-[9px] tracking-[0.25em] uppercase font-bold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(193,160,119,0.4)] z-10">
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
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1.5">
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
    </motion.div>
  );
}
