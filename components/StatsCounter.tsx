"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-16 bg-[#fafaf8] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {[
            { target: 1500, suffix: "+", label: "Satisfied Clients", ar: "عميل متميز" },
            { target: 16,   suffix: "+", label: "Years Experience",  ar: "عاماً من الخبرة" },
            { target: 98,   suffix: "%", label: "Satisfaction Rate", ar: "نسبة الرضا" },
            { target: 50,   suffix: "+", label: "5-Star Hotels",     ar: "فندق 5 نجوم" },
          ].map(({ target, suffix, label, ar }, i) => (
            <AnimatedSection key={label} delay={i * 0.1} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-[#2c2a27] leading-none mb-2 tabular-nums">
                <Counter target={target} suffix={suffix} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#3d3a35] uppercase tracking-wider">
                {label}
              </div>
              <div className="text-[11px] text-[#8a8278] font-arabic mt-0.5">
                {ar}
              </div>
              <div className="w-10 h-[3px] bg-amber-500 mx-auto mt-3 rounded-full" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
