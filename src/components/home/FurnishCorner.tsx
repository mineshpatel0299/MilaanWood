"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function FurnishCorner() {
  return (
    <section className="bg-white border-y border-neutral-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Text Column */}
          <div className="lg:w-1/3 p-8 lg:py-32 lg:px-16 lg:border-r border-neutral-200 flex flex-col justify-center">
            <h2 className="text-3xl md:text-[2.5rem] text-neutral-900 mb-6 font-medium tracking-tight leading-tight">
              Elevate Every Entrance
            </h2>
            <p className="text-neutral-600 leading-relaxed text-[15px]">
              From grand pivot doors to elegant interior panels, our collections cover every entrance of your home. Discover high-quality, handcrafted wooden doors for every space.
            </p>
          </div>

          {/* Right Column: Image and List */}
          <div className="lg:w-2/3 p-8 lg:py-32 lg:px-16 flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3.5] relative rounded-[1.25rem] overflow-hidden bg-neutral-100">
              <Image 
                src="/door_categories.png" 
                alt="Elevate Every Entrance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* List */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex flex-col mb-10">
                {[
                  { name: "Art Deco Series", href: "/collections/art-deco-series", icon: ArrowRight },
                  { name: "Contemporary Series", href: "/collections/contemporary-series", icon: ArrowUpRight },
                  { name: "Minimalist Series", href: "/collections/minimalist-series", icon: ArrowUpRight },
                  { name: "Zen Series", href: "/collections/zen-series", icon: ArrowUpRight },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Link 
                      key={i}
                      href={item.href} 
                      className="flex justify-between items-center py-4 border-b border-neutral-100 group hover:border-neutral-300 transition-colors"
                    >
                      <span className="text-neutral-600 text-[15px] group-hover:text-neutral-900 transition-colors">
                        {item.name}
                      </span>
                      <Icon size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                    </Link>
                  );
                })}
              </div>
              
              <Link 
                href="/collections"
                className="inline-flex items-center justify-center bg-[#1c1c1c] text-white px-8 py-3.5 rounded-full text-[14px] font-medium w-max hover:bg-black transition-colors shadow-sm"
              >
                Explore collections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
