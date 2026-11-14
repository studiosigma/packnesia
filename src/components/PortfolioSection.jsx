import React from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

export default function PortfolioSection({ onSelectPortfolio, onViewAll }) {
  return (
    <section id="portfolio-section" className="section-lazy py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with split title and "View More Portfolio ->" link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-brand-orange rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                Our <span className="text-brand-orange">Portfolio</span>
              </span>
            </div>

            {/* Headline matching reference */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
              Trusted by 1,000+ F&B Brands
            </h2>
          </div>

          {/* Right Action: "Lihat Galeri Hasil Cetak ->" */}
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] rounded-full border border-gray-200 hover:border-brand-orange text-xs sm:text-sm font-semibold text-gray-700 hover:text-brand-orange transition-all duration-200 group self-start md:self-auto cursor-pointer"
          >
            <span>Lihat Galeri Hasil Cetak</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5 Portfolio Cards: Horizontal swipe carousel on mobile, 3/5-col grid on tablet/desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 md:gap-5 no-scrollbar scroll-smooth">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPortfolio(item.id)}
              className="w-[68%] flex-shrink-0 snap-start sm:w-auto group relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with high aspect ratio */}
              <div className="aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-stone-100 relative">
                <img
                  src={item.image}
                  alt={item.brand}
                  loading="lazy"
                  decoding="async"
                  width="240"
                  height="240"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />

                {/* Hover overlay with quick view */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div className="text-white text-xs">
                    <span className="font-bold flex items-center gap-1 text-orange-300">
                      <span>Lihat Spesifikasi</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Label info */}
              <div className="p-3 bg-white flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block truncate">
                    {item.category}
                  </span>
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#0E1D33] truncate mt-0.5">
                    {item.brand}
                  </h3>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span>{item.location}</span>
                  <span className="text-gray-300 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

