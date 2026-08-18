// components/Banners/BenefitsBanner.tsx
"use client";

import React from "react";

const benefits = [
  {
    emoji: "☀️",
    title: "Block Harmful UV Rays",
    description: "Protect your floors, furniture, and family from 99% of sun damage.",
  },
  {
    emoji: "❄️",
    title: "Reduce Heat & Glare",
    description: "Stay cool and reduce glare while keeping natural light.",
  },
  {
    emoji: "💸",
    title: "Lower Energy Bills",
    description: "Improve energy efficiency and reduce A/C costs.",
  },
  {
    emoji: "🪟",
    title: "Enhance Privacy",
    description: "Get daytime privacy with decorative or tinted films.",
  },
  {
    emoji: "🏡",
    title: "Boost Curb Appeal",
    description: "Sleek film options that elevate your home’s look.",
  },
];

const BenefitsBanner: React.FC = () => (
  <section className="relative py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 px-1">
        🌞 Benefits of Window Film
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="rounded-none border border-white/25 bg-white/10 backdrop-blur-md p-6 transition hover:brightness-[1.04]"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.12), var(--glass-edge)",
            }}
          >
            <div className="text-3xl mb-2">{b.emoji}</div>
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-white/90">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsBanner;
