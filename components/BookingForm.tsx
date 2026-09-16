"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { servicesData } from "@/data/services";

interface BookingFormProps {
  isDark?: boolean;
  mode?: "hero" | "full";
}

export default function BookingForm({ isDark = false, mode = "hero" }: BookingFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const fieldCls = `w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all duration-200 ${
    isDark
      ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-400 focus:border-[#c9a96e] focus:bg-slate-900 focus:ring-0"
      : "bg-white border-[#d6cfc5] text-[#2c2a27] placeholder-slate-400 focus:border-[#4a6fa5] focus:bg-white focus:ring-0"
  }`;
  const labelCls = `block text-[11.5px] font-bold uppercase tracking-wider mb-1.5 ${
    isDark ? "text-[#d9d2ca]" : "text-[#3d3a35]"
  }`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1200);
  };

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl border shadow-lg relative ${
        isDark
          ? "bg-slate-900/95 backdrop-blur-xl border-slate-800 text-white"
          : "bg-[#fafaf8] border-[#e4e0da] text-[#2c2a27]"
      }`}
    >
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-[#4a6fa5] mx-auto mb-4" />
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-[#2c2a27]"}`}>
              Booking Request Received!
            </h3>
            <div className="text-[#8a6c3e] font-arabic text-sm mb-3 font-semibold">
              تم استلام طلب المعاينة والحجز بنجاح
            </div>
            <p className="text-sm text-[#8a8278] max-w-sm mx-auto mb-6">
              Our Dubai stone specialist will contact you within 30 minutes to confirm your scheduled time and date.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-[#4a6fa5] hover:bg-[#3b5a8a] text-white text-xs font-bold px-6 py-3 rounded-xl shadow transition-colors"
            >
              Submit Another Request · تقديم طلب آخر
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <h3 className={`text-xl sm:text-2xl font-black mb-1 flex items-center justify-between ${isDark ? "text-white" : "text-[#2c2a27]"}`}>
                <span>{mode === "hero" ? "Schedule a Booking" : "Book Marble & Stone Service"}</span>
                <span className="text-xs sm:text-sm font-normal text-gold font-arabic">حجز موعد خدمة</span>
              </h3>
              <p className={`text-xs ${isDark ? "text-gray-300" : "text-[#8a8278]"}`}>
                Free Inspection &amp; Exact Fixed Quotation <span className="font-arabic font-normal text-gold">| معاينة مجانية وتقديم عرض سعر فوري</span>
              </p>
            </div>

            {mode === "hero" ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>
                      Name <span className="text-gold font-arabic font-normal">الاسم</span> *
                    </label>
                    <input type="text" required placeholder="Full Name" className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Phone Number <span className="text-gold font-arabic font-normal">رقم الهاتف</span> *
                    </label>
                    <input type="tel" required placeholder="+971 52 277 4953" className={fieldCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>
                      Inspection Date <span className="text-gold font-arabic font-normal">تاريخ المعاينة</span> *
                    </label>
                    <input type="date" required className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Area / Zip Code <span className="text-gold font-arabic font-normal">المنطقة</span> *
                    </label>
                    <input type="text" required placeholder="e.g. Dubai Marina / Downtown" className={fieldCls} />
                  </div>
                </div>

                <div className="mb-5">
                  <label className={labelCls}>
                    Service <span className="text-gold font-arabic font-normal">نوع الخدمة</span> *
                  </label>
                  <select required className={`${fieldCls} ${isDark ? "bg-[#16182a]" : "bg-[#fafaf8]"}`}>
                    <option value="">Select Service / اختر الخدمة</option>
                    {servicesData.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>
                      First Name <span className="text-gold font-arabic font-normal">الاسم الأول</span> *
                    </label>
                    <input type="text" required placeholder="First Name" className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Last Name <span className="text-gold font-arabic font-normal">اسم العائلة</span> *
                    </label>
                    <input type="text" required placeholder="Last Name" className={fieldCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>
                      Phone Number <span className="text-gold font-arabic font-normal">رقم الهاتف</span> *
                    </label>
                    <input type="tel" required placeholder="+971 52 277 4953" className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Email Address <span className="text-gold font-arabic font-normal">البريد الإلكتروني</span> *
                    </label>
                    <input type="email" required placeholder="name@example.com" className={fieldCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>
                      Inspection Date <span className="text-gold font-arabic font-normal">تاريخ المعاينة</span> *
                    </label>
                    <input type="date" required className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Inspection Time <span className="text-gold font-arabic font-normal">وقت المعاينة</span> *
                    </label>
                    <input type="time" required className={fieldCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="sm:col-span-2">
                    <label className={labelCls}>
                      Address / Villa / Building <span className="text-gold font-arabic font-normal">العنوان</span> *
                    </label>
                    <input type="text" required placeholder="Street address, villa #, building" className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Zip / Area Code <span className="text-gold font-arabic font-normal">الرمز البريدي</span> *
                    </label>
                    <input type="text" required placeholder="Area Code" className={fieldCls} />
                  </div>
                </div>

                <div className="mb-4">
                  <label className={labelCls}>
                    Service Category <span className="text-gold font-arabic font-normal">نوع الخدمة</span> *
                  </label>
                  <select required className={`${fieldCls} ${isDark ? "bg-[#16182a]" : "bg-[#fafaf8]"}`}>
                    <option value="">Select Service / اختر الخدمة</option>
                    {servicesData.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                    <option value="other-technical">Other Technical Services / خدمات الصيانة الفنية العامة</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className={labelCls}>
                    Project Details &amp; Marble Requirements <span className="text-gold font-arabic font-normal">تفاصيل المشروع</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your marble condition, square meter area, stains, or any specific requirements..."
                    className={fieldCls}
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#4a6fa5] hover:bg-[#3b5a8a] active:bg-[#2c3e5e] text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-sm hover:shadow transition-colors flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <CalendarCheck className="w-5 h-5" />
              )}
              <span>{status === "loading" ? "Submitting Booking…" : "Book Now · احجز الآن"}</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

