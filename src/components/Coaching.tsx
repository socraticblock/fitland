"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Coaching() {
  const coaches = [
    { name: "Rati", role: "Personal Trainer & Founder", image: "/trainer3.png" },
    { name: "", role: "Personal Trainer", image: "/trainer1.png" },
    { name: "Kristina", role: "Personal Trainer", image: "/trainer2.png" },
  ];

  return (
    <section id="trainers" className="py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-white"
        >
          Meet Your <span className="text-brand-primary">Elite Coaching Team</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] relative rounded-2xl shadow-lg overflow-hidden mb-6">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-brand-primary transition-colors">
                {coach.name}
              </h3>
              <p className="text-zinc-500 font-bold uppercase text-sm tracking-widest">
                {coach.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
