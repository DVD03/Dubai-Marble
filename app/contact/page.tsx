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

      <section className="py-24 bg-[#F4F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* INFO */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <SectionLabel arabic="معلومات التواصل">Direct Contact</SectionLabel>
            <h2 className="text-3xl font-black text-[#1F2937] mb-2">We Are Here to Help</h2>
            <div className="text-[#123B6D] font-bold font-arabic text-sm mb-4">
              فريق خدمة عملاء دبي في خدمتكم على مدار الساعة
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
              Reach out via phone, email, or WhatsApp. Our Dubai customer service team responds within 30 minutes.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {[
                { icon: <Phone className="w-5 h-5 text-[#123B6D]" />,   label: "Phone / WhatsApp", ar: "الهاتف والواتساب", value: "+971 50 816 4087", href: "tel:+971508164087" },
                { icon: <MapPin className="w-5 h-5 text-[#123B6D]" />,  label: "Office Address",   ar: "عنوان المكتب",    value: "Villa 34, Street 27 B, Al Quoz 1, Dubai", href: null },
                { icon: <Mail className="w-5 h-5 text-[#123B6D]" />,    label: "Email Address",    ar: "البريد الإلكتروني", value: "info@dubaimarblepolishing.ae", href: "mailto:info@dubaimarblepolishing.ae" },
                { icon: <Clock className="w-5 h-5 text-[#123B6D]" />,   label: "Working Hours",    ar: "ساعات العمل",     value: "Mon – Sun: 9:00 AM – 6:00 PM", href: null },
              ].map(({ icon, label, ar, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FF] border border-[#E5E7EB] flex items-center justify-center shrink-0 shadow-sm">{icon}</div>
                  <div>
                    <div className="text-[11px] font-bold text-[#123B6D] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                      <span>{label}</span>
                      <span className="font-arabic text-[#6B7280] font-normal">({ar})</span>
                    </div>
                    {href ? (
                      <a href={href} className="text-base font-bold text-[#1F2937] hover:text-[#123B6D] transition-colors">{value}</a>
                    ) : (
                      <div className="text-sm font-semibold text-[#1F2937]">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="relative h-48 rounded-2xl overflow-hidden border border-[#E5E7EB]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785103358323!2d55.2295!3d25.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzA4LjUiTiA1NcKwMTMnNDYuMiJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
          </AnimatedSection>

          {/* FORM */}
          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E5E7EB] shadow-lg">
              {done ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-[#123B6D] mx-auto mb-4" />
                  <h3 className="text-xl font-black text-[#1F2937] mb-2">Message Received! تم استلام رسالتك</h3>
                  <p className="text-sm text-[#6B7280] mb-6">We will get back to you within 30 minutes. سنتواصل معك خلال 30 دقيقة.</p>
                  <button onClick={() => setDone(false)} className="bg-[#123B6D] hover:bg-[#0000CC] text-white font-bold text-xs px-6 py-2.5 rounded-lg shadow-sm transition-colors">
                    Send Another Message · إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
                  <div className="text-xl font-black text-[#1F2937] mb-1 flex items-center justify-between">
                    <span>Send a Direct Message</span>
                    <span className="font-arabic text-sm text-[#123B6D] font-normal">أرسل لنا رسالة مباشرة</span>
                  </div>
                  <p className="text-xs text-[#6B7280] mb-4">We reply within 30 minutes during business hours.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#344054] mb-1.5">Full Name * <span className="font-arabic font-normal">(الاسم الكامل)</span></label>
                      <input type="text" required placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl text-sm border border-[#D0D5DD] bg-white text-[#1F2937] outline-none focus:border-[#2F80ED] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#344054] mb-1.5">Phone * <span className="font-arabic font-normal">(رقم الهاتف)</span></label>
                      <input type="tel" required placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl text-sm border border-[#D0D5DD] bg-white text-[#1F2937] outline-none focus:border-[#2F80ED] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#344054] mb-1.5">Email Address <span className="font-arabic font-normal">(البريد الإلكتروني)</span></label>
                    <input type="email" placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[#D0D5DD] bg-white text-[#1F2937] outline-none focus:border-[#2F80ED] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#344054] mb-1.5">Message / Inquiry * <span className="font-arabic font-normal">(تفاصيل الطلب أو الاستفسار)</span></label>
                    <textarea rows={4} required placeholder="Describe your marble condition or inquiry…"
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[#D0D5DD] bg-white text-[#1F2937] outline-none focus:border-[#2F80ED] transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-[#123B6D] hover:bg-[#0000CC] text-white font-bold py-3.5 rounded-lg shadow-sm flex items-center justify-center gap-2 text-sm transition-colors">
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
