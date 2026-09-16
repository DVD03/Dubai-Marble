"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { servicesData } from "@/data/services";

export default function BookingForm({ isDark = false }: { isDark?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const fieldCls = `w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all duration-200 ${
    isDark
      ? "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-gold focus:bg-white/10"
      : "bg-gray-50 border-gray-200 text-dark placeholder-gray-400 focus:border-gold focus:bg-white"
  }`;
  const labelCls = `block text-[11px] font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-white/50" : "text-gray-500"}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1400);
  };

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl border shadow-xl ${
        isDark
          ? "bg-dark-sec/90 backdrop-blur-lg border-gold/25"
          : "bg-white border-gray-200"
      }`}
    >
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: .92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-dark"}`}>
              Inspection Request Received!
            </h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto mb-6">
              Our Dubai technician will call you within 30 minutes to confirm your free inspection.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="brand-gradient text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow hover:scale-105 transition-transform"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
          >
            <h3 className={`text-xl font-bold mb-1 flex items-center justify-between ${isDark ? "text-white" : "text-dark"}`}>
              <span>Schedule Free Inspection</span>
              <span className="text-xs font-normal text-gold font-arabic">حجز معاينة مجانية</span>
            </h3>
            <p className={`text-xs mb-6 ${isDark ? "text-gold" : "text-gray-500"}`}>
              100% Free · No Obligation · Fixed Price Quote <span className="font-arabic font-normal">| مجاني بالكامل وبدون التزام</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelCls}>Your Name <span className="font-arabic lowercase">الاسم</span> *</label>
                <input type="text" required placeholder="Ahmed Al Mansouri / Name" className={fieldCls} />
              </div>
              <div>
                <label className={labelCls}>Phone / WhatsApp <span className="font-arabic lowercase">رقم الهاتف</span> *</label>
                <input type="tel" required placeholder="+971 50 816 4087" className={fieldCls} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelCls}>Preferred Date <span className="font-arabic lowercase">التاريخ المفضل</span> *</label>
                <input type="date" required className={fieldCls} />
              </div>
              <div>
                <label className={labelCls}>Dubai Area <span className="font-arabic lowercase">المنطقة</span></label>
                <input type="text" placeholder="e.g. Dubai Marina, Al Quoz, Palm Jumeirah" className={fieldCls} />
              </div>
            </div>

            <div className="mb-5">
              <label className={labelCls}>Service Required <span className="font-arabic lowercase">الخدمة المطلوبة</span></label>
              <select required className={`${fieldCls} ${isDark ? "bg-dark-card" : ""}`}>
                <option value="">Select a service… / اختر الخدمة</option>
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full brand-gradient text-white font-bold py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-gold/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <CalendarCheck className="w-4 h-4" />
              )}
              {status === "loading" ? "Submitting…" : "Book Free Inspection Now | احجز المعاينة الآن"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
