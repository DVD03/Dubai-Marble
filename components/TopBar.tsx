"use client";
import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#0a0a14] text-[#8a8aa0] text-[11px] sm:text-[12px] py-2 border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 sm:gap-5 truncate">
          <div className="flex items-center gap-1.5 truncate">
            <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="truncate">Open Daily: 9 AM – 6 PM</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>All Dubai Communities</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+971522774953"
            className="flex items-center gap-1.5 text-gold-light font-bold hover:text-white transition-colors bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/20"
          >
            <Phone className="w-3 h-3 text-gold" />
            <span>+971 52 277 4953</span>
          </a>
        </div>
      </div>
    </div>
  );
}
