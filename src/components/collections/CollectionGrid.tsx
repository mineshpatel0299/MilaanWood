"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { collections } from "@/data/collections";
import { ArrowUpRight } from "lucide-react";

export default function CollectionGrid() {
  return (
    <section className="bg-neutral-50 px-4 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-[#8b3d30]/40" />
            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#8b3d30] font-semibold">
              Master Series
            </p>
            <span className="h-px w-12 bg-[#8b3d30]/40" />
          </div>
          <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-neutral-900 mb-4">
            Our Collections
          </h2>
          <p className="text-neutral-500 text-sm md:text-base max-w-md mx-auto">
            Discover our meticulously crafted door series, each with a unique architectural signature.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {collections.map((collection, idx) => (
            <Link href={`/collections/${collection.slug}`} key={collection.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 6) * 0.1 }}
                className="group cursor-pointer h-full"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200 mb-5 shadow-sm hover:shadow-xl transition-shadow duration-700">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-600" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-lg md:text-xl font-medium mb-1">
                        {collection.name}
                      </h3>
                      <p className="text-white/70 text-xs tracking-[0.1em] line-clamp-2 pr-4">
                        {collection.description}
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white transition-colors duration-300 shrink-0">
                      <ArrowUpRight size={18} className="text-white group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
