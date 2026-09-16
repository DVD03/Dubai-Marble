"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, Phone, ArrowRight,
  ShieldCheck, Award, Users, Wrench, Clock, Star, Sparkles,
  Shield, Check, MapPin, Calendar, FileText, ChevronRight,
  Droplets, Zap, Building2, PaintBucket,
  Hammer, Layers, Search, Quote
} from "lucide-react";
import BookingForm from "@/components/BookingForm";
import StatsCounter from "@/components/StatsCounter";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import SectionDivider from "@/components/SectionDivider";
import { servicesData } from "@/data/services";
import { imgs } from "@/data/images";

const serviceImages: Record<string, string> = {
  "marble-floor-polishing": imgs.svcFloor,
  "deep-cleaning":          imgs.svcCleaning,
  "grinding-buffing":       imgs.svcGrinding,
  "countertop-polishing":   imgs.svcCounter,
  "stain-removal":          imgs.svcStain,
  "crack-repair":           imgs.svcCrack,
};

const otherServices = [
  {
    title: "24/7 Plumbing & Electrical Services",
    ar: "سباكة وأعمال كهربائية 24/7",
    desc: "Emergency plumbing and electrical repairs available anytime, including wiring, leak fixes, and troubleshooting.",
    image: imgs.aboutWork,
    link: "/services",
  },
  {
    title: "Snagging & Property Inspection",
    ar: "فحص ومعاينة العقارات",
    desc: "Detailed property inspection services to identify defects before handover or purchase, ensuring quality and safety.",
    image: imgs.aboutLobby,
    link: "/services",
  },
  {
    title: "Cleaning & Painting Services",
    ar: "خدمات التنظيف والدهانات",
    desc: "Deep cleaning, villa cleaning, office cleaning, and professional interior/exterior painting services.",
    image: imgs.svcCleaning,
    link: "/services",
  },
  {
    title: "Gypsum & Tile Work",
    ar: "أعمال الجبس والبلاط",
    desc: "False ceiling, partition work, gypsum design, tile installation, and finishing solutions for modern interiors.",
    image: imgs.gal4,
    link: "/services",
  },
  {
    title: "Interior Design & Fit-Out",
    ar: "تصميم داخلي وتشطيبات",
    desc: "Complete interior design solutions and contract-based fit-out work for residential and commercial spaces.",
    image: imgs.aboutHero,
    link: "/services",
  },
  {
    title: "Bathroom & Kitchen Services",
    ar: "خدمات الحمامات والمطابخ",
    desc: "Installation, repair, and renovation of bathroom and kitchen plumbing, fittings, and stone vanity fixtures.",
    image: imgs.svcCounter,
    link: "/services",
  },
  {
    title: "Leak Detection Services",
    ar: "كشف تسربات المياه",
    desc: "Advanced acoustic & thermal leak detection solutions to identify and fix hidden water leakage issues quickly.",
    image: imgs.gal5,
    link: "/services",
  },
  {
    title: "Repiping & Water Line Services",
    ar: "استبدال شبكات الأنابيب",
    desc: "Full pipe replacement and repiping solutions to improve water flow and prevent leakage issues in villas and buildings.",
    image: imgs.gal6,
    link: "/services",
  },
];

