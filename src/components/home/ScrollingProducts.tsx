"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Classic Solid Teak Door",
    factory: "MilanWood Craft",
    price: "$850.00",
    oldPrice: "$950.00",
    image: "/door_featured.png",
  },
  {
    id: 2,
    name: "Contemporary Glass Panel Door",
    factory: "Modern Entrances",
    price: "$1,240.00",
    image: "/contemporary_door.png",
  },
  {
    id: 3,
    name: "Sun Carved CNC Door",
    factory: "Artisan Woodworks",
    price: "$1,440.00",
    oldPrice: "$1,600.00",
    image: "/sun_door_cnc.png",
  },
  {
    id: 4,
    name: "Minimalist Flush Door",
    factory: "Sleek Designs",
    price: "$450.00",
    oldPrice: "$500.00",
    image: "/door_cat_2.png",
  },
  {
    id: 5,
    name: "Grand Pivot Entrance Door",
    factory: "MilanWood Custom",
    price: "$2,215.00",
    oldPrice: "$2,450.00",
    image: "/door_featured_2.png",
  },
  {
    id: 6,
    name: "Elegant Double French Doors",
    factory: "Heritage Collection",
    price: "$1,870.00",
    oldPrice: "$1,999.00",
    image: "/door_featured_3.png",
  },
];

export default function ScrollingProducts() {
  return (
    <section className="py-8 bg-[#fafafa] overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex w-max"
        >
          {/* We duplicate the array to create a seamless loop */}
          {[...products, ...products].map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="relative flex-shrink-0 w-[260px] h-[340px] md:w-[280px] md:h-[360px] rounded-3xl overflow-hidden group cursor-pointer mr-4"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end text-white z-10">
                <h3 className="font-semibold text-[15px] leading-tight mb-1 line-clamp-2 text-white">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-300 mb-1 line-clamp-1">
                  {product.factory}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
