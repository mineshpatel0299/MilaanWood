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
      <nav className="relative flex items-center gap-10 bg-white px-6 pr-10 py-4 rounded-br-[2rem]">
        {/* Inverted curve for top-right of navbar */}
        <svg className="absolute top-0 -right-[2rem] w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
          <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
        </svg>

        {/* Inverted curve for bottom-left of navbar */}
        <svg className="absolute left-0 -bottom-[2rem] w-[2rem] h-[2rem] text-white pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
          <path d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" />
        </svg>

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
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`relative px-4 py-2 text-base md:text-lg font-semibold rounded-full transition-all duration-300 ${
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
