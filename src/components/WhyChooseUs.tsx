"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  "Certified Solar Guard® & TuffSkin® Dealer",
  "Locally Owned & Operated in Calgary",
  "Free, No-Obligation Estimates",
  "Expert Installation by Trained Pros",
  "Customized Solutions for Your Home",
];

const WhyChooseUsBanner: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4">
      <div
        ref={ref}
        className="relative w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/25 shadow-2xl px-12 py-20 rounded-none"
        style={{
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.15), var(--glass-edge)",
        }}
      >
        {/* Clipboard Top */}
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-700 text-white px-8 py-3 shadow-lg text-xl font-semibold rounded-none border border-white/20"
          style={{ boxShadow: "var(--glass-edge)" }}
        >
          📋 Checklist
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight px-1">
          💡 Why Choose Tint it Pro
        </h2>

        <ul className="space-y-10 text-2xl text-white/90">
          {reasons.map((reason, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-6"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <motion.span
                className="text-green-400 text-3xl mt-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: idx * 0.2 + 0.2, type: "spring", stiffness: 300 }}
              >
                ✔
              </motion.span>
              <span>{reason}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUsBanner;
