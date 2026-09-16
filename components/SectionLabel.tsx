import React from "react";

export default function SectionLabel({ children, arabic }: { children: React.ReactNode; arabic?: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-violet/25 text-brand-amber text-[11.5px] font-bold uppercase tracking-wider mb-3 shadow-sm">
      <span className="w-2 h-2 rounded-full brand-gradient inline-block shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
      <span>{children}</span>
      {arabic && (
        <span className="font-arabic text-[12px] text-brand-azure normal-case border-l border-white/15 pl-2">
          {arabic}
        </span>
      )}
    </div>
  );
}
