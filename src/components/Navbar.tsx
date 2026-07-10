'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';

const navLinks = [
 { label: 'Home', href: '/' },
 { label: 'Collections', href: '/collections' },
 { label: 'Signature Series', href: '/signature-series' },
 { label: 'Projects', href: '/projects' },
 { label: 'About Us', href: '/about' },
 { label: 'Contact', href: '/contact' },
];

const TRANSITION: Transition = { duration: 0.55, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] };

export default function Navbar() {
 const pathname = usePathname();
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [scrollState, setScrollState] = useState<'top' | 'hidden' | 'capsule'>('top');
 const lastScrollY = useRef(0);
 const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
 const activeLink = navLinks.find((l) => l.href === pathname)?.label ?? 'Home';

 useEffect(() => {
 const threshold = 80;

 const handleScroll = () => {
 const currentY = window.scrollY;

 if (currentY <= threshold) {
 setScrollState('top');
 if (idleTimer.current) clearTimeout(idleTimer.current);
 } else if (currentY > lastScrollY.current + 4) {
 // Scrolling down — hide
 setScrollState('hidden');
 if (idleTimer.current) clearTimeout(idleTimer.current);
 // After hiding, wait then show capsule
 idleTimer.current = setTimeout(() => {
 if (window.scrollY > threshold) setScrollState('capsule');
 }, 550);
 } else if (currentY < lastScrollY.current - 4) {
 // Scrolling up — show capsule
 if (idleTimer.current) clearTimeout(idleTimer.current);
 setScrollState('capsule');
 }

 lastScrollY.current = currentY;
 };

 window.addEventListener('scroll', handleScroll, { passive: true });
 return () => {
 window.removeEventListener('scroll', handleScroll);
 if (idleTimer.current) clearTimeout(idleTimer.current);
 };
 }, []);

 const isCapsule = scrollState === 'capsule';
 const isHidden = scrollState === 'hidden';

 return (
 <>
 {/*
 * Strategy: wrapper is always full-width.
 * Capsule effect = wrapper gains horizontal padding → nav shrinks inward.
 * Nav animates border-radius + box-shadow.
 * py-5 stays the same in BOTH states → same height always.
 */}
 <motion.div
 initial={false}
 animate={{
 y: isHidden ? -120 : 0,
 paddingTop: isCapsule ? 14 : 0,
 paddingLeft: isCapsule ? 20 : 0,
 paddingRight: isCapsule ? 20 : 0,
 }}
 transition={TRANSITION}
 className="fixed top-0 left-0 right-0 z-[60] pointer-events-none"
 >
 <motion.nav
 animate={{
 borderRadius: isCapsule ? 999 : 0,
 boxShadow: isCapsule
 ? '0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(193,160,119,0.28)'
 : '0 0 0 0 transparent',
 }}
 transition={TRANSITION}
 className="pointer-events-auto w-full flex items-center justify-between bg-black px-6 md:px-10 lg:px-16 py-5"
 style={{
 backdropFilter: isCapsule ? 'blur(22px)' : 'none',
 WebkitBackdropFilter: isCapsule ? 'blur(22px)' : 'none',
 backgroundColor: isCapsule ? 'rgba(8,8,8,0.88)' : '#000000',
 borderBottom: isCapsule ? 'none' : '1px solid #c1a077',
 }}
 >
 {/* ── Logo ── */}
 <div className="flex items-center justify-start flex-shrink-0">
 <Link href="/" className="flex items-center group" aria-label="Milan Wood Home">
 <Image
 src="https://res.cloudinary.com/de4pazo51/image/upload/v1782107736/WhatsApp_Image_2026-06-13_at_18.41.25-removebg-preview_1_e9eayw.png"
 alt="Milan Wood"
 width={130}
 height={44}
 className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] brightness-0 invert"
 priority
 unoptimized
 />
 </Link>
 </div>

 {/* ── Nav Links ── */}
 <div className="hidden md:flex flex-1 items-center justify-center gap-5 lg:gap-7">
 {navLinks.map((link) => (
 <Link
 key={link.label}
 href={link.href}
 className={`relative py-1 text-[12px] lg:text-[13px] tracking-wide font-light transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
 activeLink === link.label
 ? 'text-white'
 : 'text-neutral-400 hover:text-white'
 }`}
 >
 {link.label}
 {activeLink === link.label && (
 <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c1a077]" />
 )}
 </Link>
 ))}
 </div>

 {/* ── Right: Search + hamburger ── */}
 <div className="flex items-center justify-end gap-5 flex-shrink-0">
 {/* Full search bar — visible only in full-bar state on large screens */}
 <AnimatePresence initial={false}>
 {!isCapsule && (
 <motion.div
 key="search-bar"
 initial={{ opacity: 0, width: 0 }}
 animate={{ opacity: 1, width: 'auto' }}
 exit={{ opacity: 0, width: 0 }}
 transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
 className="hidden lg:flex items-center border-b border-white/30 focus-within:border-white transition-colors pb-1 overflow-hidden"
 style={{ minWidth: 0 }}
 >
 <Search size={16} className="text-white/60 mr-2 flex-shrink-0" />
 <input
 type="text"
 placeholder="Search..."
 className="bg-transparent border-none outline-none text-white text-[13px] font-light w-36 placeholder:text-white/40 focus:ring-0"
 />
 </motion.div>
 )}
 </AnimatePresence>

 {/* Compact search icon — capsule mode only */}
 <AnimatePresence initial={false}>
 {isCapsule && (
 <motion.button
 key="search-icon"
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.8 }}
 transition={{ duration: 0.3 }}
 className="hidden md:flex text-white/50 hover:text-white transition-colors"
 aria-label="Search"
 >
 <Search size={16} />
 </motion.button>
 )}
 </AnimatePresence>

 {/* Mobile hamburger */}
 <button
 className="md:hidden flex items-center justify-center text-white hover:text-neutral-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
 onClick={() => setIsMenuOpen(true)}
 aria-label="Open mobile menu"
 >
 <Menu size={24} strokeWidth={1.5} />
 </button>
 </div>
 </motion.nav>
 </motion.div>

 {/* ── Mobile Menu ── */}
 <AnimatePresence>
 {isMenuOpen && (
 <motion.div
 initial={{ opacity: 0, y: '-100%' }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: '-100%' }}
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
 key={link.label}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 + 0.08 * idx, duration: 0.55, ease: 'easeOut' }}
 >
 <Link
 href={link.href}
 onClick={() => setTimeout(() => setIsMenuOpen(false), 300)}
 className={`block text-4xl font-light tracking-tight transition-colors duration-300 focus-visible:outline-none rounded ${
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
 transition={{ delay: 0.7, duration: 1 }}
 className="mt-auto pb-8 px-4"
 >
 <div className="h-px bg-neutral-200 w-full mb-8" />
 <p className="text-[10px] tracking-wider uppercase text-neutral-500 font-semibold mb-2">
 Milan Wood Studio
 </p>
 <p className="text-xs text-neutral-400">Crafting Premium Spaces with Timeless Woodwork.</p>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </>
 );
}
