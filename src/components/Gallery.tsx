"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const items = [
    { size: "col-span-2 row-span-2", label: "Main Gym Floor", image: "/main-gym-floor.jpg" },
    { size: "col-span-1 row-span-1", label: "Cardio Zone", image: "/cardio-zone.jpg" },
    { size: "col-span-1 row-span-1", label: "Free Weights", image: "/free-weights.jpg" },
    { size: "col-span-2 md:col-span-1 row-span-2 md:row-span-2", label: "Yoga Studio", image: "/yoga-studio.jpg" },
  ];

  return (
    <section id="facilities" className="py-24 border-b border-zinc-800 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white"
          >
            Our Premium <span className="text-brand-primary">Facility</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-zinc-500 font-bold uppercase tracking-widest text-sm"
          >
            Explore the limits of performance
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${item.size} min-h-[200px] bg-white rounded-2xl shadow-xl flex items-center justify-center text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase p-4 relative group overflow-hidden`}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="text-center z-10">
                <span className="text-white text-lg font-black tracking-tighter uppercase">{item.label}</span>
              </div>
              
              {/* Overlay Decor */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-zinc-200 opacity-20 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-zinc-200 opacity-20 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
