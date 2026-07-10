"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function VideoShowcase() {
 const videoRef = useRef<HTMLVideoElement>(null);
 const [isPlaying, setIsPlaying] = useState(true);

 const togglePlay = () => {
 if (!videoRef.current) return;
 if (isPlaying) {
 videoRef.current.pause();
 } else {
 videoRef.current.play();
 }
 setIsPlaying(!isPlaying);
 };

 return (
 <section className="bg-white py-24 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden">
 <div className="max-w-[1400px] mx-auto">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
 >
 <div>
 <p className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-6">
 In Motion
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
 Watch it{" "}
 <span className=" text-neutral-400">Come Alive</span>
 </h2>
 </div>
 <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-xs">
 Experience the craft in motion — from raw timber to finished masterpiece.
 </p>
 </motion.div>

 {/* Video */}
 <motion.div
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
 className="relative w-full aspect-video bg-neutral-900 overflow-hidden group cursor-pointer"
 onClick={togglePlay}
 >
 <video
 ref={videoRef}
 src="/hero.mp4"
 autoPlay
 loop
 muted
 playsInline
 className="w-full h-full object-cover"
 />

 {/* Dark overlay on hover */}
 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

 {/* Play/Pause button */}
 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
 <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
 {isPlaying ? (
 <Pause size={28} className="text-white" fill="white" />
 ) : (
 <Play size={28} className="text-white ml-1" fill="white" />
 )}
 </div>
 </div>

 {/* Bottom label */}
 <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm px-5 py-3 border border-white/10">
 <p className="text-[9px] tracking-wider uppercase text-[#c9a568] mb-0.5">Milan Wood Studio</p>
 <p className="text-white text-sm font-light">The Making of a Masterpiece</p>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
