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
        title="About Dubai Marble Polishing"
        subtitle="Providing 5-star natural stone restoration & crystallization across Dubai since 2008."
        image={imgs.aboutHero}
      />

      {/* STORY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={imgs.aboutWork} alt="Marble technician at work" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-bold text-base">Italian Diamond Wet-Polishing System</div>
                <div className="text-gold text-xs mt-0.5">100% Dustless · Child &amp; Pet Safe</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
              <Image src={imgs.aboutLobby} alt="Luxury hotel marble lobby" fill className="object-cover" sizes="160px" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-dark mb-5 leading-tight">
              Restoring Timeless Beauty to Natural Stone in Dubai
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Natural marble is a premium investment that elevates any Dubai property's elegance and value. However, Dubai's desert dust, high foot traffic, and acidic cleaning products quickly degrade its surface — turning a once-stunning floor into a dull, scratched liability.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Dubai Marble Polishing, we combine European diamond restoration techniques with industrial crystallization compounds to revive any stone surface — restoring its original mirror gloss, color depth, and structural integrity.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Over 1,500 completed residential &amp; commercial projects across Dubai",
                "Certified Italian diamond honing &amp; wet polishing equipment",
                "Eco-friendly crystallizers — food-safe &amp; child-safe formulations",
                "16+ years serving 5-star hotels, luxury villas &amp; commercial towers",
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: pt }} />
                </div>
              ))}
            </div>

            <Link href="/booking" className="gold-gradient text-dark font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform">
              Book Free Inspection <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <StatsCounter />

      {/* VALUES */}
      <section className="py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="text-3xl font-black text-dark">What Sets Us Apart</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { icon: <Award className="w-7 h-7" />,      title: "5-Star Quality",        desc: "We deliver the same standard expected in Dubai's most prestigious hotels — every single time." },
              { icon: <ShieldCheck className="w-7 h-7" />, title: "Certified Materials",   desc: "Italian crystallizers and nano-sealants approved for use in occupied residential spaces." },
              { icon: <CheckCircle2 className="w-7 h-7" />,title: "Transparent Pricing",  desc: "Free on-site inspection followed by a fixed, written quotation — no hidden fees, ever." },
              { icon: <ShieldCheck className="w-7 h-7" />, title: "Satisfaction Backed",   desc: "We are not satisfied until you are. Every project carries our full workmanship guarantee." },
            ].map(({ icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4">{icon}</div>
                  <h3 className="font-bold text-dark text-base mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
