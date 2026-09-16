"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Layers } from "lucide-react";

interface StoneOption {
  id: string;
  name: string;
}

interface ServiceOption {
  id: string;
  name: string;
}

const stones: StoneOption[] = [
  { id: "carrara",    name: "Italian Carrara / Calacatta" },
  { id: "crema",      name: "Crema Marfil / Botticino" },
  { id: "travertine", name: "Travertine & Limestone" },
  { id: "onyx",       name: "Onyx & Exotic Marble" },
  { id: "granite",    name: "Granite & Terrazzo" },
];

const services: ServiceOption[] = [
  { id: "diamond-polish", name: "5-Stage Diamond Polishing & Crystallization" },
  { id: "deep-clean",     name: "pH-Neutral Deep Cleaning & Grout Rejuvenation" },
  { id: "grinding",       name: "Heavy Lippage Grinding & Leveling" },
  { id: "stain-seal",     name: "Chemical Stain Extraction & Nano-Sealing" },
];

export default function PriceEstimator({ isDark = false }: { isDark?: boolean }) {
  const [selectedStone, setSelectedStone]     = useState(stones[0].id);
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [sqm, setSqm]                         = useState(60);

  const stoneObj = stones.find((s) => s.id === selectedStone) || stones[0];
  const servObj  = services.find((s) => s.id === selectedService) || services[0];

  return (
    <div
      className={`rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all ${
        isDark
          ? "bg-[#13132a] border-gold/30 text-white"
          : "bg-white border-gray-200 text-dark"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-1.5">
            <Layers className="w-4 h-4 text-gold" />
            <span>Inspection Scope Selector</span>
            <span className="font-arabic font-normal text-[11px] text-gold">تحديد نطاق المعاينة</span>
          </div>
          <h3 className={`text-2xl sm:text-3xl font-black ${isDark ? "text-white" : "text-dark"}`}>
            Customize Your Stone Restoration
          </h3>
        </div>
        <div className="bg-gold/15 border border-gold/30 text-gold px-4 py-1.5 rounded-full text-xs font-bold shrink-0">
          100% Free On-Site Inspection
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Stone Type */}
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              1. Select Stone Type <span className="font-arabic lowercase text-gray-400 font-normal">نوع الرخام / الحجر</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {stones.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedStone(s.id)}
                  className={`text-left px-4 py-3 rounded-xl text-xs font-semibold border transition-all ${
                    selectedStone === s.id
                      ? "brand-gradient text-white font-bold border-transparent shadow-md scale-[1.02]"
                      : isDark
                      ? "bg-white/5 border-white/10 text-gray-300 hover:border-gold/50"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gold"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Service Type */}
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              2. Select Restoration Service <span className="font-arabic lowercase text-gray-400 font-normal">نوع الخدمة</span>
            </label>
            <div className="space-y-2">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setSelectedService(svc.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all ${
                    selectedService === svc.id
                      ? "brand-gradient text-white font-bold border-transparent shadow-md"
                      : isDark
                      ? "bg-white/5 border-white/10 text-gray-300 hover:border-gold/50"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gold"
                  }`}
                >
                  <span>{svc.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                3. Approximate Area (Square Meters) <span className="font-arabic lowercase text-gray-400 font-normal">المساحة</span>
              </label>
              <span className="text-gold font-extrabold text-lg">{sqm} m² ({Math.round(sqm * 10.764)} sq.ft)</span>
            </div>
            <input
              type="range"
              min="10"
              max="300"
              step="5"
              value={sqm}
              onChange={(e) => setSqm(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>Small Room (10 m²)</span>
              <span>Villa / Floor (150 m²)</span>
              <span>Commercial (300+ m²)</span>
            </div>
          </div>
        </div>

        {/* Result Card Column */}
        <div className="lg:col-span-5">
          <div className={`p-7 rounded-2xl border text-center relative overflow-hidden shadow-xl ${
            isDark ? "bg-[#0d0d1a] border-gold/40" : "bg-[#f8f7f4] border-gold/30"
          }`}>
            <div className="absolute top-0 inset-x-0 h-1 brand-gradient" />
            <div className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
              Tailored Consultation · المعاينة المجانية
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white dark:text-white my-2 tracking-tight">
              {stoneObj.name.split("/")[0]}
            </div>
            <div className="text-xs text-gold mb-6 font-semibold">
              {servObj.name} · {sqm} m²
            </div>

            <div className="space-y-2.5 text-left text-xs text-gray-600 dark:text-gray-300 mb-6 border-y border-gray-200 dark:border-white/10 py-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Includes Free In-Person Inspection & Exact Measurement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>100% Dustless Italian Diamond Honing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Protective Crystallization & High Gloss Polish</span>
              </div>
            </div>

            <Link
              href={`/booking?service=${selectedService}&area=${sqm}&stone=${selectedStone}`}
              className="w-full brand-gradient text-white font-extrabold text-sm py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:scale-105 hover:shadow-gold/30 transition-all"
            >
              Book Free Inspection <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-[10px] text-gray-400 mt-2">
              Final quote provided in writing after free on-site verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
