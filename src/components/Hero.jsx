import React, { useState, useEffect } from 'react';
import { ArrowRight, Layers, ChevronLeft, ChevronRight, Check } from 'lucide-react';

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
      eyebrow: 'Pabrik & Vendor Kemasan Custom'
    },
    {
      id: 1,
      titleLine1: 'Eco-Friendly',
      titleLine2: 'Packaging For',
      titleHighlight: 'Future Leaders.',
      subtitle: 'Bahan kraft foodgrade bersertifikasi ramah lingkungan & aman bersentuhan langsung dengan makanan.',
      image: '/images/hero-eco-kraft.webp',
      eyebrow: 'Material Kraft & Ivory Food-Grade'
    },
    {
      id: 2,
      titleLine1: 'Direct Factory',
      titleLine2: 'Best Pricing &',
      titleHighlight: 'Fast Delivery.',
      subtitle: 'Kapasitas produksi hingga 500.000 pcs per bulan dengan kontrol kualitas ketat dan pengiriman nasional.',
      image: '/images/hero-factory-suite.webp',
      eyebrow: 'Harga Langsung Pabrik • Produksi 7–12 Hari'
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
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-[#FAF9F7] border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left z-10">
            {/* Editorial uppercase eyebrow */}
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
              {slide.eyebrow}
            </p>

            {/* Main Title */}
            <h1 className="text-[34px] sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.08] text-[#0E1D33]">
              <span className="block">{slide.titleLine1}</span>
              <span className="block">{slide.titleLine2}</span>
              <span className="block text-brand-orange">{slide.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 max-w-md font-normal leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[46px] rounded-full bg-[#0E1D33] hover:bg-[#1A2E4F] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onWatchProcess}
                className="inline-flex items-center gap-2 px-4 py-3 min-h-[46px] rounded-full border border-gray-300 bg-white hover:border-[#0E1D33] text-[#0E1D33] text-sm font-semibold transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4 text-gray-600" />
                <span>Alur Produksi</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="mt-6 sm:mt-8 pt-5 border-t border-gray-200/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-600 font-medium">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Gratis 3D Mockup</span>
              </div>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Sampel Sebelum Cetak</span>
              </div>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Garansi Cetak</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Clean Product Photography) */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 bg-white">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
                <img
                  src={slide.image}
                  alt="Packnesia Custom F&B Packaging Showcase"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width="680"
                  height="425"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls & Pagination Dots */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            aria-label="Previous Slide"
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-50 text-gray-700 hover:text-brand-orange flex items-center justify-center transition-colors border border-gray-200 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="min-w-[32px] min-h-[36px] flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-7 bg-[#0E1D33]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            aria-label="Next Slide"
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-50 text-gray-700 hover:text-brand-orange flex items-center justify-center transition-colors border border-gray-200 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

