"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, Phone, ArrowRight,
  ShieldCheck, Award, Users, Wrench, Clock, Star, Sparkles
} from "lucide-react";
import BookingForm from "@/components/BookingForm";
import StatsCounter from "@/components/StatsCounter";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PriceEstimator from "@/components/PriceEstimator";
import ProcessTabs from "@/components/ProcessTabs";
import DubaiCommunities from "@/components/DubaiCommunities";
import TrustBadges from "@/components/TrustBadges";
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

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0b0c16] border-b border-brand-violet/20">
        {/* Background image with high contrast */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs.heroBg}
            alt="Luxury marble floor"
            fill
            className="object-cover object-center opacity-25"
            priority
            sizes="100vw"
          />
          {/* Multi-layered dark gradient & ambient logo glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-[#0b0c16]/85 to-[#0b0c16]/75" />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 shimmer opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-brand-violet/30 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full brand-gradient inline-block shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                <span>GridsPro International</span>
                <span className="font-arabic text-brand-amber font-normal text-[11px] border-l border-white/20 pl-2">
                  تلميع وجلي الرخام بالألماس الإيطالي
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.12] mb-5 text-white drop-shadow-md">
                <span className="brand-gradient-text">GridsPro</span> Marble Polishing &amp; Restoration
                <br className="hidden sm:block" />
                <span className="text-xl sm:text-2xl lg:text-[28px] font-bold text-brand-amber font-arabic mt-2 block leading-relaxed">
                  خدمات جلي وتلميع الرخام الطبيعي 5 نجوم في دبي
                </span>
              </h1>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl mb-4 font-normal drop-shadow">
                Premium diamond polishing, deep crystallization, stain removal &amp; nano-sealing across all Dubai communities. Rates from <strong className="text-brand-amber font-bold">AED 35/sqm</strong> with a 100% free on-site inspection.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm font-arabic leading-relaxed max-w-xl mb-8">
                أحدث تقنيات الألماس الإيطالي بدون غبار مع ضمان اللمعان الكريستالي الفاخر للفيلات والفنادق والقصور.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/services"
                  className="brand-gradient text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:scale-105 transition-all flex items-center gap-2"
                >
                  Explore Services · استكشف خدماتنا <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+971508164087"
                  className="bg-white/10 backdrop-blur-md border border-white/25 text-white hover:border-brand-amber px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow"
                >
                  <Phone className="w-4 h-4 text-brand-amber" /> +971 50 816 4087
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-gray-200">
                {[
                  { en: "Free On-Site Inspection", ar: "معاينة مجانية" },
                  { en: "100% Dustless System", ar: "نظام بدون غبار" },
                  { en: "16+ Years Experience", ar: "خبرة 16+ عاماً" },
                ].map((t) => (
                  <div key={t.en} className="flex items-center gap-2 bg-[#121324]/90 px-3.5 py-2 rounded-xl border border-brand-violet/25 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-azure shrink-0" />
                    <span>{t.en}</span>
                    <span className="text-[10px] text-brand-amber font-arabic">({t.ar})</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <BookingForm isDark={true} />
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BADGES BAR ── */}
      <TrustBadges />

      {/* ── STATS COUNTER ── */}
      <StatsCounter />

      {/* ── INTERACTIVE BEFORE / AFTER SLIDER SHOWCASE ── */}
      <section className="py-24 bg-[#f8f7f4] overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel arabic="معاينة حية للنتائج">Live Visual Proof</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-4">
              Witness the Italian Diamond Mirror Finish
            </h2>
            <p className="text-gray-600 text-base mb-2">
              Drag the interactive slider below to inspect the actual difference between dull, traffic-worn stone and our 5-stage crystallization polish.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm font-arabic">
              حرك المؤشر لمشاهدة الفرق المذهل بين الرخام الباهت قبل الجلي واللمعان الكريستالي الفائق بعد المعالجة.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <BeforeAfterSlider
              beforeImage={imgs.svcStain}
              afterImage={imgs.heroBg}
              beforeLabel="Before: Dull, Scratched & Stained · قبل المعالجة"
              afterLabel="After: High-Definition Mirror Shine · بعد التلميع"
              title=""
              subtitle=""
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT BRIEF ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image src={imgs.aboutWork} alt="Marble polishing technician" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-bold text-lg">Italian Wet Diamond Honing</div>
                  <div className="text-brand-amber text-xs font-semibold">100% Dustless · جلي بالألماس بدون غبار</div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 sm:right-6 brand-gradient text-white p-6 rounded-2xl shadow-2xl font-black text-center border border-white/30">
                <div className="text-4xl leading-none">16+</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-1">Years in Dubai</div>
                <div className="text-[10px] font-arabic font-normal mt-0.5">خبرة معتمدة</div>
              </div>
              {/* Secondary image */}
              <div className="absolute top-6 -right-6 sm:-right-10 w-36 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <Image src={imgs.aboutLobby} alt="Hotel lobby marble" fill className="object-cover" sizes="144px" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <SectionLabel arabic="نبذة عنا">About GridsPro International</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-black text-dark mb-4 leading-tight">
                Restoring Timeless Elegance to Natural Stone
              </h2>
              <div className="text-brand-azure font-bold font-arabic text-sm mb-4">
                جريدزبرو إنترناشونال — خبراء استعادة وتلميع الأحجار الطبيعية في الإمارات
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                GridsPro International combines traditional Italian stone craftsmanship with modern wet diamond technology to restore natural stone to a flawless mirror finish — without disruptive dust or harsh chemicals.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                From luxury private villas in Palm Jumeirah and Emirates Hills to 5-star hotel lobbies in Downtown Dubai, our certified team delivers consistent, guaranteed results on every project.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Users className="w-5 h-5 text-brand-amber" />,  title: "Certified Technicians", ar: "فنيون متخصصون ومعتمدون", desc: "Rigorously trained stone specialists" },
                  { icon: <Wrench className="w-5 h-5 text-brand-azure" />, title: "Italian Diamond Pads",   ar: "أقراص ألماس إيطالية",     desc: "Wet polishing — zero airborne dust" },
                  { icon: <Award className="w-5 h-5 text-brand-violet" />,  title: "5-Star Standards",       ar: "معايير فندقية 5 نجوم",     desc: "Trusted by luxury hotels & penthouses" },
                  { icon: <ShieldCheck className="w-5 h-5 text-brand-coral" />, title: "Workmanship Warranty", ar: "ضمان شامل على النتائج", desc: "Guaranteed mirror-finish results" },
                ].map(({ icon, title, ar, desc }) => (
                  <div key={title} className="p-4 rounded-xl bg-[#f8f7f4] border border-gray-200 flex gap-3 shadow-sm">
                    <div className="mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <div className="font-bold text-dark text-sm">{title}</div>
                      <div className="text-[11px] text-brand-amber font-arabic font-semibold">{ar}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-dark text-dark font-bold text-sm px-6 py-3 rounded-xl hover:bg-dark hover:text-white transition-all shadow-sm group"
              >
                <span>Read Our Full Story</span>
                <span className="font-arabic text-xs font-normal text-gray-500 group-hover:text-gray-300">· اقرأ المزيد</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="py-24 bg-[#f8f7f4] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel arabic="خدماتنا المتخصصة">Core Services</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-dark mb-4">
              Comprehensive Marble &amp; Stone Care
            </h2>
            <p className="text-gray-600 text-base mb-1">
              Specialized treatments for Italian Carrara, Calacatta, Crema Marfil, Travertine &amp; Onyx — starting from AED 35/sqm.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm font-arabic">
              خدمات متكاملة لمعالجة وتلميع كافة أنواع الرخام والجرانيت والحجر الطبيعي بأسعار تبدأ من 35 درهم/م².
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.07}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all h-full flex flex-col"
                >
                  <div className="img-card aspect-[16/10] relative">
                    <Image
                      src={serviceImages[s.slug] ?? imgs.svcFloor}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                    <div className="img-card-overlay" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <div className="text-[12px] font-bold text-white font-arabic drop-shadow bg-dark/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                        {s.arTitle}
                      </div>
                      <div className="text-[11px] font-bold text-brand-amber bg-white/90 px-2 py-0.5 rounded-md">
                        {s.startingPrice}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-dark text-lg mb-1 group-hover:text-brand-violet transition-colors">
                      {s.title}
                    </h3>
                    <div className="text-xs text-brand-amber font-semibold font-arabic mb-3">
                      {s.arTitle}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
                      {s.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold text-gray-700">
                        {s.subtitle.split("&")[0]}
                      </span>
                      <span className="text-brand-azure text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="brand-gradient text-white font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl inline-flex items-center gap-2 hover:scale-105 transition-all">
              <span>View All Services &amp; Pricing</span>
              <span className="font-arabic text-xs font-normal border-l border-white/30 pl-2">كافة الخدمات والأسعار</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE 4-STEP PROCESS TABS ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel arabic="مراحل العمل">Restoration Science</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-4">
              Our 4-Stage Italian Restoration Process
            </h2>
            <p className="text-gray-600 text-base mb-1">
              Click through the technical stages to explore how we restore stone brilliance with zero airborne dust.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm font-arabic">
              تعرف على خطوات الجلي والتلميع الاحترافية بدون إحداث أي فوضى أو غبار في المكان.
            </p>
          </AnimatedSection>

          <ProcessTabs />
        </div>
      </section>

      {/* ── INTERACTIVE COST CALCULATOR SECTION ── */}
      <section className="py-24 bg-[#f8f7f4] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel arabic="حاسبة التكلفة">Transparent Estimator</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-dark mb-3">
              Instant Online Price Calculator
            </h2>
            <p className="text-gray-600 text-base mb-1">
              Get an instant estimation based on your specific stone type and room area.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm font-arabic">
              احسب التكلفة التقديرية بدقة وفقاً لنوع الرخام والمساحة بالمتر المربع.
            </p>
          </AnimatedSection>

          <PriceEstimator isDark={false} />
        </div>
      </section>

      {/* ── WHY CHOOSE US (HIGH-CONTRAST LUXURY DARK SECTION) ── */}
      <section className="py-24 sm:py-28 relative overflow-hidden bg-[#0b0c16] border-y border-brand-violet/20 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs.aboutLobby}
            alt="Luxury hotel marble lobby"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c16] via-[#0b0c16]/95 to-[#0b0c16]/90" />
          <div className="absolute inset-0 hero-glow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left" className="lg:col-span-5">
              <SectionLabel arabic="لماذا نحن">Why Choose Us</SectionLabel>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight drop-shadow-md">
                Dubai's Most Trusted Marble Restoration Company
              </h2>

              <p className="text-brand-amber font-arabic text-sm font-semibold mb-3">
                الشركة الرائدة والأكثر ثقة لخدمات جلي وصيانة الرخام في دبي والإمارات
              </p>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Over 16 years of delivering mirror-finish results for Dubai's most prestigious residential communities, 5-star hotel groups, and commercial corporate towers.
              </p>

              <Link
                href="/booking"
                className="brand-gradient text-white font-extrabold text-sm px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(124,58,237,0.5)] inline-flex items-center gap-2 hover:scale-105 transition-all"
              >
                <span>Book Free Inspection</span>
                <span className="font-arabic font-normal border-l border-white/30 pl-2">احجز معاينة مجانية</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <Award className="w-6 h-6 text-white" />,
                  title: "16+ Years Experience",
                  ar: "خبرة تفوق 16 عاماً",
                  desc: "Deep expertise across Italian Carrara, Crema Marfil, Travertine and Onyx."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-white" />,
                  title: "Free On-Site Quote",
                  ar: "معاينة مجانية في الموقع",
                  desc: "100% free inspection with exact stone condition analysis and fixed written quote."
                },
                {
                  icon: <Clock className="w-6 h-6 text-white" />,
                  title: "Dustless Wet System",
                  ar: "تقنية مائية بدون غبار",
                  desc: "Safe for occupied homes and luxury villas — zero airborne dust or messy residue."
                },
                {
                  icon: <Star className="w-6 h-6 text-white" />,
                  title: "100% Satisfaction",
                  ar: "ضمان رضا العملاء 100%",
                  desc: "Guaranteed high-definition mirror gloss finish backed by our full warranty."
                },
              ].map(({ icon, title, ar, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.08}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#121324] border border-brand-violet/30 shadow-2xl hover:border-brand-amber transition-all group h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center font-bold mb-4 shadow-md group-hover:scale-110 transition-transform shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-white text-base sm:text-lg mb-0.5 group-hover:text-brand-amber transition-colors">
                      {title}
                    </h3>
                    <div className="text-[11px] text-brand-azure font-arabic mb-2">
                      {ar}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal flex-grow">
                      {desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DUBAI COMMUNITIES SERVED ── */}
      <DubaiCommunities />

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel arabic="آراء العملاء">Client Reviews</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-dark mb-2">
              Rated 4.9/5 by 1,500+ Dubai Clients
            </h2>
            <p className="text-gray-500 font-arabic text-sm">
              ثقة أكثر من 1,500 عميل في دبي والإمارات للقصور والفيلات والفنادق الفاخرة
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed Al Rashid",  role: "Villa Owner, Dubai Marina",   arRole: "مالك فيلا، دبي مارينا", text: "The team transformed our marble floors. Mirror-like reflection and absolutely zero dust. Highly professional — I expected a mess but the site was spotless when they left.", initials: "AR" },
              { name: "Sarah Johnson",    role: "Hotel Operations, Downtown",   arRole: "إدارة الفنادق، داون تاون", text: "Contracted for our entire hotel lobby and guest suites. Fast, discreet, and flawless. Guests compliment the floors every day. Will be signing an annual maintenance contract.", initials: "SJ" },
              { name: "Mohammed Al Farsi",role: "Homeowner, Palm Jumeirah",    arRole: "مالك منزل، نخلة جميرا", text: "Removed severe oil stains from our kitchen island that two other companies said were permanent. True masters of stone chemistry and restoration.", initials: "MF" },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="h-full bg-[#f8f7f4] p-8 rounded-3xl border border-gray-200 flex flex-col shadow-sm">
                  <div className="flex gap-1 text-brand-amber mb-4">
                    {[...Array(5)].map((_,j) => (
                      <Star key={j} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-normal">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center font-bold text-white text-sm shrink-0 shadow">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-dark text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500 font-medium">{t.role} <span className="font-arabic text-gray-400">({t.arRole})</span></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/reviews" className="inline-flex items-center gap-1.5 text-brand-violet font-bold text-sm hover:underline">
              <span>Read All Reviews · قراءة كافة التقييمات</span> <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
