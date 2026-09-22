import React from "react";

export default function SectionLabel({
  children,
  arabic,
  className = "",
  isDark = false,
  variant = "badge",
  accent = "blue",
}: {
  children: React.ReactNode;
  arabic?: string;
  className?: string;
  isDark?: boolean;
  variant?: "badge" | "minimal";
  accent?: "blue" | "gold";
}) {
  const isGold = accent === "gold";

  if (variant === "minimal") {
    return (
      <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
        <span className={`w-2.5 h-2.5 inline-block shrink-0 rounded-[1px] ${isGold ? "bg-[#C89B3C]" : "bg-[#1557B0]"}`} />
        <span
          className={`font-black uppercase tracking-wider text-xs sm:text-sm ${
            isGold
              ? "text-[#C89B3C]"
              : isDark
              ? "text-white"
              : "text-[#1557B0]"
          }`}
        >
          {children}
        </span>
        {arabic && (
          <span
            className={`font-arabic text-xs font-semibold normal-case ${
              isGold
                ? "text-[#C89B3C]"
                : isDark
                ? "text-[#98A2B3]"
                : "text-[#1557B0]"
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
        isGold
          ? "bg-[#C89B3C]/10 border-[#C89B3C]/30 text-[#C89B3C]"
          : isDark
          ? "bg-white/10 border-white/20 text-white"
          : "bg-[#EEF5FF] border-[#D9E2EC] text-[#1557B0]"
      } ${className}`}
    >
      <span className={`w-2.5 h-2.5 inline-block shrink-0 rounded-[1px] ${isGold ? "bg-[#C89B3C]" : "bg-[#1557B0]"}`} />
      <span className="tracking-wider">{children}</span>
      {arabic && (
        <span className={`font-arabic text-[11.5px] font-semibold normal-case border-l pl-2 ${
          isGold ? "border-[#C89B3C]/40 text-[#C89B3C]" : isDark ? "border-white/20 text-[#D0D5DD]" : "border-[#D9E2EC] text-[#1557B0]"
        }`}>
          {arabic}
        </span>
      )}
    </div>
  );
}

