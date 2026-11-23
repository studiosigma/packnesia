import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

export default function PortfolioSection({ onSelectPortfolio, onViewAll }) {
  return (
    <section id="portfolio-section" className="section-lazy py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
              Portofolio Klien
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
              Dipercaya Berbagai Brand F&amp;B Indonesia
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] rounded-full border border-gray-200 hover:border-[#0E1D33] text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0E1D33] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>Lihat Galeri Hasil Cetak</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 Portfolio Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 md:gap-5 no-scrollbar scroll-smooth">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPortfolio(item.id)}
              className="w-[68%] flex-shrink-0 snap-start sm:w-auto group relative rounded-xl overflow-hidden bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-stone-100 relative">
                <img
                  src={item.image}
                  alt={item.brand}
                  loading="lazy"
                  decoding="async"
                  width="240"
                  height="240"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />

                {/* Hover overlay with quick view */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                  <div className="text-white text-xs">
                    <span className="font-bold flex items-center gap-1 text-white">
                      <span>Lihat Spesifikasi</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Label info */}
              <div className="p-3 bg-white flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block truncate">
                    {item.category}
                  </span>
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#0E1D33] truncate mt-0.5">
                    {item.brand}
                  </h3>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span>{item.location}</span>
                  <span className="text-gray-400 group-hover:text-brand-orange transition-colors">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

