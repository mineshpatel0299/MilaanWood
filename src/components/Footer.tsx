'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

export default function Footer() {
  const { ref: footerRef, inView } = useInView(0.1);

  return (
    <footer
      ref={footerRef as React.RefObject<HTMLElement>}
      className="bg-[#111] text-white pt-24 pb-12 px-8 md:px-16 font-sans rounded-t-[3rem] mt-[-2rem] relative z-20"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24 mb-16 md:mb-32">

        {/* Brand col */}
        <div
          className="md:w-1/3 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '0ms',
          }}
        >
          <div className="flex items-center gap-2 font-bold text-xl tracking-[0.2em] text-white mb-6 md:mb-8">
            <Image
              src="https://res.cloudinary.com/de4pazo51/image/upload/v1782107736/WhatsApp_Image_2026-06-13_at_18.41.25-removebg-preview_1_e9eayw.png"
              alt="Milan Wood"
              width={130}
              height={44}
              className="h-10 md:h-11 w-auto object-contain brightness-0 invert"
              unoptimized
            />
          </div>
          <p className="text-neutral-400 leading-relaxed max-w-xs text-xs md:text-sm">
            A trusted name in premium wooden doors and interior solutions, delivering exceptional craftsmanship across residential and commercial projects.
          </p>
        </div>

        {/* Links + Newsletter */}
        <div
          className="md:w-2/3 flex flex-col md:flex-row justify-between gap-12 md:gap-16 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '150ms',
          }}
        >
          {/* Shop and Company Links Side-by-Side on Mobile */}
          <div className="grid grid-cols-2 gap-8 md:flex md:gap-16 w-full md:w-auto">
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-2 md:mb-4">Shop</h4>
              {['Pivot Doors', 'Sliding Doors', 'French Doors', 'CNC Carved Doors'].map((item) => (
                <a key={item} href="#" className="text-xs md:text-sm text-white hover:text-neutral-300 transition-colors duration-300 hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">{item}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-2 md:mb-4">Company</h4>
              {['Our Story', 'Design Process', 'Gallery', 'Contact Us'].map((item) => (
                <a key={item} href="#" className="text-xs md:text-sm text-white hover:text-neutral-300 transition-colors duration-300 hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">{item}</a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4 max-w-xs">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-2 md:mb-4">Newsletter</h4>
            <p className="text-neutral-400 mb-2 md:mb-4 text-xs md:text-sm leading-relaxed">
              Stay updated with our latest projects, design intelligence, and premium door systems.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <div className="flex border-b border-neutral-700 pb-3 mt-2 group focus-within:border-white/60 transition-colors duration-300">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className="bg-transparent border-none outline-none w-full text-xs md:text-sm placeholder:text-neutral-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="uppercase tracking-[0.2em] text-[10px] font-bold hover:text-neutral-400 transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1400px] mx-auto border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500 transition-all duration-700 ease-out"
        style={{
          opacity: inView ? 1 : 0,
          transitionDelay: '300ms',
        }}
      >
        <p>&copy; {new Date().getFullYear()} Milan Wood. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
