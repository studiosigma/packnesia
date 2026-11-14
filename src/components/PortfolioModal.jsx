import React, { useEffect } from 'react';
import { X, MapPin, Layers, Package, MessageCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

export default function PortfolioModal({ itemId, onClose }) {
  useEffect(() => {
    if (!itemId) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [itemId, onClose]);

  if (!itemId) return null;

  const item = portfolioItems.find((p) => p.id === itemId) || portfolioItems[0];

  const waMessage = encodeURIComponent(
    `Halo Packnesia, saya tertarik dengan portofolio kemasan untuk brand "${item.brand}" (${item.title}). Bisakah saya mendapatkan spesifikasi dan sampel serupa untuk brand saya?`
  );
  const waUrl = `https://wa.me/6287892251216?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-2xl overflow-hidden border border-gray-100 my-0 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile bottom-sheet pull handle */}
        <div className="sm:hidden absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-10 h-1 rounded-full bg-white/80 shadow-xs pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Preview Image */}
        <div className="relative aspect-[16/10] w-full flex-shrink-0 bg-stone-100 overflow-hidden">
          <img
            src={item.image}
            alt={item.brand}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-extrabold uppercase tracking-wider mb-1.5 inline-block">
              {item.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight text-white">{item.brand}</h3>
            <p className="text-xs text-gray-200 mt-1 flex items-center gap-1.5 flex-wrap">
              <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
              <span>{item.location}</span>
              <span>•</span>
              <span>Volume: {item.volume}</span>
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-5 sm:p-7 space-y-4 overflow-y-auto overscroll-contain flex-1">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
              Konsep & Cerita Kemasan
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100 space-y-2">
            <div className="flex items-start gap-2.5">
              <Layers className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-500 font-medium block">Material yang Digunakan:</span>
                <span className="text-xs font-bold text-gray-900">{item.material}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
              Tag Kategori:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-semibold">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-orange-glow transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Buat Kemasan Seperti Brand Ini</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

