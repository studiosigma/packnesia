import React from 'react';
import { Rocket, Headphones, Tag, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function WhyPacknesiaSection({ onOpenConsultation }) {
  const benefits = [
    {
      icon: Rocket,
      title: 'End-to-End Solution',
      subtitle: 'Dari pembuatan dieline hingga pengiriman',
    },
    {
      icon: Headphones,
      title: 'Expert Consultation',
      subtitle: 'Rekomendasi material foodgrade paling efisien',
    },
    {
      icon: Tag,
      title: 'Competitive Price',
      subtitle: 'Harga langsung pabrik dengan skema volume',
    },
    {
      icon: Truck,
      title: 'Nationwide Delivery',
      subtitle: 'Pengiriman kargo aman ke seluruh Indonesia',
    }
  ];

  return (
    <section id="why-section" className="section-lazy py-12 md:py-20 bg-[#FAF9F7] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Benefits (8 cols) + Right CTA Box (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Why Packnesia & 4 Features */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
                Keunggulan Pabrik
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
                Your Reliable Packaging Partner
              </h2>
              <p className="mt-2.5 text-sm text-gray-500 max-w-xl">
                Standar produksi offset dan finishing presisi untuk memastikan kemasan produk kuliner Anda tampil meyakinkan.
              </p>
            </div>

            {/* 4 Feature Columns Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0E1D33] mb-3.5">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    <h3 className="font-extrabold text-sm text-[#0E1D33] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Architectural Navy CTA Box */}
          <div id="cta-section" className="lg:col-span-4 bg-[#0E1D33] rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="mb-4">
                <Logo variant="light" className="h-6 w-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug text-white">
                Siap Memproduksi Kemasan Brand Anda?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                Hubungi tim spesialis kami untuk diskusi ukuran, bahan foodgrade, dan penawaran harga pabrik.
              </p>
            </div>

            <div className="mt-6 pt-4 space-y-2.5">
              <a
                href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20ingin%20konsultasi%20pembuatan%20custom%20packaging%20untuk%20brand%20saya"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {onOpenConsultation && (
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center py-2.5 px-5 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Isi Form Penawaran
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

