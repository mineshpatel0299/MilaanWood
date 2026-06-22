'use client';

import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function CTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="bg-white px-2 md:px-6 pb-16">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative max-w-[1536px] w-full mx-auto bg-[#1a1a1a] text-white rounded-2xl px-8 md:px-24 py-16 md:py-24 flex flex-col items-center text-center overflow-hidden transition-all duration-1000 ease-out"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'scale(1)' : 'scale(0.98)' }}
      >
        {/* Subtle background texture/gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-[3.5rem] font-light leading-[1.1] tracking-tight mb-6">
            Ready to bring <span className="italic font-serif text-neutral-400">nature</span> home?
          </h2>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Book a consultation with our design team to discuss custom dimensions, finishes, or to commission a completely bespoke piece.
          </p>
          
          <button className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-neutral-200 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] group">
            Start a Project
            <div className="bg-black text-white rounded-full p-2 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={16} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
