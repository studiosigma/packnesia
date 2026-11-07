import React from 'react';
import { Instagram, Linkedin, Youtube, ArrowUp, Lock, Edit3 } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onSelectProduct, onOpenConsultation, onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1728] text-white pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row matching reference */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="light" />
          </div>

          {/* Nav Links Row */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-gray-300">
            <a href="#products-section" className="hover:text-brand-orange transition-colors">
              Products
            </a>
            <a href="#solutions-section" className="hover:text-brand-orange transition-colors">
              Solutions
            </a>
            <a href="#portfolio-section" className="hover:text-brand-orange transition-colors">
              Portfolio
            </a>
            <a href="#blog-section" className="hover:text-brand-orange transition-colors">
              Blog
            </a>
            <a href="#faq-section" className="hover:text-brand-orange transition-colors">
              FAQ
            </a>
            <a href="#why-section" className="hover:text-brand-orange transition-colors">
              About Us
            </a>
            <a href="#coverage-section" className="hover:text-brand-orange transition-colors">
              Pengiriman
            </a>
            <button
              onClick={onOpenConsultation}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={onOpenAdmin}
              className="text-xs text-orange-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-brand-orange transition-colors cursor-pointer ml-2 border border-orange-500/30"
              title="Akses Admin Portal CMS untuk menulis artikel"
            >
              <Edit3 className="w-3 h-3" />
              <span>Admin Blog</span>
            </button>
          </nav>

          {/* Social Icons & Slogan */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white text-gray-300 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white text-gray-300 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white text-gray-300 flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Slogan */}
            <div className="text-left sm:text-right border-l sm:border-l-0 sm:border-r border-white/10 sm:pr-0 pl-3 sm:pl-0">
              <div className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight">
                Better Packaging.
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-tight text-brand-orange leading-tight">
                Stronger Brand.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Indonesian Flag bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Packnesia. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Made for Indonesian Businesses</span>
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
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
