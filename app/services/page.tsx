"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { imgs } from "@/data/images";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import PageHeader from "@/components/PageHeader";

const serviceImages: Record<string, string> = {
  "marble-floor-polishing": imgs.svcFloor,
  "deep-cleaning":          imgs.svcCleaning,
  "grinding-buffing":       imgs.svcGrinding,
  "countertop-polishing":   imgs.svcCounter,
  "stain-removal":          imgs.svcStain,
  "crack-repair":           imgs.svcCrack,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Services"
        title="Our Marble Restoration Services"
        subtitle="Comprehensive natural stone care — backed by Italian diamond technology and 16 years of Dubai expertise."
        image={imgs.servicesHero}
      />

      <section className="py-24 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel arabic="خدماتنا الشاملة">All Services</SectionLabel>
            <h2 className="text-3xl font-black text-[#2c2a27]">Comprehensive Treatments for Every Stone</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.08}>
                <div className="group bg-[#fafaf8] rounded-2xl overflow-hidden border border-[#e4e0da] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col h-full">
                  <div className="img-card aspect-[16/10] relative">
                    <Image src={serviceImages[s.slug] ?? imgs.svcFloor} alt={s.title} fill className="object-cover" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
                    <div className="img-card-overlay" />
                    <div className="absolute top-3 right-3 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/30">
                      <span className="text-gold text-[11px] font-bold">Free Inspection</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-[12px] font-semibold text-gold mb-1 font-arabic">{s.arTitle}</div>
                    <h2 className="text-xl font-bold text-[#2c2a27] mb-2 group-hover:text-gold transition-colors">{s.title}</h2>
                    <p className="text-[#8a8278] text-sm leading-relaxed mb-6 flex-grow">{s.description}</p>
                    <Link href={`/services/${s.slug}`}
                      className="bg-[#4a6fa5] hover:bg-[#3b5a8a] text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm self-start flex items-center gap-2 transition-colors">
                      <span>View Details</span>
                      <span className="font-arabic font-normal text-[11px]">عرض التفاصيل</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
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
