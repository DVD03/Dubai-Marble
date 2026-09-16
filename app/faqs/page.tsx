"use client";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { faqsData } from "@/data/faqs";
import FaqItem from "@/components/FaqItem";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import PageHeader from "@/components/PageHeader";
import { imgs } from "@/data/images";

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="FAQs"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about marble polishing procedures, free inspections, and stone care in Dubai."
        image={imgs.faqsHero}
      />

      <section className="py-24 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel arabic="الأسئلة الشائعة">Quick Answers</SectionLabel>
            <h2 className="text-3xl font-black text-dark">GridsPro International — FAQs</h2>
          </AnimatedSection>

          <div className="flex flex-col gap-4 mb-16">
            {faqsData.map((f, i) => (
              <AnimatedSection key={f.question} delay={i * 0.07}>
                <FaqItem question={f.question} answer={f.answer} defaultOpen={i === 0} />
              </AnimatedSection>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center shadow-sm">
            <h3 className="font-black text-dark text-lg mb-2">Still Have Questions? · هل لديك استفسار آخر؟</h3>
            <p className="text-sm text-gray-500 mb-6">Our Dubai technical team is available 7 days a week.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact"
                className="brand-gradient text-white font-bold text-xs px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:-translate-y-0.5 transition-transform hover:shadow-gold/30">
                <Mail className="w-4 h-4" /> Contact Us | تواصل معنا
              </Link>
              <a href="tel:+971508164087"
                className="border border-gray-200 text-dark font-semibold text-xs px-6 py-3 rounded-xl hover:border-gold hover:text-gold transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" /> +971 50 816 4087
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
