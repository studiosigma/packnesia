import React from 'react';
import { Package, Sparkles, MessageCircle, FileText, Bot } from 'lucide-react';

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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'calc(0.4rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center justify-between px-2.5 pt-2 pb-1 gap-1.5 max-w-md mx-auto">
        {/* Katalog Button */}
        <button
          onClick={() => scrollToSection('products-section')}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-gray-600 hover:text-brand-orange active:scale-95 transition-all cursor-pointer min-w-[54px]"
          aria-label="Lihat Katalog Produk"
        >
          <Package className="w-5 h-5 text-gray-700" />
          <span className="text-[10px] font-bold text-gray-700 mt-0.5">Katalog</span>
        </button>

        {/* Transformasi Button */}
        <button
          onClick={() => scrollToSection('transformation-section')}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-gray-600 hover:text-brand-orange active:scale-95 transition-all cursor-pointer min-w-[54px]"
          aria-label="Lihat Transformasi Kemasan"
        >
          <Sparkles className="w-5 h-5 text-brand-orange" />
          <span className="text-[10px] font-bold text-brand-orange mt-0.5">Before/After</span>
        </button>

        {/* AI Advisor Button */}
        <button
          onClick={onOpenAdvisor}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-gray-600 hover:text-brand-orange active:scale-95 transition-all cursor-pointer min-w-[54px]"
          aria-label="Konsultasi AI Advisor"
        >
          <Bot className="w-5 h-5 text-[#0E1D33]" />
          <span className="text-[10px] font-bold text-[#0E1D33] mt-0.5">Advisor</span>
        </button>

        {/* Form Simulasi */}
        <button
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-gray-600 hover:text-brand-orange active:scale-95 transition-all cursor-pointer min-w-[54px]"
          aria-label="Isi Form Konsultasi Harga"
        >
          <FileText className="w-5 h-5 text-gray-700" />
          <span className="text-[10px] font-bold text-gray-700 mt-0.5">Simulasi</span>
        </button>

        {/* WhatsApp Direct CTA Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat WhatsApp CS Packnesia"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#1FB855] text-white text-xs font-bold shadow-md shadow-emerald-500/25 active:scale-95 transition-all ml-1"
        >
          <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
          <span className="whitespace-nowrap tracking-wide">Chat WA</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
        </a>
      </div>
    </aside>
  );
}

