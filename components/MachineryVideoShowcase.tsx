"use client";
import React, { useState } from "react";
import { Play, Sparkles, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

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
    <section className="py-16 sm:py-20 bg-white border-y border-[#D9E2EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10">
          <SectionLabel variant="minimal" arabic="فيديوهات العمل والآلات">
            MACHINERY IN ACTION
          </SectionLabel>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#10233F] mb-2">
            Watch Our Equipment &amp; Restoration Process
          </h2>
          <div className="text-[#1557B0] font-arabic font-bold text-sm sm:text-base mb-3">
            شاهد مكائن الجلي والتلميع الاحترافية أثناء العمل في دبي
          </div>
          <p className="text-[#667085] text-sm sm:text-base">
            See how our certified Italian machinery, planetary grinders, and diamond polishing pads restore natural stone surfaces with zero dust and factory mirror clarity.
          </p>
        </AnimatedSection>

        {/* Video Grid Layout: Player on Left, Process Selector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Player */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-[#D9E2EC] bg-[#10233F]">
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

            <div className="mt-4 p-5 rounded-2xl bg-[#F7F9FC] border border-[#D9E2EC]">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#EEF5FF] text-[#1557B0]">
                  {activeVideo.badge}
                </span>
                <span className="text-xs font-semibold text-[#667085] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1557B0]" /> 100% Genuine Machinery
                </span>
              </div>
              <h3 className="font-extrabold text-[#10233F] text-lg sm:text-xl">
                {activeVideo.title}
              </h3>
              <div className="text-xs text-[#1557B0] font-arabic font-semibold mb-2">
                {activeVideo.arTitle}
              </div>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {activeVideo.desc}
              </p>
            </div>
          </div>

          {/* Process Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <div className="text-xs font-black uppercase tracking-wider text-[#667085] mb-1 px-1 flex items-center justify-between">
              <span>Select Process to Watch</span>
              <span className="text-[#1557B0] font-bold">8 Videos</span>
            </div>

            <div className="flex flex-col gap-2 max-h-[480px] overflow-y-auto pr-1">
              {videoItems.map((item) => {
                const isSelected = activeVideo.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isSelected
                        ? "bg-[#10233F] border-[#1557B0] text-white shadow-md scale-[1.01]"
                        : "bg-white border-[#D9E2EC] text-[#1F2937] hover:border-[#1557B0]/50 hover:bg-[#F7F9FC]"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? "bg-[#1557B0] text-white" : "bg-[#EEF5FF] text-[#1557B0]"
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current" />
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider ${
                            isSelected ? "text-[#2F80ED]" : "text-[#1557B0]"
                          }`}
                        >
                          {item.badge}
                        </span>
                        {isSelected && <Sparkles className="w-3.5 h-3.5 text-[#2F80ED] shrink-0" />}
                      </div>
                      <div
                        className={`font-bold text-xs sm:text-sm leading-snug truncate ${
                          isSelected ? "text-white" : "text-[#10233F]"
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
