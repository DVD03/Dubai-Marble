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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0d0d1a] border-b border-gold/20">
        {/* Background image with high contrast */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs.heroBg}
            alt="Luxury marble floor"
            fill
            className="object-cover object-center opacity-30"
            priority
            sizes="100vw"
          />
          {/* Multi-layered dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/85 to-[#0d0d1a]/70" />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 shimmer opacity-25" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold gold-pulse" />
                Professional Marble Restoration · Dubai
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.12] mb-5 text-white drop-shadow-md">
                <span className="gold-gradient-text">Dubai Marble</span>{" "}
                <br className="hidden sm:block" />
                Polishing &amp; Stone Care
                <br className="hidden sm:block" />
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-gray-200 mt-1 block">
                  5-Star Hotel &amp; Luxury Villa Specialists
                </span>
              </h1>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal drop-shadow">
                Expert diamond polishing, deep cleaning, stain removal &amp; sealing across all Dubai communities.
                Rates from <strong className="text-gold font-bold">AED 35/sqm</strong> with a 100% free on-site inspection.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/services"
                  className="gold-gradient text-dark font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+971522774953"
                  className="bg-white/10 backdrop-blur-md border border-white/25 text-white hover:border-gold px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow"
                >
                  <Phone className="w-4 h-4 text-gold" /> +971 52 277 4953
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-gray-200">
                {["Free On-Site Inspection", "100% Dustless Technology", "16+ Years in Dubai"].map((t) => (
                  <div key={t} className="flex items-center gap-2 bg-[#13132a]/80 px-3.5 py-2 rounded-xl border border-gold/25 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" /> {t}
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
            <SectionLabel>Live Visual Proof</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-4">
              Witness the Italian Diamond Mirror Finish
            </h2>
            <p className="text-gray-600 text-base">
              Drag the interactive slider below to inspect the actual difference between dull, traffic-worn stone and our 5-stage crystallization polish.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <BeforeAfterSlider
              beforeImage={imgs.svcStain}
              afterImage={imgs.heroBg}
              beforeLabel="Before: Dull, Scratched & Stained"
              afterLabel="After: High-Definition Mirror Shine"
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
                  <div className="text-gold text-xs font-semibold">100% Dustless · Certified Technicians</div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 sm:right-6 gold-gradient text-dark p-6 rounded-2xl shadow-2xl font-black text-center border border-white/30">
                <div className="text-4xl leading-none">16+</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-1">Years in Dubai</div>
              </div>
              {/* Secondary image */}
              <div className="absolute top-6 -right-6 sm:-right-10 w-36 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <Image src={imgs.aboutLobby} alt="Hotel lobby marble" fill className="object-cover" sizes="144px" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <SectionLabel>About Our Company</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-black text-dark mb-5 leading-tight">
                Restoring Timeless Elegance to Natural Stone
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Dubai Marble Polishing combines traditional Italian stone craftsmanship with modern wet diamond technology to restore natural stone to a flawless mirror finish — without disruptive dust or harsh chemicals.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                From single-bedroom apartments in JBR to 5-star hotel lobbies in Downtown Dubai, our certified team delivers consistent, guaranteed results on every project.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Users className="w-5 h-5" />,  title: "Certified Technicians",   desc: "Rigorously trained stone specialists" },
                  { icon: <Wrench className="w-5 h-5" />, title: "Italian Diamond Pads",    desc: "Wet polishing — zero airborne dust" },
                  { icon: <Award className="w-5 h-5" />,  title: "5-Star Standards",        desc: "Trusted by luxury hotels & penthouses" },
                  { icon: <ShieldCheck className="w-5 h-5" />, title: "Satisfaction Guarantee", desc: "Guaranteed mirror-finish results" },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="p-4 rounded-xl bg-[#f8f7f4] border border-gray-200 flex gap-3 shadow-sm">
                    <div className="text-gold mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <div className="font-bold text-dark text-sm">{title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-dark text-dark font-bold text-sm px-6 py-3 rounded-xl hover:bg-dark hover:text-white transition-all shadow-sm"
              >
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="py-24 bg-[#f8f7f4] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Core Services</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-dark mb-4">
              Comprehensive Marble &amp; Stone Care
            </h2>
            <p className="text-gray-600 text-base">
              Specialized treatments for Italian Carrara, Calacatta, Crema Marfil, Travertine &amp; Onyx — starting from AED 35/sqm.
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
                    <div className="absolute bottom-3 left-4">
                      <div className="text-[11px] font-bold text-gold uppercase tracking-wider">{s.arTitle}</div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-dark text-lg mb-2 group-hover:text-gold transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
                      {s.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold bg-gold/15 text-dark px-3 py-1.5 rounded-lg">
                        From {s.startingPrice}
                      </span>
                      <span className="text-gold text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="gold-gradient text-dark font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl inline-flex items-center gap-2 hover:scale-105 transition-all">
              View All Services &amp; Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE 4-STEP PROCESS TABS ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>Restoration Science</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-4">
              Our 4-Stage Italian Restoration Process
            </h2>
            <p className="text-gray-600 text-base">
              Click through the technical stages to explore how we restore stone brilliance with zero airborne dust.
            </p>
          </AnimatedSection>

          <ProcessTabs />
        </div>
      </section>

      {/* ── INTERACTIVE COST CALCULATOR SECTION ── */}
      <section className="py-24 bg-[#f8f7f4] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel>Transparent Estimator</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-dark mb-3">
              Instant Online Price Calculator
            </h2>
            <p className="text-gray-600 text-base">
              Get an instant estimation based on your specific stone type and room area.
            </p>
          </AnimatedSection>

          <PriceEstimator isDark={false} />
        </div>
      </section>

      {/* ── WHY CHOOSE US (HIGH-CONTRAST LUXURY DARK SECTION) ── */}
      <section className="py-24 sm:py-28 relative overflow-hidden bg-[#0d0d1a] border-y border-gold/15 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs.aboutLobby}
            alt="Luxury hotel marble lobby"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a] via-[#0d0d1a]/95 to-[#0d0d1a]/90" />
          <div className="absolute inset-0 hero-glow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left" className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-gold gold-pulse" />
                Why Choose Us
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight drop-shadow-md">
                Dubai's Most Trusted Marble Restoration Company
              </h2>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Over 16 years of delivering mirror-finish results for Dubai's most prestigious residential communities, 5-star hotel groups, and commercial corporate towers.
              </p>

              <Link
                href="/booking"
                className="gold-gradient text-dark font-extrabold text-sm px-8 py-4 rounded-xl shadow-2xl inline-flex items-center gap-2 hover:scale-105 transition-all"
              >
                Book Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <Award className="w-6 h-6 text-dark" />,
                  title: "16+ Years Experience",
                  desc: "Deep expertise across all Italian Carrara, Crema Marfil, Travertine and engineered stone."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-dark" />,
                  title: "Free On-Site Quote",
                  desc: "100% free inspection with exact stone condition analysis and transparent written quote."
                },
                {
                  icon: <Clock className="w-6 h-6 text-dark" />,
                  title: "Dustless Wet System",
                  desc: "Safe for occupied homes and luxury villas — zero airborne dust or messy residue."
                },
                {
                  icon: <Star className="w-6 h-6 text-dark" />,
                  title: "100% Satisfaction",
                  desc: "Guaranteed high-definition mirror gloss finish backed by our full warranty."
                },
              ].map(({ icon, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.08}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#13132a] border border-gold/30 shadow-2xl hover:border-gold hover:bg-[#1a1a38] transition-all group h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center font-bold mb-4 shadow-md group-hover:scale-110 transition-transform shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-gold transition-colors">
                      {title}
                    </h3>
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
            <SectionLabel>Client Reviews</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-dark">
              Rated 4.9/5 by 1,500+ Dubai Clients
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed Al Rashid",  role: "Villa Owner, Dubai Marina",   text: "The team transformed our marble floors. Mirror-like reflection and absolutely zero dust. Highly professional — I expected a mess but the site was spotless when they left.", initials: "AR" },
              { name: "Sarah Johnson",    role: "Hotel Operations, Downtown",   text: "Contracted for our entire hotel lobby and guest suites. Fast, discreet, and flawless. Guests compliment the floors every day. Will be signing an annual maintenance contract.", initials: "SJ" },
              { name: "Mohammed Al Farsi",role: "Homeowner, Palm Jumeirah",    text: "Removed severe oil stains from our kitchen island that two other companies said were permanent. True masters of stone chemistry and restoration.", initials: "MF" },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="h-full bg-[#f8f7f4] p-8 rounded-3xl border border-gray-200 flex flex-col shadow-sm">
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(5)].map((_,j) => (
                      <Star key={j} className="w-4 h-4 fill-[#c9a84c] text-[#c9a84c]" />
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-normal">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center font-bold text-dark text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-dark text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500 font-medium">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/reviews" className="inline-flex items-center gap-1.5 text-gold font-bold text-sm hover:underline">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
