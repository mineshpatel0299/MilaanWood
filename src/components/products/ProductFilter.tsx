"use client";

import { motion } from "framer-motion";

const categories = ["All", "Interior", "Exterior", "Luxury", "Contemporary"];

export default function ProductFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (cat: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative px-6 py-2.5 text-xs md:text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 cursor-pointer border ${
            active === cat
              ? "text-white border-neutral-900"
              : "text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-800 bg-white"
          }`}
        >
          {active === cat && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 bg-neutral-900 rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
}
