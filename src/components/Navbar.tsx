'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState<'top' | 'hidden' | 'visible'>('top');
  const lastScrollY = useRef(0);
  const activeLink = navLinks.find((l) => l.href === pathname)?.label ?? 'Home';

  useEffect(() => {
    const threshold = 80;
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= threshold) {
        setScrollState('top');
      } else if (currentY > lastScrollY.current + 5) {
        setScrollState('hidden');
      } else if (currentY < lastScrollY.current - 5) {
        setScrollState('visible');
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = scrollState !== 'hidden';

  return (
    <>
      {/* Pill navbar (always the main navbar; hides on scroll down, shows on scroll up) */}
      <motion.div
        initial={false}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] px-3 md:px-5 pt-3 md:pt-4 pointer-events-none"
      >
        <nav className="pointer-events-auto mx-auto max-w-4xl flex items-center justify-between gap-6 md:gap-10 bg-white/80 backdrop-blur-xl px-5 md:px-8 py-3 rounded-full shadow-lg shadow-black/5 border border-white/50">
          <Link href="/" className="flex items-center flex-shrink-0 group" aria-label="Milan Wood Home">
            <Image
              src="https://res.cloudinary.com/de4pazo51/image/upload/v1782107736/WhatsApp_Image_2026-06-13_at_18.41.25-removebg-preview_1_e9eayw.png"
              alt="Milan Wood"
              width={130}
              height={44}
              className="h-7 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] brightness-0"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-normal rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
                  activeLink === link.label
                    ? 'text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute inset-0 rounded-full bg-neutral-900/[0.06] -z-10" />
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden flex items-center justify-center text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-md"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={22} strokeWidth={2} />
          </button>
        </nav>
      </motion.div>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 bg-white z-[100] flex flex-col px-6 py-6"
          >
            <div className="flex justify-between items-center">
               <Image
                  src="https://res.cloudinary.com/de4pazo51/image/upload/v1782107736/WhatsApp_Image_2026-06-13_at_18.41.25-removebg-preview_1_e9eayw.png"
                  alt="Milan Wood"
                  width={130}
                  height={44}
                  className="h-9 w-auto object-contain brightness-0"
                  priority
                  unoptimized
                />
               <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  aria-label="Close mobile menu"
               >
                 <X size={24} strokeWidth={2} />
               </button>
            </div>

            <div className="flex flex-col gap-8 mt-24 px-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (0.1 * idx), duration: 0.6, ease: "easeOut" }}
                  key={link.label}
                >
                  <Link
                    href={link.href}
                    onClick={() => setTimeout(() => setIsMenuOpen(false), 300)}
                    className={`block text-4xl font-light tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded ${
                      activeLink === link.label
                        ? 'text-black font-medium'
                        : 'text-neutral-400 hover:text-neutral-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-auto pb-8 px-4"
            >
              <div className="h-px bg-neutral-200 w-full mb-8" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-semibold mb-2">
                Milan Wood Studio
              </p>
              <p className="text-xs text-neutral-400">
                Crafting Premium Spaces with Timeless Woodwork.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
