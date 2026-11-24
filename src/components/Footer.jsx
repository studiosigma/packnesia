import React from 'react';
import { MessageCircle, ArrowUp, MapPin, Clock, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1728] text-white pt-14 pb-24 md:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row matching reference */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="light" />
          </div>

          {/* Nav Links Row */}
          <nav className="w-full lg:w-auto grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-1 sm:gap-y-2 text-xs sm:text-sm font-medium text-gray-300">
            <a href="#products-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Produk
            </a>
            <a href="#solutions-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Solusi
            </a>
            <a href="#portfolio-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Portofolio
            </a>
            <a href="#transformation-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Transformasi
            </a>
            <a href="#bundling-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Paket Usaha
            </a>
            <a href="#samples-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Hasil Cetak
            </a>
            <a href="#blog-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Blog
            </a>
            <a href="#faq-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              FAQ
            </a>
            <a href="#why-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Tentang Kami
            </a>
            <a href="#coverage-section" className="py-1.5 sm:py-0 hover:text-brand-orange transition-colors">
              Pengiriman
            </a>
            <button
              onClick={onOpenConsultation}
              className="py-1.5 sm:py-0 text-left hover:text-brand-orange transition-colors cursor-pointer"
            >
              Kontak
            </button>
          </nav>

          {/* Direct Official Contact & Slogan */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-8">
            <a
              href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20ingin%20konsultasi%20cetak%20kemasan%20untuk%20brand%20saya"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat WhatsApp Packnesia"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-full bg-white/10 hover:bg-brand-orange text-white text-xs font-bold border border-white/10 transition-all w-fit"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp CS Resmi</span>
            </a>

            {/* Slogan */}
            <div className="text-left sm:text-right border-l sm:border-l-0 sm:border-r border-white/10 sm:pr-0 pl-3 sm:pl-0">
              <div className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight">
                Kemasan Berkualitas.
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-tight text-brand-orange leading-tight">
                Brand Lebih Kuat.
              </div>
            </div>
          </div>

        </div>

        {/* Operational Info Row (Workshop Location, Operating Hours, Direct Contact) */}
        <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Lokasi Operasional &amp; Produksi</span>
              <span className="text-gray-400">Jakarta Barat, DKI Jakarta (Pengiriman Seluruh Indonesia)</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Jam Operasional Layanan</span>
              <span className="text-gray-400">Senin–Sabtu 08.00–17.00 WIB</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Konsultasi &amp; Pemesanan</span>
              <a
                href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20ingin%20konsultasi%20cetak%20kemasan%20untuk%20brand%20saya"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                WhatsApp: +62 878-9225-1216
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Indonesian Flag bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Packnesia. Hak cipta dilindungi.
          </div>

          <div className="flex items-center gap-2">
            <span>Dibuat untuk Pelaku Usaha Indonesia</span>
            {/* Indonesian flag icon */}
            <span className="inline-flex overflow-hidden rounded-[2px] shadow-xs border border-white/20 w-4 h-3 flex-col">
              <span className="w-full h-1/2 bg-[#FF0000]" />
              <span className="w-full h-1/2 bg-[#FFFFFF]" />
            </span>
          </div>

          {/* Scroll to Top button */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
