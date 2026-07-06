'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Mail, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { collections } from '@/data/collections';

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5Zm5.2-8.45a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0Z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M13.5 21v-7.5H16l.5-3H13.5V8.3c0-.87.24-1.46 1.5-1.46H16.6V4.2c-.26-.035-1.15-.11-2.19-.11-2.17 0-3.66 1.32-3.66 3.75v2.65H8.25v3h2.5V21h2.75Z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    path: 'M21.6 7.2s-.21-1.49-.86-2.14c-.82-.86-1.74-.86-2.16-.91C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.15c-.42.05-1.34.05-2.16.91C2.6 5.71 2.4 7.2 2.4 7.2S2.24 8.95 2.24 10.7v1.6c0 1.75.16 3.5.16 3.5s.2 1.49.85 2.14c.82.86 1.9.83 2.38.92 1.73.17 7.37.22 7.37.22s3.61-.005 6.59-.16c.42-.06 1.34-.06 2.16-.92.65-.65.86-2.14.86-2.14s.16-1.75.16-3.5v-1.6c0-1.75-.16-3.5-.16-3.5ZM9.98 14.5v-5.4l5.4 2.71-5.4 2.69Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.4 20.4h-3.37v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.29v6.35H9.2V8.5h3.24v1.63h.05c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.71 2.61 4.71 5.99v6.05Z',
  },
];

export default function Footer() {
  const { ref: footerRef, inView } = useInView(0.1);
  const featuredCollections = collections.slice(0, 5);

  return (
    <footer
      ref={footerRef as React.RefObject<HTMLElement>}
      className="bg-[#0d0d0d] text-white pt-20 pb-10 px-6 md:px-16 font-sans relative z-20"
    >
      <div className="max-w-[1536px] mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14 mb-16 md:mb-20 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* Collections */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#c9a568]">Collections</h4>
            <div className="h-px w-6 bg-[#c9a568]/60" />
            <div className="flex flex-col gap-3">
              {featuredCollections.map((c) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className="group flex items-center justify-between text-sm text-neutral-300 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {c.name}
                  <ChevronRight size={14} className="text-[#c9a568] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/collections"
                className="group flex items-center justify-between text-sm font-medium text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View All Collections
                <ChevronRight size={14} className="text-[#c9a568] group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#c9a568]">Company</h4>
            <div className="h-px w-6 bg-[#c9a568]/60" />
            <div className="flex flex-col gap-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Craftsmanship', href: '/about' },
                { label: 'The Journal', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-neutral-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#c9a568]">Connect</h4>
            <div className="h-px w-6 bg-[#c9a568]/60" />

            <a
              href="mailto:info@milanwood.in"
              className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors duration-300 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail size={16} className="text-[#c9a568] flex-shrink-0" />
              info@milanwood.in
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#c9a568]/60 hover:border-[#c9a568] hover:bg-[#c9a568] hover:text-black px-6 py-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#c9a568] transition-colors duration-300 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a568]"
            >
              Book a Consultation
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transitionDelay: '150ms',
          }}
        >
          <p>&copy; {new Date().getFullYear()} Milan Wood. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Privacy Policy</Link>
            <span className="text-neutral-700">|</span>
            <Link href="/terms" className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">Follow Us</span>
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-8 h-8 border border-white/20 text-white hover:border-[#c9a568] hover:text-[#c9a568] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