const blogArticles = [
  {
    src: imgs.blog1,
    title: "Top 10 Benefits of Professional Marble Polishing in Dubai",
    ar: "أهم 10 فوائد لجلي وتلميع الرخام باحترافية في دبي",
    date: "July 2026",
    link: "/blog",
  },
  {
    src: imgs.blog2,
    title: "Marble Polishing vs. Marble Replacement: Which Is the Better Choice in Dubai?",
    ar: "جلي الرخام أم استبداله: أيهما الخيار الأفضل في دبي؟",
    date: "July 2026",
    link: "/blog",
  },
  {
    src: imgs.blog3,
    title: "How Often Should You Polish Marble Floors in Dubai?",
    ar: "كم مرة يجب جلي وتلميع أرضيات الرخام في دبي؟",
    date: "July 2026",
    link: "/blog",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#fafaf8] text-[#2c2a27]">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Full Visibility Video Background with Glassmorphic Card)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-900 border-b border-[#e4e0da]">
        {/* Full-Visibility Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={imgs.heroBg}
            className="w-full h-full object-cover object-center scale-105 opacity-95 brightness-[0.92]"
          >
            <source src="/bg1.mp4" type="video/mp4" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Deep cinematic gradient overlay ensuring 100% crisp letter readability over video */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (No Box Container - Direct High-Contrast Typography) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel isDark={true} variant="minimal" arabic="تلميع وجلي الرخام في دبي">
                Professional Marble Polishing &amp; Cleaning Services in Dubai
              </SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black leading-[1.18] mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span className="text-[#f59e0b] underline decoration-[#f59e0b] decoration-4 underline-offset-4">
                  Dubai Marble Polishing
                </span>
                <br />
                <span className="text-xl sm:text-2xl lg:text-[25px] font-bold text-white mt-2 block drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  5-Star Hotel, Public &amp; Private Marble Maintenance &amp; Cleaning Services in Dubai
                </span>
                <span className="text-lg sm:text-xl font-bold text-amber-400 font-arabic mt-1 block leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  خدمات تلميع وصيانة الرخام في دبي للفنادق 5 نجوم والممتلكات الخاصة والعامة
                </span>
              </h1>

              <p className="text-white text-sm sm:text-base leading-relaxed max-w-xl mb-6 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Dubai Marble Polishing provides expert marble polishing and cleaning services in Dubai, including restoration, stain removal, shining, and maintenance for homes, offices, hotels, and commercial properties. We serve 5-star hotels, public, and private properties, ensuring clean, polished, and long-lasting marble surfaces without dullness, with reliable and professional care.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mb-7">
                <Link
                  href="/services"
                  className="bg-[#4a6fa5] hover:bg-[#3b5a8a] active:bg-[#2c3e5e] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  Our Services · خدماتنا <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+971522774953"
                  className="bg-black/50 hover:bg-black/70 border border-white/30 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-md backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 text-[#f59e0b]" /> +971 52 277 4953
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-white">
                {[
                  { en: "Free On-Site Inspection", ar: "معاينة مجانية" },
                  { en: "100% Dustless System", ar: "نظام بدون غبار" },
                  { en: "16+ Years Experience", ar: "خبرة 16+ عاماً" },
                ].map((t) => (
                  <div key={t.en} className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/25 shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.en}</span>
                    <span className="text-[11px] text-amber-300 font-arabic">({t.ar})</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Quick Booking Form */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <BookingForm isDark={false} mode="hero" />
          </motion.div>
        </div>
      </section>
      {/* ─────────────────────────────────────────────────────────────
          1.5. STATS COUNTER BAR (1,500+ Clients, 16+ Years, 98% Rate, 50+ Hotels)
         ───────────────────────────────────────────────────────────── */}
      <StatsCounter />

      {/* ─────────────────────────────────────────────────────────────
          1.6. LIVE VISUAL PROOF (Before & After Interactive Slider)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-[#f7f5f2] border-y border-[#e4e0da] overflow-hidden">
        <SectionDivider type="peak-up" color="#f7f5f2" position="top" height={36} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider
            badge="LIVE VISUAL PROOF · معاينة حية للنتائج"
            title="Witness the Italian Diamond Mirror Finish"
            subtitle="Drag the interactive slider below to inspect the actual difference between dull, traffic-worn stone and our 5-stage crystallization polish."
            arSubtitle="حرك المؤشر لمشاهدة الفرق المذهل بين الرخام الباهت قبل الجلي واللمعان الكريستالي الفائق بعد المعالجة"
            beforeImage={imgs.sliderBefore}
            afterImage={imgs.sliderAfter}
            beforeLabel="Before: Dull, Scratched & Stained - قبل المعالجة"
            afterLabel="After: High-Definition Mirror Shine - بعد التلميع"
          />
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. ABOUT US SECTION (4 Feature Boxes + 16 Years Counter Card)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#fafaf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Features */}
            <AnimatedSection direction="left" className="lg:col-span-7">
              <SectionLabel arabic="نبذة عنا">About Us</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c2a27] mb-2 leading-tight">
                Delivering Quality, Reliability &amp; Complete Customer Satisfaction
              </h2>
              <div className="text-[#8a6c3e] font-bold font-arabic text-sm sm:text-base mb-4">
                تقديم الجودة والموثوقية ورضا العملاء الكامل في دبي والإمارات
              </div>

              <p className="text-[#6b6560] text-sm sm:text-base leading-relaxed mb-8">
                Dubai Marble Polishing provides professional marble polishing and cleaning services in Dubai for residential, commercial, and industrial properties. We specialize in restoring the shine, cleanliness, and elegance of natural stone marble surfaces while addressing humidity effects to deliver reliable, cost-effective, and high-quality cleaning solutions with professional workmanship and customer-focused service, resulting in a smooth, glossy finish.
              </p>

              {/* 4 Feature Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="w-5 h-5 text-[#3b5a8a]" />,
                    title: "Experienced Staff",
                    ar: "فنيون ذوو خبرة عالية",
                    desc: "Our skilled and experienced technicians ensure high-quality workmanship across Dubai.",
                  },
                  {
                    icon: <Wrench className="w-5 h-5 text-[#3b5a8a]" />,
                    title: "Best Equipment",
                    ar: "أحدث المعدات المتطورة",
                    desc: "We use modern tools and advanced equipment to deliver fast, dustless, and long-lasting results.",
                  },
                  {
                    icon: <Award className="w-5 h-5 text-[#3b5a8a]" />,
                    title: "Reasonable Price",
                    ar: "أسعار مناسبة ومعاينات مجانية",
                    desc: "We offer affordable and transparent pricing without compromising on quality or clarity.",
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5 text-[#3b5a8a]" />,
                    title: "Certified Company",
                    ar: "شركة معتمدة وموثوقة",
                    desc: "Trusted and certified service provider committed to safety, quality standards, and excellence.",
                  },
                ].map(({ icon, title, ar, desc }) => (
                  <div key={title} className="p-4 rounded-xl bg-[#f0ede8] border border-[#e4e0da] flex gap-3.5 shadow-sm hover:border-[#7a9cc5] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#ede9e3] border border-[#c5d3e8] flex items-center justify-center shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <div className="font-bold text-[#2c2a27] text-sm">{title}</div>
                      <div className="text-[11px] text-[#8a6c3e] font-arabic font-semibold">{ar}</div>
                      <div className="text-xs text-[#8a8278] mt-1 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#3d3a35] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow transition-colors"
              >
                <span>More About Us</span>
                <span className="font-arabic font-normal border-l border-slate-700 pl-2">المزيد عنا</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Right Col: Counter Box & Image */}
            <AnimatedSection direction="right" className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#e4e0da]">
                  <Image
                    src={imgs.aboutWork}
                    alt="Marble Polishing Machine in Dubai"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white font-bold text-lg">Italian Wet Diamond Honing</div>
                    <div className="text-[#c9a96e] text-xs font-semibold">100% Dustless · جلي بالألماس بدون غبار</div>
                  </div>
                </div>

                {/* Counter Card */}
                <div className="absolute -bottom-5 -left-5 sm:left-6 bg-[#2c3e5e] text-white p-5 sm:p-6 rounded-2xl shadow-xl font-black text-center border border-blue-800">
                  <div className="text-3xl sm:text-4xl leading-none text-[#c9a96e]">16+</div>
                  <div className="text-xs uppercase tracking-widest font-bold mt-1.5 text-[#d9d2ca]">Years of Experience</div>
                  <div className="text-[11px] font-arabic font-normal mt-0.5 text-[#c5bdb5]">سنوات من الخبرة والتميز</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CORE SERVICES (6 Service Cards + CTA Bar)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-[#f0ede8] border-y border-[#e4e0da]">
        <SectionDivider type="peak-up" color="#f0ede8" position="top" height={36} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel variant="minimal" arabic="خدماتنا">OUR SERVICES</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c2a27] mb-2 leading-tight">
              Professional Marble Polishing &amp; Cleaning Services in Dubai
            </h2>
            <div className="text-[#8a6c3e] font-arabic font-bold text-sm sm:text-base mb-3">
              خدمات احترافية لتلميع وتنظيف الرخام في دبي
            </div>
            <p className="text-[#6b6560] text-sm sm:text-base">
              Dubai Marble Polishing provides expert marble polishing and cleaning services in Dubai to restore the shine, beauty, and durability of your marble surfaces in homes, villas, offices, and commercial buildings.
            </p>
          </AnimatedSection>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {servicesData.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block bg-[#fafaf8] rounded-2xl overflow-hidden border border-[#e4e0da] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-[#ede9e3]">
                    <Image
                      src={serviceImages[s.slug] ?? imgs.svcFloor}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-bold text-white font-arabic bg-slate-900/80 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/20">
                        {s.arTitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-[#2c2a27] text-lg mb-1 group-hover:text-[#3b5a8a] transition-colors">
                      {s.title}
                    </h3>
                    <div className="text-xs text-[#8a6c3e] font-semibold font-arabic mb-3">
                      {s.arTitle}
                    </div>
                    <p className="text-[#6b6560] text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
                      {s.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-[#4a6fa5]">
                      <span>Explore Service Details</span>
                      <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Core Services CTA Action Bar */}
          <div className="mt-10 p-6 rounded-2xl bg-[#fafaf8] border border-[#e4e0da] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-[#2c2a27]">Need a custom stone inspection or quote?</h4>
              <p className="text-xs text-[#8a8278]">Contact our technical team for immediate on-site consultation anywhere in Dubai.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/booking"
                className="bg-[#4a6fa5] hover:bg-[#3b5a8a] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors"
              >
                Schedule a Booking · احجز الآن
              </Link>
              <a
                href="tel:+971522774953"
                className="bg-[#ede9e3] hover:bg-[#e4e0da] text-[#2c2a27] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all flex items-center gap-2 border border-[#d6cfc5]"
              >
                <Phone className="w-3.5 h-3.5 text-[#4a6fa5]" /> +971 52 277 4953
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHY CHOOSE US (8 Icon Feature Grid)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#fafaf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel variant="minimal" arabic="لماذا تختارنا">WHY CHOOSE US</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c2a27] mb-2 leading-tight">
              Professional marble polishing and cleaning services in Dubai for a clean, glossy, and restored finish.
            </h2>
            <div className="text-[#8a6c3e] font-arabic font-bold text-sm sm:text-base mb-3">
              نقدم خدمات موثوقة وعالية الجودة لاستعادة بريق وجمال الرخام في دبي
            </div>
            <p className="text-[#6b6560] text-sm sm:text-base">
              Dubai Marble Polishing is a trusted provider of professional marble polishing and cleaning services in Dubai, committed to delivering high-quality results with reliability and care.
            </p>
          </AnimatedSection>

          {/* 8 Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Fully Insured",
                ar: "تأمين شامل للخدمات",
                desc: "All our services are fully insured, giving you complete peace of mind and protection for every project we handle.",
              },
              {
                icon: <Award className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Accredited Company",
                ar: "شركة معتمدة وموثوقة",
                desc: "We are a trusted and recognized service provider committed to industry standards and professional excellence in Dubai.",
              },
              {
                icon: <Layers className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Quality Materials",
                ar: "مواد ذات جودة عالية",
                desc: "We use only high-quality Italian crystallization compounds and nano-sealers to ensure long-lasting durability.",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Quality Maintenance",
                ar: "صيانة دورية فائقة",
                desc: "Our expert technicians deliver reliable maintenance solutions that keep your property surfaces running smoothly and efficiently.",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Custom Solutions",
                ar: "حلول مخصصة لكل نوع رخام",
                desc: "We offer tailored restoration scopes suited for Carrara, Crema Marfil, Travertine, and Onyx without hidden extras.",
              },
              {
                icon: <Search className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Complete Inspection",
                ar: "معاينة فنية متكاملة",
                desc: "We perform detailed inspections to identify issues accurately and provide the best solutions before starting any work.",
              },
              {
                icon: <MapPin className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Locally Owned",
                ar: "شركة محلية في دبي",
                desc: "We are a Dubai-based company, understanding local climate conditions and providing fast, reliable service across the city.",
              },
              {
                icon: <FileText className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Free Estimates",
                ar: "تقديرات مجانية بدون التزام",
                desc: "We provide free quotations and comprehensive estimates so you can plan your service with full clarity and confidence.",
              },
            ].map(({ icon, title, ar, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.04}>
                <div className="p-6 rounded-2xl bg-[#f0ede8] border border-[#e4e0da] hover:border-[#7a9cc5] hover:shadow-md transition-all h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#fafaf8] border border-[#e4e0da] shadow-sm flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <h3 className="font-bold text-[#2c2a27] text-base mb-0.5">{title}</h3>
                  <div className="text-[11px] text-[#8a6c3e] font-arabic font-semibold mb-2">{ar}</div>
                  <p className="text-xs text-[#6b6560] leading-relaxed flex-grow">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Action Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="bg-[#4a6fa5] hover:bg-[#3b5a8a] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow transition-colors"
            >
              Schedule a Booking · احجز الآن
            </Link>
            <a
              href="tel:+971522774953"
              className="bg-[#fafaf8] border border-[#d6cfc5] text-[#2c2a27] hover:border-[#4a6fa5] px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#4a6fa5]" /> +971 52 277 4953
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FEATURED WORKS / PROJECTS (4-Column Clean Gallery Grid)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-[#f0ede8] text-[#2c2a27] border-y border-[#e4e0da]">
        <SectionDivider type="peak-up" color="#f0ede8" position="top" height={36} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel variant="minimal" arabic="معرض المشاريع">OUR PROJECTS</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 text-[#2c2a27]">
              Featured Works &amp; Transformations
            </h2>
            <div className="text-[#8a6c3e] font-arabic font-bold text-sm sm:text-base mb-3">
              أبرز مشاريعنا ونتائج العمل في دبي
            </div>
            <p className="text-[#6b6560] text-sm sm:text-base">
              We have been restoring and polishing marble surfaces for over 16 years, successful in prestigious residential villas, hotels, and corporate properties across Dubai.
            </p>
          </AnimatedSection>

          {/* 4-Column Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { src: imgs.gal1, title: "Italian Carrara Floor Polishing", location: "Dubai Marina Villa" },
              { src: imgs.gal2, title: "5-Star Hotel Lobby Diamond Finish", location: "Downtown Dubai" },
              { src: imgs.gal3, title: "Kitchen Island Stain Restoration", location: "Palm Jumeirah" },
              { src: imgs.gal4, title: "Marble Crack Repair & Buffing", location: "Emirates Hills" },
            ].map((p, idx) => (
              <AnimatedSection key={p.title} delay={idx * 0.06}>
                <div className="group relative aspect-square rounded-2xl overflow-hidden border border-[#e4e0da] bg-[#fafaf8] shadow-sm hover:shadow-lg transition-all">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-[#c9a96e] font-bold uppercase tracking-wider mb-0.5">{p.location}</div>
                    <div className="text-sm font-extrabold text-white leading-snug">{p.title}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/gallery"
              className="bg-[#4a6fa5] hover:bg-[#3b5a8a] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow transition-colors"
            >
              View All Projects · كافة المشاريع
            </Link>
            <a
              href="tel:+971522774953"
              className="bg-[#fafaf8] border border-[#d6cfc5] text-[#2c2a27] hover:border-[#4a6fa5] px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#4a6fa5]" /> +971 52 277 4953
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SIMPLE 3 STEPS PROCESS (Ribbon Cards)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#fafaf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel arabic="مراحل العمل">Our Services</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c2a27] mb-2">
              Simple 3 Steps Process
            </h2>
            <div className="text-[#8a6c3e] font-arabic font-bold text-sm sm:text-base mb-3">
              3 خطوات بسيطة للحصول على نتائج مثالية
            </div>
            <p className="text-[#6b6560] text-sm sm:text-base">
              We care for your property as if it were our own, with systematic diamond honing and zero dust.
            </p>
          </AnimatedSection>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                step: "Step 1",
                icon: <Search className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Inspection & Proposal",
                ar: "المعاينة والتقييم الفني",
                desc: "We perform a thorough on-site stone inspection to assess scratches, stains, and hardness levels.",
              },
              {
                step: "Step 2",
                icon: <FileText className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Detailed Proposal",
                ar: "عرض فني مفصل وشفاف",
                desc: "Our team provides a clear and transparent quotation with the best solution tailored to your property requirements.",
              },
              {
                step: "Step 3",
                icon: <Award className="w-6 h-6 text-[#3b5a8a]" />,
                title: "Professional Service Delivery",
                ar: "تنفيذ احترافي بالضمان",
                desc: "We complete the work using skilled technicians, modern Italian diamond tools, and protective nano-sealers for long-lasting results.",
              },
            ].map(({ step, icon, title, ar, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.08}>
                <div className="relative p-8 rounded-3xl bg-[#f0ede8] border border-[#e4e0da] shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  {/* Step Ribbon */}
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#4a6fa5] text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                    {step}
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#fafaf8] border border-[#e4e0da] shadow-sm flex items-center justify-center mb-6">
                    {icon}
                  </div>
                  <h3 className="font-extrabold text-[#2c2a27] text-xl mb-1">{title}</h3>
                  <div className="text-xs text-[#8a6c3e] font-arabic font-semibold mb-3">{ar}</div>
                  <p className="text-[#6b6560] text-sm leading-relaxed flex-grow">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. TESTIMONIALS SECTION (High-Contrast Luxury Dark Backdrop with White Floating Cards)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-slate-950 border-y border-slate-800">
        {/* Background Image with High-Contrast Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs.reviewsHero}
            alt="Dubai Marble Client Reviews Background"
            fill
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
        </div>

        <SectionDivider type="peak-up" color="#020617" position="top" height={36} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel isDark={true} variant="minimal" arabic="آراء العملاء">CLIENT REVIEWS</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 drop-shadow-md">
              Our Clients Love Us
            </h2>
            <div className="text-[#c9a96e] font-arabic font-bold text-sm sm:text-base">
              ثقة ورضا عملائنا في دبي والإمارات
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "John D.",
                location: "Dubai Marina, UAE",
                arRole: "مالك عقار، دبي مارينا",
                text: "Dubai Marble Polishing provided excellent marble polishing and cleaning service for my property. The team arrived on time, restored the shine of my marble floors professionally, and removed all stains and scratches. Outstanding results!",
                arText: "قدمت شركة Dubai Marble Polishing خدمة ممتازة في تلميع وتنظيف الرخام، حيث أعاد الفريق لمعان الأرضيات بشكل احترافي وأزال جميع البقع والخدوش.",
              },
              {
                name: "Sarah K.",
                location: "Palm Jumeirah, UAE",
                arRole: "نخلة جميرا، دبي",
                text: "I used their marble polishing and cleaning services for my villa, and the experience was outstanding. Very polite staff, fast response, and high-quality work. My marble floors look brand new again. Highly recommended!",
                arText: "استخدمت خدمات تلميع وتنظيف الرخام وكانت التجربة رائعة. كان الموظفون محترمين للغاية، والاستجابة سريعة، وجودة العمل ممتازة.",
              },
              {
                name: "Ahmed Al Mansoori",
                location: "Emirates Hills, UAE",
                arRole: "تلال الإمارات، دبي",
                text: "Exceptional Italian diamond polishing without any airborne dust. They treated our Crema Marfil with total precision and sealed it against humidity. Outstanding professionalism.",
                arText: "جلي رخام احترافي للغاية بدون أي غبار، تعامل راقٍ ونتائج تفوق التوقعات لفيلا تلال الإمارات.",
              },
            ].map((t, idx) => (
              <AnimatedSection key={t.name} delay={idx * 0.08}>
                <div className="p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#e4e0da] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-[#c5bdb5]" />
                    </div>

                    <p className="text-[#3d3a35] text-xs sm:text-sm leading-relaxed mb-4">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <p className="text-[#8a8278] text-xs font-arabic leading-relaxed mb-6 border-t border-slate-100 pt-3">
                      {t.arText}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#2c2a27] text-sm">{t.name}</div>
                      <div className="text-[11px] text-[#8a8278]">{t.location} <span className="text-[#8a6c3e] font-arabic font-semibold">({t.arRole})</span></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. OTHER TECHNICAL & PROPERTY SERVICES (8 Grid)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#fafaf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel arabic="خدماتنا الفنية الأخرى">Our Other Services</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c2a27] mb-2">
              Our Results Speak for Our Quality
            </h2>
            <div className="text-[#8a6c3e] font-arabic font-bold text-sm sm:text-base mb-3">
              خدمات صيانة فنية متكاملة للمباني والفيلات في دبي
            </div>
            <p className="text-[#6b6560] text-sm sm:text-base">
              Explore Dubai Marble Polishing technical services including plumbing, electrical works, cleaning, handyman, painting, and maintenance services in Dubai.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.04}>
                <div className="group bg-[#f0ede8] rounded-2xl overflow-hidden border border-[#e4e0da] shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-200">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 text-[11px] font-bold text-amber-300 font-arabic">
                      {svc.ar}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-[#2c2a27] text-base mb-2 group-hover:text-[#3b5a8a] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#6b6560] leading-relaxed mb-4 flex-grow">
                      {svc.desc}
                    </p>
                    <Link
                      href={svc.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#4a6fa5] hover:text-blue-800 transition-colors"
                    >
                      <span>View Details »</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="bg-[#4a6fa5] hover:bg-[#3b5a8a] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow transition-colors"
            >
              Schedule a Booking · احجز الآن
            </Link>
            <a
              href="tel:+971522774953"
              className="bg-[#fafaf8] border border-[#d6cfc5] text-[#2c2a27] hover:border-[#4a6fa5] px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#4a6fa5]" /> +971 52 277 4953
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. DEDICATED ONLINE BOOKING SECTION (Full Form)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#ede9e3] border-y border-[#e4e0da] relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <SectionLabel arabic="الحجز الإلكتروني">Online Booking</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 text-[#2c2a27]">
              Book Marble &amp; Stone Restoration Service
            </h2>
            <div className="text-[#8a6c3e] font-arabic font-bold text-sm sm:text-base">
              احجز موعد المعاينة المجانية في دبي بسهولة
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <BookingForm isDark={false} mode="full" />
          </AnimatedSection>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. LATEST BLOG / ARTICLES (3 Column Grid)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#fafaf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel arabic="المدونة">Blog</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c2a27] mb-2">
              Latest Stone Care Insights &amp; Advice
            </h2>
            <div className="text-[#8a6c3e] font-arabic font-bold text-sm sm:text-base mb-3">
              نصائح ومعلومات متخصصة للعناية بالرخام في دبي
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {blogArticles.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08}>
                <div className="group bg-[#f0ede8] rounded-2xl overflow-hidden border border-[#e4e0da] shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-200">
                    <Image
                      src={b.src}
                      alt={b.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-[#a89f95] mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-[#4a6fa5]" />
                      <span>{b.date}</span>
                    </div>

                    <h3 className="font-bold text-[#2c2a27] text-base mb-2 group-hover:text-[#3b5a8a] transition-colors leading-snug">
                      {b.title}
                    </h3>
                    <div className="text-xs text-[#8a6c3e] font-arabic font-semibold mb-4">
                      {b.ar}
                    </div>

                    <div className="mt-auto pt-3 border-t border-[#e4e0da]">
                      <Link
                        href={b.link}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#4a6fa5] hover:text-blue-800 transition-colors"
                      >
                        <span>Read More »</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#3d3a35] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow transition-colors"
            >
              <span>View All Articles</span>
              <span className="font-arabic font-normal border-l border-slate-700 pl-2">كافة المقالات</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
