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
  accent?: "blue" | "orange";
}) {
  const isOrange = accent === "orange";

  if (variant === "minimal") {
    return (
      <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
        <span className={`w-2.5 h-2.5 inline-block shrink-0 rounded-[1px] ${isOrange ? "bg-[#FF8C00]" : "bg-[#123B6D]"}`} />
        <span
          className={`font-black uppercase tracking-wider text-xs sm:text-sm ${
            isOrange
              ? "text-[#FF8C00]"
              : isDark
              ? "text-white"
              : "text-[#123B6D]"
          }`}
        >
          {children}
        </span>
        {arabic && (
          <span
            className={`font-arabic text-xs font-semibold normal-case ${
              isOrange
                ? "text-[#FF8C00]"
                : isDark
                ? "text-[#98A2B3]"
                : "text-[#123B6D]"
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
        isOrange
          ? "bg-[#FF8C00]/10 border-[#FF8C00]/30 text-[#FF8C00]"
          : isDark
          ? "bg-white/10 border-white/20 text-white"
          : "bg-[#F4F7FF] border-[#E5E7EB] text-[#123B6D]"
      } ${className}`}
    >
      <span className={`w-2.5 h-2.5 inline-block shrink-0 rounded-[1px] ${isOrange ? "bg-[#FF8C00]" : "bg-[#123B6D]"}`} />
      <span className="tracking-wider">{children}</span>
      {arabic && (
        <span className={`font-arabic text-[11.5px] font-semibold normal-case border-l pl-2 ${
          isOrange ? "border-[#FF8C00]/40 text-[#FF8C00]" : isDark ? "border-white/20 text-[#9CA3AF]" : "border-[#E5E7EB] text-[#123B6D]"
        }`}>
          {arabic}
        </span>
      )}
    </div>
  );
}

