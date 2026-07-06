'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const SERVICES = [
  {
    id: 0,
    title: 'CUSTOMIZED SYSTEMS',
    button: 'DESIGN WITH US',
    image: '/door_categories.png'
  },
  {
    id: 1,
    title: 'CNC-ENGINEERED DESIGNS',
    button: 'VIEW DESIGNS',
    image: '/sun_door_cnc.png'
  },
  {
    id: 2,
    title: 'TIMELESS WOODWORK',
    button: 'SHOP COLLECTION',
    image: '/door_cat_4.png'
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [bgIdx, setBgIdx] = useState<number>(1);
  const { ref, inView } = useInView(0.2);

  const handleActivate = (idx: number) => {
    setHoveredIdx(idx);
    setBgIdx(idx);
  };

  return (
    <section className="bg-white py-16 md:py-24 pb-20 md:pb-32">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="transition-all duration-1000 ease-out"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 className="text-center text-lg md:text-2xl font-medium tracking-[0.2em] uppercase text-neutral-900 mb-10 md:mb-16 px-4 md:px-8"> Crafting Premium Spaces </h2>
        <div className="relative w-full h-[820px] md:h-[800px] overflow-hidden">
          
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
          <div className="absolute inset-0 bg-black/30 md:bg-black/20 pointer-events-none" />

          {/* 3 Columns overlay */}
          <div className="absolute inset-0 flex flex-col md:flex-row" onMouseLeave={() => setHoveredIdx(null)}>
            {SERVICES.map((service, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;

              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => handleActivate(idx)}
                  onClick={() => handleActivate(idx)}
                  animate={{ flex: isHovered ? 2.6 : 1 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  role="button"
                  tabIndex={0}
                  aria-label={service.title}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleActivate(idx)}
                  className="relative flex flex-col justify-center md:justify-end p-6 md:p-12 border-b md:border-b-0 md:border-r border-white/30 last:border-b-0 md:last:border-r-0 cursor-pointer overflow-hidden group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {/* Dark overlay for non-hovered columns ONLY when something is actively hovered */}
                  <div 
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-700 pointer-events-none ${
                      isAnyHovered && !isHovered ? 'opacity-100' : 'opacity-0'
                    }`} 
                  />

                  {/* Content */}
                  <motion.div
                    animate={{ y: isHovered ? -10 : 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="relative z-10 flex flex-col items-center md:items-center text-center text-white"
                  >
                    <h3 className="text-base md:text-xl tracking-[0.2em] uppercase font-bold mb-4 md:mb-8">
                      {service.title}
                    </h3>
                    <button
                      className={`border px-6 md:px-8 py-2 md:py-3 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        isHovered
                          ? 'border-white bg-white text-black'
                          : 'border-white/50 text-white/80 md:hover:border-white md:hover:text-white'
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
