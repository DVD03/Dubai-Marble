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
                src="/logo.png"
                alt="Dubai Marble Polishing Logo"
                width={260}
                height={80}
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_14px_rgba(201,168,76,0.35)] transition-all group-hover:scale-105"
              />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed mb-4 text-gray-300">
              Dubai's premier natural stone restoration specialists — serving 5-star hotels, luxury villas, and commercial properties with Italian diamond technology since 2008.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gold/90 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              All Dubai Communities — 30-Min Dispatch
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5">Our Services</h3>
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
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2">
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
                    className={`text-xs sm:text-sm flex items-center gap-1.5 hover:text-gold transition-colors text-gray-300 ${href === "/booking" ? "text-gold font-bold" : ""}`}>
                    <ChevronRight className="w-3 h-3 text-gold shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HOURS & DIRECT CALL */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5">Working Hours</h3>
            <div className="flex flex-col gap-1.5 text-xs mb-5 text-gray-300">
              {[
                ["Mon – Fri", "9:00 AM – 6:00 PM"],
                ["Saturday",  "9:00 AM – 4:00 PM"],
                ["Sunday",    "10:00 AM – 3:00 PM"],
              ].map(([d, t]) => (
                <div key={d} className="flex justify-between py-1 border-b border-white/5">
                  <span>{d}</span>
                  <span className="text-gold font-bold">{t}</span>
                </div>
              ))}
            </div>
            
            <a
              href="tel:+971522774953"
              className="p-3.5 bg-[#13132a] rounded-xl border border-gold/30 flex items-center gap-3 hover:border-gold transition-colors shadow-lg block"
            >
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center text-dark font-bold shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-gold font-bold uppercase tracking-wider">Direct Hotline</div>
                <div className="text-white font-black text-sm sm:text-base">+971 52 277 4953</div>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-6 pb-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 text-center sm:text-left">
          <div>&copy; {year} Dubai Marble Polishing. All rights reserved.</div>
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
