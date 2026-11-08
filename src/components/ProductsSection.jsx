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
    <section id="products-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-brand-orange rounded-full" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange">
              Our Products
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Complete Packaging for Your Business
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-normal">
            Pilihan terlengkap kemasan custom foodgrade siap cetak dengan bahan terbaik dan harga pabrik.
          </p>
        </div>

        {/* Mobile & Desktop Horizontal Quick Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 sm:mb-8 no-scrollbar scroll-smooth">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95 flex-shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#0E1D33] text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className="group relative bg-[#F6F7F9] hover:bg-white rounded-2xl p-3 sm:p-3.5 transition-all duration-300 border border-transparent hover:border-orange-200/80 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              {/* Product Image Container */}
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/70 flex items-center justify-center p-2 mb-3 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  width="180"
                  height="180"
                  className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-300"
                />

                {/* Subtle hover badge */}
                <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-orange/90 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-md">
                  Detail
                </span>
              </div>

              {/* Title and Arrow link */}
              <div className="pt-1 border-t border-gray-200/50 group-hover:border-orange-100 flex items-center justify-between">
                <a
                  href={`/produk/${product.id}/`}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                      e.preventDefault();
                      onSelectProduct(product.id);
                    }
                  }}
                  className="font-bold text-xs sm:text-sm text-[#0E1D33] group-hover:text-brand-orange transition-colors truncate"
                >
                  {product.title}
                </a>
                <span className="text-gray-400 group-hover:text-brand-orange transition-colors flex-shrink-0 ml-1">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-gray-500 inline-flex items-center gap-2 bg-[#F8F9FA] px-4 py-2 rounded-full border border-gray-200/60">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Butuh ukuran atau bentuk custom khusus brand Anda?</span>
            <button
              onClick={() => onSelectProduct('custom-box')}
              className="font-bold text-brand-orange hover:underline cursor-pointer"
            >
              Konsultasikan Dieline Gratis &rarr;
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}

