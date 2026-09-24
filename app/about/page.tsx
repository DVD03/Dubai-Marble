"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Award, ShieldCheck } from "lucide-react";
import StatsCounter from "@/components/StatsCounter";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import PageHeader from "@/components/PageHeader";
import { imgs } from "@/data/images";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About Us"
        title="About GridsPro International"
        subtitle="Providing 5-star natural stone restoration & crystallization across Dubai since 2008."
        image={imgs.aboutHero}
      />

      {/* STORY SECTION */}
      <section className="py-24 bg-[#F4F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={imgs.aboutWork} alt="Technician operating marble floor polishing machine in Dubai" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-bold text-base">Italian Diamond Wet-Polishing System</div>
                <div className="text-[#123B6D] text-xs font-semibold font-arabic mt-0.5">نظام الجلي الماسي الإيطالي · 100% بدون غبار</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
              <Image src={imgs.aboutLobby} alt="Restored diamond polished marble floor in Downtown Dubai luxury hotel lobby" fill className="object-cover" sizes="160px" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <SectionLabel arabic="قصتنا ورؤيتنا">Our Story</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1F2937] mb-3 leading-tight">
              Restoring Timeless Beauty to Natural Stone in Dubai
            </h2>
            <div className="text-[#D96B27] font-bold font-arabic text-sm mb-4">
              جريدزبرو إنترناشونال — التميز الإيطالي في جلي وتلميع الرخام
            </div>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Natural marble is a premium investment that elevates any Dubai property's elegance and value. However, Dubai's desert dust, high foot traffic, and acidic cleaning products quickly degrade its surface — turning a once-stunning floor into a dull, scratched liability.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              At GridsPro International, we combine European diamond restoration techniques with industrial crystallization compounds to revive any stone surface — restoring its original mirror gloss, color depth, and structural integrity.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { en: "Over 1,500 completed residential & commercial projects across Dubai", ar: "أكثر من 1,500 مشروع منجز بنجاح" },
                { en: "Certified Italian diamond honing & wet polishing equipment", ar: "معدات وماكينات إيطالية معتمدة" },
                { en: "Eco-friendly crystallizers — food-safe & child-safe formulations", ar: "مواد تبلور وصقل آمنة بيئياً" },
                { en: "16+ years serving 5-star hotels, luxury villas & commercial towers", ar: "خبرة 16+ عاماً في خدمة الفنادق والقصور" },
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[#1F2937]">
                  <CheckCircle2 className="w-4 h-4 text-[#123B6D] shrink-0 mt-0.5" />
                  <div>
                    <span>{pt.en}</span>
                    <span className="text-xs text-[#123B6D] font-arabic ml-2">({pt.ar})</span>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/booking" className="bg-[#123B6D] hover:bg-[#0000CC] text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-sm inline-flex items-center gap-2 transition-colors">
              <span>Book Free Inspection</span>
              <span className="font-arabic font-normal border-l border-white/30 pl-2">احجز معاينة مجانية</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <StatsCounter />

      {/* VALUES */}
      <section className="py-24 bg-[#F4F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel arabic="قيمنا ومبادئنا">Our Values</SectionLabel>
            <h2 className="text-3xl font-black text-[#1F2937]">What Sets Us Apart</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { icon: <Award className="w-7 h-7 text-[#123B6D]" />,      title: "5-Star Quality",        ar: "جودة 5 نجوم",        desc: "We deliver the same standard expected in Dubai's most prestigious hotels — every single time." },
              { icon: <ShieldCheck className="w-7 h-7 text-[#123B6D]" />, title: "Certified Materials",   ar: "مواد معتمدة",         desc: "Italian crystallizers and nano-sealants approved for use in occupied residential spaces." },
              { icon: <CheckCircle2 className="w-7 h-7 text-[#123B6D]" />,title: "Transparent Pricing",  ar: "أسعار واضحة وشفافة",  desc: "Free on-site inspection followed by a fixed, written quotation — no hidden fees, ever." },
              { icon: <ShieldCheck className="w-7 h-7 text-[#123B6D]" />, title: "Satisfaction Backed",   ar: "ضمان رضا العميل",     desc: "We are not satisfied until you are. Every project carries our full workmanship guarantee." },
            ].map(({ icon, title, ar, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white p-7 rounded-2xl border border-[#E5E7EB] shadow-sm hover:border-[#123B6D]/40 transition-colors h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FF] border border-[#E5E7EB] flex items-center justify-center mb-4 shadow-sm">{icon}</div>
                  <h3 className="font-bold text-[#1F2937] text-base mb-0.5">{title}</h3>
                  <div className="text-xs text-[#123B6D] font-arabic font-semibold mb-2">{ar}</div>
                  <p className="text-sm text-[#6B7280] leading-relaxed flex-grow">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
