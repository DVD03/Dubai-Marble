"use client";
import GalleryView from "@/components/GalleryView";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import PageHeader from "@/components/PageHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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

      <section className="py-20 bg-[#fafaf8] border-b border-[#e4e0da]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider
            beforeImage={imgs.svcStain}
            afterImage={imgs.gal2}
            beforeLabel="Before: Heavy Scratches & Dull Surface"
            afterLabel="After: 5-Stage Diamond Mirror Polish"
            title="Interactive Before & After Comparison"
            subtitle="Slide left & right to view the dramatic difference in light reflection and clarity."
          />
        </div>
      </section>

      <section className="py-24 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="text-3xl font-black text-[#2c2a27]">Completed Dubai Projects</h2>
          </AnimatedSection>
          <GalleryView />
        </div>
      </section>
    </>
  );
}
