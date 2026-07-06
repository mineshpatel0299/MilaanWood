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
              <h3 className="text-xl md:text-2xl text-neutral-900 font-medium tracking-tight mb-4">
                Crafting Premium Spaces With Timeless Woodwork
              </h3>
              <p className="text-lg md:text-2xl text-neutral-900 font-light leading-relaxed mb-6">
                Milan Wood is a trusted name in the world of premium wooden doors and interior solutions, delivering exceptional craftsmanship across residential and commercial projects.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-4">
                Every door we create is more than a product—it is a statement of detail, durability, and refined aesthetics. From CNC-engineered designs to fully customized door systems, we bring together advanced manufacturing and skilled craftsmanship to elevate modern spaces.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                With a growing portfolio of projects across India, Milan Wood partners with architects, interior designers, and discerning clients to deliver solutions that are both functional and visually distinctive.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[3/4] overflow-hidden bg-neutral-200">
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
            <div className="w-full md:w-1/2 relative aspect-square overflow-hidden bg-neutral-200">
              <Image 
                src="/mw_cd_217.png" 
                alt="Modern Design" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="w-full md:w-1/2 pb-8">
              <h3 className="text-xl md:text-2xl text-neutral-900 font-medium mb-4">Setting New Benchmarks In Wood Design</h3>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Milan Wood stands as a trusted name in premium wooden interiors, delivering refined door solutions across residential and commercial spaces. Our growing presence reflects a strong foundation built on quality, precision, and consistency.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                With a focus on advanced manufacturing and design excellence, we collaborate with architects, designers, and developers to bring distinctive concepts to life. Every project reflects our commitment to durability, detailing, and timeless aesthetics.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
