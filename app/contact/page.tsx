"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import PageHeader from "@/components/PageHeader";
import { imgs } from "@/data/images";

export default function ContactPage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        title="Get in Touch"
        subtitle="Available 7 days a week across all Dubai zones — phone, email, or WhatsApp."
        image={imgs.contactHero}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* INFO */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <SectionLabel>Direct Contact</SectionLabel>
            <h2 className="text-3xl font-black text-dark mb-5">We Are Here to Help</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Reach out via phone, email, or WhatsApp. Our Dubai customer service team responds within 30 minutes.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {[
                { icon: <Phone className="w-5 h-5" />,   label: "Phone / WhatsApp",      value: "+971 52 277 4953",           href: "tel:+971522774953" },
                { icon: <Mail className="w-5 h-5" />,    label: "Email Address",          value: "info@dubaimarblepolishing.ae", href: "mailto:info@dubaimarblepolishing.ae" },
                { icon: <Clock className="w-5 h-5" />,   label: "Working Hours",          value: "Mon – Sun: 9:00 AM – 6:00 PM", href: null },
                { icon: <MapPin className="w-5 h-5" />,  label: "Service Coverage",       value: "All Dubai Communities",      href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">{icon}</div>
                  <div>
                    <div className="text-[11px] font-bold text-gold uppercase tracking-wider mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-base font-bold text-dark hover:text-gold transition-colors">{value}</a>
                    ) : (
                      <div className="text-base font-semibold text-dark">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder with real image */}
            <div className="relative h-48 rounded-2xl overflow-hidden border border-gray-200">
              <Image src={imgs.gal2} alt="Dubai service areas" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-dark/70 flex items-center justify-center text-center p-6">
                <div>
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="font-bold text-white text-sm">Serving All Dubai Zones</div>
                  <div className="text-xs text-gray-300">Mobile teams — rapid dispatch</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* FORM */}
          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="bg-[#f8f7f4] p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-lg">
              {done ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-black text-dark mb-2">Message Received!</h3>
                  <p className="text-sm text-gray-500 mb-6">We will get back to you within 30 minutes.</p>
                  <button onClick={() => setDone(false)} className="gold-gradient text-dark font-bold text-xs px-6 py-2.5 rounded-xl shadow">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
                  <div className="text-xl font-black text-dark mb-1">Send a Direct Message</div>
                  <p className="text-xs text-gray-500 mb-4">We reply within 30 minutes during business hours.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1.5">Full Name *</label>
                      <input type="text" required placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-white outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1.5">Phone *</label>
                      <input type="tel" required placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-white outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1.5">Email Address</label>
                    <input type="email" placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-white outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1.5">Message / Inquiry *</label>
                    <textarea rows={4} required placeholder="Describe your marble condition or inquiry…"
                      className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-white outline-none focus:border-gold transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full gold-gradient text-dark font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm hover:-translate-y-0.5 transition-transform">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
