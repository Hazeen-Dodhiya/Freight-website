"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plane, Ship, Truck, Package, BarChart3, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Air Freight",
    icon: <Plane size={32} />,
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    short: "Fast global transportation.",
    desc:
      "We operate dedicated air cargo corridors to 80+ countries with same-day booking, priority handling, and door-to-door service. Ideal for high-value, time-sensitive cargo.",
    features: ["Next-flight-out options", "Temperature-controlled cargo", "Customs pre-clearance", "Real-time flight tracking"],
    time: "1–5 days",
    ideal: "Electronics, Pharma, Fashion",
  },
  {
    title: "Ocean Freight",
    icon: <Ship size={32} />,
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
    short: "Cost-effective international shipping.",
    desc:
      "FCL and LCL solutions with access to every major port. We consolidate cargo from multiple shippers to reduce costs, with full container tracking from origin to destination.",
    features: ["FCL & LCL options", "Port-to-port or door-to-door", "Hazardous cargo certified", "Competitive freight rates"],
    time: "14–35 days",
    ideal: "Bulk goods, Machinery, Consumer goods",
  },
  {
    title: "Ground Freight",
    icon: <Truck size={32} />,
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    short: "Reliable local and regional delivery.",
    desc:
      "A fleet of 500+ vehicles covering all major trade lanes across South Asia, the Middle East, and Europe. FTL and LTL options with live GPS tracking.",
    features: ["FTL & LTL", "GPS-tracked fleet", "Last-mile delivery", "Cross-border expertise"],
    time: "1–7 days",
    ideal: "Retail, Construction, FMCG",
  },
  {
    title: "Warehousing",
    icon: <Package size={32} />,
    color: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    short: "Smart storage and fulfillment.",
    desc:
      "2M+ sq ft of bonded and non-bonded warehouse space across 12 countries. We offer pick-and-pack, kitting, and B2C/B2B fulfillment with same-day dispatch.",
    features: ["Climate-controlled storage", "Pick & pack fulfillment", "Bonded warehousing", "Inventory management system"],
    time: "On-demand",
    ideal: "E-commerce, Retail, Manufacturing",
  },
  {
    title: "Supply Chain Analytics",
    icon: <BarChart3 size={32} />,
    color: "from-green-500/20 to-green-600/10",
    border: "border-green-500/30",
    accent: "text-green-400",
    short: "Data-driven logistics decisions.",
    desc:
      "Our analytics platform gives you full visibility across your supply chain — identifying bottlenecks, predicting delays, and surfacing cost-reduction opportunities.",
    features: ["Live dashboards", "Delay prediction AI", "Carrier benchmarking", "Carbon footprint reports"],
    time: "Real-time",
    ideal: "Enterprise, Multi-modal shippers",
  },
  {
    title: "24/7 Customer Support",
    icon: <Headphones size={32} />,
    color: "from-rose-500/20 to-rose-600/10",
    border: "border-rose-500/30",
    accent: "text-rose-400",
    short: "Always-on dedicated support.",
    desc:
      "Every client gets a dedicated account manager backed by a round-the-clock operations team. We resolve issues before they become problems.",
    features: ["Named account manager", "Live chat & phone", "Proactive delay alerts", "Claims handling"],
    time: "24/7/365",
    ideal: "All clients",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-5xl font-bold mt-3">Our Services</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            End-to-end logistics solutions tailored for global businesses — from a
            single parcel to a full supply chain overhaul.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActive(active === i ? null : i)}
              className={`bg-gradient-to-br ${s.color} border ${s.border} rounded-3xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className={`${s.accent} mb-5`}>{s.icon}</div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{s.short}</p>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-300 text-sm mt-4 leading-relaxed border-t border-white/10 pt-4">
                      {s.desc}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                          <ArrowRight size={13} className={s.accent} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex gap-4 text-xs text-slate-400">
                      <span>⏱ {s.time}</span>
                      <span>🎯 {s.ideal}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={`mt-4 text-sm font-medium ${s.accent} flex items-center gap-1`}>
                {active === i ? "Show less" : "Learn more"}
                <motion.span
                  animate={{ rotate: active === i ? 90 : 0 }}
                  className="inline-block"
                >
                  <ArrowRight size={14} />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}