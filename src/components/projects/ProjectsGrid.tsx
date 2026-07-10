"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Hospitality"] as const;
type Category = (typeof categories)[number];

const projects = [
 {
 id: "p1",
 name: "The Oberoi Residences",
 location: "Mumbai, Maharashtra",
 category: "Hospitality" as Category,
 series: "Signature Series",
 image: "/door_featured.png",
 year: "2024",
 scope: "42 Doors",
 },
 {
 id: "p2",
 name: "Arjun Villa",
 location: "Pune, Maharashtra",
 category: "Residential" as Category,
 series: "Art Deco Series",
 image: "/door_featured_2.png",
 year: "2024",
 scope: "12 Doors",
 },
 {
 id: "p3",
 name: "IndiQube Tech Park",
 location: "Bengaluru, Karnataka",
 category: "Commercial" as Category,
 series: "Modern Series",
 image: "/door_featured_3.png",
 year: "2023",
 scope: "120 Doors",
 },
 {
 id: "p4",
 name: "Sea View Penthouse",
 location: "Goa",
 category: "Residential" as Category,
 series: "Zen Series",
 image: "/contemporary_door.png",
 year: "2024",
 scope: "8 Doors",
 },
 {
 id: "p5",
 name: "The Grand Courtyard Hotel",
 location: "Jaipur, Rajasthan",
 category: "Hospitality" as Category,
 series: "Indian Traditional Series",
 image: "/sun_door_cnc.png",
 year: "2023",
 scope: "78 Doors",
 },
 {
 id: "p6",
 name: "Prestige Luxury Apartments",
 location: "Hyderabad, Telangana",
 category: "Residential" as Category,
 series: "French Series",
 image: "/door_cat_4.png",
 year: "2023",
 scope: "64 Doors",
 },
 {
 id: "p7",
 name: "Brigade Corporate Tower",
 location: "Bengaluru, Karnataka",
 category: "Commercial" as Category,
 series: "Minimalist Series",
 image: "/door_cat_5.png",
 year: "2022",
 scope: "200 Doors",
 },
 {
 id: "p8",
 name: "Taj Connemara Renovation",
 location: "Chennai, Tamil Nadu",
 category: "Hospitality" as Category,
 series: "Classical Victorian Series",
 image: "/door_cat_2.png",
 year: "2022",
 scope: "95 Doors",
 },
];

export default function ProjectsGrid() {
 const [active, setActive] = useState<Category>("All");

 const filtered =
 active === "All" ? projects : projects.filter((p) => p.category === active);

 return (
 <section className="bg-white py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-neutral-100">
 <div className="max-w-[1400px] mx-auto">
 {/* Header + Filters */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
 className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20"
 >
 <div>
 <p className="text-[10px] md:text-[11px] tracking-widest text-[#c1a077] font-semibold uppercase mb-6">
 Project Portfolio
 </p>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
 All{" "}
 <span className=" text-neutral-400">Projects</span>
 </h2>
 </div>

 {/* Filter Tabs */}
 <div className="flex flex-wrap gap-2">
 {categories.map((cat) => (
 <button
 key={cat}
 onClick={() => setActive(cat)}
 className={`px-5 py-2.5 text-[11px] tracking-wider uppercase font-medium border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a568] ${
 active === cat
 ? "bg-neutral-900 text-white border-neutral-900"
 : "text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
 }`}
 >
 {cat}
 </button>
 ))}
 </div>
 </motion.div>

 {/* Grid */}
 <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
 <AnimatePresence mode="popLayout">
 {filtered.map((project) => (
 <motion.div
 key={project.id}
 layout
 initial={{ opacity: 0, scale: 0.96 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.94 }}
 transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
 className="group cursor-pointer"
 >
 {/* Image */}
 <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-5">
 <Image
 src={project.image}
 alt={project.name}
 fill
 className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06]"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

 {/* Category badge */}
 <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5">
 <span className="text-[9px] tracking-wider uppercase text-[#c9a568]">{project.category}</span>
 </div>

 {/* Scope overlay */}
 <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
 <p className="text-white text-sm font-light">{project.scope}</p>
 </div>
 </div>

 {/* Info */}
 <div className="flex items-start justify-between gap-2 mb-2">
 <h3 className="text-base md:text-lg font-light text-neutral-900 tracking-tight group-hover:text-[#c1a077] transition-colors duration-300 leading-tight">
 {project.name}
 </h3>
 <span className="text-[10px] tracking-wide text-neutral-400 flex-shrink-0 pt-0.5">{project.year}</span>
 </div>
 <div className="flex items-center gap-1.5 mb-2">
 <MapPin size={11} className="text-[#c9a568] flex-shrink-0" />
 <p className="text-xs text-neutral-400">{project.location}</p>
 </div>
 <p className="text-[10px] tracking-wider uppercase text-[#c1a077]/70">{project.series}</p>
 </motion.div>
 ))}
 </AnimatePresence>
 </motion.div>
 </div>
 </section>
 );
}
