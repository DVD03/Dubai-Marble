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
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before: Dull & Scratched",
  afterLabel = "After: 5-Star Mirror Polish",
  title = "Real-Time Transformation",
  subtitle = "Drag the slider left and right to witness the Italian crystallization difference"
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
      {(title || subtitle) && (
        <div className="text-center mb-6 sm:mb-8">
          {title && (
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-dark mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-gold shrink-0" />
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto px-4">
              {subtitle}
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
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden select-none cursor-ew-resize shadow-2xl border-2 border-gold/30 group touch-pan-y"
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
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-dark/90 backdrop-blur-md border border-gold/40 text-gold text-[10px] sm:text-xs md:text-sm font-bold px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold gold-pulse" />
            {afterLabel}
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}>
            <Image
              src={beforeImage}
              alt="Before marble polishing"
              fill
              className="object-cover filter contrast-75 brightness-75 grayscale-[40%]"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Before Label */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/85 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs md:text-sm font-semibold px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-lg z-10">
            {beforeLabel}
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold shadow-[0_0_15px_rgba(201,168,76,0.9)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full gold-gradient shadow-[0_0_20px_rgba(201,168,76,0.8)] flex items-center justify-center text-dark font-black cursor-ew-resize border-2 border-white pointer-events-auto hover:scale-110 active:scale-95 transition-transform">
            <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs text-gray-200 border border-white/10 pointer-events-none">
          &larr; Slide To Compare &rarr;
        </div>
      </div>
    </div>
  );
}
