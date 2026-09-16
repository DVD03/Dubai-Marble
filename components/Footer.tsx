"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ChevronRight, CalendarCheck } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a14] text-gray-400 pt-16 sm:pt-20 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14 sm:mb-16">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-5 group">
              <Image
                src="/logo-original.png"
                alt="GridsPro International Logo"
                width={280}
                height={95}
                className="h-13 sm:h-16 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all group-hover:scale-105"
              />
            </Link>
            <div className="text-[12px] font-bold text-gold font-arabic mb-2">
              جريدزبرو إنترناشونال · تلميع وجلي الرخام الطبيعي
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-4 text-gray-300">
              Dubai's premier natural stone restoration specialists — serving 5-star hotels, luxury villas, and commercial properties with Italian diamond technology since 2008.
            </p>
            <div className="flex items-start gap-1.5 text-xs text-gold font-semibold mb-2">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span>Villa 34, Street 27 B, Al Quoz 1, Dubai</span>
            </div>
            <div className="text-[11px] text-gray-400 font-arabic">
              القوز 1، شارع 27 ب، فيلا 34، دبي
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5 flex items-center justify-between">
              <span>Our Services</span>
              <span className="font-arabic text-gold text-[11px] normal-case">خدماتنا</span>
            </h3>
            <ul className="flex flex-col gap-2">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}
                    className="text-xs sm:text-sm flex items-center gap-1.5 hover:text-gold transition-colors text-gray-300">
                    <ChevronRight className="w-3 h-3 text-gold shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5 flex items-center justify-between">
              <span>Quick Links</span>
              <span className="font-arabic text-gold text-[11px] normal-case">روابط سريعة</span>
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                ["/",         "Home",                    "الرئيسية"],
                ["/about",    "About Us",                "من نحن"],
                ["/gallery",  "Before & After Gallery",  "معرض الأعمال"],
                ["/reviews",  "Client Reviews",          "آراء العملاء"],
                ["/faqs",     "FAQs",                    "الأسئلة الشائعة"],
                ["/blog",     "Blog & Guides",           "المدونة والارشادات"],
                ["/contact",  "Contact Us",              "تواصل معنا"],
                ["/booking",  "Book Free Inspection",    "حجز معاينة مجانية"],
              ].map(([href, label, ar]) => (
                <li key={href}>
                  <Link href={href}
                    className={`text-xs sm:text-sm flex items-center justify-between hover:text-gold transition-colors text-gray-300 ${href === "/booking" ? "text-gold font-bold" : ""}`}>
                    <span className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-gold shrink-0" />
                      {label}
                    </span>
                    <span className="font-arabic text-[10px] text-gray-500">{ar}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HOURS & DIRECT CALL */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5 flex items-center justify-between">
              <span>Working Hours</span>
              <span className="font-arabic text-gold text-[11px] normal-case">أوقات العمل</span>
            </h3>
            <div className="flex flex-col gap-1.5 text-xs mb-5 text-gray-300">
              {[
                ["Mon – Fri", "9:00 AM – 6:00 PM", "الإثنين – الجمعة"],
                ["Saturday",  "9:00 AM – 4:00 PM", "السبت"],
                ["Sunday",    "10:00 AM – 3:00 PM", "الأحد"],
              ].map(([d, t, ar]) => (
                <div key={d} className="flex justify-between py-1 border-b border-white/5">
                  <span>{d} <span className="text-[10px] text-gray-500 font-arabic">({ar})</span></span>
                  <span className="text-gold font-bold">{t}</span>
                </div>
              ))}
            </div>
            
            <a
              href="tel:+971508164087"
              className="p-3.5 bg-[#121324] rounded-xl border border-gold/25 flex items-center gap-3 hover:border-gold transition-colors shadow-lg block"
            >
              <div className="w-9 h-9 rounded-lg brand-gradient flex items-center justify-center text-white font-bold shrink-0 shadow">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-gold font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span>Direct Hotline</span>
                  <span className="font-arabic text-[9px] text-gray-400">· الخط الساخن</span>
                </div>
                <div className="text-white font-black text-sm sm:text-base">+971 50 816 4087</div>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-6 pb-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 text-center sm:text-left">
          <div>&copy; {year} GridsPro International. All rights reserved. <span className="font-arabic">· جميع الحقوق محفوظة</span></div>
          <div className="flex gap-4 sm:gap-6">
            {["Privacy Policy","Terms of Service","Sitemap"].map((l) => (
              <Link key={l} href="/contact" className="hover:text-gold transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
