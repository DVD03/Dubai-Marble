"use client";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import PageHeader from "@/components/PageHeader";
import { imgs } from "@/data/images";

const articles = [
  {
    src: imgs.blog1,
    title: "How Dubai's Desert Dust & Humidity Affect Natural Marble Floors",
    excerpt: "Microscopic silica sand particles act as abrasive agents on polished calcite marble. Learn how the UAE's climate degrades marble faster than most other regions and what preventive treatments slow that process.",
    date: "June 2026", author: "Senior Stone Technician",
  },
  {
    src: imgs.blog2,
    title: "Why Vinegar & Supermarket Cleaners Permanently Damage Marble",
    excerpt: "pH-acidic household cleaners cause instant chemical etching on calcite stone surfaces. Discover which safe, pH-neutral products you should use for daily marble maintenance.",
    date: "May 2026", author: "Restoration Chemist",
  },
  {
    src: imgs.blog3,
    title: "Diamond Grinding vs. Crystallization: Which Treatment Does Your Floor Need?",
    excerpt: "A clear breakdown of when heavy mechanical diamond lippage removal is necessary versus a lighter chemical crystallization polish — and the benefits of each approach for Dubai properties.",
    date: "April 2026", author: "Technical Supervisor",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Knowledge Hub"
        title="Marble Care Guides"
        subtitle="Expert maintenance tips and professional insights for Dubai property owners."
        image={imgs.blogHero}
      />

      <section className="py-24 bg-[#F4F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Latest Articles</SectionLabel>
            <h2 className="text-3xl font-black text-[#1F2937]">Professional Stone Care Insights</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#123B6D]/40 transition-all hover:-translate-y-1.5 flex flex-col h-full">
                  <div className="img-card aspect-[16/10] relative">
                    <Image src={a.src} alt={`${a.title} - Dubai Marble Polishing Insights`} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                    <div className="img-card-overlay" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-[11px] text-[#98A2B3] mb-3">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#123B6D]" /> {a.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#123B6D]" /> {a.author}</span>
                    </div>
                    <h2 className="font-bold text-[#1F2937] text-base mb-3 leading-snug group-hover:text-[#123B6D] transition-colors">
                      {a.title}
                    </h2>
                    <p className="text-xs text-[#6B7280] leading-relaxed mb-5 flex-grow">{a.excerpt}</p>
                    <button
                      onClick={() => alert("Full article coming soon in our newsletter!")}
                      className="text-xs font-bold text-[#123B6D] hover:text-[#0000CC] flex items-center gap-1.5 hover:gap-3 transition-all mt-auto"
                    >
                      Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
