'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function AboutUs() {
  const { ref: sectionRef, inView } = useInView(0.1);
  const { ref: textRef, inView: textInView } = useInView(0.2);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-white text-black py-32 px-8 md:px-16 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left: Text Content */}
        <div ref={textRef as React.RefObject<HTMLDivElement>} className="md:w-5/12 flex flex-col justify-center">
          <div className="mb-12">
            <h2 
              className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-4 transition-all duration-700 ease-out"
              style={{ opacity: textInView ? 1 : 0, transform: textInView ? 'translateY(0)' : 'translateY(20px)' }}
            >
              Our Story
            </h2>
            <h3 
              className="text-4xl md:text-6xl font-light leading-[1.15] text-neutral-900 tracking-tight transition-all duration-700 ease-out"
              style={{ opacity: textInView ? 1 : 0, transform: textInView ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '100ms' }}
            >
              Rooted in <span className="italic font-serif text-neutral-400">tradition.</span>
            </h3>
          </div>
          
          <div className="relative pl-8">
            {/* Accent Line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" />
            
            <p 
              className="text-lg text-neutral-600 leading-relaxed mb-8 transition-all duration-700 ease-out"
              style={{ opacity: textInView ? 1 : 0, transform: textInView ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '200ms' }}
            >
              Founded by a collective of passionate artisans, Milan Wood is a dedication to the slow craft of furniture making. We source our timber responsibly, letting the natural imperfections dictate the final form of every piece.
            </p>
            
            <p 
              className="text-lg text-neutral-600 leading-relaxed mb-12 transition-all duration-700 ease-out"
              style={{ opacity: textInView ? 1 : 0, transform: textInView ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '300ms' }}
            >
              Our workshop in the quiet hills is where raw, untamed nature meets precise human engineering—resulting in functional art designed to outlast generations.
            </p>
          </div>
        </div>

        {/* Right: Cutout Image */}
        <div 
          className="md:w-7/12 relative h-[700px] w-full rounded-[2rem] overflow-hidden bg-neutral-100 transition-all duration-1000 ease-out"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <Image
            src="/hero-bg-2.png" // Reusing a beautiful image
            alt="Artisan workshop"
            fill
            className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.03]"
          />

          {/* Top-Left Cutout (Year) */}
          <div className="absolute top-0 left-0 bg-white px-8 py-5 rounded-br-[2rem] z-10">
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-900">
              EST. 2018
            </span>
            {/* Inverted curves */}
            <svg className="absolute top-0 -right-[2rem] w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
            </svg>
            <svg className="absolute left-0 -bottom-[2rem] w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
            </svg>
          </div>

          {/* Bottom-Right Cutout (Action) */}
          <div className="absolute bottom-0 right-0 bg-white pl-8 pt-6 pr-6 pb-6 rounded-tl-[2rem] z-10 group cursor-pointer">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
              Meet the Makers <ArrowUpRight size={16} className="text-neutral-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            {/* Inverted curves */}
            <svg className="absolute bottom-0 -left-[2rem] w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
            </svg>
            <svg className="absolute -top-[2rem] right-0 w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
