"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import SectionDivider from "@/components/SectionDivider";

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
    <div className="relative py-16 sm:py-24 md:py-28 bg-[#10233F] text-white overflow-hidden shadow-xl">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10233F] via-[#10233F]/85 to-[#10233F]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]" />
            <Link href="/" className="hover:underline text-[#2F80ED]">Home</Link>
            <span>&bull;</span>
            <span className="text-[#D0D5DD]">{breadcrumb}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2 sm:mb-3 drop-shadow-md">
            {title}
          </h1>

          {arTitle && (
            <div className="text-[#C89B3C] text-xs sm:text-sm md:text-base font-semibold tracking-wide mb-2 sm:mb-3">
              {arTitle}
            </div>
          )}

          {subtitle && (
            <p className="text-[#D0D5DD] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow px-2">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <SectionDivider type="peak-down" color="#F7F9FC" position="bottom" height={32} />
    </div>
  );
}
