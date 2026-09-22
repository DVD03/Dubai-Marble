import React from "react";

interface SectionDividerProps {
  type?: "peak-up" | "peak-down" | "slant-down" | "slant-up";
  color?: string;
  className?: string;
  position?: "top" | "bottom";
  height?: number;
}

export default function SectionDivider({
  type = "peak-up",
  color = "#F7F9FC",
  className = "",
  position = "top",
  height = 44,
}: SectionDividerProps) {
  const isTop = position === "top";

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none pointer-events-none select-none z-20 absolute ${
        isTop ? "top-0 left-0 right-0 -translate-y-[99%]" : "bottom-0 left-0 right-0"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1200 50"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: `${height}px` }}
      >
        {type === "peak-up" && (
          // Inverted V peak pointing up: bottom corners filled, top center peak at (600, 0)
          <polygon fill={color} points="0,50 600,0 1200,50 1200,50 0,50" />
        )}
        {type === "peak-down" && (
          // V peak pointing down: top corners filled, bottom center peak at (600, 50)
          <polygon fill={color} points="0,0 600,50 1200,0 1200,0 0,0" />
        )}
        {type === "slant-down" && (
          <polygon fill={color} points="0,0 1200,50 1200,0 0,0" />
        )}
        {type === "slant-up" && (
          <polygon fill={color} points="0,50 1200,0 1200,50 0,50" />
        )}
      </svg>
    </div>
  );
}
