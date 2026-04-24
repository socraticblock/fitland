"use client";

import { motion } from "framer-motion";
import { Dumbbell, Users, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "Newest Equipment",
    description: "State-of-the-art machines and free weights designed for peak performance and safety.",
    icon: Dumbbell,
  },
  {
    title: "Qualified Trainers",
    description: "Expert coaches dedicated to your success with personalized programming and guidance.",
    icon: Users,
  },
  {
    title: "Friendly Environment",
    description: "A community-focused atmosphere where everyone is welcome and motivated to excel.",
    icon: HeartHandshake,
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-zinc-900 border border-brand-primary/50 rounded-2xl hover:border-brand-primary transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <feature.icon size={120} strokeWidth={1} />
              </div>
              
              <div className="w-16 h-16 bg-brand-primary text-black rounded-xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                <feature.icon size={32} />
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">
                {feature.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
