"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const videos = [
  { id: 1, title: "The Making Process", image: "/door_philosophy.png" },
  { id: 2, title: "Grand Entrances", image: "/door_featured.png" },
  { id: 3, title: "Modern Craftsmanship", image: "/contemporary_door.png" },
  { id: 4, title: "Bespoke Details", image: "/sun_door_cnc.png" },
];

export default function VideoCarousel() {
  const [active, setActive] = useState(0);

  const handleDotClick = (targetIndex: number) => {
    const currentArrayIdx = ((active % videos.length) + videos.length) % videos.length;
    let diff = targetIndex - currentArrayIdx;
    
    // Find the shortest path for infinite wrap
    if (diff > videos.length / 2) diff -= videos.length;
    else if (diff < -videos.length / 2) diff += videos.length;
    
    setActive(active + diff);
  };

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden border-b border-neutral-200">
      <div className="w-full relative h-[50vh] md:h-[65vh]">
        {[-2, -1, 0, 1, 2].map((offset) => {
          const index = active + offset;
          const arrayIndex = ((index % videos.length) + videos.length) % videos.length;
          const video = videos[arrayIndex];
          
          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 w-[85vw] md:w-[65vw] max-w-[1000px] aspect-[4/3] md:aspect-video overflow-hidden cursor-pointer shadow-xl"
              initial={{
                x: `calc(-50% + ${offset * 100}% + ${offset * 32}px)`,
                y: "-50%",
                scale: 0.95,
                opacity: 0,
                filter: "grayscale(100%)",
              }}
              animate={{
                x: `calc(-50% + ${offset * 100}% + ${offset * 32}px)`,
                y: "-50%",
                scale: offset === 0 ? 1 : 0.95,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                filter: offset === 0 ? "grayscale(0%)" : "grayscale(100%)",
                zIndex: offset === 0 ? 10 : 5,
              }}
              transition={{
                duration: 0.7,
                ease: [0.32, 0.72, 0, 1],
              }}
              onClick={() => setActive(index)}
            >
              <Image 
                src={video.image}
                alt={video.title}
                fill
                className="object-cover"
              />
              
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 bg-black/10 ${
                  offset === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                <button className="w-16 h-16 md:w-[84px] md:h-[84px] bg-white flex items-center justify-center mb-5 hover:scale-110 transition-transform shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <Play fill="black" size={32} className="text-black ml-2" />
                </button>
                <div className="bg-[#1a1a1a] text-white px-6 py-2.5 text-[15px] font-medium shadow-lg">
                  {video.title}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="flex justify-center items-center gap-3 mt-10 md:mt-16"> {videos.map((_, i) => { const currentArrayIdx = ((active % videos.length) + videos.length) % videos.length; return ( <button key={i} onClick={() => handleDotClick(i)} className={`h-2.5 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${ i === currentArrayIdx ?"bg-black w-10" : "bg-neutral-300 hover:bg-neutral-400 w-2.5"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
