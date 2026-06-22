"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import Navbar from '../Navbar';

const CAROUSEL_IMAGES = [
  "/hero-bg.png",
  "/hero-bg-2.png",
  "/hero-bg-3.png"
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => setCurrentIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const goToPrev = () => setCurrentIdx((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const goToSlide = (idx: number) => setCurrentIdx(idx);

  return (
    <div className="bg-white p-3 md:p-5 w-full min-h-screen">
      <div className="relative h-[calc(100vh-1.5rem)] md:h-[calc(100vh-2.5rem)] w-full overflow-hidden bg-neutral-900 font-sans rounded-[2rem]">
      {CAROUSEL_IMAGES.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`Modern wooden interior ${idx + 1}`}
          fill
          className={`object-cover object-center transition-opacity duration-[1200ms] ease-in-out ${
            idx === currentIdx ? 'opacity-90 scale-100' : 'opacity-0'
          }`}
          style={{
            transform: idx === currentIdx ? 'scale(1.03)' : 'scale(1)',
            transition: 'opacity 1200ms ease-in-out, transform 6000ms ease-out',
          }}
          priority={idx === 0}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      <Navbar />

      {/* Main Content — staggered entrance */}
      <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-16 z-10 text-white max-w-3xl ml-8">

        {/* Label */}
        <p
          className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '100ms',
          }}
        >
          Handcrafted wooden furniture
        </p>

        {/* Heading */}
        <h1
          className="text-6xl md:text-[5rem] font-medium leading-[1.1] mb-12 tracking-tight transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '220ms',
          }}
        >
          Raw Wood.<br />
          <span className="font-light text-neutral-100">Human Touch.</span>
        </h1>

        {/* Divider */}
        <div
          className="h-px bg-white/30 mb-8 transition-all duration-700 ease-out"
          style={{
            width: mounted ? '80%' : '0%',
            transitionDelay: '360ms',
          }}
        />

        {/* Stats */}
        <div
          className="flex items-start gap-16 mb-12 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '440ms',
          }}
        >
          <div>
            <div className="text-2xl font-bold mb-2">133.</div>
            <p className="text-sm text-neutral-300 max-w-[220px] leading-relaxed">
              Hours to craft a single table. From raw wood to final polish.
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2 text-neutral-300">53</div>
            <p className="text-sm text-neutral-300 max-w-[220px] leading-relaxed">
              Unique handmade table designs in our collection.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '560ms',
          }}
        >
          <button className="flex items-center gap-4 bg-[#8b3d30] hover:bg-[#7a3428] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
            Explore
            <div className="bg-white text-neutral-900 rounded-full p-1.5 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={14} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={goToPrev}
          className="w-10 h-10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-black/40 transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={goToNext}
          className="w-10 h-10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-black/40 transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom Right CTA */}
      <div
        className="absolute bottom-0 right-0 z-10 bg-white rounded-tl-[2rem] px-8 py-6 transition-all duration-700 ease-out"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '700ms',
        }}
      >
        {/* Inverted curve for bottom-left of CTA */}
        <svg className="absolute bottom-0 -left-[2rem] w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
          <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
        </svg>

        {/* Inverted curve for top-right of CTA */}
        <svg className="absolute -top-[2rem] right-0 w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
          <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
        </svg>

        <Link
          href="#"
          className="flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors tracking-wide group relative z-10"
        >
          Explore tables
          <ArrowUpRight size={16} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {CAROUSEL_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`rounded-full shadow-sm transition-all duration-500 cursor-pointer ${
              idx === currentIdx
                ? 'bg-white w-6 h-2.5'
                : 'bg-white/40 hover:bg-white/60 w-2.5 h-2.5'
            }`}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
