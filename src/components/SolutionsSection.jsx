import React from 'react';
import { Gem, Palette, Zap, Handshake, ArrowRight } from 'lucide-react';

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
    <section id="solutions-section" className="section-lazy py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. Left Feature Card */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-gray-200/60 group min-h-[300px] lg:min-h-[420px] flex flex-col justify-end p-7">
            <img
              src="/images/solutions-latte.webp"
              alt="Small Packaging Big Impact"
              loading="lazy"
              decoding="async"
              width="400"
              height="420"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="text-2xl sm:text-3xl text-white font-extrabold tracking-tight leading-tight block">
                Small Packaging.
              </span>
              <span className="text-2xl sm:text-3xl text-brand-orange font-extrabold tracking-tight leading-tight block mt-0.5">
                Big Impact.
              </span>
              <p className="mt-3 text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                Setiap detail kemasan memperkuat nilai produk dan kesan brand Anda di tangan pelanggan.
              </p>
            </div>
          </div>

          {/* 2. Middle Content ("Tailored for Your Business") */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
                Packaging Solutions
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1D33] tracking-tight">
                Tailored for Your Business
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Dari kedai kopi, toko roti, hingga layanan delivery resto, kami memproduksi kemasan custom yang menjaga kualitas makanan sekaligus memperkuat identitas merek.
              </p>

              {/* 4 Feature Badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-2"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#F6F7F9] border border-gray-200/80 flex items-center justify-center text-[#0E1D33] mb-2.5">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
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
                  className="px-3 py-1.5 min-h-[36px] text-xs font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Right Card ("Kalkulator Spesifikasi Kemasan") */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 flex flex-col items-center justify-between text-center">
            <div className="w-full flex flex-col items-center">
              <div className="w-14 h-14 mb-4 rounded-xl bg-[#0E1D33]/5 flex items-center justify-center p-2.5">
                <img src="/images/packnesia-icon.webp" alt="Packnesia" className="w-full h-full object-contain" />
              </div>

              <h3 className="text-xl font-extrabold text-[#0E1D33]">
                Kalkulator Kemasan
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed">
                Tentukan material dan spesifikasi yang sesuai lewat 4 pertanyaan singkat seputar bisnis Anda.
              </p>
            </div>

            <div className="w-full mt-6">
              <button
                onClick={onOpenAdvisor}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Cek Rekomendasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

