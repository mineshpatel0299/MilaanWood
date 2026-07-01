"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Gem, Compass } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Uncompromising Luxury",
    description: "We do not cut corners. Every material chosen, every finish applied, and every hinge installed is of the highest echelon of quality available globally."
  },
  {
    icon: Shield,
    title: "Generational Durability",
    description: "A Milan Wood entrance is built to outlast its owners. Our structural engineering ensures resilience against warping, weather, and time."
  },
  {
    icon: Leaf,
    title: "Sustainable Mastery",
    description: "True luxury respects the earth. We are committed to ethical sourcing, utilizing reclaimed woods and certified sustainable timber in our bespoke creations."
  },
  {
    icon: Compass,
    title: "Bespoke Vision",
    description: "We do not believe in mass production. Our atelier works closely with architects and homeowners to bring unique, impossible designs to life."
  }
];

export default function Values() {
  return (
    <section className="bg-neutral-50 px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light text-neutral-900 tracking-tight mb-6">
            Our Core <span className="italic text-neutral-400">Pillars</span>
          </h2>
          <div className="h-px w-16 bg-[#c1a077]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center mb-8 group-hover:border-[#c1a077] group-hover:bg-[#c1a077]/5 transition-colors duration-500">
                  <Icon strokeWidth={1} className="w-8 h-8 text-neutral-400 group-hover:text-[#c1a077] transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
