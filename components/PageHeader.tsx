"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeaderProps {
  breadcrumb: string;
  title: string;
  subtitle?: string;
  arTitle?: string;
  image: string;
}

export default function PageHeader({
  breadcrumb,
  title,
  subtitle,
  arTitle,
  image,
}: PageHeaderProps) {
  return (
    <div className="relative py-24 sm:py-28 bg-[#0d0d1a] text-white overflow-hidden border-b border-gold/20 shadow-2xl">
      {/* Background Image with guaranteed contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        {/* Layered overlays for 100% text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/80 to-[#0d0d1a]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0d0d1a]/50 to-[#0d0d1a]" />
        <div className="absolute inset-0 shimmer opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold gold-pulse" />
            <Link href="/" className="hover:underline text-gold">Home</Link>
            <span>&bull;</span>
            <span className="text-white/80">{breadcrumb}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 drop-shadow-md">
            {title}
          </h1>

          {/* Arabic Title if provided */}
          {arTitle && (
            <div className="text-gold text-sm sm:text-base font-semibold tracking-wide mb-3">
              {arTitle}
            </div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-1 gold-gradient opacity-40" />
    </div>
  );
}
