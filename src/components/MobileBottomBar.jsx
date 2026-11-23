import React from 'react';
import { Package, ArrowLeftRight, MessageCircle, FileText, SlidersHorizontal } from 'lucide-react';

export default function MobileBottomBar({ onOpenConsultation, onOpenAdvisor }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const waUrl = 'https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20tertarik%20konsultasi%20custom%20packaging%20untuk%20brand%20saya';

  return (
    <aside
      aria-label="Mobile Quick Navigation Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'calc(0.4rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center justify-between px-2 pt-1.5 pb-1 gap-1 max-w-md mx-auto">
        {/* Katalog Button */}
        <button
          onClick={() => scrollToSection('products-section')}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-xl text-gray-600 hover:text-brand-orange active:scale-95 transition-all cursor-pointer flex-1 min-w-0"
          aria-label="Lihat Katalog Produk"
        >
          <Package className="w-5 h-5 text-gray-700" />
          <span className="text-[10px] font-bold text-gray-700 mt-0.5 truncate">Katalog</span>
        </button>

        {/* Transformasi Button */}
        <button
          onClick={() => scrollToSection('transformation-section')}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-xl text-gray-600 hover:text-brand-orange active:scale-95 transition-all cursor-pointer flex-1 min-w-0"
          aria-label="Lihat Transformasi Kemasan"
        >
          <ArrowLeftRight className="w-5 h-5 text-brand-orange" />
          <span className="text-[10px] font-bold text-brand-orange mt-0.5 truncate">Hasil</span>
        </button>

        {/* Kalkulator Spesifikasi Button */}
        <button
          onClick={onOpenAdvisor}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-xl text-gray-600 hover:text-brand-orange active:scale-95 transition-all cursor-pointer flex-1 min-w-0"
          aria-label="Kalkulator Rekomendasi Spesifikasi"
        >
          <SlidersHorizontal className="w-5 h-5 text-[#0E1D33]" />
          <span className="text-[10px] font-bold text-[#0E1D33] mt-0.5 truncate">Spesifikasi</span>
        </button>

        {/* Form Simulasi */}
        <button
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-xl text-gray-600 hover:text-brand-orange active:scale-95 transition-all cursor-pointer flex-1 min-w-0"
          aria-label="Isi Form Konsultasi Harga"
        >
          <FileText className="w-5 h-5 text-gray-700" />
          <span className="text-[10px] font-bold text-gray-700 mt-0.5 truncate">Simulasi</span>
        </button>

        {/* WhatsApp Direct CTA Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat WhatsApp CS Packnesia"
          className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold shadow-sm active:scale-95 transition-all ml-1 flex-shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
          <span className="whitespace-nowrap">Chat WA</span>
        </a>
      </div>
    </aside>
  );
}

