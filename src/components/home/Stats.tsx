'use client';

import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';

function AnimatedCounter({ end, duration = 2500, suffix = "", prefix = "", inView }: { end: number, duration?: number, suffix?: string, prefix?: string, inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="bg-[#f9f9f9] py-32 px-4 md:px-8 font-sans border-y border-neutral-200/50">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-[1400px] mx-auto flex flex-col items-center text-center transition-all duration-1000 ease-out"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 className="text-base md:text-xl tracking-[0.25em] uppercase font-medium text-neutral-900 mb-8">
          The World's Leading Custom Woodworking Studio
        </h2>
        
        <p className="max-w-4xl text-neutral-500 leading-relaxed text-sm md:text-base mb-24 md:mb-32">
          Handling a portfolio of premium bespoke furniture, Milan Wood offers unparalleled artisanal craftsmanship and guidance in all key sectors including Custom Design, Raw Material Sourcing, Precision Handcrafting, and Global Delivery.
        </p>

        {/* Stats Container - Desktop (Pyramid layout) */}
        <div className="hidden md:flex w-full justify-between items-center relative h-[280px]">

          {/* Column 1 */}
          <div className="flex-1 flex flex-col items-center justify-end h-full pb-4">
            <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
              <AnimatedCounter inView={inView} end={50} suffix="+" />
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
              Master Woodworkers
            </p>
          </div>

          <div className="w-px bg-neutral-300 h-24 self-end mb-12" />

          {/* Column 2 */}
          <div className="flex-1 flex flex-col items-center justify-center h-full">
            <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
              <AnimatedCounter inView={inView} end={240} suffix="+" />
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
              Bespoke Projects Delivered
            </p>
          </div>

          <div className="w-px bg-neutral-300 h-40 self-center" />

          {/* Column 3 (Center - Double Stat) */}
          <div className="flex-1 flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center">
              <h4 className="text-5xl font-light text-neutral-900 mb-4 tracking-tight">
                <AnimatedCounter inView={inView} end={75} suffix="+" />
              </h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
                Years Combined Experience
              </p>
            </div>
            <div className="flex flex-col items-center pb-4">
              <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
                <AnimatedCounter inView={inView} end={12} prefix="$" suffix="M+" />
              </h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
                Portfolio of Crafted Pieces
              </p>
            </div>
          </div>

          <div className="w-px bg-neutral-300 h-40 self-center" />

          {/* Column 4 */}
          <div className="flex-1 flex flex-col items-center justify-center h-full">
            <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
              <AnimatedCounter inView={inView} end={21} />
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
              Global Design Awards
            </p>
          </div>

          <div className="w-px bg-neutral-300 h-24 self-end mb-12" />

          {/* Column 5 */}
          <div className="flex-1 flex flex-col items-center justify-end h-full pb-4">
            <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
              <AnimatedCounter inView={inView} end={6500} suffix="+" />
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
              Hours of Crafting per Year
            </p>
          </div>

        </div>

        {/* Stats Container - Mobile (Stacked) */}
        <div className="flex md:hidden flex-col gap-12 w-full">
          <div className="flex flex-col items-center">
            <h4 className="text-4xl font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={inView} end={50} suffix="+" />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Master Woodworkers</p>
          </div>
          <div className="w-12 h-px bg-neutral-300 mx-auto" />
          <div className="flex flex-col items-center">
            <h4 className="text-4xl font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={inView} end={240} suffix="+" />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Bespoke Projects</p>
          </div>
          <div className="w-12 h-px bg-neutral-300 mx-auto" />
          <div className="flex flex-col items-center">
            <h4 className="text-[2.75rem] font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={inView} end={75} suffix="+" />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Years Experience</p>
          </div>
          <div className="w-12 h-px bg-neutral-300 mx-auto" />
          <div className="flex flex-col items-center">
            <h4 className="text-4xl font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={inView} end={21} />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Global Awards</p>
          </div>
          <div className="w-12 h-px bg-neutral-300 mx-auto" />
          <div className="flex flex-col items-center">
            <h4 className="text-4xl font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={inView} end={6500} suffix="+" />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Hours of Crafting</p>
          </div>
        </div>

      </div>
    </section>
  );
}
