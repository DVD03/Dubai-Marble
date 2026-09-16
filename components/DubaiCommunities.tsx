"use client";
import React from "react";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const communities = [
  { name: "Palm Jumeirah",      time: "20 Mins", tag: "Luxury Villas & Penthouses" },
  { name: "Downtown Dubai",     time: "15 Mins", tag: "Hotels & High-Rise" },
  { name: "Dubai Marina & JBR", time: "20 Mins", tag: "Apartments & Suites" },
  { name: "Emirates Hills",     time: "25 Mins", tag: "VIP Mansions" },
  { name: "Arabian Ranches",    time: "25 Mins", tag: "Family Residences" },
  { name: "Dubai Hills Estate", time: "20 Mins", tag: "Modern Villas" },
  { name: "Business Bay",       time: "15 Mins", tag: "Corporate & Residential" },
  { name: "Jumeirah Golf",      time: "30 Mins", tag: "Luxury Estates" },
];

export default function DubaiCommunities() {
  return (
    <section className="py-24 bg-[#0d0d1a] text-white relative overflow-hidden border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Dubai Coverage</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Rapid Dispatch Across All Dubai Communities
          </h2>
          <p className="text-gray-300 text-base">
            Our mobile master stone care technicians are stationed across key Dubai zones for same-day free inspections.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {communities.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.05}>
              <div className="p-5 rounded-2xl bg-[#13132a] border border-gold/25 hover:border-gold hover:bg-[#1a1a38] transition-all group shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center text-dark">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-gold flex items-center gap-1 bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                    <Clock className="w-3 h-3" /> {c.time}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-gold transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {c.tag}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#13132a]/80 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">Don't see your community listed?</div>
              <div className="text-xs text-gray-400">We cover 100% of Dubai, Sharjah &amp; Abu Dhabi on request.</div>
            </div>
          </div>
          <a
            href="tel:+971522774953"
            className="gold-gradient text-dark font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all shrink-0"
          >
            Call Dispatch: +971 52 277 4953
          </a>
        </div>
      </div>
    </section>
  );
}
