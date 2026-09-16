"use client";
import React from "react";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-dark text-[#7a7a90] text-[12px] py-2.5 border-b border-gold/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>Mon – Sun: 9:00 AM – 6:00 PM</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>All Dubai Areas</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="tel:+971522774953"
            className="flex items-center gap-1.5 text-gold-light font-semibold hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            +971 52 277 4953
          </a>
          <a
            href="mailto:info@dubaimarblepolishing.ae"
            className="hidden md:flex items-center gap-1.5 hover:text-gold-light transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gold" />
            info@dubaimarblepolishing.ae
          </a>
        </div>
      </div>
    </div>
  );
}
