"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCTA() {
  return (
    <section className="bg-white px-4 md:px-12 lg:px-20 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-neutral-950 rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,61,48,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,61,48,0.1),transparent_50%)]" />

        <div className="relative z-10">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-500 mb-4">
            Bespoke Craftsmanship
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto mb-10">
            We create custom doors tailored to your exact specifications. Share your vision and our master craftsmen will bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#8b3d30] hover:bg-[#7a3428] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
          >
            Request Custom Door
            <div className="bg-white/20 rounded-full p-1.5 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={14} strokeWidth={3} />
            </div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
