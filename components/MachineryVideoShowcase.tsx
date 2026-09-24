"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { imgs } from "@/data/images";

export interface VideoItem {
  id: string;
  title: string;
  arTitle: string;
  desc: string;
  src: string;
  fallbackSrc: string;
  poster: string;
  badge: string;
}

export const videoItems: VideoItem[] = [
  {
    id: "polishing-machine",
    title: "Italian Klindex Polishing Machine in Operation",
    arTitle: "تشغيل ماكينة تلميع الرخام الإيطالية",
    desc: "Heavy rotary floor polishing machine operating with wet diamond slurry to achieve a high-definition mirror shine.",
    src: "/videos/marble-polishing-machine.mp4",
    fallbackSrc: "/videos/interior-marble.mp4",
    poster: "/images/svc_floor_polishing.jpg",
    badge: "Floor Polishing",
  },
  {
    id: "grinding-process",
    title: "Planetary Marble Grinding & Lippage Removal",
    arTitle: "جلي وتسويه فواصل الرخام بالمكائن الثقيلة",
    desc: "Heavy planetary grinder equipped with metal-bond diamond discs leveling uneven tile edges and deep scratches.",
    src: "/videos/marble-grinding.mp4",
    fallbackSrc: "/videos/interior-marble.mp4",
    poster: "/images/svc_grinding_buffing.jpg",
    badge: "Grinding & Leveling",
  },
  {
    id: "countertop-polishing",
    title: "Precision Handheld Countertop Polishing",
    arTitle: "تلميع كاونترات ومغاسل الرخام يدويًا",
    desc: "Variable-speed wet polisher restoring kitchen islands and bathroom vanity edges with water injection.",
    src: "/videos/countertop-polishing.mp4",
    fallbackSrc: "/videos/interior-marble.mp4",
    poster: "/images/svc_countertop_polishing.jpg",
    badge: "Countertops",
  },
  {
    id: "diamond-honing",
    title: "400 to 3000 Grit Diamond Polishing Sequence",
    arTitle: "مراحل الصقل بأقراص الألماس المتدرجة",
    desc: "Micro-abrasive diamond discs refining the marble surface progressively to eliminate traffic wear patterns.",
    src: "/videos/diamond-honing.mp4",
    fallbackSrc: "/videos/interior-marble.mp4",
    poster: "/images/machine_diamond_pads.jpg",
    badge: "Diamond Pads",
  },
  {
    id: "deep-cleaning",
    title: "Industrial Rotary Scrubbing & Slurry Extraction",
    arTitle: "التنظيف العميق وشفط السوائل بالماكينة",
    desc: "Mechanical rotary scrubbing with biological pH-neutral detergent and high-power wet vacuum extraction.",
    src: "/videos/deep-cleaning.mp4",
    fallbackSrc: "/videos/interior-marble.mp4",
    poster: "/images/svc_deep_cleaning.jpg",
    badge: "Deep Cleaning",
  },
  {
    id: "crack-repair",
    title: "Color-Matched Epoxy Resin Crack Repair",
    arTitle: "معالجة تشققات وفواصل الرخام بالريزن الإيطالي",
    desc: "Italian epoxy resin injection blended to the stone's vein structure, followed by flush diamond sanding.",
    src: "/videos/crack-repair.mp4",
    fallbackSrc: "/videos/interior-marble.mp4",
    poster: "/images/svc_crack_repair.jpg",
    badge: "Joint & Crack Repair",
  },
  {
    id: "stain-sealing",
    title: "Poultice Stain Extraction & Nano-Sealing",
    arTitle: "سحب البقع العنيدة والعزل بالنانو تكنولوجي",
    desc: "Chemical poultice extraction of oil/coffee stains followed by deep penetrating oleophobic protection.",
    src: "/videos/stain-sealing.mp4",
    fallbackSrc: "/videos/interior-marble.mp4",
    poster: "/images/svc_stain_removal.jpg",
    badge: "Stain Removal & Sealer",
  },
  {
    id: "before-after",
    title: "Complete Marble Floor Transformation",
    arTitle: "التحول الشامل قبل وبعد المعالجة والتلميع",
    desc: "Live visual demonstration of unpolished etched marble restored to 5-star hotel mirror reflection.",
    src: "/videos/before-after.mp4",
    fallbackSrc: "/videos/interior-marble.mp4",
    poster: "/images/slider_after.jpg",
    badge: "Before & After",
  },
];

