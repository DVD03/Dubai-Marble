import React from "react";

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-gold text-[11px] font-bold uppercase tracking-[.14em] mb-3">
      <span className="w-2 h-2 rounded-sm bg-gold inline-block" />
      {children}
    </div>
  );
}
