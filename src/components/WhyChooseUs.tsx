"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  "Certified Solar Gard® & TuffSkin® Dealer",
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
        className="relative w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-b-[2.5rem] rounded-t-[4rem] shadow-2xl px-12 py-20"
      >
        {/* Clipboard Top */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-700 text-white px-8 py-3 rounded-b-xl shadow-lg text-xl font-semibold">
          📋 Checklist
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-tight">
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
