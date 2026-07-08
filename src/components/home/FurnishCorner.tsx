"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function FurnishCorner() {
    <section className="bg-white py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          
          {/* Left Text Column */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] text-neutral-900 mb-8 font-light tracking-tight leading-[1.05]">
              Elevate Every <br className="hidden md:block"/> 
              <span className="italic text-neutral-400">Entrance</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-xl mb-16">
              From grand pivot doors to elegant interior panels, our collections cover every entrance of your home. Discover high-quality, handcrafted wooden doors tailored for luxury living.
            </p>

            {/* List */}
            <div className="flex flex-col border-t border-neutral-100 mb-16">
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
                    className="flex justify-between items-center py-6 md:py-8 border-b border-neutral-100 group hover:border-neutral-300 transition-colors duration-500"
                  >
                    <span className="text-xl md:text-2xl font-light text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500">
                      {item.name}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-transparent flex items-center justify-center group-hover:bg-[#c1a077] group-hover:border-[#c1a077] transition-all duration-500">
                      <Icon size={20} className="text-neutral-300 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div>
              <Link 
                href="/collections"
                className="inline-flex items-center justify-center bg-black text-white px-10 py-5 text-[11px] md:text-[13px] font-bold uppercase tracking-[0.25em] hover:bg-[#c1a077] transition-colors duration-500 shadow-sm"
              >
                Explore collections
              </Link>
            </div>
          </div>

          {/* Right Column: Massive Image */}
          <div className="lg:w-1/2 w-full aspect-[3/4] lg:h-[900px] relative overflow-hidden bg-neutral-100">
            <Image 
              src="/door_categories.png" 
              alt="Elevate Every Entrance"
              fill
              className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.05]"
            />
          </div>
          
        </div>
      </div>
    </section>
}
