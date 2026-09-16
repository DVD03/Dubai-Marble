"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, CalendarCheck, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (p: string) => pathname === p;
  const svcActive = pathname.startsWith("/services");

  const navLinkCls = (active: boolean) =>
    `relative px-3.5 py-2 rounded-lg text-[13.5px] font-semibold transition-colors ${
      active ? "text-gold font-bold" : "text-gray-200 hover:text-gold"
    }`;

  return (
    <>
      <ScrollProgress />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0d1a]/95 backdrop-blur-xl shadow-2xl border-b border-gold/30"
            : "bg-[#0d0d1a] border-b border-gold/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-4">

          {/* FULL OFFICIAL METALLIC GOLD LOGO */}
          <Link href="/" className="flex items-center shrink-0 group py-1.5">
            <Image
              src="/logo.png"
              alt="Dubai Marble Polishing"
              width={280}
              height={86}
              priority
              className="h-14 sm:h-16 md:h-18 w-auto object-contain filter drop-shadow-[0_2px_16px_rgba(201,168,76,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_4px_24px_rgba(201,168,76,0.7)]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: "/",          label: "Home"     },
              { href: "/about",     label: "About"    },
              { href: "/gallery",   label: "Gallery"  },
              { href: "/reviews",   label: "Reviews"  },
              { href: "/faqs",      label: "FAQs"     },
              { href: "/blog",      label: "Blog"     },
              { href: "/contact",   label: "Contact"  },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className={navLinkCls(isActive(href))}>
                {label}
                {isActive(href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full gold-gradient shadow-[0_0_8px_rgba(201,168,76,0.8)]"
                  />
                )}
              </Link>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <Link href="/services" className={navLinkCls(svcActive)}>
                Services <ChevronDown className="inline w-3.5 h-3.5 ml-0.5" />
                {svcActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full gold-gradient"
                  />
                )}
              </Link>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{  opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-72 bg-[#13132a] border border-gold/30 rounded-2xl p-2 shadow-2xl"
                  >
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-[11px] font-bold text-gold uppercase tracking-wider border-b border-white/10 mb-1"
                    >
                      All Services Overview →
                    </Link>
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] transition-colors ${
                          pathname === `/services/${s.slug}`
                            ? "bg-gold/15 text-gold font-bold"
                            : "text-gray-300 hover:bg-gold/10 hover:text-gold font-medium"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA */}
          <Link
            href="/booking"
            className="hidden lg:flex gold-gradient text-dark font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-105 transition-all items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" /> Book Inspection
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gold focus:outline-none"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-gold" />}
          </button>
        </div>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{  opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#0d0d1a] border-t border-gold/20 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {[
                  { href: "/",        label: "Home"     },
                  { href: "/services",label: "Services" },
                  { href: "/about",   label: "About Us" },
                  { href: "/gallery", label: "Gallery"  },
                  { href: "/reviews", label: "Reviews"  },
                  { href: "/faqs",    label: "FAQs"     },
                  { href: "/blog",    label: "Blog"     },
                  { href: "/contact", label: "Contact"  },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-4 rounded-xl text-base font-bold transition-colors ${
                      isActive(href)
                        ? "text-gold bg-gold/15"
                        : "text-white hover:text-gold"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="tel:+971522774953"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-gold/40 text-white font-bold text-sm bg-white/5"
                  >
                    <Phone className="w-4 h-4 text-gold" /> +971 52 277 4953
                  </a>
                  <Link
                    href="/booking"
                    onClick={() => setMobileOpen(false)}
                    className="gold-gradient text-dark font-extrabold text-center py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-xl"
                  >
                    <CalendarCheck className="w-4 h-4" /> Book Free Inspection
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
