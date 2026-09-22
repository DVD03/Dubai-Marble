"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqItem({
  question, answer, defaultOpen = false
}: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`bg-white rounded-2xl border overflow-hidden transition-colors ${open ? "border-[#1557B0]/40 shadow-md" : "border-[#D9E2EC] shadow-sm"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#10233F] text-sm sm:text-base focus:outline-none"
      >
        <span>{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${open ? "bg-[#1557B0] text-white rotate-180" : "bg-[#EEF5FF] text-[#1557B0]"}`}>
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
            <div className="px-6 pb-5 text-sm text-[#667085] leading-relaxed border-t border-[#D9E2EC] pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
