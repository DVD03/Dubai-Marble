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
    <div className="relative py-16 sm:py-24 md:py-28 bg-[#0d0d1a] text-white overflow-hidden border-b border-gold/20 shadow-2xl">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/85 to-[#0d0d1a]/60" />
        <div className="absolute inset-0 shimmer opacity-25" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold gold-pulse" />
            <Link href="/" className="hover:underline text-gold">Home</Link>
            <span>&bull;</span>
            <span className="text-white/80">{breadcrumb}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2 sm:mb-3 drop-shadow-md">
            {title}
          </h1>

          {arTitle && (
            <div className="text-gold text-xs sm:text-sm md:text-base font-semibold tracking-wide mb-2 sm:mb-3">
              {arTitle}
            </div>
          )}

          {subtitle && (
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow px-2">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-1 gold-gradient opacity-40" />
    </div>
  );
}
