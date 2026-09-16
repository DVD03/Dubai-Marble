"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqItem({
  question, answer, defaultOpen = false
}: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`bg-[#fafaf8] rounded-2xl border overflow-hidden transition-colors ${open ? "border-[#c9a96e]/40 shadow-md" : "border-[#e4e0da] shadow-sm"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#2c2a27] text-sm sm:text-base focus:outline-none"
      >
        <span>{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[#8a6c3e] transition-all shrink-0 ${open ? "bg-[#8a6c3e] text-white rotate-180" : "bg-[#ede9e3]"}`}>
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
            <div className="px-6 pb-5 text-sm text-[#6b6560] leading-relaxed border-t border-[#e4e0da] pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
