import React from 'react';
import { Rocket, Headphones, Tag, Truck, MessageCircle, ArrowRight } from 'lucide-react';

export default function WhyPacknesiaSection({ onOpenConsultation }) {
  const benefits = [
    {
      icon: Rocket,
      title: 'End-to-End Solution',
      subtitle: 'From design to delivery',
      detail: 'Mulai dari pembuatan dieline, 3D mockup gratis, approval sampel fisik, hingga cetak presisi.'
    },
    {
      icon: Headphones,
      title: 'Expert Consultation',
      subtitle: 'Get the best recommendation',
      detail: 'Konsultan packaging berpengalaman siap mendampingi pemilihan bahan foodgrade paling tepat.'
    },
    {
      icon: Tag,
      title: 'Competitive Price',
      subtitle: 'High quality, better value',
      detail: 'Harga langsung dari pabrik (direct-manufacturer) dengan skema diskon bertingkat untuk bisnis Anda.'
    },
    {
      icon: Truck,
      title: 'Nationwide Delivery',
      subtitle: 'Reach your customers anywhere in Indonesia',
      detail: 'Pengiriman aman terasuransi ke seluruh pulau di Indonesia dengan mitra logistik kargo terpercaya.'
    }
  ];

  return (
    <section id="why-section" className="py-16 md:py-24 bg-[#FAF7F2]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Benefits (8 cols) + Right CTA Box (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Why Packnesia & 4 Features */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* Eyebrow matching reference */}
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-brand-orange rounded-full" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                  Why <span className="text-brand-orange">Packnesia?</span>
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
                Your Reliable Packaging Partner
              </h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xl">
                Kami berkomitmen memberikan standar kualitas kemasan terbaik agar brand makanan dan minuman Anda tampil istimewa di mata konsumen.
              </p>
            </div>

            {/* 4 Feature Columns Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left group"
                  >
                    {/* Clean Outline Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center text-[#0E1D33] group-hover:text-brand-orange group-hover:border-brand-orange group-hover:scale-105 transition-all mb-3.5">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-sm text-[#0E1D33] leading-snug">
                      {item.title}
                    </h3>

                    {/* Subtitle matching reference */}
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Navy CTA Box ("Let's Create Your Perfect Packaging") */}
          <div id="cta-section" className="lg:col-span-4 bg-[#0E1D33] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[260px]">
            
            {/* Paper Airplane doodle graphic on top/bottom right */}
            <div className="absolute right-4 bottom-4 pointer-events-none opacity-25">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 70L90 10L60 75L40 45L10 70Z" stroke="#EE5D26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 45L90 10" stroke="#EE5D26" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M20 75C25 65 30 55 40 45" stroke="#FFA579" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug text-white">
                Let's Create<br />Your Perfect Packaging
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                Contact us for free consultation.
              </p>
            </div>

            {/* WhatsApp Green CTA Button matching reference */}
            <div className="relative z-10 mt-6 pt-4">
              <a
                href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20ingin%20konsultasi%20pembuatan%20custom%20packaging%20untuk%20brand%20saya"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all active:scale-95 cursor-pointer"
              >
                {/* Official WhatsApp style icon */}
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

