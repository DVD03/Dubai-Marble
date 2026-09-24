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
import MachineryVideoShowcase from "@/components/MachineryVideoShowcase";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
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
    image: imgs.svcCleaning,
    link: "/services",
  },
  {
    title: "Snagging & Property Inspection",
    ar: "فحص ومعاينة العقارات",
    desc: "Detailed property inspection services to identify defects before handover or purchase, ensuring quality and safety.",
    image: imgs.svcSnagging,
    link: "/services",
  },
  {
    title: "Cleaning & Painting Services",
    ar: "خدمات التنظيف والدهانات",
    desc: "Deep cleaning, villa cleaning, office cleaning, and professional interior/exterior painting services.",
    image: imgs.svcCleaningPainting,
    link: "/services",
  },
  {
    title: "Gypsum & Tile Work",
    ar: "أعمال الجبس والبلاط",
    desc: "False ceiling, partition work, gypsum design, tile installation, and finishing solutions for modern interiors.",
    image: imgs.svcGypsumTile,
    link: "/services",
  },
  {
    title: "Interior Design & Fit-Out",
    ar: "تصميم داخلي وتشطيبات",
    desc: "Complete interior design solutions and contract-based fit-out work for residential and commercial spaces.",
    image: imgs.svcInteriorDesign,
    link: "/services",
  },
  {
    title: "Bathroom & Kitchen Services",
    ar: "خدمات الحمامات والمطابخ",
    desc: "Installation, repair, and renovation of bathroom and kitchen plumbing, fittings, and stone vanity fixtures.",
    image: imgs.svcBathroomKitchen,
    link: "/services",
  },
  {
    title: "Leak Detection Services",
    ar: "كشف تسربات المياه",
    desc: "Advanced acoustic & thermal leak detection solutions to identify and fix hidden water leakage issues quickly.",
    image: imgs.svcLeakDetection,
    link: "/services",
  },
  {
    title: "Repiping & Water Line Services",
    ar: "استبدال شبكات الأنابيب",
    desc: "Full pipe replacement and repiping solutions to improve water flow and prevent leakage issues in villas and buildings.",
    image: imgs.svcGrinding,
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
    <div className="bg-[#F7F9FC] text-[#263238]">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Full Visibility Video Background with Glassmorphic Card)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden border-b border-[#E5E7EB]">
        {/* Full-Visibility Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={imgs.heroBg}
            className="w-full h-full object-cover object-center scale-105 opacity-95 brightness-[0.88]"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            <source src="/bg1.mp4" type="video/mp4" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Enhanced cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (More compact, visually balanced) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel isDark={true} variant="minimal" arabic="تلميع وجلي الرخام في دبي">
                Professional Marble Polishing &amp; Cleaning Services in Dubai
              </SectionLabel>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black leading-[1.15] mb-6 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                <span className="text-[#60A5FA] underline decoration-[#D96B27] decoration-5 underline-offset-4">
                  GridPro &amp; Dubai Marble Polishing
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-white mt-3 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  5-Star Hotel, Public &amp; Private Marble Maintenance &amp; Cleaning Services in Dubai
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#F7F9FC] font-arabic mt-2 block leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  خدمات تلميع وصيانة الرخام في دبي للفنادق 5 نجوم والممتلكات الخاصة والعامة
                </span>
              </h1>

              <p className="text-[#E4E7EC] text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                GridPro &amp; Dubai Marble Polishing provides expert marble polishing and cleaning services in Dubai, including restoration, stain removal, shining, and maintenance for homes, offices, hotels, and commercial properties. We serve 5-star hotels, public, and private properties, ensuring clean, polished, and long-lasting marble surfaces without dullness, with reliable and professional care.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/services"
                  className="bg-[#123B6D] hover:bg-[#0B1F33] active:bg-[#0B1F33] text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-2 hover:scale-105"
                >
                  Our Services · خدماتنا <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+971522774953"
                  className="bg-[#D96B27] hover:bg-[#B8521A] border border-white/30 text-white px-7 py-4 rounded-xl font-bold text-base transition-all flex items-center gap-2 shadow-lg backdrop-blur-sm hover:scale-105"
                >
                  <Phone className="w-5 h-5 text-white" /> +971 52 277 4953
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base font-medium text-white">
                {[
                  { en: "Free On-Site Inspection", ar: "معاينة مجانية" },
                  { en: "100% Dustless System", ar: "نظام بدون غبار" },
                  { en: "16+ Years Experience", ar: "خبرة 16+ عاماً" },
                ].map((t) => (
                  <div key={t.en} className="flex items-center gap-3 bg-[#0B1F33]/70 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{t.en}</span>
                    <span className="text-xs text-[#123B6D] font-arabic">({t.ar})</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Quick Booking Form */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <BookingForm isDark={false} mode="hero" />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          1.2. OUR WORK - PREMIUM MASONRY GALLERY
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel variant="minimal" arabic="أعمالنا">OUR WORK</SectionLabel>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] mb-4 leading-tight">
              Every Surface. Beautifully Restored.
            </h2>
            <div className="text-[#D96B27] font-arabic font-bold text-lg sm:text-xl mb-5">
              كل سطح. يستعيد بريقه بشكل مذهل
            </div>
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              From everyday surfaces to architectural masterpieces, our craftsmanship brings natural stone back to life.
            </p>
          </AnimatedSection>

          {/* Masonry Gallery Grid - Larger Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { src: imgs.work1, label: "Marble Restoration", aspect: "aspect-[4/3]", size: "lg" },
              { src: imgs.work2, label: "Luxury Interior", aspect: "aspect-[3/4]", size: "md" },
              { src: imgs.work3, label: "Floor Polishing", aspect: "aspect-[4/3]", size: "md" },
              { src: imgs.work4, label: "Staircase Restoration", aspect: "aspect-[3/4]", size: "lg" },
              { src: imgs.work5, label: "Deep Cleaning", aspect: "aspect-[4/3]", size: "md" },
              { src: imgs.work6, label: "Stain Removal", aspect: "aspect-[3/4]", size: "md" },
              { src: imgs.work7, label: "Crack Repair", aspect: "aspect-[4/3]", size: "lg" },
              { src: imgs.work8, label: "Professional Polish", aspect: "aspect-[3/4]", size: "md" },
              { src: imgs.work9, label: "Hotel Lobby", aspect: "aspect-[4/3]", size: "lg" },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08}>
                <div className={`group relative ${item.aspect} rounded-3xl overflow-hidden bg-[#F7F9FC] shadow-lg hover:shadow-2xl transition-all duration-400 cursor-pointer`}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-600"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Always visible overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400" />
                  {/* Content - Always visible but enhances on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="text-white font-black text-xl mb-2 text-center drop-shadow-md">{item.label}</div>
                    <div className="flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Gallery Footer Button */}
          <div className="mt-16 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 bg-[#123B6D] hover:bg-[#0B1F33] text-white font-bold text-base px-10 py-5 rounded-2xl shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <span>View Full Gallery</span>
              <span className="font-arabic font-normal border-l border-white/20 pl-3">المعرض الكامل</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          1.5. STATS COUNTER BAR (1,500+ Clients, 16+ Years, 98% Rate, 50+ Hotels)
         ───────────────────────────────────────────────────────────── */}
      <StatsCounter />

      {/* ─────────────────────────────────────────────────────────────
          1.6. LIVE VISUAL PROOF (Before & After Interactive Slider)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-white border-y border-[#E5E7EB] overflow-hidden">
        <SectionDivider type="peak-up" color="#FFFFFF" position="top" height={36} />
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
      <section className="py-20 sm:py-28 bg-[#F7F9FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col: Enhanced Visual with Image */}
            <AnimatedSection direction="left" className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB]">
                  <Image
                    src={imgs.aboutWorkImage}
                    alt="Technician operating marble floor polishing machine in Dubai"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-white font-black text-xl mb-2">Italian Wet Diamond Honing</div>
                    <div className="text-[#D96B27] text-sm font-semibold">100% Dustless · جلي بالألماس بدون غبار</div>
                  </div>
                </div>

                {/* Counter Card - More prominent */}
                <div className="absolute -bottom-6 -left-6 sm:left-8 bg-[#111827] text-white p-6 sm:p-8 rounded-3xl shadow-2xl font-black text-center border border-white/20">
                  <div className="text-4xl sm:text-5xl leading-none text-[#123B6D]">16+</div>
                  <div className="text-xs uppercase tracking-widest font-bold mt-2 text-[#D0D5DD]">Years of Experience</div>
                  <div className="text-xs font-arabic font-normal mt-1 text-[#98A2B3]">سنوات من الخبرة والتميز</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Col: Features - More compact */}
            <AnimatedSection direction="right" className="lg:col-span-7 order-1 lg:order-2">
              <SectionLabel arabic="نبذة عنا">About Us</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3 leading-tight">
                Delivering Quality, Reliability &amp; Complete Customer Satisfaction
              </h2>
              <div className="text-[#D96B27] font-bold font-arabic text-base sm:text-lg mb-6">
                تقديم الجودة والموثوقية ورضا العملاء الكامل في دبي والإمارات
              </div>

              <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed mb-10">
                Dubai Marble Polishing provides professional marble polishing and cleaning services in Dubai for residential, commercial, and industrial properties. We specialize in restoring the shine, cleanliness, and elegance of natural stone marble surfaces while addressing humidity effects to deliver reliable, cost-effective, and high-quality cleaning solutions with professional workmanship and customer-focused service, resulting in a smooth, glossy finish.
              </p>

              {/* 4 Feature Boxes - More visual */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    icon: <Users className="w-6 h-6 text-[#D96B27]" />,
                    title: "Experienced Staff",
                    ar: "فنيون ذوو خبرة عالية",
                    desc: "Our skilled and experienced technicians ensure high-quality workmanship across Dubai.",
                  },
                  {
                    icon: <Wrench className="w-6 h-6 text-[#D96B27]" />,
                    title: "Best Equipment",
                    ar: "أحدث المعدات المتطورة",
                    desc: "We use modern tools and advanced equipment to deliver fast, dustless, and long-lasting results.",
                  },
                  {
                    icon: <Award className="w-6 h-6 text-[#D96B27]" />,
                    title: "Free On-Site Assessment",
                    ar: "معاينة مجانية واستشارة فورية",
                    desc: "We offer complimentary on-site inspections and tailored expert consultations without compromising on quality.",
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-[#D96B27]" />,
                    title: "Certified Company",
                    ar: "شركة معتمدة وموثوقة",
                    desc: "Trusted and certified service provider committed to safety, quality standards, and excellence.",
                  },
                ].map(({ icon, title, ar, desc }) => (
                  <div key={title} className="p-5 rounded-2xl bg-white border border-[#E5E7EB] flex gap-4 shadow-md hover:shadow-xl hover:border-[#D96B27]/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F9FC] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="font-bold text-[#263238] text-base">{title}</div>
                      <div className="text-xs text-[#D96B27] font-arabic font-semibold">{ar}</div>
                      <div className="text-sm text-[#6B7280] mt-1 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#D96B27] hover:bg-[#B8521A] text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>More About Us</span>
                <span className="font-arabic font-normal border-l border-white/20 pl-3">المزيد عنا</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CORE SERVICES (6 Service Cards + CTA Bar)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-[#F7F9FC] border-y border-[#E5E7EB]">
        <SectionDivider type="peak-up" color="#F7F9FC" position="top" height={36} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel variant="minimal" arabic="خدماتنا">OUR SERVICES</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3 leading-tight">
              Professional Marble Polishing &amp; Cleaning Services in Dubai
            </h2>
            <div className="text-[#D96B27] font-arabic font-bold text-base sm:text-lg mb-5">
              خدمات احترافية لتلميع وتنظيف الرخام في دبي
            </div>
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
              Dubai Marble Polishing provides expert marble polishing and cleaning services in Dubai to restore the shine, beauty, and durability of your marble surfaces in homes, villas, offices, and commercial buildings.
            </p>
          </AnimatedSection>

          {/* 6 Services Grid - Larger Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {servicesData.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-lg hover:shadow-2xl hover:border-[#D96B27]/50 hover:-translate-y-2 transition-all h-full flex flex-col"
                >
                  <div className="aspect-[16/11] relative overflow-hidden bg-[#F7F9FC]">
                    <Image
                      src={serviceImages[s.slug] ?? imgs.svcFloor}
                      alt={`${s.title} in Dubai - Professional Marble Restoration & Polishing`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-600"
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="text-xs font-bold text-white font-arabic bg-[#111827]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/30">
                        {s.arTitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="font-bold text-[#111827] text-xl mb-2 group-hover:text-[#D96B27] transition-colors">
                      {s.title}
                    </h3>
                    <div className="text-sm text-[#D96B27] font-semibold font-arabic mb-4">
                      {s.arTitle}
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                      {s.description}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-[#E5E7EB] text-sm font-bold text-[#D96B27]">
                      <span>Explore Service Details</span>
                      <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Core Services CTA Action Bar - More prominent */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-[#111827]">Need a custom stone inspection or quote?</h4>
              <p className="text-sm text-[#6B7280]">Contact our technical team for immediate on-site consultation anywhere in Dubai.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/booking"
                className="bg-[#123B6D] hover:bg-[#0B1F33] text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Booking · احجز الآن
              </Link>
              <a
                href="tel:+971522774953"
                className="bg-[#F7F9FC] hover:bg-[#F7F9FC] text-[#111827] font-bold text-sm px-7 py-4 rounded-2xl transition-all flex items-center gap-3 border border-[#E5E7EB] shadow-md"
              >
                <Phone className="w-4 h-4 text-[#D96B27]" /> +971 52 277 4953
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHY CHOOSE US (8 Icon Feature Grid)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#F7F9FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel variant="minimal" arabic="لماذا تختارنا">WHY CHOOSE US</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3 leading-tight">
              Professional marble polishing and cleaning services in Dubai for a clean, glossy, and restored finish.
            </h2>
            <div className="text-[#D96B27] font-arabic font-bold text-base sm:text-lg mb-5">
              نقدم خدمات موثوقة وعالية الجودة لاستعادة بريق وجمال الرخام في دبي
            </div>
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
              Dubai Marble Polishing is a trusted provider of professional marble polishing and cleaning services in Dubai, committed to delivering high-quality results with reliability and care.
            </p>
          </AnimatedSection>

          {/* 8 Features Grid - More prominent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              {
                icon: <ShieldCheck className="w-7 h-7 text-[#D96B27]" />,
                title: "Fully Insured",
                ar: "تأمين شامل للخدمات",
                desc: "All our services are fully insured, giving you complete peace of mind and protection for every project we handle.",
              },
              {
                icon: <Award className="w-7 h-7 text-[#D96B27]" />,
                title: "Accredited Company",
                ar: "شركة معتمدة وموثوقة",
                desc: "We are a trusted and recognized service provider committed to industry standards and professional excellence in Dubai.",
              },
              {
                icon: <Layers className="w-7 h-7 text-[#D96B27]" />,
                title: "Quality Materials",
                ar: "مواد ذات جودة عالية",
                desc: "We use only high-quality Italian crystallization compounds and nano-sealers to ensure long-lasting durability.",
              },
              {
                icon: <CheckCircle2 className="w-7 h-7 text-[#D96B27]" />,
                title: "Quality Maintenance",
                ar: "صيانة دورية فائقة",
                desc: "Our expert technicians deliver reliable maintenance solutions that keep your property surfaces running smoothly and efficiently.",
              },
              {
                icon: <Sparkles className="w-7 h-7 text-[#D96B27]" />,
                title: "Custom Solutions",
                ar: "حلول مخصصة لكل نوع رخام",
                desc: "We offer tailored restoration scopes suited for Carrara, Crema Marfil, Travertine, and Onyx without hidden extras.",
              },
              {
                icon: <Search className="w-7 h-7 text-[#D96B27]" />,
                title: "Complete Inspection",
                ar: "معاينة فنية متكاملة",
                desc: "We perform detailed inspections to identify issues accurately and provide the best solutions before starting any work.",
              },
              {
                icon: <MapPin className="w-7 h-7 text-[#D96B27]" />,
                title: "Locally Owned",
                ar: "شركة محلية في دبي",
                desc: "We are a Dubai-based company, understanding local climate conditions and providing fast, reliable service across the city.",
              },
              {
                icon: <FileText className="w-7 h-7 text-[#D96B27]" />,
                title: "Free Estimates",
                ar: "تقديرات مجانية بدون التزام",
                desc: "We provide free quotations and comprehensive estimates so you can plan your service with full clarity and confidence.",
              },
            ].map(({ icon, title, ar, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.04}>
                <div className="p-7 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#D96B27]/50 hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-[#F7F9FC] border border-[#E5E7EB] shadow-md flex items-center justify-center mb-5">
                    {icon}
                  </div>
                  <h3 className="font-bold text-[#111827] text-lg mb-1">{title}</h3>
                  <div className="text-xs text-[#D96B27] font-arabic font-semibold mb-3">{ar}</div>
                  <p className="text-sm text-[#6B7280] leading-relaxed flex-grow">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Action Bar - More prominent */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/booking"
              className="bg-[#123B6D] hover:bg-[#0B1F33] text-white font-bold text-base px-10 py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule a Booking · احجز الآن
            </Link>
            <a
              href="tel:+971522774953"
              className="bg-white border border-[#E5E7EB] text-[#111827] hover:border-[#D96B27] px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center gap-3 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 text-[#D96B27]" /> +971 52 277 4953
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FEATURED WORKS / PROJECTS (4-Column Clean Gallery Grid)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-white text-[#263238] border-y border-[#E5E7EB]">
        <SectionDivider type="peak-up" color="#FFFFFF" position="top" height={36} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel variant="minimal" arabic="معرض المشاريع">OUR PROJECTS</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 text-[#111827]">
              Featured Works &amp; Transformations
            </h2>
            <div className="text-[#D96B27] font-arabic font-bold text-base sm:text-lg mb-5">
              أبرز مشاريعنا ونتائج العمل في دبي
            </div>
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
              We have been restoring and polishing marble surfaces for over 16 years, successful in prestigious residential villas, hotels, and corporate properties across Dubai.
            </p>
          </AnimatedSection>

          {/* 4-Column Photo Grid - Larger Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { src: imgs.proj1, title: projectsData[0].title, location: projectsData[0].location },
              { src: imgs.proj2, title: projectsData[1].title, location: projectsData[1].location },
              { src: imgs.proj3, title: projectsData[2].title, location: projectsData[2].location },
              { src: imgs.proj4, title: projectsData[3].title, location: projectsData[3].location },
            ].map((p, idx) => (
              <AnimatedSection key={p.title} delay={idx * 0.06}>
                <div className="group relative aspect-square rounded-3xl overflow-hidden border border-[#E5E7EB] bg-[#F7F9FC] shadow-lg hover:shadow-2xl transition-all">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-600"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xs text-[#D96B27] font-bold uppercase tracking-wider mb-1">{p.location}</div>
                    <div className="text-base font-extrabold text-white leading-snug">{p.title}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-16 text-center flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/gallery"
              className="bg-[#D96B27] hover:bg-[#B8521A] text-white font-bold text-base px-10 py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              View All Projects · كافة المشاريع
            </Link>
            <a
              href="tel:+971522774953"
              className="bg-[#F7F9FC] border border-[#E5E7EB] text-[#111827] hover:border-[#D96B27] px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center gap-3 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 text-[#D96B27]" /> +971 52 277 4953
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5B. MACHINERY & PROCESS VIDEOS (Dedicated Video Showcase)
         ───────────────────────────────────────────────────────────── */}
      <MachineryVideoShowcase />

      {/* ─────────────────────────────────────────────────────────────
          6. SIMPLE 3 STEPS PROCESS (Ribbon Cards)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#F7F9FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel arabic="مراحل العمل">Our Services</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3">
              Simple 3 Steps Process
            </h2>
            <div className="text-[#D96B27] font-arabic font-bold text-base sm:text-lg mb-5">
              3 خطوات بسيطة للحصول على نتائج مثالية
            </div>
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
              We care for your property as if it were our own, with systematic diamond honing and zero dust.
            </p>
          </AnimatedSection>

          {/* 3 Step Cards - More prominent */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "Step 1",
                icon: <Search className="w-7 h-7 text-[#D96B27]" />,
                title: "Inspection & Proposal",
                ar: "المعاينة والتقييم الفني",
                desc: "We perform a thorough on-site stone inspection to assess scratches, stains, and hardness levels.",
              },
              {
                step: "Step 2",
                icon: <FileText className="w-7 h-7 text-[#D96B27]" />,
                title: "Detailed Proposal",
                ar: "عرض فني مفصل وشفاف",
                desc: "Our team provides a clear and transparent quotation with the best solution tailored to your property requirements.",
              },
              {
                step: "Step 3",
                icon: <Award className="w-7 h-7 text-[#D96B27]" />,
                title: "Professional Service Delivery",
                ar: "تنفيذ احترافي بالضمان",
                desc: "We complete the work using skilled technicians, modern Italian diamond tools, and protective nano-sealers for long-lasting results.",
              },
            ].map(({ step, icon, title, ar, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.08}>
                <div className="relative p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                  {/* Step Ribbon */}
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#D96B27] text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
                    {step}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#F7F9FC] border border-[#E5E7EB] shadow-md flex items-center justify-center mb-8">
                    {icon}
                  </div>
                  <h3 className="font-extrabold text-[#111827] text-2xl mb-2">{title}</h3>
                  <div className="text-sm text-[#D96B27] font-arabic font-semibold mb-4">{ar}</div>
                  <p className="text-[#6B7280] text-base leading-relaxed flex-grow">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. TESTIMONIALS SECTION (High-Contrast Luxury Dark Backdrop with White Floating Cards)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-28 sm:py-36 overflow-hidden bg-[#123B6D] border-y border-white/10">
        {/* Background Image with High-Contrast Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs.reviewsHero}
            alt="Dubai Marble Client Reviews Background"
            fill
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#123B6D]/95 backdrop-blur-[2px]" />
        </div>

        <SectionDivider type="peak-up" color="#123B6D" position="top" height={36} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel isDark={true} variant="minimal" arabic="آراء العملاء">CLIENT REVIEWS</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-lg">
              Our Clients Love Us
            </h2>
            <div className="text-[#F7F9FC] font-arabic font-bold text-base sm:text-lg">
              ثقة ورضا عملائنا في دبي والإمارات
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex text-[#D96B27]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#D96B27] text-[#D96B27]" />
                        ))}
                      </div>
                      <Quote className="w-7 h-7 text-[#98A2B3]" />
                    </div>

                    <p className="text-[#263238] text-sm sm:text-base leading-relaxed mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <p className="text-[#6B7280] text-sm font-arabic leading-relaxed mb-7 border-t border-[#E5E7EB] pt-4">
                      {t.arText}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#E5E7EB]">
                    <div className="w-12 h-12 rounded-full bg-[#F7F9FC] text-[#D96B27] flex items-center justify-center font-bold text-base shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#111827] text-base">{t.name}</div>
                      <div className="text-xs text-[#6B7280]">{t.location} <span className="text-[#D96B27] font-arabic font-semibold">({t.arRole})</span></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <SectionDivider type="peak-up" color="#123B6D" position="bottom" height={36} />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. OTHER TECHNICAL & PROPERTY SERVICES (8 Grid)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#F7F9FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel arabic="خدماتنا الفنية الأخرى">Our Other Services</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3">
              Our Results Speak for Our Quality
            </h2>
            <div className="text-[#D96B27] font-arabic font-bold text-base sm:text-lg mb-5">
              خدمات صيانة فنية متكاملة للمباني والفيلات في دبي
            </div>
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
              Explore Dubai Marble Polishing technical services including plumbing, electrical works, cleaning, handyman, painting, and maintenance services in Dubai.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {otherServices.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.04}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="aspect-[16/11] relative overflow-hidden bg-[#F7F9FC]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-600"
                      sizes="(max-width:768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-xs font-bold text-white font-arabic">
                      {svc.ar}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-[#111827] text-lg mb-2 group-hover:text-[#D96B27] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-5 flex-grow">
                      {svc.desc}
                    </p>
                    <Link
                      href={svc.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#D96B27] hover:text-[#123B6D] transition-colors"
                    >
                      <span>View Details »</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/booking"
              className="bg-[#123B6D] hover:bg-[#0B1F33] text-white font-bold text-base px-10 py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule a Booking · احجز الآن
            </Link>
            <a
              href="tel:+971522774953"
              className="bg-white border border-[#E5E7EB] text-[#111827] hover:border-[#D96B27] px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center gap-3 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 text-[#D96B27]" /> +971 52 277 4953
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. DEDICATED ONLINE BOOKING SECTION (Full Form)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#F7F9FC] border-y border-[#E5E7EB] relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel arabic="الحجز الإلكتروني">Online Booking</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 text-[#111827]">
              Book Marble &amp; Stone Restoration Service
            </h2>
            <div className="text-[#D96B27] font-arabic font-bold text-base sm:text-lg">
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
      <section className="py-24 sm:py-32 bg-[#F7F9FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel arabic="المدونة">Blog</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3">
              Latest Stone Care Insights &amp; Advice
            </h2>
            <div className="text-[#D96B27] font-arabic font-bold text-base sm:text-lg mb-5">
              نصائح ومعلومات متخصصة للعناية بالرخام في دبي
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogArticles.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="aspect-[16/11] relative overflow-hidden bg-[#F7F9FC]">
                    <Image
                      src={b.src}
                      alt={b.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-600"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent" />
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-[#98A2B3] mb-3">
                      <Calendar className="w-4 h-4 text-[#D96B27]" />
                      <span>{b.date}</span>
                    </div>

                    <h3 className="font-bold text-[#111827] text-lg mb-2 group-hover:text-[#D96B27] transition-colors leading-snug">
                      {b.title}
                    </h3>
                    <div className="text-sm text-[#D96B27] font-arabic font-semibold mb-5">
                      {b.ar}
                    </div>

                    <div className="mt-auto pt-4 border-t border-[#E5E7EB]">
                      <Link
                        href={b.link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#D96B27] hover:text-[#123B6D] transition-colors"
                      >
                        <span>Read More »</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 bg-[#D96B27] hover:bg-[#B8521A] text-white font-bold text-base px-10 py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>View All Articles</span>
              <span className="font-arabic font-normal border-l border-white/20 pl-3">كافة المقالات</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
