"use client";
import React from "react";
import { Clock, MapPin, Phone, ShieldCheck, MessageCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-white text-[#6B7280] text-[11.5px] sm:text-[12px] py-2 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left info items */}
        <div className="flex items-center gap-4 sm:gap-6 truncate">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#123B6D] shrink-0" />
            <span className="text-[#263238] font-medium">
              Open Daily: 9:00 AM – 6:00 PM <span className="text-[#6B7280] font-arabic mx-1">· مفتوح يومياً</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#123B6D] shrink-0" />
            <span className="text-[#263238]">
              Al Quoz 1, Dubai, UAE <span className="text-[#6B7280] font-arabic">· القوز 1، دبي</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-[#6B7280]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#123B6D] shrink-0" />
            <span>Licensed & Insured Stone Experts</span>
          </div>
        </div>

        {/* Right contact quick actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="https://api.whatsapp.com/send?phone=971522774953&text=Hi%2C%20I%20need%20marble%20polishing%20in%20Dubai."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-[#263238] hover:text-[#123B6D] transition-colors bg-[#F7F9FC] hover:bg-[#123B6D]/10 px-2.5 py-1 rounded-full border border-[#E5E7EB] text-[11px] font-semibold"
          >
            <MessageCircle className="w-3 h-3 text-emerald-500" />
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+971522774953"
            className="flex items-center gap-1.5 text-white font-bold hover:text-white transition-colors bg-[#D96B27] hover:bg-[#CC7000] px-3 py-1 rounded-full border border-[#D96B27]/20 shadow-sm"
          >
            <Phone className="w-3 h-3 text-white" />
            <span>+971 52 277 4953</span>
            <span className="hidden sm:inline text-[10px] text-white font-arabic ml-1">اتصل بنا</span>
          </a>
        </div>
      </div>
    </div>
  );
}
