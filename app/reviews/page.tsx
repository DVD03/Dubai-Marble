"use client";
import { testimonialsData } from "@/data/testimonials";
import { Star, MessageSquarePlus } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import { imgs } from "@/data/images";

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Reviews"
        title="Client Reviews"
        subtitle="Rated 4.9/5 by 1,500+ satisfied homeowners, hotel managers & facility directors across Dubai."
        image={imgs.reviewsHero}
      />

      <section className="py-24 bg-[#F4F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
            {testimonialsData.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.07}>
                <div className="bg-white p-7 rounded-2xl border border-[#E5E7EB] shadow-sm hover:border-[#123B6D]/40 transition-colors flex flex-col h-full">
                  <div className="flex gap-1 text-[#C89B3C] mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#C89B3C] text-[#C89B3C]" />)}
                  </div>
                  <p className="text-[#1F2937] text-sm leading-relaxed mb-6 flex-grow">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                    <div className="w-10 h-10 rounded-full bg-[#123B6D] flex items-center justify-center font-bold text-white text-sm shadow">{t.initials}</div>
                    <div>
                      <div className="font-bold text-[#1F2937] text-sm">{t.name}</div>
                      <div className="text-xs text-[#6B7280]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* REVIEW FORM */}
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-xl">
            <AnimatedSection>
              <h2 className="text-2xl font-black text-[#1F2937] text-center mb-1">Leave Your Review</h2>
              <p className="text-xs text-[#6B7280] text-center mb-6">
                Help us maintain our 5-star service standards · <span className="font-arabic">شاركنا تجربتك وتقييمك</span>
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for your feedback!"); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="Your Name / الاسم *"
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#D0D5DD] bg-white text-[#1F2937] outline-none focus:border-[#2F80ED] transition-colors" />
                  <input type="text" placeholder="Dubai Location / المنطقة"
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#D0D5DD] bg-white text-[#1F2937] outline-none focus:border-[#2F80ED] transition-colors" />
                </div>
                <select className="w-full px-4 py-3 rounded-xl text-sm border border-[#D0D5DD] bg-white text-[#1F2937] outline-none focus:border-[#2F80ED] transition-colors">
                  <option>5 Stars — Exceptional / ممتاز</option>
                  <option>4 Stars — Great / جيد جداً</option>
                  <option>3 Stars — Average / جيد</option>
                </select>
                <textarea rows={3} required placeholder="Share your experience... / اكتب تجربتك هنا"
                  className="w-full px-4 py-3 rounded-xl text-sm border border-[#D0D5DD] bg-white text-[#1F2937] outline-none focus:border-[#2F80ED] transition-colors resize-none" />
                <button type="submit"
                  className="w-full bg-[#123B6D] hover:bg-[#0000CC] text-white font-bold py-3.5 rounded-lg shadow-sm flex items-center justify-center gap-2 text-sm transition-colors">
                  <MessageSquarePlus className="w-4 h-4" /> Submit Review | إرسال التقييم
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
