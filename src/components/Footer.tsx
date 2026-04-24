"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Camera, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "505 55 82 48" },
    { icon: Mail, label: "Email Us", value: "fitnessfitland@gmail.com" },
    { icon: MapPin, label: "Visit Us", value: "Pekini N5, Tbilisi, Georgia" },
  ];

  return (
    <footer id="location" className="py-24 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-video rounded-2xl shadow-2xl overflow-hidden relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1717.7834054214866!2d44.7748874809104!3d41.72034079241939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473b07d3dc6cd%3A0x2cf516e3d89ff215!2sFitLand!5e1!3m2!1sen!2sge!4v1777008175156!5m2!1sen!2sge" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-2 border-zinc-800 rounded-2xl" />
          </motion.div>

          {/* Right Side: Contact Data */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black uppercase tracking-tighter mb-8 text-white"
            >
              Location & <span className="text-brand-primary">Contact</span>
            </motion.h2>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest mb-1">{info.label}</p>
                    <p className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                <a 
                  href="https://www.facebook.com/fitland.ge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-brand-primary font-bold uppercase text-sm tracking-[0.2em] transition-colors"
                >
                  Facebook: @fitland.ge
                </a>
                <a 
                  href="https://www.instagram.com/Fitland.fitness1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-brand-primary font-bold uppercase text-sm tracking-[0.2em] transition-colors"
                >
                  Instagram: @fitland.fitness1
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Image 
              src="/logo.png" 
              alt="FitLand Logo" 
              width={300} 
              height={120} 
              className="h-24 w-auto object-contain"
            />
            <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
              © 2026 FitLand Fitness. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-[10px] font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
