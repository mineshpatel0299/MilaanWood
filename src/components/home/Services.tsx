'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const SERVICES = [
  {
    id: 0,
    title: 'CUSTOM DESIGN',
    button: 'DESIGN WITH US',
    image: '/hero-bg.png'
  },
  {
    id: 1,
    title: 'RAW MATERIALS',
    button: 'VIEW WOOD TYPES',
    image: '/philosophy_main.png'
  },
  {
    id: 2,
    title: 'READY TO SHIP',
    button: 'SHOP COLLECTION',
    image: '/product_1.png'
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [bgIdx, setBgIdx] = useState<number>(1); // Default background image
  const { ref, inView } = useInView(0.2);

  return (
    <section className="bg-white py-24 pb-32">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="transition-all duration-1000 ease-out"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 className="text-center text-xl md:text-2xl font-medium tracking-[0.2em] uppercase text-neutral-900 mb-16">
          The Best Investment You'll Ever Make
        </h2>

        {/* Full width container with rounded corners */}
        <div className="relative w-full max-w-[1536px] mx-auto h-[600px] md:h-[700px] rounded-[2rem] overflow-hidden">
          
          {/* Background Images */}
          <AnimatePresence initial={false}>
            <motion.div
              key={bgIdx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={SERVICES[bgIdx].image}
                alt={SERVICES[bgIdx].title}
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Base Dark Overlay so text is readable */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* 3 Columns overlay */}
          <div className="absolute inset-0 flex" onMouseLeave={() => setHoveredIdx(null)}>
            {SERVICES.map((service, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;

              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => {
                    setHoveredIdx(idx);
                    setBgIdx(idx);
                  }}
                  animate={{ flex: isHovered ? 2 : 1 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="relative flex flex-col justify-end p-8 md:p-12 border-r border-white/30 last:border-r-0 cursor-pointer overflow-hidden group"
                >
                  {/* Dark overlay for non-hovered columns ONLY when something is actively hovered */}
                  <div 
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-700 pointer-events-none ${
                      isAnyHovered && !isHovered ? 'opacity-100' : 'opacity-0'
                    }`} 
                  />

                  {/* Content */}
                  <motion.div
                    animate={{ y: isHovered ? -24 : 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="relative z-10 flex flex-col items-center text-center text-white"
                  >
                    <h3 className="text-lg md:text-xl tracking-[0.2em] uppercase font-bold mb-8">
                      {service.title}
                    </h3>
                    <button 
                      className={`border px-8 py-3 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                        isHovered 
                          ? 'border-white bg-white text-black' 
                          : 'border-white/50 text-white/80 hover:border-white hover:text-white'
                      }`}
                    >
                      {service.button}
                    </button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
