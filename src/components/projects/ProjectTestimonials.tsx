"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
 {
 quote: "The doors Milan Wood crafted for our penthouse are a conversation piece every single time guests visit. Utterly flawless.",
 author: "Arjun Mehta",
 role: "Residential Client",
 location: "Pune",
 project: "Arjun Villa — Zen Series",
 },
 {
 quote: "As architects, we have extremely high expectations. Milan Wood exceeded them at every stage — from the design consultation to the final install.",
 author: "Priya Subramaniam",
 role: "Principal Architect",
 location: "Bengaluru",
 project: "IndiQube Tech Park",
 },
 {
 quote: "We specified 78 doors for the hotel renovation. The consistency of quality across every single piece was remarkable. Our guests notice the difference.",
 author: "Rajesh Kapoor",
 role: "General Manager",
 location: "Jaipur",
 project: "The Grand Courtyard Hotel",
 },
 {
 quote: "The 10-year warranty gave us confidence, but honestly, seeing the craftsmanship in person made the decision for us. These doors will outlast the building.",
 author: "Meera Krishnan",
 role: "Interior Designer",
 location: "Chennai",
 project: "Sea View Penthouse",
 },
];

export default function ProjectTestimonials() {
 const [current, setCurrent] = useState(0);

 const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
 const next = () => setCurrent((c) => (c + 1) % testimonials.length);

 return (
 <section className="bg-[#0d0d0d] py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-white/10 relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(193,160,119,0.04),transparent_65%)] pointer-events-none" />

 <div className="max-w-[1400px] mx-auto relative z-10">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="text-center mb-16 md:mb-24"
 >
 <p className="text-[#c9a568] text-[10px] md:text-xs tracking-widest uppercase mb-6 font-medium">
 Client Voices
 </p>
 <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.1]">
 What Our{" "}
 <span className=" text-white/50">Clients Say</span>
 </h2>
 </motion.div>

 {/* Testimonial Carousel */}
 <div className="max-w-4xl mx-auto">
 <div className="relative min-h-[260px] flex items-center">
 <AnimatePresence mode="wait">
 <motion.div
 key={current}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
 className="text-center w-full"
 >
 <div className="text-[#c9a568] text-6xl font-serif leading-none mb-8 select-none">&ldquo;</div>

 <blockquote className="text-white/70 text-lg md:text-2xl font-light leading-[1.7] mb-10 tracking-wide">
 {testimonials[current].quote}
 </blockquote>

 <div className="h-px w-12 bg-[#c9a568]/40 mx-auto mb-6" />

 <div>
 <p className="text-white text-sm font-medium tracking-wide mb-1">
 {testimonials[current].author}
 </p>
 <p className="text-white/40 text-xs tracking-wider uppercase mb-1">
 {testimonials[current].role} — {testimonials[current].location}
 </p>
 <p className="text-[#c9a568]/60 text-[10px] tracking-wider uppercase">
 {testimonials[current].project}
 </p>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* Controls */}
 <div className="flex items-center justify-center gap-6 mt-12">
 <button
 onClick={prev}
 className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:border-[#c9a568] hover:text-[#c9a568] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a568]"
 aria-label="Previous testimonial"
 >
 <ChevronLeft size={18} />
 </button>

 {/* Dots */}
 <div className="flex gap-2">
 {testimonials.map((_, i) => (
 <button
 key={i}
 onClick={() => setCurrent(i)}
 className={`transition-all duration-500 h-1.5 ${i === current ? "w-8 bg-[#c9a568]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
 aria-label={`Go to testimonial ${i + 1}`}
 />
 ))}
 </div>

 <button
 onClick={next}
 className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:border-[#c9a568] hover:text-[#c9a568] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a568]"
 aria-label="Next testimonial"
 >
 <ChevronRight size={18} />
 </button>
 </div>
 </div>
 </div>
 </section>
 );
}
