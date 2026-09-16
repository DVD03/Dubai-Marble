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
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {[
            { target: 1500, suffix: "+", label: "Satisfied Clients" },
            { target: 16,   suffix: "+", label: "Years Experience"  },
            { target: 98,   suffix: "%", label: "Satisfaction Rate" },
            { target: 50,   suffix: "+", label: "5-Star Hotels"     },
          ].map(({ target, suffix, label }, i) => (
            <AnimatedSection key={label} delay={i * 0.1} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-dark leading-none mb-2 tabular-nums">
                <Counter target={target} suffix={suffix} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {label}
              </div>
              <div className="w-8 h-[3px] gold-gradient mx-auto mt-3 rounded-full" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
