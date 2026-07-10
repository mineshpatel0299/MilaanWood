"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TEAM = [
 { name: "Arnab", slug: "arnab", title: "Chief Marketing Officer" },
 { name: "Jasbir Singh", slug: "jasbir-singh", title: "Head of Department – Sales" },
 { name: "Shivani T.", slug: "shivani-t", title: "Head of Product Development" },
 { name: "Shrikant", slug: "shrikant", title: "Chief Production Officer" },
];

/** Portrait card with graceful fallback to a monogram tile if the image hasn't been uploaded yet. */
function TeamPhoto({ src, name }: { src: string; name: string }) {
 const [errored, setErrored] = useState(false);

 return (
 <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
 {!errored ? (
 <Image
 src={src}
 alt={name}
 fill
 sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-100"
 onError={() => setErrored(true)}
 />
 ) : (
 <div className="w-full h-full flex items-center justify-center">
 <span className="text-4xl font-light text-[#c1a077]/50">{name.charAt(0)}</span>
 </div>
 )}
 </div>
 );
}

export default function TeamSpecialists() {
 return (
 <section className="bg-white px-6 md:px-16 lg:px-24 py-24 md:py-32">
 <div className="max-w-[1400px] mx-auto">
 <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-[#c1a077] text-xs md:text-sm tracking-widest uppercase mb-6 font-medium"
 >
 By Your Side, Each Step Of The Way
 </motion.p>
 <motion.h2
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-3xl md:text-5xl font-light text-neutral-900 tracking-tight leading-tight"
 >
 Our Trusted Team <br />
 <span className=" text-neutral-400">of Specialists</span>
 </motion.h2>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
 {TEAM.map((member, idx) => (
 <motion.div
 key={member.name}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.7, delay: idx * 0.1 }}
 className="group flex flex-col"
 >
 <div className="relative mb-6">
 <div className="absolute -z-10 border border-[#c1a077]/40 -bottom-3 -right-3 w-full h-full" />
 <TeamPhoto src={`/team/${member.slug}.jpg`} name={member.name} />
 </div>

 <h3 className="text-lg md:text-xl font-light text-neutral-900 tracking-tight mb-1">
 {member.name}
 </h3>
 <p className="text-neutral-400 text-[10px] md:text-[11px] uppercase tracking-wide mb-4">
 {member.title}
 </p>

 <a
 href="/contact"
 className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-[#c1a077] hover:text-neutral-900 transition-colors duration-300 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1a077]"
 >
 Contact
 <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
 </a>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
