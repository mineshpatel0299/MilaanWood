'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const doors = [
 { 
 id: 1, 
 title: 'Door 1',
 imageClosed: 'https://res.cloudinary.com/de4pazo51/image/upload/v1782194571/all_doors-04_ijvvbr.png',
 imageOpen: 'https://res.cloudinary.com/de4pazo51/image/upload/v1782194571/all_doors_open-04_q3n5op.png'
 },
 { 
 id: 2, 
 title: 'Door 2',
 imageClosed: 'https://res.cloudinary.com/de4pazo51/image/upload/v1782202441/all_doors-03_vbcpqk.png',
 imageOpen: 'https://res.cloudinary.com/de4pazo51/image/upload/v1782202442/all_doors_open-03_g7almo.png'
 },
 { 
 id: 3, 
 title: 'Door 3',
 imageClosed: 'https://res.cloudinary.com/de4pazo51/image/upload/v1782202605/all_doors-02_gscxfn.png',
 imageOpen: 'https://res.cloudinary.com/de4pazo51/image/upload/v1782202604/all_doors_open-02_zd7p9g.png'
 },
 { 
 id: 4, 
 title: 'Door 4',
 imageClosed: 'https://res.cloudinary.com/de4pazo51/image/upload/v1782202859/all_doors-01_nvlnb3.png',
 imageOpen: 'https://res.cloudinary.com/de4pazo51/image/upload/v1782202858/all_doors_open-01_mq8uag.png'
 },
];

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: { staggerChildren: 0.15 }
 }
};

const itemVariants = {
 hidden: { opacity: 0, y: 40 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } }
};

export default function DoorsSection() {
 const [openDoorId, setOpenDoorId] = useState<number | null>(null);

 return (
 <section className="bg-white text-black py-20 md:py-32 px-4 md:px-8 lg:px-16 font-sans">
 <div className="max-w-[1600px] mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="mb-12 md:mb-16 flex flex-col items-center"
 >
 <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Our Signature Collection</h2>
 <p className="mt-4 text-neutral-500 max-w-lg text-center text-sm md:text-base">
 <span className="hidden lg:inline">Hover to open</span>
 <span className="inline lg:hidden">Tap a door to open</span>
 {" — explore our signature collection of CNC-engineered and fully customized door systems."}
 </p>
 </motion.div>

 <motion.div
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full max-w-[1400px] mx-auto"
 >
 {doors.map((door) => (
 <motion.div 
 key={door.id} 
 variants={itemVariants} 
 className="relative group cursor-pointer w-full aspect-[0.45/1] overflow-hidden bg-neutral-100 hover:shadow-2xl hover:z-10 transition-shadow duration-[1200ms]"
 onClick={() => {
 if (window.innerWidth < 1024) {
 setOpenDoorId(prev => prev === door.id ? null : door.id);
 }
 }}
 >
 {/* Open Door Image (Background) */}
 <Image
 src={door.imageOpen}
 alt={`${door.title} Open`}
 fill
 className={`object-cover transition-transform duration-300 ease-out z-0 ${openDoorId === door.id ? 'scale-100' : 'scale-[1.05] lg:group-hover:scale-100'}`}
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
 />

 {/* Closed Door Image (Foreground, fades out) */}
 <div className={`absolute inset-0 z-10 transition-opacity duration-300 ease-out pointer-events-none ${openDoorId === door.id ? 'opacity-0' : 'opacity-100 lg:group-hover:opacity-0'}`}>
 <Image
 src={door.imageClosed}
 alt={`${door.title} Closed`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
 />
 </div>

 {/* Arrow Icon */}
 <div className="absolute inset-y-0 right-12 md:right-[15%] flex flex-col justify-center pointer-events-none z-20">
 <div className={`transition-opacity duration-300 ease-out translate-y-12 md:translate-y-16 ${openDoorId === door.id ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`}>
 <motion.div
 animate={{ x: [0, 10, 0] }}
 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
 className="text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]"
 >
 <ArrowRight size={36} strokeWidth={1.5} />
 </motion.div>
 </div>
 </div>

 {/* Tap Indicator (Mobile/Tablet Only) */}
 <div 
 className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-300 lg:hidden flex flex-col items-center gap-2 ${
 openDoorId === door.id ? 'opacity-0' : 'opacity-100'
 }`}
 >
 <span className="relative flex h-2.5 w-2.5">
 <span className="animate-ping absolute inline-flex h-full w-full bg-white opacity-75"></span>
 <span className="relative inline-flex h-2.5 w-2.5 bg-white"></span>
 </span>
 <span className="text-[9px] font-bold tracking-wide text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
 Tap to Open
 </span>
 </div>
 </motion.div>
 ))}
 </motion.div>
 </div>
 </section>
 );
}
