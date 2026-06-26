"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/10 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-xl font-bold">
              Aurora Carla Maria
            </h2>
            <p className="text-slate-400 mt-4 text-sm">
              Global logistics platform built for speed, scale, and intelligence.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            <p className="font-semibold text-white mb-2">Quick Links</p>

            <a href="#home" className="block hover:text-white transition">
                Home
            </a>

            <a href="#about" className="block hover:text-white transition">
                About
            </a>

            <a href="#services" className="block hover:text-white transition">
                Services
            </a>

            <a href="#quote" className="block hover:text-white transition">
                Get Quote
            </a>

            <a href="#contact" className="block hover:text-white transition">
                Contact
            </a>
          </div>

          <div className="text-sm text-slate-400">
            <p className="font-semibold text-white mb-2">Contact</p>
            <p>support@aurorafreight.com</p>
            <p>+44 07784550198</p>
          </div>

        </div>

        {/* bottom bar (ANIMATED SAFE NOW) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-slate-500"
        >
          <p>© {new Date().getFullYear()} Aurora Carla Maria</p>
          <p>Built for global logistics excellence</p>
        </motion.div>

      </div>
    </footer>
  );
}
