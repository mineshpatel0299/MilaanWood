"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="bg-neutral-50 px-6 md:px-16 lg:px-24 py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Sticky Title */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-40">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-[1.2] tracking-tight mb-6">
              A Heritage of <br />
              <span className="italic text-neutral-400">Mastery</span>
            </h2>
            <div className="h-px w-24 bg-neutral-300" />
          </div>
        </div>

        {/* Right Side: Staggered Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-24 md:gap-32">
          
          {/* Story Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
          >
            <div className="w-full md:w-1/2">
              <p className="text-lg md:text-2xl text-neutral-900 font-light leading-relaxed mb-6">
                For over three decades, Milan Wood has stood at the intersection of traditional woodworking and modern architectural design.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                What began as a small atelier dedicated to hand-carving solid teak has evolved into a premier design house for luxury entrances. We believe a door is more than a boundary—it is the handshake of a home, the first impression of a sanctuary.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200">
              <Image 
                src="/door_cat_3.png" 
                alt="Traditional Woodworking" 
                fill 
                className="object-cover" 
              />
            </div>
          </motion.div>

          {/* Story Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-end"
          >
            <div className="w-full md:w-1/2 relative aspect-square rounded-2xl overflow-hidden bg-neutral-200">
              <Image 
                src="/mw_cd_217.png" 
                alt="Modern Design" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="w-full md:w-1/2 pb-8">
              <h3 className="text-xl md:text-2xl text-neutral-900 font-medium mb-4">Uncompromising Quality</h3>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Every piece of wood that enters our facility is rigorously inspected, kiln-dried to perfection, and treated to withstand the test of time. Our artisans combine state-of-the-art CNC precision with meticulous hand-finishing techniques to ensure every curve, bevel, and joint is flawless.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
