"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SearchBarProps {
  isMobile?: boolean;
}

interface SearchResult {
  type: "service" | "page";
  title: string;
  arabic?: string;
  description: string;
  link: string;
}

export default function SearchBar({ isMobile = false }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const pages = [
    { title: "Home", arabic: "الرئيسية", description: "Main landing page", link: "/" },
    { title: "About Us", arabic: "من نحن", description: "Company information and history", link: "/about" },
    { title: "Gallery", arabic: "معرض الأعمال", description: "Project showcase and portfolio", link: "/gallery" },
    { title: "Reviews", arabic: "التقييمات", description: "Customer testimonials and feedback", link: "/reviews" },
    { title: "FAQs", arabic: "الأسئلة الشائعة", description: "Frequently asked questions", link: "/faqs" },
    { title: "Blog", arabic: "المدونة", description: "Articles and news", link: "/blog" },
    { title: "Contact", arabic: "تواصل معنا", description: "Get in touch with us", link: "/contact" },
    { title: "Booking", arabic: "حجز معاينة", description: "Schedule a free inspection", link: "/booking" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const filteredResults: SearchResult[] = [];

    // Search through services
    servicesData.forEach((service) => {
      if (
        service.title.toLowerCase().includes(searchTerm) ||
        service.arTitle.includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.subtitle.toLowerCase().includes(searchTerm)
      ) {
        filteredResults.push({
          type: "service",
          title: service.title,
          arabic: service.arTitle,
          description: service.subtitle,
          link: `/services/${service.slug}`,
        });
      }
    });

    // Search through pages
    pages.forEach((page) => {
      if (
        page.title.toLowerCase().includes(searchTerm) ||
        page.arabic?.includes(searchTerm) ||
        page.description.toLowerCase().includes(searchTerm)
      ) {
        filteredResults.push({
          type: "page",
          title: page.title,
          arabic: page.arabic,
          description: page.description,
          link: page.link,
        });
      }
    });

    setResults(filteredResults.slice(0, 8)); // Limit to 8 results
  }, [query]);

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div ref={searchRef} className={isMobile ? "w-full" : "relative"}>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all ${
          isOpen
            ? "bg-[#123B6D] text-white shadow-lg"
            : "bg-[#F7F9FC] text-[#263238] hover:bg-[#E5E7EB] border border-[#E5E7EB]"
        }`}
      >
        <Search className="w-4 h-4" />
        {!isMobile && <span className="text-sm font-semibold hidden sm:inline">Search</span>}
      </button>

      {/* Search Dropdown */}
      {isOpen && (
        <div className={`bg-white border border-[#E5E7EB] rounded-2xl shadow-2xl z-50 overflow-hidden ${
          isMobile ? "relative mt-2 w-full" : "absolute top-full right-0 mt-2 w-[90vw] sm:w-96 max-w-md"
        }`}>
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search services, pages..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#123B6D] focus:border-transparent"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#263238]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {query === "" ? (
              <div className="p-6 text-center">
                <Search className="w-8 h-8 text-[#6B7280] mx-auto mb-3" />
                <p className="text-sm text-[#6B7280]">Start typing to search...</p>
                <p className="text-xs text-[#9CA3AF] mt-1">ابدأ الكتابة للبحث...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-sm text-[#6B7280]">No results found</p>
                <p className="text-xs text-[#9CA3AF] mt-1">لم يتم العثور على نتائج</p>
              </div>
            ) : (
              <div className="p-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.link}
                    onClick={handleResultClick}
                    className={`block p-3 rounded-xl transition-all ${
                      pathname === result.link
                        ? "bg-[#F7F9FC] border border-[#123B6D]/30"
                        : "hover:bg-[#F7F9FC]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[#123B6D] uppercase tracking-wider">
                            {result.type}
                          </span>
                          <span className="text-sm font-bold text-[#263238] truncate">
                            {result.title}
                          </span>
                        </div>
                        {result.arabic && (
                          <p className="text-xs text-[#6B7280] font-arabic mb-1">
                            {result.arabic}
                          </p>
                        )}
                        <p className="text-xs text-[#6B7280] line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#123B6D] shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-[#F7F9FC] border-t border-[#E5E7EB] text-center">
            <p className="text-xs text-[#6B7280]">
              Press <kbd className="px-1.5 py-0.5 bg-white border border-[#E5E7EB] rounded text-[10px]">Esc</kbd> to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}