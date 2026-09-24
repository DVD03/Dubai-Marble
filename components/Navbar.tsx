"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, CalendarCheck, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "./ScrollProgress";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const isActive = (p: string) => pathname === p;
  const svcActive = pathname.startsWith("/services");

  return (
    <>
      <ScrollProgress />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-[#E5E7EB]"
            : "bg-white border-b border-[#E5E7EB]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4 lg:gap-6">

          {/* OFFICIAL BRAND LOGO */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group py-1.5">
            <div className="relative flex items-center">
              <Image
                src="/logo_preview.png"
                alt="GridsPro International Logo"
                width={260}
                height={88}
                priority
                className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-white/15 pl-3.5">
              <span className="text-[11.5px] font-bold text-white font-arabic leading-tight tracking-wide">
                جريدزبرو إنترناشونال
              </span>
              <span className="text-[10px] text-[#98A2B3] font-arabic leading-tight mt-0.5">
                تلميع وجلي الرخام بدبي
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION (Natural Logical Order) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            <Link
              href="/"
              className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all ${
                isActive("/") ? "text-[#123B6D] font-bold" : "text-[#263238] hover:text-[#123B6D] hover:bg-[#F7F9FC]"
              }`}
            >
              Home
              {isActive("/") && (
                <motion.span layoutId="nav-active" className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#123B6D]" />
              )}
            </Link>

            <Link
              href="/about"
              className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all z-10 ${
                isActive("/about") ? "text-[#123B6D] font-bold" : "text-[#263238] hover:text-[#123B6D] hover:bg-[#F7F9FC]"
              }`}
            >
              About
              {isActive("/about") && (
                <motion.span layoutId="nav-active" className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#123B6D]" />
              )}
            </Link>

            {/* SERVICES DROPDOWN IN PRIME POSITION */}
            <div
              className="relative z-20"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <Link
                href="/services"
                className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all flex items-center gap-1 ${
                  svcActive ? "text-[#123B6D] font-bold" : "text-[#263238] hover:text-[#123B6D] hover:bg-[#F7F9FC]"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropOpen ? "rotate-180 text-[#123B6D]" : "text-[#6B7280]"}`} />
                {svcActive && (
                  <motion.span layoutId="nav-active" className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#123B6D]" />
                )}
              </Link>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 bg-white border border-[#E5E7EB] rounded-2xl p-2.5 shadow-2xl backdrop-blur-2xl z-50"
                  >
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-[11px] font-bold text-[#263238] uppercase tracking-wider border-b border-[#E5E7EB] mb-1 flex items-center justify-between hover:text-[#123B6D] transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#123B6D]" />
                        All Marble Services
                      </span>
                      <span className="font-arabic text-[11px] normal-case text-[#6B7280]">كافة الخدمات ←</span>
                    </Link>
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] transition-colors ${
                          pathname === `/services/${s.slug}`
                            ? "bg-[#F7F9FC] text-[#123B6D] font-bold border border-[#123B6D]/30"
                            : "text-[#263238] hover:bg-[#F7F9FC] hover:text-[#123B6D] font-medium"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#123B6D] shrink-0" />
                          {s.title}
                        </span>
                        <span className="text-[11px] text-[#6B7280] font-arabic font-normal">{s.arTitle}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/gallery"
              className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all ${
                isActive("/gallery") ? "text-[#123B6D] font-bold" : "text-[#263238] hover:text-[#123B6D] hover:bg-[#F7F9FC]"
              }`}
            >
              Gallery
              {isActive("/gallery") && (
                <motion.span layoutId="nav-active" className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#123B6D]" />
              )}
            </Link>

            <Link
              href="/reviews"
              className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all ${
                isActive("/reviews") ? "text-[#123B6D] font-bold" : "text-[#263238] hover:text-[#123B6D] hover:bg-[#F7F9FC]"
              }`}
            >
              Reviews
              {isActive("/reviews") && (
                <motion.span layoutId="nav-active" className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#123B6D]" />
              )}
            </Link>

            <Link
              href="/faqs"
              className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all ${
                isActive("/faqs") ? "text-[#123B6D] font-bold" : "text-[#263238] hover:text-[#123B6D] hover:bg-[#F7F9FC]"
              }`}
            >
              FAQs
              {isActive("/faqs") && (
                <motion.span layoutId="nav-active" className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#123B6D]" />
              )}
            </Link>

            <Link
              href="/blog"
              className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all ${
                isActive("/blog") ? "text-[#123B6D] font-bold" : "text-[#263238] hover:text-[#123B6D] hover:bg-[#F7F9FC]"
              }`}
            >
              Blog
              {isActive("/blog") && (
                <motion.span layoutId="nav-active" className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#123B6D]" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all ${
                isActive("/contact") ? "text-[#123B6D] font-bold" : "text-[#263238] hover:text-[#123B6D] hover:bg-[#F7F9FC]"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <motion.span layoutId="nav-active" className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#123B6D]" />
              )}
            </Link>
          </nav>

          {/* SEARCH BAR */}
          <div className="hidden lg:flex items-center shrink-0">
            <SearchBar />
          </div>

          {/* DESKTOP CALL & BOOKING CTAs (Single-Line, No Line-Break) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+971522774953"
              className="whitespace-nowrap flex items-center gap-2 text-xs font-bold text-white bg-[#D96B27] hover:bg-[#B8521A] px-3.5 py-2.5 rounded-xl border border-[#D96B27]/20 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-white/90 shrink-0" />
              <span>+971 52 277 4953</span>
            </a>

            <Link
              href="/booking"
              className="whitespace-nowrap bg-[#123B6D] hover:bg-[#0B1F33] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all items-center gap-2 flex group hover:scale-[1.02]"
            >
              <CalendarCheck className="w-4 h-4 shrink-0" />
              <span>Book Inspection</span>
              <span className="font-arabic text-[11px] text-white/90 border-l border-white/30 pl-1.5 font-normal">احجز الآن</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 text-[#263238] rounded-xl bg-[#F7F9FC] border border-[#E5E7EB] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#263238]" />}
          </button>
        </div>

        {/* MOBILE DRAWER */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-[#E5E7EB] overflow-y-auto max-h-[85vh] shadow-2xl"
            >
              <div className="px-5 py-6 flex flex-col gap-1.5">
                {/* Mobile Search */}
                <div className="mb-4">
                  <SearchBar isMobile={true} />
                </div>

                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive("/") ? "text-[#123B6D] bg-[#F7F9FC] border border-[#123B6D]/30" : "text-[#263238] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span>Home</span>
                  <span className="text-xs font-arabic text-[#6B7280] font-normal">الرئيسية</span>
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive("/about") ? "text-[#123B6D] bg-[#F7F9FC] border border-[#123B6D]/30" : "text-[#263238] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span>About Us</span>
                  <span className="text-xs font-arabic text-[#6B7280] font-normal">من نحن</span>
                </Link>

                {/* Mobile Services Accordion */}
                <div className="border border-[#E5E7EB] rounded-xl overflow-hidden my-1">
                  <button
                    onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                    className="w-full py-3 px-4 flex items-center justify-between text-base font-bold text-[#263238] bg-[#F7F9FC]"
                  >
                    <span className="flex items-center gap-2">
                      Our Services <span className="text-xs font-arabic text-[#9CA3AF] font-normal">· خدماتنا</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#263238] transition-transform ${servicesAccordionOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesAccordionOpen && (
                    <div className="p-2 space-y-1 bg-[#F7F9FC]">
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 px-3 text-xs font-bold text-[#123B6D] uppercase tracking-wider"
                      >
                        All Services Overview &rarr;
                      </Link>
                      {servicesData.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 px-3 rounded-lg text-sm text-[#263238] hover:text-[#123B6D] hover:bg-white"
                        >
                          &bull; {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/gallery"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive("/gallery") ? "text-[#123B6D] bg-[#F7F9FC] border border-[#123B6D]/30" : "text-[#263238] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span>Gallery</span>
                  <span className="text-xs font-arabic text-[#6B7280] font-normal">معرض الأعمال</span>
                </Link>

                <Link
                  href="/reviews"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive("/reviews") ? "text-[#123B6D] bg-[#F7F9FC] border border-[#123B6D]/30" : "text-[#263238] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span>Reviews</span>
                  <span className="text-xs font-arabic text-[#6B7280] font-normal">التقييمات</span>
                </Link>

                <Link
                  href="/faqs"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive("/faqs") ? "text-[#123B6D] bg-[#F7F9FC] border border-[#123B6D]/30" : "text-[#263238] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span>FAQs</span>
                  <span className="text-xs font-arabic text-[#6B7280] font-normal">الأسئلة الشائعة</span>
                </Link>

                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive("/blog") ? "text-[#123B6D] bg-[#F7F9FC] border border-[#123B6D]/30" : "text-[#263238] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span>Blog</span>
                  <span className="text-xs font-arabic text-[#6B7280] font-normal">المدونة</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive("/contact") ? "text-[#123B6D] bg-[#F7F9FC] border border-[#123B6D]/30" : "text-[#263238] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span>Contact</span>
                  <span className="text-xs font-arabic text-[#6B7280] font-normal">تواصل معنا</span>
                </Link>

                {/* Mobile Action Buttons */}
                <div className="pt-4 mt-2 border-t border-[#E5E7EB] flex flex-col gap-2.5">
                  <a
                    href="tel:+971522774953"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-[#D96B27]/20 text-white font-bold text-sm bg-[#D96B27] shadow hover:bg-[#B8521A]"
                  >
                    <Phone className="w-4 h-4 text-white" /> Call Hotline: +971 52 277 4953
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=971522774953&text=Hi%2C%20I%20need%20marble%20polishing%20in%20Dubai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-emerald-600/40 text-white font-bold text-sm bg-emerald-950/60 shadow"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp Us Now · تواصل عبر واتساب
                  </a>
                  <Link
                    href="/booking"
                    onClick={() => setMobileOpen(false)}
                    className="bg-[#123B6D] hover:bg-[#0B1F33] text-white font-bold text-center py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
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
