"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-zinc-800 bg-black">
      {/* Left Content */}
      <div className="container mx-auto px-6 z-10 relative pointer-events-none pt-20">
        <div className="max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pointer-events-auto"
          >
            <motion.p 
              variants={itemVariants}
              className="text-brand-primary font-black uppercase tracking-[0.3em] text-sm md:text-base mb-4"
            >
              FitLand Fitness
            </motion.p>

            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-[110px] font-black tracking-tighter uppercase leading-[0.8] mb-8"
            >
              Dominate <br />
              Your <br />
              <span className="text-brand-primary">Potential.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-2xl font-bold text-zinc-400 uppercase tracking-tight mb-12 max-w-lg"
            >
              Premier Gym in Tbilisi. Est. 2020.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button className="group relative bg-brand-primary text-black px-12 py-6 text-xl font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(204,255,0,0.2)]">
                <span className="relative z-10">Claim Your Free Session</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Image Content - Absolute with deep fade */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 left-0 md:left-[45%]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full relative hero-mask"
            >
              <Image
                src="/hero.jpg"
                alt="FitLand Gym Hero"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                priority
              />
              {/* Refined depth overlays for more clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30 md:hidden" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
