"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Venezia",
    category: "Pivot Door",
    image: "/door_featured.png",
    material: "Solid Teak",
  },
  {
    id: 2,
    name: "Rosewood No. 7",
    category: "CNC Carved Door",
    image: "/door_featured_2.png",
    material: "Burma Teak",
  },
  {
    id: 3,
    name: "Studio Noir",
    category: "Contemporary Door",
    image: "/door_featured_3.png",
    material: "American Walnut",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-white py-28 md:py-40 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
        }}
        className="max-w-[1400px] mx-auto px-6 md:px-16"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="text-[10px] md:text-[11px] tracking-[0.5em] text-neutral-400 uppercase mb-6 md:mb-8"
            >
              Featured Collection
            </motion.p>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
                },
              }}
              className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight"
            >
              Signature{" "}
              <span className="italic text-neutral-400">Pieces</span>
            </motion.h2>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-neutral-900 hover:text-neutral-500 transition-colors duration-300 group"
            >
              View All
              <ArrowUpRight
                size={14}
                className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 1,
                    ease: [0.25, 1, 0.5, 1],
                    delay: index * 0.15,
                  },
                },
              }}
              className="group cursor-pointer"
            >
              <div className="bg-[#f5f3f0] rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Info panel */}
                <div className="px-6 py-6 md:px-7 md:py-7">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-neutral-400">
                      {product.category}
                    </p>
                    <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-neutral-300">
                      {product.material}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900">
                      {product.name}
                    </h3>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-500">
                      <ArrowRight
                        size={16}
                        className="text-neutral-400 group-hover:text-white transition-colors duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
