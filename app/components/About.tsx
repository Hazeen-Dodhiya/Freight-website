"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  { year: "2008", title: "Founded in Karachi", desc: "Aurora started as a regional freight broker serving South Asia." },
  { year: "2013", title: "First International Hub", desc: "Expanded to Dubai with a dedicated ocean freight corridor." },
  { year: "2018", title: "Digital Transformation", desc: "Launched our proprietary real-time tracking platform across all modes." },
  { year: "2024", title: "Global Reach", desc: "Now operating in 150+ countries with 1,200 logistics partners worldwide." },
];

const values = [
  "ISO 9001:2015 certified operations",
  "Carbon-offset shipping options",
  "AI-powered route optimization",
  "Dedicated account managers",
  "24/7 shipment monitoring",
  "Full cargo insurance coverage",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h2 className="text-5xl font-bold mt-3 leading-tight">
            Connecting the world,
            <br />
            <span className="text-slate-400">one shipment at a time.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 mt-20 items-start">
          {/* Left: Image + values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Aurora Freight operations"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "Aurora transformed our supply chain. We reduced freight costs by 23% in the first year."
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-xs font-bold">
                      SC
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Sarah Chen</div>
                      <div className="text-xs text-slate-400">Head of Logistics, NovaTech</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                  {v}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <div ref={ref} className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent" />
            <div className="space-y-12 pl-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1, type: "spring" }}
                    className="absolute -left-[3.05rem] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-slate-950 shadow-lg shadow-blue-500/50"
                  />
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-1">{m.title}</h3>
                  <p className="text-slate-400 mt-2 text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Mission block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-14 bg-gradient-to-br from-blue-600/15 to-cyan-600/5 border border-blue-500/20 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-blue-300">Our Mission</h3>
              <p className="text-slate-300 mt-3 leading-relaxed">
                To simplify global trade for businesses of every size — making
                logistics as transparent, predictable, and effortless as sending
                an email. We believe the world works better when goods move freely.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}