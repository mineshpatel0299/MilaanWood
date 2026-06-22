"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const categories = [
  {
    id: 1,
    title: 'Dining Tables',
    subtitle: 'Heart of the home',
    description: '"Gather around pieces that tell a story. Handcrafted solid wood tables built for generations of memories."',
    image: '/cat_table.png'
  },
  {
    id: 2,
    title: 'Lounge Chairs',
    subtitle: 'Relaxation redefined',
    description: '"Ergonomically designed for comfort without compromising our signature minimalist wabi-sabi aesthetic."',
    image: '/cat_chair.png'
  },
  {
    id: 3,
    title: 'Bed Frames',
    subtitle: 'Serene slumber',
    description: '"Transform your bedroom into a tranquil sanctuary with our low-profile, sturdy raw wood bed frames."',
    image: '/cat_bed.png'
  },
  {
    id: 4,
    title: 'Coffee Tables',
    subtitle: 'Center of attention',
    description: '"Unique raw edge designs that bring the raw beauty of nature directly into your living room."',
    image: '/cat_coffee.png'
  },
  {
    id: 5,
    title: 'Cabinets',
    subtitle: 'Elegant storage',
    description: '"Conceal your clutter with beautiful wooden storage solutions that double as striking accent pieces."',
    image: '/cat_cabinet.png'
  }
];

export default function Categories() {
  const [expandedId, setExpandedId] = useState(categories[0].id);
  const [orderedCats, setOrderedCats] = useState(categories);
  const { ref: sectionRef, inView: sectionInView } = useInView(0.1);

  const activeCategory = categories.find(c => c.id === expandedId) || null;

  const handleCardClick = (id: number) => {
    if (id === expandedId) return;
    
    setExpandedId(id);
    setOrderedCats(prev => {
      const clickedItem = prev.find(c => c.id === id);
      if (!clickedItem) return prev;
      const otherItems = prev.filter(c => c.id !== id);
      return [...otherItems, clickedItem];
    });
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#fafafa] text-black min-h-screen py-24 flex items-center justify-center font-sans overflow-hidden"
    >
      
      <div className="w-full max-w-[1400px] px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        
        {/* Left Column: Number & Rotated Title */}
        <div
          className="hidden md:flex flex-col items-center justify-center gap-32 w-[10%] transition-all duration-700 ease-out"
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateX(0)' : 'translateX(-20px)',
          }}
        >
          <div className="text-[11px] font-bold tracking-[0.2em] text-neutral-900 w-12 text-center transition-opacity duration-300">
            {activeCategory ? `0${categories.findIndex(c => c.id === expandedId) + 1} / 0${categories.length}` : ''}
          </div>
          <div className="h-[200px] flex items-center justify-center">
            <div className="text-sm font-semibold tracking-[0.4em] uppercase text-neutral-900 -rotate-90 whitespace-nowrap">
              Categories
            </div>
          </div>
        </div>

        {/* Middle Column: Accordion Images */}
        <div className="flex flex-row items-end justify-start md:justify-center gap-4 w-full md:w-[50%] h-[600px]">
          {orderedCats.map((cat) => {
            const isExpanded = cat.id === expandedId;
            return (
              <motion.div 
                layout
                key={cat.id} 
                transition={{ 
                  layout: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } 
                }}
                className={`relative cursor-pointer overflow-hidden rounded-sm ${
                  isExpanded 
                    ? 'shadow-2xl z-10' 
                    : 'opacity-75 hover:opacity-100 z-0'
                }`}
                style={{
                  height: isExpanded ? '100%' : '160px',
                  width: isExpanded ? '320px' : '80px',
                }}
                onClick={() => handleCardClick(cat.id)}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
                {!isExpanded && <div className="absolute inset-0 bg-black/5 transition-colors hover:bg-transparent" />}
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Text Details */}
        <div className="flex flex-col justify-center w-full md:w-[40%] pl-0 md:pl-20 h-[600px]">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div 
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="max-w-md flex flex-col justify-center h-full"
              >
                <div className="mb-12">
                  <motion.h2 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-900 mb-2"
                  >
                    {activeCategory.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-[11px] italic font-serif text-neutral-500"
                  >
                    {activeCategory.subtitle}
                  </motion.p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-2 bottom-2 w-px bg-neutral-200" />
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-3xl md:text-[2.5rem] font-light leading-[1.3] text-neutral-800 tracking-tight mb-16"
                  >
                    {activeCategory.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 hover:text-neutral-500 transition-colors duration-300 group">
                    Explore Collection
                    <div className="w-8 h-px bg-neutral-900 group-hover:w-12 group-hover:bg-neutral-500 transition-all duration-500 ease-out relative">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-px border-t border-r border-current w-1.5 h-1.5 rotate-45" />
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
