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
            <SectionLabel arabic="معلومات التواصل">Direct Contact</SectionLabel>
            <h2 className="text-3xl font-black text-dark mb-2">We Are Here to Help</h2>
            <div className="text-brand-azure font-bold font-arabic text-sm mb-4">
              فريق خدمة عملاء دبي في خدمتكم على مدار الساعة
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Reach out via phone, email, or WhatsApp. Our Dubai customer service team responds within 30 minutes.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {[
                { icon: <Phone className="w-5 h-5 text-brand-amber" />,   label: "Phone / WhatsApp", ar: "الهاتف والواتساب", value: "+971 50 816 4087", href: "tel:+971508164087" },
                { icon: <MapPin className="w-5 h-5 text-brand-azure" />,  label: "Office Address",   ar: "عنوان المكتب",    value: "Villa 34, Street 27 B, Al Quoz 1, Dubai", href: null },
                { icon: <Mail className="w-5 h-5 text-brand-violet" />,    label: "Email Address",    ar: "البريد الإلكتروني", value: "info@dubaimarblepolishing.ae", href: "mailto:info@dubaimarblepolishing.ae" },
                { icon: <Clock className="w-5 h-5 text-brand-coral" />,   label: "Working Hours",    ar: "ساعات العمل",     value: "Mon – Sun: 9:00 AM – 6:00 PM", href: null },
              ].map(({ icon, label, ar, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-violet/20 flex items-center justify-center shrink-0 shadow-sm">{icon}</div>
                  <div>
                    <div className="text-[11px] font-bold text-brand-amber uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                      <span>{label}</span>
                      <span className="font-arabic text-gray-400 font-normal">({ar})</span>
                    </div>
                    {href ? (
                      <a href={href} className="text-base font-bold text-dark hover:text-brand-violet transition-colors">{value}</a>
                    ) : (
                      <div className="text-sm font-semibold text-dark">{value}</div>
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
                  <MapPin className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-bold text-white text-sm">Serving All Dubai Zones</div>
                  <div className="text-xs text-gray-300 font-arabic">خدمة سريعة لكافة مناطق دبي والإمارات</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* FORM */}
          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="bg-[#f8f7f4] p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-lg">
              {done ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-brand-azure mx-auto mb-4" />
                  <h3 className="text-xl font-black text-dark mb-2">Message Received! تم استلام رسالتك</h3>
                  <p className="text-sm text-gray-500 mb-6">We will get back to you within 30 minutes. سنتواصل معك خلال 30 دقيقة.</p>
                  <button onClick={() => setDone(false)} className="brand-gradient text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow">
                    Send Another Message · إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
                  <div className="text-xl font-black text-dark mb-1 flex items-center justify-between">
                    <span>Send a Direct Message</span>
                    <span className="font-arabic text-sm text-brand-amber font-normal">أرسل لنا رسالة مباشرة</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">We reply within 30 minutes during business hours.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1.5">Full Name * <span className="font-arabic font-normal">(الاسم الكامل)</span></label>
                      <input type="text" required placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-white outline-none focus:border-brand-amber transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1.5">Phone * <span className="font-arabic font-normal">(رقم الهاتف)</span></label>
                      <input type="tel" required placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-white outline-none focus:border-brand-amber transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1.5">Email Address <span className="font-arabic font-normal">(البريد الإلكتروني)</span></label>
                    <input type="email" placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-white outline-none focus:border-brand-amber transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1.5">Message / Inquiry * <span className="font-arabic font-normal">(تفاصيل الطلب أو الاستفسار)</span></label>
                    <textarea rows={4} required placeholder="Describe your marble condition or inquiry…"
                      className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 bg-white outline-none focus:border-brand-amber transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full brand-gradient text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm hover:-translate-y-0.5 transition-transform">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                    <span className="font-arabic font-normal border-l border-white/30 pl-2">إرسال الرسالة</span>
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
