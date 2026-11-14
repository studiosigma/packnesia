import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onExploreProducts, onWatchProcess }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      titleLine1: 'Packaging',
      titleLine2: 'That Builds',
      titleHighlight: 'Your Brand.',
      subtitle: 'Solusi cetak kemasan makanan & minuman foodgrade untuk brand F&B Indonesia, dari konsep hingga kirim.',
      image: '/images/hero-packaging.webp',
      badge: 'Solusi Kemasan F&B No. 1',
      stats: '1,000+ Brand F&B Terpercaya'
    },
    {
      id: 1,
      titleLine1: 'Eco-Friendly',
      titleLine2: 'Packaging For',
      titleHighlight: 'Future Leaders.',
      subtitle: 'Bahan kraft foodgrade bersertifikasi ramah lingkungan & 100% biodegradable.',
      image: '/images/hero-packaging.webp',
      badge: '100% Food-Grade Certified',
      stats: 'Bahan Ramah Lingkungan FSC'
    },
    {
      id: 2,
      titleLine1: 'Direct Factory',
      titleLine2: 'Best Pricing &',
      titleHighlight: 'Fast Delivery.',
      subtitle: 'Kapasitas produksi hingga 500.000 pcs per bulan dengan kontrol kualitas ketat.',
      image: '/images/hero-packaging.webp',
      badge: 'Produksi Cepat 7-10 Hari',
      stats: 'Pengiriman Seluruh Indonesia'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-b from-[#FAF7F2]/60 via-[#FDFDFE] to-white">
      {/* Subtle ambient background glow */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left pt-1 lg:pt-0 z-10">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-brand-orange text-[11px] sm:text-xs font-semibold tracking-wide w-fit mb-3 sm:mb-5 animate-in fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Title matching reference typography */}
            <h1 className="text-[34px] sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-[#0E1D33]">
              <span className="block">{slide.titleLine1}</span>
              <span className="block">{slide.titleLine2}</span>
              <span className="block text-brand-orange">{slide.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-gray-600 max-w-md font-normal leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4">
              {/* Primary Navy Button */}
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 min-h-[44px] rounded-full bg-[#0E1D33] hover:bg-[#1A2E4F] text-white text-sm sm:text-[15px] font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Video Button */}
              <button
                onClick={onWatchProcess}
                className="inline-flex items-center gap-2 px-2.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-full text-[#0E1D33] hover:text-brand-orange text-xs sm:text-[14.5px] font-semibold transition-colors group cursor-pointer"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-current flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch Our Process</span>
              </button>
            </div>

            {/* Customer Rating Proof Badge */}
            <div className="mt-4 sm:mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img loading="lazy" decoding="async" width="32" height="32" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatar-1.webp" alt="Client 1" />
                <img loading="lazy" decoding="async" width="32" height="32" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatar-3.webp" alt="Client 2" />
                <img loading="lazy" decoding="async" width="32" height="32" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatar-2.webp" alt="Client 3" />
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 font-bold">
                  <span className="text-amber-400">★★★★★</span>
                  <span className="text-[#0E1D33] font-black ml-0.5">4.9 / 5.0</span>
                </div>
                <span className="text-gray-500 font-medium">dari 1.248+ Ulasan Klien F&B</span>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200/70 flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-5 text-[11px] sm:text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                <span>Free 3D Mockup</span>
              </div>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                <span>Sampel Sebelum Cetak</span>
              </div>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                <span>Garansi Kualitas</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Hero Showcase Banner) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-950/5 border border-white/60 bg-white">
              {/* Image banner from reference */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-amber-50/20">
                <img
                  src={slide.image}
                  alt="Packnesia Custom F&B Packaging Showcase"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width="680"
                  height="425"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/80 text-xs font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Ready Stock & Custom Order</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls & Pagination Dots */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            aria-label="Previous Slide"
            className="w-10 h-10 rounded-full bg-white shadow-sm hover:bg-gray-50 text-gray-700 hover:text-brand-orange flex items-center justify-center transition-all border border-gray-200/80 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="min-w-[36px] min-h-[40px] flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-[#0E1D33]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            aria-label="Next Slide"
            className="w-10 h-10 rounded-full bg-white shadow-sm hover:bg-gray-50 text-gray-700 hover:text-brand-orange flex items-center justify-center transition-all border border-gray-200/80 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

