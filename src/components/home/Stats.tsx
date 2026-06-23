'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Stats() {
  const [hasInView, setHasInView] = useState(false);

  return (
    <section className="bg-[#f9f9f9] py-16 md:py-32 px-4 md:px-8 font-sans border-y border-neutral-200/50 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setHasInView(true)}
        className="max-w-[1400px] mx-auto flex flex-col items-center text-center"
      >
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-sm md:text-xl tracking-[0.2em] md:tracking-[0.25em] uppercase font-medium text-neutral-900 mb-6 md:mb-8"
        >
          The World's Leading Custom Woodworking Studio
        </motion.h2>
        
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="max-w-4xl text-neutral-500 leading-relaxed text-sm md:text-base mb-16 md:mb-32"
        >
          Handling a portfolio of premium bespoke furniture, Milan Wood offers unparalleled artisanal craftsmanship and guidance in all key sectors including Custom Design, Raw Material Sourcing, Precision Handcrafting, and Global Delivery.
        </motion.p>

        {/* Stats Container - Desktop (Pyramid layout) */}
        <motion.div variants={containerVariants} className="hidden md:flex w-full justify-between items-center relative h-[280px]">

          {/* Column 1 */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-end h-full pb-4">
            <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
              <AnimatedCounter inView={hasInView} end={50} suffix="+" />
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
              Master Woodworkers
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1 } } }} style={{ originY: 1 }} className="w-px bg-neutral-300 h-24 self-end mb-12" />

          {/* Column 2 */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center h-full">
            <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
              <AnimatedCounter inView={hasInView} end={240} suffix="+" />
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
              Bespoke Projects Delivered
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1 } } }} style={{ originY: 0.5 }} className="w-px bg-neutral-300 h-40 self-center" />

          {/* Column 3 (Center - Double Stat) */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center">
              <h4 className="text-5xl font-light text-neutral-900 mb-4 tracking-tight">
                <AnimatedCounter inView={hasInView} end={75} suffix="+" />
              </h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
                Years Combined Experience
              </p>
            </div>
            <div className="flex flex-col items-center pb-4">
              <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
                <AnimatedCounter inView={hasInView} end={12} prefix="$" suffix="M+" />
              </h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
                Portfolio of Crafted Pieces
              </p>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1 } } }} style={{ originY: 0.5 }} className="w-px bg-neutral-300 h-40 self-center" />

          {/* Column 4 */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center h-full">
            <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
              <AnimatedCounter inView={hasInView} end={21} />
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
              Global Design Awards
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1 } } }} style={{ originY: 1 }} className="w-px bg-neutral-300 h-24 self-end mb-12" />

          {/* Column 5 */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-end h-full pb-4">
            <h4 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
              <AnimatedCounter inView={hasInView} end={6500} suffix="+" />
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 max-w-[120px] leading-relaxed">
              Hours of Crafting per Year
            </p>
          </motion.div>

        </motion.div>

        {/* Stats Container - Mobile (Stacked) */}
        <motion.div variants={containerVariants} className="flex md:hidden flex-col gap-12 w-full">
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h4 className="text-4xl font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={hasInView} end={50} suffix="+" />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Master Woodworkers</p>
          </motion.div>
          <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} className="w-12 h-px bg-neutral-300 mx-auto" />
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h4 className="text-4xl font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={hasInView} end={240} suffix="+" />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Bespoke Projects</p>
          </motion.div>
          <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} className="w-12 h-px bg-neutral-300 mx-auto" />
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h4 className="text-[2.75rem] font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={hasInView} end={75} suffix="+" />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Years Experience</p>
          </motion.div>
          <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} className="w-12 h-px bg-neutral-300 mx-auto" />
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h4 className="text-4xl font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={hasInView} end={21} />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Global Awards</p>
          </motion.div>
          <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} className="w-12 h-px bg-neutral-300 mx-auto" />
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h4 className="text-4xl font-light text-neutral-900 mb-2">
              <AnimatedCounter inView={hasInView} end={6500} suffix="+" />
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Hours of Crafting</p>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
