"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader({ onEnter }: { onEnter: () => void }) {
 const [isExiting, setIsExiting] = useState(false);

 const handleEnter = () => {
 setIsExiting(true);
 setTimeout(onEnter, 1200);
 };

 return (
 <AnimatePresence>
 {!isExiting ? (
 <motion.div
 key="preloader"
 className="fixed inset-0 z-[200] flex"
 >
 {/* Left half */}
 <motion.div
 exit={{ x: "-100%" }}
 transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
 className="relative w-1/2 h-full"
 >
 <Image
 src="https://res.cloudinary.com/de4pazo51/image/upload/v1782298650/PRELOADER_MILAN_WOOD-01_pafo2p.png"
 alt="Milan Wood"
 fill
 className="object-cover"
 priority
 unoptimized
 />
 </motion.div>

 {/* Right half */}
 <motion.div
 exit={{ x: "100%" }}
 transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
 className="relative w-1/2 h-full"
 >
 <Image
 src="https://res.cloudinary.com/de4pazo51/image/upload/v1782298650/PRELOADER_MILAN_WOOD-02_oacwfk.png"
 alt="Milan Wood"
 fill
 className="object-cover"
 priority
 unoptimized
 />
 </motion.div>

 {/* Center enter button */}
 <motion.div
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.6 }}
 transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
 className="absolute inset-0 flex items-center justify-center z-10"
 >
 <button
 onClick={handleEnter}
 className="group relative px-10 py-4 border border-white/40 text-white text-[11px] tracking-widest uppercase cursor-pointer backdrop-blur-sm bg-black/10 hover:bg-white hover:text-black transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
 >
 Enter
 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-white group-hover:w-full transition-all duration-500" />
 </button>
 </motion.div>
 </motion.div>
 ) : (
 <motion.div
 key="preloader-exit"
 className="fixed inset-0 z-[200] flex pointer-events-none"
 >
 {/* Left half — slides out */}
 <motion.div
 initial={{ x: "0%" }}
 animate={{ x: "-100%" }}
 transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
 className="relative w-1/2 h-full"
 >
 <Image
 src="https://res.cloudinary.com/de4pazo51/image/upload/v1782298650/PRELOADER_MILAN_WOOD-01_pafo2p.png"
 alt="Milan Wood"
 fill
 className="object-cover"
 priority
 unoptimized
 />
 </motion.div>

 {/* Right half — slides out */}
 <motion.div
 initial={{ x: "0%" }}
 animate={{ x: "100%" }}
 transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
 className="relative w-1/2 h-full"
 >
 <Image
 src="https://res.cloudinary.com/de4pazo51/image/upload/v1782298650/PRELOADER_MILAN_WOOD-02_oacwfk.png"
 alt="Milan Wood"
 fill
 className="object-cover"
 priority
 unoptimized
 />
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 );
}
