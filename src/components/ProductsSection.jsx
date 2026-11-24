import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/productsData';

export default function ProductsSection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filterCategories = [
    { id: 'all', label: `Semua (${products.length})` },
    { id: 'food', label: 'Food & Box' },
    { id: 'cup', label: 'Cup Minuman' },
    { id: 'bakery', label: 'Cake & Donut' },
    { id: 'sticker', label: 'Stiker Label' },
    { id: 'coffee', label: 'Kopi & Pouch' },
    { id: 'bag', label: 'Paper Bag' },
    { id: 'perfume', label: 'Box Parfum' },
    { id: 'souvenir', label: 'Souvenir & Hampers' }
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
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
            Katalog Kemasan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Pilihan Kemasan Lengkap untuk Bisnis Anda
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 font-normal">
            Solusi kemasan custom foodgrade siap cetak langsung dari pabrik dengan kualitas terjaga.
          </p>
        </div>

        {/* Horizontal Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar scroll-smooth">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 ${activeCategory === cat.id
                ? 'bg-[#0E1D33] text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {displayedProducts.map((product, idx) => {
            const isMobileFullOdd = activeCategory === 'all' && displayedProducts.length % 2 === 1 && idx === displayedProducts.length - 1;
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product.id)}
                className={`group relative bg-[#F8F9FA] hover:bg-white rounded-xl p-3 sm:p-4 transition-all duration-200 border border-gray-200/80 hover:border-gray-300 hover:shadow-md flex justify-between cursor-pointer ${isMobileFullOdd ? 'col-span-2 sm:col-span-1 flex-row sm:flex-col items-center sm:items-stretch gap-3.5 sm:gap-0' : 'flex-col'
                  }`}
              >
                <div className={isMobileFullOdd ? 'flex sm:block items-center gap-3.5 flex-1 min-w-0' : ''}>
                  {/* Product Image Container */}
                  <div className={`rounded-lg overflow-hidden bg-stone-100 relative flex-shrink-0 ${isMobileFullOdd ? 'w-20 h-20 sm:w-full sm:h-auto sm:aspect-square sm:mb-3' : 'aspect-[4/3] sm:aspect-square w-full mb-2.5 sm:mb-3'
                    }`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
                      width="220"
                      height="220"
                      className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300"
                    />
                  </div>

                  {/* Category & Title */}
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block truncate">
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
                <div className={`${isMobileFullOdd ? 'sm:mt-2.5 sm:pt-2.5 sm:border-t sm:border-gray-200/70 flex-shrink-0' : 'mt-2.5 pt-2.5 border-t border-gray-200/70'} flex items-center justify-between gap-1.5`}>
                  <div className={isMobileFullOdd ? 'hidden sm:block min-w-0' : 'min-w-0'}>
                    <span className="text-[11px] sm:text-xs font-extrabold text-[#0E1D33] block truncate">
                      Mulai {product.startPrice}
                    </span>
                    <span className="text-[10px] text-gray-500 block truncate">
                      MOQ {product.moq}
                    </span>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-white border border-gray-200 group-hover:bg-[#0E1D33] group-hover:border-[#0E1D33] group-hover:text-white text-gray-500 flex items-center justify-center flex-shrink-0 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}

          {/* Balanced Custom Request Banner filling 3 columns */}
          {activeCategory === 'all' && (
            <div
              onClick={() => onSelectProduct('custom-box')}
              className="col-span-2 sm:col-span-2 lg:col-span-3 rounded-xl p-6 sm:p-8 bg-[#0E1D33] text-white flex flex-col justify-center cursor-pointer group hover:bg-[#132540] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="max-w-lg">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange block mb-2">
                    Layanan Dieline Custom
                  </span>
                  <h3 className="font-extrabold text-lg sm:text-xl text-white leading-snug">
                    Butuh Bentuk, Sekat, atau Ukuran Kemasan Khusus Brand Anda?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                    Diskusikan kebutuhan custom box, hardbox hampers, atau kemasan menu khusus dengan tim desain & produksi kami. Termasuk 3D mockup sebelum cetak.
                  </p>
                </div>
                <span className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-brand-orange group-hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-colors">
                  <span>Konsultasi Dieline</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

