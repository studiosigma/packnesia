import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Clock, Layers, MessageCircle, Sparkles, ChevronRight } from 'lucide-react';
import { products } from '../data/productsData';

export default function ProductModal({ productId, onClose, onOpenAdvisor }) {
  const product = products.find((p) => p.id === productId) || products[0];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.name || '');
  const [quantity, setQuantity] = useState('1000');

  useEffect(() => {
    if (product && product.sizes && product.sizes[0]) {
      setSelectedSize(product.sizes[0].name);
    }
  }, [productId, product]);

  useEffect(() => {
    if (!productId) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [productId, onClose]);

  if (!productId) return null;

  const currentTierPrice = product.tierPrices?.[quantity] || product.startPrice;

  const waMessage = encodeURIComponent(
    `Halo Packnesia, saya tertarik dengan produk ${product.title}.\n- Ukuran: ${selectedSize}\n- Estimasi Kebutuhan: ${quantity} pcs\n- Estimasi Harga Acuan: ${currentTierPrice}/pcs\nMohon info katalog lengkap, sampel, dan penawaran resminya ya!`
  );
  const waUrl = `https://wa.me/6287892251216?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 my-0 sm:my-8 max-h-[92vh] sm:max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Indicator */}
        <div className="pt-2.5 pb-1 sm:hidden bg-orange-50/70 flex justify-center">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100/80 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Image Section */}
        <div className="bg-gradient-to-br from-orange-50/70 via-gray-50 to-white p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-b border-gray-100 flex-shrink-0">
          <div className="w-28 h-28 sm:w-44 sm:h-44 rounded-2xl bg-white p-3 sm:p-4 shadow-md flex-shrink-0 flex items-center justify-center border border-orange-100">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100/70 text-brand-orange text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
              {product.category}
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#0E1D33]">
              {product.title}
            </h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
              {product.shortDesc}
            </p>

            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-gray-700 bg-white px-2.5 py-1.5 rounded-lg border border-gray-200">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>MOQ: {product.moq}</span>
              </span>
              <span className="flex items-center gap-1.5 text-gray-700 bg-white px-2.5 py-1.5 rounded-lg border border-gray-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Food Grade A+</span>
              </span>
              <span className="text-brand-orange font-bold text-xs sm:text-sm">
                Mulai {product.startPrice} /pcs
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto overscroll-contain flex-1">
          {/* Pilihan Ukuran */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
              Pilihan Ukuran Standar / Custom
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.sizes.map((sz) => (
                <button
                  key={sz.name}
                  onClick={() => setSelectedSize(sz.name)}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${selectedSize === sz.name
                    ? 'border-brand-orange bg-orange-50/50 shadow-sm text-brand-navy'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                >
                  <div>
                    <div className="font-semibold text-sm">{sz.name}</div>
                    <div className="text-xs text-gray-500">{sz.dim}</div>
                  </div>
                  {selectedSize === sz.name && (
                    <span className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Spesifikasi Bahan */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
              Material Berkualitas Pilihan
            </h4>
            <ul className="space-y-1.5">
              {product.materials.map((mat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opsi Finishing & Cetak */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
              Finishing & Teknik Cetak
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.finishing.map((f, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Estimasi Jumlah & Tiering Harga */}
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Estimasi Pesanan Anda</div>
                <div className="text-sm font-semibold text-gray-800">Makin banyak volume cetak, makin hemat harga satuan!</div>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {['500', '1000', '5000', '10000+'].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setQuantity(qty)}
                    className={`min-h-[40px] px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${quantity === qty
                      ? 'bg-[#0E1D33] text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                      }`}
                  >
                    {qty} pcs
                  </button>
                ))}
              </div>
            </div>

            {/* Live Tier Price Indicator */}
            <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block">
                  Estimasi Harga Tier ({quantity} pcs)
                </span>
                <span className="text-lg font-black text-[#0E1D33]">
                  {currentTierPrice} <span className="text-xs font-normal text-gray-500">/ pcs</span>
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider">
                ✓ Harga Grosir Resmi
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-gray-50/80 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              if (onOpenAdvisor) onOpenAdvisor();
            }}
            className="text-xs font-semibold text-gray-600 hover:text-brand-orange flex items-center gap-1 cursor-pointer order-2 sm:order-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Butuh saran kemasan yang pas? Tanya Packaging Advisor</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer order-1 sm:order-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Dapatkan Penawaran Harga</span>
          </a>
        </div>
      </div>
    </div>
  );
}

