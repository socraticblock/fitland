"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group relative">
          <div className="relative h-20 flex items-center overflow-visible">
            <Image 
              src="/logo.png" 
              alt="FitLand Logo" 
              width={350} 
              height={140} 
              className="h-28 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <span className="text-zinc-500 font-medium text-sm hidden sm:inline-block">(ფიტლენდი)</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Trainers", "Facilities", "Location"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <button className="bg-brand-primary text-black px-6 py-2 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]">
          Join Now
        </button>
      </div>
    </nav>
  );
}
