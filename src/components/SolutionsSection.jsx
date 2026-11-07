import React from 'react';
import { Gem, Palette, Zap, Handshake, ArrowRight, Sparkles } from 'lucide-react';
import AdvisorBotIcon from './AdvisorBotIcon';

export default function SolutionsSection({ onOpenAdvisor, onSelectSolution }) {
  const features = [
    {
      icon: Gem,
      title: 'Premium Quality',
      desc: 'Bahan foodgrade sertifikasi internasional, kokoh, dan tahan lama.'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      desc: 'Dieline presisi dengan cetakan warna CMYK tajam & finishing mewah.'
    },
    {
      icon: Zap,
      title: 'Fast Production',
      desc: 'Lead time singkat 7-12 hari kerja dengan kapasitas skala pabrik.'
    },
    {
      icon: Handshake,
      title: 'Trusted Partner',
      desc: 'Lebih dari 1.000 brand F&B mempercayakan kemasannya pada kami.'
    }
  ];

  return (
    <section id="solutions-section" className="py-16 md:py-24 bg-[#FBFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-column Grid matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. Left Feature Card ("Small Packaging. Big Impact.") */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-lg group min-h-[300px] lg:min-h-[420px] flex flex-col justify-end p-7">
            {/* Background Image */}
            <img
              src="/images/solutions-latte.webp"
              alt="Small Packaging Big Impact"
              loading="lazy"
              decoding="async"
              width="400"
              height="420"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Dark Gradient Overlay for high text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            {/* Handwritten overlay typography matching reference */}
            <div className="relative z-10">
              <span className="font-handwriting text-3xl sm:text-4xl text-white font-bold leading-tight drop-shadow-md block">
                Small Packaging.
              </span>
              <span className="font-handwriting text-4xl sm:text-5xl text-brand-orange font-bold leading-tight drop-shadow-md block mt-1">
                Big Impact.
              </span>
              <p className="mt-3 text-xs sm:text-sm text-gray-200/90 leading-relaxed font-normal">
                Setiap detail sentuhan kemasan adalah perpanjangan rasa dan nilai estetika brand Anda.
              </p>
            </div>
          </div>

          {/* 2. Middle Content ("Tailored for Your Business") */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-brand-orange rounded-full" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                  Packaging <span className="text-brand-orange">Solutions</span>
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1D33] tracking-tight">
                Tailored for Your Business
              </h2>

              {/* Subtitle text matching reference */}
              <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether you run a coffee shop, bakery, or food business, we provide custom packaging that elevates your brand and keeps your product perfect.
              </p>

              {/* 4 Feature Badges with clean icons */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 text-center">
                {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center group/feature p-2 rounded-xl hover:bg-orange-50/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#F6F7F9] border border-gray-100 flex items-center justify-center text-[#0E1D33] group-hover/feature:border-brand-orange group-hover/feature:text-brand-orange transition-all mb-2.5">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-bold text-[#0E1D33] leading-tight">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick solution categories chips */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider self-center mr-1">
                Cocok Untuk:
              </span>
              {['Coffee Shop', 'Bakery', 'Cloud Kitchen', 'Snack & UMKM'].map((c, i) => (
                <button
                  key={i}
                  onClick={() => onSelectSolution(c)}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-brand-orange transition-colors cursor-pointer"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Right Card ("Packaging Advisor") */}
          <div className="lg:col-span-3 bg-[#F6F7F9] rounded-3xl p-6 sm:p-8 border border-gray-100 flex flex-col items-center justify-between text-center relative overflow-hidden group">
            {/* Top decorative subtle pattern */}
            <div className="w-full flex flex-col items-center">
              
              {/* Advisor Robot Mascot Illustration */}
              <div className="w-20 h-20 mb-4 rounded-2xl bg-white shadow-sm border border-gray-200/80 p-2 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <AdvisorBotIcon className="w-full h-full" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#0E1D33]">
                Packaging Advisor
              </h3>

              {/* Subtitle matching reference */}
              <p className="mt-2.5 text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed">
                Tell us your business needs, and we'll recommend the perfect packaging for you.
              </p>
            </div>

            {/* Orange Button "Try Advisor ->" */}
            <div className="w-full mt-6">
              <button
                onClick={onOpenAdvisor}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold tracking-wide shadow-orange-glow transition-all active:scale-95 cursor-pointer"
              >
                <span>Try Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

