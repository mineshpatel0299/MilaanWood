'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const products = [
  { id: 1, name: 'Kuro Dining Chair', price: '$450', image: '/product_1.png' },
  { id: 2, name: 'Sabi Coffee Table', price: '$1,200', image: '/product_2.png' },
  { id: 3, name: 'Yugen Stool', price: '$280', image: '/product_3.png' },
];

function ProductCard({ product, delay }: { product: typeof products[0]; delay: number }) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group cursor-pointer transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Image container */}
      <div className="relative h-[550px] w-full mb-6 overflow-hidden bg-[#f7f7f7] rounded-[2rem]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover mix-blend-multiply group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

        {/* Top-Left Cutout */}
        <div className="absolute top-0 left-0 bg-white px-5 py-3 rounded-br-[1.5rem] z-10">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500">
            Featured
          </span>
          {/* Inverted curves */}
          <svg className="absolute top-0 -right-[1.5rem] w-[1.5rem] h-[1.5rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
            <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
          </svg>
          <svg className="absolute left-0 -bottom-[1.5rem] w-[1.5rem] h-[1.5rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
            <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
          </svg>
        </div>

        {/* Bottom-Right Cutout */}
        <div className="absolute bottom-0 right-0 bg-white pl-5 pt-4 pr-3 pb-3 rounded-tl-[1.5rem] z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">
            Explore <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
          {/* Inverted curves */}
          <svg className="absolute bottom-0 -left-[1.5rem] w-[1.5rem] h-[1.5rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
            <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
          </svg>
          <svg className="absolute -top-[1.5rem] right-0 w-[1.5rem] h-[1.5rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
            <path d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-center px-2">
        <h3 className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors duration-300">
          {product.name}
        </h3>
        <span className="text-neutral-500 tracking-wide group-hover:text-neutral-800 transition-colors duration-300">
          {product.price}
        </span>
      </div>

      {/* Bottom underline — expands on hover */}
      <div className="mt-3 px-2">
        <div className="h-px bg-neutral-200 w-0 group-hover:w-full transition-all duration-500 ease-out" />
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);

  return (
    <section className="bg-white text-black py-40 px-8 md:px-16 font-sans">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="flex justify-between items-end mb-20 border-b border-neutral-200 pb-8 transition-all duration-700 ease-out"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Curated Pieces</h2>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:text-neutral-500 transition-colors duration-300 group">
            View Collection
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
