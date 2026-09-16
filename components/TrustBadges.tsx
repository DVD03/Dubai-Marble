"use client";
import React from "react";
import { ShieldCheck, Award, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

export default function TrustBadges() {
  return (
    <div className="py-8 bg-[#13132a] border-y border-gold/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          {[
            { icon: <Award className="w-5 h-5 text-gold" />, title: "Klindex Italy Certified", sub: "Planetary Diamond Machines" },
            { icon: <Sparkles className="w-5 h-5 text-gold" />, title: "Tenax Chemical Partner", sub: "Authentic Crystallizers" },
            { icon: <Wrench className="w-5 h-5 text-gold" />, title: "100% Dustless Technology", sub: "Occupied Home Safe" },
            { icon: <ShieldCheck className="w-5 h-5 text-gold" />, title: "10-Year Stone Protection", sub: "Satisfaction Guaranteed" },
          ].map((b, i) => (
            <div key={b.title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <div>
                <div className="font-bold text-white text-xs sm:text-sm leading-tight">{b.title}</div>
                <div className="text-[11px] text-gray-400">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
