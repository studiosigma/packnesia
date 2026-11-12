import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function BlogSection({ articles, onSelectArticle }) {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Edukasi Bahan', 'Tips & Trik', 'Panduan Bisnis'];

  const filtered = activeCategory === 'Semua'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="blog-section" className="py-16 md:py-24 bg-[#FBFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-brand-orange rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                Packnesia <span className="text-brand-orange">Insights</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
              Tips & Wawasan Seputar Kemasan F&B
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-xl">
              Pelajari tren kemasan kuliner, pemilihan material ramah lingkungan, dan strategi branding visual yang meningkatkan omzet bisnis Anda.
            </p>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-brand-orange text-white shadow-orange-glow'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden relative">
                  <img
                    src={art.coverImage || '/images/hero-packaging.webp'}
                    alt={art.title}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="250"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-brand-orange text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {art.category}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{art.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime || '4 menit'}</span>
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-[#0E1D33] group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
                    <a
                      href={`/blog/${art.slug}/`}
                      onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                          e.preventDefault();
                          onSelectArticle(art);
                        }
                      }}
                    >
                      {art.title}
                    </a>
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-5 sm:px-6 pb-5 pt-0 flex items-center justify-between text-xs font-bold text-brand-orange">
                <a
                  href={`/blog/${art.slug}/`}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                      e.preventDefault();
                      onSelectArticle(art);
                    }
                  }}
                  className="group-hover:underline flex items-center gap-1"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

