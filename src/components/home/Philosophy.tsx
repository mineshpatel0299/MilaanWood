'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

export default function Philosophy() {
  const { ref: sectionRef, inView } = useInView(0.1);
  const { ref: textRef, inView: textInView } = useInView(0.1);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#111] text-white py-32 px-8 md:px-16 font-sans"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-24">

        {/* Image — fade + slight x slide from left */}
        <div
          className="md:w-1/2 relative h-[800px] w-full overflow-hidden rounded-sm transition-all duration-1000 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-32px)',
          }}
        >
          <Image
            src="/philosophy_main.png"
            alt="Woodworker hands"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          {/* subtle shimmer overlay on hover */}
          <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-700 pointer-events-none" />
        </div>

        {/* Text block — staggered fade up */}
        <div
          ref={textRef as React.RefObject<HTMLDivElement>}
          className="md:w-1/2 flex flex-col justify-center"
        >
          <p
            className="text-xs tracking-[0.4em] text-neutral-500 uppercase mb-8 transition-all duration-700 ease-out"
            style={{
              opacity: textInView ? 1 : 0,
              transform: textInView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms',
            }}
          >
            Our Philosophy
          </p>

          <h2
            className="text-5xl md:text-7xl font-light leading-[1.1] mb-12 tracking-tight transition-all duration-700 ease-out"
            style={{
              opacity: textInView ? 1 : 0,
              transform: textInView ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '220ms',
            }}
          >
            Perfection in <br />
            <span className="italic font-serif text-neutral-400">imperfection.</span>
          </h2>

          <p
            className="text-lg text-neutral-300 leading-relaxed max-w-lg mb-12 transition-all duration-700 ease-out"
            style={{
              opacity: textInView ? 1 : 0,
              transform: textInView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '340ms',
            }}
          >
            We embrace the wabi-sabi philosophy, finding true beauty in the natural flaws, cracks, and unique grain patterns of raw wood. Each piece is not just furniture, but a living testament to time, nature, and human touch.
          </p>

          <button
            className="self-start border-b border-white/30 pb-2 hover:text-neutral-400 hover:border-neutral-400 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-semibold hover:pb-3"
            style={{
              opacity: textInView ? 1 : 0,
              transitionDelay: '460ms',
              transition: 'opacity 700ms ease-out 460ms, color 300ms, border-color 300ms, padding-bottom 300ms',
            }}
          >
            Read our story
          </button>
        </div>
      </div>
    </section>
  );
}
