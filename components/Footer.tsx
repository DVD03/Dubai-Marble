"use client";
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight, CalendarCheck, Clock } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-400 pt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center text-dark font-black text-xl">M</div>
              <div>
                <div className="text-white font-bold text-[16px] leading-tight">Dubai Marble Polishing</div>
                <div className="text-gold text-[11px] font-medium">تلميع الرخام دبي</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Dubai's premier natural stone restoration specialists — serving 5-star hotels, luxury villas, and commercial properties with Italian diamond technology since 2008.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gold/80">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              All Dubai Zones — Rapid Dispatch
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white text-[12px] font-bold uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="flex flex-col gap-2.5">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}
                    className="text-sm flex items-center gap-1.5 hover:text-gold transition-colors">
                    <ChevronRight className="w-3 h-3 text-gold shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white text-[12px] font-bold uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                ["/",         "Home"],
                ["/about",    "About Us"],
                ["/gallery",  "Before & After Gallery"],
                ["/reviews",  "Client Reviews"],
                ["/faqs",     "FAQs"],
                ["/blog",     "Blog & Guides"],
                ["/contact",  "Contact Us"],
                ["/booking",  "Book Free Inspection"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href}
                    className={`text-sm flex items-center gap-1.5 hover:text-gold transition-colors ${href === "/booking" ? "text-gold font-semibold" : ""}`}>
                    <ChevronRight className="w-3 h-3 text-gold shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h3 className="text-white text-[12px] font-bold uppercase tracking-widest mb-5">Working Hours</h3>
            <div className="flex flex-col gap-2 text-xs mb-6">
              {[
                ["Mon – Fri", "9:00 AM – 6:00 PM"],
                ["Saturday",  "9:00 AM – 4:00 PM"],
                ["Sunday",    "10:00 AM – 3:00 PM"],
              ].map(([d, t]) => (
                <div key={d} className="flex justify-between py-1.5 border-b border-white/5">
                  <span>{d}</span>
                  <span className="text-gold font-semibold">{t}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-gold/20">
              <div className="text-[11px] text-gold font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                <Phone className="w-3 h-3" /> Direct Hotline
              </div>
              <a href="tel:+971522774953"
                className="text-white font-bold text-base hover:text-gold transition-colors">
                +971 52 277 4953
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>&copy; {year} Dubai Marble Polishing. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy Policy","Terms of Service","Sitemap"].map((l) => (
              <Link key={l} href="/contact" className="hover:text-gold transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
