import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function BlogSection({ articles, onSelectArticle }) {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Edukasi Bahan', 'Tips & Trik', 'Panduan Bisnis'];

  const filtered = activeCategory === 'Semua'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="blog-section" className="section-lazy py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
            Artikel &amp; Edukasi
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Tips &amp; Wawasan Seputar Kemasan F&amp;B
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Panduan memilih material kertas foodgrade, teknik cetak, serta pertimbangan HPP untuk bisnis kuliner Anda.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#0E1D33] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className="group bg-white rounded-xl overflow-hidden border border-gray-200/80 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Clean Thumbnail Image without overlaid badge */}
                <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                  <img
                    src={art.coverImage || '/images/hero-packaging.webp'}
                    alt={art.title}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="250"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                {/* Content info */}
                <div className="p-5 sm:p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block mb-2">
                    {art.category}
                  </span>

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

              {/* Bottom Card Meta & Action */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-gray-400">
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

                <a
                  href={`/blog/${art.slug}/`}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                      e.preventDefault();
                      onSelectArticle(art);
                    }
                  }}
                  className="font-bold text-brand-orange flex items-center gap-1"
                >
                  <span>Baca</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

