"use client";

import { useState, useEffect } from 'react';
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
  const [orderedCats, setOrderedCats] = useState(categories);
  const [expandedId, setExpandedId] = useState(categories[0].id);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView(0.1);

  const activeCategory = categories.find(c => c.id === expandedId) || null;

  const handleCardClick = (id: number) => {
    if (isAnimating || id === expandedId) return;
    
    setIsAnimating(true);
    
    // Step 1: Shrink the current expanded card immediately
    setExpandedId(-1);

    // Step 2: Reorder items to slide the clicked one to the 1st position AFTER shrink finishes
    setTimeout(() => {
      setOrderedCats(prev => {
        const idx = prev.findIndex(c => c.id === id);
        // Rotate the array so the clicked item becomes the last element
        const elementsToMove = prev.slice(0, idx + 1);
        const remainingElements = prev.slice(idx + 1);
        return [...remainingElements, ...elementsToMove];
      });
      
      // Step 3: Expand the new card vertically STRICTLY AFTER it has finished sliding
      setTimeout(() => {
        setExpandedId(id);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 450); // Wait for expansion to finish before unlocking
      }, 500); // 500ms delay to ensure the slide is 100% complete before expanding
    }, 450); // 450ms delay to ensure shrink is fully complete
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
                  layout: { duration: 0.4, ease: "easeInOut" }
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
        <div className="flex flex-col justify-center w-full md:w-[40%] pl-0 md:pl-12 h-[300px]">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div 
                key={activeCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-sm"
              >
                <h2 className="text-sm font-bold text-neutral-900 mb-1">{activeCategory.title}</h2>
                <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-12">{activeCategory.subtitle}</p>
                
                <p className="text-3xl font-medium leading-[1.4] text-neutral-900 tracking-tight">
                  {activeCategory.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
