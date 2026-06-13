"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe2, HeartHandshake, TrendingUp, Leaf } from "lucide-react";

const reasons = [
  {
    icon: <Globe2 size={28} />,
    title: "150+ Countries",
    desc: "One of the widest freight networks in the industry, with local partners in every major trade corridor.",
  },
  {
    icon: <Clock size={28} />,
    title: "99% On-Time Rate",
    desc: "Our routing algorithms and carrier SLAs consistently deliver on schedule — or we make it right.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Full Cargo Insurance",
    desc: "All-risk coverage up to $2M per shipment as standard. Additional coverage available on request.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Cost Transparency",
    desc: "No hidden fees. You see every line item before we move a single box — guaranteed.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Dedicated Account Teams",
    desc: "You'll never deal with a generic call center. Your team knows your business and your cargo.",
  },
  {
    icon: <Leaf size={28} />,
    title: "Carbon-Offset Options",
    desc: "Choose our GreenRoute program to offset 100% of your shipment's carbon footprint at no extra cost.",
  },
];

const logos = ["DHL", "FedEx", "MSC", "Emirates SkyCargo", "DB Schenker", "Maersk"];

export default function WhyUs() {
  return (
    <section id="why" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Why Aurora
          </span>
          <h2 className="text-5xl font-bold mt-3">
            Built for businesses
            <span className="text-slate-400"> that can't afford delays.</span>
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Over 3,000 companies trust Aurora Freight to keep their supply chains
            moving. Here's what sets us apart.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-slate-900 border border-white/10 rounded-3xl p-7 hover:border-blue-500/40 hover:bg-slate-900/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-colors">
                {r.icon}
              </div>
              <h3 className="text-xl font-semibold mt-5">{r.title}</h3>
              <p className="text-slate-400 mt-3 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-8">
            Carrier & Partner Network
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {logos.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="px-6 py-3 bg-slate-900 border border-white/10 rounded-2xl text-slate-400 font-medium text-sm hover:border-white/20 hover:text-white transition"
              >
                {l}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}