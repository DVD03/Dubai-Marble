"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { imgs } from "@/data/images";
import AnimatedSection from "./AnimatedSection";

interface GalleryItem {
  src: string;
  title: string;
  location: string;
  category: string;
}

const items: GalleryItem[] = [
  { src: imgs.gal1, title: "Italian Carrara Floor Polishing",     location: "Dubai Marina Villa",   category: "floor"    },
  { src: imgs.gal2, title: "Hotel Lobby Diamond Restoration",     location: "Downtown Hotel",        category: "floor"    },
  { src: imgs.gal3, title: "Kitchen Island Acid Etch Removal",    location: "Palm Jumeirah Penthouse",category: "counter"  },
  { src: imgs.gal4, title: "Crema Marfil Crack Resin Repair",     location: "Emirates Hills",        category: "repair"   },
  { src: imgs.gal5, title: "Deep Cleaning & Grout Rejuvenation",  location: "JBR Apartment",         category: "cleaning" },
  { src: imgs.gal6, title: "Travertine Polishing & Sealing",      location: "Arabian Ranches Villa", category: "floor"    },
];

const filters = [
  { id: "all",      label: "All Projects"    },
  { id: "floor",    label: "Floor Polishing" },
  { id: "counter",  label: "Countertops"     },
  { id: "repair",   label: "Crack Repair"    },
  { id: "cleaning", label: "Deep Cleaning"   },
];

export default function GalleryView() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const visible = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              active === f.id
                ? "gold-gradient text-dark shadow-md scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:border-gold hover:text-gold"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visible.map((item, i) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: .94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{  opacity: 0, scale: .94 }}
              transition={{ duration: .35, delay: i * 0.07 }}
              onClick={() => setLightbox(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="img-card aspect-[4/3] relative">
                <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                <div className="img-card-overlay" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-dark/60 backdrop-blur-sm p-3 rounded-full">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-xs font-bold uppercase tracking-wider">
                    {filters.find((f) => f.id === item.category)?.label}
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="font-bold text-dark text-[15px]">{item.title}</div>
                <div className="text-xs text-gold font-semibold mt-1">{item.location}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: .88 }}
              animate={{ scale: 1 }}
              exit={{ scale: .88 }}
              className="relative max-w-3xl w-full bg-dark-card rounded-3xl overflow-hidden shadow-2xl border border-gold/25"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10]">
                <Image src={lightbox.src} alt={lightbox.title} fill className="object-cover" sizes="80vw" />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-white text-lg">{lightbox.title}</h3>
                  <p className="text-gold text-sm mt-1">{lightbox.location} · Dubai Marble Polishing</p>
                </div>
                <button onClick={() => setLightbox(null)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
