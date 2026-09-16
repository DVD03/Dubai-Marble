"use client";
import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#0b0c16] text-[#9ca3af] text-[11px] sm:text-[12px] py-2 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 sm:gap-6 truncate">
          <div className="flex items-center gap-1.5 truncate">
            <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="truncate">
              Open Daily: 9 AM – 6 PM <span className="text-gray-500 font-arabic mx-1">· مفتوح يومياً</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>
              Al Quoz 1, Dubai <span className="text-gray-500 font-arabic">· القوز 1، دبي</span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+971508164087"
            className="flex items-center gap-1.5 text-white font-bold hover:text-gold transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-gold/30 shadow-sm"
          >
            <Phone className="w-3 h-3 text-gold" />
            <span>+971 50 816 4087</span>
            <span className="hidden sm:inline text-[10px] text-gold font-arabic ml-1">اتصل بنا</span>
          </a>
        </div>
      </div>
    </div>
  );
}
