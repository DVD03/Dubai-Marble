import React from "react";

export default function SectionLabel({
  children,
  arabic,
  className = "",
  isDark = false,
  variant = "badge",
}: {
  children: React.ReactNode;
  arabic?: string;
  className?: string;
  isDark?: boolean;
  variant?: "badge" | "minimal";
}) {
  if (variant === "minimal") {
    return (
      <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
        <span className="w-2.5 h-2.5 bg-[#ea580c] inline-block shrink-0 rounded-[1px]" />
        <span
          className={`font-black uppercase tracking-wider text-xs sm:text-sm ${
            isDark ? "text-white" : "text-[#1e3a5f]"
          }`}
        >
          {children}
        </span>
        {arabic && (
          <span
            className={`font-arabic text-xs font-semibold normal-case ${
              isDark ? "text-amber-400" : "text-[#ea580c]"
            }`}
          >
            · {arabic}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md border text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider mb-4 shadow-sm transition-all ${
        isDark
          ? "bg-[#2c2a27]/90 border-slate-700 text-[#d9d2ca]"
          : "bg-[#ede9e3] border-[#d6cfc5] text-[#1e3a5f]"
      } ${className}`}
    >
      <span className="w-2.5 h-2.5 bg-[#ea580c] inline-block shrink-0 rounded-[1px]" />
      <span className="tracking-wider">{children}</span>
      {arabic && (
        <span className="font-arabic text-[11.5px] font-semibold normal-case border-l border-[#d6cfc5] pl-2 text-[#8a6c3e]">
          {arabic}
        </span>
      )}
    </div>
  );
}

