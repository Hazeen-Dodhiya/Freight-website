"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

// function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
//   useEffect(() => {
//     const controls = animate(count, to, { duration: 2, delay: 0.8, ease: "easeOut" });
//     return controls.stop;
//   }, []);
//   return (
//     <motion.span>
//       {rounded}{suffix}
//     </motion.span>
//   );
// }
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = count.on("change", (v) => {
      setDisplay(Math.round(v));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [to]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: "+", label: "Countries Served" },
  { value: 12000, suffix: "+", label: "Shipments / Year" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
  { value: 24, suffix: "/7", label: "Live Support" },
];

const badges = [
  { icon: <Globe size={14} />, label: "Global Network" },
  { icon: <Shield size={14} />, label: "Insured Cargo" },
  { icon: <Zap size={14} />, label: "Real-Time Tracking" },
];

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-100px] left-[-100px] w-[700px] h-[700px] bg-blue-600/25 blur-[160px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-cyan-500/20 blur-[160px] rounded-full"
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 py-24">
        {/* Left */}
        <div>
          {/* Badge row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map((b, i) => (
              <motion.span
                key={b.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-300"
              >
                {b.icon}
                {b.label}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            Global Freight
            <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Made Simple.
              </span>
              <motion.svg
                viewBox="0 0 320 18"
                className="absolute -bottom-3 left-0 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.path
                  d="M 0 12 Q 80 2 160 10 Q 240 18 320 8"
                  fill="none"
                  stroke="url(#underline-grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-grad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 text-slate-300 text-lg leading-relaxed max-w-xl"
          >
            Air, sea, and land logistics powered by precision, speed, and
            reliability. Aurora connects your business to global markets with
            full-chain visibility and zero guesswork.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition-colors shadow-lg shadow-blue-600/30"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-white/20 px-8 py-4 rounded-2xl font-medium hover:bg-white/5 transition-colors"
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-slate-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 rounded-[2.5rem] blur-xl" />
          <motion.img
            onLoad={() => setImgLoaded(true)}
            animate={imgLoaded ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
            alt="Global freight operations"
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-semibold">Shipment #AF-8821</div>
                <div className="text-xs text-green-400">In Transit · On Schedule</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -top-6 -right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
          >
            <div className="text-xs text-slate-400">Today's Deliveries</div>
            <div className="text-2xl font-bold text-white mt-1">247</div>
            <div className="text-xs text-blue-400 mt-0.5">↑ 12% vs yesterday</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
}






// "use client";

// import {
//   motion,
//   useMotionValue,
//   animate,
// } from "framer-motion";

// import { useEffect, useState } from "react";
// import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

// /* ---------------- COUNT UP (FIXED) ---------------- */
// function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const count = useMotionValue(0);
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     const controls = animate(count, to, {
//       duration: 2,
//       ease: "easeOut",
//     });

//     const unsubscribe = count.on("change", (v) => {
//       setDisplay(Math.round(v));
//     });

//     return () => {
//       controls.stop();
//       unsubscribe();
//     };
//   }, [to]);

//   return (
//     <span className="tabular-nums">
//       {display.toLocaleString()}
//       {suffix}
//     </span>
//   );
// }

// /* ---------------- HERO ---------------- */
// export default function Hero() {
//   const [imgLoaded, setImgLoaded] = useState(false);

//   const stats = [
//     { value: 150, suffix: "+", label: "Countries Served" },
//     { value: 12000, suffix: "+", label: "Shipments / Year" },
//     { value: 99, suffix: "%", label: "On-Time Delivery" },
//     { value: 24, suffix: "/7", label: "Live Support" },
//   ];

//   const badges = [
//     { icon: <Globe size={14} />, label: "Global Network" },
//     { icon: <Shield size={14} />, label: "Insured Cargo" },
//     { icon: <Zap size={14} />, label: "Real-Time Tracking" },
//   ];

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center relative overflow-hidden pt-24"
//     >
//       {/* ---------------- BACKGROUND ---------------- */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute top-[-120px] left-[-120px] w-[700px] h-[700px] bg-blue-600/25 blur-[160px] rounded-full"
//         />

//         <motion.div
//           animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
//           transition={{ duration: 12, repeat: Infinity, delay: 2 }}
//           className="absolute bottom-[-120px] right-[-120px] w-[600px] h-[600px] bg-cyan-500/20 blur-[160px] rounded-full"
//         />

//         {/* grid */}
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       {/* ---------------- CONTENT ---------------- */}
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

//         {/* LEFT SIDE */}
//         <div>

//           {/* BADGES */}
//           <div className="flex flex-wrap gap-2 mb-8">
//             {badges.map((b, i) => (
//               <motion.div
//                 key={b.label}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300"
//               >
//                 {b.icon}
//                 {b.label}
//               </motion.div>
//             ))}
//           </div>

//           {/* TITLE */}
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-6xl md:text-7xl font-extrabold leading-[1.05]"
//           >
//             Global Freight
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
//               Made Simple.
//             </span>
//           </motion.h1>

//           {/* DESCRIPTION */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.25 }}
//             className="mt-8 text-slate-300 text-lg leading-relaxed max-w-xl"
//           >
//             Aurora Freight SCM is a next-generation logistics platform that
//             connects air, sea, and land transport into one intelligent global
//             network. We provide full visibility, faster delivery cycles, and
//             enterprise-grade reliability for businesses operating across borders.
//           </motion.p>

//           <p className="mt-4 text-slate-400 max-w-xl">
//             From small businesses to global enterprises, we manage thousands of
//             shipments daily across 50+ countries with real-time tracking,
//             predictive logistics optimization, and secure freight handling.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-wrap gap-4 mt-10">
//             <a
//               href="#quote"
//               className="flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg shadow-blue-600/20"
//             >
//               Get a Free Quote
//               <ArrowRight size={18} />
//             </a>

//             <a
//               href="#services"
//               className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 transition"
//             >
//               Explore Services
//             </a>
//           </div>

//           {/* STATS */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10">
//             {stats.map((s) => (
//               <div key={s.label}>
//                 <div className="text-3xl font-bold text-white tabular-nums">
//                   <CountUp to={s.value} suffix={s.suffix} />
//                 </div>
//                 <div className="text-slate-400 text-sm mt-1">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative">

//           {/* glow */}
//           <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 blur-2xl rounded-[2.5rem]" />

//           {/* image */}
//           <motion.img
//             onLoad={() => setImgLoaded(true)}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={imgLoaded ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.8 }}
//             src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
//             alt="Global freight operations"
//             className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
//           />

//           {/* floating status card */}
//           <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
//                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
//               </div>
//               <div>
//                 <div className="text-sm font-semibold">
//                   Shipment #AF-8821
//                 </div>
//                 <div className="text-xs text-green-400">
//                   In Transit · On Schedule
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* floating stats card */}
//           <div className="absolute -top-6 -right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
//             <div className="text-xs text-slate-400">
//               Today's Deliveries
//             </div>
//             <div className="text-2xl font-bold mt-1">247</div>
//             <div className="text-xs text-blue-400 mt-0.5">
//               ↑ 12% vs yesterday
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* scroll indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 animate-bounce">
//         <span className="text-xs uppercase tracking-widest">
//           Scroll
//         </span>
//         <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
//       </div>
//     </section>
//   );
// }