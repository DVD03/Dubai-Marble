"use client";
import React from "react";
import { ShieldCheck, Award, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

export default function TrustBadges() {
  return (
    <div className="py-8 bg-[#111827] border-y border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          {[
            { icon: <Award className="w-5 h-5 text-[#123B6D]" />, title: "Klindex Italy Certified", sub: "معدات ألماس إيطالية معتمدة" },
            { icon: <Sparkles className="w-5 h-5 text-[#123B6D]" />, title: "Tenax Chemical Partner", sub: "شريك مواد الكريستال الأصلية" },
            { icon: <Wrench className="w-5 h-5 text-[#123B6D]" />, title: "100% Dustless System", sub: "نظام مائي نقي بدون غبار" },
            { icon: <ShieldCheck className="w-5 h-5 text-[#123B6D]" />, title: "Workmanship Warranty", sub: "ضمان شامل على جودة العمل" },
          ].map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0 shadow-sm">
                {b.icon}
              </div>
              <div>
                <div className="font-bold text-white text-xs sm:text-sm leading-tight">{b.title}</div>
                <div className="text-[11px] text-[#98A2B3] font-arabic">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
