'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <div className="absolute top-0 left-0 z-50">
      <nav className="flex items-center gap-10 bg-white/95 backdrop-blur-sm px-6 pr-10 py-3 rounded-br-[2rem] shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 group" aria-label="Milan Wood Home">
          <Image
            src="https://res.cloudinary.com/de4pazo51/image/upload/v1782107736/WhatsApp_Image_2026-06-13_at_18.41.25-removebg-preview_1_e9eayw.png"
            alt="Milan Wood"
            width={130}
            height={44}
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            priority
            unoptimized
          />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeLink === link.label
                  ? 'text-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              {link.label}
              {activeLink === link.label && (
                <span className="absolute inset-0 rounded-full bg-neutral-100 -z-10" />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
