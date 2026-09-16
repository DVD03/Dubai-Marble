"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { imgs } from "@/data/images";

const steps = [
  {
    num: "01",
    title: "Precision Diamond Honing",
    subtitle: "400 to 3000 Grit Progressive Micro-Grinding",
    desc: "Using Italian Klindex planetary rotary heads with resin-bonded industrial diamond discs, we progressively shave micro-abrasions, acid stains, and scratches without damaging delicate veining.",
    image: imgs.svcGrinding,
    highlights: ["100% dustless water-injection system", "Removes deep scratches and uneven lippage", "Restores silky-smooth tactile stone touch"],
  },
  {
    num: "02",
    title: "Slurry Extraction & Deep Pore Wash",
    subtitle: "pH-Neutral Capillary Extraction",
    desc: "High-power industrial extraction vacuums lift all emulsified marble dust and liquid slurry directly out of open capillary pores, preparing stone crystals for maximum chemical bonding.",
    image: imgs.svcCleaning,
    highlights: ["Extracts trapped minerals and dirt", "Sanitizes tile grout joints", "Prevents humidity discoloration"],
  },
  {
    num: "03",
    title: "Italian Thermos Crystallization",
    subtitle: "Chemical Hardening & Mirror Reflection",
    desc: "Application of premium Italian fluorosilicate crystallizers using natural horsehair pads under high thermal friction. This transforms the calcite surface into a glass-hard, mirror-reflective shield.",
    image: imgs.svcFloor,
    highlights: ["True HD mirror reflection", "Increases surface scratch resistance by 300%", "Zero wax or artificial synthetic films"],
  },
  {
    num: "04",
    title: "Nano-Oleophobic Protective Seal",
    subtitle: "Hydrophobic Deep Impregnation",
    desc: "Final application of penetrating nano-polymers that seal the porous stone matrix against future coffee, wine, oil, and citrus stains while preserving the marble's natural breathability.",
    image: imgs.svcCounter,
    highlights: ["Food-safe & child-safe barrier", "5+ Year stain protection warranty", "Maintains ultra-deep wet-look luster"],
  },
];

export default function ProcessTabs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cur = steps[activeIdx];

  return (
    <div className="w-full">
      {/* Step Selection Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {steps.map((s, idx) => (
          <button
            key={s.num}
            onClick={() => setActiveIdx(idx)}
            className={`p-4 sm:p-5 rounded-2xl border text-left transition-all ${
              activeIdx === idx
                ? "bg-[#2c2a27] border-[#8a6c3e] text-white shadow-lg scale-[1.02]"
                : "bg-[#fafaf8] border-[#e4e0da] text-[#3d3a35] hover:border-[#c9a96e]/50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-black px-2.5 py-1 rounded-md ${
                activeIdx === idx ? "bg-[#8a6c3e] text-white font-extrabold" : "bg-[#ede9e3] text-[#6b6560]"
              }`}>
                Step {s.num}
              </span>
              {activeIdx === idx && <Sparkles className="w-4 h-4 text-[#c9a96e]" />}
            </div>
            <div className={`font-bold text-sm sm:text-base leading-tight ${activeIdx === idx ? "text-white" : "text-[#2c2a27]"}`}>
              {s.title}
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cur.num}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="bg-[#fafaf8] rounded-3xl border border-[#e4e0da] p-6 sm:p-10 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Text details */}
          <div className="lg:col-span-7">
            <div className="text-[#8a6c3e] text-xs font-bold uppercase tracking-widest mb-1">
              Step {cur.num} of 04
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#2c2a27] mb-2">
              {cur.title}
            </h3>
            <p className="text-[#8a6c3e] font-semibold text-sm mb-4">
              {cur.subtitle}
            </p>
            <p className="text-[#6b6560] text-base leading-relaxed mb-6">
              {cur.desc}
            </p>

            <div className="space-y-3 mb-6">
              {cur.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2.5 text-sm font-semibold text-[#2c2a27]">
                  <CheckCircle2 className="w-4 h-4 text-[#4a6fa5] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveIdx((activeIdx + 1) % steps.length)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#4a6fa5] hover:underline"
            >
              Next Step: {steps[(activeIdx + 1) % steps.length].title} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#e4e0da]">
            <Image
              src={cur.image}
              alt={cur.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2a27]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
              Italian Certified Equipment &bull; GridsPro International
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