export default function MachineryVideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videoItems[0]);

  return (
    <section className="py-24 sm:py-32 bg-white border-y border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel variant="minimal" arabic="فيديوهات العمل والآلات">
            MACHINERY IN ACTION
          </SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3">
            Watch Our Equipment &amp; Restoration Process
          </h2>
          <div className="text-[#D96B27] font-arabic font-bold text-base sm:text-lg mb-5">
            شاهد مكائن الجلي والتلميع الاحترافية أثناء العمل في دبي
          </div>
          <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
            See how our certified Italian machinery, planetary grinders, and diamond polishing pads restore natural stone surfaces with zero dust and factory mirror clarity.
          </p>
        </AnimatedSection>

        {/* Machinery Image Section */}
        <div className="mb-12">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB]">
            <Image
              src={imgs.machineGrinder}
              alt="Italian Planetary Marble Grinding Machine in Operation"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/80 via-[#111827]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-white font-black text-2xl sm:text-3xl mb-2">Italian Planetary Grinding Machine</div>
              <div className="text-[#60A5FA] text-base font-semibold">Heavy-Duty Equipment · معدات احترافية ثقيلة</div>
            </div>
          </div>
        </div>

        {/* Video Grid Layout: Player on Left, Process Selector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Video Player */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB] bg-[#111827]">
              <video
                key={activeVideo.id}
                controls
                playsInline
                preload="metadata"
                poster={activeVideo.poster}
                className="w-full h-full object-cover"
              >
                <source src={activeVideo.src} type="video/mp4" />
                <source src={activeVideo.fallbackSrc} type="video/mp4" />
                <source src="/bg1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-6 p-6 rounded-3xl bg-[#F7F9FC] border border-[#E5E7EB] shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F7F9FC] text-[#D96B27] border border-[#E5E7EB]">
                  {activeVideo.badge}
                </span>
                <span className="text-xs font-semibold text-[#6B7280] flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#D96B27]" /> 100% Genuine Machinery
                </span>
              </div>
              <h3 className="font-extrabold text-[#111827] text-xl sm:text-2xl">
                {activeVideo.title}
              </h3>
              <div className="text-sm text-[#D96B27] font-arabic font-semibold mb-3">
                {activeVideo.arTitle}
              </div>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {activeVideo.desc}
              </p>
            </div>
          </div>

          {/* Process Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-xs font-black uppercase tracking-wider text-[#6B7280] mb-2 px-1 flex items-center justify-between">
              <span>Select Process to Watch</span>
              <span className="text-[#D96B27] font-bold">8 Videos</span>
            </div>

            <div className="flex flex-col gap-3 max-h-[520px] overflow-y-auto pr-1">
              {videoItems.map((item) => {
                const isSelected = activeVideo.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                      isSelected
                        ? "bg-[#111827] border-[#D96B27] text-white shadow-xl scale-[1.02]"
                        : "bg-white border-[#E5E7EB] text-[#263238] hover:border-[#D96B27]/50 hover:bg-[#F7F9FC] shadow-md"
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 mt-0.5">
                      <Image
                        src={item.poster}
                        alt={item.badge}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-[#D96B27] text-white" : "bg-white/90 text-[#D96B27]"
                        }`}>
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider ${
                            isSelected ? "text-[#D96B27]" : "text-[#D96B27]"
                          }`}
                        >
                          {item.badge}
                        </span>
                        {isSelected && <Sparkles className="w-4 h-4 text-[#D96B27] shrink-0" />}
                      </div>
                      <div
                        className={`font-bold text-xs sm:text-sm leading-snug truncate ${
                          isSelected ? "text-white" : "text-[#111827]"
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
