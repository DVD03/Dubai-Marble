"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { imgs } from "@/data/images";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, Phone, MessageCircle, CalendarCheck, ChevronRight } from "lucide-react";

const serviceImages: Record<string, string> = {
  "marble-floor-polishing": imgs.svcFloor,
  "deep-cleaning":          imgs.svcCleaning,
  "grinding-buffing":       imgs.svcGrinding,
  "countertop-polishing":   imgs.svcCounter,
  "stain-removal":          imgs.svcStain,
  "crack-repair":           imgs.svcCrack,
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader
        breadcrumb={`Services / ${service.title}`}
        title={service.title}
        arTitle={service.arTitle}
        subtitle={`${service.subtitle} · 100% Free On-Site Inspection`}
        image={serviceImages[service.slug] ?? imgs.svcFloor}
      />

      <section className="py-20 bg-[#F4F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* MAIN */}
          <div className="lg:col-span-8">
            <AnimatedSection>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image src={serviceImages[service.slug] ?? imgs.svcFloor} alt={`${service.title} in Dubai - Professional Natural Stone Restoration`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#1F2937] mb-4">{service.title} — Dubai</h2>
              <p className="text-[#6B7280] leading-relaxed mb-8">{service.description}</p>

              <h3 className="text-xl font-black text-[#1F2937] mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-[#1F2937]">
                    <CheckCircle2 className="w-4 h-4 text-[#123B6D] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-black text-[#1F2937] mb-6">Our 4-Step Professional Process</h3>
              <div className="relative">
                <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-[#E5E7EB] hidden sm:block" />
                <div className="flex flex-col gap-6">
                  {service.process.map((step, idx) => (
                    <div key={step.step} className="flex gap-5">
                      <div className="w-10 h-10 rounded-full bg-[#123B6D] flex items-center justify-center font-black text-white text-sm shrink-0 shadow z-10">
                        {idx + 1}
                      </div>
                      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex-grow shadow-sm">
                        <div className="font-bold text-[#1F2937] text-sm mb-1">{step.title}</div>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-white border border-[#E5E7EB] border-l-4 border-l-[#123B6D] shadow-sm">
                <h4 className="font-bold text-[#1F2937] text-base mb-1">Book a Free On-Site Inspection · حجز معاينة مجانية</h4>
                <p className="text-sm text-[#6B7280] mb-4">
                  Our Dubai technician will visit your property, inspect the marble, and provide a customized restoration plan.
                </p>
                <Link href="/booking" className="bg-[#123B6D] hover:bg-[#0000CC] text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm inline-flex items-center gap-2 transition-colors">
                  <CalendarCheck className="w-4 h-4" /> Book Free Inspection | احجز المعاينة
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col gap-7">
            <AnimatedSection direction="right">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
                <h3 className="font-black text-[#1F2937] text-base mb-4 pb-3 border-b border-[#E5E7EB] flex justify-between items-center">
                  <span>All Services</span>
                  <span className="text-xs text-[#123B6D] font-arabic font-normal">جميع الخدمات</span>
                </h3>
                <div className="flex flex-col gap-2">
                  {servicesData.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        s.slug === service.slug
                          ? "bg-[#2F80ED] text-white font-bold shadow-sm"
                          : "bg-[#F4F7FF] text-[#6B7280] hover:bg-[#F4F7FF] hover:text-[#123B6D]"
                      }`}>
                      <span>{s.title}</span> <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden shadow-sm">
                <Image src={imgs.aboutLobby} alt="5-Star marble polishing and stone restoration specialists in Dubai" width={400} height={250} className="object-cover w-full h-48" />
                <div className="absolute inset-0 bg-[#111827]/90 flex flex-col justify-end p-6">
                  <h3 className="font-black text-white text-base mb-1">Need Immediate Advice?</h3>
                  <p className="text-xs text-[#D0D5DD] mb-4">Speak directly with our senior stone technician.</p>
                  <a href="tel:+971561887300"
                    className="bg-[#123B6D] hover:bg-[#0000CC] text-white font-bold text-xs py-3 rounded-lg shadow-sm w-full flex items-center justify-center gap-2 mb-2 transition-colors">
                    <Phone className="w-3.5 h-3.5" /> +971 56 188 7300
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=971561887300" target="_blank" rel="noopener noreferrer"
                    className="border border-white/20 text-white text-xs py-3 rounded-xl w-full flex items-center justify-center gap-2 hover:border-[#25D366] transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp | واتساب
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
