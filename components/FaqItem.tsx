"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqItem({
  question, answer, defaultOpen = false
}: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`bg-white rounded-2xl border overflow-hidden transition-colors ${open ? "border-[#123B6D]/40 shadow-md" : "border-[#E5E7EB] shadow-sm"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#1F2937] text-sm sm:text-base focus:outline-none"
      >
        <span>{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${open ? "bg-[#123B6D] text-white rotate-180" : "bg-[#F4F7FF] text-[#123B6D]"}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-[#E5E7EB] pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
