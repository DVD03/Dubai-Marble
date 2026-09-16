"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, CalendarCheck, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const isActive = (p: string) => pathname === p;
  const svcActive = pathname.startsWith("/services");

  const navLinkCls = (active: boolean) =>
    `relative px-3.5 py-2 rounded-lg text-[13.5px] font-semibold transition-colors ${
      active ? "text-gold font-bold" : "text-gray-200 hover:text-gold"
    }`;

  return (
    <>
      <ScrollProgress />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0d1a]/95 backdrop-blur-xl shadow-2xl border-b border-gold/30"
            : "bg-[#0d0d1a] border-b border-gold/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-2 sm:gap-4">

          {/* FULL OFFICIAL LOGO */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group py-1">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="GridsPro International Logo"
                width={220}
                height={68}
                priority
                className="h-10 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_0_14px_rgba(124,58,237,0.4)] transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-white/15 pl-3">
              <span className="text-[11px] font-bold text-brand-amber font-arabic leading-tight">
                جريدزبرو إنترناشونال
              </span>
              <span className="text-[10px] text-gray-400 font-arabic">
                تلميع وجلي الرخام بدبي
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {[
              { href: "/",          label: "Home",     ar: "الرئيسية" },
              { href: "/about",     label: "About",    ar: "من نحن" },
              { href: "/gallery",   label: "Gallery",  ar: "المعرض" },
              { href: "/reviews",   label: "Reviews",  ar: "التقييمات" },
              { href: "/faqs",      label: "FAQs",     ar: "الأسئلة" },
              { href: "/blog",      label: "Blog",     ar: "المدونة" },
              { href: "/contact",   label: "Contact",  ar: "اتصل بنا" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className={navLinkCls(isActive(href))}>
                {label}
                {isActive(href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full brand-gradient shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                  />
                )}
              </Link>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <Link href="/services" className={navLinkCls(svcActive)}>
                Services <ChevronDown className="inline w-3.5 h-3.5 ml-0.5" />
                {svcActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full brand-gradient shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                  />
                )}
              </Link>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{  opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-72 bg-[#121324] border border-brand-violet/30 rounded-2xl p-2 shadow-2xl backdrop-blur-xl"
                  >
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-[11px] font-bold text-brand-amber uppercase tracking-wider border-b border-white/10 mb-1 flex items-center justify-between"
                    >
                      <span>All Services</span>
                      <span className="font-arabic text-[11px] text-brand-azure normal-case">كافة الخدمات ←</span>
                    </Link>
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] transition-colors ${
                          pathname === `/services/${s.slug}`
                            ? "bg-brand-violet/20 text-brand-amber font-bold border border-brand-violet/30"
                            : "text-gray-300 hover:bg-white/5 hover:text-brand-amber font-medium"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full brand-gradient shrink-0" />
                          {s.title}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* DESKTOP CTA */}
          <Link
            href="/booking"
            className="hidden lg:flex brand-gradient text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.45)] hover:scale-105 transition-all items-center gap-2 group"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Inspection</span>
            <span className="font-arabic text-[11px] text-white/90 border-l border-white/30 pl-1.5 font-normal">احجز الآن</span>
          </Link>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 text-gold rounded-xl bg-white/5 border border-gold/20 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-gold" />}
          </button>
        </div>

        {/* FULL MOBILE DRAWER OVERLAY */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{  opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="lg:hidden bg-[#0d0d1a] border-t border-gold/20 overflow-y-auto max-h-[85vh] shadow-2xl"
            >
              <div className="px-5 py-6 flex flex-col gap-1.5">
                {[
                  { href: "/",        label: "Home",     ar: "الرئيسية" },
                  { href: "/about",   label: "About Us", ar: "من نحن" },
                  { href: "/gallery", label: "Gallery",  ar: "معرض الأعمال" },
                  { href: "/reviews", label: "Reviews",  ar: "التقييمات" },
                  { href: "/faqs",    label: "FAQs",     ar: "الأسئلة الشائعة" },
                  { href: "/blog",    label: "Blog",     ar: "المدونة" },
                  { href: "/contact", label: "Contact",  ar: "تواصل معنا" },
                ].map(({ href, label, ar }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                      isActive(href)
                        ? "text-brand-amber bg-brand-violet/20 border border-brand-violet/40"
                        : "text-white hover:text-brand-amber hover:bg-white/5"
                    }`}
                  >
                    <span>{label}</span>
                    <span className="text-xs font-arabic text-gray-400 font-normal">{ar}</span>
                  </Link>
                ))}

                {/* Mobile Services Accordion */}
                <div className="border border-white/10 rounded-xl overflow-hidden my-1">
                  <button
                    onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                    className="w-full py-3 px-4 flex items-center justify-between text-base font-bold text-white bg-white/5"
                  >
                    <span className="flex items-center gap-2">
                      Our Services <span className="text-xs font-arabic text-brand-azure font-normal">· خدماتنا</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-brand-amber transition-transform ${servicesAccordionOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesAccordionOpen && (
                    <div className="p-2 space-y-1 bg-[#121324]">
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 px-3 text-xs font-bold text-brand-amber uppercase tracking-wider"
                      >
                        All Services Overview &rarr;
                      </Link>
                      {servicesData.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 px-3 rounded-lg text-sm text-gray-300 hover:text-brand-amber hover:bg-white/5"
                        >
                          &bull; {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Action Buttons */}
                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="tel:+971508164087"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-brand-violet/40 text-white font-bold text-sm bg-[#121324] shadow"
                  >
                    <Phone className="w-4 h-4 text-brand-amber" /> Call Hotline: +971 50 816 4087
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=971508164087&text=Hi%2C%20I%20need%20marble%20polishing%20in%20Dubai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25d366] text-white font-bold text-sm shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us Now · تواصل عبر واتساب
                  </a>
                  <Link
                    href="/booking"
                    onClick={() => setMobileOpen(false)}
                    className="brand-gradient text-white font-extrabold text-center py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-xl"
                  >
                    <CalendarCheck className="w-4 h-4" /> Book Free Inspection · حجز معاينة مجانية
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
