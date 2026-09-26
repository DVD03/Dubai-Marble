"use client";
import React from "react";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const communities = [
  { name: "Palm Jumeirah",      ar: "نخلة جميرا",        time: "20 Mins", tag: "Luxury Villas & Penthouses" },
  { name: "Downtown Dubai",     ar: "وسط مدينة دبي",      time: "15 Mins", tag: "Hotels & High-Rise" },
  { name: "Dubai Marina & JBR", ar: "دبي مارينا و JBR",   time: "20 Mins", tag: "Apartments & Suites" },
  { name: "Emirates Hills",     ar: "تلال الإمارات",      time: "25 Mins", tag: "VIP Mansions" },
  { name: "Arabian Ranches",    ar: "المرابع العربية",    time: "25 Mins", tag: "Family Residences" },
  { name: "Dubai Hills Estate", ar: "دبي هيلز استيت",     time: "20 Mins", tag: "Modern Villas" },
  { name: "Business Bay",       ar: "الخليج التجاري",     time: "15 Mins", tag: "Corporate & Residential" },
  { name: "Jumeirah Golf",      ar: "عقارات جميرا للجولف", time: "30 Mins", tag: "Luxury Estates" },
];

export default function DubaiCommunities() {
  return (
    <section className="py-24 bg-[#111827] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel isDark={true} arabic="تغطية كافة مناطق دبي">Dubai Coverage</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Rapid Dispatch Across All Dubai Communities
          </h2>
          <p className="text-[#D0D5DD] text-base mb-1">
            Our mobile master stone care technicians are stationed across key Dubai zones for same-day free inspections.
          </p>
          <p className="text-[#98A2B3] text-xs sm:text-sm font-arabic">
            فرقنا الفنية المتنقلة متواجدة في كافة مناطق دبي لتقديم المعاينة الفورية المجانية في نفس اليوم.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {communities.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.05}>
              <div className="p-5 rounded-2xl bg-[#0000CC]/20 border border-white/15 hover:border-[#123B6D]/50 hover:bg-[#123B6D]/20 transition-all group shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#123B6D] flex items-center justify-center text-white shadow">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    <Clock className="w-3 h-3 text-[#123B6D]" /> {c.time}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base mb-0.5 group-hover:text-[#123B6D] transition-colors flex items-center justify-between">
                  <span>{c.name}</span>
                </h3>
                <div className="text-xs text-[#98A2B3] font-arabic mb-2">
                  {c.ar}
                </div>
                <p className="text-xs text-[#D0D5DD] font-medium">
                  {c.tag}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#0000CC]/20 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#123B6D] shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">Don't see your community listed? <span className="font-arabic font-normal text-xs text-[#98A2B3]">· نغطي كافة المناطق</span></div>
              <div className="text-xs text-[#D0D5DD]">We cover 100% of Dubai, Sharjah &amp; Abu Dhabi on request.</div>
            </div>
          </div>
          <a
            href="tel:+971561887300"
            className="bg-[#123B6D] hover:bg-[#0000CC] text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm transition-colors shrink-0"
          >
            Call Dispatch: +971 56 188 7300
          </a>
        </div>
      </div>
    </section>
  );
}
