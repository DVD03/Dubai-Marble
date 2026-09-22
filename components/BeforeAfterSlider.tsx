"use client";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface Props {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
  arSubtitle?: string;
  badge?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before: Dull, Scratched & Stained - قبل المعالجة",
  afterLabel = "After: High-Definition Mirror Shine - بعد التلميع",
  title,
  subtitle,
  arSubtitle,
  badge,
}: Props) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full">
      {(title || subtitle || badge) && (
        <div className="text-center mb-6 sm:mb-8">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#C89B3C]/40 bg-[#C89B3C]/10 text-[#C89B3C] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
              <span>{badge}</span>
            </div>
          )}
          {title && (
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#10233F] mb-2 leading-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-[#667085] text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4 mb-1">
              {subtitle}
            </p>
          )}
          {arSubtitle && (
            <p className="text-[#1557B0] font-arabic text-xs sm:text-sm font-semibold max-w-2xl mx-auto px-4">
              {arSubtitle}
            </p>
          )}
        </div>
      )}

      {/* Main Interactive Comparison Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden select-none cursor-ew-resize shadow-xl border-2 border-[#D9E2EC] group touch-pan-y"
      >
        {/* AFTER IMAGE (Full width base) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After marble polishing"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          {/* After Label */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#10233F]/90 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs md:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg z-10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2F80ED] shrink-0" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* BEFORE IMAGE (Full width, clipped with clipPath to match sliderPosition) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt="Before marble polishing - dull scratched and stained stone"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />

          {/* Before Label */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#10233F]/90 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs md:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg z-10 pointer-events-auto">
            {beforeLabel}
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#2F80ED] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#2F80ED] shadow-lg flex items-center justify-center text-white font-black cursor-ew-resize border-2 border-white pointer-events-auto hover:scale-105 active:scale-95 transition-transform">
            <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#10233F]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs text-gray-200 border border-white/10 pointer-events-none">
          &larr; Slide To Compare &rarr;
        </div>
      </div>
    </div>
  );
}
