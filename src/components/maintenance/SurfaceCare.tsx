"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const surfaces = [
 {
 id: "veneer",
 label: "Natural Veneer",
 steps: [
 { title: "Daily Care", body: "Dust with a soft, dry microfiber cloth. The natural grain will pick up airborne particles — do not allow buildup." },
 { title: "Cleaning Marks", body: "Dampen a cloth with warm water and a drop of pH-neutral soap. Wipe in the direction of the grain, then immediately dry with a clean cloth." },
 { title: "Polish", body: "Apply a veneer-safe furniture polish every 6 months. Avoid silicone-based polishes as they can interfere with future refinishing." },
 { title: "Protection", body: "Apply a thin coat of natural beeswax or carnauba wax annually to nourish the wood and maintain its lustre." },
 { title: "Avoid", body: "Never use oil-based cleaners, steam, or abrasive pads. Do not allow water to pool near veneer edges or joints." },
 ],
 },
 {
 id: "lacquer",
 label: "PU Lacquer",
 steps: [
 { title: "Daily Care", body: "Wipe with a dry or barely damp cloth. PU lacquer is durable but not impervious to moisture seeping through micro-cracks." },
 { title: "Deep Cleaning", body: "Mix warm water with mild dish soap (1:10). Wipe with a well-wrung cloth, then dry immediately. No soaking required." },
 { title: "Scratch Repair", body: "Minor surface scratches in gloss PU can be buffed with automotive polishing compound. For matte finishes, use our touch-up wax." },
 { title: "Chemical Caution", body: "Avoid alcohol-based cleaners, acetone, and ammonia products — they will cloud or dissolve the lacquer layer permanently." },
 { title: "Re-coating", body: "If the lacquer begins to peel or chalk after 10+ years, contact our service team for a professional re-coat rather than sanding at home." },
 ],
 },
 {
 id: "laminate",
 label: "Laminate",
 steps: [
 { title: "Daily Care", body: "Laminate surfaces are the most forgiving. Wipe regularly with a damp cloth — no special products required for routine cleaning." },
 { title: "Stubborn Marks", body: "Use a small amount of rubbing alcohol or acetone on a cotton pad for tough marks like adhesive or marker. Wipe immediately after." },
 { title: "Edge Protection", body: "The most vulnerable area on laminate doors is the edge banding. Inspect annually and reseal any lifting with contact adhesive." },
 { title: "Heat Warning", body: "Laminate can delaminate under sustained heat. Keep away from direct heat sources and do not iron near laminate edges." },
 { title: "Abrasion", body: "Avoid scouring pads. Laminate surfaces, especially gloss finishes, show micro-scratches easily — always use soft cloths." },
 ],
 },
 {
 id: "duco",
 label: "Duco / Paint",
 steps: [
 { title: "Daily Care", body: "Painted surfaces should be dusted with a soft cloth. Duco is susceptible to chalking in harsh UV environments — limit direct sun exposure." },
 { title: "Cleaning", body: "Use a mild detergent solution with a soft cloth. Always wipe in circular motions for painted surfaces to avoid streaking." },
 { title: "Chipping", body: "Paint chips are best addressed early. Our team can supply a matched touch-up paint for each door finish code." },
 { title: "Chemical Caution", body: "Avoid any solvent-based cleaners on painted surfaces. Even mild solvents can strip or dull the paint layer." },
 { title: "Re-painting", body: "Duco surfaces can be professionally repainted every 8–12 years as part of a home refresh. Contact our service team for matching." },
 ],
 },
];

export default function SurfaceCare() {
 const [active, setActive] = useState("veneer");
 const activeSurface = surfaces.find((s) => s.id === active)!;

 return (
 <section className="bg-[#faf9f7] py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-neutral-100">
 <div className="max-w-[1400px] mx-auto">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="mb-14 md:mb-20"
 >
 <p className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-6">
 Surface-Specific Guide
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
 Care by{" "}
 <span className=" text-neutral-400">Finish Type</span>
 </h2>
 </motion.div>

 {/* Tabs */}
 <div className="flex flex-wrap gap-2 mb-12">
 {surfaces.map((surface) => (
 <button
 key={surface.id}
 onClick={() => setActive(surface.id)}
 className={`px-6 py-3 text-[11px] tracking-wider uppercase font-medium border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a568] ${
 active === surface.id
 ? "bg-neutral-900 text-white border-neutral-900"
 : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
 }`}
 >
 {surface.label}
 </button>
 ))}
 </div>

 {/* Content */}
 <AnimatePresence mode="wait">
 <motion.div
 key={active}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
 >
 {activeSurface.steps.map((step, i) => (
 <div
 key={step.title}
 className="bg-white border border-neutral-100 p-7 hover:border-[#c9a568]/40 transition-all duration-300 group"
 >
 <p className="text-[10px] tracking-[0.35em] uppercase text-[#c1a077] mb-3">Step {String(i + 1).padStart(2, "0")}</p>
 <h4 className="text-base font-light text-neutral-900 mb-3 tracking-tight">{step.title}</h4>
 <div className="h-px w-6 bg-neutral-200 mb-4 group-hover:w-10 group-hover:bg-[#c9a568] transition-all duration-500" />
 <p className="text-sm text-neutral-500 leading-[1.8]">{step.body}</p>
 </div>
 ))}
 </motion.div>
 </AnimatePresence>

 {/* Download CTA */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="mt-16 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-neutral-200 pt-12"
 >
 <div>
 <p className="text-neutral-900 font-light text-lg md:text-xl mb-1">Download the Complete Care Guide</p>
 <p className="text-neutral-400 text-sm">A printable PDF covering all surfaces, seasonal care, and service contacts.</p>
 </div>
 <button className="flex-shrink-0 inline-flex items-center gap-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 px-8 py-4 text-[11px] font-medium tracking-wider uppercase transition-all duration-300">
 Download PDF
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M12 16L7 11m5 5 5-5M12 16V4M4 20h16" />
 </svg>
 </button>
 </motion.div>
 </div>
 </section>
 );
}
