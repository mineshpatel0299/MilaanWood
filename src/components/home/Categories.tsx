"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const categories = [
  {
    id: 1,
    title: 'Luxury Pivot Doors',
    subtitle: 'Grand entrances',
    description: '"Sleek, contemporary premium pivot door systems designed to elevate grand entrances with refined aesthetics."',
    image: '/door_categories.png'
  },
  {
    id: 2,
    title: 'Contemporary Doors',
    subtitle: 'Modern elegance',
    description: '"A stunning statement of detail and durability, combining advanced manufacturing with skilled craftsmanship."',
    image: '/door_cat_2.png'
  },
  {
    id: 3,
    title: 'Sliding Doors',
    subtitle: 'Fluid spaces',
    description: '"Fluid and functional sliding solutions that segment premium spaces while maintaining visual distinctiveness."',
    image: '/door_cat_3.png'
  },
  {
    id: 4,
    title: 'French Doors',
    subtitle: 'Garden gateways',
    description: '"Elegant wooden door systems that bridge spaces beautifully, delivering precision and design intelligence."',
    image: '/door_cat_4.png'
  },
  {
    id: 5,
    title: 'Heritage Doors',
    subtitle: 'Timeless craft',
    description: '"Custom-built door systems featuring timeless woodwork and craftsmanship rooted in a deep understanding of materials."',
    image: '/door_cat_5.png'
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
      className="bg-[#fafafa] text-black min-h-screen py-16 md:py-24 flex items-center justify-center font-sans overflow-hidden"
    >
      
      <div className="w-full max-w-[1400px] px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-24">
        
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

        {/* Mobile Title (visible only on small screens) */}
        <div className="md:hidden flex items-center justify-between w-full px-4 mb-4">
           <div className="text-[11px] font-bold tracking-[0.2em] text-neutral-900">
            {activeCategory ? `0${categories.findIndex(c => c.id === expandedId) + 1} / 0${categories.length}` : ''}
          </div>
          <div className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-900">
            Categories
          </div>
        </div>

        {/* Middle Column: Accordion Images - Desktop Only */}
        <div className="hidden md:flex flex-row items-end justify-center gap-4 w-[50%] h-[600px]"> {orderedCats.map((cat) => { const isExpanded = cat.id === expandedId; return ( <motion.div layout key={cat.id} transition={{ layout: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }} className={`relative cursor-pointer overflow-hidden origin-bottom ${ isExpanded ? 'shadow-2xl z-10 w-full h-full' : 'opacity-75 hover:opacity-100 z-0 w-[80px] h-[160px]' }`} onClick={() => handleCardClick(cat.id)} > <Image src={cat.image} alt={cat.title} fill className="object-cover"
                />
                {!isExpanded && <div className="absolute inset-0 bg-black/5 transition-colors hover:bg-transparent" />}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Column: Vertical Accordion - Mobile Only */}
        <div className="flex md:hidden flex-col gap-2 w-full h-[450px]"> {categories.map((cat) => { const isExpanded = cat.id === expandedId; return ( <motion.div layout key={cat.id} transition={{ layout: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }} className={`relative cursor-pointer overflow-hidden ${ isExpanded ? 'shadow-2xl z-10 w-full flex-1' : 'opacity-80 hover:opacity-100 z-0 w-full h-[60px]' }`} onClick={() => handleCardClick(cat.id)} > <Image src={cat.image} alt={cat.title} fill className="object-cover"
                />
                <div className={`absolute inset-0 transition-colors duration-500 ${isExpanded ? 'bg-black/10' : 'bg-black/50'}`} />
                
                {/* Title overlay visible when collapsed */}
                <div className={`absolute inset-0 flex items-center px-6 transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">
                    0{cat.id} &nbsp;&nbsp;&nbsp; {cat.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Text Details */}
        <div className="flex flex-col justify-center w-full md:w-[40%] px-4 md:pl-20 min-h-[300px] md:h-[600px] mt-8 md:mt-0">
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
                <div className="mb-8 md:mb-12">
                  <motion.h2 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-neutral-900 mb-2"
                  >
                    {activeCategory.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-[11px] md:text-xs italic text-neutral-500"
                  >
                    {activeCategory.subtitle}
                  </motion.p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 md:-left-8 top-2 bottom-2 w-px bg-neutral-200" />
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-2xl md:text-[2.5rem] font-light leading-[1.3] text-neutral-800 tracking-tight mb-10 md:mb-16"
                  >
                    {activeCategory.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <button className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 hover:text-neutral-500 transition-colors duration-300 group">
                    Explore Collection
                    <div className="w-8 md:w-12 h-px bg-neutral-900 group-hover:w-12 md:group-hover:w-16 group-hover:bg-neutral-500 transition-all duration-500 ease-out relative">
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
