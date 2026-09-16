"use client";
import React from "react";
import { Clock, MapPin, Phone, ShieldCheck, MessageCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#0f172a] text-[#94a3b8] text-[11.5px] sm:text-[12px] py-2 border-b border-[#c9a96e]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left info items */}
        <div className="flex items-center gap-4 sm:gap-6 truncate">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#c9a96e] shrink-0" />
            <span className="text-slate-200 font-medium">
              Open Daily: 9:00 AM – 6:00 PM <span className="text-slate-500 font-arabic mx-1">· مفتوح يومياً</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#c9a96e] shrink-0" />
            <span>
              Al Quoz 1, Dubai, UAE <span className="text-slate-500 font-arabic">· القوز 1، دبي</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c9a96e] shrink-0" />
            <span>Licensed & Insured Stone Experts</span>
          </div>
        </div>
        
        {/* Right contact quick actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="https://api.whatsapp.com/send?phone=971522774953&text=Hi%2C%20I%20need%20marble%20polishing%20in%20Dubai."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors bg-emerald-950/60 hover:bg-emerald-900/80 px-2.5 py-1 rounded-full border border-emerald-500/30 text-[11px] font-semibold"
          >
            <MessageCircle className="w-3 h-3 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+971522774953"
            className="flex items-center gap-1.5 text-white font-bold hover:text-[#c9a96e] transition-colors bg-white/10 hover:bg-white/15 px-3 py-1 rounded-full border border-[#c9a96e]/40 shadow-sm"
          >
            <Phone className="w-3 h-3 text-[#c9a96e]" />
            <span>+971 52 277 4953</span>
            <span className="hidden sm:inline text-[10px] text-[#c9a96e] font-arabic ml-1">اتصل بنا</span>
          </a>
        </div>
      </div>
    </div>
  );
}
