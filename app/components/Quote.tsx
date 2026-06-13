"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Plane, Ship, Truck } from "lucide-react";

const modes = [
  { label: "Air Freight", icon: <Plane size={20} /> },
  { label: "Ocean Freight", icon: <Ship size={20} /> },
  { label: "Ground Freight", icon: <Truck size={20} /> },
];

export default function Quote() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [mode, setMode] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", email: "", company: "",
    origin: "", destination: "", weight: "",
    details: "",
  });

  const steps = [
    {
      title: "Shipment Info",
      subtitle: "Tell us about your cargo.",
      fields: (
        <div className="space-y-4">
          {/* Mode selector */}
          <div>
            <label className="text-sm text-slate-400 mb-2 block">Freight Mode *</label>
            <div className="grid grid-cols-3 gap-3">
              {modes.map((m) => (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setMode(m.label)}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border text-sm font-medium transition-all ${
                    mode === m.label
                      ? "bg-blue-600/20 border-blue-500 text-blue-300"
                      : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
                  }`}
                >
                  {m.icon}
                  <span className="text-xs">{m.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-1.5 block">Origin *</label>
              <input
                placeholder="City or country"
                value={form.origin}
                onChange={(e) => setForm({ ...form, origin: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-blue-500 transition text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1.5 block">Destination *</label>
              <input
                placeholder="City or country"
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-blue-500 transition text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-400 mb-1.5 block">Estimated Weight (kg)</label>
            <input
              placeholder="e.g. 500"
              value={form.weight}
              onChange={(e) => setForm({ ...form, weight: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-blue-500 transition text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 mb-1.5 block">Cargo Description *</label>
            <textarea
              placeholder="What are you shipping? Include any special handling needs."
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl h-28 outline-none focus:border-blue-500 transition resize-none text-sm"
            />
          </div>
        </div>
      ),
      validate: () => !!mode && !!form.origin.trim() && !!form.destination.trim() && !!form.details.trim(),
    },
    {
      title: "Your Details",
      subtitle: "We'll send the quote directly to you.",
      fields: (
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-400 mb-1.5 block">Full Name *</label>
            <input
              placeholder="Jane Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-blue-500 transition text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 mb-1.5 block">Email *</label>
            <input
              placeholder="jane@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-blue-500 transition text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 mb-1.5 block">Company (optional)</label>
            <input
              placeholder="Your company name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-blue-500 transition text-sm"
            />
          </div>
          {/* Summary */}
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-4 space-y-1 text-sm text-slate-300">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Summary</p>
            <p>📦 {mode} · {form.origin} → {form.destination}</p>
            {form.weight && <p>⚖️ {form.weight} kg</p>}
          </div>
        </div>
      ),
      validate: () => !!form.name.trim() && !!form.email.trim(),
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      if (!steps[step].validate()) {
        alert("Please fill all required fields.");
        return;
      }
      setStep(step + 1);
    } else {
      if (!steps[step].validate()) {
        alert("Please fill all required fields.");
        return;
      }
      setDone(true);
    }
  };

  return (
    <section id="quote" className="py-32 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Free Quote
          </span>
          <h2 className="text-5xl font-bold mt-3">Request a Quote</h2>
          <p className="text-slate-400 mt-3">
            Get a tailored freight estimate within 2 business hours.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-8">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        i <= step ? "bg-blue-600 text-white" : "bg-white/10 text-slate-500"
                      }`}
                    >
                      {i < step ? <CheckCircle2 size={14} /> : i + 1}
                    </div>
                    <span
                      className={`text-sm font-medium ${i === step ? "text-white" : "text-slate-500"}`}
                    >
                      {s.title}
                    </span>
                    {i < steps.length - 1 && (
                      <div className={`h-px w-8 ${i < step ? "bg-blue-500" : "bg-white/10"}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-slate-400 text-sm mb-6">{steps[step].subtitle}</p>
                  {steps[step].fields}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition text-sm"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-xl font-semibold transition text-sm shadow-lg shadow-blue-600/30"
                >
                  {step === steps.length - 1 ? "Submit Request" : "Continue"}
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-14 text-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto"
              >
                <CheckCircle2 size={32} className="text-green-400" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mt-6">Request Received</h3>
              <p className="mt-3 text-slate-300">
                Thank you, <span className="font-semibold text-white">{form.name}</span>. We'll
                send a detailed quote to <span className="text-blue-400">{form.email}</span> within
                2 business hours.
              </p>
              <p className="mt-2 text-slate-500 text-sm">
                {mode} · {form.origin} → {form.destination}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}