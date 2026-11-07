import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Clock, Layers, MessageCircle, Sparkles, ChevronRight } from 'lucide-react';
import { products } from '../data/productsData';

export default function ProductModal({ productId, onClose, onOpenAdvisor }) {
  if (!productId) return null;

  const product = products.find((p) => p.id === productId) || products[0];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.name || '');
  const [quantity, setQuantity] = useState('1000');

  useEffect(() => {
    if (product && product.sizes && product.sizes[0]) {
      setSelectedSize(product.sizes[0].name);
    }
  }, [productId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const waMessage = encodeURIComponent(
    `Halo Packnesia, saya tertarik dengan produk ${product.title}.\n- Ukuran: ${selectedSize}\n- Estimasi Kebutuhan: ${quantity} pcs\nMohon info katalog lengkap dan penawaran harganya.`
  );
  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Image Section */}
        <div className="bg-gradient-to-br from-orange-50/70 via-gray-50 to-white p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border-b border-gray-100">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-white p-4 shadow-md flex-shrink-0 flex items-center justify-center border border-orange-100">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100/70 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E1D33]">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {product.shortDesc}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>MOQ: {product.moq}</span>
              </span>
              <span className="flex items-center gap-1.5 text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Food Grade A+</span>
              </span>
              <span className="text-brand-orange font-bold text-sm">
                Mulai {product.startPrice} /pcs
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
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

          {/* Estimasi Jumlah */}
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Estimasi Pesanan Anda</div>
              <div className="text-sm font-semibold text-gray-800">Makin banyak jumlah cetak, makin hemat harga satuan!</div>
            </div>
            <div className="flex items-center gap-2">
              {['500', '1000', '5000', '10000+'].map((qty) => (
                <button
                  key={qty}
                  onClick={() => setQuantity(qty)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${quantity === qty
                    ? 'bg-[#0E1D33] text-white shadow'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                    }`}
                >
                  {qty}
                </button>
              ))}
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

