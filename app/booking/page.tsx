"use client";
import { CheckCircle2, Clock, MapPin } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import PriceEstimator from "@/components/PriceEstimator";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import { imgs } from "@/data/images";

export default function BookingPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Book Inspection"
        title="Schedule a Free Inspection"
        subtitle="Our senior technician visits your Dubai property, inspects the stone, and provides a fixed-price quote."
        image={imgs.bookingHero}
      />

      <section className="py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top 3 Trust Badges */}
          <div className="max-w-2xl mx-auto grid grid-cols-3 gap-4 mb-16">
            {[
              { icon: <CheckCircle2 className="w-6 h-6 text-gold mx-auto mb-1.5" />, label: "100% Free", sub: "No obligation" },
              { icon: <Clock className="w-6 h-6 text-gold mx-auto mb-1.5" />,        label: "30-Min Reply", sub: "Rapid confirmation" },
              { icon: <MapPin className="w-6 h-6 text-gold mx-auto mb-1.5" />,       label: "All Dubai",  sub: "Mobile dispatch" },
            ].map(({ icon, label, sub }) => (
              <AnimatedSection key={label}>
                <div className="bg-white text-center p-5 rounded-2xl border border-gray-200 shadow-sm">
                  {icon}
                  <div className="font-bold text-dark text-sm">{label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Grid with Booking Form and Instant Price Estimator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <AnimatedSection className="lg:col-span-6">
              <BookingForm isDark={false} />
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-6">
              <PriceEstimator isDark={true} />
            </AnimatedSection>
          </div>

        </div>
      </section>
    </>
  );
}
