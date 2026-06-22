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
      <div className="relative h-[550px] w-full mb-8 overflow-hidden bg-[#f7f7f7] rounded-sm">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover mix-blend-multiply group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

        {/* Quick view pill — slides up on hover */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out pointer-events-none">
          <span className="bg-white text-neutral-900 text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full shadow-md whitespace-nowrap">
            Quick View
          </span>
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
