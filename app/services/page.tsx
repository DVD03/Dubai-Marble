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
        subtitle="Specialized stone care from AED 35/sqm — backed by Italian diamond technology and 16 years of Dubai expertise."
        image={imgs.servicesHero}
      />

      <section className="py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>All Services</SectionLabel>
            <h2 className="text-3xl font-black text-dark">Comprehensive Treatments for Every Stone</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col h-full">
                  <div className="img-card aspect-[16/10] relative">
                    <Image src={serviceImages[s.slug] ?? imgs.svcFloor} alt={s.title} fill className="object-cover" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
                    <div className="img-card-overlay" />
                    <div className="absolute top-3 right-3 bg-dark/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-gold text-[11px] font-bold">From {s.startingPrice}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-[11px] font-semibold text-gold mb-1">{s.arTitle}</div>
                    <h2 className="text-xl font-bold text-dark mb-2 group-hover:text-gold transition-colors">{s.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{s.description}</p>
                    <Link href={`/services/${s.slug}`}
                      className="gold-gradient text-dark font-bold text-xs px-5 py-2.5 rounded-xl shadow self-start flex items-center gap-2 hover:-translate-y-0.5 transition-transform">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
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
