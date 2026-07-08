"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Truck, Plus, Minus, Compass } from "lucide-react";

/** Positions in the India group's local coordinate space (0-340 x, 0-330 y). */
const OFFICES = [
  { name: "Noida", label: "Corporate Office", x: 102, y: 83 },
  { name: "Mumbai", label: "Regional Office", x: 53, y: 187 },
];

const DELIVERY_HUBS = [
  { name: "Delhi NCR", x: 116, y: 74 },
  { name: "Hyderabad", x: 116, y: 205 },
  { name: "Bengaluru", x: 106, y: 254 },
  { name: "Chennai", x: 134, y: 253 },
  { name: "Kolkata", x: 223, y: 147 },
];

const INDIA_PATH =
  "M66,6 L83,39 L22,99 L11,134 L11,151 L32,168 L53,187 L64,228 L75,254 L90,287 L105,307 L124,294 L134,253 L168,201 L196,178 L223,158 L221,127 L319,83 L275,143 L231,154 L248,116 L187,99 L143,83 L127,61 L99,39 Z";

/** Rough, unlabeled neighbor silhouettes for map context — not geographically precise. */
const PAKISTAN_PATH = "M250,95 L295,80 L300,140 L275,210 L245,190 L235,140 Z";
const NEPAL_PATH = "M425,88 L525,78 L535,100 L430,112 Z";
const BANGLADESH_PATH = "M580,180 L620,175 L625,225 L590,235 Z";
const MYANMAR_PATH = "M645,165 L700,150 L730,260 L690,320 L655,270 Z";
const SRI_LANKA_PATH = "M498,432 a14,16 0 1,0 0.1,0 Z";

export default function IndiaPresenceMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-neutral-50 px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c1a077] text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium"
          >
            Our Presence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-neutral-900 tracking-tight leading-tight"
          >
            Rooted in India, <span className="italic text-neutral-400">Delivered Nationwide.</span>
          </motion.h2>
        </div>

        {/* Horizontal map panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden border border-neutral-200"
        >
          <svg
            viewBox="0 0 960 480"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full"
            role="img"
            aria-label="Map of India showing Milan Wood offices and delivery network"
          >
            {/* Ocean */}
            <rect x="0" y="0" width="960" height="480" fill="#dde5e7" />

            {/* Neighboring landmasses (context only, unlabeled precision) */}
            <g fill="#eceae4" stroke="#c9c4ba" strokeWidth="1">
              <path d={PAKISTAN_PATH} />
              <path d={NEPAL_PATH} />
              <path d={BANGLADESH_PATH} />
              <path d={MYANMAR_PATH} />
              <path d={SRI_LANKA_PATH} />
            </g>

            {/* Sea labels */}
            <text x="150" y="290" fontSize="15" fontStyle="italic" fill="#9aa8ab" fontFamily="serif">
              Arabian Sea
            </text>
            <text x="740" y="290" fontSize="15" fontStyle="italic" fill="#9aa8ab" fontFamily="serif">
              Bay of Bengal
            </text>
            <text x="440" y="465" fontSize="15" fontStyle="italic" fill="#9aa8ab" fontFamily="serif">
              Indian Ocean
            </text>

            {/* Country labels */}
            <text x="248" y="140" fontSize="10" letterSpacing="1" fill="#a9a49a">PAKISTAN</text>
            <text x="450" y="102" fontSize="9" letterSpacing="1" fill="#a9a49a">NEPAL</text>
            <text x="660" y="235" fontSize="9" letterSpacing="1" fill="#a9a49a">MYANMAR</text>

            {/* India + markers, positioned within the wide canvas */}
            <g transform="translate(340,50)">
              <path
                d={INDIA_PATH}
                fill="#f7f5f1"
                stroke="#c1a077"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Delivery hubs */}
              {DELIVERY_HUBS.map((hub) => (
                <g
                  key={hub.name}
                  onMouseEnter={() => setHovered(hub.name)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer"
                >
                  <circle cx={hub.x} cy={hub.y} r="10" fill="#1a1a1a" opacity="0.9" />
                  <foreignObject x={hub.x - 6} y={hub.y - 6} width="12" height="12">
                    <Truck size={12} color="#c1a077" strokeWidth={2} />
                  </foreignObject>
                </g>
              ))}

              {/* Offices */}
              {OFFICES.map((office) => (
                <g
                  key={office.name}
                  onMouseEnter={() => setHovered(office.name)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer"
                >
                  <motion.circle
                    cx={office.x}
                    cy={office.y}
                    r="14"
                    fill="#c1a077"
                    opacity="0.3"
                    animate={{ r: [14, 22, 14], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  />
                  <foreignObject x={office.x - 9} y={office.y - 18} width="18" height="18">
                    <MapPin size={18} fill="#1a1a1a" color="#1a1a1a" strokeWidth={1.5} />
                  </foreignObject>
                </g>
              ))}
            </g>
          </svg>

          {/* Tooltip */}
          {hovered && (
            <div className="absolute top-4 left-4 bg-[#0a0a0a] text-white text-xs px-4 py-2 tracking-[0.1em] uppercase pointer-events-none">
              {hovered}
            </div>
          )}

          {/* Zoom control chrome (decorative) */}
          <div className="absolute top-4 right-4 flex flex-col bg-white border border-neutral-200 shadow-sm">
            <div className="w-9 h-9 flex items-center justify-center border-b border-neutral-200 text-neutral-600">
              <Plus size={14} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center border-b border-neutral-200 text-neutral-600">
              <Minus size={14} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center text-neutral-600">
              <Compass size={14} />
            </div>
          </div>

          {/* Floating CTA */}
          <Link
            href="/contact"
            className="absolute bottom-4 left-4 md:bottom-6 md:left-6 inline-flex items-center bg-[#0a0a0a] text-white px-5 py-3 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] hover:bg-[#1a1a1a] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center mt-12">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex items-center justify-center bg-[#1a1a1a] shrink-0">
              <MapPin size={16} className="text-[#c1a077]" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900">Our Offices</p>
              <p className="text-xs text-neutral-400">Noida &amp; Mumbai</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex items-center justify-center bg-[#1a1a1a] shrink-0">
              <Truck size={16} className="text-[#c1a077]" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900">Delivery Network</p>
              <p className="text-xs text-neutral-400">Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad &amp; beyond</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
