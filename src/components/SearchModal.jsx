import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, ArrowRight, Package } from 'lucide-react';
import { products } from '../data/productsData';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filtered = useMemo(() => {
    if (!query.trim()) return products;
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.materials.some((m) => m.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 md:pt-24 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-orange flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Cari kemasan: Paper Cup, Food Box, Kraft, Valve, Cake..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm sm:text-base outline-none text-gray-800 placeholder-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              Tidak menemukan kemasan dengan kata kunci "{query}". Coba kata kunci lain atau konsultasikan langsung.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onClose();
                  onSelectProduct(item.id);
                }}
                className="p-3 rounded-2xl hover:bg-orange-50/60 transition-colors flex items-center gap-3.5 cursor-pointer border border-transparent hover:border-orange-200/50 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 p-1 flex-shrink-0 flex items-center justify-center border border-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#0E1D33] group-hover:text-brand-orange">
                      {item.title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{item.shortDesc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

