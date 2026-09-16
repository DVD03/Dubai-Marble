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

      <section className="py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
            {testimonialsData.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.07}>
                <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full">
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold" />)}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center font-bold text-dark text-sm">{t.initials}</div>
                    <div>
                      <div className="font-bold text-dark text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* REVIEW FORM */}
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
            <AnimatedSection>
              <h2 className="text-2xl font-black text-dark text-center mb-2">Leave Your Review</h2>
              <p className="text-xs text-gray-500 text-center mb-6">Help us maintain our 5-star service standards.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for your feedback!"); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="Your Name *"
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-gray-50 outline-none focus:border-gold transition-colors" />
                  <input type="text" placeholder="Dubai Location"
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-gray-50 outline-none focus:border-gold transition-colors" />
                </div>
                <select className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-gray-50 outline-none focus:border-gold transition-colors">
                  <option>5 Stars — Exceptional</option>
                  <option>4 Stars — Great</option>
                  <option>3 Stars — Average</option>
                </select>
                <textarea rows={3} required placeholder="Share your experience..."
                  className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-gray-50 outline-none focus:border-gold transition-colors resize-none" />
                <button type="submit"
                  className="w-full gold-gradient text-dark font-bold py-3.5 rounded-xl shadow flex items-center justify-center gap-2 text-sm hover:-translate-y-0.5 transition-transform">
                  <MessageSquarePlus className="w-4 h-4" /> Submit Review
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
