"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    setSent(true);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold">
            Contact Global Support
          </h2>

          <p className="text-slate-400 mt-6 leading-relaxed max-w-xl">
            Our logistics experts are available 24/7 to assist with freight booking,
            tracking, enterprise shipping solutions, and global supply chain optimization.
          </p>

          {/* contact info cards */}
          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Mail className="text-blue-400" />
              <div>
                <div className="text-sm text-slate-400">Email</div>
                <div className="font-medium">support@aurorafreight.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Phone className="text-blue-400" />
              <div>
                <div className="text-sm text-slate-400">Phone</div>
                <div className="font-medium">+44 07784550198</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <MapPin className="text-blue-400" />
              <div>
                <div className="text-sm text-slate-400">Office</div>
                <div className="font-medium">73 Rutland Road, Ilford, England, IG1 1ER</div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >

          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-4 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Send us a message
              </h3>

              <input
                placeholder="Your Name *"
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none focus:border-blue-500 transition"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Your Email *"
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none focus:border-blue-500 transition"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <textarea
                placeholder="Your Message *"
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 h-40 outline-none focus:border-blue-500 transition"
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-500 transition"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center"
            >
              <h3 className="text-3xl font-bold text-green-400">
                Message Sent
              </h3>
              <p className="text-slate-300 mt-3">
                Our team will respond within 24 hours.
              </p>
            </motion.div>
          )}

        </motion.div>

      </div>
    </section>
  );
}
