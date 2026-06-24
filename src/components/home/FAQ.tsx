'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FAQS = [
  {
    id: '01',
    question: 'What types of doors does Milan Wood craft?',
    answer:
      'Our portfolio spans the full range of premium door systems — pivot doors, sliding panels, French doors, CNC-carved statement pieces, flush doors, and fully bespoke entry systems. Every category is available in both residential and commercial scales, engineered to exact tolerances.',
  },
  {
    id: '02',
    question: 'Can I commission a fully customised design?',
    answer:
      'Absolutely. Customisation is at the core of what we do. Our design team works directly with you — or your architect — from concept through to installation. We handle material selection, finish, hardware, and dimensioning as a single seamless process.',
  },
  {
    id: '03',
    question: 'Which wood species do you work with?',
    answer:
      'We source from over 30 premium wood species, including teak, walnut, American white oak, mahogany, rosewood, and engineered alternatives for high-humidity environments. Our material consultants guide you to the ideal species for your climate, use case, and aesthetic.',
  },
  {
    id: '04',
    question: 'What is the typical lead time from order to installation?',
    answer:
      'Standard production runs between 4 and 8 weeks depending on complexity. CNC-carved and fully bespoke systems may require up to 12 weeks. We provide a precise production timeline at order confirmation, with milestone updates throughout.',
  },
  {
    id: '05',
    question: 'Do you work with architects and interior designers?',
    answer:
      'Yes. We partner formally with architects, interior designers, and project developers across India. Our partner programme includes priority scheduling, dedicated project liaisons, technical drawings, sample access, and tailored commercial terms.',
  },
  {
    id: '06',
    question: 'Which cities and regions do you serve?',
    answer:
      'Milan Wood currently serves over 25 cities across India, with delivery and installation teams covering all major metropolitan areas and tier-2 cities. For projects outside our standard coverage zones, please reach out — we accommodate large-scale projects nationwide.',
  },
];

/* ─── Mobile accordion item ─────────────────────────────────────────────── */
function MobileItem({
  faq,
  isOpen,
  onToggle,
  prefersReducedMotion,
}: {
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start gap-5 py-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 rounded-sm group"
      >
        <span
          className={`shrink-0 text-[10px] font-bold tracking-[0.25em] pt-1 transition-colors duration-300 ${
            isOpen ? 'text-[#8b3d30]' : 'text-neutral-400 group-hover:text-neutral-600'
          }`}
        >
          {faq.id}
        </span>
        <span
          className={`flex-1 text-base font-light leading-snug tracking-tight transition-colors duration-300 ${
            isOpen ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-900'
          }`}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className={`shrink-0 mt-0.5 transition-colors duration-300 ${
            isOpen ? 'text-[#8b3d30]' : 'text-neutral-400'
          }`}
          aria-hidden="true"
        >
          <ArrowRight size={14} strokeWidth={1.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <p className="pl-9 pb-7 text-sm text-neutral-500 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function FAQ() {
  const [activeId, setActiveId] = useState<string>('01');
  const prefersReducedMotion = useReducedMotion();

  const activeFaq = FAQS.find((f) => f.id === activeId)!;

  return (
    <section className="bg-white py-24 md:py-36 px-4 md:px-16 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* ── Section label + heading ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="mb-16 md:mb-20"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4 md:mb-6"
          >
            Common Questions
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } },
            }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <h2 className="text-neutral-900 text-4xl md:text-[5rem] font-light leading-[1.05] tracking-tight">
              Everything you <br className="hidden md:block" />
              <span className="italic text-neutral-400">need to know.</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* ── Top divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ originX: 0 }}
          className="h-px bg-neutral-200 mb-12 md:mb-0"
        />

        {/* ══ DESKTOP: two-panel editorial layout ══════════════════════════ */}
        <div className="hidden md:grid md:grid-cols-[5fr_7fr] md:items-start">

          {/* Left — question list */}
          <div role="list" className="border-r border-neutral-100">
            {FAQS.map((faq) => {
              const isActive = activeId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  role="listitem"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                >
                  <button
                    onClick={() => setActiveId(faq.id)}
                    aria-pressed={isActive}
                    className={`w-full group flex items-center gap-6 py-7 pr-12 text-left border-b border-neutral-100 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-neutral-900 relative overflow-hidden ${
                      isActive ? 'pl-8' : 'pl-6 hover:pl-8'
                    }`}
                  >
                    {/* Active left accent bar */}
                    <motion.span
                      initial={false}
                      animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      style={{ originY: 0.5 }}
                      className="absolute left-0 top-4 bottom-4 w-[2px] bg-[#8b3d30]"
                      aria-hidden="true"
                    />

                    {/* Number */}
                    <span
                      className={`shrink-0 text-[10px] font-bold tracking-[0.3em] transition-colors duration-300 ${
                        isActive ? 'text-[#8b3d30]' : 'text-neutral-300 group-hover:text-neutral-500'
                      }`}
                    >
                      {faq.id}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-base xl:text-lg font-light leading-snug tracking-tight transition-colors duration-300 ${
                        isActive
                          ? 'text-neutral-900 font-normal'
                          : 'text-neutral-400 group-hover:text-neutral-700'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Arrow indicator */}
                    <motion.span
                      initial={false}
                      animate={{ x: isActive ? 0 : -4, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="shrink-0 text-[#8b3d30]"
                      aria-hidden="true"
                    >
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                </motion.div>
              );
            })}

            {/* Contact prompt */}
            <div className="py-8 pl-6 pr-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
                Still have questions?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded"
              >
                Reach out to our team
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Right — sticky answer panel */}
          <div className="sticky top-28 pl-12 xl:pl-20 py-10 min-h-[420px] flex flex-col justify-center overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 24 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -16 }
                }
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="relative"
              >
                {/* Decorative large background number */}
                <span
                  className="absolute -top-6 -right-4 text-[11rem] xl:text-[14rem] font-bold leading-none text-neutral-900/[0.04] select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {activeFaq.id}
                </span>

                {/* Active number label */}
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b3d30] font-bold mb-6">
                  {activeFaq.id} / {FAQS.length.toString().padStart(2, '0')}
                </p>

                {/* Thin accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                  style={{ originX: 0 }}
                  className="w-10 h-px bg-[#8b3d30] mb-8"
                />

                {/* Question as heading */}
                <h3 className="text-2xl xl:text-[2rem] font-light leading-[1.25] tracking-tight text-neutral-900 mb-8 max-w-lg">
                  {activeFaq.question}
                </h3>

                {/* Answer body */}
                <p className="text-base xl:text-lg text-neutral-500 leading-relaxed max-w-lg">
                  {activeFaq.answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ══ MOBILE: clean accordion ══════════════════════════════════════ */}
        <div className="md:hidden border-t border-neutral-200">
          {FAQS.map((faq) => (
            <MobileItem
              key={faq.id}
              faq={faq}
              isOpen={activeId === faq.id}
              onToggle={() => setActiveId((prev) => (prev === faq.id ? '' : faq.id))}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}

          <div className="pt-8 pb-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
              Still have questions?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded"
            >
              Reach out to our team
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
