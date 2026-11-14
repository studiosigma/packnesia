import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/productsData';

export default function ProductsSection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filterCategories = [
    { id: 'all', label: `Semua (${products.length})` },
    { id: 'food', label: '🍱 Food & Box' },
    { id: 'cup', label: '🥤 Cup Minuman' },
    { id: 'bakery', label: '🎂 Cake & Donut' },
    { id: 'sticker', label: '🏷️ Stiker Label' },
    { id: 'coffee', label: '☕ Kopi & Pouch' },
    { id: 'bag', label: '🛍️ Paper Bag' },
    { id: 'perfume', label: '💄 Box Parfum' },
    { id: 'souvenir', label: '🎁 Souvenir & Hampers' }
  ];

  const displayedProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => {
      if (activeCategory === 'food') return ['food-box', 'paper-bowl', 'fastfood-pizza-box', 'martabak-box'].includes(p.id);
      if (activeCategory === 'cup') return ['paper-cup', 'plastic-cup'].includes(p.id);
      if (activeCategory === 'bakery') return p.id === 'cake-box';
      if (activeCategory === 'sticker') return p.id === 'packaging-sticker';
      if (activeCategory === 'coffee') return p.id === 'coffee-packaging';
      if (activeCategory === 'bag') return p.id === 'paper-bag';
      if (activeCategory === 'perfume') return p.id === 'perfume-box';
      if (activeCategory === 'souvenir') return ['souvenir-box', 'custom-box'].includes(p.id);
      return p.id === activeCategory;
    });

  return (
    <section id="products-section" className="section-lazy py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-brand-orange rounded-full" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange">
              Our Products
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Complete Packaging for Your Business
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 font-normal">
            Pilihan terlengkap kemasan custom foodgrade siap cetak dengan bahan terbaik dan harga pabrik.
          </p>
        </div>

        {/* Mobile & Desktop Horizontal Quick Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar scroll-smooth">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95 flex-shrink-0 ${activeCategory === cat.id
                ? 'bg-[#0E1D33] text-white shadow-md'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid (4-col desktop, 3-col tablet, 2-col mobile — balanced alignment with Custom card) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {displayedProducts.map((product, idx) => {
            const isMobileFullOdd = activeCategory === 'all' && displayedProducts.length % 2 === 1 && idx === displayedProducts.length - 1;
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product.id)}
                className={`group relative bg-[#F6F7F9] hover:bg-white rounded-2xl p-3 sm:p-4 transition-all duration-300 border border-gray-100/80 hover:border-orange-200/80 hover:shadow-xl hover:-translate-y-1 flex justify-between cursor-pointer ${isMobileFullOdd ? 'col-span-2 sm:col-span-1 flex-row sm:flex-col items-center sm:items-stretch gap-3.5 sm:gap-0' : 'flex-col'
                  }`}
              >
                <div className={isMobileFullOdd ? 'flex sm:block items-center gap-3.5 flex-1 min-w-0' : ''}>
                  {/* Product Image Container */}
                  <div className={`rounded-xl overflow-hidden bg-white/80 flex items-center justify-center p-2.5 sm:p-3 relative flex-shrink-0 ${isMobileFullOdd ? 'w-20 h-20 sm:w-full sm:h-auto sm:aspect-square sm:mb-3' : 'aspect-[4/3] sm:aspect-square w-full mb-2.5 sm:mb-3'
                    }`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
                      width="220"
                      height="220"
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Subtle hover badge */}
                    <span className="hidden sm:inline-block absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-orange/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                      Lihat Harga
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block truncate">
                      {product.category}
                    </span>
                    <a
                      href={`/produk/${product.id}/`}
                      onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                          e.preventDefault();
                          onSelectProduct(product.id);
                        }
                      }}
                      className="font-extrabold text-xs sm:text-sm md:text-base text-[#0E1D33] group-hover:text-brand-orange transition-colors block truncate mt-0.5"
                    >
                      {product.title}
                    </a>
                    {isMobileFullOdd && (
                      <span className="text-[11px] text-gray-500 sm:hidden block mt-0.5 truncate">
                        Mulai {product.startPrice} • MOQ {product.moq}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price Peek & MOQ Footer */}
                <div className={`${isMobileFullOdd ? 'sm:mt-2.5 sm:pt-2.5 sm:border-t sm:border-gray-200/60 flex-shrink-0' : 'mt-2.5 pt-2.5 border-t border-gray-200/60'} group-hover:border-orange-100 flex items-center justify-between gap-1.5`}>
                  <div className={isMobileFullOdd ? 'hidden sm:block min-w-0' : 'min-w-0'}>
                    <span className="text-[11px] sm:text-xs font-extrabold text-[#0E1D33] block truncate">
                      Mulai {product.startPrice}
                    </span>
                    <span className="text-[10px] text-gray-500 block truncate">
                      MOQ {product.moq}
                    </span>
                  </div>
                  <span className="w-8 h-8 sm:w-7 sm:h-7 rounded-full bg-white border border-gray-200/80 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white text-gray-500 flex items-center justify-center flex-shrink-0 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}

          {/* Symmetrical Bespoke CTA Card on "Semua" tab so there are 0 orphan or cramped slots across mobile/tablet/desktop */}
          {activeCategory === 'all' && (
            <div
              onClick={() => onSelectProduct('custom-box')}
              className="col-span-2 sm:col-span-2 lg:col-span-3 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#0E1D33] via-[#152847] to-[#0E1D33] text-white flex flex-col justify-between cursor-pointer group hover:shadow-xl transition-all border border-slate-700/80 relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-brand-orange/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-full">
                <div className="max-w-lg">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-orange-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3 text-brand-orange" />
                    <span>Custom Dieline Gratis</span>
                  </span>
                  <h3 className="font-extrabold text-base sm:text-xl text-white leading-snug">
                    Butuh Bentuk, Sekat, atau Ukuran Kemasan Khusus Brand Anda?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                    Konsultasikan kebutuhan custom box, hardbox hampers, atau kemasan menu khusus Anda dengan tim desainer & produksi kami. Free 3D mockup sebelum cetak!
                  </p>
                </div>
                <span className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 min-h-[44px] rounded-full bg-brand-orange group-hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-orange-glow whitespace-nowrap flex-shrink-0 transition-all">
                  <span>Konsultasi Dieline</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-8 text-center">
          <div className="text-xs sm:text-sm text-gray-500 inline-flex flex-wrap items-center justify-center gap-2 bg-[#F8F9FA] px-4 py-2.5 rounded-2xl sm:rounded-full border border-gray-200/60">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
            <span>Ingin cetak partai besar (&gt;10.000 pcs) atau cek ongkir kargo?</span>
            <button
              onClick={() => onSelectProduct('food-box')}
              className="font-bold text-brand-orange hover:underline cursor-pointer"
            >
              Simulasikan Tier Harga &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

