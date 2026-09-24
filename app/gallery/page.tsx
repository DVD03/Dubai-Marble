"use client";
import GalleryView from "@/components/GalleryView";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import PageHeader from "@/components/PageHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MachineryVideoShowcase from "@/components/MachineryVideoShowcase";
import { imgs } from "@/data/images";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Portfolio"
        title="Before & After Gallery"
        subtitle="Real transformations across Dubai villas, hotels, and commercial properties."
        image={imgs.galleryHero}
      />

      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider
            beforeImage={imgs.sliderBefore}
            afterImage={imgs.sliderAfter}
            beforeLabel="Before: Heavy Scratches, Dull Traffic Patterns & Etching"
            afterLabel="After: 5-Stage Diamond Mirror Polish & Crystallization"
            title="Interactive Before & After Comparison"
            subtitle="Slide left & right to view the dramatic difference in light reflection and clarity."
          />
        </div>
      </section>

      <section className="py-24 bg-[#F4F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="text-3xl font-black text-[#1F2937]">Completed Dubai Projects</h2>
          </AnimatedSection>
          <GalleryView />
        </div>
      </section>

      {/* Machinery In Action Video Section */}
      <MachineryVideoShowcase />
    </>
  );
}
