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
        subtitle={`${service.subtitle} · Starting from ${service.startingPrice}`}
        image={serviceImages[service.slug] ?? imgs.svcFloor}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* MAIN */}
          <div className="lg:col-span-8">
            <AnimatedSection>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image src={serviceImages[service.slug] ?? imgs.svcFloor} alt={service.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-dark mb-4">{service.title} — Dubai</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>

              <h3 className="text-xl font-black text-dark mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-black text-dark mb-6">Our 4-Step Professional Process</h3>
              <div className="relative">
                <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-amber to-brand-violet hidden sm:block" />
                <div className="flex flex-col gap-6">
                  {service.process.map((step, idx) => (
                    <div key={step.step} className="flex gap-5">
                      <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center font-black text-white text-sm shrink-0 shadow z-10">
                        {idx + 1}
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex-grow">
                        <div className="font-bold text-dark text-sm mb-1">{step.title}</div>
                        <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-[#f8f7f4] border-l-4 border-brand-amber">
                <h4 className="font-bold text-dark text-base mb-1">Book a Free On-Site Inspection · حجز معاينة مجانية</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Our Dubai technician will visit your property, measure the area, and provide a fixed-price quotation.
                </p>
                <Link href="/booking" className="brand-gradient text-white font-bold text-xs px-6 py-3 rounded-xl shadow inline-flex items-center gap-2 hover:shadow-brand-amber/30 transition-all">
                  <CalendarCheck className="w-4 h-4" /> Book Free Inspection | احجز المعاينة
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col gap-7">
            <AnimatedSection direction="right">
              <div className="bg-[#f8f7f4] border border-gray-200 rounded-2xl p-6">
                <h3 className="font-black text-dark text-base mb-4 pb-3 border-b border-gray-200 flex justify-between items-center">
                  <span>All Services</span>
                  <span className="text-xs text-brand-amber font-arabic font-normal">جميع الخدمات</span>
                </h3>
                <div className="flex flex-col gap-2">
                  {servicesData.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        s.slug === service.slug
                          ? "brand-gradient text-white shadow"
                          : "bg-white text-gray-600 hover:bg-gray-100 hover:text-brand-amber"
                      }`}>
                      <span>{s.title}</span> <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src={imgs.aboutLobby} alt="Contact our Dubai team" width={400} height={250} className="object-cover w-full h-48" />
                <div className="absolute inset-0 bg-dark/85 flex flex-col justify-end p-6">
                  <h3 className="font-black text-white text-base mb-1">Need Immediate Advice?</h3>
                  <p className="text-xs text-gray-300 mb-4">Speak directly with our senior stone technician.</p>
                  <a href="tel:+971508164087"
                    className="brand-gradient text-white font-bold text-xs py-3 rounded-xl shadow w-full flex items-center justify-center gap-2 mb-2 hover:shadow-brand-amber/30 transition-all">
                    <Phone className="w-3.5 h-3.5" /> +971 50 816 4087
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=971508164087" target="_blank" rel="noopener noreferrer"
                    className="border border-white/20 text-white text-xs py-3 rounded-xl w-full flex items-center justify-center gap-2 hover:border-brand-amber transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-brand-cyan" /> WhatsApp | واتساب
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
